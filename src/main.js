import {
  personalInfo,
  metricsData,
  experienceData,
  projectsData,
  skillsCategories,
  growthHighlights
} from './data/portfolioData.js';

document.addEventListener('DOMContentLoaded', () => {
  renderMetrics();
  renderExperience();
  renderProjects();
  renderSkills('all');
  renderGrowth();

  setupNavigationHighlight();
  setupSkillsFilter();
  setupCopyEmail();
  setupContactForm();
});

// Render Key Overview Metrics
function renderMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container) return;

  container.innerHTML = metricsData.map(m => `
    <div class="metric-card">
      <div class="metric-val">${m.value}</div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-sub">${m.subtext}</div>
    </div>
  `).join('');
}

// Render Experience Timeline
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = experienceData.map(exp => `
    <div class="timeline-card">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="company-name">${exp.company}</h3>
            <div class="role-badge">${exp.role}</div>
          </div>
          <span class="work-duration">${exp.duration} • ${exp.location}</span>
        </div>
        <p class="work-desc">${exp.description}</p>
        <ul class="bullet-list">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="tech-tags">
          ${exp.tools.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Render Featured Projects Grid
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projectsData.map(proj => `
    <div class="project-card">
      <div>
        <div class="project-header">
          <div>
            <div class="project-cat">${proj.category}</div>
            <h3 class="project-title">${proj.title}</h3>
          </div>
        </div>
        <div class="project-tagline">${proj.tagline}</div>
        <p class="project-summary">${proj.summary}</p>
        
        <div class="insights-box">
          <div class="insights-box-title">Key Insights & Delivered Outcomes</div>
          <ul class="insights-list">
            ${proj.keyInsights.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="project-footer">
        <div class="tech-tags">
          ${proj.tools.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-github">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Source Code on GitHub
        </a>
      </div>
    </div>
  `).join('');
}

// Render Filterable Technical Skills Grid
function renderSkills(categoryFilter = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  let allSkills = [];
  if (categoryFilter === 'all') {
    skillsCategories.forEach(cat => {
      allSkills = allSkills.concat(cat.skills);
    });
  } else {
    const targetCat = skillsCategories.find(cat => cat.id === categoryFilter);
    if (targetCat) {
      allSkills = targetCat.skills;
    }
  }

  container.innerHTML = allSkills.map(s => `
    <div class="skill-card">
      <div class="skill-top">
        <div class="skill-name">${s.name}</div>
        <span class="skill-level">${s.level}</span>
      </div>
      <div class="skill-desc">${s.desc}</div>
    </div>
  `).join('');
}

// Filter tab event handler
function setupSkillsFilter() {
  const tabs = document.querySelectorAll('.skill-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-category');
      renderSkills(cat);
    });
  });
}

// Render Growth Highlights
function renderGrowth() {
  const container = document.getElementById('growth-cards');
  if (!container) return;

  container.innerHTML = growthHighlights.map(g => `
    <div class="growth-card">
      <h3 class="growth-title">${g.title}</h3>
      <p class="growth-desc">${g.description}</p>
    </div>
  `).join('');
}

// Copy email button with toast feedback
function setupCopyEmail() {
  const btn = document.getElementById('btn-copy-email');
  if (!btn) return;

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      showToast('Email (lukeshkharkar@gmail.com) copied to clipboard!');
    }).catch(() => {
      showToast('Copied email: lukeshkharkar@gmail.com');
    });
  });
}

// Contact form handler
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name').value;
    const email = document.getElementById('sender-email').value;
    const message = document.getElementById('message-content').value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Lukesh,\n\n${message}\n\nFrom: ${name} (${email})`);
    
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    showToast('Opening default email client...');
    form.reset();
  });
}

// Floating Toast Utility
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Intersection Observer for Left Sidebar Active Link Highlight
function setupNavigationHighlight() {
  const sections = document.querySelectorAll('section.section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}
