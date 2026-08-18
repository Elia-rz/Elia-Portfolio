export const profile = {
  name: "Elia Rezaeian",
  title: "UX Researcher & Human Factors Product Designer in AI",
  tagline:
    "I design and evaluate AI systems that people can actually trust — especially when the stakes are high.",
  bio: [
    "I'm a Human Factors Scientist with 4+ years of experience conducting user research, usability evaluation, human-centered design, and cognitive workload assessment in complex and safety-critical environments.",
    "I translate user needs and behavioral insights into actionable design improvements through mixed-methods research, stakeholder collaboration, and data-driven decision-making.",
    "I'm a published researcher with 10+ peer-reviewed publications, with a strong background in leading cross-functional projects, mentoring teams, and communicating findings to diverse audiences.",
    "I'm passionate about designing systems that improve user experience, safety, and real-world decision-making — particularly at the intersection of AI and human judgment.",
  ],
  email: "elia.rezaeian95@gmail.com",
  linkedin: "https://www.linkedin.com/in/eliarezaeian/",
  resumeUrl: "#",
  googleScholarUrl: "https://scholar.google.com/citations?user=oTws99AAAAAJ&hl=en",
  location: "United States",
  //  TODO: drop a photo in /public (e.g. /portrait.jpg) and set the path here.
  photoUrl: "",
  stats: [
    { label: "Years of experience", value: "5+" },
    { label: "Peer-reviewed publications", value: "10+" },
    { label: "Clinicians & users studied", value: "150+" },
  ],
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  authors: string;
  // Optional: path to a real venue logo (e.g. "/venues/jmir.png").
  // Leave empty to show an auto-generated monogram badge instead.
  logoUrl?: string;
  url?: string;
};

// Pulled from Google Scholar — verify against your profile and correct
// anything that looks off, since automated extraction can misread.
// https://scholar.google.com/citations?user=oTws99AAAAAJ&hl=en
export const publications: Publication[] = [
  {
    title:
      "Explainability and AI confidence in clinical decision support systems: Effects on trust, diagnostic performance, and cognitive load in breast cancer care",
    venue: "International Journal of Human–Computer Interaction",
    year: "2026",
    authors: "Rezaeian, Bayrak, Asan",
    logoUrl:"/venue/IJHCI.jpg",
    url:"https://www.tandfonline.com/doi/abs/10.1080/10447318.2025.2539458"
  },
  {
    title:
      "The impact of AI explanations on clinicians' trust and diagnostic accuracy in breast cancer",
    venue: "Applied Ergonomics",
    year: "2025",
    authors: "Rezaeian, Asan, Bayrak",
    url:"https://www.sciencedirect.com/science/article/pii/S0003687025001139",
    logoUrl:"/venue/applied.jpg"
  },
  {
    title:
      "Relationship between heart rate and perceived stress in intensive care unit residents: Exploratory analysis using Fitbit data",
    venue: "JMIR Formative Research",
    year: "2024",
    authors: "Wang, Rezaeian, Asan, Zhang, Liao",
    url:"https://formative.jmir.org/2024/1/e60759",
    logoUrl:"/venue/jmir.jpg"
  },
  {
    title: "An architecture to support graduated levels of trust for cancer diagnosis with AI",
    venue: "International Conference on Human-Computer Interaction",
    year: "2024",
    authors: "Rezaeian, Bayrak, Asan",
    logoUrl:"/venue/hci.jpg",
    url:"https://link.springer.com/chapter/10.1007/978-3-031-61966-3_37"
  },
  {
    title: "Customer churn prediction using data mining techniques for an Iranian payment application",
    venue: "International Conference on Information and Knowledge Technology",
    year: "2021",
    authors: "Rezaeian, Haghighi, Shahrabi",
    logoUrl:"/venue/ieee.jpg",
    url:"https://ieeexplore.ieee.org/document/9685502"
  },
  {
    title:
      "A systems dynamic approach to evaluate disruptions in large scale transit systems: A case study of PATH",
    venue: "System of Systems Engineering Conference (SoSE)",
    year: "2024",
    authors: "Khameneh, Rezaeian, Mansouri",
    logoUrl:"/venue/ieee.jpg",
    url:"https://ieeexplore.ieee.org/abstract/document/10620942"
  },
  {
    title:
      "Children with medical complexity care journey during COVID-19 from providers perspective: a qualitative study",
    venue: "BMC Health Services Research",
    year: "2025",
    authors: "Asan, Elkourdi, Super, Rezaeian, Percy, Clouser",
    logoUrl:"/venue/BMC.jpg",
    url:"https://link.springer.com/article/10.1186/s12913-025-12857-9"
  },
  {
    title: "Clinician perspectives on trust and adoption of AI in breast cancer diagnosis",
    venue: "IISE Transactions on Healthcare Systems Engineering",
    year: "2026",
    authors: "Rezaeian, Ghorbanichemazkati, Bayrak, Asan",
    logoUrl:"/venue/iise.jpg",
    url:"https://www.tandfonline.com/doi/abs/10.1080/24725579.2025.2611435"
  },
  {
    title:
      "How large language models can be used for teamwork and communication in healthcare settings: A scoping review",
    venue: "International Journal of Medical Informatics",
    year: "2026",
    authors: "Super, Rezaeian, Asan",
    logoUrl:"/venue/info.jpg",
    url:"https://www.sciencedirect.com/science/article/abs/pii/S1386505626003886"
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Case Studies" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  status?: "ongoing";
  timeline: string;
  team: string;
  role: string;
  audience: string;
  tools: string[];
  overview: string[];
  problem?: string[];
  goals: { title: string; description: string }[];
  process: { title: string; description: string }[];
  results: {
    intro: string;
    stats: { label: string; value: string }[];
    narrative: string[];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "trustworthy-ai-breast-cancer-diagnosis",
    title: "Designing Trustworthy AI for Breast Cancer Diagnosis",
    subtitle:
      "How explainable AI shapes clinicians' trust, cognitive load, and diagnostic performance in high-stakes breast cancer diagnosis.",
    timeline: "Dec 2023 – Aug 2024",
    team: "PhD Candidate + 2 Faculty Advisors",
    role: "Lead Human Factors & UX Researcher - PhD Dissertation Research",
    audience: "Oncologists & Radiologists",
    tools: ["Python", "Dash", "Plotly"],
    overview: [
      "This project is part of my PhD dissertation and examines how explainable AI (XAI) influences clinicians' trust, decision-making, and performance in breast cancer diagnosis. As AI-driven decision support systems become more common in clinical practice, clinicians must be able to understand and appropriately rely on AI recommendations, especially in high-stakes medical contexts.",
      "I designed and evaluated a custom AI-assisted diagnostic system in which clinicians interacted with different levels of explanation while reviewing medical images. By analyzing their diagnostic decisions, agreement with the AI, perceived trust, and cognitive load, I investigated how varying degrees of transparency shape clinical reasoning and reliance on AI.",
      "The findings from this work inform the design of trustworthy, user-centered AI systems that support clinicians in making informed and confident diagnostic decisions.",
    ],
    goals: [
      {
        title: "Assess clinicians' trust in AI recommendations",
        description: "Using validated trust rating scales across each explainability condition.",
      },
      {
        title: "Evaluate diagnostic performance",
        description: "Comparing diagnostic accuracy with and without AI explanations.",
      },
      {
        title: "Examine cognitive workload",
        description: "Using standardized workload assessment metrics to track mental demand and stress.",
      },
      {
        title:"assess the effect of demographics",
        description:"..."

      },
    ],
    process: [
      {
        title: "Recruitment & onboarding",
        description:
          "28 clinicians (oncologists and radiologists spanning early-career to senior experts) were recruited through medical associations, social platforms, and professional networks, then onboarded with a standardized tutorial and pre-experiment survey.",
      },
      {
        title: "Baseline (no AI support)",
        description:
          "Participants first reviewed a set of breast ultrasound images without any AI assistance, establishing a baseline for independent diagnostic accuracy.",
      },
      {
        title: "AI-assisted baseline (no explanation)",
        description:
          "Clinicians then diagnosed a new set of images with AI-generated recommendations but no accompanying explanation, rating their trust and agreement after each case.",
      },
      {
        title: "Explainability interventions",
        description:
          "In three subsequent conditions, clinicians interacted with the same AI system augmented with different explainability features (e.g., confidence indicators, model reasoning) — each a distinct design choice for supporting transparency and interpretability.",
      },
      {
        title: "Post-study interviews",
        description:
          "A subset of 11 clinicians took part in semi-structured interviews, analyzed using thematic analysis to surface deeper insight into how explainability shaped trust formation and real-world applicability.",
      },
    ],
    results: {
      intro:
        "This mixed-methods, interrupted time-series design tracked how clinicians' trust, cognitive workload, and diagnostic behavior evolved across five conditions — from an unassisted baseline through three explainability interventions.",
      stats: [
        { label: "Clinicians in the study", value: "28" },
        { label: "Post-study interviews", value: "11" },
        { label: "Diagnostic performance vs. baseline", value: "+18pt" },
      ],
      narrative: [
        "Diagnostic performance rose from roughly 57% at baseline to as high as 75% once explainability features were introduced, with trust and perceived accuracy tracking closely with performance across the explainability interventions.",
        "Interview data surfaced how clinicians reasoned about AI transparency in practice — where explanations built confidence, and where they risked adding cognitive burden without adding clarity.",
        "These findings directly inform best practices for designing transparent, trustworthy clinical decision-support systems that support — rather than replace — expert judgment.",
      ],
    },
  },
  {
    slug: "transparent-ai-wellness-coach",
    title: "Designing a Transparent AI Wellness Coach for Everyday Users",
    subtitle:
      "Extending trust-calibration research from clinical experts to everyday, non-expert users of AI-powered wellness guidance.",
    status: "ongoing",
    timeline: "Sep 2025 – Present",
    team: "PhD Candidate + 2 Faculty Advisors",
    role: "Human Factors & UX Scientist",
    audience: "Everyday, non-expert users",
    tools: ["Next.js", "Python", "HTML", "CSS"],
    overview: [
      "This project explores how an AI-powered wellness chatbot can support users in making healthier lifestyle choices while maintaining transparency, trust, and user agency. As conversational AI becomes increasingly common in health and wellness applications, users often struggle to understand why certain recommendations are made — which can reduce trust or lead to disengagement.",
      "I designed a wellness coach chatbot that delivers personalized guidance on diet, physical activity, and stress management, while explicitly communicating the reasoning behind its suggestions. The system balances personalization with clarity, aiming to help users feel informed rather than directed.",
      "This case study focuses on the design decisions behind the chatbot's interaction style, explanation strategies, and feedback mechanisms — and how these elements shape user trust and engagement in everyday health contexts.",
    ],
    problem: [
      "Prior research, including my earlier work with clinicians, has primarily examined how explainable AI affects trust and decision-making among expert users in high-stakes settings. Far less is known about how non-expert, everyday users interpret AI explanations, and how much transparency is appropriate to support calibrated trust in lower-risk contexts such as personal wellness.",
      "In consumer-facing wellness applications, AI systems face a critical design dilemma: too little explanation leaves users confused or skeptical, while too much can increase cognitive burden or encourage users to follow AI advice uncritically — especially for non-expert users, who may take overly authoritative explanations at face value.",
    ],
    goals: [
      {
        title: "Calibrate trust rather than maximize it",
        description:
          "Design explanations that help users assess when AI guidance is useful, without positioning the system as an unquestionable authority.",
      },
      {
        title: "Explore how much explainability is \"enough\" for non-experts",
        description:
          "Treat explanation depth as a design variable, testing how different levels of information affect understanding, confidence, and reliance.",
      },
      {
        title: "Prevent over-reliance through interaction design",
        description:
          "Encourage reflection and choice by avoiding prescriptive language and supporting user agency in decision-making.",
      },
      {
        title: "Minimize cognitive burden while maintaining clarity",
        description:
          "Present explanations in concise, conversational language that supports comprehension without overwhelming users.",
      },
    ],
    process: [
      {
        title: "Consent",
        description:
          "Participants review the study's purpose, risks, and data usage before providing informed consent — establishing transparency and trust before any AI interaction.",
      },
      {
        title: "Pre-experiment survey",
        description:
          "Participants share demographics, wellness background (diet, activity, sleep, stress), and familiarity with AI tools — kept lightweight to avoid unnecessary burden on non-expert users.",
      },
      {
        title: "Scenario selection",
        description:
          "Participants choose from three everyday wellness scenarios — healthy meal planning, increasing physical activity, or managing stress — grounding the interaction in familiar, low-risk decisions.",
      },
      {
        title: "Scenario-specific input",
        description:
          "Before the AI responds, participants answer a small set of scenario-specific questions (goals, constraints, budget, dietary needs) to ensure relevant, personalized guidance.",
      },
      {
        title: "AI interaction",
        description:
          "Participants receive personalized recommendations through condition-specific levels of explainability, with reasoning embedded directly in the conversation rather than framed as an authoritative verdict.",
      },
      {
        title: "Reflection & feedback",
        description:
          "After each scenario, participants rate trust, accuracy, clarity, confidence, willingness to follow the advice, and comfort sharing personal information — encouraging active evaluation over passive acceptance.",
      },
    ],
    results: {
      intro:
        "This study is currently in progress at Stevens Institute of Technology. Findings on how explanation depth affects everyday users' trust and reliance will be added here as the research concludes.",
      stats: [
        { label: "Wellness scenarios tested", value: "3" },
        { label: "Feedback dimensions per response", value: "7" },
        { label: "Status", value: "In progress" },
      ],
      narrative: [
        "Early design work builds directly on findings from my clinical XAI research, extending the question of \"how much explanation is enough\" from expert, high-stakes decision-making to everyday, low-stakes wellness contexts.",
      ],
    },
  },
];
