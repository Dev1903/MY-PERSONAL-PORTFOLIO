const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Oracle SQL", level: 75 },
    { name: "React Native", level: 60 },
    { name: "Python (Basics)", level: 85 },
    { name: "MERN-Stack", level: 80 },
    { name: "C", level: 75 },
    { name: "C++", level: 85 },
    { name: "Java", level: 85 },
    { name: "Git", level: 60 },
  ];
  
  const skillsContainer = document.getElementById("skillsContainer");
  
  // Split skills into two columns
  const leftCol = document.createElement("div");
  leftCol.className = "col-12 col-lg-6";
  
  const rightCol = document.createElement("div");
  rightCol.className = "col-12 col-lg-6";
  
  skills.forEach((skill, index) => {
    const skillHTML = `
      <div class="item">
        <div class="item-text">
          <span>${skill.name}</span>
          <span class="w-${skill.level}">${skill.level}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar w-${skill.level}"></div>
        </div>
      </div>
    `;
  
    if (index < Math.ceil(skills.length / 2)) {
      leftCol.innerHTML += skillHTML;
    } else {
      rightCol.innerHTML += skillHTML;
    }
  });
  
  skillsContainer.appendChild(leftCol);
  skillsContainer.appendChild(rightCol);
  