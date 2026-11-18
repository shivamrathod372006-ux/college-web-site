/*
 * =========================================================================
 * JSON vs XML COMPARISON:
 * =========================================================================
 * 1. Syntax & Verbosity:
 *    - JSON (JavaScript Object Notation): Uses compact, lightweight key-value
 *      pairs and bracket arrays ({}, []). Payload size is minimal.
 *    - XML (eXtensible Markup Language): Uses opening and closing tags (<tag></tag>),
 *      making it significantly more verbose and bandwidth-heavy.
 *
 * 2. Data Types:
 *    - JSON natively supports String, Number, Boolean, Array, Object, and null.
 *    - XML data is pure text/strings unless defined via strict schemas (XSD/DTD).
 *
 * 3. Parsing & Performance:
 *    - JSON is parsed natively by JavaScript (JSON.parse()), executing orders of
 *      magnitude faster and directly converting to usable JS objects.
 *    - XML requires an XML DOM Parser and complex DOM tree traversal.
 *
 * 4. Usage:
 *    - JSON is standard for modern RESTful APIs, Single Page Applications, and NoSQL.
 *    - XML is typically used in legacy SOAP services and configuration documents (SVG, XHTML).
 * =========================================================================
 */

// ==========================================
// 1. DATA REPOSITORIES (JSON OBJECTS)
// ==========================================

// Courses data array
const courses = [
    { 
        name: "Computer Engineering", 
        dept: "Computer", 
        duration: "4 Years", 
        intake: "180 Seats", 
        desc: "Specialized study in data structures, algorithms, AI, cloud computing, and software engineering." 
    },
    { 
        name: "AI & Data Science", 
        dept: "AI", 
        duration: "4 Years", 
        intake: "120 Seats", 
        desc: "Cutting-edge curriculum in neural networks, computer vision, Big Data analytics, and NLP." 
    },
    { 
        name: "Information Technology", 
        dept: "IT", 
        duration: "4 Years", 
        intake: "120 Seats", 
        desc: "Cybersecurity, enterprise network systems, cloud infrastructure, and full-stack development." 
    },
    { 
        name: "Mechanical Engineering", 
        dept: "Mechanical", 
        duration: "4 Years", 
        intake: "120 Seats", 
        desc: "Robotics, thermal systems, CAD/CAM simulation, automation, and modern manufacturing." 
    },
    { 
        name: "Civil Engineering", 
        dept: "Civil", 
        duration: "4 Years", 
        intake: "60 Seats", 
        desc: "Structural analysis, geotechnical engineering, green construction, and smart city infrastructure." 
    }
];

// Department Detailed Profiles Repository (JSON Object)
const departmentInfo = {
    Computer: {
        title: "Department of Computer Engineering",
        established: "Estd. 1986 • NBA Accredited",
        colorClass: "card-mint",
        tagline: "Pioneering computational excellence, advanced software engineering, cloud distributed systems, and AI architecture.",
        intake: "180 UG + 24 PG",
        highestCtc: "₹45.5 LPA",
        placementRate: "96%",
        labsCount: "8 Dedicated Labs",
        hod: "Dr. Suresh Patil — Ph.D. in Computer Science & Engg (21+ Years Exp). Specialized in Distributed Systems, Cloud Architecture, and Machine Intelligence.",
        labs: "NVIDIA AI GPU Workstation Lab, Cloud Computing Virtual Sandbox, Advanced Software Engineering Lab, IoT & Smart Systems Lab.",
        recruiters: ["Microsoft", "Barclays", "Adobe", "TCS Digital", "Infosys", "Cognizant", "Persistent Systems"]
    },
    AI: {
        title: "Department of AI & Data Science",
        established: "Estd. 2020 • Emerging Tech Center",
        colorClass: "card-peach",
        tagline: "Cultivating expertise in deep learning, neural networks, predictive big data models, and computer vision technologies.",
        intake: "120 Seats",
        highestCtc: "₹42.0 LPA",
        placementRate: "95%",
        labsCount: "6 AI Clusters",
        hod: "Dr. Anand Joshi — Ph.D. (IIT Bombay, 18+ Years Exp). Dean R&D, researcher in Generative AI, Deep Neural Networks, and NLP.",
        labs: "NVIDIA Deep Learning Supercomputing Lab, Big Data Analytics Cluster, Computer Vision & Robotics Center, NLP Research Hub.",
        recruiters: ["Amazon", "Google Cloud", "NVIDIA", "Barclays", "Cognizant AI", "TCS R&D"]
    },
    IT: {
        title: "Department of Information Technology",
        established: "Estd. 1999 • NBA Accredited",
        colorClass: "card-sky",
        tagline: "Excellence in cybersecurity, full-stack enterprise cloud applications, DevOps pipelines, and distributed ledger systems.",
        intake: "120 Seats",
        highestCtc: "₹38.0 LPA",
        placementRate: "94%",
        labsCount: "7 Network Labs",
        hod: "Dr. Neha Kulkarni — Ph.D. in Information Security (15+ Years Exp). Expert in Cryptography, Cyber Defense, and Blockchain Frameworks.",
        labs: "Cyber Security & Ethical Hacking Lab, Blockchain & Distributed Ledger Lab, Enterprise Networking Lab, Cloud DevOps Sandbox.",
        recruiters: ["Infosys", "Capgemini", "L&T Infotech", "Barclays", "TCS", "Accenture", "Veritas"]
    },
    Mechanical: {
        title: "Department of Mechanical Engineering",
        established: "Estd. 1984 • NBA Accredited",
        colorClass: "card-peach",
        tagline: "Transforming engineering design, industrial robotics, electric vehicle powertrains, and computer-aided manufacturing.",
        intake: "120 UG + 18 PG",
        highestCtc: "₹24.0 LPA",
        placementRate: "90%",
        labsCount: "10 Specialized Labs",
        hod: "Prof. Rajesh Deshmukh — M.Tech, Ph.D. Pursuing (14+ Years Exp). Specialized in Mechatronics, Automotive Design, and Thermal Systems.",
        labs: "Industrial Robotics & Automation Lab, CAD/CAM Simulation Center (ANSYS & CATIA), CNC Mechatronics Lab, BAJA Racing Workshop.",
        recruiters: ["Tata Motors", "John Deere", "Siemens", "Thermax", "L&T Heavy Engg", "Mercedes-Benz"]
    },
    Civil: {
        title: "Department of Civil Engineering",
        established: "Estd. 1984 • NBA Accredited",
        colorClass: "card-mint",
        tagline: "Building resilient urban infrastructure, sustainable smart city design, geotechnical analysis, and earthquake engineering.",
        intake: "60 Seats",
        highestCtc: "₹18.0 LPA",
        placementRate: "88%",
        labsCount: "9 Testing Labs",
        hod: "Dr. Priya Kulkarni — Ph.D. in Structural Dynamics (12+ Years Exp). Specialized in Earthquake Resistant Structures and Smart Concrete.",
        labs: "Advanced Concrete Testing Lab, Geotechnical & Soil Mechanics Lab, Environmental Pollution Analysis Lab, Surveying & Total Station Lab.",
        recruiters: ["L&T Construction", "Shapoorji Pallonji", "Godrej Properties", "Afcons", "Tata Projects"]
    }
};

// Faculty data array (JSON objects)
const faculty = [
    { name: "Dr. Suresh Patil", dept: "Computer Engineering", role: "HOD & Professor", exp: "21 Years", initials: "SP" },
    { name: "Dr. Neha Kulkarni", dept: "Information Technology", role: "Associate Professor", exp: "15 Years", initials: "NK" },
    { name: "Dr. Anand Joshi", dept: "AI & Data Science", role: "Professor & Dean R&D", exp: "18 Years", initials: "AJ" },
    { name: "Prof. Rajesh Deshmukh", dept: "Mechanical Engineering", role: "Assistant Professor", exp: "12 Years", initials: "RD" },
    { name: "Prof. Priya Joshi", dept: "Civil Engineering", role: "Assistant Professor", exp: "9 Years", initials: "PJ" }
];

// Photo 1 Pastel Colors array for squircle cards
const cardColorThemes = ["card-mint", "card-peach", "card-sky"];

let selectedDept = "all";

// ==========================================
// 2. DEPARTMENT INFO RENDERING (NEW FEATURE)
// ==========================================

function renderDepartmentInfo(deptKey) {
    const infoContainer = document.getElementById("department-info-container");
    if (!infoContainer) return;

    if (!deptKey || deptKey === "all" || !departmentInfo[deptKey]) {
        infoContainer.innerHTML = "";
        return;
    }

    const data = departmentInfo[deptKey];
    const recruitersHtml = data.recruiters.map(r => `<span>${r}</span>`).join(" • ");

    infoContainer.innerHTML = `
        <div class="dept-info-card ${data.colorClass}">
            <div class="dept-info-header">
                <div>
                    <span class="dept-established-badge">${data.established}</span>
                    <h3>${data.title}</h3>
                    <p class="dept-tagline">${data.tagline}</p>
                </div>
                <button class="dept-close-btn" onclick="clearDeptInfo()" title="Close details">✕</button>
            </div>

            <div class="dept-quick-stats">
                <div class="dept-stat-pill">
                    <strong>${data.intake}</strong>
                    <span>Intake</span>
                </div>
                <div class="dept-stat-pill">
                    <strong>${data.highestCtc}</strong>
                    <span>Highest CTC</span>
                </div>
                <div class="dept-stat-pill">
                    <strong>${data.placementRate}</strong>
                    <span>Placement</span>
                </div>
                <div class="dept-stat-pill">
                    <strong>${data.labsCount}</strong>
                    <span>Facilities</span>
                </div>
            </div>

            <div class="dept-grid-details">
                <div class="dept-col">
                    <h4>👨‍🏫 Head of Department (HOD)</h4>
                    <p>${data.hod}</p>
                </div>
                <div class="dept-col">
                    <h4>🔬 Advanced Laboratory Facilities</h4>
                    <p>${data.labs}</p>
                </div>
            </div>

            <div class="dept-recruiters-row">
                <strong>Key Recruiters:</strong>
                <div>${recruitersHtml}</div>
            </div>

            <div class="dept-action-bar" style="margin-top: 22px; display: flex; gap: 12px; flex-wrap: wrap;">
                <button class="btn-card-action" onclick="enquireCourse('${data.title}')">
                    <span>Enquire for this Department</span> <span>→</span>
                </button>
                <button class="btn-card-secondary" onclick="clearDeptInfo()">
                    <span>← Back to All Courses</span>
                </button>
            </div>
        </div>
    `;
}

// Clear Department Info and reset to All
function clearDeptInfo() {
    selectDepartment("all");
}

// Open department directly from Home page cards
function openDepartmentFromHome(deptKey) {
    showSection("courses");
    selectDepartment(deptKey);
}

// Select Department, show info, and filter courses
function selectDepartment(deptKey) {
    selectedDept = deptKey;

    // Update active pill state
    document.querySelectorAll("#dept-pills .filter-pill").forEach(p => {
        p.classList.toggle("active", p.dataset.dept === deptKey);
    });

    // Render department info box
    renderDepartmentInfo(deptKey);

    // Filter courses list
    const searchInput = document.getElementById("course-search");
    const query = searchInput ? searchInput.value : "";
    renderCourses(query);

    // Scroll smoothly to department info if selected
    if (deptKey !== "all") {
        setTimeout(() => {
            const container = document.getElementById("department-info-container");
            if (container) {
                container.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 60);
    }
}

// ==========================================
// 3. COURSES RENDERING
// ==========================================

function renderCourses(searchTerm = "") {
    const list = document.getElementById("courses-list");
    if (!list) return;

    list.innerHTML = "";
    const term = searchTerm.toLowerCase().trim();

    // When a department is selected, its comprehensive profile is already shown above!
    // We remove the duplicate course card below it.
    if (selectedDept !== "all" && !term) {
        return;
    }

    const filtered = courses.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(term) || c.desc.toLowerCase().includes(term);
        const matchesDept = selectedDept === "all" || c.dept === selectedDept;
        return matchesSearch && matchesDept;
    });

    if (filtered.length === 0) {
        list.innerHTML = "<p style='color: var(--color-text-muted); font-size: 1rem;'>No matching courses found.</p>";
        return;
    }

    filtered.forEach((c, index) => {
        const colorClass = cardColorThemes[index % cardColorThemes.length];
        const card = document.createElement("div");
        card.className = `course-item-card ${colorClass}`;
        card.style.cursor = "pointer";
        card.setAttribute("title", `Click to view ${c.name} department info`);
        
        // Clicking on this course card opens that department's detailed info!
        card.onclick = () => selectDepartment(c.dept);

        card.innerHTML = `
            <div>
                <div class="course-card-head">
                    <div class="circle-arrow-btn" title="Click to view ${c.dept} department info">↗</div>
                    <span class="card-pill">B.Tech • ${c.duration}</span>
                </div>
                <h3>${c.name}</h3>
                <p class="course-desc-text">${c.desc}</p>
                <div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 14px; opacity: 0.9;">
                    Intake: ${c.intake} | Dept: ${c.dept}
                </div>
            </div>
            <div class="card-btn-group">
                <button class="btn-card-action" onclick="event.stopPropagation(); enquireCourse('${c.name}')">
                    <span>Enquire Now</span> <span>→</span>
                </button>
            </div>
        `;
        list.appendChild(card);
    });
}

// Route to contact section with course pre-selected
function enquireCourse(courseName) {
    showSection("contact");
    const select = document.getElementById("course-select");
    if (select) select.value = courseName;
}

// ==========================================
// 4. FACULTY RENDERING
// ==========================================

function renderFaculty() {
    const list = document.getElementById("faculty-list");
    if (!list) return;

    list.innerHTML = "";
    faculty.forEach((f, index) => {
        const colorClass = cardColorThemes[index % cardColorThemes.length];
        const card = document.createElement("div");
        card.className = `faculty-squircle-card ${colorClass}`;

        card.innerHTML = `
            <div class="faculty-avatar-circle">${f.initials}</div>
            <h3>${f.name}</h3>
            <p class="faculty-role-title">${f.role}</p>
            <p class="faculty-dept-label">${f.dept}</p>
            <span class="faculty-experience-pill">Experience: ${f.exp}</span>
        `;
        list.appendChild(card);
    });
}

// ==========================================
// 5. SPA NAVIGATION
// ==========================================

function showSection(targetId) {
    // Switch visible section
    document.querySelectorAll(".spa-section").forEach(s => s.classList.toggle("active", s.id === targetId));
    
    // Update active nav-item
    document.querySelectorAll(".nav-item").forEach(l => l.classList.toggle("active", l.dataset.target === targetId));

    // Scroll smoothly to top of window
    const windowEl = document.querySelector(".portal-window");
    if (windowEl) {
        windowEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Trigger dynamic loading
    if (targetId === "courses") {
        const searchInput = document.getElementById("course-search");
        if (searchInput) searchInput.value = "";
        // Render current department state
        selectDepartment(selectedDept);
    } else if (targetId === "faculty") {
        renderFaculty();
    }
}

// ==========================================
// 6. SGPA CALCULATOR
// ==========================================

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

    if (totalCredits === 0) return;

    const sgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById("sgpa-output").innerHTML = `Calculated SGPA: <strong>${sgpa} / 10.00</strong>`;
}

// ==========================================
// 7. CLIENT-SIDE FORM VALIDATION
// ==========================================

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
        successBanner.innerHTML = `✅ Thank you, <strong>${name}</strong>! Your enquiry for <strong>${course}</strong> has been submitted. Our admissions team will contact you at ${phone}.`;
        alert(`Thank you ${name}! Your enquiry for ${course} has been submitted.`);
        document.getElementById("enquiry-form").reset();
    }
}

// ==========================================
// 8. EVENT LISTENERS INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // Navigation link clicks
    document.querySelectorAll(".nav-item").forEach(link => {
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

    // Department Filter Pills click
    document.querySelectorAll("#dept-pills .filter-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            selectDepartment(pill.dataset.dept);
        });
    });

    // Dark Mode Toggle with persistence
    const darkBtn = document.getElementById("dark-mode-btn");
    if (darkBtn) {
        if (localStorage.getItem("dyp_dark") === "true") {
            document.body.classList.add("dark-mode");
            darkBtn.textContent = "☀️ Light";
        }
        darkBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            darkBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
            localStorage.setItem("dyp_dark", isDark);
        });
    }

    // SGPA Button click
    const calcBtn = document.getElementById("btn-calc");
    if (calcBtn) calcBtn.addEventListener("click", calculateSGPA);

    // Form submit listener
    const enquiryForm = document.getElementById("enquiry-form");
    if (enquiryForm) enquiryForm.addEventListener("submit", validateForm);
});
