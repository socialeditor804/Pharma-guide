import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json({ limit: "10mb" }));

const PORT = 3000;

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    })
  : null;

// Real Live URL Fetch and GxP structured parser endpoint!
app.post("/api/import-sop", async (req, res) => {
  const { url, pastedText, categoryId } = req.body;

  if (!ai) {
    return res.status(500).json({
      error: "Gemini API Key is not configured on the server. Please check Settings > Secrets.",
    });
  }

  try {
    let rawText = pastedText || "";

    if (url) {
      console.log(`[Importer] Fetching webpage HTML from: ${url}`);
      const fetchResponse = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });

      if (!fetchResponse.ok) {
        return res.status(400).json({
          error: `Failed to fetch webpage. Server responded with status: ${fetchResponse.status}`,
        });
      }
      rawText = await fetchResponse.text();
    }

    if (!rawText || rawText.trim().length === 0) {
      return res.status(400).json({
        error: "No content was provided. Provide a valid URL or paste some text/HTML.",
      });
    }

    console.log(`[Importer] Sending payload to Gemini for calibration extraction...`);

    // Run through Gemini 3.5 Flash to extract the actual GxP calibration values
    const prompt = `You are an expert pharmaceutical Quality Assurance (QA) and regulatory compliance advisor.
Analyze the raw webpage/HTML/text of a GxP calibration protocol, SOP, or guide.
Your absolute goal is to extract the actual procedures, standard preparations, calculations, step-by-step methods, calibration points, frequencies, and tolerances mentioned in the raw page content. Do NOT invent generic placeholders; you MUST use the real data points (e.g. standard preparations of 0.2125 g Potassium Hydrogen Phthalate to get 1000ppm carbon solution, NPOC, multiple injection, quarterly calibration) found in the page!

Target Technical Division Category: ${categoryId || "General Quality Control"}

Format the results into a high-fidelity, comprehensive GxP Standard Operating Procedure (SOP).
The 'content' field in the JSON response must be beautifully formatted with Markdown headers, lists, and bold text. The structure of the content should adhere strictly to this layout:

* **SOP Purpose & Scope**
Describe the purpose of this SOP and its scope based on the equipment or topic.

* **Personnel & Responsibilities**
Who must perform, verify, and audit this GxP task.

* **Mandatory Operational Procedure**
Deeply detailed step-by-step instructions. Write down the precise numbers, calculations, standard preparations (e.g., Mother solution, dilutions, zero ppb water blank), and equipment UI menus/clicks (e.g., sample table, "START", NPOC, calibration points) extracted from the raw page.

* **Critical Quality Attributes (CQAs) & Controls**
The GxP frequencies (e.g. Quarterly in a year), record keeping, and audit compliance controls.

Raw webpage text/HTML:
${rawText.slice(0, 30000)} // limit payload to prevent token bloat
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "The official GxP title deduced for the document (e.g. Calibration of TOC Analyzer).",
            },
            content: {
              type: Type.STRING,
              description: "The full structured Standard Operating Procedure formatted in Markdown.",
            },
            keywords: {
              type: Type.STRING,
              description: "A comma-separated string of 4-5 highly specific, technical search keywords.",
            },
          },
          required: ["title", "content", "keywords"],
        },
      },
    });

    const parsedJson = JSON.parse(response.text || "{}");
    return res.json(parsedJson);
  } catch (error: any) {
    console.error("[Importer Error] ", error);
    return res.status(500).json({
      error: `Failed to extract SOP: ${error.message || error}`,
    });
  }
});

// Configure Vite and static assets middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
