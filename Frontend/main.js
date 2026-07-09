/* home design*/
var typed = new Typed ("#designation", {
    strings: ["Web Developer!" , "Frontend Developer!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
/* NavBard DArk Mode */
const toggle = document.getElementById("themetoggle");
if (localStorage.getItem("theme") === "light" ) {
    document.body.classList.add("light-mode");
toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked){
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme","dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme","light");
    }
    
});
/* NavBar Slide */
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 3000);

/* Project Filter */ 
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});
 /* Modal Window */
const projects = {

    landing:{
        title:"Responsive Landing Page",
        image:"images/img1.webp",
        description:"A fully responsive landing page designed for all screen sizes .",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Responsive Design",
            "Sticky Navbar",
            "Smooth Scrolling"
        ]
    },

    stopwatch:{
        title:"Stopwatch Application",
        image:"images/img2.webp",
        description:"A stopwatch web app with timer controls.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Start Timer",
            "Stop Timer",
            "Reset Timer"
        ]
    },

    tictactoe:{
        title:"Tic Tac Toe Game",
        image:"images/img3.webp",
        description:"Interactive Tic Tac Toe game for two players.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features:[
            "Winner Detection",
            "Draw Detection",
            "Restart Game"
        ]
    },

    weather:{
        title:"Weather Application",
        image:"images/img4.webp",
        description:"Weather application using API integration.",

        tech:[
            "HTML",
            "CSS",
            "JavaScript",
            "Weather API"
        ],

        features:[
            "Search City",
            "Live Temperature",
            "Weather Conditions"
        ]
    }

};




const modal = document.getElementById("projectModal");

function openModal(projectKey){

    const project = projects[projectKey];

    document.getElementById("modalTitle").textContent =
        project.title;

    document.getElementById("modalImage").src =
        project.image;

    document.getElementById("modalDescription").textContent =
        project.description;

    const techList =
        document.getElementById("modalTech");

    techList.innerHTML = "";

    project.tech.forEach(item => {
        techList.innerHTML += `<li>${item}</li>`;
    });

    const featureList =
        document.getElementById("modalFeatures");

    featureList.innerHTML = "";

    project.features.forEach(item => {
        featureList.innerHTML += `<li>${item}</li>`;
    });

    modal.style.display = "block";
}

document.querySelector(".close")
.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});
function toggleText(textId, button) {
    const text = document.getElementById(textId);

    if (text.style.display === "none") {
        text.style.display = "inline";
        button.textContent = "Hide Details";
    } else {
        text.style.display = "none";
        button.textContent = "Read More";
    }
}

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    successMessage.textContent =
    "Message sent successfully!";

    form.reset();

});
form.addEventListener("submit", function(event){

    event.preventDefault();

    successMessage.textContent =
    "Message sent successfully!";

    form.reset();

    setTimeout(() => {
        successMessage.textContent = "";
    }, 3000);

});

/* Backend */
async function loadData() {
  try {
    const response = await fetch("data.json");

    console.log("Response:", response);

    const data = await response.json();

    console.log("JSON Data:", data);
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

loadData();
