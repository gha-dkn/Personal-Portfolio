const profile = {
  name: "Ghafoor Ameri",
  title: "IT Specialist",
  about:
    "Computer Science student and detail-oriented IT professional with hands-on experience in hardware repair, technical troubleshooting, and end-user support. I combine practical IT operations with CS foundations in programming, data structures, and problem solving to build reliable technical solutions. I have submitted my transfer application to the University of Maryland (UMD) and am continuing to grow in both software and systems-focused roles.",
  contact: {
    location: "Clarksburg, Maryland"
  },
  stats: [
    { value: "CS Student", label: "Academic + practical IT background" },
    { value: "Device Repair", label: "Chromebooks, laptops, desktops" },
    { value: "UMD Transfer", label: "Application submitted" }
  ],
  education: [
    {
      school: "Montgomery College, Rockville, MD",
      credential: "Associate of Science in Computer Science",
      period: "January 2025 - December 2025"
    },
    {
      school: "Prince George's Community College (PGCC), Largo, MD",
      credential: "Associate of Science in Computer Science",
      period: "January 2024 - January 2025"
    },
    {
      school: "Charkh Bargar High School, Kabul, Afghanistan",
      credential: "High School Diploma",
      period: "December 2019"
    }
  ],
  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "SQL",
    "Git/GitHub",
    "VS Code",
    "Eclipse",
    "MySQL Workbench",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DevSecOps Fundamentals",
    "Basic AWS",
    "Linux Commands",
    "Process Automation (Python)",
    "Debugging",
    "Software Testing",
    "Version Control",
    "Documentation",
    "Problem Solving",
    "Team Collaboration",
    "Communication"
  ],
  timeline: [
    {
      role: "Computer Technician",
      org: "Prince George's Community College, Largo, MD",
      period: "May 2024 - January 2025",
      detail:
        "Performed diagnostics and repairs on laptops and desktops, supported classroom and office system setup, maintained repair and asset records, and delivered in-person and remote troubleshooting for faculty and staff."
    },
    {
      role: "IT Intern",
      org: "DC Prep, Washington, DC",
      period: "June 2024 - September 2024",
      detail:
        "Installed and maintained educational technology, resolved connectivity and software issues, tracked devices, and collaborated with IT staff to improve technical support response times."
    },
    {
      role: "Front Desk Agent",
      org: "Prince George's Community College, Largo, MD",
      period: "January 2023 - May 2023",
      detail:
        "Provided front-line support to students and staff while managing scheduling, ticket tracking, and documentation for system access requests."
    },
    {
      role: "Warehouse Assistant",
      org: "UN-IOM, Doha, Qatar",
      period: "May 2022 - July 2022",
      detail:
        "Executed accurate data entry and maintained inventory documentation to support reporting, accountability, and audits."
    },
    {
      role: "Senior Assistant",
      org: "Medair, Daikundi, Afghanistan",
      period: "March 2021 - March 2022",
      detail:
        "Collected and entered program data, supported administrative operations, and ensured timely reporting accuracy."
    }
  ],
  projects: [
    {
      name: "Bank Account Inheritance Program (Java)",
      summary:
        "Developed a class-based architecture using object-oriented programming principles.",
      tag: "Java / OOP"
    },
    {
      name: "Python Data Analyzer",
      summary:
        "Automated cleaning and visualization of CSV datasets using Pandas workflows.",
      tag: "Python / Data"
    },
    {
      name: "Network Simulation Lab",
      summary:
        "Configured local network setups and tested connectivity protocols in lab environments.",
      tag: "Networking"
    }
  ]
};

const byId = (id) => document.getElementById(id);

function renderStats() {
  const container = byId("heroStats");
  container.innerHTML = profile.stats
    .map(
      (item) =>
        `<article class="stat"><div class="stat-value">${item.value}</div><div class="stat-label">${item.label}</div></article>`
    )
    .join("");
}

function renderSkills() {
  const container = byId("skillChips");
  container.innerHTML = profile.skills
    .map((skill) => `<span class="chip">${skill}</span>`)
    .join("");
}

function renderEducation() {
  const container = byId("educationList");
  container.innerHTML = profile.education
    .map(
      (item) => `
      <article class="education-item">
        <strong>${item.school}</strong>
        <p>${item.credential}</p>
        <p>${item.period}</p>
      </article>
    `
    )
    .join("");
}

function renderTimeline() {
  const container = byId("timeline");
  container.innerHTML = profile.timeline
    .map(
      (item) => `
      <article class="timeline-item">
        <div class="timeline-meta"><strong>${item.role}</strong><span>${item.org}</span><span>${item.period}</span></div>
        <p>${item.detail}</p>
      </article>
    `
    )
    .join("");
}

function renderProjects() {
  const container = byId("projectGrid");
  container.innerHTML = profile.projects
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
        <span class="project-tag">${project.tag}</span>
      </article>
    `
    )
    .join("");
}

function applyProfile() {
  document.title = `${profile.name} | ${profile.title}`;
  byId("aboutText").textContent = profile.about;

  byId("contactText").textContent =
    `Open to IT support and computer technician opportunities in ${profile.contact.location}. Use the form below to get in touch.`;

  byId("year").textContent = String(new Date().getFullYear());
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 70}ms`;
    observer.observe(item);
  });
}

renderStats();
renderSkills();
renderEducation();
renderTimeline();
renderProjects();
applyProfile();
setupMenu();
setupReveal();
