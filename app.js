/*
 * ======================================================================================
 * COMPARISON: JSON vs XML
 * ======================================================================================
 * 1. Syntax & Verbosity:
 *    - JSON (JavaScript Object Notation) uses lightweight key-value pairs and arrays.
 *    - XML (eXtensible Markup Language) uses opening and closing tags (<tag></tag>),
 *      making it much more verbose and heavier in payload size.
 *
 * 2. Data Types:
 *    - JSON natively supports primitive types: String, Number, Boolean, Array, Object, null.
 *    - XML is text-based and typeless; all values are strings unless validated against an XSD.
 *
 * 3. Parsing & Performance:
 *    - JSON is natively parsed in JavaScript via JSON.parse(), making it significantly
 *      faster and directly accessible as native JavaScript objects.
 *    - XML requires an XML DOM parser (such as DOMParser) to navigate nodes, which is
 *      slower and more complex to manipulate.
 *
 * 4. Primary Use Cases:
 *    - JSON is the modern industry standard for REST APIs, SPAs, and web client-server data.
 *    - XML is widely used in legacy enterprise systems, SOAP services, SVG graphics,
 *      and configuration files requiring strict structural schemas.
 * ======================================================================================
 */

// Course data array (JSON objects)
const coursesData = [
    {
        name: "Computer Engineering",
        duration: "4 Years",
        intake: "180 Seats",
        description: "Focuses on computer hardware, software development, data structures, algorithms, and artificial intelligence."
    },
    {
        name: "Information Technology",
        duration: "4 Years",
        intake: "120 Seats",
        description: "Covers cloud infrastructure, cybersecurity, enterprise networking, and full-stack web applications."
    },
    {
        name: "Mechanical Engineering",
        duration: "4 Years",
        intake: "120 Seats",
        description: "Deals with design, thermal engineering, robotics, CAD/CAM manufacturing, and industrial automation."
    }
];

// Function to inject course data into DOM only when Courses tab is clicked
function loadCourses() {
    const coursesContainer = document.getElementById("courses-list");
    coursesContainer.innerHTML = ""; // Clear existing content before injecting

    coursesData.forEach(course => {
        const item = document.createElement("div");
        item.className = "course-item";

        const title = document.createElement("h3");
        title.textContent = course.name;

        const meta = document.createElement("p");
        meta.className = "course-meta";
        meta.textContent = `Duration: ${course.duration} | Intake: ${course.intake}`;

        const desc = document.createElement("p");
        desc.className = "course-desc";
        desc.textContent = course.description;

        item.appendChild(title);
        item.appendChild(meta);
        item.appendChild(desc);

        coursesContainer.appendChild(item);
    });
}

// Navigation function to switch visible sections without page reload
function showSection(targetId) {
    const sections = document.querySelectorAll(".content-section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Hide/show sections
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    // Update active nav link
    navLinks.forEach(link => {
        if (link.getAttribute("data-target") === targetId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Inject data only when the "Courses" tab is clicked
    if (targetId === "courses") {
        loadCourses();
    }
}

// Client-side form validation
function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Check for '@' in email
    if (!email.includes("@")) {
        alert("Please enter a valid email address containing '@'.");
        return;
    }

    // Show success alert
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    document.getElementById("contact-form").reset();
}

// Setup event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Navigation link click listeners
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const target = link.getAttribute("data-target");
            showSection(target);
        });
    });

    // Contact form submit listener
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", handleContactSubmit);
    }
});
