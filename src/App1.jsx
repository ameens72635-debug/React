

function CollegeDetails() {
  return (
    <div style={{ color: "navy", fontSize: "18px", lineHeight: "1.6" }}>
      <p>
        I am currently pursuing my <b>B.Tech in Electrical and Electronics Engineering</b> 
        at <b>XYZ College of Engineering</b>, located in Chittoor, Andhra Pradesh. 
        As a 3rd-year student with a CGPA of <b>8.5</b>, I have gained strong 
        knowledge in core subjects such as <b>Java, Python, MySQL, HTML & CSS</b>. 
        My academic journey has been enriched with hands-on projects, teamwork, 
        and continuous learning, preparing me to become a <b>Java Full Stack Developer</b>.
      </p>

      <img
        style={{ width: 300, marginTop: "10px" }}
        src="https://www.bing.com/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        alt="College"
      />
    </div>
  );
}

function Hello() {
  return <p style={{ textAlign: "left" }}>Hello</p>;
}

function Galaxy(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.proces}</h1>
    </div>
  );
}

function Star() {
  return <Galaxy name="Ameen" proces="student" />;
}

function Animal() {
  return (
    <>
      <h1>Animals</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <p style={{ textAlign: "justify" }}>
          In 1924, Hidesaburō Ueno, an agricultural science professor at Tokyo Imperial University,
          adopted a golden-brown Akita puppy and named him Hachi. The two formed an incredibly tight bond.
          Every morning, Hachikō would walk with Professor Ueno to the Shibuya train station. When the workday ended,
          the devoted dog would return to the station right on time to greet his master as he got off the train.
        </p>
        <img
          style={{ width: 100 }}
          src="https://i.pinimg.com/736x/7c/5d/93/7c5d9348e5bf8a0fec9a7162155d66dd.jpg"
          alt="Dog"
        />
      </div>
      <Hello />
      <Star />
    </>
  );
}  // ✅ Closing brace added



// ✅ Default export (main component)
export default Animal;

// ✅ Named exports
export { CollegeDetails, Hello, Galaxy, Star,  };
