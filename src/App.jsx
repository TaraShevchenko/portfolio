import { AnimatedHome } from "./HomeTiles";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  AnimatedDetails,
  Reveal,
  SpotlightCard,
  ease,
  spring,
} from "./MotionUI";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CodeXml,
  Copy,
  FileUser,
  FolderOpen,
  House,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import photo from "./assets/MyPhoto1.jpg";
import resume from "./assets/Resume.pdf";
import { copy } from "./copy";
import { experience, profile, projects, skills } from "./data";

const paths = [
  "/",
  "/about",
  "/career",
  "/projects",
  "/achievements",
  "/contact",
];
const icons = [House, UserRound, BriefcaseBusiness, FolderOpen, Award, Mail];
const categories = ["All", "Main", "Frontend", "Backend", "Database", "Tools"];

function Github({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.31c0 .32.22.69.83.58A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}
function Linkedin() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8v-4.64c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.72H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.56 1.96 3.56 4.5v5.28Z" />
    </svg>
  );
}

function stored(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Preferences are optional. */
  }
}

function SkillChip({ skill }) {
  const [name, logo, color] = skill;
  return (
    <span className="skill-chip">
      <span className="skill-logo" style={{ color }} aria-hidden="true">
        {logo ? (
          <img src={`/skills/${logo}.svg`} alt="" />
        ) : (
          <CodeXml size={19} />
        )}
      </span>
      {name}
    </span>
  );
}

function Skills({ t }) {
  const [category, setCategory] = useState("All");
  const reduce = useReducedMotion();
  const matches = (skill, filter) =>
    filter === "All" || (filter === "Main" ? skill[4] : skill[3] === filter);
  return (
    <Reveal className="skills-section" delay={0.12}>
      <h2 id="skills-title" className="icon-heading">
        <CodeXml />
        {t.skills}
      </h2>
      <p className="muted section-description">{t.skillsDescription}</p>
      <div className="filters" role="group" aria-label={t.skills}>
        {categories.map((item) => (
          <motion.button
            key={item}
            className={"filter " + (category === item ? "selected" : "")}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            whileTap={reduce ? {} : { scale: 0.94 }}
          >
            {category === item && (
              <motion.i
                className="filter-highlight"
                layoutId="skill-filter"
                transition={reduce ? { duration: 0 } : spring}
              />
            )}
            {t.categories[item]}
            <span>{skills.filter((s) => matches(s, item)).length}</span>
          </motion.button>
        ))}
      </div>
      <motion.div
        layout
        className="skill-list"
        aria-live="polite"
        transition={reduce ? { duration: 0 } : spring}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {skills
            .filter((s) => matches(s, category))
            .map((skill, index) => (
              <motion.span
                className="skill-motion"
                layout
                key={skill[0]}
                initial={{
                  opacity: 0,
                  scale: reduce ? 1 : 0.6,
                  y: reduce ? 0 : 18,
                  filter: reduce ? "none" : "blur(4px)",
                }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  scale: reduce ? 1 : 0.75,
                  transition: { duration: reduce ? 0 : 0.14 },
                }}
                transition={reduce ? { duration: 0 } : {
                  type: "spring", stiffness: 380, damping: 24,
                  opacity: { duration: 0.2, delay: Math.min(index * 0.025, 0.24) },
                  filter: { duration: 0.25 },
                  layout: { type: "spring", stiffness: 320, damping: 26 },
                }}
                whileHover={reduce ? {} : { y: -5, scale: 1.08, rotate: -2, transition: { type: "spring", stiffness: 400, damping: 18 } }}
              >
                <SkillChip skill={skill} />
              </motion.span>
            ))}
        </AnimatePresence>
      </motion.div>
    </Reveal>
  );
}

function PageHeader({ index, t }) {
  return (
    <motion.header
      className="page-header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1>{t.titles[index]}</h1>
      <p>{t.descriptions[index]}</p>
    </motion.header>
  );
}

function About({ t }) {
  return (
    <>
      <PageHeader index={1} t={t} />
      <Reveal className="biography" delay={0.08}>
        <h2>{t.aboutHeadline}</h2>
        {t.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="signoff">{t.regards}</p>
        <p className="signature">{t.name}</p>
      </Reveal>
      <Skills t={t} />
    </>
  );
}

function Career({ t, language }) {
  return (
    <>
      <PageHeader index={2} t={t} />
      <section className="career-list" aria-label={t.titles[2]}>
        {experience.map((item, index) => (
          <SpotlightCard
            className="career-card"
            key={item.company}
            index={index}
          >
            <div
              className="company-logo"
              style={{ "--company-color": item.color }}
            >
              {item.initials}
            </div>
            <div className="career-content">
              <h2>{item.role}</h2>
              <p>
                {item.company}
                <span className="dot">·</span>
                {item.domain[language]}
              </p>
              <p className="career-dates">{item.dates[language]}</p>
              <AnimatedDetails t={t}>
                <ul>
                  {item.details[language].map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </AnimatedDetails>
            </div>
          </SpotlightCard>
        ))}
      </section>
      <section className="education-section">
        <h2 className="icon-heading">
          <Award />
          {language === "en" ? "Education" : "Освіта"}
        </h2>
        <article className="career-card">
          <div
            className="company-logo"
            style={{ "--company-color": "#94a9ca" }}
          >
            KPI
          </div>
          <div className="career-content">
            <h2>
              {language === "en"
                ? "Igor Sikorsky Kyiv Polytechnic Institute"
                : "КПІ ім. Ігоря Сікорського"}
            </h2>
            <p>
              {language === "en"
                ? "Bachelor’s degree · Software Engineering · APEPS"
                : "Бакалавр · Інженерія програмного забезпечення · АПЕПС"}
            </p>
            <p className="career-dates">
              {language === "en"
                ? "September 2017 — May 2021"
                : "Вересень 2017 — травень 2021"}
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

function Projects({ t, language }) {
  return (
    <>
      <PageHeader index={3} t={t} />
      {projects.length ? (
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              {project.image && <img src={project.image} alt={project.title} />}
              <h2>{project.title}</h2>
              <p>{project.description[language]}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.url} target="_blank" rel="noreferrer">
                {t.viewProject}
                <ArrowUpRight size={16} />
              </a>
              {project.source && (
                <a href={project.source} target="_blank" rel="noreferrer">
                  {t.source}
                  <Github size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <section className="empty-state">
          <div className="empty-icon">
            <FolderOpen size={34} strokeWidth={1.25} />
            <span className="empty-dot" />
          </div>
          <h2>{t.coming}</h2>
          <p>{t.comingDescription}</p>
          <Link className="text-link" to="/contact">
            {t.nav[5]}
            <ArrowRight size={16} />
          </Link>
        </section>
      )}
    </>
  );
}

function Achievements({ t }) {
  return (
    <>
      <PageHeader index={4} t={t} />
      <div className="milestones">
        {t.milestones.map(([title, description, tags], i) => (
          <SpotlightCard className="milestone" key={title} index={i}>
            <div className="milestone-icon">
              {i === 0 ? (
                <CodeXml />
              ) : i === 1 ? (
                <BriefcaseBusiness />
              ) : (
                <Award />
              )}
            </div>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <span className="milestone-tags">{tags}</span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </>
  );
}

function Contact({ t }) {
  const [copyState, setCopyState] = useState("");
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState(""), 3000);
  }
  return (
    <>
      <PageHeader index={5} t={t} />
      <section className="contact-intro">
        <div className="contact-symbol">
          <Mail size={26} />
        </div>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <div className="email-row">
          <a href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={18} />
          </a>
          <button
            className="icon-button"
            onClick={copyEmail}
            aria-label={t.copyEmail}
          >
            {copyState === "copied" ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
        <p className="copy-status" role="status">
          {copyState === "copied"
            ? t.copied
            : copyState === "error"
              ? t.copyError
              : ""}
        </p>
      </section>
      <section className="social-section">
        <h2>{t.social}</h2>
        <div className="social-grid">
          <a
            className="social-card"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            <div>
              <h3>GitHub</h3>
              <p>{t.github}</p>
            </div>
            <ArrowUpRight size={18} />
          </a>
          <a
            className="social-card"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
            <div>
              <h3>LinkedIn</h3>
              <p>{t.linkedin}</p>
            </div>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

function PhotoDialog({ t, dialogRef }) {
  return (
    <dialog
      className="photo-dialog"
      ref={dialogRef}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
    >
      <div className="photo-inner">
        <button
          className="icon-button photo-close"
          onClick={() => dialogRef.current.close()}
          aria-label={t.close}
        >
          <X />
        </button>
        <img src={photo} alt={t.name} />
        <p>{t.name}</p>
      </div>
    </dialog>
  );
}

export default function App() {
  const reduce = useReducedMotion();
  const [language, setLanguage] = useState(() =>
    stored("portfolio-language", "en") === "uk" ? "uk" : "en",
  );
  const [theme, setTheme] = useState(() =>
    stored("portfolio-theme", "dark") === "light" ? "light" : "dark",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const location = useLocation();
  const dialogRef = useRef();
  const mainRef = useRef();
  const initialLocation = useRef(true);
  const settledLocation = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    save("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]').content =
      theme === "dark" ? "#0b0e14" : "#fafafa";
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = language;
    save("portfolio-language", language);
  }, [language]);
  useEffect(() => {
    const index = paths.indexOf(location.pathname);
    document.title = `${index === 0 ? "Portfolio" : index >= 0 ? t.titles[index] : t.missing} | ${t.name}`;
    setMenuOpen(false);
    if (location.hash)
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
    if (!initialLocation.current)
      mainRef.current?.focus({ preventScroll: true });
    initialLocation.current = false;
  }, [location.pathname, location.hash, t]);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">
        {t.skip}
      </a>
      <div className="site-shell">
        <aside className="sidebar">
          <div className="profile">
            <button
              className="avatar-button"
              onClick={() => dialogRef.current.showModal()}
              aria-label={t.photo}
            >
              <img src={photo} alt={t.name} />
            </button>
            <div className="profile-identity">
              <Link to="/" className="profile-name">
                {t.name}
              </Link>
              <a
                className="handle"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                @{profile.handle}
              </a>
            </div>
            <button
              className="mobile-menu icon-button"
              aria-label={t.menu}
              aria-expanded={menuOpen}
              aria-controls="navigation-panel"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div
            className={`navigation-panel ${menuOpen ? "is-open" : ""}`}
            id="navigation-panel"
          >
            <div className="preferences">
              <div className="languages" role="group" aria-label="Language">
                <button
                  className={language === "en" ? "active" : ""}
                  aria-pressed={language === "en"}
                  onClick={() => setLanguage("en")}
                >
                  EN
                </button>
                <button
                  className={language === "uk" ? "active" : ""}
                  aria-pressed={language === "uk"}
                  onClick={() => setLanguage("uk")}
                >
                  UA
                </button>
              </div>
              <button
                className="theme-button icon-button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={theme === "dark" ? t.light : t.dark}
              >
                {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
              </button>
            </div>
            <nav
              aria-label={
                language === "en" ? "Main navigation" : "Головна навігація"
              }
            >
              {paths.map((path, index) => {
                const Icon = icons[index];
                return (
                  <NavLink to={path} end key={path}>
                    {location.pathname === path && (
                      <motion.span
                        className="nav-highlight"
                        layoutId="active-navigation"
                        transition={reduce ? { duration: 0 } : spring}
                      />
                    )}
                    <Icon size={19} strokeWidth={1.6} />
                    <span>{t.nav[index]}</span>
                  </NavLink>
                );
              })}
            </nav>
            <div className="sidebar-footer">
              <a
                className="cv-button"
                href={resume}
                download="Taras_Shevchenko_CV.pdf"
              >
                <FileUser size={19} />
                <span>{t.cv}</span>
                <ArrowRight size={16} />
              </a>
              <p>
                © {new Date().getFullYear()}. {t.rights}
              </p>
            </div>
          </div>
        </aside>
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            initial={{
              opacity: 0,
              y: reduce ? 0 : 12,
              filter: reduce ? "none" : "blur(4px)",
            }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{
              opacity: 0,
              y: reduce ? 0 : -6,
              filter: reduce ? "none" : "blur(3px)",
              transition: { duration: reduce ? 0 : 0.13 },
            }}
            transition={{ duration: reduce ? 0 : 0.4, ease }}
            onAnimationComplete={() => {
              if (settledLocation.current === location.key) return;
              settledLocation.current = location.key;
              if (location.hash)
                document
                  .getElementById(location.hash.slice(1))
                  ?.scrollIntoView();
              if (!document.activeElement?.closest("button, a, input"))
                mainRef.current?.focus({ preventScroll: true });
            }}
            id="main-content"
            tabIndex={-1}
            ref={mainRef}
            key={location.pathname}
          >
            <Routes location={location}>
              <Route path="/" element={<AnimatedHome t={t} />} />
              <Route path="/about" element={<About t={t} />} />
              <Route
                path="/career"
                element={<Career t={t} language={language} />}
              />
              <Route
                path="/projects"
                element={<Projects t={t} language={language} />}
              />
              <Route
                path="/portfolio"
                element={<Navigate to="/projects" replace />}
              />
              <Route path="/achievements" element={<Achievements t={t} />} />
              <Route path="/contact" element={<Contact t={t} />} />
              <Route
                path="*"
                element={
                  <section className="empty-state">
                    <h1>{t.missing}</h1>
                    <p>{t.missingText}</p>
                    <Link className="text-link" to="/">
                      {t.back}
                      <ArrowRight size={16} />
                    </Link>
                  </section>
                }
              />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </div>
      <PhotoDialog t={t} dialogRef={dialogRef} />
    </MotionConfig>
  );
}
