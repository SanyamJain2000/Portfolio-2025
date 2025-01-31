// -------------------------
// DATA
// -------------------------
const resumeData = {
  experience: [
    {
      title: "HCI Research Assistant",
      organization: "Insights Lab - Western University",
      date: "Sep 2023 – Present",
      details: [
        "Conducted diverse user research for multiple HCI and info-visualization projects employing interviews, usability testing, and data analysis",
        "Partnered with cross-functional teams to integrate user insights into iterative development cycles",
        "Advanced user experience outcomes in data-intensive environments"
      ],
      glow: true
    },
    {
      title: "Teaching Assistant",
      organization: "Western University",
      date: "Sep 2023 – Present",
      details: [
        "Analysis of Algorithms (CS 3340B): Demonstrated algorithmic complexity impacts on user experience and performance",
        "Multimedia & Communications (1033A): Advised on interactive media design and usability",
        "Human-Computer Interaction (4474B) & Integrated Science (1001X): Mentored students in usability testing and heuristic evaluations",
        "Multimedia & Communications 2 (2033A): Guided interactive media design and refined usability strategies"
      ],
      glow: true
    },
    {
      title: "Data & Product Experience Intern",
      organization: "Elite Techno Groups",
      date: "Jul 2021 – Sep 2021",
      details: [
        "Developed JSON-based inventory system (30% faster retrieval)",
        "Utilized Matplotlib/Pandas/NumPy for bottleneck discovery",
        "Refined UI elements through developer feedback integration"
      ]
    },
    {
      title: "Software Developer Intern",
      organization: "S.S.TECH",
      date: "Apr 2022 – Sep 2022",
      details: [
        "Engineered web/Android app boosting checkout efficiency by 20%",
        "Enhanced communication devices with user-centric updates",
        "Streamlined milestones through open design dialogues"
      ]
    },
    {
      title: "AAI Intern",
      organization: "Airports Authority of India",
      date: "Aug 2022 – Sep 2022",
      details: [
        "Explored AI-driven AMSS for real-time air traffic management",
        "Gained cross-functional insight into mission-critical protocols"
      ]
    }
  ],
  projects: [
    {
      title: "Adverse Event Reporting Interactive Visualization",
      date: "",
      details: [
        "OpenFDA-based interface applying HCI principles",
        "Enhanced data presentation and user clarity"
      ],
      glow: true
    },
    {
      title: "Ayurvedic Solutions for All Diseases",
      date: "",
      details: [
        "Real-time web recommendation system with Logistic Regression",
        "PHP/SQL backend for personalized health advice"
      ]
    },
    {
      title: "Public News App",
      date: "",
      details: [
        "OpenCV/SQL app for location-based news",
        "Optimized UI and queries for smoother experience"
      ]
    },
    {
      title: "Android Controlled Night Vision Camera",
      date: "",
      details: [
        "24/7 remote surveillance system",
        "Stable connectivity with real-time controls"
      ]
    }
  ],
  publications: [
    {
      title: "ENVISION OpenFDA Adverse Drug Events Database Exploratory Interactive Visualization",
      date: "2025"
    },
    {
      title: "Time-Varying Frequency Estimation of Narrow Band Signals",
      isbn: "978-81-954164-4-8",
      date: "2023"
    },
    {
      title: "Semantic Parser Using a Sequence-to-Sequence RNN Model to Generate Logical Forms",
      doi: "10.1007/978-981-19-8563-8_27",
      date: "2023"
    },
    {
      title: "Establishing Communication Between Neural Network Models",
      doi: "10.1007/978-981-19-8563-8",
      date: "2024"
    },
    {
      title: "Design and Development of a Solar-Based Wireless Electric Vehicle Charging System",
      doi: "10.1007/978-981-99-6749-0_32",
      date: "2024"
    }
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Python", "Java", "C++", "SQL", "HTML/CSS", "JavaScript", "Bootstrap", "MATLAB"]
    },
    {
      category: "Software & Libraries",
      items: ["D3.js", "Figma", "Git", "Android Studio", "Matplotlib", "Underscore.js", "Pandas", "NumPy", "Sklearn"]
    },
    {
      category: "Methodologies",
      items: ["Agile/Scrum", "Iterative Development", "Hypothesis-Led Planning", "Wireframing", "Prototyping"]
    }
  ],
  education: [
    {
      degree: "M.Sc Computer Science (Thesis in HCI)",
      university: "University of Western Ontario",
      gpa: "3.7",
      date: "2023 – 2025"
    },
    {
      degree: "B.Tech in Electrical Engineering",
      university: "Guru Gobind Singh Indraprastha University",
      gpa: "3.6",
      date: "2019 – 2023"
    }
  ],
  volunteer: [
    {
      role: "Vice-President",
      organization: "Computer Society of India, MAIT",
      date: "2022"
    },
    {
      role: "Social Volunteer",
      organization: "Rotaract Club of Rohini",
      date: "2021"
    }
  ],
  certifications: [
    {
      title: "Human-Computer Interaction",
      issuer: "Western University",
      date: "2024"
    },
    {
      title: "Google Data Analytics",
      issuer: "Google",
      date: "2024"
    },
    {
      title: "Machine Learning & Deep Learning",
      issuer: "Udemy",
      date: "2023"
    },
    {
      title: "Java Level 1 & 2",
      issuer: "Cambridge Certification Authority",
      date: "2023"
    },
    {
      title: "Microsoft Technology Associate",
      issuer: "Microsoft",
      date: "2024"
    }
  ]
};

// -------------------------
// HELPER FUNCTIONS
// -------------------------

/**
 * Builds each item card inside a section
 * @param {Object} item - Resume item (experience, project, etc.)
 * @param {String} sectionKey - e.g. 'experience', 'projects', etc.
 */
function createItemCard(item, sectionKey) {
  // Create container
  const card = document.createElement('div');
  card.classList.add('item-card');

  if (item.glow) {
    card.classList.add('glow-card');
  }

  // Placeholder image/icon (replace 'placeholder.jpg' with your actual image if available)
  const img = document.createElement('img');
  img.src = 'western.png'; 
  img.alt = item.title || item.role || item.degree || sectionKey;
  card.appendChild(img);

  // Title
  const titleEl = document.createElement('div');
  titleEl.classList.add('item-card-title');
  titleEl.textContent = item.title || item.degree || item.role || 'Untitled';
  card.appendChild(titleEl);

  // Subtitle (e.g., date, organization, university, etc.)
  const subEl = document.createElement('div');
  subEl.classList.add('item-card-subtitle');

  // Build a reasonable subtitle
  let subText = '';
  if (item.organization) {
    subText += item.organization + ' | ';
  }
  if (item.university) {
    subText += item.university + ' | ';
  }
  if (item.issuer) {
    subText += item.issuer + ' | ';
  }
  if (item.date) {
    subText += item.date;
  }
  if (subText.endsWith(' | ')) {
    subText = subText.slice(0, -3);
  }
  subEl.textContent = subText.trim();
  card.appendChild(subEl);

  // Card click event to show modal
  card.addEventListener('click', () => showItemModal(item, sectionKey));

  return card;
}

/**
 * Displays modal with item details
 */
function showItemModal(item, sectionKey) {
  // Construct modal content
  let contentHTML = '';

  // Title or role/degree
  contentHTML += `<h2>${item.title || item.degree || item.role || 'Item Details'}</h2>`;

  // Organization or university or issuer
  if (item.organization) {
    contentHTML += `<p><strong>Organization:</strong> ${item.organization}</p>`;
  }
  if (item.university) {
    contentHTML += `<p><strong>University:</strong> ${item.university}</p>`;
  }
  if (item.issuer) {
    contentHTML += `<p><strong>Issuer:</strong> ${item.issuer}</p>`;
  }

  // Date
  if (item.date) {
    contentHTML += `<p><strong>Date:</strong> ${item.date}</p>`;
  }

  // Additional references (ISBN, DOI, GPA, etc.)
  if (item.isbn) {
    contentHTML += `<p><strong>ISBN:</strong> ${item.isbn}</p>`;
  }
  if (item.doi) {
    contentHTML += `<p><strong>DOI:</strong> ${item.doi}</p>`;
  }
  if (item.gpa) {
    contentHTML += `<p><strong>GPA:</strong> ${item.gpa}</p>`;
  }

  // Details array (bullet points)
  if (item.details && Array.isArray(item.details)) {
    contentHTML += '<ul>';
    item.details.forEach((detail) => {
      contentHTML += `<li>${detail}</li>`;
    });
    contentHTML += '</ul>';
  }

  // Skills category
  if (item.category && item.items) {
    // For a skills object
    contentHTML += `<h3>${item.category}</h3>`;
    contentHTML += '<ul>';
    item.items.forEach(skill => {
      contentHTML += `<li>${skill}</li>`;
    });
    contentHTML += '</ul>';
  }

  // Insert into modal
  document.querySelector('.modal-body').innerHTML = contentHTML;
  document.querySelector('.modal-overlay').style.display = 'flex';
}

/**
 * Fills each relevant section with item cards
 */
function populateSection(sectionId, dataKey) {
  const container = document.getElementById(`${sectionId}-content`);
  if (!container) return;
  
  // If it's 'skills', data is an array of objects with category, items
  // We can either list them individually or treat them as a single set
  // For consistency, treat each object as a single "item" for now.
  if (dataKey === 'skills') {
    resumeData.skills.forEach((skillObj) => {
      // skillObj has shape { category: "...", items: [...] }
      const card = createItemCard(skillObj, dataKey);
      container.appendChild(card);
    });
  } else {
    // Otherwise, standard array of items
    resumeData[dataKey].forEach((item) => {
      const card = createItemCard(item, dataKey);
      container.appendChild(card);
    });
  }
}

// -------------------------
// MAIN
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Populate each section with data
  populateSection('experience', 'experience');
  populateSection('projects', 'projects');
  populateSection('publications', 'publications');
  populateSection('skills', 'skills');
  populateSection('education', 'education');
  populateSection('certifications', 'certifications');
  populateSection('volunteer', 'volunteer');

  // Close modal
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  
  modalClose.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });

  // Smooth scroll for nav buttons
  document.querySelectorAll('.nav-button').forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = btn.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
