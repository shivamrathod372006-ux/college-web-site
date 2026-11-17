/*
 * JSON vs XML Comparison:
 * 1. Syntax: JSON uses lightweight key-value pairs; XML uses verbose tags (<tag></tag>).
 * 2. Data Types: JSON natively supports strings, numbers, booleans, arrays, and objects; XML data is text strings only.
 * 3. Parsing: JSON is parsed natively in JavaScript (JSON.parse()); XML requires an XML DOM parser and DOM traversal.
 * 4. Usage: JSON is standard for modern RESTful APIs and SPAs; XML is used in SOAP and document markup.
 */

// Courses data array (JSON objects)
const courses = [
    { name: "Computer Engineering", dept: "Computer", duration: "4 Years", intake: "180 Seats", desc: "Data structures, algorithms, cloud computing, and AI engineering." },
    { name: "Information Technology", dept: "IT", duration: "4 Years", intake: "120 Seats", desc: "Cybersecurity, DevOps, web technologies, and database systems." },
    { name: "Mechanical Engineering", dept: "Mechanical", duration: "4 Years", intake: "120 Seats", desc: "Robotics, CAD/CAM simulation, thermal systems, and automation." },
    { name: "Civil Engineering", dept: "Civil", duration: "4 Years", intake: "60 Seats", desc: "Structural analysis, smart cities, and environmental design." }
];

// Faculty data array (JSON objects)
const faculty = [
    { name: "Dr. Suresh Patil", dept: "Computer Engineering", role: "HOD & Professor", exp: "21 Years" },
    { name: "Dr. Neha Kulkarni", dept: "Information Technology", role: "Associate Professor", exp: "15 Years" },
    { name: "Prof. Rajesh Deshmukh", dept: "Mechanical Engineering", role: "Assistant Professor", exp: "12 Years" },
    { name: "Prof. Priya Joshi", dept: "Civil Engineering", role: "Assistant Professor", exp: "9 Years" }
];

let selectedDept = "all";

// Dynamically render courses with search & department filter
function renderCourses(searchTerm = "") {
    const list = document.getElementById("courses-list");
    list.innerHTML = "";
    const term = searchTerm.toLowerCase().trim();

    const filtered = courses.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(term) || c.desc.toLowerCase().includes(term);
        const matchesDept = selectedDept === "all" || c.dept === selectedDept;
        return matchesSearch && matchesDept;
    });

    if (filtered.length === 0) {
        list.innerHTML = "<p style='color: var(--text-muted);'>No matching courses found.</p>";
        return;
    }

    filtered.forEach(c => {
        list.innerHTML += `
            <div class="item-card">
                <h3>${c.name}</h3>
                <div class="item-meta">Department: ${c.dept} | Duration: ${c.duration} | Intake: ${c.intake}</div>
                <p>${c.desc}</p>
                <button class="btn-enquire" onclick="enquireCourse('${c.name}')">Enquire for this Course</button>
            </div>`;
    });
}

// Route to contact section with course selected
function enquireCourse(courseName) {
    showSection("contact");
    const select = document.getElementById("course-select");
    if (select) select.value = courseName;
}

// Dynamically render faculty
function renderFaculty() {
    const list = document.getElementById("faculty-list");
    list.innerHTML = "";
    faculty.forEach(f => {
        list.innerHTML += `
            <div class="item-card">
                <h3>${f.name}</h3>
                <div class="item-meta">${f.role} - ${f.dept}</div>
                <p>Teaching & Research Experience: ${f.exp}</p>
            </div>`;
    });
}

// SPA Navigation without page reloads
function showSection(targetId) {
    document.querySelectorAll(".section").forEach(s => s.classList.toggle("active", s.id === targetId));
    document.querySelectorAll(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.target === targetId));

    if (targetId === "courses") {
        document.getElementById("course-search").value = "";
        selectedDept = "all";
        document.querySelectorAll("#dept-pills .pill").forEach(p => p.classList.toggle("active", p.dataset.dept === "all"));
        renderCourses();
    } else if (targetId === "faculty") {
        renderFaculty();
    }
}

// SGPA Calculator Function
function calculateSGPA() {
    const grades = document.querySelectorAll(".calc-grade");
    const credits = document.querySelectorAll(".calc-credit");
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const gp = parseFloat(grades[i].value);
        const cr = parseFloat(credits[i].value) || 0;
        totalPoints += (gp * cr);
        totalCredits += cr;
    }

    const sgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById("sgpa-output").innerHTML = `Calculated SGPA: <strong>${sgpa} / 10.00</strong>`;
}

// Client-side Form Validation
function validateForm(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course-select").value;

    const nameErr = document.getElementById("name-error");
    const emailErr = document.getElementById("email-error");
    const phoneErr = document.getElementById("phone-error");
    const successBanner = document.getElementById("form-success");

    nameErr.textContent = name === "" ? "Full name is required." : "";
    emailErr.textContent = !email.includes("@") ? "Please enter a valid email with '@'." : "";
    phoneErr.textContent = !/^\d{10}$/.test(phone) ? "Enter a valid 10-digit mobile number." : "";

    if (name && email.includes("@") && /^\d{10}$/.test(phone)) {
        successBanner.style.display = "block";
        successBanner.textContent = `Enquiry submitted for ${course}! Admissions cell will call on ${phone}.`;
        alert(`Thank you ${name}! Your enquiry for ${course} has been submitted.`);
        document.getElementById("enquiry-form").reset();
    }
}

// Setup Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    // Navigation link clicks
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            showSection(link.dataset.target);
        });
    });

    // Real-time courses search
    const searchInput = document.getElementById("course-search");
    if (searchInput) {
        searchInput.addEventListener("input", e => renderCourses(e.target.value));
    }

    // Department Filter Pills
    document.querySelectorAll("#dept-pills .pill").forEach(pill => {
        pill.addEventListener("click", () => {
            document.querySelectorAll("#dept-pills .pill").forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            selectedDept = pill.dataset.dept;
            renderCourses(searchInput.value);
        });
    });

    // Dark Mode Toggle with persistence
    const darkBtn = document.getElementById("dark-mode-btn");
    if (localStorage.getItem("dyp_dark") === "true") {
        document.body.classList.add("dark-mode");
        darkBtn.textContent = "☀️ Light Mode";
    }
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        darkBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("dyp_dark", isDark);
    });

    // SGPA Button click
    const calcBtn = document.getElementById("btn-calc");
    if (calcBtn) calcBtn.addEventListener("click", calculateSGPA);

    // Form submit listener
    const enquiryForm = document.getElementById("enquiry-form");
    if (enquiryForm) enquiryForm.addEventListener("submit", validateForm);
});
