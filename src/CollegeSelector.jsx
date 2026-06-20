import { useState } from "react";
import { colleges } from './colleges';

export default function CollegeSelector({ styles, onOpenCollege, initialSelectedCollege = null }) {
  const [activeCollege, setActiveCollege] = useState(initialSelectedCollege);

  return (
    <div style={styles.detailsPanel}>
      <h2 style={styles.panelTitle}>🏫 Choose Your College</h2>
      <p style={styles.cardText}>Compare fees, seats, branches, and placements, then click a college to see the full details.</p>
      <div style={styles.cardGrid}>
        {colleges.map((college) => (
          <button
            key={college.id}
            type="button"
            onClick={() => {
              setActiveCollege(college);
              if (typeof onOpenCollege === "function") {
                onOpenCollege(college);
              }
            }}
            style={{
              ...styles.subCard,
              textAlign: "left",
              border: activeCollege?.id === college.id ? "2px solid #2b6cb0" : styles.subCard.border,
              transform: activeCollege?.id === college.id ? "translateY(-2px)" : "none",
            }}
          >
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
          </button>
        ))}
      </div>
    </div>
  );
}
