/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  FlaskConical,
  Microscope,
  Factory,
  Warehouse as WarehouseIcon,
  CheckSquare,
  Gauge,
  BookOpen,
  ClipboardCheck,
  Award,
  FileText,
  Book,
  Calculator as CalcIcon,
  Mail,
  Search,
  Menu,
  X,
  ChevronRight,
  Info,
  Clock,
  Send,
  Check,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Copy,
  Printer,
  Calendar,
  AlertCircle,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle,
  RefreshCw,
  SearchCode,
  Wrench,
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit,
  MessageSquare,
  Eye,
  LogOut,
  Settings,
  Play,
  Database,
  Phone,
  ListTodo
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { pharmaCategories, PharmaCategory, PharmaSubtopic } from "./pharmaData";

// Icon mapping to render Lucide icons based on string name
const IconMap: Record<string, any> = {
  ShieldCheck,
  FlaskConical,
  Microscope,
  Factory,
  Warehouse: WarehouseIcon,
  CheckSquare,
  Gauge,
  BookOpen,
  ClipboardCheck,
  Award,
  FileText,
  Book,
  Calculator: CalcIcon,
  Mail,
  Wrench,
  Lock,
  Play,
  Database,
  Phone,
  ListTodo,
  CheckCircle,
};

// Full list of 14 categories (including interactive Calculator and Contact Us)
// Structured with custom deep theme borders, background gradients and icons to match the requested design
const ALL_CATEGORIES = [
  { 
    id: "quality-control", 
    title: "Quality Control", 
    icon: "FlaskConical", 
    desc: "OOS investigations, HPLC, stability testing, & reagent logs", 
    color: "from-emerald-500 to-teal-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#10b981]/30", 
    circleBg: "bg-[#10b981]/10", 
    iconColor: "text-[#10b981]",
    displayTitle: "Quality Control"
  },
  { 
    id: "quality-assurance", 
    title: "Quality Assurance", 
    icon: "ShieldCheck", 
    desc: "SOPs, Change Control, Deviations, CAPA, & APQR systems", 
    color: "from-teal-500 to-cyan-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#3b82f6]/30", 
    circleBg: "bg-[#3b82f6]/10", 
    iconColor: "text-[#3b82f6]",
    displayTitle: "Quality Assurance"
  },
  { 
    id: "microbiology", 
    title: "Microbiology", 
    icon: "Microscope", 
    desc: "Environmental monitoring, sterility, & LAL endotoxins", 
    color: "from-blue-500 to-indigo-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#a855f7]/30", 
    circleBg: "bg-[#a855f7]/10", 
    iconColor: "text-[#c084fc]",
    displayTitle: "Microbiology"
  },
  { 
    id: "production", 
    title: "Production", 
    icon: "Wrench", 
    desc: "Granulation, cleanrooms, and line clearance protocols", 
    color: "from-amber-500 to-orange-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#f97316]/30", 
    circleBg: "bg-[#f97316]/10", 
    iconColor: "text-[#f97316]",
    displayTitle: "Production"
  },
  { 
    id: "manuals", 
    title: "Manuals", 
    icon: "ListTodo", 
    desc: "Site Master File, Validation Master Plan, & BMR criteria", 
    color: "from-violet-500 to-purple-700",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#0d9488]/30", 
    circleBg: "bg-[#0d9488]/10", 
    iconColor: "text-[#0d9488]",
    displayTitle: "SOPs List"
  },
  { 
    id: "validation", 
    title: "Validation", 
    icon: "CheckCircle", 
    desc: "Validation V-model, DQ/IQ/OQ/PQ, & cleaning validation", 
    color: "from-emerald-600 to-emerald-800",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#06b6d4]/30", 
    circleBg: "bg-[#06b6d4]/10", 
    iconColor: "text-[#06b6d4]",
    displayTitle: "Validation"
  },
  { 
    id: "gmp", 
    title: "GMP", 
    icon: "Lock", 
    desc: "10 Core GMP tenets, ALCOA+ data integrity, & gowning SOP", 
    color: "from-amber-600 to-yellow-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#64748b]/30", 
    circleBg: "bg-[#64748b]/10", 
    iconColor: "text-[#94a3b8]",
    displayTitle: "GMP Guide"
  },
  { 
    id: "audits", 
    title: "Audits", 
    icon: "ClipboardCheck", 
    desc: "Self-inspections, vendor audits, and FDA preparation guides", 
    color: "from-rose-500 to-red-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#6366f1]/30", 
    circleBg: "bg-[#6366f1]/10", 
    iconColor: "text-[#6366f1]",
    displayTitle: "Audits"
  },
  { 
    id: "usp", 
    title: "USP", 
    icon: "Database", 
    desc: "USP chapters <797> sterile, <800> hazardous, & monographs", 
    color: "from-blue-600 to-cyan-700",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#ec4899]/30", 
    circleBg: "bg-[#ec4899]/10", 
    iconColor: "text-[#ec4899]",
    displayTitle: "USP"
  },
  { 
    id: "guidelines", 
    title: "Guidelines", 
    icon: "Play", 
    desc: "ICH Quality parameters, WHO guidelines, & FDA guidance", 
    color: "from-teal-600 to-emerald-700",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#ef4444]/30", 
    circleBg: "bg-[#ef4444]/10", 
    iconColor: "text-[#ef4444]",
    displayTitle: "SOP Videos"
  },
  { 
    id: "calculator", 
    title: "Calculator", 
    icon: "Calculator", 
    desc: "Dilution, LOD %, PPM, & API weight adjustments", 
    color: "from-purple-500 to-pink-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#f59e0b]/30", 
    circleBg: "bg-[#f59e0b]/10", 
    iconColor: "text-[#f59e0b]",
    displayTitle: "Calculators"
  },
  { 
    id: "contact-us", 
    title: "Contact Us", 
    icon: "Phone", 
    desc: "Reach out for technical, training, or SOP design requests", 
    color: "from-gray-600 to-slate-800",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#0ea5e9]/30", 
    circleBg: "bg-[#0ea5e9]/10", 
    iconColor: "text-[#0ea5e9]",
    displayTitle: "Contact Us"
  },
  { 
    id: "warehouse", 
    title: "Warehouse", 
    icon: "Warehouse", 
    desc: "Receipt flow, dispensing booths, FIFO/FEFO, & cold chain", 
    color: "from-sky-500 to-blue-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#38bdf8]/30", 
    circleBg: "bg-[#38bdf8]/10", 
    iconColor: "text-[#38bdf8]",
    displayTitle: "Warehouse"
  },
  { 
    id: "calibration", 
    title: "Calibration", 
    icon: "Gauge", 
    desc: "Metrological traceability, balance standards, & OOC logs", 
    color: "from-indigo-500 to-purple-600",
    btnBg: "bg-[#0d162d] hover:bg-[#111e3b]", 
    circleBorder: "border-[#8b5cf6]/30", 
    circleBg: "bg-[#8b5cf6]/10", 
    iconColor: "text-[#a78bfa]",
    displayTitle: "Calibration"
  }
];

interface SearchResult {
  categoryId: string;
  categoryTitle: string;
  subtopicTitle: string | null;
  snippet: string;
  type: "category" | "subtopic";
}

interface SubmittedInquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  department: string;
  type: string;
  message: string;
  timestamp: string;
}

export default function App() {
  const [categories, setCategories] = useState<PharmaCategory[]>(() => {
    const saved = localStorage.getItem("pharma_categories_data_v5");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing categories data", e);
      }
    }
    return pharmaCategories;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem("pharma_is_admin") === "true";
  });
  const [showAdminLogin, setShowAdminLogin] = useState<boolean>(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState<string>("");
  const [adminLoginError, setAdminLoginError] = useState<string>("");

  const updateCategories = (newCategories: PharmaCategory[]) => {
    setCategories(newCategories);
    try {
      localStorage.setItem("pharma_categories_data_v5", JSON.stringify(newCategories));
    } catch (e) {
      console.error("Error saving categories data", e);
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("pharma_is_admin");
    if (activeCategoryId === "admin-panel") {
      setActiveCategoryId("dashboard");
    }
  };

  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasswordInput === "03014156107Ms@") {
      setIsAdmin(true);
      localStorage.setItem("pharma_is_admin", "true");
      setShowAdminLogin(false);
      setAdminPasswordInput("");
      setAdminLoginError("");
      setActiveCategoryId("admin-panel");
    } else {
      setAdminLoginError("Invalid authorization code.");
    }
  };

  // Admin Panel Form Editor & CRUD States
  const [adminTab, setAdminTab] = useState<"sops" | "inquiries">("sops");
  const [editingSubtopicId, setEditingSubtopicId] = useState<{ catId: string; subIdx: number } | null>(null);
  const [sopTitle, setSopTitle] = useState<string>("");
  const [sopCategoryId, setSopCategoryId] = useState<string>("quality-control");
  const [sopContent, setSopContent] = useState<string>("");
  const [sopKeywords, setSopKeywords] = useState<string>("");
  const [sopEditorError, setSopEditorError] = useState<string>("");
  const [sopEditorSuccess, setSopEditorSuccess] = useState<string>("");

  const handleSaveSop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sopTitle.trim() || !sopContent.trim()) {
      setSopEditorError("SOP Title and Content are both required.");
      return;
    }

    const keywordList = sopKeywords
      .split(",")
      .map((k) => k.trim().toLowerCase())
      .filter(Boolean);

    const newSubtopic: PharmaSubtopic = {
      title: sopTitle.trim(),
      content: sopContent.trim(),
      keywords: keywordList,
    };

    let updatedCategories = [...categories];

    if (editingSubtopicId) {
      // Editing Mode
      const { catId, subIdx } = editingSubtopicId;
      const catIdx = updatedCategories.findIndex((c) => c.id === catId);
      if (catIdx !== -1) {
        if (catId !== sopCategoryId) {
          // Remove from old
          updatedCategories[catIdx].subtopics.splice(subIdx, 1);
          // Add to new
          const newCatIdx = updatedCategories.findIndex((c) => c.id === sopCategoryId);
          if (newCatIdx !== -1) {
            updatedCategories[newCatIdx].subtopics.push(newSubtopic);
          }
        } else {
          // Keep in same category, just update at subIdx
          updatedCategories[catIdx].subtopics[subIdx] = newSubtopic;
        }
      }
      setSopEditorSuccess("SOP Protocol updated successfully!");
    } else {
      // Create Mode
      const catIdx = updatedCategories.findIndex((c) => c.id === sopCategoryId);
      if (catIdx !== -1) {
        updatedCategories[catIdx].subtopics.push(newSubtopic);
        setSopEditorSuccess("New SOP Protocol uploaded and published live!");
      } else {
        setSopEditorError("Target division not found.");
        return;
      }
    }

    updateCategories(updatedCategories);
    
    // Reset form
    setSopTitle("");
    setSopContent("");
    setSopKeywords("");
    setEditingSubtopicId(null);
    setSopEditorError("");
    
    // Clear success message after 3 seconds
    setTimeout(() => setSopEditorSuccess(""), 4000);
  };

  const handleEditClick = (catId: string, subIdx: number, sub: PharmaSubtopic) => {
    setEditingSubtopicId({ catId, subIdx });
    setSopTitle(sub.title);
    setSopCategoryId(catId);
    setSopContent(sub.content);
    setSopKeywords(sub.keywords.join(", "));
    setSopEditorError("");
    setSopEditorSuccess("");
    // Scroll to editor form
    setTimeout(() => {
      const formElement = document.getElementById("sop-editor-form-element");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const handleDeleteSop = (catId: string, subIdx: number) => {
    if (confirm("Are you sure you want to decommission and delete this SOP protocol? This cannot be undone.")) {
      const updatedCategories = categories.map((cat) => {
        if (cat.id === catId) {
          const updatedSubtopics = [...cat.subtopics];
          updatedSubtopics.splice(subIdx, 1);
          return { ...cat, subtopics: updatedSubtopics };
        }
        return cat;
      });
      updateCategories(updatedCategories);
    }
  };

  const handleClearAllSops = () => {
    if (confirm("Are you sure you want to decommission and delete ALL SOP protocols across all divisions? This will give you a completely clean slate to upload your own data.")) {
      const cleared = categories.map((cat) => ({ ...cat, subtopics: [] }));
      updateCategories(cleared);
    }
  };

  const handleDeleteInquiry = (id: string) => {
    if (confirm("Remove this inquiry from the registry logs?")) {
      const updated = submittedInquiries.filter((inq) => inq.id !== id);
      setSubmittedInquiries(updated);
      try {
        localStorage.setItem("pharma_inquiries", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const [activeCategoryId, setActiveCategoryId] = useState<string>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Space for live indexing on startup or empty
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [activeSubtopicIndex, setActiveSubtopicIndex] = useState<number>(0);
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);
  
  // Real-time local database search results
  const [resultsList, setResultsList] = useState<SearchResult[]>([]);

  // Calculator States
  const [calcTab, setCalcTab] = useState<"dilution" | "lod" | "ppm" | "api">("dilution");
  
  // 1. Dilution Calculator
  const [dilutionC1, setDilutionC1] = useState<string>("50");
  const [dilutionV2, setDilutionV2] = useState<string>("100");
  const [dilutionC2, setDilutionC2] = useState<string>("10");
  
  // 2. LOD % Calculator
  const [lodWi, setLodWi] = useState<string>("5.000");
  const [lodWd, setLodWd] = useState<string>("4.925");
  
  // 3. PPM Calculator
  const [ppmSolute, setPpmSolute] = useState<string>("10.0");
  const [ppmSolvent, setPpmSolvent] = useState<string>("1000");
  
  // 4. API Potency Weight Adjustment Calculator
  const [apiTarget, setApiTarget] = useState<string>("50.0");
  const [apiPotency, setApiPotency] = useState<string>("98.5");
  const [apiWater, setApiWater] = useState<string>("1.2");

  // Contact Form States
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactCompany, setContactCompany] = useState<string>("");
  const [contactDepartment, setContactDepartment] = useState<string>("Quality Assurance");
  const [contactType, setContactType] = useState<string>("Technical Help");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [submittedInquiries, setSubmittedInquiries] = useState<SubmittedInquiry[]>([]);

  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Search State and load inquiries from localStorage
  useEffect(() => {
    setSearchQuery("");
    
    // Initialize default categories only if no saved data exists
    const saved = localStorage.getItem("pharma_categories_data_v5");
    if (!saved) {
      updateCategories(pharmaCategories);
    }
    
    // Default mock inquiries for professional presentation
    const defaultInquiries: SubmittedInquiry[] = [
      {
        id: "inq-1",
        name: "Dr. Amjad Khan",
        email: "a.khan@pharmalabs.com",
        company: "National Pharma Labs Ltd.",
        department: "Quality Assurance",
        type: "SOP Customization",
        message: "We require a specialized template for cleanroom pressure cascade audits that satisfies WHO sterile guidelines.",
        timestamp: "2026-07-10 14:32",
      },
      {
        id: "inq-2",
        name: "Maria Joseph",
        email: "m.joseph@biogenics.org",
        company: "Apex BioGenics",
        department: "Microbiology",
        type: "Calibration help",
        message: "Our LAL gel-clot assay is showing inconsistent negative controls. Can we schedule an advisory session?",
        timestamp: "2026-07-11 09:15",
      }
    ];

    try {
      const saved = localStorage.getItem("pharma_inquiries");
      if (saved) {
        setSubmittedInquiries(JSON.parse(saved));
      } else {
        localStorage.setItem("pharma_inquiries", JSON.stringify(defaultInquiries));
        setSubmittedInquiries(defaultInquiries);
      }
    } catch (e) {
      setSubmittedInquiries(defaultInquiries);
    }
  }, []);

  // Sync inquiries with localStorage
  const saveInquiry = (newInq: SubmittedInquiry) => {
    const updated = [newInq, ...submittedInquiries];
    setSubmittedInquiries(updated);
    try {
      localStorage.setItem("pharma_inquiries", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Close search popup if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Search Input Changes & execute search over local pharmaceutical database
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setResultsList([]);
      setShowSearchResults(false);
      return;
    }

    const matched: SearchResult[] = [];
    const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);

    // 1. Search in main category titles and descriptions
    categories.forEach((cat) => {
      const catText = `${cat.title} ${cat.summary} ${cat.description}`.toLowerCase();
      const matchesAllTerms = searchTerms.every(term => catText.includes(term));
      
      if (matchesAllTerms) {
        matched.push({
          categoryId: cat.id,
          categoryTitle: cat.title,
          subtopicTitle: null,
          snippet: cat.summary,
          type: "category",
        });
      }

      // 2. Search in individual subtopics
      cat.subtopics.forEach((sub) => {
        const subtopicText = `${sub.title} ${sub.content} ${sub.keywords.join(" ")}`.toLowerCase();
        const matchesSubTerms = searchTerms.every(term => subtopicText.includes(term));

        if (matchesSubTerms) {
          // Find brief snippet
          const textIndex = sub.content.toLowerCase().indexOf(searchTerms[0]);
          let snippet = "";
          if (textIndex !== -1) {
            const start = Math.max(0, textIndex - 30);
            const end = Math.min(sub.content.length, textIndex + 70);
            snippet = `...${sub.content.slice(start, end)}...`;
          } else {
            snippet = sub.content.slice(0, 80) + "...";
          }

          matched.push({
            categoryId: cat.id,
            categoryTitle: cat.title,
            subtopicTitle: sub.title,
            snippet: snippet,
            type: "subtopic",
          });
        }
      });
    });

    // 3. Search for calculator
    const calcMatches = searchTerms.some(term => 
      "calculator dilution lod loss drying ppm parts per million api assay adjust weight weight correction scale".includes(term)
    );
    if (calcMatches) {
      matched.push({
        categoryId: "calculator",
        categoryTitle: "Interactive Calculator",
        subtopicTitle: "Pharmacopoeial Calculations Utility",
        snippet: "Convert PPM, evaluate Loss on Drying (LOD) %, compute stock dilution (C1V1 = C2V2), and perform API dispensing adjustments.",
        type: "category"
      });
    }

    // 4. Search for contact us
    const contactMatches = searchTerms.some(term => 
      "contact feedback mail phone help address support amjad khan inquiry message write".includes(term)
    );
    if (contactMatches) {
      matched.push({
        categoryId: "contact-us",
        categoryTitle: "Contact Us & Feedback",
        subtopicTitle: "Pharma Guide Advisory Desk",
        snippet: "Submit inquiries, get technical troubleshooting guides, or draft tailored validation SOPs with our consultants.",
        type: "category"
      });
    }

    setResultsList(matched.slice(0, 8)); // Limit to top 8 matches for clean popup UI
    setShowSearchResults(true);
  };

  // Navigating to category and selecting subtopic
  const selectSearchResult = (res: SearchResult) => {
    setActiveCategoryId(res.categoryId);
    setShowSearchResults(false);
    setSearchQuery("");
    
    if (res.subtopicTitle && res.categoryId !== "calculator" && res.categoryId !== "contact-us") {
      const cat = pharmaCategories.find(c => c.id === res.categoryId);
      if (cat) {
        const subIdx = cat.subtopics.findIndex(s => s.title === res.subtopicTitle);
        if (subIdx !== -1) {
          setActiveSubtopicIndex(subIdx);
        }
      }
    } else {
      setActiveSubtopicIndex(0);
    }
  };

  // Copy SOP text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  // Print current subtopic SOP
  const handlePrint = () => {
    window.print();
  };

  // Calculator Math Calculations
  // 1. Dilution calculation (V1 = C2 * V2 / C1)
  const calcDilutionV1 = (): { v1: number; vd: number; isValid: boolean } => {
    const c1 = parseFloat(dilutionC1);
    const v2 = parseFloat(dilutionV2);
    const c2 = parseFloat(dilutionC2);
    if (isNaN(c1) || isNaN(v2) || isNaN(c2) || c1 <= 0 || v2 <= 0 || c2 <= 0 || c2 > c1) {
      return { v1: 0, vd: 0, isValid: false };
    }
    const v1 = (c2 * v2) / c1;
    const vd = v2 - v1;
    return { v1: parseFloat(v1.toFixed(3)), vd: parseFloat(vd.toFixed(3)), isValid: true };
  };

  // 2. LOD % calculation ((Wi - Wd)/Wi * 100)
  const calcLOD = (): { lod: number; waterLost: number; isValid: boolean } => {
    const wi = parseFloat(lodWi);
    const wd = parseFloat(lodWd);
    if (isNaN(wi) || isNaN(wd) || wi <= 0 || wd <= 0 || wd > wi) {
      return { lod: 0, waterLost: 0, isValid: false };
    }
    const lost = wi - wd;
    const pct = (lost / wi) * 100;
    return { lod: parseFloat(pct.toFixed(3)), waterLost: parseFloat(lost.toFixed(4)), isValid: true };
  };

  // 3. PPM Calculation (mg / L)
  const calcPPM = (): { ppm: number; isValid: boolean } => {
    const solute = parseFloat(ppmSolute);
    const solvent = parseFloat(ppmSolvent);
    if (isNaN(solute) || isNaN(solvent) || solute <= 0 || solvent <= 0) {
      return { ppm: 0, isValid: false };
    }
    // solute in mg, solvent in mL. 1L = 1000mL.
    // PPM = mg/L.
    const volumeL = solvent / 1000;
    const ppmValue = solute / volumeL;
    return { ppm: parseFloat(ppmValue.toFixed(2)), isValid: true };
  };

  // 4. API Potency adjustment weight calculation
  // Required Qty = (Target Weight * 100 * 100) / (Potency % * (100 - Water %))
  const calcAPIAdjustment = (): { finalQty: number; moistureAdj: number; factor: number; isValid: boolean } => {
    const target = parseFloat(apiTarget);
    const potency = parseFloat(apiPotency);
    const water = parseFloat(apiWater);
    if (isNaN(target) || isNaN(potency) || isNaN(water) || target <= 0 || potency <= 0 || water < 0 || water >= 100) {
      return { finalQty: 0, moistureAdj: 0, factor: 0, isValid: false };
    }
    const purePotencyMultiplier = potency / 100;
    const dryMatterMultiplier = (100 - water) / 100;
    const overallFactor = purePotencyMultiplier * dryMatterMultiplier;
    const finalQty = target / overallFactor;
    const diff = finalQty - target;
    return {
      finalQty: parseFloat(finalQty.toFixed(4)),
      moistureAdj: parseFloat(diff.toFixed(4)),
      factor: parseFloat(overallFactor.toFixed(5)),
      isValid: true,
    };
  };

  // Contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      alert("Kindly fill in all required fields (Name, Email, Message)");
      return;
    }

    const newInq: SubmittedInquiry = {
      id: "inq-" + Date.now(),
      name: contactName,
      email: contactEmail,
      company: contactCompany || "Independent Pharmacist",
      department: contactDepartment,
      type: contactType,
      message: contactMessage,
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 16),
    };

    saveInquiry(newInq);
    setContactSubmitted(true);
    
    // Clear fields
    setContactName("");
    setContactEmail("");
    setContactCompany("");
    setContactMessage("");
  };

  const activeCategory = categories.find((cat) => cat.id === activeCategoryId);

  return (
    <div id="pharma-app-root" className="min-h-screen bg-[#040814] flex flex-col font-sans text-slate-200 antialiased selection:bg-emerald-800 selection:text-emerald-100">
      
      {/* ----------------- TOP HEADER ----------------- */}
      <header id="app-main-header" className="sticky top-0 z-40 bg-[#040814] border-b border-slate-900 shadow-lg h-16 px-4 flex items-center justify-between">
        
        {/* Title and Sidebar Trigger Toggle */}
        <div className="flex items-center space-x-3">
          <button
            id="sidebar-toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-900 rounded-lg text-slate-300 hover:text-white transition-colors focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            title="Toggle Sidebar Menu"
            aria-label="Toggle Side Menu"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          <div 
            onClick={() => { setActiveCategoryId("dashboard"); setActiveSubtopicIndex(0); }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Custom Golden circular icon with green background and dynamic + sign inside from Screenshot 2 */}
            <div className="h-9 w-9 rounded-full border-2 border-yellow-400 bg-[#0d5c3a] flex items-center justify-center text-yellow-400 font-bold text-lg select-none shadow-md shadow-emerald-950/40 transition-transform duration-200 group-hover:scale-105">
              +
            </div>
            <div>
              <span className="font-sans font-extrabold text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {activeCategoryId === "dashboard" ? "Home" : (activeCategory?.title || "Pharma Guide")}
              </span>
            </div>
          </div>
        </div>

        {/* CGMP HUB badge and Admin Controls on far right */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {isAdmin ? (
            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => {
                  setActiveCategoryId("admin-panel");
                  if (window.innerWidth < 768) setSidebarOpen(false);
                }}
                className={`bg-[#0d162d] border border-amber-500/40 text-amber-400 text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center space-x-1.5 hover:bg-amber-950/20 transition-all cursor-pointer ${
                  activeCategoryId === "admin-panel" ? "ring-2 ring-amber-500/50" : ""
                }`}
                title="Go to Admin Panel"
              >
                <Settings className="h-3.5 w-3.5 animate-spin-slow text-amber-500" />
                <span className="hidden sm:inline">Admin Workspace</span>
              </button>
              <button
                onClick={handleAdminLogout}
                className="bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/20 p-1.5 rounded-lg text-xs transition-colors cursor-pointer"
                title="Logout from Admin Mode"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setAdminPasswordInput("");
                setAdminLoginError("");
                setShowAdminLogin(true);
              }}
              className="bg-[#0d162d]/50 hover:bg-[#0d162d] text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/20 p-2 rounded-lg transition-all cursor-pointer flex items-center justify-center"
              title="Secure Admin Access"
            >
              <Lock className="h-4 w-4" />
            </button>
          )}

          <div className="border border-emerald-500/30 text-emerald-400 bg-[#0d162d] text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg font-bold select-none shadow-inner">
            CGMP HUB
          </div>
        </div>

      </header>

      {/* ----------------- WORKSPACE BODY LAYOUT ----------------- */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* ----------------- SIDEBAR NAVIGATION MENU ----------------- */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black z-40 cursor-pointer"
                onClick={() => setSidebarOpen(false)}
              />
              
              <motion.aside
                id="app-navigation-sidebar"
                initial={{ x: -280, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -280, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full w-[280px] bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col z-50 shadow-2xl"
              >
              {/* Sidebar Header Title */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    SOP & Manual Directory
                  </span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition-colors md:hidden"
                  title="Close Sidebar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Button Lists matching the exact requested layout */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                {/* Admin Workspace exclusive button if logged in */}
                {isAdmin && (
                  <button
                    onClick={() => { 
                      setActiveCategoryId("admin-panel"); 
                      if (window.innerWidth < 768) setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-all ${
                      activeCategoryId === "admin-panel"
                        ? "bg-amber-600 text-white shadow-md shadow-amber-950/20"
                        : "hover:bg-amber-950/10 hover:text-amber-400 text-amber-500 border border-amber-500/20 bg-amber-500/5 mb-2"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-amber-400 animate-spin-slow" />
                      <span>Admin Workspace</span>
                    </div>
                    <span className="text-[9px] bg-amber-500 text-slate-950 font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">Active</span>
                  </button>
                )}

                {/* Dashboard Main button */}
                <button
                  onClick={() => { setActiveCategoryId("dashboard"); setActiveSubtopicIndex(0); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center space-x-3 transition-all ${
                    activeCategoryId === "dashboard"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/20"
                      : "hover:bg-slate-800 hover:text-slate-100 text-slate-400"
                  }`}
                >
                  <div className="h-5 w-5 flex items-center justify-center">❖</div>
                  <span>Dashboard Hub</span>
                </button>

                <div className="pt-2 pb-1 px-3">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Technical Divisions
                  </p>
                </div>

                {/* Categories buttons map */}
                {ALL_CATEGORIES.map((cat) => {
                  const IconComponent = IconMap[cat.icon] || Info;
                  const isActive = activeCategoryId === cat.id;

                  return (
                    <button
                      key={cat.id}
                      id={`sidebar-btn-${cat.id}`}
                      onClick={() => {
                        setActiveCategoryId(cat.id);
                        setActiveSubtopicIndex(0);
                        // On mobile, close sidebar automatically on selection
                        if (window.innerWidth < 768) {
                          setSidebarOpen(false);
                        }
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-slate-800 text-emerald-400 border-l-2 border-emerald-500 pl-2"
                          : "hover:bg-slate-800/60 hover:text-slate-100 text-slate-400"
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <IconComponent className={`h-4.5 w-4.5 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                        <span className="truncate">{cat.title}</span>
                      </div>
                      {isActive && (
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-950 text-center">
                <p className="text-[10px] text-slate-500 font-mono">
                  USP Standards Verification
                </p>
                <p className="text-[9px] text-slate-600 font-mono mt-0.5">
                  Guideline v2026.12.0
                </p>
              </div>
            </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* ----------------- MAIN VIEW CONTENT CONTAINER ----------------- */}
        <main className="flex-1 overflow-y-auto flex flex-col relative bg-[#040814]">
          
          <AnimatePresence mode="wait">
            {/* 1. DASHBOARD HUB COMPONENT */}
            {activeCategoryId === "dashboard" && (
              <motion.div
                key="dashboard-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-4 md:p-8 max-w-6xl mx-auto w-full space-y-6 md:space-y-8"
              >
                {/* Vibrant green gradient hero section matching Screenshot 2 */}
                <div className="relative bg-gradient-to-br from-[#10b981] to-[#059669] rounded-3xl p-6 md:p-8 text-left text-white shadow-xl overflow-hidden border border-emerald-500/10">
                  <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-20 pointer-events-none"></div>
                  <div className="max-w-2xl relative z-10 space-y-3.5 md:space-y-4">
                    <div className="inline-block bg-[#f59e0b] text-black font-extrabold text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 rounded font-sans">
                      CGMP REGULATORY RESOURCE
                    </div>
                    <h1 className="font-sans font-black text-2xl md:text-4xl text-white tracking-tight leading-tight">
                      Pharmaceutical Guidelines & SOPs
                    </h1>
                    <p className="text-emerald-50 text-xs md:text-sm leading-relaxed font-medium">
                      Access standard procedures, validation templates & regulatory checkers.
                    </p>
                  </div>
                </div>

                {/* Dashboard Search Bar matching the exact screenshot layout */}
                <div className="relative" ref={searchContainerRef}>
                  <div className="relative">
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                    <input
                      id="dashboard-main-search"
                      type="text"
                      placeholder="Search SOPs, codes, procedures..."
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={() => { if (searchQuery.trim()) setShowSearchResults(true); }}
                      className="w-full pl-12 pr-12 py-3.5 bg-[#0d162d] border border-slate-800/80 focus:border-emerald-500/50 rounded-2xl text-sm md:text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-md"
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => handleSearchChange("")}
                        className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-200 rounded-full"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>

                  {/* Real-time search results overlay centered on dashboard search */}
                  <AnimatePresence>
                    {showSearchResults && resultsList.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 right-0 mt-2 bg-[#0d162d] rounded-2xl shadow-2xl border border-slate-800 z-50 overflow-hidden max-h-96"
                      >
                        <div className="bg-[#080f1f] px-4 py-2 border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex justify-between items-center">
                          <span>Database Search Results</span>
                          <span className="text-emerald-400">{resultsList.length} Found</span>
                        </div>
                        <div className="overflow-y-auto max-h-80 divide-y divide-slate-800/60">
                          {resultsList.map((res, idx) => (
                            <div
                              key={idx}
                              onClick={() => selectSearchResult(res)}
                              className="p-3.5 hover:bg-[#111e3b] cursor-pointer transition-colors text-left"
                            >
                              <div className="flex items-center space-x-1.5 mb-1">
                                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-850 text-slate-300 uppercase tracking-wide">
                                  {res.categoryTitle}
                                </span>
                                {res.subtopicTitle && (
                                  <ChevronRight className="h-3 w-3 text-slate-500" />
                                )}
                                {res.subtopicTitle && (
                                  <span className="text-xs text-emerald-400 font-medium truncate">
                                    {res.subtopicTitle}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-400 font-mono line-clamp-2">
                                {res.snippet}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Dashboard Category Selection Grid - styled exactly like the screenshot with dark cards, centered circular icon containers, and clean typography */}
                <div className="bg-[#040814] rounded-3xl p-0 shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-900 pb-4 gap-2">
                    <div>
                      <h2 className="font-sans font-black text-xl md:text-2xl text-white tracking-tight">
                        Explore Departments & Services
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {ALL_CATEGORIES.map((cat) => {
                      const IconComp = IconMap[cat.icon] || Info;
                      
                      return (
                        <motion.div
                          key={cat.id}
                          id={`dashboard-card-${cat.id}`}
                          whileHover={{ scale: 1.04, y: -4 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          onClick={() => {
                            setActiveCategoryId(cat.id);
                            setActiveSubtopicIndex(0);
                          }}
                          className={`${cat.btnBg} rounded-2xl md:rounded-[28px] p-4 md:p-6 lg:p-8 cursor-pointer flex flex-col items-center justify-center transition-all duration-200 group relative overflow-hidden shadow-lg hover:shadow-2xl border border-slate-800/20`}
                        >
                          <div className="flex flex-col items-center justify-center space-y-3 md:space-y-5">
                            {/* Centered Circle wrapper matching the exact screenshot design, responsive sizes */}
                            <div className={`h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full border border-2 ${cat.circleBorder} ${cat.circleBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                              <IconComp className={`h-5 w-5 sm:h-6 sm:w-6 ${cat.iconColor}`} />
                            </div>
                            
                            {/* Centered label text matching the screenshot */}
                            <div className="text-center">
                              <h3 className="font-sans font-bold text-xs sm:text-sm md:text-base text-white tracking-wide transition-colors group-hover:text-emerald-400">
                                {cat.displayTitle}
                              </h3>
                              {/* Extremely subtle, beautiful description that shows on hover to keep the UI clean but functional */}
                              <p className="text-[9px] md:text-[10px] text-slate-400 font-medium line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 max-w-[180px] mx-auto hidden sm:block">
                                {cat.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Industrial Quick SOP guidelines notice */}
                <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-5 text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-3.5">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                      <Info className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-950">WHO & US FDA Regulatory Note</h4>
                      <p className="text-xs text-emerald-800 leading-relaxed max-w-2xl mt-0.5">
                        These guidelines represent current industry compliance metrics. SOP content must be qualified through local site risk assessments before execution in commercial batch cycles.
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setActiveCategoryId("guidelines"); }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all self-start md:self-auto cursor-pointer"
                  >
                    View Guidelines
                  </button>
                </div>
              </motion.div>
            )}

            {/* 2. REGULAR SOP & REFERENCE CATEGORIES WITH LEFT/RIGHT LAYOUT */}
            {activeCategoryId !== "dashboard" && activeCategoryId !== "calculator" && activeCategoryId !== "contact-us" && activeCategory && (
              <motion.div
                key={`cat-${activeCategoryId}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col"
              >
                {/* Category Header Banner */}
                <div className="bg-slate-900 border-b border-slate-800 py-6 px-6 text-left text-white">
                  <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                        <span onClick={() => setActiveCategoryId("dashboard")} className="hover:underline cursor-pointer">Dashboard</span>
                        <span>/</span>
                        <span>{activeCategory.title}</span>
                      </div>
                      <h1 className="font-display font-extrabold text-2xl text-white tracking-tight flex items-center space-x-2">
                        <span>{activeCategory.title}</span>
                      </h1>
                      <p className="text-slate-300 text-xs md:text-sm max-w-3xl leading-relaxed">
                        {activeCategory.description}
                      </p>
                    </div>
                    
                    {/* Action buttons on SOP title card */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => copyToClipboard(activeCategory.subtopics[activeSubtopicIndex]?.content || "")}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white px-3.5 py-1.8 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700 cursor-pointer"
                        title="Copy entire SOP text to clipboard"
                      >
                        {copiedStatus ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span>SOP Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 text-slate-400" />
                            <span>Copy SOP Text</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={handlePrint}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.8 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-sm cursor-pointer"
                        title="Print SOP or save as PDF"
                      >
                        <Printer className="h-3.5 w-3.5 text-emerald-100" />
                        <span>Print Document</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtopic Left-Sidebar Tabs & Right Content Box */}
                <div className="flex-1 max-w-6xl mx-auto w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  
                  {/* Left Column Tabs Selector */}
                  <div className="w-full md:w-80 flex-shrink-0 bg-white p-4 space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">
                      Available Sub-Chapters ({activeCategory.subtopics.length})
                    </p>
                    <div className="space-y-1">
                      {activeCategory.subtopics.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSubtopicIndex(idx)}
                          className={`w-full text-left px-3 py-3 rounded-lg text-xs transition-all flex items-start space-x-2.5 ${
                            activeSubtopicIndex === idx
                              ? "bg-emerald-50 text-emerald-950 font-bold border border-emerald-100 shadow-xs"
                              : "hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-medium"
                          }`}
                        >
                          <div className={`h-4.5 w-4.5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 ${
                            activeSubtopicIndex === idx ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"
                          }`}>
                            {idx + 1}
                          </div>
                          <span className="leading-tight">{sub.title}</span>
                        </button>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-slate-100 px-2">
                      <div className="bg-slate-50 rounded-lg p-3 text-slate-500 text-[10px] leading-relaxed space-y-1">
                        <span className="font-bold uppercase tracking-wider text-slate-700 block">Keywords Tagged:</span>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {activeCategory.subtopics[activeSubtopicIndex]?.keywords.map((kw, i) => (
                            <span key={i} className="bg-slate-200/60 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                              #{kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Main SOP Reader Container */}
                  <div className="flex-1 bg-white p-6 md:p-8 text-left overflow-y-auto">
                    <div className="max-w-3xl space-y-6">
                      
                      {/* Sub-Chapter header card */}
                      <div className="pb-4 border-b border-slate-100 space-y-2">
                        <div className="inline-flex items-center space-x-1 text-slate-400 text-xs font-semibold">
                          <span>Chapter {activeSubtopicIndex + 1}</span>
                          <span>•</span>
                          <span>Approved Standard Protocol</span>
                        </div>
                        <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight leading-tight">
                          {activeCategory.subtopics[activeSubtopicIndex]?.title}
                        </h2>
                      </div>

                      {/* Document Body Styled elegantly */}
                      <div className="prose max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                        {activeCategory.subtopics[activeSubtopicIndex]?.content.split("\n\n").map((para, pIdx) => {
                          // Format headings/bullet points
                          if (para.startsWith("* **") || para.startsWith("**")) {
                            return (
                              <div key={pIdx} className="bg-slate-50 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4 space-y-1 font-sans text-slate-800">
                                {para.split("\n").map((line, lIdx) => (
                                  <p key={lIdx} className="text-xs md:text-sm font-medium leading-relaxed">
                                    {line.replace(/\*\*|\*/g, "")}
                                  </p>
                                ))}
                              </div>
                            );
                          }

                          if (para.match(/^\d+\.\s\*\*/)) {
                            // Number list formatting
                            return (
                              <ol key={pIdx} className="space-y-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100 list-decimal pl-6 font-sans text-xs md:text-sm text-slate-800">
                                {para.split("\n").map((line, lIdx) => (
                                  <li key={lIdx} className="leading-relaxed">
                                    {line.replace(/^\d+\.\s\*\*|\*\*/g, "")}
                                  </li>
                                ))}
                              </ol>
                            );
                          }

                          return (
                            <p key={pIdx} className="whitespace-pre-line font-normal">
                              {para}
                            </p>
                          );
                        })}
                      </div>

                      {/* Signature / Metadata validation box at the bottom of the document */}
                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-[11px] font-mono text-slate-500">
                          <div>
                            <span className="block text-slate-400 uppercase tracking-widest text-[9px] font-bold">DRAFTED BY</span>
                            <span className="font-bold text-slate-700">Senior QA Pharmacist</span>
                            <span className="block text-slate-400">Date: 2026-07-01</span>
                          </div>
                          <div>
                            <span className="block text-slate-400 uppercase tracking-widest text-[9px] font-bold">VERIFIED BY</span>
                            <span className="font-bold text-slate-700">Analytical Lab Supervisor</span>
                            <span className="block text-slate-400">Status: Approved (Signature on File)</span>
                          </div>
                          <div>
                            <span className="block text-slate-400 uppercase tracking-widest text-[9px] font-bold">COMPLIANCE CODE</span>
                            <span className="font-bold text-slate-700">SOP-PG-C{activeSubtopicIndex + 1}-V3</span>
                            <span className="block text-slate-400">Retention: 5 Years</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* 3. CALCULATOR WORKSPACE UTILITY */}
            {activeCategoryId === "calculator" && (
              <motion.div
                key="calculator-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col bg-slate-50"
              >
                {/* Header Section */}
                <div className="bg-slate-900 border-b border-slate-800 py-6 px-6 text-left text-white">
                  <div className="max-w-4xl mx-auto space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      <span onClick={() => setActiveCategoryId("dashboard")} className="hover:underline cursor-pointer">Dashboard</span>
                      <span>/</span>
                      <span>Calculator</span>
                    </div>
                    <h1 className="font-display font-extrabold text-2xl text-white tracking-tight flex items-center space-x-2">
                      <CalcIcon className="h-6 w-6 text-emerald-400" />
                      <span>Pharmacopoeial Calculators Desk</span>
                    </h1>
                    <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
                      Evaluate standard laboratory dilutions, loss on drying (LOD) percentage results, parts per million conversions, and raw active materials dispensing corrections.
                    </p>
                  </div>
                </div>

                {/* Main calculation workspace */}
                <div className="max-w-4xl mx-auto w-full p-4 md:p-6 space-y-6">
                  
                  {/* Tab options for the four sub-calculators */}
                  <div className="flex flex-wrap p-1 bg-slate-200/80 rounded-xl max-w-2xl">
                    <button
                      onClick={() => setCalcTab("dilution")}
                      className={`flex-1 min-w-[120px] text-center py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        calcTab === "dilution" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Dilution ($C_1 V_1 = C_2 V_2$)
                    </button>
                    <button
                      onClick={() => setCalcTab("lod")}
                      className={`flex-1 min-w-[120px] text-center py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        calcTab === "lod" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Loss on Drying (LOD)
                    </button>
                    <button
                      onClick={() => setCalcTab("ppm")}
                      className={`flex-1 min-w-[120px] text-center py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        calcTab === "ppm" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      PPM Converter
                    </button>
                    <button
                      onClick={() => setCalcTab("api")}
                      className={`flex-1 min-w-[120px] text-center py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        calcTab === "api" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      API Potency Adjuster
                    </button>
                  </div>

                  {/* Calculator forms and results columns */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Left side inputs block */}
                    <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs text-left">
                      
                      {/* DILUTION CALCULATOR */}
                      {calcTab === "dilution" && (
                        <div className="space-y-4">
                          <h3 className="font-display font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
                            Dilution Parameters
                          </h3>
                          <div className="space-y-3.5">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Stock Concentration ($C_1$, %)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={dilutionC1}
                                  onChange={(e) => setDilutionC1(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">%</span>
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Target Concentration ($C_2$, %)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={dilutionC2}
                                  onChange={(e) => setDilutionC2(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">%</span>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Target Volume ($V_2$, mL)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={dilutionV2}
                                  onChange={(e) => setDilutionV2(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">mL</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* LOSS ON DRYING CALCULATOR */}
                      {calcTab === "lod" && (
                        <div className="space-y-4">
                          <h3 className="font-display font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
                            Loss on Drying (LOD) Weights
                          </h3>
                          <div className="space-y-3.5">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Wet / Initial Sample Weight ($W_i$)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={lodWi}
                                  onChange={(e) => setLodWi(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">g</span>
                              </div>
                              <span className="text-[10px] text-slate-400 mt-0.5 block">Standard weighing boat tared sample weight</span>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Dry / Final Constant Oven Weight ($W_d$)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={lodWd}
                                  onChange={(e) => setLodWd(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">g</span>
                              </div>
                              <span className="text-[10px] text-slate-400 mt-0.5 block">After oven heating at 105°C to constant weight</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PPM CALCULATOR */}
                      {calcTab === "ppm" && (
                        <div className="space-y-4">
                          <h3 className="font-display font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
                            PPM Parameters
                          </h3>
                          <div className="space-y-3.5">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Solute Weight
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={ppmSolute}
                                  onChange={(e) => setPpmSolute(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">mg</span>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Solvent Volume / Weight
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={ppmSolvent}
                                  onChange={(e) => setPpmSolvent(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">mL / g</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* API WEIGHT ADJUSTER */}
                      {calcTab === "api" && (
                        <div className="space-y-4">
                          <h3 className="font-display font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
                            Active Material Potency Corrections
                          </h3>
                          <div className="space-y-3.5">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Target Pure API Quantity
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={apiTarget}
                                  onChange={(e) => setApiTarget(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">kg</span>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Assay / Potency (As-Is / Dry Basis)
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={apiPotency}
                                  onChange={(e) => setApiPotency(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">%</span>
                              </div>
                              <span className="text-[10px] text-slate-400 mt-0.5 block">From Manufacturer's Certificate of Analysis (CoA)</span>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                Water / Moisture content
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  step="any"
                                  value={apiWater}
                                  onChange={(e) => setApiWater(e.target.value)}
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                />
                                <span className="absolute right-3 top-2 text-xs font-bold text-slate-400 font-mono">%</span>
                              </div>
                              <span className="text-[10px] text-slate-400 mt-0.5 block">Karl Fischer or LOD result</span>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Right side results block */}
                    <div className="md:col-span-7 space-y-4">
                      
                      {/* Interactive calculation output dashboard */}
                      <div className="bg-slate-900 text-white rounded-2xl p-6 text-left border border-slate-800 shadow-md relative overflow-hidden">
                        
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                          <CalcIcon className="h-40 w-40 text-emerald-400" />
                        </div>

                        {/* RENDER DILUTION RESULTS */}
                        {calcTab === "dilution" && (() => {
                          const res = calcDilutionV1();
                          return (
                            <div className="space-y-4 relative z-10">
                              <div className="flex items-center space-x-1.5 text-emerald-400 font-mono text-[11px] uppercase tracking-wider">
                                <TrendingUp className="h-4 w-4" />
                                <span>$C_1 V_1 = C_2 V_2$ Output</span>
                              </div>
                              <h2 className="font-display font-extrabold text-2xl tracking-tight text-white">
                                Target Dilution Formula
                              </h2>

                              {res.isValid ? (
                                <div className="space-y-5">
                                  <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">Stock Volume Needed ($V_1$)</span>
                                      <span className="text-2xl font-mono font-bold text-emerald-400">{res.v1}</span>
                                      <span className="text-xs text-slate-400 ml-1 font-mono">mL</span>
                                    </div>
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">Diluent Dilution Volume ($V_d$)</span>
                                      <span className="text-2xl font-mono font-bold text-teal-400">{res.vd}</span>
                                      <span className="text-xs text-slate-400 ml-1 font-mono">mL</span>
                                    </div>
                                  </div>

                                  <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/60 text-xs text-emerald-300 leading-relaxed font-normal">
                                    <strong>Prep Guide:</strong> Take exactly <strong>{res.v1} mL</strong> of stock solution (at {dilutionC1}%), transfer to a {dilutionV2} mL volumetric flask, and dilute with diluent (QS) up to the mark (adding <strong>{res.vd} mL</strong> of solvent) to get a final concentration of <strong>{dilutionC2}%</strong>.
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-2 bg-red-950/40 p-4 rounded-xl border border-red-800/60 text-xs text-red-300">
                                  <AlertCircle className="h-4 w-4" />
                                  <span>Incomplete data. target concentration ($C_2$) cannot exceed stock ($C_1$).</span>
                                </div>
                              )}
                            </div>
                          );
                        })()}

                        {/* RENDER LOD RESULTS */}
                        {calcTab === "lod" && (() => {
                          const res = calcLOD();
                          return (
                            <div className="space-y-4 relative z-10">
                              <div className="flex items-center space-x-1.5 text-emerald-400 font-mono text-[11px] uppercase tracking-wider">
                                <TrendingUp className="h-4 w-4" />
                                <span>Moisture Determination Output</span>
                              </div>
                              <h2 className="font-display font-extrabold text-2xl tracking-tight text-white">
                                Loss on Drying (LOD) % Result
                              </h2>

                              {res.isValid ? (
                                <div className="space-y-5">
                                  <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">Calculated LOD %</span>
                                      <span className="text-2xl font-mono font-bold text-amber-400">{res.lod}%</span>
                                    </div>
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">Moisture Weight Loss</span>
                                      <span className="text-2xl font-mono font-bold text-slate-300">{res.waterLost}</span>
                                      <span className="text-xs text-slate-400 ml-1 font-mono">g</span>
                                    </div>
                                  </div>

                                  <div className={`p-4 rounded-xl text-xs leading-relaxed font-normal border ${
                                    res.lod <= 1.5 
                                      ? "bg-emerald-950/40 border-emerald-800/60 text-emerald-300"
                                      : "bg-amber-950/40 border-amber-800/60 text-amber-300"
                                  }`}>
                                    <strong>Monograph Threshold Interpretation:</strong> Most USP standard powders have an LOD threshold limit of <strong>&le; 1.5%</strong> or <strong>&le; 2.0%</strong>. Your calculated value of <strong>{res.lod}%</strong> is {res.lod <= 1.5 ? "compliant with strict limits." : "above standard levels, require batch review."}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-2 bg-red-950/40 p-4 rounded-xl border border-red-800/60 text-xs text-red-300">
                                  <AlertCircle className="h-4 w-4" />
                                  <span>Dry weight ($W_d$) must not exceed initial wet weight ($W_i$).</span>
                                </div>
                              )}
                            </div>
                          );
                        })()}

                        {/* RENDER PPM RESULTS */}
                        {calcTab === "ppm" && (() => {
                          const res = calcPPM();
                          return (
                            <div className="space-y-4 relative z-10">
                              <div className="flex items-center space-x-1.5 text-emerald-400 font-mono text-[11px] uppercase tracking-wider">
                                <TrendingUp className="h-4 w-4" />
                                <span>PPM Concentration Output</span>
                              </div>
                              <h2 className="font-display font-extrabold text-2xl tracking-tight text-white">
                                Parts Per Million Solution Result
                              </h2>

                              {res.isValid ? (
                                <div className="space-y-5">
                                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-center">
                                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Final Concentration</span>
                                    <span className="text-4xl font-mono font-bold text-indigo-400">{res.ppm}</span>
                                    <span className="text-lg text-slate-400 ml-1.5 font-mono">PPM (mg/L)</span>
                                  </div>

                                  <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-800/60 text-xs text-indigo-300 leading-relaxed font-normal">
                                    <strong>Analytical Chemistry Rule:</strong> 1 PPM is equivalent to <strong>1 mg</strong> of solute dissolved in <strong>1 Liter</strong> of solvent. Useful for preparing micro-impurity HPLC stock standards and heavy metal standard controls.
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-2 bg-red-950/40 p-4 rounded-xl border border-red-800/60 text-xs text-red-300">
                                  <AlertCircle className="h-4 w-4" />
                                  <span>Please enter valid non-zero solute and solvent values.</span>
                                </div>
                              )}
                            </div>
                          );
                        })()}

                        {/* RENDER API ADJ RESULTS */}
                        {calcTab === "api" && (() => {
                          const res = calcAPIAdjustment();
                          return (
                            <div className="space-y-4 relative z-10">
                              <div className="flex items-center space-x-1.5 text-emerald-400 font-mono text-[11px] uppercase tracking-wider">
                                <TrendingUp className="h-4 w-4" />
                                <span>Dispensing Adjustment Output</span>
                              </div>
                              <h2 className="font-display font-extrabold text-2xl tracking-tight text-white">
                                API Potency & Water Weight Correction
                              </h2>

                              {res.isValid ? (
                                <div className="space-y-5">
                                  <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">Required Raw Dispensing Qty</span>
                                      <span className="text-2xl font-mono font-bold text-emerald-400">{res.finalQty}</span>
                                      <span className="text-xs text-slate-400 ml-1 font-mono">kg</span>
                                    </div>
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                      <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">Moisture Correction Weight</span>
                                      <span className="text-2xl font-mono font-bold text-amber-400">+{res.moistureAdj}</span>
                                      <span className="text-xs text-slate-400 ml-1 font-mono">kg</span>
                                    </div>
                                  </div>

                                  <div className="bg-slate-950 p-3 rounded-lg text-[11px] text-slate-400 font-mono flex justify-between">
                                    <span>Dry Basis Potency Factor:</span>
                                    <span className="text-emerald-400 font-bold">{res.factor}</span>
                                  </div>

                                  <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/60 text-xs text-emerald-300 leading-relaxed font-normal">
                                    <strong>Industrial Dispensing Action:</strong> To yield exactly <strong>{apiTarget} kg</strong> of pure active substance at a standard CoA potency of {apiPotency}% and moisture content of {apiWater}%, you must weigh and dispense exactly <strong>{res.finalQty} kg</strong> of raw material. (Subtract {res.moistureAdj} kg from excipient carrier fill weight to maintain exact batch size).
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-2 bg-red-950/40 p-4 rounded-xl border border-red-800/60 text-xs text-red-300">
                                  <AlertCircle className="h-4 w-4" />
                                  <span>Check parameters. Potency and water content values must represent realistic CoA bounds.</span>
                                </div>
                              )}
                            </div>
                          );
                        })()}

                      </div>

                      {/* Formula display card */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 text-left text-xs leading-relaxed space-y-2">
                        <span className="font-display font-bold text-slate-800 text-xs uppercase tracking-wide block">Standard Regulatory Formulation</span>
                        {calcTab === "dilution" && (
                          <p className="text-slate-500 font-mono">
                            Formula: V1 = (C2 * V2) / C1 where C1 is stock concentration, C2 is target, V1 is required stock volume, and V2 is final volume.
                          </p>
                        )}
                        {calcTab === "lod" && (
                          <p className="text-slate-500 font-mono">
                            Formula: LOD % = ((Wi - Wd) / Wi) * 100 where Wi is initial wet weight, and Wd is dry weight after oven drying.
                          </p>
                        )}
                        {calcTab === "ppm" && (
                          <p className="text-slate-500 font-mono">
                            Formula: PPM = Solute Weight (mg) / Solvent Volume (L). Equivalent to mg per Liter of solution.
                          </p>
                        )}
                        {calcTab === "api" && (
                          <p className="text-slate-500 font-mono">
                            Formula: Required Raw Weight = (Target Weight * 100 * 100) / (Potency % * (100 - Water %)). Adjusts raw material weight for moisture and potency factors.
                          </p>
                        )}
                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            )}

            {/* 4. CONTACT US & SYSTEM FEEDBACK INTERACTIVE VIEW */}
            {activeCategoryId === "contact-us" && (
              <motion.div
                key="contact-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col bg-slate-50"
              >
                {/* Header Section */}
                <div className="bg-slate-900 border-b border-slate-800 py-6 px-6 text-left text-white">
                  <div className="max-w-4xl mx-auto space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      <span onClick={() => setActiveCategoryId("dashboard")} className="hover:underline cursor-pointer">Dashboard</span>
                      <span>/</span>
                      <span>Contact Us</span>
                    </div>
                    <h1 className="font-display font-extrabold text-2xl text-white tracking-tight flex items-center space-x-2">
                      <Mail className="h-6 w-6 text-emerald-400" />
                      <span>Regulatory Advisory Desk & Contact Us</span>
                    </h1>
                    <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
                      Send your inquiries regarding audit preparations, custom validation checklists, technical SOP updates, or pharmacopoeial calculations directly to our Advisory Board.
                    </p>
                  </div>
                </div>

                {/* Main page content split in contact and history lists */}
                <div className="max-w-4xl mx-auto w-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 text-left items-start">
                  
                  {/* Form container */}
                  <div className="md:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
                    <h2 className="font-display font-extrabold text-lg text-slate-900 pb-2 border-b border-slate-100">
                      Submit Regulatory Inquiry
                    </h2>

                    {contactSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl text-center space-y-3"
                      >
                        <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                          <Check className="h-6 w-6" />
                        </div>
                        <h3 className="font-display font-bold text-sm text-emerald-950">Inquiry Logged Successfully!</h3>
                        <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                          Your pharmacopoeial/SOP compliance question has been logged. Our advisory panel will review and compile required template files within 24 working hours.
                        </p>
                        <button
                          onClick={() => setContactSubmitted(false)}
                          className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-4 py-2 rounded-lg shadow-xs transition-all cursor-pointer"
                        >
                          Submit New Inquiry
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Your Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={contactName}
                              onChange={(e) => setContactName(e.target.value)}
                              placeholder="e.g. Dr. Salman Alvi"
                              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={contactEmail}
                              onChange={(e) => setContactEmail(e.target.value)}
                              placeholder="e.g. s.alvi@pharmatech.com"
                              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Organization / Company Name
                          </label>
                          <input
                            type="text"
                            value={contactCompany}
                            onChange={(e) => setContactCompany(e.target.value)}
                            placeholder="e.g. Horizon Biotech Laboratories"
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Plant Department
                            </label>
                            <select
                              value={contactDepartment}
                              onChange={(e) => setContactDepartment(e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-slate-800"
                            >
                              <option>Quality Assurance</option>
                              <option>Quality Control</option>
                              <option>Microbiology</option>
                              <option>Production Division</option>
                              <option>Warehouse Log</option>
                              <option>Validation & Metrology</option>
                              <option>Executive Management</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Inquiry Nature
                            </label>
                            <select
                              value={contactType}
                              onChange={(e) => setContactType(e.target.value)}
                              className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-slate-800"
                            >
                              <option>Technical Help</option>
                              <option>SOP Customization</option>
                              <option>Calibration help</option>
                              <option>FDA Audit prep</option>
                              <option>General Feedback</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Detailed Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            placeholder="Write your compliance question, calibration error specs, or template requests here..."
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-lg shadow-sm hover:shadow-md flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <Send className="h-3.5 w-3.5" />
                          <span>Submit Regulatory Inquiry</span>
                        </button>
                      </form>
                    )}

                  </div>

                  {/* Submission log container */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-xs text-left">
                      <h3 className="font-display font-bold text-sm text-white flex items-center space-x-1.5 pb-2.5 border-b border-slate-800">
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-400" />
                        <span>Inquiries Registry Logs</span>
                      </h3>
                      
                      <div className="space-y-4 mt-4 overflow-y-auto max-h-96 pr-1 divide-y divide-slate-800">
                        {submittedInquiries.map((inq, idx) => (
                          <div key={inq.id} className={`${idx > 0 ? "pt-4" : ""} space-y-1.5 text-left`}>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-emerald-400 block truncate max-w-[150px]">
                                {inq.name}
                              </span>
                              <span className="text-[9px] text-slate-500 font-mono">
                                {inq.timestamp}
                              </span>
                            </div>
                            <span className="block text-[9px] text-slate-400 uppercase tracking-wider font-semibold font-mono">
                              {inq.company} • {inq.department}
                            </span>
                            <div className="inline-block bg-slate-800 text-emerald-300 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-950">
                              {inq.type}
                            </div>
                            <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                              "{inq.message}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-slate-500 text-xs leading-relaxed space-y-1">
                      <span className="font-bold text-slate-700">Official Advisory Desk</span>
                      <p>Regulatory inquiries are processed by certified subject matter experts (SMEs). All submitted data is safeguarded in accordance with GxP electronic record protocols.</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* 4. EXCLUSIVE REGULATORY ADMIN PANEL WORKSPACE */}
            {activeCategoryId === "admin-panel" && isAdmin && (
              <motion.div
                key="admin-panel-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col bg-[#050b1a]"
              >
                {/* Header Banner */}
                <div className="bg-slate-900 border-b border-slate-800 py-6 px-6 text-left text-white relative">
                  <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <Lock className="h-48 w-48 text-amber-400" />
                  </div>
                  <div className="max-w-6xl mx-auto space-y-1 relative z-10">
                    <div className="flex items-center space-x-2 text-xs text-amber-400 font-bold uppercase tracking-wider">
                      <span onClick={() => setActiveCategoryId("dashboard")} className="hover:underline cursor-pointer">Dashboard</span>
                      <span>/</span>
                      <span>Admin Control Center</span>
                    </div>
                    <h1 className="font-sans font-black text-2xl text-white tracking-tight flex items-center space-x-2">
                      <Settings className="h-6 w-6 text-amber-500 animate-spin-slow" />
                      <span>Certified Quality Compliance Admin Workspace</span>
                    </h1>
                    <p className="text-slate-300 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
                      Decommission, update, draft new SOP protocols or articles, and review visitor advisory inquiries logs dynamically.
                    </p>
                  </div>
                </div>

                {/* Main Content Workspace Layout */}
                <div className="max-w-6xl mx-auto w-full p-4 md:p-8 space-y-6">
                  
                  {/* Tabs switch */}
                  <div className="flex p-1 bg-slate-900/60 rounded-xl max-w-sm border border-slate-800">
                    <button
                      onClick={() => setAdminTab("sops")}
                      className={`flex-1 text-center py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center space-x-1.5 ${
                        adminTab === "sops" ? "bg-amber-500 text-slate-950 shadow-md animate-pulse-none" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>SOP Directory</span>
                    </button>
                    <button
                      onClick={() => setAdminTab("inquiries")}
                      className={`flex-1 text-center py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center space-x-1.5 ${
                        adminTab === "inquiries" ? "bg-amber-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Inquiries Log ({submittedInquiries.length})</span>
                    </button>
                  </div>

                  {/* TAB 1: SOP DIRECTORY CRUD MANAGER */}
                  {adminTab === "sops" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left: Editor form to upload or edit SOP */}
                      <div id="sop-editor-form-element" className="lg:col-span-5 bg-[#0d162d] p-6 rounded-2xl border border-slate-800/80 shadow-lg text-left space-y-4">
                        <div className="border-b border-slate-800 pb-3">
                          <h3 className="font-sans font-black text-sm text-white uppercase tracking-wider flex items-center space-x-2">
                            <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                            <span>{editingSubtopicId ? "Modify SOP Protocol" : "Upload New SOP / Article"}</span>
                          </h3>
                          <p className="text-[10px] text-slate-400 mt-1 font-medium">
                            {editingSubtopicId ? "You are modifying an existing regulatory chapter. Saving will update the client directories instantly." : "SOP will be appended live to the selected technical division directory."}
                          </p>
                        </div>

                        {sopEditorError && (
                          <div className="bg-red-950/40 border border-red-500/30 text-red-400 p-3 rounded-lg text-xs font-medium flex items-start space-x-2">
                            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <span>{sopEditorError}</span>
                          </div>
                        )}

                        {sopEditorSuccess && (
                          <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 p-3 rounded-lg text-xs font-medium flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5 animate-bounce" />
                            <span>{sopEditorSuccess}</span>
                          </div>
                        )}

                        <form onSubmit={handleSaveSop} className="space-y-4">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">SOP / Article Title</label>
                            <input
                              type="text"
                              required
                              value={sopTitle}
                              onChange={(e) => setSopTitle(e.target.value)}
                              placeholder="e.g. Cleanroom Pressure Cascade Limits"
                              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500/50 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-sans"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Target Technical Division</label>
                            <select
                              value={sopCategoryId}
                              onChange={(e) => setSopCategoryId(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500/50 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                            >
                              {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.title}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Keywords (Comma separated)</label>
                            <input
                              type="text"
                              value={sopKeywords}
                              onChange={(e) => setSopKeywords(e.target.value)}
                              placeholder="e.g. pressure, cleanroom, hvac, gmp"
                              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500/50 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-mono"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Document Content</label>
                              <span className="text-[9px] text-slate-500">Supports standard breaks and bullets</span>
                            </div>
                            <textarea
                              required
                              rows={10}
                              value={sopContent}
                              onChange={(e) => setSopContent(e.target.value)}
                              placeholder="Write detailed regulatory protocols...\n\nUse '* **Heading**' for customized callouts.\nUse numbers (e.g. '1. **Step**') for lists."
                              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500/50 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-mono leading-relaxed"
                            ></textarea>
                          </div>

                          <div className="flex space-x-2 pt-2">
                            {editingSubtopicId && (
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingSubtopicId(null);
                                  setSopTitle("");
                                  setSopContent("");
                                  setSopKeywords("");
                                }}
                                className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-lg transition-colors cursor-pointer text-center"
                              >
                                Cancel Edit
                              </button>
                            )}
                            <button
                              type="submit"
                              className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-lg transition-all shadow-md cursor-pointer text-center flex items-center justify-center space-x-1"
                            >
                              <Plus className="h-3.5 w-3.5 text-slate-950" />
                              <span>{editingSubtopicId ? "Update Protocol" : "Publish SOP"}</span>
                            </button>
                          </div>
                        </form>
                      </div>

                      {/* Right: Existing SOP explorer tree list with Edit and Delete triggers */}
                      <div className="lg:col-span-7 bg-[#0d162d] p-6 rounded-2xl border border-slate-800/80 shadow-lg text-left space-y-4">
                        <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div>
                            <h3 className="font-sans font-black text-sm text-white uppercase tracking-wider">
                              Existing SOPs Directory Index
                            </h3>
                            <p className="text-[10px] text-slate-400 mt-1 font-medium">
                              Review or modify active chapters from the pharmaceutical database.
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {categories.reduce((acc, c) => acc + c.subtopics.length, 0) > 0 && (
                              <button
                                onClick={handleClearAllSops}
                                className="bg-red-950/40 hover:bg-red-900/30 text-red-400 border border-red-500/20 hover:border-red-500/40 text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center space-x-1"
                                title="Decommission All SOPs"
                              >
                                <Trash2 className="h-3 w-3" />
                                <span>Clear All SOPs</span>
                              </button>
                            )}
                            <span className="text-[10px] font-mono bg-slate-950 px-2.5 py-1 rounded text-emerald-400 font-bold border border-slate-800">
                              {categories.reduce((acc, c) => acc + c.subtopics.length, 0)} Chapters
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
                          {categories.map((cat) => (
                            <div key={cat.id} className="space-y-2 bg-[#080f1f]/80 p-3 rounded-xl border border-slate-900">
                              <div className="flex items-center space-x-2 font-bold text-xs text-white border-b border-slate-900 pb-1.5 uppercase tracking-wider">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                <span>{cat.title}</span>
                              </div>
                              
                              {cat.subtopics.length === 0 ? (
                                <p className="text-[10px] text-slate-500 italic pl-3.5 py-1">No active protocols in this division.</p>
                              ) : (
                                <div className="space-y-1.5">
                                  {cat.subtopics.map((sub, idx) => (
                                    <div 
                                      key={idx}
                                      className="flex items-center justify-between p-2 rounded bg-slate-950/50 hover:bg-slate-950 border border-slate-900/60 hover:border-slate-800 transition-all text-xs"
                                    >
                                      <div className="flex items-center space-x-2.5 truncate max-w-[70%]">
                                        <span className="font-mono text-[10px] text-slate-500">#{idx+1}</span>
                                        <span className="text-slate-300 font-medium truncate">{sub.title}</span>
                                      </div>
                                      <div className="flex items-center space-x-1.5">
                                        <button
                                          onClick={() => handleEditClick(cat.id, idx, sub)}
                                          className="p-1 hover:bg-slate-850 text-slate-400 hover:text-amber-400 rounded transition-colors"
                                          title="Edit Protocol"
                                        >
                                          <Edit className="h-3.5 w-3.5" />
                                        </button>
                                        <button
                                          onClick={() => handleDeleteSop(cat.id, idx)}
                                          className="p-1 hover:bg-slate-850 text-slate-400 hover:text-red-400 rounded transition-colors"
                                          title="Decommission SOP"
                                        >
                                          <Trash2 className="h-3.5 w-3.5" />
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* TAB 2: INQUIRIES REGISTER VIEW */}
                  {adminTab === "inquiries" && (
                    <div className="bg-[#0d162d] p-6 rounded-2xl border border-slate-800 shadow-xl text-left space-y-4">
                      <div className="border-b border-slate-800 pb-3">
                        <h3 className="font-sans font-black text-sm text-white uppercase tracking-wider">
                          User Inquiries & Advisory Registry
                        </h3>
                        <p className="text-[10px] text-slate-400 mt-1 font-medium">
                          Monitor regulatory compliance questions, SOP design demands, and site calibration audits logs in real-time.
                        </p>
                      </div>

                      {submittedInquiries.length === 0 ? (
                        <div className="text-center py-12 text-slate-500 space-y-2">
                          <MessageSquare className="h-10 w-10 mx-auto text-slate-600" />
                          <p className="text-xs font-semibold">Inquiry Registry logs are completely clean.</p>
                          <p className="text-[10px] text-slate-600">All submitted compliance queries have been resolved.</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {submittedInquiries.map((inq) => (
                            <div 
                              key={inq.id}
                              className="bg-slate-950 p-5 rounded-xl border border-slate-900 hover:border-slate-800/80 transition-all flex flex-col justify-between space-y-4 shadow-sm relative overflow-hidden text-left"
                            >
                              <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500"></div>
                              <div className="space-y-3">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-bold text-sm text-white">{inq.name}</h4>
                                    <span className="text-[10px] font-mono text-slate-400">{inq.email}</span>
                                  </div>
                                  <span className="text-[9px] text-slate-500 font-mono font-bold bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                                    {inq.timestamp}
                                  </span>
                                </div>

                                <div className="space-y-1">
                                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center space-x-1.5">
                                    <span>{inq.company}</span>
                                    <span>•</span>
                                    <span className="text-emerald-400">{inq.department}</span>
                                  </div>
                                  <span className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 text-[9px] font-mono font-bold uppercase tracking-wide px-2 py-0.5 rounded">
                                    {inq.type}
                                  </span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed font-normal bg-slate-900/40 p-3 rounded-lg border border-slate-900/60 font-sans italic">
                                  "{inq.message}"
                                </p>
                              </div>

                              <div className="flex justify-between items-center pt-2 border-t border-slate-900/80">
                                <a 
                                  href={`mailto:${inq.email}?subject=RE: Pharma Guide Advisory Inquiry`}
                                  className="text-[10px] font-bold text-emerald-400 hover:underline flex items-center space-x-1"
                                >
                                  <Send className="h-3 w-3" />
                                  <span>Draft Response via Mail</span>
                                </a>
                                <button
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="text-[10px] font-bold text-red-400 hover:text-red-300 flex items-center space-x-1 cursor-pointer bg-red-950/10 hover:bg-red-950/20 px-2.5 py-1 rounded border border-red-950/20 transition-all"
                                >
                                  <Trash2 className="h-3 w-3" />
                                  <span>Archive & Resolve</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </main>

      </div>

      {/* ----------------- ADMIN LOGIN MODAL OVERLAY ----------------- */}
      <AnimatePresence>
        {showAdminLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-6 text-left relative"
            >
              <button
                onClick={() => setShowAdminLogin(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-2">
                <div className="h-12 w-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-2">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-sans font-black text-xl md:text-2xl text-white tracking-tight">
                  Regulatory Admin Portal
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Enter the security authorization code to access the Admin Workspace where you can upload, edit, and delete SOPs, articles, and monitor inquiries.
                </p>
              </div>

              <form onSubmit={handleAdminLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono">
                    Security Authorization Code
                  </label>
                  <input
                    type="password"
                    required
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    placeholder="Enter security authorization code"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-amber-500/50 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-mono"
                    autoFocus
                  />
                  {adminLoginError && (
                    <p className="text-xs text-red-400 font-semibold mt-2 flex items-center space-x-1">
                      <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{adminLoginError}</span>
                    </p>
                  )}
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAdminLogin(false)}
                    className="flex-1 py-2.5 bg-slate-850 hover:bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl border border-slate-800 transition-colors cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl transition-all shadow-md shadow-amber-500/10 cursor-pointer text-center flex items-center justify-center space-x-1"
                  >
                    <Unlock className="h-3.5 w-3.5 text-slate-950" />
                    <span>Authorize Access</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
