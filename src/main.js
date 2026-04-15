/* =============================================
   PORTFOLIO — Main JavaScript
   ============================================= */

import profileData from './data/profile.json';
import skillsData from './data/skills.json';
import projectsData from './data/projects.json';
import navigationData from './data/navigation.json';

/* ---------- SVG Icons ---------- */
const icons = {
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  code: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
};

/* ---------- Populate Navigation ---------- */
function initNavigation() {
  const navMenu = document.getElementById('navMenu');
  navigationData.links.forEach((link) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.href}" data-section="${link.href.replace('#', '')}">${link.label}</a>`;
    navMenu.appendChild(li);
  });
}

/* ---------- Populate Hero ---------- */
function initHero() {
  document.getElementById('heroName').textContent = profileData.name;
  document.getElementById('heroRole').textContent = profileData.title;
  document.getElementById('heroTagline').textContent = profileData.tagline;

  const heroSocial = document.getElementById('heroSocial');
  const socialEntries = Object.entries(profileData.social);
  socialEntries.forEach(([platform, url]) => {
    const a = document.createElement('a');
    a.href = platform === 'email' ? `mailto:${url}` : url;
    a.target = platform === 'email' ? '_self' : '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'social-link';
    a.setAttribute('aria-label', platform);
    a.innerHTML = icons[platform] || icons.external;
    heroSocial.appendChild(a);
  });
}

/* ---------- Populate About ---------- */
function initAbout() {
  document.getElementById('aboutDescription').textContent = profileData.about.description;
  const detailsList = document.getElementById('aboutDetails');
  profileData.about.details.forEach((detail) => {
    const li = document.createElement('li');
    li.textContent = detail;
    detailsList.appendChild(li);
  });
}

/* ---------- Populate Skills ---------- */
function initSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  skillsData.categories.forEach((category, catIdx) => {
    const card = document.createElement('div');
    card.className = 'skill-category glass-card animate-on-scroll';
    card.style.transitionDelay = `${catIdx * 0.1}s`;

    let skillsHTML = '';
    category.skills.forEach((skill) => {
      skillsHTML += `
        <div class="skill-item">
          <div class="skill-info">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-percent">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill" data-width="${skill.level}"></div>
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="skill-category-header">
        <span class="skill-category-icon">${category.icon}</span>
        <h3 class="skill-category-name">${category.name}</h3>
      </div>
      ${skillsHTML}
    `;

    skillsGrid.appendChild(card);
  });
}

/* ---------- Populate Projects ---------- */
let currentFilter = 'all';

function renderProjects(filter = 'all') {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = '';

  // Show NDA notice
  let notice = document.getElementById('ndaNotice');
  if (!notice && projectsData.ndaNotice) {
    notice = document.createElement('p');
    notice.id = 'ndaNotice';
    notice.className = 'nda-notice animate-on-scroll';
    notice.innerHTML = `🔒 ${projectsData.ndaNotice}`;
    projectsGrid.parentElement.insertBefore(notice, projectsGrid);
  }

  const filtered =
    filter === 'featured'
      ? projectsData.projects.filter((p) => p.featured)
      : projectsData.projects;

  filtered.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card glass-card animate-on-scroll';
    card.style.transitionDelay = `${idx * 0.1}s`;

    const tagsHTML = project.tags
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join('');

    const placeholderIcons = ['🚀', '💻', '🌐', '📊', '📱', '⚡'];

    const ndaBadge = project.nda
      ? `<span class="nda-badge">🔒 NDA</span>`
      : '';

    // Only show links for non-NDA projects
    let linksHTML = '';
    if (!project.nda) {
      linksHTML = `
        ${
          project.liveUrl && project.liveUrl !== '#'
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">${icons.external} Live Demo</a>`
            : ''
        }
        ${
          project.repoUrl
            ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link">${icons.code} Source Code</a>`
            : ''
        }
      `;
    } else {
      linksHTML = `<span class="project-link nda-text">🔒 Confidential Project</span>`;
    }

    card.innerHTML = `
      <div class="project-image">
        ${
          project.image
            ? `<img src="${project.image}" alt="${project.title}" />`
            : `<span class="project-image-placeholder">${placeholderIcons[idx % placeholderIcons.length]}</span>`
        }
        ${ndaBadge}
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">${linksHTML}</div>
      </div>
    `;

    projectsGrid.appendChild(card);
  });

  // Re-observe new project cards
  observeElements();
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects(currentFilter);
    });
  });
}

/* ---------- Populate Contact ---------- */
function initContact() {
  const contactLinks = document.getElementById('contactLinks');
  const social = profileData.social;

  const contactItems = [
    {
      icon: icons.email,
      label: 'Email',
      value: social.email,
      href: `mailto:${social.email}`,
    },
    {
      icon: icons.github,
      label: 'GitHub',
      value: social.github.replace('https://', ''),
      href: social.github,
    },
    {
      icon: icons.linkedin,
      label: 'LinkedIn',
      value: social.linkedin.replace('https://', ''),
      href: social.linkedin,
    },
  ];

  contactItems.forEach((item) => {
    const div = document.createElement('a');
    div.href = item.href;
    div.target = item.label === 'Email' ? '_self' : '_blank';
    div.rel = 'noopener noreferrer';
    div.className = 'contact-link-item';
    div.innerHTML = `
      <div class="contact-link-icon">${item.icon}</div>
      <div class="contact-link-text">
        <span class="contact-link-label">${item.label}</span>
        <span class="contact-link-value">${item.value}</span>
      </div>
    `;
    contactLinks.appendChild(div);
  });

  // Footer social
  const footerSocial = document.getElementById('footerSocial');
  Object.entries(social).forEach(([platform, url]) => {
    const a = document.createElement('a');
    a.href = platform === 'email' ? `mailto:${url}` : url;
    a.target = platform === 'email' ? '_self' : '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'social-link';
    a.setAttribute('aria-label', platform);
    a.innerHTML = icons[platform] || icons.external;
    footerSocial.appendChild(a);
  });

  // Footer year
  document.getElementById('footerYear').textContent = new Date().getFullYear();
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Simple mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profileData.social.email}?subject=${subject}&body=${body}`;

    form.reset();
  });
}

/* ---------- Navbar Scroll & Active States ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section[id]');

  // Scroll state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active section
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.dataset.section === current) {
        link.classList.add('active');
      }
    });
  });

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      // Close mobile menu
      document.getElementById('navMenu').classList.remove('open');
      document.getElementById('navToggle').classList.remove('active');
    });
  });

  // Mobile toggle
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
}

/* ---------- Scroll Animations (Intersection Observer) ---------- */
function observeElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Animate skill bars
          const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
          skillBars.forEach((bar) => {
            const width = bar.dataset.width;
            setTimeout(() => {
              bar.style.width = `${width}%`;
            }, 200);
          });
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach((el) => {
    observer.observe(el);
  });
}

/* ---------- Cursor Glow (Desktop only) ---------- */
function initCursorGlow() {
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });
  }
}

/* ---------- Particle Background ---------- */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 15), 80);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const dx = p.x - particles[j].x;
        const dy = p.y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.06 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animationId = requestAnimationFrame(drawParticles);
  }

  resize();
  createParticles();
  drawParticles();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  // Pause when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      drawParticles();
    }
  });
}

/* ---------- Typing Effect for Hero ---------- */
function initTypingEffect() {
  const roleElement = document.getElementById('heroRole');
  const roles = [profileData.title, 'Web Developer', 'Mobile Developer', 'UI/UX Enthusiast'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  // Start after initial animation completes
  setTimeout(type, 2000);
}

/* ---------- Console Easter Egg 🐱 ---------- */
function initConsoleMessage() {
  const catArt = `
%c  /\\_/\\
 ( o.o )  %cCat Lover - Orange Cat 🧡
  > ^ <   %cMeow! You found the secret! 🐾

%c  Built with ☕ and 🐱 by M Habibi Siregar
`;

  console.log(
    catArt,
    'color: #f97316; font-size: 16px; font-weight: bold; font-family: monospace;',
    'color: #fb923c; font-size: 14px; font-weight: bold;',
    'color: #94a3b8; font-size: 12px; font-style: italic;',
    'color: #a78bfa; font-size: 11px;'
  );

  console.log(
    '%c🐱 Fun fact: Orange cats share one brain cell, and that\'s what makes them purrfect! 🧡',
    'color: #f97316; font-size: 12px; padding: 8px; background: #1a1a2e; border-radius: 4px; border-left: 3px solid #f97316;'
  );
}

/* ---------- Initialize App ---------- */
function init() {
  initConsoleMessage();
  initNavigation();
  initHero();
  initAbout();
  initSkills();
  renderProjects(currentFilter);
  initProjectFilters();
  initContact();
  initContactForm();

  // After DOM populated
  requestAnimationFrame(() => {
    initNavbar();
    observeElements();
    initCursorGlow();
    initParticles();
    initTypingEffect();
  });
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
