import { useState } from "react";
import { btechData } from "./branchData.js";

const fallbackStyles = {
  appContainer: {
    fontFamily: "Segoe UI, Roboto, sans-serif",
    padding: "24px",
    minHeight: "100vh",
    position: "relative",
  },
  mainTitle: { color: "#ffffff", fontSize: "2.3rem", fontWeight: "800", marginBottom: "8px" },
  mainSubtitle: { color: "#e2e8f0", fontSize: "1rem", marginBottom: "24px" },
  contentLayout: { display: "flex", flexDirection: "column", gap: "22px", maxWidth: "1480px", margin: "0 auto", alignItems: "stretch" },
  sidebar: { width: "100%", flexShrink: "0" },
  sidebarHeading: { fontSize: "1.2rem", color: "#e2e8f0", marginBottom: "16px", fontWeight: "800" },
  branchRail: { display: "flex", gap: "14px", overflowX: "auto", paddingBottom: "8px", scrollbarWidth: "thin" },
  branchCard: {
    width: "260px",
    flex: "0 0 260px",
    padding: "0",
    marginBottom: "12px",
    borderRadius: "18px",
    border: "2px solid",
    textAlign: "left",
    cursor: "pointer",
    boxShadow: "0 18px 40px rgba(15,23,42,0.18)",
    transition: "all 0.25s ease",
    overflow: "hidden",
    display: "block",
  },
  branchCardActive: {
    transform: "translateY(-2px)",
    boxShadow: "0 24px 60px rgba(15,23,42,0.32)",
  },
  cardImageWrap: { position: "relative" },
  cardInner: { padding: "14px 16px 16px" },
  cardMedia: { width: "100%", height: "130px", objectFit: "cover", display: "block", filter: "saturate(1.06) contrast(1.02)" },
  cardOverlay: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,23,42,0.02), rgba(15,23,42,0.34))" },
  cardName: { margin: "0", fontSize: "1.05rem", fontWeight: "800" },
  cardBadge: { fontSize: "0.85rem", fontWeight: "500" },
  cardMetaRow: { display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "10px" },
  branchPill: { display: "inline-flex", alignItems: "center", borderRadius: "999px", padding: "6px 10px", backgroundColor: "rgba(255,255,255,0.16)", color: "#ffffff", fontSize: "0.78rem", fontWeight: "700" },
  infoSection: { marginTop: "16px" },
  infoSectionTitle: { fontSize: "1.05rem", fontWeight: "800", marginBottom: "10px", color: "#0f172a" },
  detailGrid: { display: "flex", gap: "14px", overflowX: "auto", paddingBottom: "6px" },
  detailCard: { minWidth: "220px", flex: "0 0 220px" },
  detailItem: { backgroundColor: "rgba(14,165,233,0.08)", borderRadius: "14px", padding: "14px", border: "1px solid rgba(14,165,233,0.12)" },
  detailLabel: { display: "block", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: "6px", fontWeight: "700" },
  detailValue: { fontSize: "0.98rem", color: "#0f172a", fontWeight: "600" },
  longTextPanel: { backgroundColor: "rgba(255,255,255,0.78)", borderRadius: "18px", padding: "16px 18px", border: "1px solid rgba(148,163,184,0.18)", marginTop: "14px" },
  detailsPanel: {
    flexGrow: "1",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.24)",
    boxShadow: "0 24px 70px rgba(15,23,42,0.22)",
    padding: "28px",
  },
  panelBackdrop: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.9,
    backgroundSize: "220% 220%",
    animation: "branchFlow 14s ease-in-out infinite alternate",
  },
  panelContent: { position: "relative", zIndex: 1 },
  panelTitle: { fontSize: "1.65rem", fontWeight: "800", marginBottom: "16px" },
  cardText: { fontSize: "1rem", marginBottom: "8px" },
  heroFrame: { position: "relative", borderRadius: "22px", padding: "1px", marginBottom: "18px", overflow: "hidden" },
  heroImage: { width: "100%", maxHeight: "320px", objectFit: "cover", display: "block", borderRadius: "21px", boxShadow: "0 18px 40px rgba(15,23,42,0.16)" },
  heroImageShade: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,6,23,0.12), rgba(2,6,23,0.55))" },
  heroTagRow: { display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" },
  heroTag: { display: "inline-flex", alignItems: "center", padding: "8px 12px", borderRadius: "999px", background: "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(124,58,237,0.12))", color: "#0f172a", fontWeight: "800", fontSize: "0.82rem" },
  pathTitle: { fontSize: "1.05rem", fontWeight: "800", marginTop: "18px", marginBottom: "10px" },
  pathGrid: { display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "14px" },
  pathPill: { display: "inline-flex", alignItems: "center", padding: "10px 12px", borderRadius: "999px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(148,163,184,0.22)", color: "#0f172a", fontWeight: "700" },
};

export default function BranchExplorer({ styles = fallbackStyles, onOpenBranch, initialActiveBranch = null }) {
  const mergedStyles = { ...fallbackStyles, ...styles };
  const [activeBranch, setActiveBranch] = useState(initialActiveBranch);
  const panelBackdropStyle = activeBranch
    ? {
        backgroundImage: `radial-gradient(circle at 20% 20%, ${activeBranch.accentFrom}33, transparent 35%), radial-gradient(circle at 80% 20%, ${activeBranch.accentTo}44, transparent 30%), linear-gradient(135deg, ${activeBranch.accentFrom}18, ${activeBranch.accentTo}20)`,
      }
    : {
        backgroundImage: "linear-gradient(135deg, rgba(14,165,233,0.10), rgba(124,58,237,0.10), rgba(236,72,153,0.08))",
      };

  return (
    <div style={mergedStyles.appContainer}>
      <header style={{ textAlign: "center", marginBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.18)", paddingBottom: "24px" }}>
        <h1 style={mergedStyles.mainTitle}>🎓 PathFinder B.Tech Portal</h1>
        <p style={mergedStyles.mainSubtitle}>Choose a branch to compare workload, labs, career paths, and visual cues.</p>
      </header>

      <div style={mergedStyles.contentLayout}>
        <aside style={mergedStyles.sidebar}>
          <h2 style={mergedStyles.sidebarHeading}>Choose a Branch:</h2>
          <div style={mergedStyles.branchRail}>
            {btechData.map((branch) => (
              <button
                key={branch.id}
                onClick={() => {
                  setActiveBranch(branch);
                  if (typeof onOpenBranch === "function") {
                    onOpenBranch(branch);
                  }
                }}
                style={{
                  ...mergedStyles.branchCard,
                  backgroundColor: activeBranch?.id === branch.id ? "#2b6cb0" : "#ffffff",
                  color: activeBranch?.id === branch.id ? "#ffffff" : "#2d3748",
                  borderColor: activeBranch?.id === branch.id ? "#2b6cb0" : "#e2e8f0",
                  ...(activeBranch?.id === branch.id ? mergedStyles.branchCardActive : {}),
                }}
              >
                <div style={mergedStyles.cardImageWrap}>
                  <img
                    src={branch.image}
                    alt={branch.name}
                    style={mergedStyles.cardMedia}
                    onError={(event) => {
                      if (branch.fallbackImage && event.currentTarget.src !== window.location.origin + branch.fallbackImage) {
                        event.currentTarget.src = branch.fallbackImage;
                      }
                    }}
                  />
                  <div style={mergedStyles.cardOverlay} />
                </div>
                <div style={mergedStyles.cardInner}>
                  <h3 style={mergedStyles.cardName}>{branch.name}</h3>
                  <span style={mergedStyles.cardBadge}>{branch.demand}</span>
                  <div style={mergedStyles.cardMetaRow}>
                    <span style={mergedStyles.branchPill}>Salary</span>
                    <span style={mergedStyles.branchPill}>Growth</span>
                    <span style={mergedStyles.branchPill}>Skills</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <main style={mergedStyles.detailsPanel}>
          <div style={{ ...mergedStyles.panelBackdrop, ...panelBackdropStyle }} />
          {activeBranch ? (
            <div style={mergedStyles.panelContent}>
              <div style={mergedStyles.heroFrame}>
                <img
                  src={activeBranch.image}
                  alt={activeBranch.name}
                  style={mergedStyles.heroImage}
                  onError={(event) => {
                    if (activeBranch.fallbackImage && event.currentTarget.src !== window.location.origin + activeBranch.fallbackImage) {
                      event.currentTarget.src = activeBranch.fallbackImage;
                    }
                  }}
                />
                <div style={mergedStyles.heroImageShade} />
              </div>
              <div style={mergedStyles.heroTagRow}>
                <span style={mergedStyles.heroTag}>{activeBranch.demand}</span>
                <span style={mergedStyles.heroTag}>{activeBranch.careerGrowth} growth</span>
                <span style={mergedStyles.heroTag}>{activeBranch.jobRoles.length} career paths</span>
              </div>
              <h2 style={mergedStyles.panelTitle}>{activeBranch.name}</h2>
              <p style={mergedStyles.cardText}>A quick look at the workload, labs, jobs, and growth path for this branch.</p>
              <h3 style={mergedStyles.pathTitle}>If you study this, you can become</h3>
              <div style={mergedStyles.pathGrid}>
                {activeBranch.jobRoles.map((role) => (
                  <span key={role} style={mergedStyles.pathPill}>{role}</span>
                ))}
              </div>
              <div style={mergedStyles.infoSection}>
                <h3 style={mergedStyles.infoSectionTitle}>Infrastructure & Outcomes</h3>
                <div style={mergedStyles.detailGrid}>
                  <div style={{ ...mergedStyles.detailItem, ...mergedStyles.detailCard }}>
                    <span style={mergedStyles.detailLabel}>Demand</span>
                    <span style={mergedStyles.detailValue}>{activeBranch.demand}</span>
                  </div>
                  <div style={{ ...mergedStyles.detailItem, ...mergedStyles.detailCard }}>
                    <span style={mergedStyles.detailLabel}>Starting Salary</span>
                    <span style={mergedStyles.detailValue}>{activeBranch.startingSalary}</span>
                  </div>
                  <div style={{ ...mergedStyles.detailItem, ...mergedStyles.detailCard }}>
                    <span style={mergedStyles.detailLabel}>Career Growth</span>
                    <span style={mergedStyles.detailValue}>{activeBranch.careerGrowth}</span>
                  </div>
                  <div style={{ ...mergedStyles.detailItem, ...mergedStyles.detailCard }}>
                    <span style={mergedStyles.detailLabel}>Key Skills</span>
                    <span style={mergedStyles.detailValue}>{activeBranch.keySkills.join(", ")}</span>
                  </div>
                  <div style={{ ...mergedStyles.detailItem, ...mergedStyles.detailCard }}>
                    <span style={mergedStyles.detailLabel}>Top Companies</span>
                    <span style={mergedStyles.detailValue}>{activeBranch.topCompanies.join(", ")}</span>
                  </div>
                </div>
              </div>

              <div style={mergedStyles.longTextPanel}>
                <p style={mergedStyles.cardText}><strong>Study Pressure:</strong> {activeBranch.studyPressure}</p>
                <p style={mergedStyles.cardText}><strong>Lab Reality:</strong> {activeBranch.labReality}</p>
                <p style={mergedStyles.cardText}><strong>College Vibe:</strong> {activeBranch.collegeVibe}</p>
                <p style={mergedStyles.cardText}><strong>Future Growth:</strong> {activeBranch.futureGrowth}</p>
              </div>
            </div>
          ) : (
            <div style={mergedStyles.panelContent}>
              <h2 style={mergedStyles.panelTitle}>Select a branch</h2>
              <p style={mergedStyles.cardText}>Pick one of the branches on the left to see the study load and career details.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}