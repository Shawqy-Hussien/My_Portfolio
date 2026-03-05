
function openCV() {
    window.open("assets/files/Shawqy_CV_2026.pdf", "_blank");
};

const links = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("data-section");
        sections.forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(target).classList.add("active");
    });
});

const homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", () => {
    document.querySelector(".home").classList.remove("active");
    document.querySelector(".about").classList.add("active");
})

const profile = document.querySelector(".profile");
profile.addEventListener("click", () => {
    const profileCard = document.querySelector(".profile-card");
    profileCard.classList.toggle("activate");
});

const navArrow = document.querySelector(".nav-arrow");
navArrow.addEventListener("click", () => {
    navArrow.classList.toggle("rotate");
    const navigation = document.querySelector(".navbar");
    navigation.classList.toggle("activate");
});



const navLinks = document.querySelectorAll(".navLinks a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const navbar = document.querySelector(".navLinks");
        navbar.classList.remove("activate");
    });
});

const skillCards = document.querySelectorAll(".skill-card");
const skillDescriptions = document.querySelectorAll(".poppup-skill-description");
skillCards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
        skillDescriptions.forEach(desc => desc.classList.remove("activate"));
        skillDescriptions[index].classList.add("activate");
    });
    card.addEventListener("mouseleave", () => {
        skillDescriptions[index].classList.remove("activate");
    });
});

const toggleSkillsBtn = document.getElementById("toggle-skills");
//change between technical and soft skills
toggleSkillsBtn.addEventListener("click", () => {
    const softSkillsContainer = document.querySelector(".soft-skills-container");
    const technicalSkillsContainer = document.querySelector(".technical-skills-container");
    if (softSkillsContainer.style.display === "none" || softSkillsContainer.style.display === "") {
        softSkillsContainer.style.display = "block";
        technicalSkillsContainer.style.display = "none";
        toggleSkillsBtn.innerHTML = '<i class="fas fa-cog"></i> Technical ';
    } else {
        softSkillsContainer.style.display = "none";
        technicalSkillsContainer.style.display = "block";
        toggleSkillsBtn.innerHTML = '<i class="fas fa-user"></i> Soft Skills';
    }
});