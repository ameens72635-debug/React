const categoryMap = {
  cse: {
    title: "Software development and product engineering",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE for M.Tech or PSU routes", "Company coding rounds", "Hackathons and internships"],
    salary: ["Strong DSA", "Real projects", "Internships", "System design basics", "Portfolio and GitHub"]
  },
  cse_ai_ml: {
    title: "AI, machine learning, and applied software",
    gallery: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE for higher studies", "Research internships", "ML competitions and certifications"],
    salary: ["Python and math", "Model deployment", "Kaggle or projects", "Internships", "AI product thinking"]
  },
  ai: {
    title: "Artificial intelligence and automation",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE for M.Tech", "AI certifications", "Internships and research projects"],
    salary: ["Deep learning basics", "NLP or computer vision", "Project demos", "Math and statistics", "Strong portfolio"]
  },
  ml: {
    title: "Machine learning and data-driven product work",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE", "Data science masters routes", "Research and internship selection"],
    salary: ["Statistics first", "Feature engineering", "Experiment tracking", "Deployment", "End-to-end projects"]
  },
  ds: {
    title: "Analytics, dashboards, and decision support",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["MBA and analytics entrances", "GATE for technical masters", "Business analysis interviews"],
    salary: ["SQL and Excel", "Storytelling with data", "Dashboards", "Real business case studies", "Communication skills"]
  },
  ece: {
    title: "Embedded systems, telecom, and hardware products",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41e6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE", "ISRO or DRDO tests", "PSU technical exams"],
    salary: ["Embedded C and hardware", "VLSI basics", "Circuit design", "Lab projects", "Internships in electronics companies"]
  },
  eee: {
    title: "Power systems, energy, and electrical automation",
    gallery: [
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555661530-68c8e8a4b3e0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE", "PSU recruitments", "State and central electrical posts"],
    salary: ["Power systems knowledge", "Control systems", "Simulation tools", "Field exposure", "Project experience"]
  },
  mech: {
    title: "Machines, manufacturing, and design",
    gallery: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093588401-16b4c5f1f2b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE", "PSU and railway exams", "Design and manufacturing interviews"],
    salary: ["CAD and drafting", "Thermodynamics", "Manufacturing basics", "Practical workshop work", "Internships in plants or factories"]
  },
  civil: {
    title: "Infrastructure, construction, and planning",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505731132164-cca6635c8f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE", "IES/ESE", "State public works and metro jobs"],
    salary: ["Surveying and structures", "Site visits", "Estimator skills", "Software like AutoCAD or STAAD", "Internships at construction sites"]
  },
  aiml: {
    title: "AI product engineering and deployment",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    ],
    exams: ["GATE", "AI/ML competitions", "Research and startup internships"],
    salary: ["Python and data pipelines", "Cloud deployment", "Prompting and automation", "Project portfolio", "Interview practice"]
  }
};

const fallbackGallery = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
];

function getCategory(branchId) {
  if (branchId === "cse") return "cse";
  if (["cse_ai_ml", "ai", "ml", "aiml"].includes(branchId)) return branchId;
  if (branchId === "ds") return "ds";
  if (["ece", "eee"].includes(branchId)) return branchId;
  if (branchId === "mech") return "mech";
  if (branchId === "civil") return "civil";
  return "cse";
}

function SectionCard({ title, children, accent = "rgba(14,165,233,0.10)" }) {
  return (
    <section style={{
      background: "rgba(255,255,255,0.88)",
      border: "1px solid rgba(148,163,184,0.18)",
      borderRadius: "18px",
      padding: "18px",
      boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
      backgroundImage: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.82))`,
    }}>
      <h3 style={{ margin: "0 0 12px", color: "#0f172a", fontSize: "1.05rem", fontWeight: "800" }}>{title}</h3>
      <div style={{ color: "#1e293b", lineHeight: 1.7, fontSize: "0.98rem" }}>{children}</div>
    </section>
  );
}

export default function BranchDetailPage({ branch, styles = {} }) {
  const mergedStyles = {
    appContainer: {
      padding: "0 0 24px",
      minHeight: "100vh",
      color: "#ffffff",
    },
    pageWrap: {
      maxWidth: "1380px",
      margin: "0 auto",
      padding: "0 16px",
    },
    hero: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "28px",
      border: "1px solid rgba(255,255,255,0.16)",
      boxShadow: "0 24px 70px rgba(15,23,42,0.26)",
      background: "linear-gradient(135deg, rgba(15,23,42,0.88), rgba(37,99,235,0.52))",
      marginBottom: "20px",
    },
    heroImage: {
      width: "100%",
      height: "320px",
      objectFit: "cover",
      display: "block",
      opacity: 0.88,
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(2,6,23,0.12), rgba(2,6,23,0.72))",
    },
    heroContent: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "28px",
      gap: "10px",
    },
    title: {
      margin: 0,
      fontSize: "2.2rem",
      fontWeight: 900,
      textShadow: "0 10px 30px rgba(0,0,0,0.32)",
    },
    subtitle: {
      margin: 0,
      maxWidth: "760px",
      color: "#e2e8f0",
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    badgeRow: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      padding: "8px 12px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.16)",
      border: "1px solid rgba(255,255,255,0.18)",
      color: "#ffffff",
      fontSize: "0.84rem",
      fontWeight: 800,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "16px",
      marginBottom: "18px",
    },
    stack: {
      display: "grid",
      gap: "16px",
      marginTop: "18px",
    },
    pillRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    pill: {
      display: "inline-flex",
      padding: "9px 12px",
      borderRadius: "999px",
      background: "rgba(14,165,233,0.10)",
      border: "1px solid rgba(14,165,233,0.14)",
      color: "#0f172a",
      fontSize: "0.88rem",
      fontWeight: 700,
    },
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "14px",
    },
    galleryCard: {
      overflow: "hidden",
      borderRadius: "18px",
      border: "1px solid rgba(148,163,184,0.18)",
      boxShadow: "0 18px 40px rgba(15,23,42,0.10)",
      background: "#ffffff",
    },
    galleryImage: {
      width: "100%",
      height: "190px",
      objectFit: "cover",
      display: "block",
    },
    galleryCaption: {
      padding: "12px 14px",
      color: "#0f172a",
      fontSize: "0.92rem",
      fontWeight: 700,
    },
  };

  if (!branch) {
    return (
      <div style={mergedStyles.appContainer}>
        <div style={mergedStyles.pageWrap}>
          <SectionCard title="Select a branch first">
            Go back to the branch explorer and click any branch card to open its detailed page.
          </SectionCard>
        </div>
      </div>
    );
  }

  const category = getCategory(branch.id);
  const blueprint = categoryMap[category] || categoryMap.cse;
  const galleryImages = blueprint.gallery || fallbackGallery;
  const salarySteps = blueprint.salary;
  const examSteps = blueprint.exams;

  return (
    <div style={mergedStyles.appContainer}>
      <div style={mergedStyles.pageWrap}>
        <div style={mergedStyles.hero}>
          <img
            src={branch.image}
            alt={branch.name}
            style={mergedStyles.heroImage}
            onError={(event) => {
              if (branch.fallbackImage) {
                event.currentTarget.src = branch.fallbackImage;
              }
            }}
          />
          <div style={mergedStyles.heroOverlay} />
          <div style={mergedStyles.heroContent}>
            <div style={mergedStyles.badgeRow}>
              <span style={mergedStyles.badge}>{branch.demand}</span>
              <span style={mergedStyles.badge}>{branch.careerGrowth} growth</span>
              <span style={mergedStyles.badge}>{branch.startingSalary}</span>
            </div>
            <h1 style={mergedStyles.title}>{branch.name}</h1>
            <p style={mergedStyles.subtitle}>{blueprint.title}. This page shows the role path, placement reality, salary strategy, exam route, and future-study planning so students can choose with confidence.</p>
          </div>
        </div>

        <div style={mergedStyles.grid}>
          <SectionCard title="What you do in this branch" accent="rgba(14,165,233,0.12)">
            {branch.jobRoles.map((role) => (
              <span key={role} style={{ ...mergedStyles.pill, marginRight: "8px", marginBottom: "8px" }}>{role}</span>
            ))}
            <p style={{ marginTop: "14px" }}>{branch.studyPressure}</p>
            <p>{branch.labReality}</p>
          </SectionCard>

          <SectionCard title="Placement reality" accent="rgba(34,197,94,0.10)">
            <p>{branch.collegeVibe}</p>
            <p><strong>Top hiring companies:</strong> {branch.topCompanies.join(", ")}</p>
            <p><strong>Starting salary:</strong> {branch.startingSalary}</p>
            <p><strong>Growth outlook:</strong> {branch.futureGrowth}</p>
          </SectionCard>

          <SectionCard title="Government and exam path" accent="rgba(245,158,11,0.10)">
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              {examSteps.map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>{item}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="How to secure a high salary" accent="rgba(168,85,247,0.10)">
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              {salarySteps.map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>{item}</li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div style={mergedStyles.stack}>
          <SectionCard title="Study and future planning" accent="rgba(59,130,246,0.10)">
            <div style={mergedStyles.pillRow}>
              <span style={mergedStyles.pill}>1st year: foundations</span>
              <span style={mergedStyles.pill}>2nd year: projects</span>
              <span style={mergedStyles.pill}>3rd year: internships</span>
              <span style={mergedStyles.pill}>Final year: placements</span>
            </div>
            <p style={{ marginTop: "14px" }}>
              Build one strong project every semester, keep a clean resume, learn interview basics early, and keep improving communication so the branch turns into a real career instead of just a degree.
            </p>
          </SectionCard>

          <SectionCard title="Your journey in college" accent="rgba(20,184,166,0.10)">
            <p>
              Start with the basics, understand the core subjects, choose a practical project area, and then move toward internships, certifications, and placement practice. That path works for software, AI, core, and government-track students.
            </p>
            <p>
              The students who get strong results are usually the ones who stay consistent, build proof of work, and prepare for interviews from the second year itself.
            </p>
          </SectionCard>

          <SectionCard title="Real branch images" accent="rgba(244,114,182,0.10)">
            <div style={mergedStyles.gallery}>
              {galleryImages.map((imageUrl, index) => (
                <div key={imageUrl} style={mergedStyles.galleryCard}>
                  <img
                    src={imageUrl}
                    alt={`${branch.name} view ${index + 1}`}
                    style={mergedStyles.galleryImage}
                  />
                  <div style={mergedStyles.galleryCaption}>
                    {index === 0 ? branch.name : `Related study view ${index + 1}`}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
