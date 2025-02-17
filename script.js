// -------------------------
// DATA
// -------------------------
const resumeData = {
  experience: [
    {
      title: "HCI Research Assistant",
      organization: "Insights Lab - Western University",
      date: "Sep 2023 – Present",
      logo: "western.png",
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
      logo: "western.png",
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
      logo: "etl.jpeg",
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
      logo: "sstech.png",
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
      logo: "aai.png",
      details: [
        "Explored AI-driven AMSS for real-time air traffic management",
        "Gained cross-functional insight into mission-critical protocols"
      ]
    }
  ],
  projects: [
    {
      title: "ENVISION OpenFDA Adverse Drug Events Database Exploratory Interactive Visualization",
      date: "",
      logo: "image3.png",
      details: [
        "Solved the complexity of large Adverse Drug Event datasets with ENVISION, turning raw data into interactive, actionable insights",
        "Achieved dynamic, multi-level analysis using hierarchical treemaps, Sankey diagrams, and real-time filtering for instant pattern detection",
        "Championed user-centered design and human–computer interaction principles to drive quicker decision-making and bolster patient safety"
      ],
      glow: true
    },
    {
      title: "Healthcare Appointment Booking Webpage",
      date: "",
      logo: "Project2-main.png",
      details: [
        "RA well-structured platform merging seamless doctor discovery, user-friendly appointment booking, and real-time filter options",
        "Modern UI/UX crafted with Figma, HTML, CSS, and Bootstrap for effortless healthcare navigation",
        "Tailored for patients and clinics alike, ensuring swift communication, timely scheduling, and improved user engagement"
      ]
    },
    {
      title: "Public News Webpage Interface",
      date: "",
      logo: "project3-main.png",
      details: [
        "Redefined public news presentation with an engaging and intuitive UI",
        "Showcased the main headline prominently while effectively organizing latest updates",
        "Delivered a user-focused experience through real-time news and trending topics"
      ]
    },
    {
      title: "Ayurvedic Solutions for All Diseases",
      date: "",
      logo: "Project4-1.jpg",
      details: [
        "Marries ancient Ayurvedic principles with modern software to deliver personalized healthcare insights",
        "Meets user and business needs by simplifying prescription workflows and broadening Ayurvedic reach",
        "Promotes a socially impactful solution, encouraging practitioners to preserve and elevate traditional healing methods"
      ]
    }
  ],
  publications: [
    {
      title: "ENVISION OpenFDA Adverse Drug Events Database Exploratory Interactive Visualization",
      date: "2025",
      logo: "image3.png"
    },
    {
      title: "Time-Varying Frequency Estimation of Narrow Band Signals",
      isbn: "978-81-954164-4-8",
      date: "2023",
      logo: "frequency_estimation_logo.png"
    },
    {
      title: "Semantic Parser Using a Sequence-to-Sequence RNN Model to Generate Logical Forms",
      doi: "10.1007/978-981-19-8563-8_27",
      date: "2023",
      logo: "semantic_parser_logo.png"
    },
    {
      title: "Establishing Communication Between Neural Network Models",
      doi: "10.1007/978-981-19-8563-8",
      date: "2024",
      logo: "communication_logo.png"
    },
    {
      title: "Design and Development of a Solar-Based Wireless Electric Vehicle Charging System",
      doi: "10.1007/978-981-99-6749-0_32",
      date: "2024",
      logo: "solar_ev_logo.png"
    }
  ],
  skills: [
    {
      title: "Languages & Frameworks",
      items: ["Python", "Java", "C++", "SQL", "HTML/CSS", "JavaScript", "Bootstrap", "MATLAB"]
    },
    {
      title: "Software & Libraries",
      items: ["D3.js", "Figma", "Git", "Android Studio", "Matplotlib", "Underscore.js", "Pandas", "NumPy", "Sklearn"]
    },
    {
      title: "Methodologies",
      items: ["Agile/Scrum", "Iterative Development", "Hypothesis-Led Planning", "Wireframing", "Prototyping"]
    }
  ],
  education: [
    {
      degree: "M.Sc Computer Science (Thesis in HCI)",
      university: "University of Western Ontario",
      gpa: "3.7",
      date: "2023 – 2025",
      logo: "western.png"
    },
    {
      degree: "B.Tech in Electrical Engineering",
      university: "Guru Gobind Singh Indraprastha University",
      gpa: "3.6",
      date: "2019 – 2023",
      logo: "ggsiu_logo.png"
    }
  ],
  volunteer: [
    {
      role: "Vice-President",
      organization: "Computer Society of India, MAIT",
      date: "2022",
      logo: "Csi_logo.jpg"
    },
    {
      role: "Social Volunteer",
      organization: "Rotaract Club of Rohini",
      date: "2021",
      logo: "rot.png"
    }
  ],
  certifications: [
    {
      title: "Human-Computer Interaction",
      issuer: "Western University",
      date: "2024",
      logo: "hci_cert_logo.png"
    },
    {
      title: "Google Data Analytics",
      issuer: "Google",
      date: "2024",
      logo: "google_data_logo.png"
    },
    {
      title: "Machine Learning & Deep Learning",
      issuer: "Udemy",
      date: "2023",
      logo: "ml_dl_logo.png"
    },
    {
      title: "Java Level 1 & 2",
      issuer: "Cambridge Certification Authority",
      date: "2023",
      logo: "java_cert_logo.png"
    },
    {
      title: "Microsoft Technology Associate",
      issuer: "Microsoft",
      date: "2024",
      logo: "microsoft_logo.png"
    }
  ]
};

// -------------------------
// HELPER FUNCTIONS
// -------------------------

/**
 * Builds each item card inside a section.
 * For skills, creates a non-clickable card with a list of skills.
 * @param {Object} item - Resume item (experience, project, etc.)
 * @param {String} sectionKey - e.g. 'experience', 'projects', etc.
 */
function createItemCard(item, sectionKey) {
  const card = document.createElement('div');
  
  // Special handling for Skills section
  if (sectionKey === 'skills') {
    card.classList.add('item-card', 'skill-card');
    // Title for the skill category
    const titleEl = document.createElement('div');
    titleEl.classList.add('item-card-title');
    titleEl.textContent = item.title;
    card.appendChild(titleEl);
    
    // List of skills under this category
    if (item.items && Array.isArray(item.items)) {
      const skillsList = document.createElement('ul');
      skillsList.classList.add('skills-list');
      item.items.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
      });
      card.appendChild(skillsList);
    }
    // Do not add click event for skills cards.
    return card;
  }
  
  // For other sections
  card.classList.add('item-card');
  
  if (item.glow) {
    card.classList.add('glow-card');
  }
  
  // Add image if available and if section is not skills or certifications
  if (sectionKey !== 'skills' && sectionKey !== 'certifications') {
    const img = document.createElement('img');
    img.src = item.logo ? item.logo : 'default-logo.png';
    img.alt = item.title || item.role || item.degree || sectionKey;
    card.appendChild(img);
  }
  
  // Title
  const titleEl = document.createElement('div');
  titleEl.classList.add('item-card-title');
  titleEl.textContent = item.title || item.degree || item.role || 'Untitled';
  card.appendChild(titleEl);
  
  // Subtitle
  const subEl = document.createElement('div');
  subEl.classList.add('item-card-subtitle');
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
  
  // Add click event for non-skill cards to show modal
  card.addEventListener('click', () => showItemModal(item, sectionKey));
  
  return card;
}

/**
 * Displays modal with item details.
 * @param {Object} item - The resume item.
 * @param {String} sectionKey - The section key.
 */
function showItemModal(item, sectionKey) {
  let contentHTML = `<h2>${item.title || item.degree || item.role || 'Item Details'}</h2>`;
  
  if (item.organization) {
    contentHTML += `<p><strong>Organization:</strong> ${item.organization}</p>`;
  }
  if (item.university) {
    contentHTML += `<p><strong>University:</strong> ${item.university}</p>`;
  }
  if (item.issuer) {
    contentHTML += `<p><strong>Issuer:</strong> ${item.issuer}</p>`;
  }
  if (item.date) {
    contentHTML += `<p><strong>Date:</strong> ${item.date}</p>`;
  }
  if (item.isbn) {
    contentHTML += `<p><strong>ISBN:</strong> ${item.isbn}</p>`;
  }
  if (item.doi) {
    contentHTML += `<p><strong>DOI:</strong> ${item.doi}</p>`;
  }
  if (item.gpa) {
    contentHTML += `<p><strong>GPA:</strong> ${item.gpa}</p>`;
  }
  if (item.details && Array.isArray(item.details)) {
    contentHTML += '<ul>';
    item.details.forEach(detail => {
      contentHTML += `<li>${detail}</li>`;
    });
    contentHTML += '</ul>';
  }
  
  document.querySelector('.modal-body').innerHTML = contentHTML;
  document.querySelector('.modal-overlay').style.display = 'flex';
}

/**
 * Populates a section with item cards.
 * @param {string} sectionId - The ID of the section.
 * @param {string} dataKey - The key in resumeData.
 */
function populateSection(sectionId, dataKey) {
  const container = document.getElementById(`${sectionId}-content`);
  if (!container) return;
  
  resumeData[dataKey].forEach(item => {
    const card = createItemCard(item, dataKey);
    container.appendChild(card);
  });
}

// -------------------------
// MAIN
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  populateSection('experience', 'experience');
  populateSection('projects', 'projects');
  populateSection('publications', 'publications');
  populateSection('skills', 'skills');
  populateSection('education', 'education');
  populateSection('certifications', 'certifications');
  populateSection('volunteer', 'volunteer');

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
