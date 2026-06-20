// src/CollegeDetailPage.jsx


export default function CollegeDetailPage({ styles, college, onNavigate }) {
  if (!college) {
    return (
      <div style={styles.detailsPanel}>
        <h2 style={styles.panelTitle}>No College Selected</h2>
        <p style={styles.cardText}>Please go back and choose a college.</p>
      </div>
    );
  }

  return (
    <div style={styles.detailsPanel}>
      <h2 style={styles.panelTitle}>{college.name}</h2>
      <p style={styles.cardText}>{college.description}</p>

      <div style={styles.detailGrid}>
        <div style={styles.detailItem}>
          <span style={styles.detailLabel}>Location</span>
          <span style={styles.detailValue}>{college.location}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.detailLabel}>Ranking</span>
          <span style={styles.detailValue}>{college.ranking}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.detailLabel}>Fees</span>
          <span style={styles.detailValue}>{college.fees}</span>
        </div>
      </div>

      <button
        style={styles.branchCard}
        onClick={() => onNavigate("compare")}
      >
        🏫 Compare Colleges
      </button>
    </div>
  );
}
