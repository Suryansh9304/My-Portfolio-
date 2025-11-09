import React from 'react';

// --- Data Structure ---
const PORTFOLIO_DATA = {
    name: "Suryansh Singh",
    title: "Full Stack Developer (Java & React)",
    contact: {
        email: "rajputana932004@gmail.com",
        phone: "+91-9528487817",
        linkedin: "https://www.linkedin.com/in/suryansh-singh-rana-3565392b1",
        github: "https://github.com/YourGitHubProfile", // Placeholder
    },
    summary: "A passionate Computer Science & Engineering student specializing in **Java Full Stack development** with hands-on experience in building **RESTful APIs (Spring Boot)** and creating interactive user interfaces using **React**. Dedicated to problem-solving, logical thinking, and quick learning to deliver scalable and robust solutions.",
    skills: {
        technical: [
            "Java", "Python", "HTML5", "CSS3", "JavaScript", "Git", "GitHub",
            "MySQL", "SQL Server", "Spring Framework", "Spring Boot (REST API)", "React"
        ],
        soft: [
            "Strong Communication and Presentation Skills",
            "Problem Solving and Logical Thinking",
            "Time management and task Prioritization",
            "Adaptability and Quick Learning",
            "Positive Attitude with Growth Mindset",
        ]
    },
    experience: [
        {
            title: "Java Full Stack Developer with React",
            company: "Softpro India Private Limited, Noida",
            date: "June 2025 – Aug 2025",
            description: "Contributed to full-stack projects, focusing on integrating Java backend services with modern React frontends."
        },
        {
            title: "Java Full Stack Developer",
            company: "APTRON Technologies, Noida",
            date: "Jul 2024 – Dec 2024",
            description: "Gained comprehensive experience in Java backend development, contributing to various modules of enterprise applications."
        },
    ],
    projects: [
        {
            name: "Agri-Trade Hub",
            tech: "React, Java, JDBC, JSON (REST API)",
            description: "Developed robust RESTful APIs to handle user authentication and secure data transactions for an agricultural trade platform.",
            // UPDATED LINK
            link: "https://github.com/Suryansh9304/AgriTrade-hub" 
        },
        {
            name: "Sign Language Translation",
            tech: "Python, OpenCV, NumPy",
            description: "Designed a scalable structure for translating sign language gestures into text, ready for integration into web applications via APIs.",
            // UPDATED LINK
            link: "https://github.com/Suryansh9304/Sign-Language-Translation" 
        },
        {
            name: "Money Management System",
            tech: "HTML, CSS, JavaScript",
            description: "Created a user-friendly web application to track and manage personal income and expenses effectively.",
            // UPDATED LINK
            link: "https://github.com/Suryansh9304/Money-Management-System" 
        },
    ],
    education: [
        {
            degree: "B.Tech in Computer Science & Engineering",
            institution: "Quantum University, Roorkee, Uttarakhand",
            date: "Aug 2022 – Present",
            gpa: "CGPA-7.5"
        }
    ],
    achievements: [
        "Certification of Java Full Stack Developer from Softpro India Private Limited, Noida (June 2025 - Aug 2025)",
        "Certification of Java Backend Developer from Java Backend Internship Training from Aptron Technology, Noida (July 2024 - Dec 2024)",
    ]
};

// --- Icon Component (Inline SVGs) ---
const Icon = ({ name, className = 'icon' }) => {
    const icons = {
        mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 7-10-7" /></svg>,
        phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.71-4.71 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
        linkedin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 0-6 6v7h-4v-7a6 6 0 0 1 6-6 6 6 0 0 1 6 6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
        github: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.23c2-.22 4-1 4-5.5a4.32 4.32 0 0 0-1-2.92c.3-.6.44-1.47 0-3.2-.8-.26-1.6.15-1.92.54a10.38 10.38 0 0 0-6 0c-.39-.39-1.12-.8-1.92-.54-.43 1.73-.3 2.6.04 3.22a4.32 4.32 0 0 0-1 2.92c0 4.5 2 5.32 4 5.5a4.8 4.8 0 0 0-1 3.23v4" /><path d="M9 18c-3.1 1-5-1.2-5-1.2" /></svg>,
        zap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
        code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
        briefcase: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
        graduationCap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v6" /><path d="M18 12v6" /></svg>,
        award: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="11" r="4" /><path d="M12 2v2" /><path d="M22 10v-3l-2.5 1.5M10 22h4l-2-2" /><path d="M2 10v3l2.5-1.5" /><path d="M20 19v-4.5" /><path d="M4 19v-4.5" /></svg>,
        checkCircle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M9 11l3 3 7-7" /></svg>,
        link: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    };
    return icons[name.toLowerCase()] || <div className={className}>?</div>;
};

// --- Component for Section Header ---
const SectionHeader = ({ title, iconName }) => (
    <div className="section-header">
        <Icon name={iconName} className="header-icon" />
        <h2>{title}</h2>
    </div>
);

// --- Component for Skills Block ---
const SkillsBlock = ({ title, iconName, skills, isTechnical = true }) => (
    <div className={`skills-block ${isTechnical ? 'technical-skills' : 'soft-skills'}`}>
        <h3 className="skills-title">
            <Icon name={iconName} className="skills-icon" />
            {title}
        </h3>
        {isTechnical ? (
            <div className="technical-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        ) : (
            <ul className="soft-list">
                {skills.map((skill, index) => (
                    <li key={index} className="soft-item">
                        <Icon name="checkCircle" className="soft-icon" />
                        {skill}
                    </li>
                ))}
            </ul>
        )}
    </div>
);

// --- Component for Project Card ---
const ProjectCard = ({ project }) => (
    <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
    >
        <div className="project-content">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-description">{project.description}</p>
            <span className="project-link">
                View Project
                <Icon name="link" className="project-link-icon" />
            </span>
        </div>
    </a>
);

// --- Main App Component ---
export default function App() {
    // Replaces markdown bolding with React elements
    const formatSummary = (text) => {
        return text.split('**').map((part, index) => {
            if (index % 2 === 1) {
                return <strong key={index} className="summary-highlight">{part}</strong>;
            }
            return part;
        });
    };

    return (
        <>
            {/* The style block must be inside the component in a single-file React environment */}
            <style jsx="true">{`
                /* Global Styles */
                :root {
                    --bg-dark: #1f2937; /* Gray 800 */
                    --bg-medium: #111827; /* Gray 900 */
                    --text-light: #f3f4f6; /* Gray 100 */
                    --text-medium: #9ca3af; /* Gray 400 */
                    --primary-color: #3b82f6; /* Blue 500 */
                    --secondary-color: #06b6d4; /* Cyan 500 */
                    --font-inter: 'Inter', sans-serif;
                }

                *, *::before, *::after {
                    box-sizing: border-box; /* Ensures padding and border are included in the element's total width and height */
                }

                body {
                    margin: 0;
                    padding: 0;
                    font-family: var(--font-inter);
                    background-color: var(--bg-medium);
                    color: var(--text-light);
                    line-height: 1.6;
                    scroll-behavior: smooth;
                    min-height: 100vh;
                    overflow-x: hidden; /* Ensures body doesn't cause overflow */
                    width: 100%; /* Ensures body is strictly 100% of viewport width */
                }
                
                /* Application Wrapper */
                .portfolio-app {
                    width: 100%;
                    max-width: 100%;
                    overflow-x: hidden; /* CRITICAL: Clips any rogue elements */
                }

                /* Layout */
                .container {
                    /* Max-width limits content on very large screens */
                    max-width: none; 
                    /* Use 95% width to provide fluid padding on all screens, especially mobile */
                    width: 99%; 
                    /* Center the container horizontally */
                    margin: 0 auto; 
                    padding: 0; 
                }
                .main-content {
                    padding: 4rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 5rem;
                }

                /* Header (Navigation) */
                .header {
                    background-color: var(--bg-dark);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
                    position: sticky;
                    top: 0;
                    z-index: 10;
                    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
                }
                .header-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 0;
                    flex-wrap: wrap;
                }
                .logo {
                    font-size: 2rem;
                    font-weight: 900;
                    background: linear-gradient(to right, #3b82f6, #06b6d4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1.2;
                }
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                    margin-top: 0;
                }
                .nav-link {
                    color: var(--text-medium);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s, border-bottom 0.3s;
                    padding-bottom: 0.25rem;
                    border-bottom: 2px solid transparent;
                }
                .nav-link:hover {
                    color: var(--primary-color);
                    border-bottom-color: var(--primary-color);
                }
                .sub-title {
                    font-size: 1.125rem;
                    font-weight: 300;
                    color: var(--text-medium);
                    display: none; /* Hidden on mobile */
                }

                /* Section Header */
                .section-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                .section-header h2 {
                    font-size: 2rem;
                    font-weight: 800;
                    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin: 0;
                }
                .header-icon {
                    width: 1.75rem;
                    height: 1.75rem;
                    margin-right: 0.75rem;
                    color: var(--primary-color);
                    flex-shrink: 0;
                }

                /* About Section */
                .about-box {
                    background-color: rgba(31, 41, 55, 0.7);
                    padding: 2rem;
                    border-left: 4px solid var(--primary-color);
                    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
                    border-radius: 0.75rem;
                }
                .about-text {
                    font-size: 1.125rem;
                    color: var(--text-medium);
                    line-height: 1.75;
                }
                .summary-highlight {
                    color: var(--text-light);
                    font-weight: 600;
                }

                /* Skills Section */
                .skills-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                @media (min-width: 768px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                .skills-block {
                    background-color: var(--bg-dark);
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(55, 65, 81, 0.5);
                }
                .skills-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                }
                .skills-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: 0.5rem;
                }
                .technical-skills .skills-title { color: var(--primary-color); }
                .soft-skills .skills-title { color: var(--secondary-color); }

                .technical-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }
                .skill-tag {
                    background-color: rgba(55, 65, 81, 0.7);
                    color: var(--text-light);
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    transition: background-color 0.3s;
                    border: 1px solid var(--text-medium);
                }
                .skill-tag:hover {
                    background-color: rgba(59, 130, 246, 0.2);
                    border-color: var(--primary-color);
                }

                .soft-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .soft-item {
                    display: flex;
                    align-items: flex-start;
                    color: var(--text-medium);
                    font-size: 0.95rem;
                }
                .soft-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: 0.5rem;
                    color: var(--secondary-color);
                    flex-shrink: 0;
                    margin-top: 0.15rem;
                }

                /* Projects */
                .projects-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                @media (min-width: 640px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (min-width: 1024px) {
                    .projects-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                .project-card {
                    display: block;
                    background-color: var(--bg-dark);
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    text-decoration: none;
                    color: inherit;
                    border: 1px solid rgba(55, 65, 81, 0.5);
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                }
                .project-card:hover {
                    border-color: var(--primary-color);
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
                }
                .project-content {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .project-name {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text-light);
                    margin-bottom: 0.5rem;
                    transition: color 0.3s;
                }
                .project-card:hover .project-name {
                    color: var(--primary-color);
                }
                .project-tech {
                    font-family: monospace;
                    color: var(--secondary-color);
                    margin-bottom: 0.75rem;
                    font-size: 0.875rem;
                }
                .project-description {
                    color: var(--text-medium);
                    font-size: 0.9rem;
                    flex-grow: 1;
                    margin-bottom: 1rem;
                }
                .project-link {
                    color: var(--primary-color);
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    font-size: 0.9rem;
                }
                .project-link-icon {
                    width: 1rem;
                    height: 1rem;
                    margin-left: 0.5rem;
                    transition: transform 0.3s;
                }
                .project-card:hover .project-link-icon {
                    transform: translateX(4px);
                }

                /* Experience & Education */
                .two-col-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }
                @media (min-width: 768px) {
                    .two-col-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 4rem;
                    }
                }

                /* Experience List */
                .experience-item {
                    padding-left: 1.5rem;
                    border-left: 4px solid var(--primary-color);
                    transition: border-left-color 0.3s;
                    margin-bottom: 1.5rem;
                }
                .experience-item:hover {
                    border-left-color: var(--secondary-color);
                }
                .job-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--text-light);
                    margin: 0;
                }
                .job-company {
                    color: var(--primary-color);
                    font-style: italic;
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                }
                .job-date {
                    color: var(--text-medium);
                    font-size: 0.875rem;
                    margin-bottom: 0.5rem;
                }
                .job-description {
                    color: var(--text-medium);
                    font-size: 0.9rem;
                }

                /* Education Block */
                .education-title {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--secondary-color);
                    margin-bottom: 1rem;
                    margin-top: 0;
                }
                .education-item {
                    background-color: var(--bg-dark);
                    padding: 1rem;
                    border-radius: 0.5rem;
                    border: 1px solid rgba(55, 65, 81, 0.5);
                    margin-bottom: 1rem;
                }
                .degree {
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--text-light);
                    margin: 0;
                }
                .institution {
                    color: var(--text-medium);
                    margin: 0;
                    font-size: 0.95rem;
                }
                .edu-meta {
                    color: var(--text-medium);
                    font-size: 0.875rem;
                    margin-top: 0.5rem;
                }
                .edu-gpa {
                    color: var(--primary-color);
                    font-weight: 500;
                }

                /* Achievements */
                .achievements-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .achievement-item {
                    display: flex;
                    align-items: flex-start;
                    color: var(--text-medium);
                    font-size: 0.9rem;
                }
                .achievement-bullet {
                    color: var(--secondary-color);
                    font-size: 1.5rem;
                    line-height: 1;
                    margin-right: 0.5rem;
                    flex-shrink: 0;
                }
                .achievement-header {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--secondary-color);
                    margin-bottom: 1rem;
                    margin-top: 0;
                    display: flex;
                    align-items: center;
                }
                .achievement-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: 0.5rem;
                    color: #fbbf24; /* Yellow 500 */
                }


                /* Footer */
                .footer {
                    background-color: var(--bg-dark);
                    border-top: 1px solid rgba(55, 65, 81, 0.5);
                    padding: 2rem 0;
                    text-align: center; /* Ensures text in footer is centered */
                }
                .footer-text {
                    color: var(--text-medium);
                    font-size: 0.875rem;
                }
                .footer-links {
                    margin-top: 1rem;
                    display: flex;
                    justify-content: center; /* Centers the links horizontally */
                    gap: 1rem;
                }
                .contact-link {
                    display: flex;
                    align-items: center;
                    color: var(--text-medium);
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .contact-link:hover {
                    color: var(--secondary-color);
                }
                .contact-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: 0.25rem;
                    color: var(--primary-color);
                }

                /* Mobile Adjustments - FIXING OVERFLOW AND ALIGNMENT */
                @media (max-width: 767px) {
                    .header-inner {
                        flex-direction: column;
                        align-items: center; 
                        text-align: center; 
                        gap: 0.5rem;
                        padding-left: 1rem; 
                        padding-right: 1rem;
                    }
                    .nav-links {
                        width: 100%;
                        justify-content: center; 
                        margin-top: 1rem;
                        gap: 0.5rem;
                    }
                    /* Contact links inside the About Me box on mobile */
                    .about-box > .footer-links {
                        /* Allow links to wrap to prevent horizontal overflow */
                        flex-wrap: wrap; 
                        gap: 0.75rem; 
                    }
                    .logo {
                        font-size: 1.75rem;
                    }
                }
                @media (max-width: 480px) {
                    .main-content {
                        padding: 2rem 0;
                        gap: 3rem;
                    }
                    .section-header h2 {
                        font-size: 1.5rem;
                    }
                    .header-icon {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                    .about-box {
                        padding: 1.25rem;
                    }
                    .about-text {
                        font-size: 1rem;
                    }
                }
            `}</style>

            <div className="portfolio-app">
                
                {/* Header Section */}
                <header className="header">
                    <div className="container header-inner">
                        <h1 className="logo">
                            {PORTFOLIO_DATA.name}
                        </h1>
                        <p className="sub-title">{PORTFOLIO_DATA.title}</p>
                        <nav className="nav-links">
                            {['About', 'Skills', 'Projects', 'Experience'].map(item => (
                                <a 
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-link"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container main-content">
                    
                    {/* 1. About Me */}
                    <section id="about">
                        <SectionHeader title="About Me" iconName="zap" />
                        <div className="about-box">
                            <p className="about-text">
                                {formatSummary(PORTFOLIO_DATA.summary)}
                            </p>
                            <div className="footer-links" style={{marginTop: '1.5rem'}}>
                                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="contact-link"><Icon name="mail" className="contact-icon" />{PORTFOLIO_DATA.contact.email}</a>
                                <a href={`tel:${PORTFOLIO_DATA.contact.phone}`} className="contact-link"><Icon name="phone" className="contact-icon" />{PORTFOLIO_DATA.contact.phone}</a>
                                <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link"><Icon name="linkedin" className="contact-icon" />LinkedIn</a>
                                <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link"><Icon name="github" className="contact-icon" />GitHub</a>
                            </div>
                        </div>
                    </section>

                    {/* 2. Skills */}
                    <section id="skills">
                        <SectionHeader title="Technical & Soft Skills" iconName="code" />
                        <div className="skills-grid">
                            <SkillsBlock
                                title="Technical Stack"
                                iconName="briefcase"
                                skills={PORTFOLIO_DATA.skills.technical}
                                isTechnical={true}
                            />
                            <SkillsBlock
                                title="Soft Skills"
                                iconName="zap"
                                skills={PORTFOLIO_DATA.skills.soft}
                                isTechnical={false}
                            />
                        </div>
                    </section>
                    
                    {/* 3. Projects */}
                    <section id="projects">
                        <SectionHeader title="Key Projects" iconName="briefcase" />
                        <div className="projects-grid">
                            {PORTFOLIO_DATA.projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </div>
                    </section>

                    {/* 4. Experience & Education */}
                    <section id="experience">
                        <div className="two-col-grid">
                            
                            {/* Experience */}
                            <div>
                                <SectionHeader title="Internship Experience" iconName="briefcase" />
                                <div className="experience-list">
                                    {PORTFOLIO_DATA.experience.map((job, index) => (
                                        <div key={index} className="experience-item">
                                            <h3 className="job-title">{job.title}</h3>
                                            <p className="job-company">{job.company}</p>
                                            <p className="job-date">{job.date}</p>
                                            <p className="job-description">{job.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Education & Achievements */}
                            <div>
                                <h3 className="education-title">Academic Background</h3>
                                {PORTFOLIO_DATA.education.filter(e => e.degree.includes('B.Tech')).map((edu, index) => (
                                    <div key={index} className="education-item">
                                        <p className="degree">{edu.degree}</p>
                                        <p className="institution">{edu.institution}</p>
                                        <p className="edu-meta">
                                            {edu.date} | <span className="edu-gpa">{edu.gpa}</span>
                                        </p>
                                    </div>
                                ))}

                                {/* Achievements */}
                                <h3 className="achievement-header" style={{marginTop: '2rem'}}>
                                    <Icon name="award" className="achievement-icon" />
                                    Certifications & Achievements
                                </h3>
                                <ul className="achievements-list">
                                    {PORTFOLIO_DATA.achievements.map((ach, index) => (
                                        <li key={index} className="achievement-item">
                                            <span className="achievement-bullet">&bull;</span>
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="footer">
                    <p className="footer-text">
                        &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Developed using React & Standard CSS.
                    </p>
                    <div className="footer-links">
                        <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                        <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                    </div>
                </footer>
            </div>
        </>
    );
}