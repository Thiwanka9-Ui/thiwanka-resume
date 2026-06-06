import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GraduationCap,
  Layers3,
  Languages,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  X,
  Zap,
} from "lucide-react";

const profile = {
  name: "Thiwanka Bandara Waidyasekara",
  initials: "TBW",
  photo: "/profile.png",
  age: "26 years old",
  headline: "Software Engineering Graduate",
  roleLine:
    "Aspiring Software Engineer | Full-Stack Developer | Web Application Developer",
  summary:
    "Software Engineering graduate with a Second Class Upper Division (2.1) degree and hands-on experience building full-stack, database-driven web applications. I enjoy creating clean interfaces, reliable backend workflows, and practical software that solves real business and user problems.",
  location: "260/1/2, Balummahara, Ibulgoda, Sri Lanka",
  email: "Bandare786thi@yahoo.com",
  phone: "0771326533",
  careerTarget: "Junior Software Engineer / Full-Stack Web Developer",
  mainStack: "React, JavaScript, Java, FastAPI, MySQL, PostgreSQL",
  workType: "Open to full-time, remote, internship, and junior developer roles",
  availability:
    "Available for Software Engineering, Full-Stack, Front-End, Back-End, and Web Developer opportunities",
  degree:
    "Bachelor of Computing in Software Engineering — Second Class Upper Division (2.1)",
};

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "References",
  "Contact",
];

const quickStats = [
  { value: "2.1", label: "Degree Classification" },
  { value: "2", label: "Major Projects" },
  { value: "Full-Stack", label: "Career Focus" },
  { value: "ICBT", label: "Software Engineering" },
];

const techStack = [
  { name: "Java", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Laptop },
  { name: "HTML / CSS", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "FastAPI", icon: Server },
  { name: "REST APIs", icon: Server },
  { name: "JWT", icon: ShieldCheck },
  { name: "UI / UX", icon: Layers3 },
];

const skills = [
  {
    title: "Frontend Development",
    description:
      "Creating responsive, modern, and user-friendly interfaces with clean layouts and reusable components.",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive UI"],
    icon: Laptop,
    level: 86,
  },
  {
    title: "Backend & APIs",
    description:
      "Building structured backend workflows, REST API concepts, authentication logic, and CRUD-based features.",
    items: ["FastAPI", "Java", "REST APIs", "JWT", "CRUD", "API Testing"],
    icon: Server,
    level: 78,
  },
  {
    title: "Database Systems",
    description:
      "Designing and working with relational databases for practical business and web application requirements.",
    items: ["MySQL", "PostgreSQL", "Database Design", "Queries", "Data Accuracy", "Reports"],
    icon: Database,
    level: 82,
  },
  {
    title: "Professional Strengths",
    description:
      "A reliable work style built through accounts, data entry, documentation, and business-support experience.",
    items: ["Teamwork", "Communication", "Accuracy", "Documentation", "Deadlines", "Problem Solving"],
    icon: Award,
    level: 90,
  },
];

const projects = [
  {
    name: "FitMind",
    subtitle: "Emotional-State Adaptive Fitness Web Application",
    type: "Full-Stack / AI-Assisted Web Project",
    description:
      "A personalized fitness web application concept that recommends workouts based on mood, energy level, and stress level. The system focuses on practical user input, intelligent recommendation flow, and progress tracking.",
    highlights: [
      "Built a modern React interface for mood input, workout recommendations, and progress tracking.",
      "Designed backend API logic for users, mood records, workouts, logs, and recommendation features.",
      "Focused on a real user problem by adapting fitness suggestions to emotional state and daily readiness.",
    ],
    tech: ["React", "FastAPI", "PostgreSQL", "JWT", "REST API", "AI Concept"],
    impact: "Personalized fitness experience",
  },
  {
    name: "PahanaEdu",
    subtitle: "Education / Bookshop Management System",
    type: "Java Web Application",
    description:
      "A web-based management system designed to support customer handling, book/item management, billing workflows, and role-based access for an education/bookshop environment.",
    highlights: [
      "Developed structured Java web pages, business logic, and database operations.",
      "Implemented login, customer records, item records, billing workflows, and CRUD features.",
      "Practiced modular design, validation, database connectivity, and system testing.",
    ],
    tech: ["Java", "JSP", "Servlets", "MySQL", "MVC", "CRUD"],
    impact: "Organized business workflow",
  },
];

const experience = [
  {
    role: "Accounts Assistant",
    company: "Roofing.lk",
    period: "1 Year",
    points: [
      "Supported accounts-related operations and gained practical experience in a professional business environment.",
      "Developed accuracy, responsibility, documentation habits, and the ability to complete work within deadlines.",
      "Strengthened analytical thinking and attention to detail, which are valuable for software development and database-related work.",
    ],
  },
  {
    role: "Data Entry Operator",
    company: "Rhino Roofing PVT LTD",
    period: "5 Months",
    points: [
      "Handled data entry tasks with attention to accuracy, consistency, and timely completion.",
      "Worked with business information and supported office workflows through organized data handling.",
      "Built strong focus, patience, and detail-oriented work habits useful for IT and software engineering roles.",
    ],
  },
];

const education = [
  {
    qualification: "Bachelor of Computing in Software Engineering",
    institution: "ICBT",
    badge: "Second Class Upper Division (2.1)",
    details:
      "Completed the Software Engineering degree pathway with a Second Class Upper Division (2.1), covering computing fundamentals, software development, database systems, web application development, and practical project work.",
  },
  {
    qualification: "Spoken English Certificate Course",
    institution: "British Council",
    badge: "Completed",
    details:
      "Completed spoken English training to improve confidence, professional communication, and presentation ability.",
  },
  {
    qualification: "Spoken English Diploma",
    institution: "Colombo University",
    badge: "Completed",
    details:
      "Completed diploma-level spoken English studies to strengthen communication ability for academic and professional use.",
  },
];

const languages = ["Sinhala", "English"];

const references = [
  {
    name: "Mr. H I G S Piyaruwan",
    position:
      "Lecturer, Department of Soil Science, Faculty of Agriculture, University of Ruhuna",
    phone: "0719949989",
    email: "sandunp@agri.ruh.ac.lk",
  },
  {
    name: "Mr. T G P L Weerasinghe",
    position: "Lecturer, University of Moratuwa, Department of Civil Engineering",
    phone: "777357981",
    email: "pasinduw@uom.lk",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function SectionTitle({ eyebrow, title, description, light = false, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mb-10 max-w-4xl ${center ? "mx-auto text-center" : ""}`}
    >
      <p
        className={
          light
            ? "mb-3 text-sm font-black uppercase tracking-[0.28em] text-cyan-300"
            : "mb-3 text-sm font-black uppercase tracking-[0.28em] text-cyan-600"
        }
      >
        {eyebrow}
      </p>

      <h2
        className={
          light
            ? "text-3xl font-black tracking-tight text-white md:text-5xl"
            : "text-3xl font-black tracking-tight text-slate-950 md:text-5xl"
        }
      >
        {title}
      </h2>

      {description && (
        <p
          className={
            light
              ? "mt-4 text-base leading-8 text-slate-300 md:text-lg"
              : "mt-4 text-base leading-8 text-slate-600 md:text-lg"
          }
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 text-white shadow-2xl shadow-slate-950/10 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-violet-500 text-xs font-black text-slate-950 shadow-lg shadow-cyan-500/20">
            {profile.initials}
          </div>
          <div>
            <p className="text-sm font-black tracking-wide text-white">
              {profile.name}
            </p>
            <p className="text-xs text-cyan-200">Software Engineering Resume</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            Contact
          </a>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            <Download size={16} /> Save PDF
          </button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-xl border border-white/10 bg-white/10 p-2 lg:hidden"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="ml-auto h-full w-80 bg-slate-950 p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="font-black text-white">Menu</p>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 p-2 text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-200 hover:bg-white/10"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function FloatingCodeCards() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-8 top-36 hidden w-64 rounded-3xl border border-cyan-300/20 bg-white/[0.06] p-5 text-white shadow-2xl shadow-cyan-500/10 backdrop-blur-xl 2xl:block"
      >
        <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
          Degree Status
        </p>
        <div className="mt-4 space-y-3 font-mono text-sm text-slate-300">
          <p>
            <span className="text-cyan-300">degree</span> =
            <span className="text-white"> "Completed"</span>;
          </p>
          <p>
            <span className="text-cyan-300">class</span> = "2.1";
          </p>
          <p>career.launch(<span className="text-white">"software"</span>);</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 22, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-28 right-8 hidden w-72 rounded-3xl border border-blue-300/20 bg-white/[0.06] p-5 text-white shadow-2xl shadow-blue-500/10 backdrop-blur-xl 2xl:block"
      >
        <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
          Developer Pipeline
        </p>
        <div className="mt-4 grid gap-3">
          {["Plan UI", "Create API", "Connect DB", "Test Features"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 size={17} className="text-cyan-300" />
              <span className="text-sm font-bold text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

function ProfilePopupCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, rotateX: 20, y: 35 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 0.85, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-cyan-300/40 via-blue-500/20 to-violet-500/40 blur-2xl" />
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-6">
            <div className="mb-7 flex items-center justify-between gap-5">
              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Candidate Profile
                </p>
                <p className="text-3xl font-black text-white">Software Graduate</p>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="group relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border-2 border-cyan-300/70 shadow-xl shadow-cyan-500/20"
                aria-label="Open profile picture"
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cyan-300/0 transition group-hover:bg-cyan-300/15" />
              </button>
            </div>

            <div className="mb-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Academic Achievement
              </p>
              <p className="mt-2 text-lg font-black text-white">
                Second Class Upper Division (2.1)
              </p>
            </div>

            <div className="grid gap-4">
              {[
                ["Age", profile.age],
                ["Focus", "Full-Stack Web Development"],
                ["Projects", "FitMind and PahanaEdu"],
                ["Strength", "Business + software mindset"],
                ["Goal", "Junior Software Engineering Role"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] grid place-items-center bg-slate-950/80 px-5 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white p-4 shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white shadow-lg transition hover:scale-110"
              aria-label="Close profile picture"
            >
              <X size={20} />
            </button>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-2xl font-black text-slate-950">
                {profile.name}
              </h3>
              <p className="mt-2 font-semibold text-cyan-700">
                {profile.roleLine}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

function DeveloperFocusPanel() {
  const items = [
    {
      title: "Frontend",
      text: "React interfaces, responsive layouts, reusable components, and clean user experiences.",
      icon: Laptop,
    },
    {
      title: "Backend",
      text: "APIs, CRUD workflows, authentication concepts, and database-connected features.",
      icon: Server,
    },
    {
      title: "Problem Solving",
      text: "Turning requirements into practical features that support real users and business goals.",
      icon: Sparkles,
    },
  ];

  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
              <Icon size={23} />
            </div>
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.2),transparent_32%),radial-gradient(circle_at_60%_90%,rgba(14,165,233,0.18),transparent_35%)]" />

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-9rem] top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -45, 0], y: [0, 35, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-[-10rem] -z-10 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-20 -z-10 h-72 w-72 rounded-full border border-cyan-300/20"
      />

      <FloatingCodeCards />

      <div className="mx-auto grid max-w-[1700px] items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_420px] xl:grid-cols-[0.95fr_430px_0.72fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200 shadow-lg shadow-cyan-500/10 backdrop-blur"
          >
            <Rocket size={16} /> {profile.availability}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300"
          >
            Portfolio Resume Website
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 space-y-3">
            <p className="text-2xl font-black text-cyan-200 md:text-4xl">
              {profile.headline}
            </p>
            <p className="text-lg font-semibold text-slate-300 md:text-2xl">
              {profile.roleLine}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
              <GraduationCap size={22} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Degree Completed
              </p>
              <p className="font-black text-white">Second Class Upper Division (2.1)</p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-4">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <p className="text-2xl font-black text-cyan-300">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-slate-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              View My Projects <ArrowUpRight size={18} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              Hire Me <Mail size={18} />
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Download Resume <Download size={18} />
            </button>
          </motion.div>
        </motion.div>

        <ProfilePopupCard />

        <div className="hidden xl:block">
          <DeveloperFocusPanel />
        </div>
      </div>
    </section>
  );
}

function About() {
  const profilePoints = [
    "Completed Bachelor of Computing in Software Engineering with Second Class Upper Division (2.1).",
    "Full-stack web development interest with practical project experience.",
    "Comfortable working with frontend interfaces, backend logic, and databases.",
    "Professional background in accounts and data entry, supporting accuracy and responsibility.",
  ];

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="About Me"
          title="A software engineering graduate building real, practical web systems."
          description="I am looking for an opportunity to start my career in software engineering. I enjoy building systems that are clean, organized, useful, and easy for users to understand."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm md:p-9"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-100 text-cyan-700">
                <UserRound size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-950">
                Professional Profile
              </h3>
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                I am a 26-year-old Software Engineering graduate from ICBT. I
                completed my Bachelor of Computing in Software Engineering with a
                Second Class Upper Division (2.1). My main interests are full-stack
                web development, database-driven applications, and practical business
                software.
              </p>

              <p>
                My main career goal is to become a Junior Software Engineer or
                Full-Stack Web Developer. I am developing my skills in Java,
                JavaScript, React, database design, API-based workflows, and software
                project development. I am especially interested in building
                applications that solve real user problems and improve everyday
                business processes.
              </p>

              <p>
                My project experience includes FitMind and PahanaEdu. Through these
                projects, I practiced requirement understanding, user flow planning,
                authentication, CRUD operations, database connectivity, backend logic,
                and feature testing.
              </p>

              <p>
                My previous experience as an Accounts Assistant and Data Entry
                Operator helped me build accuracy, responsibility, patience, and the
                ability to work under pressure. I believe these qualities are
                important for software development because good developers must be
                detail-oriented, organized, reliable, and able to communicate clearly
                with a team.
              </p>

              <p>
                I am currently seeking an opportunity where I can continue learning,
                contribute to real software projects, and grow into a capable
                professional developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-xl"
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Developer Value
              </p>

              <div className="mt-6 grid gap-4">
                {profilePoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2 size={20} className="mt-1 shrink-0 text-cyan-300" />
                    <p className="leading-7 text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {[
              {
                title: "Career Goal",
                text: "To join a software engineering team where I can learn, contribute, and grow as a full-stack or web application developer.",
                icon: Target,
              },
              {
                title: "Development Mindset",
                text: "I focus on understandable code, practical features, clean interfaces, and improving user experience.",
                icon: Code2,
              },
              {
                title: "Work Style",
                text: "I am friendly, responsible, willing to learn, and able to work individually or as part of a team.",
                icon: BriefcaseBusiness,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-cyan-100 text-cyan-700">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DeveloperSnapshot() {
  const facts = [
    { label: "Age", value: profile.age, icon: UserRound },
    { label: "Career Target", value: profile.careerTarget, icon: Rocket },
    { label: "Education", value: profile.degree, icon: GraduationCap },
    { label: "Main Stack", value: profile.mainStack, icon: Code2 },
    { label: "Projects", value: "FitMind and PahanaEdu", icon: Laptop },
    { label: "Languages", value: "Sinhala and English", icon: Languages },
    { label: "Work Type", value: profile.workType, icon: BriefcaseBusiness },
    { label: "Location", value: "Sri Lanka", icon: MapPin },
  ];

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="Developer Snapshot"
          title="Quick facts for recruiters"
          description="A clear overview of my background, career direction, technical focus, and availability for software engineering opportunities."
          light
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {facts.map((fact) => {
            const Icon = fact.icon;

            return (
              <motion.div
                key={fact.label}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl transition hover:bg-white/[0.09]"
              >
                <div className="mb-5 grid h-13 w-13 place-items-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20 transition group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={24} />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
                  {fact.label}
                </p>

                <p className="mt-3 text-lg font-black leading-7 text-white">
                  {fact.value}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-slate-950 py-6 text-white">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-4"
      >
        {[...techStack, ...techStack, ...techStack].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-black text-slate-100"
            >
              <Icon size={18} className="text-cyan-300" />
              {tech.name}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-slate-50">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Technical skills and professional strengths"
          description="A software-focused skill set supported by practical office experience, communication ability, and attention to detail."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {skills.map((group) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-black text-slate-950">{group.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{group.description}</p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.22),transparent_35%)]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Software projects I have built"
          description="These projects show my ability to understand requirements, design workflows, connect databases, and build practical web applications."
          light
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40, rotate: index === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-4xl font-black text-white">{project.name}</h3>
                  <p className="mt-2 text-lg font-bold text-slate-300">
                    {project.subtitle}
                  </p>
                </div>

                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan-300 text-slate-950 transition group-hover:rotate-6 group-hover:scale-110">
                  <Code2 size={26} />
                </div>
              </div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100">
                <Zap size={16} /> {project.impact}
              </div>

              <p className="leading-8 text-slate-300">{project.description}</p>

              <div className="mt-6 space-y-3">
                {project.highlights.map((point) => (
                  <div key={point} className="flex gap-3 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <p className="leading-7">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-bold text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-white">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="Professional experience that supports my software career"
          description="My previous roles helped me build accuracy, responsibility, business understanding, and a detail-oriented mindset."
        />

        <div className="grid gap-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm md:p-9"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-3xl font-black text-slate-950">{job.role}</h3>
                  <p className="mt-1 text-lg font-semibold text-slate-600">
                    {job.company}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-cyan-100 px-5 py-2 text-sm font-black text-cyan-800">
                  {job.period}
                </span>
              </div>

              <ul className="mt-6 grid gap-3 text-slate-600">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-8">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="bg-slate-50">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="Education"
          title="Academic background"
          description="Education and English communication qualifications that support my software engineering career path."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <motion.div
              key={item.qualification}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                <GraduationCap size={26} />
              </div>

              <span className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-800">
                {item.badge}
              </span>

              <h3 className="text-xl font-black text-slate-950">
                {item.qualification}
              </h3>

              <p className="mt-3 font-black text-cyan-700">{item.institution}</p>

              <p className="mt-4 leading-7 text-slate-600">{item.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-100 text-cyan-700">
              <Languages size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-950">Languages</h3>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {languages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-black text-slate-700"
              >
                {language}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function References() {
  return (
    <section id="references" className="bg-white">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="References"
          title="Professional references"
          description="References listed in the resume details."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <motion.div
              key={reference.email}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
            >
              <h3 className="text-2xl font-black text-slate-950">
                {reference.name}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{reference.position}</p>

              <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
                <a href={`tel:${reference.phone}`} className="inline-flex items-center gap-2 hover:text-cyan-700">
                  <Phone size={16} /> {reference.phone}
                </a>

                <a href={`mailto:${reference.email}`} className="inline-flex items-center gap-2 hover:text-cyan-700">
                  <Mail size={16} /> {reference.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactMethods = useMemo(
    () => [
      { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
      { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
      { icon: MapPin, label: "Address", value: profile.location, href: "#" },
      { icon: Languages, label: "Languages", value: "Sinhala / English", href: "#" },
    ],
    []
  );

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_32%)]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-20 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
                Contact
              </p>

              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Let’s build something useful.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                I am currently looking for software engineering, web developer,
                full-stack, front-end, back-end, or junior developer opportunities.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200"
                >
                  Send Email <ArrowUpRight size={18} />
                </a>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  Download PDF <Download size={18} />
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                const content = (
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15">
                    <Icon className="text-cyan-300" size={24} />

                    <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-slate-400">
                      {method.label}
                    </p>

                    <p className="mt-2 break-words font-black text-white">
                      {method.value}
                    </p>
                  </div>
                );

                return method.href === "#" ? (
                  <div key={method.label}>{content}</div>
                ) : (
                  <a key={method.label} href={method.href}>
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-center text-sm text-slate-400 md:px-8">
      <p>
        © {new Date().getFullYear()} {profile.name}. Software Engineering Resume Website.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <DeveloperSnapshot />
        <TechStack />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}