/*
 * =========================================================================
 * JSON vs XML Comparison:
 * =========================================================================
 * 1. Format & Syntax:
 *    - JSON (JavaScript Object Notation) uses lightweight key-value pairs
 *      and bracket-based notation ({}, []).
 *    - XML (eXtensible Markup Language) uses open and closing tags similar
 *      to HTML (<tag></tag>), making it more verbose.
 *
 * 2. Data Types:
 *    - JSON supports native data types: strings, numbers, booleans, arrays,
 *      objects, and null.
 *    - XML treats all data as text/strings unless a strict external schema
 *      (XSD) is defined.
 *
 * 3. Parsing & Performance:
 *    - JSON is parsed natively in JavaScript using JSON.parse(), which is
 *      faster, less memory-intensive, and directly converts into JS objects.
 *    - XML requires an XML DOM parser (DOMParser / XMLHttpRequest) and
 *      complex DOM tree traversal, which is slower.
 *
 * 4. Readability & Usage:
 *    - JSON is compact and is the standard data interchange format for modern
 *      web applications, RESTful APIs, and SPAs.
 *    - XML is typically used in legacy enterprise applications, SOAP web
 *      services, and document-oriented configurations (e.g., SVG, Android layouts).
 * =========================================================================
 */

// Courses data array (JSON objects)
const courses = [
    {
        title: "B.Tech in Computer Science & Engineering",
        code: "CSE-101",
        duration: "4 Years",
        description: "Comprehensive curriculum covering data structures, algorithms, AI, and software engineering."
    },
    {
        title: "B.Tech in Electronics & Communication",
        code: "ECE-102",
        duration: "4 Years",
        description: "Focus on digital circuits, communication systems, signal processing, and embedded systems."
    },
    {
        title: "B.Tech in Mechanical Engineering",
        code: "ME-103",
        duration: "4 Years",
        description: "Study of mechanics, thermodynamics, robotics, manufacturing processes, and design."
    },
    {
        title: "Bachelor of Computer Applications (BCA)",
        code: "BCA-104",
        duration: "3 Years",
        description: "Foundational training in database management, web development, and application programming."
    }
];

// Function to dynamically render courses into the Content area
function renderCourses() {
    const container = document.getElementById("courses-container");
    if (!container) return;

    container.innerHTML = "";

    courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";

        const title = document.createElement("h3");
        title.textContent = course.title;

        const code = document.createElement("span");
        code.className = "course-code";
        code.textContent = course.code;

        const description = document.createElement("p");
        description.textContent = course.description;

        const duration = document.createElement("p");
        duration.className = "course-duration";
        duration.textContent = "Duration: " + course.duration;

        card.appendChild(title);
        card.appendChild(code);
        card.appendChild(description);
        card.appendChild(duration);

        container.appendChild(card);
    });
}

// Navigation function that switches visible content without page reloads
function navigateTo(targetId) {
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle active state for content sections
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    // Toggle active state for navigation links
    navLinks.forEach(link => {
        if (link.getAttribute("data-page") === targetId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Form validation function
function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const feedback = document.getElementById("form-feedback");

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    // Check for empty fields
    if (nameValue === "" || emailValue === "" || messageValue === "") {
        feedback.textContent = "Please fill in all fields.";
        feedback.className = "form-feedback error";
        return;
    }

    // Check for '@' in email
    if (!emailValue.includes("@")) {
        feedback.textContent = "Please enter a valid email address containing '@'.";
        feedback.className = "form-feedback error";
        return;
    }

    // Validation successful
    feedback.textContent = "Your message has been sent successfully!";
    feedback.className = "form-feedback success";

    // Reset form fields
    document.getElementById("contact-form").reset();
}

// Event Listeners setup on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial render of courses
    renderCourses();

    // 2. Navigation click listeners
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetPage = link.getAttribute("data-page");
            navigateTo(targetPage);
        });
    });

    // 3. Form validation submit listener
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", validateForm);
    }
});
