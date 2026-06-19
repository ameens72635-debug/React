import { colleges } from './colleges';

export default function CollegeSelector({ styles }) {
  return (
    <div style={styles.detailsPanel}>
      <h2 style={styles.panelTitle}>🏫 Choose Your College</h2>
      <p style={styles.cardText}>Compare fees, available seats, branches, and career growth across the top options.</p>
      <div style={styles.cardGrid}>
        {colleges.map((college) => (
          <div key={college.id} style={styles.subCard}>
            <img
              src={college.image}
              alt={college.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "14px", marginBottom: "14px" }}
            />
            <h3 style={styles.cardName}>{college.name}</h3>
            <p style={styles.cardText}><strong>Location:</strong> {college.location}</p>
            <p style={styles.cardText}><strong>Fees:</strong> {college.fees}</p>
            <p style={styles.cardText}><strong>Available Seats:</strong> {college.availableSeats}</p>
            <p style={styles.cardText}><strong>Branches:</strong> {college.branches.join(", ")}</p>
            <p style={styles.cardText}><strong>Placements:</strong> {college.placements}</p>
            <p style={styles.cardText}><strong>Career Growth:</strong> {college.careerGrowth}</p>
            <p style={styles.cardText}><strong>Campus Vibe:</strong> {college.vibe}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
