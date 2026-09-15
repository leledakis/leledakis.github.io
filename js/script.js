// Renders content.js data into the page. No need to edit this file.

document.addEventListener("DOMContentLoaded", () => {
  const c = CONTENT;

  document.title = `${c.name} — ${c.title}`;

  setText("hero-eyebrow", c.title);
  setText("hero-name", c.name);
  setText("hero-tagline", c.tagline);

  const cvLink = document.getElementById("cv-download");
  if (cvLink) cvLink.href = c.cvFile;

  const meta = document.getElementById("hero-meta");
  meta.innerHTML = `
    <span>${c.location}</span>
    <span>${c.email}</span>
    <span>${c.phone}</span>
  `;

  // Highlights
  const grid = document.getElementById("highlight-grid");
  grid.innerHTML = c.highlights
    .map(
      (h) => `
      <div class="highlight-card">
        <div class="highlight-value">${h.value}</div>
        <div class="highlight-label">${h.label}</div>
      </div>`
    )
    .join("");

  // About
  setText("about-text", c.summary);
  const compList = document.getElementById("competency-list");
  compList.innerHTML = c.competencies.map((item) => `<span class="tag">${item}</span>`).join("");

  // Experience timeline
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = c.experience
    .map(
      (job) => `
      <div class="timeline-item">
        <h3 class="timeline-role">${job.role}</h3>
        <div class="timeline-company">${job.company}</div>
        <div class="timeline-meta">${job.period} · ${job.location}</div>
        <ul class="timeline-points">
          ${job.points.map((p) => `<li>${p}</li>`).join("")}
        </ul>
      </div>`
    )
    .join("");

  // Skills
  const skillsGrid = document.getElementById("skills-grid");
  skillsGrid.innerHTML = Object.entries(c.skills)
    .map(
      ([group, items]) => `
      <div class="skill-group">
        <h4>${group}</h4>
        <div class="tag-list">
          ${items.map((s) => `<span class="tag">${s}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");

  const langList = document.getElementById("language-list");
  langList.innerHTML = c.languages
    .map((l) => `<span class="tag">${l.name} — ${l.level}</span>`)
    .join("");

  // Education & certifications
  const eduList = document.getElementById("education-list");
  eduList.innerHTML = c.education
    .map(
      (e) => `
      <div class="edu-item">
        <p class="edu-degree">${e.degree}</p>
        <p class="edu-school">${e.school}</p>
        <p class="edu-period">${e.period}</p>
      </div>`
    )
    .join("");

  const certList = document.getElementById("certification-list");
  certList.innerHTML = c.certifications
    .map(
      (cert) => `
      <div class="edu-item">
        <p class="edu-degree">${cert.name}</p>
        <p class="edu-period">${cert.year}</p>
      </div>`
    )
    .join("");

  // Interests
  setText("interests-text", c.interests);

  // Contact
  const contactGrid = document.getElementById("contact-grid");
  contactGrid.innerHTML = `
    <div class="contact-card">
      <div class="contact-label">Email</div>
      <div class="contact-value"><a href="mailto:${c.email}">${c.email}</a></div>
    </div>
    <div class="contact-card">
      <div class="contact-label">Phone</div>
      <div class="contact-value"><a href="tel:${c.phone.replace(/\s+/g, "")}">${c.phone}</a></div>
    </div>
    <div class="contact-card">
      <div class="contact-label">LinkedIn</div>
      <div class="contact-value"><a href="${c.linkedin}" target="_blank" rel="noopener">View profile</a></div>
    </div>
  `;

  // Footer
  setText("footer-text", `© ${new Date().getFullYear()} ${c.name}. Built with care.`);

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
});

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
