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
