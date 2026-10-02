import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  CodeXml,
  GitBranch,
  Layers,
  Radio,
  Send,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, SpotlightCard, spring } from "./MotionUI";
import { skills } from "./data";
import photo from "./assets/MyPhoto1.jpg";


function Heading({ number, icon: Icon, to, title, description }) {
  return (
    <Link className="studio-heading" to={to}>
      <span className="studio-eyebrow">
        <Icon size={16} />
        <span>{number}</span>
        <ArrowUpRight size={16} />
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

function StackFlow() {
  return (
    <div className="stack-flow" aria-hidden="true">
      {[skills.slice(4, 11), skills.slice(14, 21)].map((row, index) => (
        <div className="stack-lane" key={index}>
          <div className={`studio-track lane-${index}`}>
            {[0, 1].map((copy) => (
              <div className="studio-track-group" key={copy}>
                {row.map((skill) => (
                  <span className="stack-tag" key={skill[0]}>
                    {skill[1] ? (
                      <img src={`/skills/${skill[1]}.svg`} alt="" />
                    ) : (
                      <CodeXml size={17} />
                    )}
                    {skill[0]}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Portrait({ uk }) {
  const [turned, setTurned] = useState(false);
  const reduced = useReducedMotion();
  return (
    <button
      className={`portrait-switch ${turned ? "is-turned" : ""}`}
      onClick={() => setTurned(!turned)}
      aria-label={uk ? "Перемкнути картку профілю" : "Flip profile card"}
      aria-pressed={turned}
    >
      <motion.span
        className="identity-pass"
        animate={{ rotateY: turned ? 180 : 0 }}
        transition={reduced ? { duration: 0 } : spring}
      >
        <span className="pass-front">
          <img src={photo} alt="" />
          <span>
            TS
            <span className="identity-dot" />
          </span>
        </span>
        <span className="pass-back">
          <CodeXml size={30} />
          <span>
            THINK.
            <br />
            BUILD.
            <br />
            REFINE.
          </span>
        </span>
      </motion.span>
      <span className="portrait-hint">
        {uk ? "інший бік ↗" : "another side ↗"}
      </span>
    </button>
  );
}

function Workbench() {
  return (
    <div className="workbench-art" aria-hidden="true">
      <div className="workbench-shadow" />
      <div className="workbench-window">
        <div className="workbench-toolbar">
          <span />
          <span />
          <span />
          <small>next chapter</small>
        </div>
        <div className="workbench-code">
          <span>
            <i />
            interface <b>Idea</b> {"{"}
          </span>
          <span>
            <i />
            &nbsp; build: <b>somethingNew</b>
          </span>
          <span>
            <i />
            &nbsp; status: <em>inProgress</em>
          </span>
          <span>
            <i />
            {"}"}
            <strong className="code-caret" />
          </span>
        </div>
        <div className="build-meter">
          <span />
        </div>
      </div>
      <span className="workbench-token">
        <Layers size={19} />
      </span>
    </div>
  );
}

function Journey({ uk }) {
  return (
    <div className="journey-art" aria-hidden="true">
      <div className="journey-line">
        <span />
      </div>
      {[
        ["2019", "BizRaise"],
        ["2021", "Temabit"],
        ["2023", "Extrachain"],
      ].map(([date, name], i) => (
        <div className="journey-stop" style={{ "--step": i }} key={date}>
          <span className="journey-node" />
          <small>{date}</small>
          <strong>{name}</strong>
        </div>
      ))}
      <span className="journey-now">{uk ? "і далі" : "and onward"} ↗</span>
    </div>
  );
}

function Milestones() {
  return (
    <div className="milestone-art" aria-hidden="true">
      <div className="milestone-bars">
        {[36, 58, 46, 76, 94].map((height, i) => (
          <span
            key={i}
            style={{ "--bar-height": `${height}%`, "--bar-index": i }}
          />
        ))}
      </div>
      <span className="milestone-caption">REFACTOR → BUILD → SHIP</span>
      <span className="milestone-cross">+</span>
    </div>
  );
}

function Signal() {
  return (
    <div className="signal-art" aria-hidden="true">
      <span className="signal-ring ring-one" />
      <span className="signal-ring ring-two" />
      <span className="signal-ring ring-three" />
      <span className="signal-center">
        <Send size={24} />
      </span>
      <span className="signal-spark" />
    </div>
  );
}

export function AnimatedHome({ t }) {
  const uk = t.name.startsWith("Т");
  const text = uk
    ? {
        about: "За кодом — людина",
        aboutSub: "Мій підхід, досвід і трохи про мене.",
        stack: "Мій набір інструментів",
        stackSub: "Від першого компонента до серверної логіки.",
        work: "У майстерні",
        workSub: "Нова добірка проєктів. Незабаром тут.",
        career: "Шлях у розробці",
        careerSub: "Команди, продукти та наступні кроки.",
        results: "Що вдалося зробити",
        resultsSub: "Міграції, real-time інтерфейси, запуск продуктів.",
        contact: "Почнімо розмову",
        contactSub: "Ваша ідея. Наш наступний крок.",
      }
    : {
        about: "The person behind the code",
        aboutSub: "My approach, experience, and a little about me.",
        stack: "My working toolkit",
        stackSub: "From the first component to the server behind it.",
        work: "On the workbench",
        workSub: "A fresh selection of projects. Coming soon.",
        career: "The journey so far",
        careerSub: "Teams, products, and the next chapter.",
        results: "Things moved forward",
        resultsSub: "Migrations, real-time interfaces, production delivery.",
        contact: "Start a conversation",
        contactSub: "Your idea. Our next step.",
      };
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
        <div className="motion-bento studio-grid">
          <SpotlightCard className="studio-about" index={0}>
            <Heading
              number="01 / HUMAN"
              icon={CodeXml}
              to="/about"
              title={text.about}
              description={text.aboutSub}
            />
            <Portrait uk={uk} />
          </SpotlightCard>
          <SpotlightCard className="studio-stack" index={1}>
            <Heading
              number="02 / TOOLKIT"
              icon={Layers}
              to="/about#skills-title"
              title={text.stack}
              description={text.stackSub}
            />
            <StackFlow />
          </SpotlightCard>
          <SpotlightCard className="studio-work" index={2}>
            <Heading
              number="03 / EXPERIMENTS"
              icon={Terminal}
              to="/projects"
              title={text.work}
              description={text.workSub}
            />
            <Workbench />
          </SpotlightCard>
          <SpotlightCard className="studio-career" index={3}>
            <Heading
              number="04 / JOURNEY"
              icon={GitBranch}
              to="/career"
              title={text.career}
              description={text.careerSub}
            />
            <Journey uk={uk} />
          </SpotlightCard>
          <SpotlightCard className="studio-results" index={4}>
            <Heading
              number="05 / PROGRESS"
              icon={Radio}
              to="/achievements"
              title={text.results}
              description={text.resultsSub}
            />
            <Milestones />
          </SpotlightCard>
          <SpotlightCard className="studio-contact" index={5}>
            <Heading
              number="06 / CONNECT"
              icon={Send}
              to="/contact"
              title={text.contact}
              description={text.contactSub}
            />
            <Signal />
          </SpotlightCard>
        </div>
      </section>
    </>
  );
}
