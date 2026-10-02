import { useId, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChevronDown,
  CodeXml,
  FolderOpen,
  Mail,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import photo from "./assets/MyPhoto1.jpg";
import { experience, skills } from "./data";

export const spring = {
  type: "spring",
  stiffness: 330,
  damping: 30,
  mass: 0.8,
};
export const ease = [0.22, 1, 0.36, 1];

export function Reveal({ children, className, delay = 0, as = "div" }) {
  const reduce = useReducedMotion();
  const Component = as === "article" ? motion.article : motion.div;
  return (
    <Component
      className={className}
      initial={{
        opacity: 0,
        y: reduce ? 0 : 20,
        filter: reduce ? "none" : "blur(5px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduce ? 0 : 0.65,
        ease,
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </Component>
  );
}

export function SpotlightCard({ children, className = "", index = 0 }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useSpring(0, spring),
    rotateY = useSpring(0, spring);
  const glow = useMotionTemplate`radial-gradient(340px circle at ${x}px ${y}px, var(--spotlight), transparent 80%)`;
  function move(event) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    rotateX.set((0.5 - (event.clientY - rect.top) / rect.height) * 4);
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 4);
  }
  return (
    <motion.article
      className={`motion-card ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        ease,
        delay: reduce ? 0 : Math.min(index * 0.07, 0.28),
      }}
      onPointerMove={move}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={reduce ? {} : { borderColor: "var(--card-hover-border)" }}
    >
      <motion.div
        aria-hidden="true"
        className="card-spotlight"
        style={{ background: glow }}
      />
      {children}
    </motion.article>
  );
}

export function AnimatedDetails({ t, children }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const id = useId();
  return (
    <div className="animated-details">
      <button
        className="detail-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={reduce ? { duration: 0 } : spring}
        >
          <ChevronDown size={15} />
        </motion.span>
        {open ? t.hideDetails : t.details}
      </button>
      <motion.div
        id={id}
        className="detail-body"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 0.4, ease }}
        inert={!open}
        aria-hidden={!open}
      >
        <div className="detail-inner">{children}</div>
      </motion.div>
    </div>
  );
}

function Skill({ item }) {
  return (
    <span className="skill-chip">
      <span className="skill-logo" style={{ color: item[2] }}>
        {item[1] ? (
          <img src={`/skills/${item[1]}.svg`} alt="" />
        ) : (
          <CodeXml size={18} />
        )}
      </span>
      {item[0]}
    </span>
  );
}

function SkillMarquee() {
  return (
    <div className="skill-marquees" aria-hidden="true">
      {[skills.slice(0, 10), skills.slice(10, 20)].map((row, i) => (
        <div className="marquee-viewport" key={i}>
          <div className={`marquee-track ${i ? "reverse" : ""}`}>
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy}>
                {row.map((item) => (
                  <Skill key={item[0]} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PhotoDeck({ t }) {
  const reduce = useReducedMotion();
  const [order, setOrder] = useState([0, 1, 2]);
  function cycle() {
    setOrder((current) => [...current.slice(1), current[0]]);
  }
  return (
    <div className="photo-deck">
      <div className="deck-stage">
        {order.map((card, index) => (
          <motion.div
            key={card}
            className={`photo-card photo-card-${card}`}
            style={{ zIndex: index + 1 }}
            animate={{
              rotate: [-13, 8, -4][index],
              x: [-16, 12, 0][index],
              y: [3, 7, 0][index],
              scale: [0.88, 0.94, 1][index],
            }}
            transition={reduce ? { duration: 0 } : spring}
            drag={!reduce}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) + Math.abs(info.offset.y) > 35)
                cycle();
            }}
            whileDrag={{ scale: 1.08, rotate: 0, cursor: "grabbing" }}
          >
            <img src={photo} alt="" draggable="false" />
            <span>{["BUILD", "CREATE", "SHIP"][card]}</span>
          </motion.div>
        ))}
      </div>
      <button
        className="deck-next"
        onClick={cycle}
        aria-label={
          t.name.startsWith("Т") ? "Наступна картка фото" : "Next photo card"
        }
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}

function FolderArt() {
  return (
    <div className="folder-art" aria-hidden="true">
      <div className="folder-back" />
      {[0, 1, 2].map((i) => (
        <div className={`folder-paper paper-${i}`} key={i}>
          <CodeXml size={22} />
          <i />
          <i />
          <i />
        </div>
      ))}
      <div className="folder-front">
        <Award size={27} />
      </div>
    </div>
  );
}

function ProjectArt() {
  return (
    <div className="project-reel" aria-hidden="true">
      <div className="project-reel-track">
        {[0, 1].map((copy) => (
          <div className="project-reel-group" key={copy}>
            {[0, 1, 2].map((i) => (
              <div className={`preview-window preview-window-${i}`} key={i}>
                <div className="window-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="window-content">
                  <div className="window-rail" />
                  <div className="window-blocks">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanyMarquee() {
  return (
    <div className="company-marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {experience.map((item) => (
              <span
                key={item.company}
                title={item.company}
                style={{ "--company-color": item.color }}
              >
                {item.initials}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function TileHeading({ to, icon: Icon, title, description }) {
  return (
    <Link to={to} className="tile-link">
      <span className="tile-icon">
        <Icon size={22} strokeWidth={1.6} />
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
      <ArrowUpRight className="tile-arrow" size={17} />
    </Link>
  );
}

export function AnimatedHome({ t }) {
  return (
    <>
      <Reveal className="home-intro">
        <h1>{t.titles[0]}</h1>
        <div className="hero-meta">
          <span className="role">{t.role}</span>
          <span className="location">
            <span className="location-dot" />
            {t.location}
          </span>
        </div>
        <p className="intro-text">{t.intro}</p>
      </Reveal>
      <section className="home-explore">
        <Reveal delay={0.08}>
          <p className="muted">{t.explore}</p>
        </Reveal>
        <div className="motion-bento">
          <SpotlightCard className="showcase-tile" index={0}>
            <TileHeading
              to="/projects"
              icon={FolderOpen}
              title={t.projectsTitle}
              description={t.projectsSubtitle}
            />
            <ProjectArt />
            <span className="coming-label">{t.coming}</span>
          </SpotlightCard>
          <SpotlightCard className="about-tile" index={1}>
            <TileHeading
              to="/about"
              icon={UserRound}
              title={t.titles[1]}
              description={t.aboutSubtitle}
            />
            <PhotoDeck t={t} />
          </SpotlightCard>
          <SpotlightCard className="skills-tile" index={2}>
            <TileHeading
              to="/about#skills-title"
              icon={CodeXml}
              title={t.skills}
              description={t.skillsSubtitle}
            />
            <SkillMarquee />
          </SpotlightCard>
          <SpotlightCard className="achievements-tile" index={3}>
            <TileHeading
              to="/achievements"
              icon={Award}
              title={t.titles[4]}
              description={t.achievementsSubtitle}
            />
            <FolderArt />
          </SpotlightCard>
          <SpotlightCard className="career-tile" index={4}>
            <TileHeading
              to="/career"
              icon={BriefcaseBusiness}
              title={t.titles[2]}
              description={t.careerSubtitle}
            />
            <CompanyMarquee />
          </SpotlightCard>
          <SpotlightCard className="contact-tile" index={5}>
            <TileHeading
              to="/contact"
              icon={Mail}
              title={t.contactTitle}
              description={t.contactText}
            />
            <div className="mail-art" aria-hidden="true">
              <div className="mail-sheet">
                <CodeXml />
                <i />
                <i />
                <i />
              </div>
              <div className="mail-envelope">
                <Mail size={34} />
              </div>
              <span className="mail-orbit orbit-one" />
              <span className="mail-orbit orbit-two" />
            </div>
          </SpotlightCard>
        </div>
      </section>
    </>
  );
}
