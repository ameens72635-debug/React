// src/AppController.jsx
import { useState } from "react";
import LandingPage from "./LandingPage.jsx";
import CollegeSelector from "./CollegeSelector.jsx";
import BranchExplorer from "./BranchExplorer.jsx";
import Quiz from "./Quiz.jsx";
import SalaryEstimator from "./SalaryEstimator.jsx";
import CollegeComparator from "./CollegeComparator.jsx";

export default function AppController() {
  const [page, setPage] = useState("landing");

  const styles = {
    appContainer: {
      fontFamily: "Segoe UI, Roboto, sans-serif",
      padding: "24px",
      minHeight: "100vh",
      color: "#0f172a",
    },
    mainTitle: { color: "#ffffff", fontSize: "2.4rem", fontWeight: "800", marginBottom: "8px", textShadow: "0 8px 24px rgba(15, 23, 42, 0.35)" },
    mainSubtitle: { color: "#e2e8f0", fontSize: "1rem", marginBottom: "24px" },
    cardGrid: { display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap", alignItems: "stretch" },
    branchCard: { padding: "18px 20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.24)", cursor: "pointer", background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #7c3aed 100%)", color: "#ffffff", fontSize: "1.05rem", minWidth: "190px", boxShadow: "0 18px 40px rgba(37, 99, 235, 0.28)" },
    subCard: { backgroundColor: "rgba(255,255,255,0.88)", backdropFilter: "blur(12px)", padding: "20px", borderRadius: "18px", border: "1px solid rgba(148,163,184,0.22)", boxShadow: "0 18px 50px rgba(15, 23, 42, 0.10)", minWidth: "250px", flex: "1 1 260px" },
    detailsPanel: { backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)", padding: "24px", borderRadius: "20px", boxShadow: "0 22px 60px rgba(15, 23, 42, 0.16)", border: "1px solid rgba(255,255,255,0.3)" },
    panelTitle: { fontSize: "1.5rem", fontWeight: "800", marginBottom: "16px", color: "#0f172a" },
    cardName: { fontSize: "1.05rem", fontWeight: "800", marginBottom: "8px", color: "#0f172a" },
    cardText: { fontSize: "0.98rem", marginBottom: "8px", color: "#334155" },
    salaryAlert: { background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(14,165,233,0.12))", padding: "18px", borderRadius: "16px", marginTop: "20px", border: "1px solid rgba(14,165,233,0.18)" },
    optionPill: { display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "999px", backgroundColor: "rgba(14,165,233,0.10)", color: "#0f172a", fontSize: "0.85rem", fontWeight: "700", marginRight: "8px", marginBottom: "8px" },
    pageHeader: { marginBottom: "28px", padding: "24px", borderRadius: "24px", background: "linear-gradient(135deg, rgba(15,23,42,0.82), rgba(37,99,235,0.55))", border: "1px solid rgba(255,255,255,0.16)", boxShadow: "0 24px 70px rgba(15,23,42,0.2)" },
    contentArea: { maxWidth: "1380px", margin: "0 auto" },
    contentLayout: { display: "flex", gap: "28px", alignItems: "stretch", flexWrap: "wrap" },
    sidebar: { width: "340px", flexShrink: "0" },
    sidebarHeading: { fontSize: "1.15rem", color: "#e2e8f0", marginBottom: "16px", fontWeight: "800" },
    cardBadge: { fontSize: "0.84rem", fontWeight: "700" },
    detailGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "16px", marginBottom: "12px" },
    detailItem: { backgroundColor: "rgba(14,165,233,0.08)", borderRadius: "14px", padding: "14px", border: "1px solid rgba(14,165,233,0.12)" },
    detailLabel: { display: "block", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: "6px", fontWeight: "700" },
    detailValue: { fontSize: "0.98rem", color: "#0f172a", fontWeight: "600" }
  };

  if (page === "landing") return <LandingPage styles={styles} onNavigate={setPage} />;
  if (page === "college") return <CollegeSelector styles={styles} />;
  if (page === "branch") return <BranchExplorer styles={styles} />;
  if (page === "quiz") return <Quiz styles={styles} />;
  if (page === "salary") return <SalaryEstimator styles={styles} />;
  if (page === "compare") return <CollegeComparator styles={styles} />;

  return <LandingPage styles={styles} onNavigate={setPage} />;
}
