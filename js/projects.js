document.addEventListener("DOMContentLoaded", function () {
    const projects = [
      {
          title: "Augment Cart",
          description: "Augmented Reality (AR) based E-commerce Platform with 360° View and Virtual Tour — An immersive shopping experience that lets users explore virtual stores, view products in 360°, and interact with them in AR from home.",
          image: "images/project8.png",
          link: "https://augmentcart.bristidevburman.site"
        },
        {
          title: "Expense Tracker App",
          description: "I created this app to simplify tracking and organizing spending. 1. Add and categorize expenses 2. View a summary of your spending 3. Track your budget over time",
          image: "images/project7.png",
          link: "https://github.com/Dev1903/ExpenseTracker"
        },
        {
          title: "MERN-KART",
          description: "An e-commerce website built with the MERN stack, supporting user interaction, payments, and dynamic product view. (Wait a few minutes for the server to load.)",
          image: "images/project5.png",
          link: "https://mern-kart.bristidevburman.site"
        },
        {
          title: "CREDIT CARD FRAUD DETECTION",
          description: "A Machine Learning project which checks whether the credit card is fraud or authentic depending on several parameters",
          image: "images/project1.jpg",
          link: "https://github.com/Dev1903/Credit-Card-Fraud-Detection"
        },
        {
          title: "JAVA - AWT CALCULATOR",
          description: "A basic calculator application built with Java AWT package.",
          image: "images/project6.png",
          link: "https://github.com/Dev1903/JAVA-AWT-CALCULATOR"
        },
        {
          title: "NO SLEEP GOGGLES",
          description: "This project utilizes an Arduino Nano and an IR sensor to detect closed eyes. It stops a motorized car, activates a buzzer, and lights up a red LED until the eyes are open again.",
          image: "images/project2.jpg",
          link: "https://github.com/Dev1903/No-Sleep-Goggles"
        },
        {
          title: "AUTOMATED HOME SAFETY DEVICE",
          description: "A home safety monitoring system using ESP8266, sensors, and Blynk for real-time monitoring and control.",
          image: "images/project3.jpg",
          link: "https://github.com/Dev1903/Automated-Home-Safety-Device"
        },
        {
          title: "AUTOMATED BABY PLANT MONITORING SYSTEM",
          description: "An automated irrigation system using Arduino to monitor soil moisture, rain, light, and humidity.",
          image: "images/project4.jpg",
          link: "https://github.com/Dev1903/Automated-Baby-Plant-Monitoring"
        }
      ];
      
  
    const container = document.getElementById("projectsContainer");
  
    projects.forEach(project => {
      const col = document.createElement("div");
      col.className = "col-md-6 mb-4";
  
      col.innerHTML = `
        <div class="project-card">
          <img src="${project.image}" class="card-img" alt="${project.title} Image">
          <div class="card-img-overlay">
            <h4 class="card-title sub-heading emphasize">${project.title}</h4>
            <p class="card-text">${project.description}</p>
            <a href="${project.link}" class="btn btn-outline-light" target="_blank">View Project</a>
          </div>
        </div>
      `;
  
      container.appendChild(col);
    });
  });
  