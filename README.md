# College Website Portal (SPA) - D.Y. Patil College of Engineering

**Subject:** Web Technology 1 (AD124PE507.1) | **CCE-5: Unit V Mini Project** | **Roll No:** 55  
**Repository Name:** `WT_CCE5_55_CollegePortal`

---

## Problem Statement
Prospective students, parents, and current scholars frequently require quick, uninterrupted access to essential college information—including degree programs, faculty credentials, placement statistics, academic calculators, and admission enquiry processes. Traditional multi-page university portals often suffer from slow server roundtrips, disruptive full-page reloads, and rigid interfaces. 

This project solves this challenge by delivering a lightweight, interactive **Single Page Application (SPA)** for **D.Y. Patil College of Engineering, Akurdi, Pune**, built exclusively with **Vanilla HTML5, CSS3, and JavaScript (ES6)** without external frameworks or heavy libraries. It provides a fluid, real-time user experience for browsing departments, evaluating eligibility, calculating semester SGPA, and submitting enquiries seamlessly.

---

## Features
- **Header & Floating Capsule Navigation**: Responsive brand header and sticky navigation capsule (Home, Courses, Faculty, Placements, SGPA Calc, Enquire).
- **SPA Navigation Without Page Reloads**: Fast client-side section switching using pure JavaScript DOM manipulation without full browser reloads.
- **Dynamic Data Loading (JSON Objects)**: Course offerings and faculty directories are dynamically populated into modern pastel squircle cards from JavaScript JSON structures upon interaction.
- **Real-Time Course Search & Department Filter**: Real-time keyword filtering (`.includes()` / `.filter()`) combined with quick department pills (`All`, `Computer`, `AI & DS`, `IT`, `Mechanical`, `Civil`).
- **Interactive SGPA Calculator**: Real-time weighted Semester Grade Point Average (SGPA) computation based on course credits and SPPU letter grades.
- **One-Click Course Enquiry Pre-Fill**: "Enquire Now" action buttons on course cards automatically route the user to the Admission form and pre-select the chosen discipline.
- **Client-Side Form Validation**: Admission enquiry form validates required fields, verifies email format (`@`), and enforces a strict 10-digit mobile number with inline red error alerts while preventing default page reload.
- **Theme Persistence (Dark Mode)**: Light/Dark theme toggle with state saved in browser `localStorage`.
- **JSON vs XML Conceptual Discussion**: Comprehensive academic commentary embedded at the top of `app.js` detailing syntax, data typing, parsing efficiency, and modern web application use cases.
- **Responsive Layout**: Designed using CSS Flexbox and Grid, fully optimized across mobile, tablet, and desktop screens.

---

## Project Structure
```text
├── index.html     # Semantic single-page layout (Header, Nav, SPA Sections, Footer)
├── style.css      # Modern responsive styling, custom palette, squircle cards & dark mode
├── app.js         # SPA router, dynamic JSON renderers, search filter, SGPA calc & validation
└── README.md      # Comprehensive project documentation & problem statement
```

---

## How to Run
1. Open the project folder (`cce5 wt`) in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. Alternatively, open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox).

---

## Testing Done
- **SPA Navigation**: Verified that all sections (`Home`, `Courses`, `Faculty`, `Placements`, `SGPA Calc`, `Contact`) switch instantly without reloading the page.
- **Dynamic JSON Data Rendering**: Verified that Course and Faculty cards render dynamically into the DOM only when their respective views are accessed.
- **Real-Time Search & Filtering**: Tested partial and full-text keyword searches across course titles and descriptions, alongside department pill toggles.
- **Form Validation**:
  - Empty field submission triggers specific inline red error messages.
  - Email without `@` or with invalid format is flagged.
  - Mobile numbers with non-digits or lengths $\neq 10$ display inline validation errors.
  - Valid submission displays confirmation banner and alert without reloading the page.
- **SGPA Calculator**: Tested weighted GPA calculations across diverse grade/credit combinations to verify numerical accuracy.
- **Dark Mode Persistence**: Verified that toggling Dark Mode persists correctly across page refreshes via `localStorage`.
- **Mobile Responsiveness**: Checked layout adaptability by resizing the viewport down to $375\text{px}$ (mobile screen width).

---

## Screenshots
> *Add project screenshots here:*
- `screenshots/home.png` — Hero canvas, editorial typography, and directions of education.
- `screenshots/courses.png` — Real-time searchable course directory with pastel squircle cards.
- `screenshots/faculty.png` — Faculty profiles and credentials.
- `screenshots/placements.png` — Training & placement metrics with top recruiter tags.
- `screenshots/calculator.png` — Interactive semester SGPA calculator.
- `screenshots/contact.png` — Admission enquiry form with inline validation.
- `screenshots/mobile_view.png` — Responsive viewport on mobile devices.

---

## Technologies
- **HTML5**: Semantic tags, accessible layout structure.
- **CSS3**: Flexbox, CSS Grid, custom properties, animations, dark mode theme.
- **JavaScript (ES6)**: DOM manipulation, event listeners, array methods (`.filter()`, `.map()`, `.forEach()`), regex validation.
- **JSON**: Data structures for academic courses and faculty details.
- **Git & GitHub**: Version control and code repository hosting.
