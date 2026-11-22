const typingText = document.getElementById("typing-text");

const roles = [
    "Java Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;
    } else {
        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && charIndex === 0) {
        deleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =====================================
// 2. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .project-card, .education-card, .contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


// =====================================
// 3. NAVBAR AUTO CLOSE ON MOBILE
// =====================================

const navLinks = document.querySelectorAll(".nav-link");

const navbarCollapse = document.getElementById("navbarNav");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

            bsCollapse.hide();
        }

    });

});


// =====================================
// 4. NAVBAR ACTIVE LINK
// =====================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
