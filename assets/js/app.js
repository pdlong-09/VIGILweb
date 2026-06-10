const app = document.getElementById("app");
const nav = document.getElementById("siteNav");
const menuButton = document.getElementById("menuButton");

function pageUrl(page) {
  return `#/${page}`;
}

function internalLink(page, label, className = "") {
  return `<a class="${className}" href="${pageUrl(page)}">${label}</a>`;
}

function externalLink(url, label, className = "") {
  return `<a class="${className}" href="${url}" target="_blank" rel="noopener">${label}</a>`;
}

function getExternalUrl(key) {
  return SITE.links[key] || "#";
}

function renderNav() {
  nav.innerHTML = SITE.nav.map(item => {
    const dropdown = item.menu ? `
      <div class="dropdown">
        ${item.menu.map(child => internalLink(child.page, child.label)).join("")}
      </div>` : "";

    return `
      <div class="nav-item">
        ${internalLink(item.page, item.label, "nav-link")}
        ${dropdown}
      </div>`;
  }).join("");
}

function currentPageKey() {
  return location.hash.replace("#/", "") || "home";
}

function renderPage() {
  const key = currentPageKey();
  const page = SITE.pages[key] || SITE.pages.home;
  document.title = `${page.title} | V.I.G.I.L`;

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === pageUrl(key));
  });

  if (page.layout === "home") {
    app.innerHTML = renderHome(page);
  } else {
    app.innerHTML = renderStandardPage(page);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome(page) {
  return `
    <section class="hero">
      <div class="hero-grid">
        <div>
          <div class="eyebrow">${page.eyebrow}</div>
          <h1>${page.title}</h1>
          <p class="lead">${page.intro}</p>
          <div class="button-row">
            ${page.buttons.map(button => internalLink(button.page, button.label, `button ${button.style}`)).join("")}
          </div>
        </div>
        <aside class="hero-card">
          <img src="assets/img/logo-full.png" alt="V.I.G.I.L logo">
          <p>AI map + field validation + stories + community network.</p>
        </aside>
      </div>
    </section>
    ${renderSections(page.sections)}
  `;
}

function renderStandardPage(page) {
  return `
    <section class="page-head">
      <div class="page-head-inner">
        <div class="eyebrow">${page.eyebrow || "V.I.G.I.L"}</div>
        <h1>${page.title}</h1>
        <p>${page.intro || ""}</p>
      </div>
    </section>
    ${renderSections(page.sections || [])}
  `;
}

function renderSections(sections) {
  return sections.map(section => renderSection(section)).join("");
}

function renderSection(section) {
  switch (section.type) {
    case "text": return renderText(section);
    case "cards": return renderCards(section);
    case "note": return renderNote(section);
    case "map": return renderMap(section);
    case "embed": return renderEmbed(section);
    case "team": return renderTeam(section);
    case "timeline": return renderTimeline(section);
    case "steps": return renderSteps(section);
    case "cta": return renderCTA(section);
    case "department": return renderDepartment(section);
    case "form": return renderForm(section);
    case "contact": return renderContact(section);
    default: return "";
  }
}

function renderSectionTitle(section) {
  return section.title ? `<h2>${section.title}</h2>` : "";
}

function renderText(section) {
  return `
    <section class="section">
      ${renderSectionTitle(section)}
      <p>${section.text}</p>
    </section>`;
}

function renderCards(section) {
  return `
    <section class="section">
      ${renderSectionTitle(section)}
      ${section.text ? `<p>${section.text}</p>` : ""}
      <div class="card-grid">
        ${section.items.map(item => `
          <article class="card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            ${item.page ? internalLink(item.page, "Open →", "text-link") : ""}
          </article>`).join("")}
      </div>
    </section>`;
}

function renderNote(section) {
  return `
    <section class="section">
      <div class="note">${section.text}</div>
    </section>`;
}

function renderMap() {
  return `
    <section class="section">
      <div class="map-placeholder">
        <div>
          <strong>Map embed placeholder</strong>
          <p>Insert the live VIGIL web map, iframe, or external map link here.</p>
          ${internalLink("map-guide", "How to read the map", "button primary")}
        </div>
      </div>
    </section>`;
}

function renderEmbed(section) {
  return `
    <section class="section">
      ${renderSectionTitle(section)}
      <div class="embed-box">${section.text}</div>
    </section>`;
}

function renderTeam(section) {
  return `
    <section class="section">
      ${renderSectionTitle(section)}
      <div class="card-grid">
        ${section.items.map(member => `
          <article class="card">
            <span class="badge">${member.role}</span>
            <h3>${member.name}</h3>
            <p>${member.bio}</p>
          </article>`).join("")}
      </div>
    </section>`;
}

function renderTimeline(section) {
  return `
    <section class="section">
      ${renderSectionTitle(section)}
      <div class="timeline">
        ${section.items.map(item => `
          <article class="timeline-item ${item.done ? "done" : "future"}">
            <small>${item.date}</small>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>`).join("")}
      </div>
    </section>`;
}

function renderSteps(section) {
  return `
    <section class="section">
      ${renderSectionTitle(section)}
      <div class="steps">
        ${section.items.map(item => `
          <article class="step">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>`).join("")}
      </div>
    </section>`;
}

function renderCTA(section) {
  const url = getExternalUrl(section.url);
  return `
    <section class="section">
      <div class="cta-card">
        <h2>${section.title}</h2>
        <p>${section.text}</p>
        ${externalLink(url, section.label, "button primary")}
      </div>
    </section>`;
}

function renderDepartment(section) {
  return `
    <section class="section">
      <article class="department-card">
        <h2>${section.title}</h2>
        <p><strong>${section.head}</strong></p>
        <p>${section.members}</p>
        <ul>
          ${section.duties.map(duty => `<li>${duty}</li>`).join("")}
        </ul>
      </article>
    </section>`;
}

function renderForm(section) {
  return `
    <section class="section">
      ${renderSectionTitle(section)}
      <div class="form-placeholder">
        <p>Paste the Google Form embed iframe here.</p>
        <p>Current form link placeholder: ${externalLink(SITE.links.applicationForm, SITE.links.applicationForm)}</p>
      </div>
    </section>`;
}

function renderContact() {
  return `
    <section class="section">
      <div class="contact-grid">
        <div><strong>Personal email</strong><a href="mailto:${SITE.links.personalEmail}">${SITE.links.personalEmail}</a></div>
        <div><strong>Project email</strong><a href="mailto:${SITE.links.projectEmail}">${SITE.links.projectEmail}</a></div>
        <div><strong>Facebook page</strong>${externalLink(SITE.links.facebookPage, "Open Facebook")}</div>
        <div><strong>Instagram</strong>${externalLink(SITE.links.instagram, "Open Instagram")}</div>
      </div>
    </section>`;
}

renderNav();
renderPage();

window.addEventListener("hashchange", renderPage);

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* On mobile, tapping a nav item with a dropdown opens the dropdown first. */
document.addEventListener("click", event => {
  const link = event.target.closest(".nav-link");
  if (!link || window.innerWidth > 900) return;

  const item = link.parentElement;
  const hasDropdown = item.querySelector(".dropdown");
  if (hasDropdown) {
    event.preventDefault();
    item.classList.toggle("open");
  } else {
    nav.classList.remove("open");
  }
});
