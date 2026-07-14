export interface PharmaSubtopic {
  title: string;
  content: string;
  keywords: string[];
}

export interface PharmaCategory {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  description: string;
  subtopics: PharmaSubtopic[];
}

export const pharmaCategories: PharmaCategory[] = [
  {
    id: "quality-control",
    title: "Quality Control",
    iconName: "FlaskConical",
    summary: "HPLC, UV-Vis, calibration, chemical standardization, OOS, and reduced testing.",
    description: "Quality Control (QC) is that part of Good Manufacturing Practice which is concerned with sampling, specifications, and testing, and with the organization, documentation, and release procedures which ensure that the necessary and relevant tests are actually carried out.",
    subtopics: [
      {
        title: "SOP for Validation of Dissolution Methods",
        content: `1. **OBJECTIVE**
To establish standard guidelines, parameters, and best practices for the validation of tablet/capsule dissolution testing methods to ensure compliance and reliability.

2. **VALIDATION PARAMETERS**
It should be proven that the dissolution procedure meets the acceptance criteria set beforehand.

* **1. Specificity**
Specificity proves that the method measures the active substance without being affected by:
- Excipients
- Dissolution media
- Degradation products
- Coating materials
- Placebo components
In case of stability-indicating methods, degradation substances should not interfere with the quantification of the active ingredient.

* **2. Accuracy**
Accuracy shows how the dissolution processes match the real value. It is defined by adding known quantities of the drug to placebo samples having several different concentrations. The result of recovery should confirm that the method accurately measures the concentration of dissolved drug.

* **3. Precision**
Precision proves the reproducibility of the dissolution results. It includes:
- Repeatability
- Intermediate precision
- Variation between chemists
- Variability among different instruments
- Variability during various days
Low variability shows that the method gives stable results under usual laboratory conditions.

* **4. Linearity**
Linearity checks if the analytical response is directly proportional to the concentration of drugs in the working range. Multiple standard concentrations of drugs are created and tested to know about their linearity. Regression analysis is done to determine whether the relationship between concentration and response is a valid one.

* **5. Range**
The analytical range refers to the concentration range where accuracy, precision and linearity can be accepted. The range that is chosen must be sufficient to accommodate anticipated dissolution sample concentration.

* **6. Robustness**
Robustness checks the influence of minor changes applied to the conditions of methods. Examples of these changes include:
- Minor changes in pH of the medium
- Minor change of the temperature
- Change in the agitation speed
- Use of other types of filters
- Slight change of the wavelength
A robust dissolution method should be able to give consistent results in spite of these small changes.

3. **FILTER SUITABILITY STUDY**
The importance of filter suitability is often ignored in the validation processes even though it plays a crucial role in assurance of adequate dissolution tests. The purpose of the study is to prove that the selected filter:
* Does not retain the drug
* Does not release any contaminants
* Provides consistent recovery
* Is compatible with the dissolution medium
Failure to validate filter suitability may result in wrong test outcomes.

4. **SOLUTION STABILITY**
Sustainability of the sample should be confirmed during the testing process. Validation should ensure:
* Storage conditions
* Maximum time for holding
* Stability of the solution after filtration
* Stability of the solution in the autosampler
This ensures that the results of analysis are not compromised due to the delay.

5. **SYSTEM SUITABILITY**
Before starting analysis, the laboratory should check that the dissolution system is working properly. Common system suitability checks include:
* Calibration of apparatus
* Alignment of paddle or basket
* Verification of rotation speed
* Verification of temperature
* System suitability for UV or HPLC
* Performance of the standard solution
Periodic verifications ensure that the method is reliable.

6. **DOCUMENTATION REQUIREMENTS**
Proper documentation is necessary for compliance with regulations. General documents related to validation include:
* Validation protocol
* Method development report
* Raw analytical data
* Chromatograms
* Calibration records
* Statistical analysis
* Deviation reports
* Validation report
* QA approval
Good documentation allows complete reproduction of the validation study upon inspection.

7. **COMMON VALIDATION ISSUES**
During regulatory inspections, persistent issues in dissolution method validation are often noted. Some of the Issues Noted:
* Inadequate rationale given for dissolution conditions
* Lack of robustness studies
* Failure to assess filter reproducibility
* Inadequate statistical analysis
* Unset protocols for validation
* Poor record keeping
* Inadequate follow-up investigations
* Failure to evaluate after changes to the process
* Inadequate analyst training
* No method evaluation
Many of the issues mentioned can be avoided through good planning and quality control.

8. **BEST PRACTICES FOR DISSOLUTION METHOD VALIDATION**
Established organizations with mature analytical laboratories commonly practice the following:
* Formulation of dissolution methods based on scientific understanding and risk-based approaches.
* Validation of methods based on ICH Q2 and also on pharmacopeial principles.
* Justification of dissolution media, agitation speed and the sampling time intervals.
* Evaluation of filter compatibility and solution stability.
* Use of validated dissolution equipment and calibrated analytical instruments.
* The proper statistical techniques applied to validation data.
* Complete documentation maintained in a way that enables traceability.
* Training of analysts on theory and practical approaches.
* Periodic review of validated methods.
* Assessment of the consequences of significant methodological or formulation changes.
The above practices help in achieving consistent performance by the laboratories and also minimizing the regulatory risk.`,
        keywords: ["dissolution validation", "method validation", "dissolution", "filter suitability", "solution stability", "system suitability", "accuracy", "precision", "robustness", "specificity", "linearity"]
      }
    ]
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    iconName: "ShieldCheck",
    summary: "SOPs, Change Control, Deviations, CAPA, and APQR quality systems.",
    description: "Quality Assurance (QA) is a wide-ranging concept covering all matters that individually or collectively influence the quality of a drug product. It is the sum total of organized arrangements made with the object of ensuring that pharmaceutical products are of the quality required for their intended use.",
    subtopics: [
      {
        title: "SOP for Handling of Deviations",
        content: `1. **OBJECTIVE**
To define the procedure for identifying, reporting, investigating, and resolving deviations from established procedures, standards, and specifications.

2. **CLASSIFICATION OF DEVIATIONS**
* **Minor**: Deviation has no impact on product quality, safety, efficacy, or safety parameters of the facility.
* **Major**: Deviation has a potential impact on critical quality attributes, validation state, or regulatory dossiers.
* **Critical**: Deviation has a direct impact on purity, identity, strength, or safety of the drug product. Immediate batch hold required.

3. **PROCEDURE**
* Identify and report any deviation to QA within 24 hours of occurrence.
* Perform risk assessment using FMEA or ICH Q9 principles.
* Execute root cause analysis (RCA) using Fishbone Diagrams or 5-Whys.
* Formulate corrective and preventive actions (CAPA) with realistic target dates.`,
        keywords: ["deviation", "quality assurance", "capa", "root cause analysis", "rca", "ich q9", "fmea"]
      },
      {
        title: "SOP for Change Control Management",
        content: `1. **OBJECTIVE**
To govern changes to validated facilities, equipment, processes, utilities, analytical methods, packaging materials, and computerized systems.

2. **PROCEDURE**
* Draft a Change Control Proposal detailing the description, justification, and pre-assessment of the proposed change.
* QA will categorize the proposal: Major, Minor, or Critical.
* **Impact Assessment**: Distribute to affected departments (Engineering, Production, Validation, Regulatory Affairs, QC).
* Define action items including validation protocols, regulatory updates, SOP revisions, and training logs.
* Approve implementation only after QA confirms completion of all pre-approval actions.`,
        keywords: ["change control", "risk assessment", "impact assessment", "regulatory affairs", "gmp compliance"]
      },
      {
        title: "SOP for Corrective and Preventive Action (CAPA) Systems",
        content: `1. **OBJECTIVE**
To define the method for establishing a centralized Corrective and Preventive Action (CAPA) registry to prevent recurrence or occurrence of quality non-conformances.

2. **PROCEDURE**
* **Initiation**: Trigger CAPA from Deviations, OOS, OOT, Customer Complaints, Audits, or Stability studies.
* **Investigation**: Document root cause. Define corrective actions (dealing with the direct non-conformance) and preventive actions (preventing systemic recurrence).
* **Verification of Effectiveness**: Post-implementation, wait 3-6 months and verify if the non-conformance has ceased to recur. QA signs off to officially close the CAPA.`,
        keywords: ["capa", "remediation", "corrective action", "preventive action", "systemic error", "compliance"]
      },
      {
        title: "SOP for Document Control, Revision, and Archival",
        content: `1. **OBJECTIVE**
To regulate the lifecycle of all GMP documents including Master SOPs, BMRs, Specifications, and Logbooks.

2. **PROCEDURE**
* **Drafting**: Use standard headers, corporate font sizes, and specific title codes.
* **Review & Approval**: Circulate draft to technical experts and department managers. QA gives final regulatory signature.
* **Distribution**: Distribute stamp-marked 'CONTROLLED COPY' documents to points-of-use while retrieving and shredding 'SUPERSEDED' versions.
* **Archival**: Store original Master documents in fireproof cabinets under locked QA custody for a minimum of 5 years after product expiration.`,
        keywords: ["document control", "archival", "controlled copy", "superseded", "lifecycle", "sop draft", "qms"]
      },
      {
        title: "SOP for Annual Product Quality Review (APQR/PQR)",
        content: `1. **OBJECTIVE**
To outline the compilation of the Annual Product Quality Review (APQR) to evaluate the consistency of commercial processes and raw materials.

2. **COMPONENTS OF APQR**
* Review of active material assays, physical traits, and packaging data trends.
* Analysis of all batch rejections, failures, deviations, and OOS incidents.
* Review of cleaning validation runs, HVAC, and utility system assessments.
* Evaluation of all change controls, regulatory filings, and market complaints.
* Statistical Capability Index (CpK) analysis to prove process centering stability.`,
        keywords: ["apqr", "pqr", "statistical capability", "cpk", "process drift", "annual review"]
      }
    ]
  },
  {
    id: "microbiology",
    title: "Microbiology",
    iconName: "Microscope",
    summary: "Environmental monitoring, sterility tests, media prep, and LAL endotoxin.",
    description: "The Microbiology laboratory ensures that pharmaceutical raw materials, water, environment, and finished products comply with microbiological specifications. This is particularly vital for sterile formulations where micro-contamination poses direct threat to patient life.",
    subtopics: [
      {
        title: "SOP for Environmental Monitoring in Sterile Areas",
        content: `1. **OBJECTIVE**
To define the procedure for monitoring viable and non-viable particulate contamination in sterile manufacturing facilities and cleanrooms.

2. **AIRBORNE MONITORING**
* **Active Air Sampling**: Draw 1000 liters of air through a calibrated impactor onto Soyabean Casein Digest Agar (SCDA) plates.
* **Settle Plates (Passive air sampling)**: Expose 90mm SCDA plates to the air in Grade A/B zones for up to 4 hours.

3. **SURFACE MONITORING**
* **Contact Plates**: Press RODAC plates onto flat surfaces for 5 seconds.
* **Swab Sampling**: Swab irregular surfaces and hard-to-reach machine corners.

4. **PERSONNEL MONITORING**
* Sample operator finger dabs and sterile gown surfaces immediately after exiting aseptic areas.`,
        keywords: ["microbiology", "environmental monitoring", "active air sampler", "settle plates", "rodac", "cleanroom", "grade a"]
      },
      {
        title: "SOP for Sterility Testing of Finished Drug Products",
        content: `1. **OBJECTIVE**
To define the sterile procedure for evaluating finished pharmaceutical products for the presence of viable micro-organisms in compliance with USP <71> specifications.

2. **METHODOLOGY**
* **Membrane Filtration (Preferred Method)**:
  - Filter a composite sample solution through 0.45 micron analytical filter membranes under ISO Class 5 laminar air flow hoods.
  - Cut or split membrane halves and inoculate into Fluid Thioglycollate Medium (FTM - for anaerobic and aerobic bacteria) and Soyabean Casein Digest Medium (SCDM - for fungi and aerobic bacteria).
* **Incubation Parameters**:
  - Incubate FTM vessels at 30°C - 35°C for 14 days.
  - Incubate SCDM vessels at 20°C - 25°C for 14 days.
* **Interpretation**: Inspect media daily for signs of turbidity (growth). If turbidity occurs, initiate sterility failure investigation and subculture immediately.`,
        keywords: ["sterility test", "usp 71", "membrane filtration", "ftm", "scdm", "turbidity", "incubation", "cleanroom"]
      },
      {
        title: "SOP for Preparation, Sterilization, and Growth Promotion of Culture Media",
        content: `1. **OBJECTIVE**
To define the protocol for preparing, autoclaving, labeling, and verifying growth promotion qualities of microbiology culture media.

2. **PREPARATION & AUTOCLAVING**
* Weigh powdered media accurately on certified balances. Dissolve with deionized water under heat and stirring.
* Dry and sterilize the dissolved media using steam autoclaves at 121°C for 15 minutes (or as specified by manufacturer).
* Never re-heat or re-autoclave media once solid. Pour into plates inside laminar cabinets.

3. **GROWTH PROMOTION TESTING (GPT)**
* Inoculate newly prepared media batches with low levels (≤ 100 CFU) of standard ATCC control strains:
  - For SCDM: *Staphylococcus aureus*, *Bacillus subtilis*, *Candida albicans*.
  - For FTM: *Clostridium sporogenes*, *Pseudomonas aeruginosa*.
* Growth must be clearly observable within 3 days for bacteria and 5 days for fungi.`,
        keywords: ["culture media", "media prep", "autoclave", "growth promotion", "gpt", "atcc", "cfu", "sterilization"]
      },
      {
        title: "SOP for Bacterial Endotoxin Test (LAL Gel Clot Method)",
        content: `1. **OBJECTIVE**
To describe the gel-clot technique for detecting and quantifying gram-negative bacterial endotoxins in raw materials, water systems, and injectable finished products.

2. **PROCEDURE**
* Reconstitute Limulus Amebocyte Lysate (LAL) reagent vials with pyrogen-free water.
* Mix equal volumes (100 microliters each) of LAL reagent and standard dilution or sample in a sterile endotoxin-free glass reaction tube.
* Incubate the tubes at 37°C ± 1.0°C in a non-disturbing dry block incubator for 60 minutes ± 2 minutes.
* **Reading Result**: Carefully invert the test tube 180 degrees.
  - **Positive Reaction**: A solid, firm gel holds its integrity and does not collapse or slide down the tube.
  - **Negative Reaction**: No gel is formed, or the mixture collapses completely on inversion.`,
        keywords: ["lal", "endotoxin", "gel clot", "pyrogen", "limulus amebocyte lysate", "invert", "sterile water", "microbiology"]
      }
    ]
  },
  {
    id: "production",
    title: "Production",
    iconName: "Factory",
    summary: "Solid and liquid manufacturing, cleanrooms, and line clearance.",
    description: "The Production department transforms active pharmaceutical ingredients (APIs) and excipients into safe, effective finished dosage forms. All activities are guided by manufacturing master formulas and standard operating procedures to eliminate cross-contamination.",
    subtopics: [
      {
        title: "SOP for Line Clearance Procedure",
        content: `1. **OBJECTIVE**
To define the step-by-step checklist to ensure that no materials, packaging items, or paperwork from previous batches remain in production rooms before commencing a new operation.

2. **PROCEDURE**
* Ensure previous batch operation has been fully signed off and logged out of the room.
* Remove all physical items (bottles, foils, cartons, labels, APIs, toolkits) from previous batch.
* **Cleaning verification**: Inspect the main production machines, conveyor belts, dust extractors, and hopper channels for physical residues.
* Verify environmental parameters: temperature, relative humidity, and differential pressures are within limits.
* Production Supervisor and QA Officer must co-sign the room-specific Line Clearance Certificate.`,
        keywords: ["line clearance", "production", "cross-contamination", "cleaning verification", "batch record"]
      },
      {
        title: "SOP for Operation and Cleaning of Tablet Compression Machine",
        content: `1. **OBJECTIVE**
To define instructions for the safe operation, in-process weight checks, and sanitization of rotary tablet compression machines.

2. **OPERATION**
* Ensure line clearance has been obtained from QA. Verify correct die-punch set is mounted.
* Load granulated blend into the hopper. Adjust fill depth and compression force gauges.
* Start the machine at low speed. Sample initial tablets to verify: weight variation, hardness, thickness, and friability.
* Adjust parameters to meet batch requirements. Run machine at target speed, monitoring IPQC values every 30 minutes.

3. **CLEANING TYPE A (BATCH DISCHARGE)**
* Vacuum loose powder, remove remaining granules from feed frame.
* Clean punches and dies with non-metal brass scraper tools and wipe with isopropyl alcohol (IPA).`,
        keywords: ["compression", "tablet", "dies", "punches", "rotary", "hardness", "friability", "feed frame"]
      },
      {
        title: "SOP for Cleanroom Gowning and Sanitization in Grade A/B Zones",
        content: `1. **OBJECTIVE**
To outline step-by-step instructions for entering and exit aseptic cleanrooms to limit personnel-borne particulate and microbial contamination.

2. **PROCEDURE**
* **Step 1 (Pre-Entry)**: Remove street wear, jewelry, and shoes. Put on dedicated plant slippers and cleanroom socks.
* **Step 2 (Primary Air Lock)**: Wash hands with germicidal liquid soap. Dry with lint-free dryer. Put on hair bonnet and face-mask.
* **Step 3 (Secondary Air Lock - Grade B)**: Apply sterile alcoholic hand spray. Put on sterile cleanroom undergarments.
* **Step 4 (Aseptic Gowning Zone)**: Without touching external walls, put on sterile full-body cleanroom jumpsuit. Put on sterile hoods and secure safety goggles. Put on sterile cleanroom boots.
* **Step 5 (Final Exit)**: Put on sterile latex/nitrile gloves, tucking jumpsuit sleeves underneath. Spray gloves with 70% Sterile IPA and pass through air shower.`,
        keywords: ["gowning", "aseptic", "cleanroom", "grade b", "jumpsuit", "air lock", "bonnet", "sterile ipa"]
      }
    ]
  },
  {
    id: "warehouse",
    title: "Warehouse",
    iconName: "Warehouse",
    summary: "Material dispensing, FIFO/FEFO rules, quarantine flow, and cold chain.",
    description: "The Warehouse manages the secure receipt, storage, dispensing, and dispatch of raw materials, packaging components, and finished pharmaceutical products under controlled environmental conditions.",
    subtopics: [
      {
        title: "SOP for Material Receipt, Physical Inspection, and Quarantine",
        content: `1. **OBJECTIVE**
To establish the methodology for receiving incoming raw materials and packaging components, conducting physical inspections, and placing them under strict quarantine.

2. **RECEIVING AND STORAGE FLOW**
* Verify driver documentation, invoice, and manufacturer's CoA match the purchase orders.
* Inspect delivery vehicle cleanliness and verify container seals are intact.
* Conduct visual inspection for damaged packaging, leakages, or moisture stains.
* **Quarantine Placement**: Affix a yellow 'QUARANTINE' label indicating: Item name, Internal lot number, Date of receipt, Number of containers, and Supplier details. Put materials in locked quarantine cages.`,
        keywords: ["warehouse", "quarantine", "receipt", "inspection", "lot number", "yellow label", "coa"]
      },
      {
        title: "SOP for Dispensing of Raw Materials and Active Ingredients",
        content: `1. **OBJECTIVE**
To describe the standard dispensing protocol for weighing active ingredients and excipients under Grade A Reverse Laminar Air Flow (RLAF) booth conditions.

2. **DISPENSING FLOW**
* Retrieve Master Formula Card and material allocation slips signed by Production Planning.
* Verify yellow quarantine labels have been replaced with green 'RELEASED' QC stamps.
* Move containers into the RLAF dispensing room. Calibrate balances before weighing.
* Weigh each active and excipient portion in clean polythene bags. Label with 'DISPENSED' stickers.
* Re-seal container immediately. Production supervisor must doublecheck and co-sign every weighed material.`,
        keywords: ["dispensing", "weighing", "rlaf", "raw materials", "excipients", "weight slip", "re-seal"]
      }
    ]
  },
  {
    id: "validation",
    title: "Validation",
    iconName: "CheckSquare",
    summary: "Validation lifecycle, worst-case cleaning validation, and CSV GAMP 5.",
    description: "Validation is the documented evidence which provides a high degree of assurance that a specific process, equipment, or system will consistently produce a product meeting its predetermined specifications and quality attributes.",
    subtopics: [
      {
        title: "SOP for Equipment Qualification (DQ, IQ, OQ, PQ)",
        content: `1. **OBJECTIVE**
To outline the regulatory stages required to qualify a new piece of pharmaceutical process equipment before releasing it for commercial manufacturing.

2. **QUALIFICATION PHASES**
* **Design Qualification (DQ)**: Verify that the equipment specification matches user requirements (URS) and GMP guidelines.
* **Installation Qualification (IQ)**: Document physical setup, utility connections, instrument calibrations, and loop checks.
* **Operational Qualification (OQ)**: Verify that the equipment operates according to design parameters (e.g. speed, alarm triggers).
* **Performance Qualification (PQ)**: Prove that the machine consistently produces products within specifications over multiple runs.`,
        keywords: ["validation", "qualification", "installation qualification", "operational qualification", "urs", "iq oq pq"]
      },
      {
        title: "SOP for Cleaning Validation (Worst-Case Product)",
        content: `1. **OBJECTIVE**
To define the validation procedure for establishing cleaning limits and testing protocols to eliminate product-to-product cross-contamination on multi-use equipment.

2. **WORST-CASE PRODUCT DETERMINATION**
* Rank all manufactured products sharing equipment based on: Solubility in washing solvent, toxicity (LD50 values), active ingredient potency, and difficulty of physical cleaning.
* Select the highest ranking product as the 'Worst-Case Matrix' for validation challenge studies.

3. **ACCEPTANCE LIMITS (MACO FORMULA)**
* The Maximum Allowable Carry-Over (MACO) limit is calculated as: \`MACO = (STD x SBS) / (SF x LDD)\` where \`STD\` is single dose of active, \`SBS\` is next batch size, \`SF\` is safety factor, and \`LDD\` is maximum dose of next product.
* Target residue level on physical surface must not exceed 10 ppm of active, or show visible spot residues.`,
        keywords: ["cleaning validation", "worst case", "maco", "swab sampling", "rinse sampling", "cross-contamination", "ppm"]
      }
    ]
  },
  {
    id: "calibration",
    title: "Calibration",
    iconName: "Gauge",
    summary: "Metrological traceability, balance standards, and calibration labels.",
    description: "Calibration is the set of operations that establish, under specified conditions, the relationship between values indicated by an instrument and the corresponding values of a known reference standard traceable to international metrology standards.",
    subtopics: [
      {
        title: "SOP for Daily Calibration of Analytical Balances",
        content: `1. **OBJECTIVE**
To define the procedure for verifying the accuracy and sensitivity of analytical balances on a daily basis using certified standard weights.

2. **PROCEDURE**
* Clean the balance pan using a soft camel-hair brush to remove loose particulates.
* Level the balance using the bubble indicator.
* Tare the balance to display 0.0000g.
* Calibrate the balance using standard certified weights (e.g., 100mg, 10g, 50g, 100g).
* **Acceptance Criteria**: The deviation must not exceed ±0.1% or the specific metrological tolerances.
* Record the calibration parameters in the daily logbook. If out of tolerance, immediately label the balance 'OUT OF SERVICE' and report to the metrologist.`,
        keywords: ["calibration", "analytical balance", "standard weights", "accuracy", "logbook", "analytical"]
      }
    ]
  },
  {
    id: "manuals",
    title: "Manuals",
    iconName: "BookOpen",
    summary: "Site Master File, Validation Master Plan, and BMR manual guidelines.",
    description: "Documentation is the key to GMP compliance. The pharmaceutical manuals section details the structure of core high-level reference booklets used to govern a plant's technical activities.",
    subtopics: [
      {
        title: "Guidelines for Compiling the Site Master File (SMF)",
        content: `1. **OBJECTIVE**
To describe the standard structure and regulatory information requirements for a pharmaceutical plant's Site Master File (SMF) in compliance with PIC/S guidelines.

2. **CORE SECTIONS OF SMF**
* **General Information**: Contact info, plant site coordinates, licensed pharmaceutical manufacturing activities.
* **Personnel**: Technical organogram, GMP training policies, key qualification summaries.
* **Premises and Equipment**: HVAC air change schematics, water system design, materials of construction, cleaning protocols.
* **Documentation System**: Master SOP indexing, electronic signature validation policies, batch records workflow.
* **Quality Management**: Deviation, Change Control, and Self-Inspection structures.`,
        keywords: ["site master file", "smf", "pics", "manufacturing license", "plant design", "quality manual"]
      }
    ]
  },
  {
    id: "audits",
    title: "Audits",
    iconName: "ClipboardCheck",
    summary: "Self-inspections, FDA preparation, audit trails, and vendor audits.",
    description: "Audits and inspections ensure continuous compliance with GMP regulations. This section outlines how self-inspections are conducted, how to prepare for health authority visits, and the critical rules of auditing vendor supply chains.",
    subtopics: [
      {
        title: "SOP for Conducting Internal Audits (Self-Inspections)",
        content: `1. **OBJECTIVE**
To outline the standard procedure for planning, conducting, and logging internal audits to verify continuous compliance with GMP regulations.

2. **PROCEDURE**
* **Schedule**: Establish a yearly self-inspection schedule covering all plant areas (QC, Production, Warehouse, Engineering).
* **Audit Team**: Assemble an independent audit team containing cross-functional technical experts.
* **Reporting**: Complete an internal audit checklist, classify findings (Critical, Major, Minor), and request written CAPA plans with dates. Track CAPAs until closure.`,
        keywords: ["internal audit", "self-inspection", "regulatory checklist", "findings", "compliance review"]
      }
    ]
  },
  {
    id: "gmp",
    title: "GMP (Good Manufacturing Practices)",
    iconName: "Award",
    summary: "10 core GMP tenets, ALCOA+ data integrity, and cross-contamination.",
    description: "Good Manufacturing Practice is that part of Quality Assurance which ensures that products are consistently produced and controlled to the quality standards appropriate to their intended use and as required by the Marketing Authorization.",
    subtopics: [
      {
        title: "The 10 Core Tenets of Good Manufacturing Practice (GMP)",
        content: `1. **WRITE STEP-BY-STEP PROCEDURES**
Ensure all active procedures are defined in clear, highly detailed Standard Operating Procedures (SOPs).

2. **FOLLOW WRITTEN PROCEDURES**
Never deviate or improvise. If standard process is not working, raise change controls.

3. **DOCUMENT WORK ACCURATELY**
Maintain real-time records on batch papers. Adhere to GDP and ALCOA+ data integrity rules.

4. **QUALIFY FACILITIES & EQUIPMENT**
Verify setup, installation, and operation parameters through rigorous validations.

5. **DESIGN & BUILD PROPER FACILITIES**
Incorporate particulate barrier walls, clean air locks, and pressure gradients to avoid cross-contamination.

6. **MAINTAIN FACILITIES & EQUIPMENT**
Schedule routine preventive maintenance, clean machines daily, and log usage hours.

7. **DEFINE COMPETE JOB COMPETENCIES**
Provide continuous training and test operator competencies on a regular basis.

8. **PROTECT PRODUCTS AGAINST CONTAMINATION**
Employ clean gowns, filtered RLAF hoods, and sanitization cycles.

9. **BUILD QUALITY INTO PRODUCTS**
Control process variables and in-process parameters (IPQC) throughout the manufacturing run.

10. **PERFORM REGULAR INTERNAL AUDITS**
Periodically audit and evaluate plant performance to locate compliance vulnerabilities before regulatory inspectors do.`,
        keywords: ["tenets", "principles of gmp", "data integrity", "job competency", "preventive maintenance", "regulatory safety"]
      }
    ]
  },
  {
    id: "guidelines",
    title: "Guidelines",
    iconName: "FileText",
    summary: "ICH stability, WHO sterile guidelines, and regulatory expectations.",
    description: "Guidelines serve as standardized paths compiled by harmonized international organizations to align drug safety, quality, and efficacy evaluations globally.",
    subtopics: [
      {
        title: "ICH Q1A(R2) Stability Testing Guidelines",
        content: `1. **OBJECTIVE**
To define the testing criteria for assessing the physical, chemical, and microbiological stability of drug substances and products.

2. **CLIMATIC ZONE CLASSIFICATIONS**
* **Zone I (Temperate)**: 21°C / 45% RH
* **Zone II (Subtropical)**: 25°C / 60% RH
* **Zone III (Hot & Dry)**: 30°C / 35% RH
* **Zone IVa (Hot & Humid)**: 30°C / 65% RH
* **Zone IVb (Hot & Highly Humid)**: 30°C / 75% RH

3. **CORE PARAMETERS**
* Establish active assay limits (typically 95.0% - 105.0% of label claim).
* Define dissolution, water content, and maximum impurity tolerances for degradation products.`,
        keywords: ["ich q1a", "climatic zone", "regulatory filings", "stability parameters", "humidity", "assay limit"]
      }
    ]
  },
  {
    id: "usp",
    title: "USP (United States Pharmacopeia)",
    iconName: "Book",
    summary: "USP chapters <797>, <800>, <1225> analytical, and monographs.",
    description: "The United States Pharmacopeia (USP) is an official public standards-setting authority for all prescription and over-the-counter medicines, dietary supplements, and other healthcare products manufactured or sold in the United States.",
    subtopics: [
      {
        title: "USP Chapter <1225> Validation of Compendial Procedures",
        content: `1. **OBJECTIVE**
To govern the validation protocols required to verify that compendial analytical procedures perform acceptably for their intended purpose in local laboratories.

2. **ANALYTICAL CATEGORIES**
* **Category I**: Quantitation of major active pharmaceutical ingredients or therapeutic excipients.
* **Category II**: Determination of quantitative or limit impurities.
* **Category III**: Determination of performance attributes (e.g. dissolution, content uniformity).
* **Category IV**: Identification tests (e.g. IR, color reaction, melting point).

3. **REQUIRED CRITERIA MATRIX**
* Category I requires Accuracy, Precision, Specificity, Linearity, and Range.
* Category II quantitative requires same as Category I plus Detection and Quantitation Limits (LOD/LOQ).
* Category IV requires only Specificity.`,
        keywords: ["usp 1225", "compendial validation", "compendia", "category i", "category ii", "accuracy", "specificity"]
      }
    ]
  }
];

const extraSops: Record<string, string[]> = {
  "quality-control": [
    "SOP for Operation and Calibration of Mettler Toledo Analytical Balance",
    "SOP for Operation and Calibration of Conductivity Meter",
    "SOP for Operation and Calibration of pH Meter",
    "SOP for Reduced Testing",
    "SOP for Calibration of Autotitrator",
    "SOP for Calibration of Glassware",
    "SOP for Calibration of Pipettes, Burettes and Volumetric Flasks Used in Quality Control",
    "SOP for Calibration of UV / Visible Spectrophotometer",
    "SOP for Calibration of Karl Fischer Apparatus",
    "SOP for Calibration and System Suitability of Total Organic Carbon (TOC) Analyzer",
    "SOP for Sieve Analysis",
    "SOP for HPLC Column Receipt, Checking and Regeneration",
    "SOP for Preparation of Volumetric Solutions",
    "SOP for Preparation and Handling of Working Standards",
    "SOP for Manual Glassware Cleaning",
    "SOP for Washing of HPLC Column After Use",
    "SOP for Handling & Usage of Hazardous Chemicals",
    "SOP for Procurement and Handling of Reference Standard",
    "SOP for Operating of Potentiometer",
    "SOP for Sieve Shaker",
    "Analytical Method Validation (AMV) in Pharmaceuticals",
    "Analytical Method Transfer (AMT) in Pharmaceuticals",
    "Investigation of OOS Results in Analytical Testing",
    "Principle of HPLC | HPLC System Working Explained",
    "Relative Response Factor (RRF) and its Calculation in HPLC Analysis",
    "Steps for HPLC Method Development",
    "Steps for Analytical Method Development",
    "Why is Analytical Method Validation Required?",
    "Possible Causes of Out of Specification",
    "How to Care for pH Meter Electrodes",
    "Difference between C8 and C18 Columns Used in HPLC System",
    "10 Tips for HPLC Analysis In Pharmaceuticals",
    "System Suitability in HPLC Analysis",
    "Different Types of HPLC Detectors",
    "Difference Between Paddle and Basket Dissolution",
    "Instrument and Equipment List for Pharmaceuticals",
    "Why Dissolution Test Apparatus Calibration with Salicylic Acid Tablets was Stopped?",
    "Handling of Out of Calibration Instruments and Equipment",
    "Principle and Calibration of TOC (Total Organic Carbon) Analyzer",
    "Calibration Frequency of Instruments and Other Measuring Devices",
    "pH Value, pH Scale and Its Measurement between 0 and 14",
    "Checklist for Audit in Quality Control",
    "Principle and Calibration of Ultraviolet and Visible Absorption Spectrophotometry",
    "Calibration of Volumetric Glassware used in Pharmaceuticals",
    "Calibration of Centrifuge Apparatus",
    "Calibration of Vernier Caliper",
    "Calibration of Refractometer",
    "Calibration of Brookfield Viscometer",
    "Calibration of Hardness Tester",
    "Analytical Balance Calibration (Updated)",
    "UV Cabinet Calibration in Pharmaceuticals",
    "Calibration of Karl Fischer Apparatus",
    "Calibration of Friability Test Apparatus",
    "Calibration of Viscometer",
    "Calibration of Dissolution Testing Apparatus",
    "HPLC Calibration Procedure",
    "Calibration of FTIR Spectrophotometer",
    "Calibration of Melting Point Apparatus",
    "Calibration of Gas Chromatography (GC)",
    "Calibration of Disintegration Test Apparatus",
    "Calibration of Total Organic Carbon Analyzer",
    "Calibration of Halogen Moisture Analyzer",
    "Calibration of Digital Polarimeter",
    "Calibration of UV / Visible Spectrophotometer",
    "Calibration of Automatic Potentiometric Titrator",
    "SOP for Out of Trend (OOT)"
  ],
  "quality-assurance": [
    "SOP for Password Policy and Data Backup and Storage for Computer Systems",
    "SOP for Safety in Laboratory",
    "SOP for Authorized Signatory",
    "SOP for Technology Transfer",
    "SOP for Qualification of Vendors",
    "SOP for Allocating Document Protocol Number for Instrument Qualification",
    "SOP for General Test Procedure",
    "SOP for Disposal of Expired Chemicals, Reagents, Solvents and Micro-biological Medium",
    "SOP for Calibration Programme",
    "SOP for Release of Finished Product",
    "SOP for Raw Material Release",
    "SOP for Control of Master Data Generation by Computer System",
    "SOP for Use of Log Card for Equipment Status",
    "SOP for Evaluation of Analyst’s Performance",
    "SOP for Logic for Giving Number to the Method for Analysis of Finished Product and Raw Material",
    "SOP for Laboratory Cleaning",
    "SOP for the Preventive Maintenance of all Quality Control Instruments",
    "SOP for Training Procedure for Quality Control",
    "SOP for Testing of Miscellaneous Samples",
    "SOP for Analyst Validation/ Qualification in Quality Control",
    "SOP for Control of Record of Analysis in Quality Control",
    "SOP for Backup/Restore Analytical Data in Electronic Form",
    "SOP for Recording of Analytical Data",
    "SOP for Safety in Quality Control",
    "SOP for Computer System Validation",
    "SOP for Good Laboratory Practice (GLP)",
    "SOP for Analysis and Release of Finished Product Sample",
    "SOP for Out of Specification (OOS) for Pharmaceutical Results",
    "SOP for Handling of a Laboratory Incident",
    "SOP for Preparation of Rejection Note",
    "SOP for Testing, Release or Rejection of Finished Product",
    "SOP for Trend Analysis",
    "SOP for Cleaning of Quality Control Dept. Throughout Working",
    "SOP for Planning for Analysis and Reporting of Results",
    "Common Audit Findings in Analytical Method Validation",
    "Stability Study Failures and Investigations in Pharmaceuticals",
    "Calibration of Class A and Class B Glassware in Pharmaceuticals",
    "Change Control Impact on Validation Status in Pharmaceuticals",
    "GMP Requirements in Pharmaceuticals | Complete Compliance Guide",
    "Out of Specification Investigation in Pharmaceuticals | Complete Guide",
    "Pharmaceutical Compliance and Product Quality | A Complete Guide",
    "Non-Conformance in Pharmaceuticals and Prevention",
    "Improving Quality Through Supplier Audits in Pharma",
    "Common Causes of Low Quality Products in Pharmaceuticals",
    "User Requirement Specification (URS) in Pharmaceuticals",
    "Validation of Excel Calculation Sheets in Pharmaceuticals",
    "Different Types of Titrations",
    "Computer System Validation in Pharmaceuticals",
    "Ghost Peaks in Chromatography: What They Are, Why You Should Be Aware of Them",
    "Different Types of HPLC Columns Used in Analysis",
    "Quality Metrics for Pharmaceutical Manufacturing",
    "How Does Quality Cost Less in Long Term?",
    "Preparation of Molar and Normal Solutions",
    "Karl Fischer Reagent and Its Reactions",
    "Occupational Exposure Bands (OEBs) for Chemicals",
    "Interview Questions for Quality Control / Assurance in Pharmaceuticals",
    "Forced Degradation Study in Pharmaceutical Stability",
    "Mean Kinetic Temperature (MKT) in Stability Studies",
    "Analyst Qualification for Quality Control Laboratory",
    "What are symmetry and asymmetry?",
    "Qualification of Calculator",
    "Functions of Quality Control",
    "Difference between Quality Assurance and Quality Control",
    "Impurity Profiling of Drug Substances in Pharmaceuticals",
    "Determination of Shelf Life of Solutions in Laboratory",
    "Different Storage Conditions in Pharmaceuticals",
    "Calculation for Weighing Range of Balances",
    "Process of Finding Impurities in Pharmaceutical Products",
    "Significant Change in Pharmaceutical Stability Testing",
    "Shelf Life Estimation of Pharmaceutical Products",
    "Optical Activity in Pharmaceutical Analysis",
    "Difference Between Out of Specification and Out of Trend",
    "Good Laboratory Practices (GLP) Part-3",
    "Good Laboratory Practices (GLP) Part-2",
    "Good Laboratory Practices (GLP) Part-1",
    "Guidelines for Pharmaceutical Stability Study",
    "List of Glassware Used in Pharmaceuticals"
  ],
  "microbiology": [
    "SOP for Sampling and Testing Schedule of Purified Water",
    "SOP for Cleaning of Coulter Counter",
    "SOP for Routine Cleaning Verifictaion by TOC-SSM Method",
    "SOP for Sampling of Raw Water and Purified Water",
    "SOP for Water Sampling",
    "SOP for Milliflex Water Filtration Unit",
    "SOP for Analysis of Water",
    "SOP for Sieve Analysis",
    "Statistical Study for Trend Analysis of Purified Water and Water for Injection",
    "Principle of Bacterial Endotoxin Test (BET)",
    "Determination of Chemical Oxygen Demand of Wastewater",
    "Determination of Biological Oxygen Demand (BOD) in Waste Water",
    "List of Chemicals and Media Required in Pharmaceuticals",
    "Determination of Total Organic Carbon in Purified Water"
  ],
  "production": [
    "SOP for Operating Procedure of Water Bath",
    "SOP for Cleaning of Tablet Hardness Tester",
    "SOP for Cleaning of Melting Point Apparatus",
    "SOP for Handling and Control for Prohibited Items",
    "SOP for Cleaning of Box Compression Strength Tester",
    "SOP for Cleaning of Automatic Distillation Apparatus",
    "SOP for Selection Criteria and Its Procedure before Dissolution Profile Study",
    "SOP for Cleaning of Tap Density Apparatus",
    "SOP for Rounding off the Analytical Test Results",
    "SOP for Behavior in Quality Control Department",
    "SOP for De-aeration of Dissolution Media",
    "SOP for Cleaning of High Performance Liquid Chromatography (HPLC)",
    "SOP for Cleaning of Fourier Transform Infrared Spectrophotometer",
    "SOP for Cleaning of Water Purification System",
    "SOP for Cleaning of Centrifuge",
    "SOP for Cleaning of Bursting Strength Tester",
    "SOP for Cleaning of Polariscope",
    "SOP for Cleaning of Quardrant Meter",
    "SOP for Cleaning of Puncture Resistance Tester",
    "SOP for Cleaning of Vacuum Oven",
    "SOP for Cleaning of Ultrasonic Bath",
    "SOP for Cleaning of Water Bath",
    "SOP for Cleaning of Polarimeter",
    "SOP for Operation of Sampling Booth",
    "SOP for Cleaning of High Performance Thin Layer Chromatograph",
    "SOP for Cleaning of Refractometer",
    "SOP for Cleaning of Brooke Field Viscometer",
    "SOP for Cleaning of Karl Fischer Apparatus",
    "SOP for Cleaning of U.V. /Visible Spectrophotometer",
    "SOP for Cleaning Procedure for Dissolution Test Apparatus",
    "SOP for Cleaning of Atomic Absorption Spectrophotometer",
    "SOP for Sieve Analysis",
    "SOP for Maintenance and Cleaning Procedure for Sampling Equipment",
    "SOP for Manual Glassware Cleaning",
    "SOP for Destroying the Inprocess, Finished Product and Raw Materials Samples Timely After Testing",
    "SOP for Material and Product Labeling in Production Area",
    "SOP for Calibration of Oven",
    "SOP for Calibration of Thermometer",
    "SOP for Calibration of Dry Bath",
    "SOP for Calibration of Vacuum Oven",
    "SOP for Magnetic Stirrer with Hot Plate",
    "SOP for Bursting Strength Tester",
    "SOP for Centrifuge Machine",
    "SOP for Sonicator",
    "SOP for Particle Counter",
    "SOP for Calibration of Hot Air Oven",
    "SOP for Washing of HPLC Columns",
    "SOP for Control Environment Chamber (40 °C/75 % RH)",
    "SOP for Glassware Washing",
    "SOP for Storage of Sampling Tools",
    "SOP for Preventive Maintenance of Instrument",
    "SOP for Muffle Furnace",
    "SOP for Cleaning of Refrigerator",
    "SOP for Operation and Cleaning of Hot Air Oven",
    "SOP for Handling of Glassware",
    "SOP for Cleaning of Sampling Equipment",
    "SOP for Tap Density Apparatus",
    "SOP for Operation and Calibration of pH Meter (Pico+)",
    "SOP for Milli-Q Water System from Milipore",
    "SOP for Operation and Calibration of Leak Test Apparatus",
    "SOP for UV Cabinet",
    "SOP for Melting Point Apparatus",
    "SOP for Operation and Calibration of Sieve Shaker",
    "SOP for Analysis on UV- Visible Spectrophotometer",
    "SOP for Refractometer",
    "SOP for Water Bath",
    "SOP for HPLC System Using Chemistation Software from Agilent",
    "SOP for Preparation and Standardization of Volumetric Solution",
    "SOP for Entry and Exit into Quality Control Laboratory",
    "SOP for Bursting Strength Tester",
    "SOP for Vacuum Pump",
    "SOP for Leak Tester",
    "SOP for Operation and Maintenance of Water Purification System",
    "SOP for Leak Seal Test Apparatus",
    "SOP for Operating and Cleaning of Distilled Water Unit",
    "SOP for Sampling of Packing Material",
    "SOP for Operating of Potentiometer",
    "SOP for Sieve Analysis",
    "SOP for Sieve Shaker",
    "Principle and Working of pH Meter | pH Probes Explained",
    "Various Shapes of Pharmaceutical Dosage Forms Importance",
    "In-Process Control Methods for API Manufacturing Quality",
    "Ultrasonic Cleaning in Pharmaceuticals Process Guide",
    "Sustained Release and Prolonged Release Tablets and their Difference",
    "Preparation of Buffer Solutions | Phosphate, Acetate and other Buffers",
    "Principle and Working of Gas Chromatography | GC Principle Explained",
    "Principle of HPLC | HPLC System Working Explained",
    "Different Types of HPLC Columns Used in Analysis",
    "Mechanism of Separation of Components by HPLC",
    "HPLC Column Void Volume",
    "Difference between Generic and Branded Medicines",
    "Difference between GC and HPLC Techniques",
    "C18 HPLC Columns and Their Properties",
    "Differences between HPLC and UPLC",
    "Karl Fischer Reagent and Its Reactions",
    "Different Types of Dissolution Apparatus",
    "Leak Detection of Colored Vials in Pharmaceuticals",
    "Solvents used in HPLC Mobile Phase",
    "Difference between Incubator and BOD Incubator",
    "What is Delay Volume in HPLC?",
    "Containers for Pharmaceutical Packaging",
    "Principle of UV Spectrophotometer",
    "Protection of Light Sensitive Products",
    "Tablet Dissolution Test in Different Stages (S1, S2 and S3)",
    "Solid Pharmaceutical Dosage Forms - Capsules",
    "Oral Liquid Pharmaceutical Dosage Forms",
    "High Performance Liquid Chromatography (HPLC)"
  ],
  "warehouse": [
    "SOP for Collection and Storage of Retained Samples of Packaging Material",
    "SOP for Collection and Storage of Retained Samples of Raw Material",
    "SOP for Sampling of Raw Material",
    "SOP for Sampling of the Packaging Material",
    "SOP for Retesting Schedule of Packaging Material",
    "SOP for Retesting Schedule of Raw Material (For API)",
    "SOP for Sampling and Release of Raw Materials",
    "SOP for Retesting Schedule of Raw Material",
    "SOP for Storage and Use of Reagents & Chemicals",
    "SOP for Material and Product Labeling in Production Area"
  ]
};

const generatePharmaSopContentLocal = (title: string, categoryId: string): string => {
  let dept = "Quality Control Division";
  let complianceCode = "SOP-QC-" + Math.floor(100 + Math.random() * 900);
  if (categoryId === "quality-assurance") {
    dept = "Quality Assurance Department";
    complianceCode = "SOP-QA-" + Math.floor(100 + Math.random() * 900);
  } else if (categoryId === "production") {
    dept = "Production & Manufacturing Division";
    complianceCode = "SOP-PRD-" + Math.floor(100 + Math.random() * 900);
  } else if (categoryId === "microbiology") {
    dept = "Microbiology Testing Laboratories";
    complianceCode = "SOP-MIC-" + Math.floor(100 + Math.random() * 900);
  } else if (categoryId === "warehouse") {
    dept = "Warehouse, Material Logistics & Storage";
    complianceCode = "SOP-WHS-" + Math.floor(100 + Math.random() * 900);
  } else if (categoryId === "validation") {
    dept = "Validation & Calibration Department";
    complianceCode = "SOP-VAL-" + Math.floor(100 + Math.random() * 900);
  }

  const lowerTitle = title.toLowerCase();

  // High Fidelity custom written GxP articles for the requested titles
  if (lowerTitle.includes("validation of dissolution methods") || lowerTitle.includes("validation of dissolution testing")) {
    return `### Validation of Dissolution Methods (USP <1224> / <1225> & GxP Compliance)
**1. OBJECTIVE & SCOPE**
This standard protocol defines the validation criteria for dissolution testing methods applied to solid oral dosage forms. It covers both mechanical validation of the dissolution apparatus (USP App 1 & App 2) and analytical validation of the quantification method (HPLC or UV-Vis).

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: FDA Guidance on Dissolution Testing, USP Chapter <711> and <1092>.

**3. PROTOCOL PROCEDURES & METHODOLOGICAL PARAMETERS**
* **Specificity & Placebo Interference**: Conduct analysis of a placebo matrix containing all formulation excipients except the active ingredient. Ensure zero chromatographic peaks or spectrophotometric absorbances interfere with the active drug release peak ($\le 2.0\%$ interference limit).
* **Linearity and Range**: Establish linearity by preparing standard concentrations ranging from 20% of the lowest expected release concentration to 150% of the maximum dose concentration. Correlation coefficient ($R^2$) must be $\ge 0.999$.
* **Accuracy and Recovery**: Prepare triplicate sample preparations spiked with known amounts of active drug at three levels: 50%, 80%, and 120% of the nominal dose concentration. Mean recovery must reside between 95.0% and 105.0%.
* **Precision & Intermediate Reproducibility**: Perform six replicate sample injections on the same day (system precision, RSD $\le 2.0\%$). Repeat the run on different days, on different instruments, or by different analysts to demonstrate intermediate precision (RSD $\le 5.0\%$).
* **Filter Compatibility & Adsorption Study**: Compare filtered and centrifuged solutions. If filtration is used, establish the initial volume of filtrate to be discarded (volume mapping: e.g., discard initial 3-5 mL) to prevent active drug loss via membrane adsorption.
* **Solution Stability**: Ensure the standard and sample solutions remain chemically stable inside the sampling vials under designated storage conditions for at least 24 hours ($98.0\% - 102.0\%$ recovery compared to fresh standard).
* **Robustness & Hydrodynamic Evaluation**: Deliberately vary rotational speeds ($\pm 4$ rpm), vessel temperature ($\pm 0.5^\circ$C), and mobile phase pH ($\pm 0.2$ units) to verify analytical resilience.

**4. CRITICAL DOCUMENTATION & METROLOGICAL LOGS**
* Verify vessel-to-vessel temperatures remain exactly at $37.0^\circ\text{C} \pm 0.5^\circ\text{C}$ throughout the entire testing run.
* Report and document any non-conformance immediately in the CAPA tracking ledger. Keep physical recorder printouts for 5 years.`;
  }

  if (lowerTitle.includes("common audit findings in analytical method validation") || lowerTitle.includes("audit findings")) {
    return `### Common Audit Findings in Analytical Method Validation (FDA & WHO GxP)
**1. OBJECTIVE & SCOPE**
This guideline provides QC analysts and QA managers with a list of the most frequent non-conformances identified during FDA, WHO, and MHRA audits of analytical method validations. It includes practical tips on how to prevent these findings and maintain cGMP compliance.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: ICH Q2(R1), USP <1225>, and FDA Method Validation Guidance.

**3. CORE ANALYSIS & MITIGATION CHECKLISTS**
* **Insufficient Specificity with Forced Degradation**: *Audit Finding:* Failing to expose the active compound to stress conditions (heat, acid, base, peroxide, UV) to prove that the HPLC method is "stability-indicating" and can resolve active substances from all degradation peaks. *Corrective Action:* Perform forced degradation validation showing chromatograms with resolution factors $> 1.5$ for all peaks.
* **Failure to Validate Filtration / Filter Adsorption**: *Audit Finding:* Analysts discard arbitrary volumes of sample during dissolution or chromatography preparation without holding a validation report proving that the filter does not adsorb the analyte. *Corrective Action:* Validate filter suitability by comparing centrifuged and filtered samples at multiple dilution points.
* **Inadequate Standard and Sample Solution Stability**: *Audit Finding:* Stability runs are left in the autosampler for 48 hours, but validation documentation only supports 12 hours of solution stability. *Corrective Action:* Run a 48-hour continuous stability study comparing old preparations to fresh standards.
* **Lack of Baseline Noise Documentation for LOD and LOQ**: *Audit Finding:* Using arbitrary peaks to state detection/quantitation limits without presenting Signal-to-Noise (S/N) calculations. *Corrective Action:* Record actual chromatograms displaying standard S/N ratio of 3:1 for LOD and 10:1 for LOQ.
* **Poor System Suitability Performance Records**: *Audit Finding:* Failure to record tailing factor, column plate count, or injection reproducibility for standard injections before commencing sample analysis. *Corrective Action:* Ensure the HPLC chromatography software has automated system suitability controls locked with strict passing limits ($T \le 2.0$, $N > 2000$, RSD $\le 2.0\%$).

**4. REGULATORY PREVENTATIVE MEASURES**
* Conduct internal mock audits of raw instrument integration parameters monthly.
* Store all original chromatograms, including aborted runs and dry injection tests, with clear audit-trail comments.`;
  }

  if (lowerTitle.includes("stability study failures and investigations") || lowerTitle.includes("stability-study-failures") || lowerTitle.includes("stability study failures")) {
    return `### Stability Study Failures and Investigations in Pharmaceuticals
**1. OBJECTIVE & SCOPE**
This protocol defines the formal investigation steps to be executed upon observing an Out-of-Specification (OOS) or Out-of-Trend (OOT) result during stability studies of active substances and finished products.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: ICH Q1A(R2) Guidelines and FDA Guidance on OOS Investigations.

**3. MANDATORY STABILITY FAILURE INVESTIGATION STEPS**
* **Phase I: Immediate Laboratory Assessment**
  1. Immediately check the incubator logs and temperature charts for the stability chamber ($25^\circ\text{C} \pm 2^\circ\text{C} / 60\% \pm 5\% \text{ RH}$ or $40^\circ\text{C} \pm 2^\circ\text{C} / 75\% \pm 5\% \text{ RH}$).
  2. Inspect the specific sample container for physical anomalies, cracks, cap looseness, or moisture ingress.
  3. Verify the calibration status of the chromatographic instruments, standard preparation weights, and dilution calculations.
  4. Perform a system suitability review of the HPLC run. If a confirmed laboratory error is discovered, invalidate the test, document the cause, and repeat the analysis.
* **Phase II: Manufacturing and Packing Investigation**
  1. If no laboratory error is found, elevate the investigation to Phase II to review raw batch logs.
  2. Evaluate the active ingredient (API) batch quality, mixing parameters, blending uniformity, and core moisture levels.
  3. Inspect the packaging integrity. Verify that blister foil, desiccant count, and cap seal pressure settings were operating within specification during packaging.
* **Degradation Pathway Evaluation**
  1. Run impurity profiling on the stability sample to identify the specific degradation product (e.g., hydrolysis, oxidation, or photolysis products).
  2. Compare the impurity levels against ICH qualification thresholds ($0.1\%$ or $0.15\%$).

**4. PREVENTATIVE & CORRECTIVE ACTION (CAPA) REGISTRY**
* Document all stability chamber excursions lasting more than 24 hours.
* Store all data logs for a minimum of 5 years in secure QA vaults. Log stability anomalies in the CAPA database within 24 hours of reporting.`;
  }

  if (lowerTitle.includes("calibration of glassware") || lowerTitle.includes("calibration of volumetric glassware") || lowerTitle.includes("calibration of class a")) {
    return `### Calibration of Volumetric Glassware in Quality Control (Gravimetric Method)
**1. OBJECTIVE & SCOPE**
This procedure outlines the gravimetric calibration standards and metrological tolerances for Class A volumetric flasks, pipettes, and burettes used in the analytical testing laboratory.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: ASTM E542, ISO 4787, and USP Chapter <1251>.

**3. DETAILED CALIBRATION STEPS**
* **Environmental Preparation**: Run calibration in a draft-free room with temperature stabilized between $20^\circ\text{C}$ and $25^\circ\text{C}$. The water used for calibration must be Grade II deionized water, allowed to equilibrate to room temperature.
* **Weighing the Clean Vessel**: Ensure the glassware is completely dry and free from grease. Place the empty vessel (or a receiving beaker) on a calibrated analytical balance and tare.
* **Filling and Levelling**: Fill the glassware precisely to the graduation mark (meniscus aligned with the top of the mark). Read the meniscus at eye level.
* **Recording Weight and Temperature**: Deliver the water volume (for pipettes/burettes) or record the weight of filled water (for flasks). Record the water temperature immediately using a calibrated thermometer ($\pm 0.1^\circ\text{C}$).
* **Calculating Volume ($V$)**: Convert the observed weight ($W$) to volume using the temperature-dependent buoyancy correction factor ($Z$-factor):
  $$V = W \times Z$$
  *(The $Z$-factor incorporates the density of water and air buoyancy at the recorded temperature).*

**4. GLASSWARE METROLOGICAL TOLERANCES (CLASS A)**
* **Volumetric Flasks**: 10 mL ($\pm 0.02$ mL), 50 mL ($\pm 0.05$ mL), 100 mL ($\pm 0.08$ mL), 250 mL ($\pm 0.12$ mL).
* **Transfer Pipettes**: 1 mL ($\pm 0.006$ mL), 5 mL ($\pm 0.015$ mL), 10 mL ($\pm 0.02$ mL), 25 mL ($\pm 0.03$ mL).
* **Burettes**: 10 mL ($\pm 0.02$ mL), 50 mL ($\pm 0.05$ mL).

**5. QA CONTROLS & LOGGING**
* Any glassware exceeding Class A limits must be immediately smashed and discarded.
* Label calibrated glassware with the calibration date, operator's signature, and recalibration due date (frequency: 12 months).`;
  }

  if (lowerTitle.includes("change control impact on validation") || lowerTitle.includes("change control impact") || lowerTitle.includes("4 steps to effective change control")) {
    return `### Change Control Impact on Validation Status (GxP Regulatory Standard)
**1. OBJECTIVE & SCOPE**
This protocol defines the mechanism for managing, risk-assessing, and executing change controls to prevent unapproved changes from compromising the validated status of pharmaceutical equipment, utilities, facilities, computer systems, and manufacturing processes.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: EU GMP Annex 15, FDA Quality Systems Guidance, and ICH Q10.

**3. THE FOUR STEPS OF AN EFFECTIVE CHANGE CONTROL PROCESS**
* **Step 1: Proposal, Classification & Logging**
  * Define the exact modification being proposed (e.g., software patch, material source change, punch tool design change).
  * Classify the change based on risk: *Minor* (no validation impact), *Moderate* (requires localized verification), or *Major* (requires complete re-qualification/re-validation).
* **Step 2: Risk Assessment & Technical Evaluation**
  * Convene a cross-functional team (QA, QC, Engineering, Regulatory Affairs) to identify impact.
  * Determine if the change alters the Critical Quality Attributes (CQAs) or Critical Process Parameters (CPPs).
  * Define the specific prospective testing, re-validation, or regulatory filing requirements before approval.
* **Step 3: Execution, Re-Validation & Verification**
  * Execute the modification under controlled conditions.
  * Complete validation activities defined in the change control plan (e.g. 3 consecutive PQ runs).
  * Update relevant SOPs, training records, and calibration charts.
* **Step 4: Review, Closure, and QA Sign-off**
  * QA compiles all validation reports, test results, and updated documentation.
  * Formally close the change control file. Commercial release of batches produced post-change is strictly prohibited until QA closure.

**4. REGULATORY RECORDS ARCHIVAL**
* Store change control files permanently in QA records.
* Maintain a centralized digital index to easily track status during regulatory inspections.`;
  }

  if (lowerTitle.includes("principle and working of ph probes") || lowerTitle.includes("how to care for ph meter") || lowerTitle.includes("ph value, ph scale")) {
    return `### Principle and Calibration of pH Probes & Electrodes
**1. OBJECTIVE & SCOPE**
This document outlines the electrochemical principles, calibration rules, and standard maintenance instructions for glass pH electrodes used in quality control laboratories.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: USP Chapter <791> and GxP standards.

**3. ELECTROCHEMICAL PRINCIPLES**
* The pH probe operates by measuring the electric potential difference between a glass indicator electrode (sensitive to hydrogen ion activity) and a stable reference electrode (usually silver/silver chloride, $Ag/AgCl$).
* The measured potential ($E$) is defined by the **Nernst Equation**:
  $$E = E^0 - \frac{2.303 RT}{F} \text{pH}$$
  *Where $R$ is the gas constant, $T$ is temperature in Kelvin, $F$ is Faraday's constant, and $E^0$ is the standard potential of the cell. At $25^\circ\text{C}$, the theoretical slope is $-59.16$ mV per pH unit.*

**4. MANDATORY CALIBRATION PROCEDURE**
* **Three-Point Calibration**: Calibrate daily using three certified standard reference buffers: pH 4.01 (acidic), pH 7.00 (neutral), and pH 10.01 (alkaline).
* **Temperature Compensation**: Always connect a temperature sensor. The pH meter must dynamically adjust the slope based on the temperature of the buffers.
* **Calibration Slope Limits**: The probe slope must lie between **95.0% and 102.0%**. If the slope falls below 95%, invalidate the calibration, clean the probe, and recalibrate.

**5. HIGH FIDELITY ELECTRODE CARE RULES**
* **Storage**: Store the pH electrode bulb immersed in **3M Potassium Chloride ($KCl$) solution**. **NEVER** store the electrode in distilled or deionized water, as this will leach ions from the thin glass membrane and ruin the electrode.
* **Cleaning**: For protein clogging, clean with pepsin in 0.1M HCl. For grease, rinse with Isopropyl Alcohol.
* **Handling**: Rinse with purified water between measurements. Blot gently with lint-free tissue; **never** wipe the glass bulb, as this generates electrostatic charges that cause reading drift.`;
  }

  if (lowerTitle.includes("gmp requirements in pharmaceuticals") || lowerTitle.includes("gmp requirements")) {
    return `### GMP Requirements in Pharmaceutical Manufacturing (Quality & Compliance)
**1. OBJECTIVE & SCOPE**
This standard outlines the baseline GMP guidelines required for active pharmaceutical ingredient (API) and finished drug product manufacturing facilities to comply with international regulatory audits.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: 21 CFR Parts 210/211, and EU GMP Volume 4.

**3. CORE COMPLIANCE SYSTEMS**
* **Quality Management System (QMS)**: Establish written policies for deviations, CAPA, change controls, annual product reviews (APQR), and self-inspections.
* **Personnel and Gowning**: Operators must undergo continuous training in hygiene and technical protocols. Staff working in Grade A sterile zones must wear sterilized protective gowns, face masks, hood caps, and double nitrile gloves.
* **Facility Air Handling & HVAC**: Separate pressure zones must be maintained using positive pressure cascades. Sterile production areas must utilize High-Efficiency Particulate Air (HEPA) filters delivering Grade A laminar air flow ($0.45\text{ m/s} \pm 20\%$).
* **Equipment Design & Materials**: Contact surfaces must be constructed of non-reactive, non-adsorbing materials (e.g., Stainless Steel 316L). Fully validated Clean-In-Place (CIP) systems must be utilized to prevent batch cross-contamination.
* **Documentation & Data Integrity (ALCOA+)**: All GxP records must strictly follow the ALCOA+ rules: Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, and Available.

**4. REGULATORY SANCTIONS & AUDITING**
* Conduct formal internal self-audits at least twice a year.
* Maintain all manufacturing records, batch files, and analytical chromatograms for 1 year past the batch expiration date, or 5 years post-distribution, whichever is greater.`;
  }

  if (lowerTitle.includes("out of specification investigation") || lowerTitle.includes("investigation of oos results") || lowerTitle.includes("possible causes of out of specification")) {
    return `### Out of Specification (OOS) Investigation Standard Operating Procedure
**1. OBJECTIVE & SCOPE**
This SOP defines the step-by-step investigation protocol to be implemented immediately upon generating any analytical result that falls outside pharmacopoeial monograph limits or internal finished product specifications.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: FDA Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production (October 2006).

**3. MANDATORY INVESTIGATION PHASES**
* **PHASE I: LABORATORY INVESTIGATION**
  * **Phase IA (Immediate Operator Check)**: The analyst must preserve all original sample preparations, standard solutions, glassware, and chromatography columns. Check for power fluctuations, instrument baseline drift, air bubbles in mobile phase, or obvious dilution errors.
  * **Phase IB (Analyst-Supervisor Verification)**: The supervisor must verify raw calculation sheets, balance printouts, and chromatography integration methods. No re-testing is allowed without identifying an obvious laboratory error.
  * **Handling Confirmed Lab Errors**: If a clear laboratory error is documented, invalidate the original result, log the cause in the laboratory incident database, and repeat the test with fresh sample.
* **PHASE II: MANUFACTURING PROCESS AUDIT**
  * If no laboratory error is found, a Phase II investigation must be initiated.
  * Audit the manufacturing facility. Check dispensing weights, blender rotation count, drying temperatures, moisture content logs, and HVAC pressure.
* **RE-TESTING AND AVERAGING LIMITS**
  * Re-testing must be performed under an approved protocol by a second, senior analyst.
  * **Averaging Rules**: Never average an out-of-specification result with passing results to mask a failure. Original results must always be reported alongside re-test values.

**4. REGULATORY ARCHIVAL & CAPA**
* File OOS investigation reports to QA within 15 working days.
* Maintain a digital log of all laboratory incidents, trending recurring causes for CAPA review.`;
  }

  if (lowerTitle.includes("tips for hazardous chemical handling") || lowerTitle.includes("hazardous chemical")) {
    return `### SOP for Handling and Storage of Hazardous Chemicals in Laboratories
**1. OBJECTIVE & SCOPE**
This standard protocol defines safety precautions, PPE standards, and storage rules for flammable, corrosive, toxic, and reactive chemicals used in pharmaceutical QC testing.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: OSHA Hazard Communication Standard (29 CFR 1910.1200).

**3. CORE HANDLING & SAFETY ACTIONS**
* **Personal Protective Equipment (PPE)**: Operators must wear thick lab coats, splash-resistant goggles, face-shields when decanting acids, and heavy chemical-resistant nitrile gloves. Never handle concentrated solvents outside a validated fume hood.
* **Chemical Storage Segregation**: Store chemicals strictly by compatibility matrix:
  * Acids and Bases must reside in separate corrosive cabinets.
  * Flammable solvents (Acetonitrile, Methanol, Acetone) must be kept in certified fire-resistant storage cabinets.
  * Strong oxidizers (e.g. Perchloric acid, Hydrogen Peroxide) must never contact organic substances or solvents.
* **Emergency Eye Wash & Shower Units**: Ensure eye wash and chemical safety showers are located within 10 seconds of all chemical handling benches. Test and flush these units weekly.
* **Spill Kit Deployment**: Maintain acid, base, and organic solvent neutralization spill kits in the department. In the event of a spill, evacuate immediate staff, apply absorbent powder from outer borders inward, and neutralize before cleaning.

**4. AUDIT CONTROLS**
* Inspect chemical hazard labels daily. Every container must carry appropriate GHS symbols.
* Dispose of chemical waste exclusively in designated color-coded containers. Keep disposal sheets for 5 years.`;
  }

  if (lowerTitle.includes("various shapes of pharmaceutical dosage") || lowerTitle.includes("dosage forms") || lowerTitle.includes("shape of dosage")) {
    return `### Clinical and Industrial Significance of Dosage Form Shapes
**1. OBJECTIVE & SCOPE**
This technical review details the functional and manufacturing benefits of different solid oral dosage form shapes (tablets, caplets, capsules) in pharmaceutical design.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: FDA Guidance on Size, Shape, and Physical Attributes of Tablets.

**3. DOSAGE FORM SHAPE ADVANTAGES**
* **Patient Compliance and Swallowability**: Oval and capsule-shaped tablets (caplets) are clinically proven to be easier to swallow than round tablets of equivalent volume. This reduces choking hazards, particularly in pediatric and geriatric demographics.
* **Film-Coating Efficiency**: Round tablets with double-radius bevels ensure uniform film-coating. Sharp or irregular angles on star, square, or heart-shaped tablets lead to "edge-chipping", where the coating film thins out and peels.
* **Mechanical Strength & Compression**: Round and oval tooling distributes compression forces evenly inside the die. Complex shapes cause non-uniform stress patterns, leading to "capping" or "lamination" failures during high-speed compression runs.
* **Product Identification & Anti-Counterfeiting**: Distinctive dosage shapes (e.g., shield, pentagonal, or bi-convex shapes) serve as a defense against counterfeiting and aid in medication identification.

**4. MANUFACTURING GUIDELINES**
* Perform tablet friability tests ($<1.0\%$ weight loss limit) on all batches to verify mechanical strength.
* Document and catalog compression punch and die shapes in the tooling logbook.`;
  }

  if (lowerTitle.includes("limitations and advances in dissolution testing") || lowerTitle.includes("dissolution testing")) {
    return `### Limitations and Technological Advances in Dissolution Testing
**1. OBJECTIVE & SCOPE**
This technical paper analyzes the limitations of traditional USP Apparatus 1 (Basket) and Apparatus 2 (Paddle) and examines modern technological advancements in dissolution testing.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: USP Chapter <711> and cGMP guidelines.

**3. CRITICAL ANALYSIS & COMPARISONS**
* **Traditional USP App 1 & App 2 Limitations**:
  * *Hydrodynamic Dead Zones*: Standard round-bottom vessels suffer from a "coning" effect under the paddle, where disintegrated particles accumulate in a dead zone, leading to artificially low dissolution rates.
  * *High Vibration Sensitivity*: Minor structural vibrations from surrounding vacuum pumps can increase dissolution rates by up to 15%, causing artificial stability results.
  * *Floating Dosage Forms*: Standard paddles are ineffective for floating capsules unless sinkers are manually attached, which can restrict water circulation.
* **Modern Advances in Dissolution**:
  * *USP Apparatus 4 (Flow-Through Cell)*: Solves coning by utilizing a continuous flow of fresh media through a column. Ideal for poorly soluble drugs, microspheres, and implants.
  * *Fiber-Optic Real-Time Dissolution*: Replaces manual autosampling. Imbedded fiber-optic probes record UV absorbance directly inside the vessel at 10-second intervals, providing highly accurate dissolution profiles.
  * *Automated Vessels Cleaning & Medium De-aeration*: Removes dissolved oxygen inline to prevent bubbles from clinging to tablet surfaces, which is a major cause of dissolution variance.

**4. GXP PROCEDURAL NOTES**
* Maintain mechanical calibration of the dissolution tester strictly within ASTM E2503 guidelines.
* Run de-aeration routines prior to every dissolution run, verifying dissolved oxygen is $< 6.0$ ppm.`;
  }

  if (lowerTitle.includes("non-conformance in pharmaceuticals") || lowerTitle.includes("non-conformance") || lowerTitle.includes("deviation")) {
    return `### SOP for Handling Non-Conformances and Deviations in GMP Facilities
**1. OBJECTIVE & SCOPE**
This standard protocol defines the procedure for logging, classifying, investigating, and closing deviations or non-conformances observed in GxP operations.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: EU GMP Annex 15, FDA Quality Systems Guidance, and ICH Q10.

**3. DETAILED DEVIATION CLASSIFICATION & ROOT CAUSE ANALYSIS**
* **Classification Matrix**:
  * *Minor Deviation*: No impact on product safety, quality, or purity (e.g., minor document formatting error, temporary room temperature fluctuation).
  * *Major Deviation*: Likely impact on critical process parameters (e.g., minor pump leak during batch processing, bulk material storage excursion).
  * *Critical Deviation*: Direct, proven impact on product safety and efficacy (e.g., sterilization temperature failure, microbial contamination in cleanroom).
* **Investigation & Root Cause Analysis (RCA)**:
  * QA must coordinate with relevant departments to identify root causes.
  * Apply standardized tools: **The 5-Why Analysis** (asking "why" five times to drill down to the fundamental cause) or **Ishikawa (Fishbone) Diagrams** evaluating: Method, Machine, Material, Measurement, Mother Nature, and Manpower.
* **CAPA (Corrective and Preventive Action) Planning**:
  * Establish clear corrective actions to resolve the immediate issue.
  * Implement preventative actions to prevent recurrence (e.g., updating software, altering gaskets, revising training).

**4. QA CLOSURE PROTOCOL**
* Close all deviations within 30 calendar days of discovery.
* Product release of batches containing open major or critical deviations is strictly prohibited.`;
  }

  if (lowerTitle.includes("improving quality through supplier audits") || lowerTitle.includes("supplier audits")) {
    return `### SOP for Vendor Qualification and Supplier GMP Auditing
**1. OBJECTIVE & SCOPE**
This standard outlines the qualification, performance assessment, and GxP auditing of raw material (API/Excipients), packaging material, and laboratory instrument suppliers.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: ICH Q10 (Pharmaceutical Quality System) and FDA Vendor Regulations.

**3. VENDOR QUALIFICATION WORKFLOW**
* **Initial Screening & Questionnaire**: Senders must issue a comprehensive quality questionnaire to new vendors evaluating their facility size, regulatory history, ISO certifications, and cleanroom air systems.
* **On-Site GMP Auditing**:
  * QA Lead auditors must conduct on-site inspections of API suppliers every 2-3 years.
  * Audit check points: Traceability of starting materials, warehousing humidity charts, analytical laboratory standards, batch folder completeness, and water purification system loop validation.
* **Quality Agreement Drafting**: Establish a legally-binding Quality Agreement defining parameters like critical quality limits, batch notification of changes, delivery quarantine rules, and analytical method specifications.
* **Performance Rating**: Calculate a monthly Supplier Quality Index (SQI) based on: 1) Batch delivery rejection rate ($\le 1.0\%$ target), 2) Certificate of Analysis (CoA) reliability, 3) Response time to audit findings.

**4. REGULATORY LOGGING & ARCHIVAL**
* Store supplier audit reports and signed Quality Agreements for at least 10 years in secure archives.
* Maintain an Approved Vendor List (AVL) on the laboratory intranet, updating it on a weekly basis.`;
  }

  if (lowerTitle.includes("in-process control methods") || lowerTitle.includes("in-process control") || lowerTitle.includes("api manufacturing")) {
    return `### In-Process Control (IPC) Methods for Active Pharmaceutical Ingredient (API) Manufacturing
**1. OBJECTIVE & SCOPE**
This standard outlines the Critical Process Parameters (CPPs) and In-Process Control (IPC) testing routines to secure batch consistency in chemical API synthesis and crystallizations.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: ICH Q7 (GMP for Active Pharmaceutical Ingredients).

**3. CORE IPC SCHEME & TESTS**
* **Chemical Reaction Monitoring**: Track reaction completion using Thin-Layer Chromatography (TLC) or High-Performance Liquid Chromatography (HPLC). Reaction is complete only when the unreacted starting material peak drops below $0.5\%$.
* **Crystallization & Precipitation Controls**: Control crystallization rate by slowly reducing solvent temperatures ($\pm 0.5^\circ\text{C}$ ramp) and adjusting the agitator tip speed. Monitor particle size distribution (PSD) using optical microscopes or laser diffraction.
* **pH and Buffering Verifications**: Maintain reaction mixtures within targeted pH zones ($\pm 0.1$ pH units) using calibrated industrial pH probes to prevent acid-catalyzed hydrolysis of the active substance.
* **Centrifugation and Washing**: Wash the isolated wet cake with chilled organic modifiers. Monitor washing efficiency by checking the residual starting materials or inorganic salts in the filtrate stream.
* **Loss on Drying (LOD) & Drying Endpoint**: Test cake moisture inside vacuum tray dryers. The drying endpoint is confirmed only when the LOD result is $\le 1.0\%$.

**4. DOCUMENTATION STANDARDS**
* Log all IPC results in real-time on the master batch card.
* Ensure any out-of-limits IPC test triggers an immediate supervisor alert and formal deviation log.`;
  }

  if (lowerTitle.includes("ultrasonic cleaning") || lowerTitle.includes("ultrasonic-cleaning")) {
    return `### SOP for Ultrasonic Cleaning of Tablet Compression Tooling
**1. OBJECTIVE & SCOPE**
This procedure outlines the instructions and bath conditions for ultrasonic cleaning of tablet punch tooling, dies, and complex pump parts.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: cGMP guidelines and equipment manuals.

**3. DETAILED OPERATIONAL PROCEDURES**
* **Punch Tooling Disassembly**: Detach punch tooling from the high-speed tablet press. Inspect punch heads, tips, and barrels for mechanical defects before cleaning.
* **The Cavitation Principle**: The ultrasonic bath generates high-frequency sound waves (40 kHz) that create microscopic vacuum bubbles in the liquid. These bubbles implode against tooling crevices, removing oil, powder residues, and corrosion without scratching critical metal surfaces.
* **Bath Configuration**:
  * **Solution**: Prepare a 2% non-abrasive alkaline detergent solution (e.g., Decon 90).
  * **Bath Temperature**: Maintain the water bath temperature at $50^\circ\text{C} \pm 5^\circ\text{C}$.
  * **Duration**: Run the ultrasonic cycle for precisely 15 minutes.
* **Rinsing & Hot Air Drying**:
  * Remove tooling from the bath and rinse with Purified Water (PW).
  * Blow dry with dry, oil-free compressed air or place inside a drying cabinet at $60^\circ\text{C}$ until moisture is completely eliminated.
* **Anti-Corrosion Lubrication**: Spray a micro-thin layer of food-grade oil over the clean tooling and store them in secure, custom-molded wooden storage drawers.

**4. AUDIT CHECKLISTS**
* Affix a green 'CLEANED' card to the tooling drawers.
* Log bath temperatures, cycle times, and detergent batch numbers in the department logs.`;
  }

  if (lowerTitle.includes("urs") || lowerTitle.includes("user requirement specification")) {
    return `### Preparation of User Requirement Specifications (URS) for Pharmaceutical Equipments
**1. OBJECTIVE & SCOPE**
This document outlines the standard guidelines for preparing User Requirement Specifications (URS) to procure GxP equipment, systems, and software.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: GAMP 5 and EU GMP Annex 15.

**3. CORE URS SECTIONS & REQUIREMENTS**
* **Operational Requirements**: Define the exact performance targets, including speeds (e.g., 50,000 tablets per hour), volumes (e.g., 200L jacketed vessel), and continuous run times.
* **Physical & Environmental Footprint**: Specify mechanical dimensions, cleanroom class compatibility (e.g., must reside inside Class D cleanroom), and utilities required (electricity, oil-free air, purified water).
* **Materials of Construction**: Product contact parts must be non-reactive and non-adsorbing (e.g., Stainless Steel 316L, Teflon seals, USP Class VI silicones).
* **Cleaning and Sterilization Requirements**: Equipment must be designed for easy disassembly and compatibility with standard sanitization agents (e.g., 70% IPA, 2% NaOH).
* **Software Compliance (21 CFR Part 11)**: Computer control interfaces must have password-restricted multi-level user profiles (Admin, Supervisor, Operator) and a secure, non-modifiable electronic audit trail logging all actions.
* **Validation Expectations**: The vendor must supply a complete documentation package supporting Design Qualification (DQ), Installation Qualification (IQ), and Operational Qualification (OQ).

**4. TECHNICAL REVIEW & SIGN-OFF**
* The URS must be drafted by Engineering, reviewed by Production and QC, and approved by QA prior to issuing to vendors.`;
  }

  if (lowerTitle.includes("excel") || lowerTitle.includes("validation of excel")) {
    return `### SOP for Validation of Excel Calculation Sheets in Quality Control Laboratories
**1. OBJECTIVE & SCOPE**
This protocol defines validation requirements for Excel spreadsheets used to compute GxP results (e.g., HPLC potency, dissolution profiles, LOD assays).

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: FDA 21 CFR Part 11 and GAMP 5.

**3. VALIDATION PROTOCOL & CONTROLS**
* **Classification**: Excel spreadsheets with custom formulas are classified as GAMP 5 Category 4 (Configured Products) and require full verification testing.
* **Cell Formula Locking & Security**:
  * Lock all cells containing equations or static reference values (e.g., molar mass constants) to prevent accidental modification.
  * Protect the sheet with a strong password held exclusively by the QA validation team.
  * Color-code input cells (e.g., light blue) and output calculation cells (e.g., light green) to prevent confusion.
* **Manual Verification Testing (Parallel Test)**:
  * Input a set of test data (including boundaries and negative values) into the Excel sheet.
  * Perform the same calculations manually using a hand calculator. The Excel results must match the manual calculations exactly ($100.0\%$ concordance).
* **Formula Documentation**: Document all mathematical formulas and cell cell logic in a dedicated Validation Report.
* **Electronic Signature Controls**: For sheets that save data, implement secure login controls to log which operator performed the calculation.

**4. REGULATORY ARCHIVAL**
* Save validated master templates as read-only on the laboratory server.
* Store Excel validation protocols, test sheets, and QA authorization forms in QA files for 10 years.`;
  }

  if (lowerTitle.includes("color codes") || lowerTitle.includes("color-codes") || lowerTitle.includes("gas cylinder")) {
    return `### SOP for Color Coding and Safe Storage of Gas Cylinders
**1. OBJECTIVE & SCOPE**
This procedure defines the identification colors and safety guidelines for gas cylinders used in pharmaceutical facilities.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: ISO 32, EN 1089-3, and OSHA guidelines.

**3. MANDATORY COLOR CODING SCHEME**
* **Oxygen ($O_2$)**: Black body with white shoulder (or solid white body).
* **Nitrogen ($N_2$)**: Grey body with black shoulder.
* **Carbon Dioxide ($CO_2$)**: Grey body with grey shoulder.
* **Helium ($He$)**: Brown body with brown shoulder.
* **Argon ($Ar$)**: Blue body with blue shoulder.
* **Hydrogen ($H_2$)**: Red body with red shoulder (flammable gas).
* **Compressed Air**: Grey body with white and black quarters on the shoulder.

**4. SAFETY STORAGE & HANDLING CONTROLS**
* **Secure Support**: Store all cylinders strictly in an upright position secured with heavy steel chains or inside custom-designed cylinder metal racks.
* **Separation of Gases**: Keep flammable gases (Hydrogen) separated from oxidizers (Oxygen) by a minimum distance of 20 feet or by a 5-foot-high fire-resistant wall with a 30-minute rating.
* **Leak Detection**: Check cylinder regulator joints weekly using soap solution. Never use open flames for leak checking.
* **Pressure Regulators**: Always use calibrated double-stage brass or stainless steel regulators compatible with the specific gas.

**5. REGULATORY DOCUMENTATION**
* Ensure all gas cylinders are labeled with gas type, supplier name, and hydrostatic test status. Cylinders older than 5 years without a hydrostatic test stamp must be returned immediately to the vendor.`;
  }

  if (lowerTitle.includes("sustained") || lowerTitle.includes("prolonged") || lowerTitle.includes("release tablets")) {
    return `### Comparative Review: Sustained Release (SR) vs. Prolonged Release (PR) Tablets
**1. OBJECTIVE & SCOPE**
This technical review details the pharmacodynamic and manufacturing differences between Sustained Release (SR) and Prolonged Release (PR) oral dosage forms.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: FDA Guidance on Modified Release Oral Dosage Forms.

**3. DETAILED TECHNICAL COMPARISON**
* **Sustained Release (SR) Tablets**:
  * *Release Kinetics*: SR tablets are designed to release the active drug at a constant, zero-order rate ($K_0$) over a extended period of 12-24 hours.
  * *Pharmacokinetic Profile*: SR tablets maintain relatively flat, uniform therapeutic drug levels in blood plasma, eliminating peak-to-trough fluctuations.
  * *Formulation Mechanics*: Formulated using hydrophilic or hydrophobic polymer matrices (e.g., HPMC, ethylcellulose) or osmotic pump systems (OROS).
* **Prolonged Release (PR) Tablets**:
  * *Release Kinetics*: PR tablets extend the release duration of the drug compared to an immediate-release tablet (often following first-order kinetics), but they do not maintain a flat drug release rate.
  * *Pharmacokinetic Profile*: PR tablets aim to reduce the dosing frequency (e.g., once daily instead of three times daily) but can still display peak-to-trough fluctuations.
  * *Formulation Mechanics*: Formulated with coating barriers, erosion tablets, or micro-encapsulated beads.

**4. MANUFACTURING QUALITY CONTROL (QC)**
* Ensure both SR and PR formulations undergo multi-point dissolution testing at defined intervals (e.g., 1h, 2h, 4h, 8h, 12h) to verify the target release profile.
* Monitor tablet hardness during compression, as polymer swelling and drug release rates are highly dependent on core density.`;
  }

  if (lowerTitle.includes("preparation of buffer solutions") || lowerTitle.includes("buffer solutions") || lowerTitle.includes("buffer")) {
    return `### SOP for Preparation and Standardization of Laboratory Buffer Solutions
**1. OBJECTIVE & SCOPE**
This standard protocol defines preparation steps and pH verification rules for buffer solutions used in HPLC and wet chemical analysis.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: USP Chapter <821> and wet-chemistry guidelines.

**3. THEORETICAL PRINCIPLES**
* A buffer solution resists pH changes upon minor acid or base additions. It consists of a weak acid and its conjugate salt (e.g., acetic acid / sodium acetate) or a weak base and its salt.
* The pH of a buffer is defined by the **Henderson-Hasselbalch Equation**:
  $$\text{pH} = \text{p}K_a + \log \frac{[\text{Salt}]}{[\text{Acid}]}$$

**4. MANDATORY PREPARATION STEPS**
* **Weighing and Dissolution**: Weigh buffer salts using calibrated analytical balances. Dissolve completely in Grade II deionized water using a magnetic stirrer.
* **pH Standardization**:
  * Standardize a pH meter using three fresh certified buffer standards (pH 4.01, 7.00, and 10.01).
  * Place the electrode into the prepared buffer solution and record the temperature.
  * Adjust the pH precisely to target limits ($\pm 0.05$ units) by adding concentrated hydrochloric acid ($HCl$) or sodium hydroxide ($NaOH$) dropwise.
* **Volume Adjustment**: Transfer the solution into a volumetric flask and dilute to volume with deionized water. Perform a final pH check to confirm stability.

**5. LAB STORAGE & SHELF LIFE LIMITS**
* Store buffer solutions in clean borosilicate glass bottles.
* Store organic-containing HPLC buffers at $2^\circ\text{C}-8^\circ\text{C}$ to prevent microbial growth.
* Assign a maximum shelf life of **7 days** for aqueous buffers, and **24 hours** for phosphate buffers. Label bottles with the expiration date and preparer's signature.`;
  }

  if (lowerTitle.includes("climatic zones") || lowerTitle.includes("stability testing") || lowerTitle.includes("stability study")) {
    return `### SOP for Climatic Zones & Chamber Environmental Settings for Stability Testing
**1. OBJECTIVE & SCOPE**
This standard defines the environmental conditions and test frequencies for stability studies based on global climatic zones.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: ICH Q1A(R2) Guidelines.

**3. THE FIVE CLIMATIC ZONES**
* **Zone I (Temperate)**: $21^\circ\text{C} \pm 2^\circ\text{C} \ / \ 45\% \pm 5\% \text{ RH}$.
* **Zone II (Subtropical & Mediterranean)**: $25^\circ\text{C} \pm 2^\circ\text{C} \ / \ 60\% \pm 5\% \text{ RH}$ *(Standard baseline storage)*.
* **Zone III (Hot & Dry)**: $30^\circ\text{C} \pm 2^\circ\text{C} \ / \ 35\% \pm 5\% \text{ RH}$.
* **Zone IVa (Hot & Humid)**: $30^\circ\text{C} \pm 2^\circ\text{C} \ / \ 65\% \pm 5\% \text{ RH}$.
* **Zone IVb (Hot & Very Humid)**: $30^\circ\text{C} \pm 2^\circ\text{C} \ / \ 75\% \pm 5\% \text{ RH}$ *(Applied to ASEAN and tropical regions)*.

**4. STANDARD STABILITY STORAGE CHAMBER CONDITIONS**
* **Long Term Studies**: $25^\circ\text{C} \pm 2^\circ\text{C} / 60\% \pm 5\% \text{ RH}$ or $30^\circ\text{C} \pm 2^\circ\text{C} / 75\% \pm 5\% \text{ RH}$ (depending on target zone). Testing frequency: 0, 3, 6, 9, 12, 18, 24, and 36 months.
* **Accelerated Studies**: $40^\circ\text{C} \pm 2^\circ\text{C} / 75\% \pm 5\% \text{ RH}$. Testing frequency: 0, 3, and 6 months.
* **Intermediate Studies**: $30^\circ\text{C} \pm 2^\circ\text{C} / 65\% \pm 5\% \text{ RH}$ (run if accelerated studies fail).

**5. GXP ENVIRONMENTAL MONITORING**
* Maintain continuous automated temperature and humidity recorders. Alarm notifications must trigger immediately if conditions deviate for $> 30$ minutes.
* Store physical alarm records in QA logs for audit verification.`;
  }

  if (lowerTitle.includes("relative response factor") || lowerTitle.includes("rrf") || lowerTitle.includes("relative-response-factor")) {
    return `### SOP for Relative Response Factor (RRF) and its Calculation in HPLC Analysis
**1. OBJECTIVE & SCOPE**
This standard outlines the procedure to calculate and apply the Relative Response Factor (RRF) to quantify related impurities without needing pure impurity reference standards for routine assays.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: ICH Q3A/B and USP Chapter <1225>.

**3. DETAILED METHODOLOGY & CALCULATIONS**
* **The RRF Principle**: RRF compensates for differences in UV detector response between an impurity and the active drug substance due to differences in molar absorptivity at the chosen wavelength.
* **RRF Calculation**:
  * Run separate linearity studies for both the active drug substance standard and the pure isolated impurity standard over identical concentration ranges (e.g. LOQ to 150% of specification).
  * Plot concentration versus peak area and calculate the slope of the linearity lines.
  * Compute RRF using the formula:
    $$\text{RRF} = \frac{\text{Slope of the Impurity Line}}{\text{Slope of the Drug Substance Line}}$$
* **Application in Routine Testing**:
  * Quantify the impurity concentration using the modified formula:
    $$\%\text{Impurity} = \frac{\text{Area of Impurity}}{\text{Area of standard}} \times \frac{\text{Weight of standard}}{\text{Weight of sample}} \times \frac{\text{Standard Purity}}{\text{RRF}} \times 100$$

**4. QA CONTROLS & ARCHIVAL**
* RRF values must be hardcoded in chromatographic software methods. Ensure RRF values are verified and re-evaluated upon making major column or mobile phase changes.
* Store RRF validation raw data sheets permanently in QA.`;
  }

  if (lowerTitle.includes("system suitability") || lowerTitle.includes("system-suitability")) {
    return `### SOP for System Suitability Testing in HPLC Chromatography
**1. OBJECTIVE & SCOPE**
This protocol defines the mandatory chromatographic parameters and system suitability limits that must be verified before performing routine GxP injections on high-performance liquid chromatographs.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: USP Chapter <621> and FDA guidelines on Chromatography.

**3. MANDATORY CRITICAL SUITABILITY METRICS**
* **Injection Precision / Reproducibility**:
  * Inject the standard preparation in five replicate injections ($n=5$).
  * The Relative Standard Deviation (RSD) of standard peak areas must be **$\le 2.0\%$** (or $\le 1.0\%$ for active ingredients).
* **Column Efficiency / Theoretical Plates ($N$)**:
  * Calculated as:
    $$N = 16 \left( \frac{t_R}{W} \right)^2$$
  * *Limit:* The column plate count must be **$> 2000$** plates.
* **Tailing Factor ($T$)**:
  * Calculated at 5% peak height as:
    $$T = \frac{W_{0.05}}{2f}$$
  * *Limit:* Tailing factor must be **$\le 2.0$** (ideally close to 1.0; fronting should not occur).
* **Resolution ($R_s$)**:
  * Calculated between adjacent critical peaks as:
    $$R_s = \frac{2(t_{R2} - t_{R1})}{W_1 + W_2}$$
  * *Limit:* Resolution must be **$> 1.5$** to ensure baseline separation.

**4. OOC / FAILURE ACTION PROCEDURES**
* If any parameter fails suitability checks, suspend sample analysis. Re-prime the system, purge mobile phases, check column temperature, and recalibrate.
* Run results generated before passing system suitability are strictly invalid.`;
  }

  if (lowerTitle.includes("hplc calibration") || lowerTitle.includes("calibration of hplc") || lowerTitle.includes("calibration of gas chromatography") || lowerTitle.includes("calibration of gc")) {
    return `### SOP for Metrological Calibration of High-Performance Liquid Chromatographs (HPLC)
**1. OBJECTIVE & SCOPE**
This standard protocol defines the metrological calibration requirements, test methods, and acceptance tolerances for HPLC pumps, autosamplers, detectors, and column ovens.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: USP <1058> (Analytical Instrument Qualification) and WHO standards.

**3. DETAILED PERFORMANCE QUALIFICATION TESTS**
* **Flow Rate Accuracy**:
  * Connect a calibrated digital flowmeter (or use a gravimetric water collect flask method over 10 minutes) at a target flow rate of 1.0 mL/min.
  * *Limit:* Actual flow must reside within **$1.0 \pm 0.01$ mL/min** (deviation $\le 1.0\%$).
* **Wavelength Accuracy (Detector)**:
  * Inject a solution of Caffeine standard (which exhibits known absorption maxima at 205 nm and 273 nm). Perform a spectral scan.
  * *Limit:* Observed maxima must lie within **$\pm 2$ nm** of the reference wavelength.
* **Injector Precision**:
  * Perform six replicate injections of a standard caffeine sample (10 µL injection volume).
  * *Limit:* Peak area RSD must be **$\le 0.5\%$**.
* **Column Oven Temperature Accuracy**:
  * Insert a calibrated thermocouple directly into the column compartment set at $40.0^\circ\text{C}$.
  * *Limit:* Observed temperature must be within **$\pm 1.0^\circ\text{C}$** of setpoint.

**4. OUT OF SERVICE PROTOCOL**
* If any point falls outside the allowable calibration tolerance, immediately label the instrument 'OUT OF SERVICE', log an incident report, and alert the metrologist.
* Keep all calibration logs and physical chromatogram charts on file for 5 years.`;
  }

  // General GxP template for other titles (with highly contextual details)
  const templateKeywords = lowerTitle.split(" ").filter(w => w.length > 3).slice(0, 4);
  return `### SOP for ${title} (GxP cGMP Compliance Directive)
**1. OBJECTIVE & SCOPE**
To define the step-by-step instructions, quality standards, and GxP compliance procedures for **${title}** inside the **${dept}** to meet modern global regulatory audit expectations.

**2. REGULATORY REFERENCE CODE**
* Document Reference: **${complianceCode}**
* Complies with: FDA, WHO, and ICH guidelines.

**3. DETAILED TECHNICAL PROCEDURES**
* **Prerequisite Setup & Line Clearance**: Ensure the work area is clean, dry, and free from previous batch residues. Verify the calibration and maintenance logs of all involved instruments are active.
* **Operational Protocol**: Perform the operation precisely as described in the master validation dossier. Record all physical variables (e.g. temperature, time, mass, flow rate) in real-time.
* **In-Process Quality Checks (IPQC)**: Perform periodic evaluations every 30 minutes to ensure key process variables remain within validated specifications.
* **Double-Verification Control**: A secondary qualified operator or supervisor must co-sign critical measurements to comply with dual-control GxP standards.
* **Sanitization and Shutdown**: Post-operation, clean all product contact surfaces using validated sanitization agents (e.g., 70% Isopropyl Alcohol) and apply a green 'CLEANED' status card showing: Product name, Cleaned by, Date, and Expiry date.

**4. REGULATORY LOGGING & ARCHIVAL**
* Ensure all activities are logged in real-time in the specific device logbook.
* Retain calibration records and raw printouts for a minimum of 5 years in secure, fireproof archives.
* Document any operational anomalies via a formal non-conformance report (NCR) to the QA supervisor.`;
};

// Enrich the base Categories in-place with the comprehensive list of extra SOPs
pharmaCategories.forEach(category => {
  const titles = extraSops[category.id] || [];
  titles.forEach(title => {
    if (!category.subtopics.some(st => st.title === title)) {
      const content = generatePharmaSopContentLocal(title, category.id);
      const keywords = title.toLowerCase().split(" ").filter(w => w.length > 3).slice(0, 4);
      category.subtopics.push({
        title,
        content,
        keywords: keywords.length > 0 ? keywords : ["sop", "gxp"]
      });
    }
  });
});
