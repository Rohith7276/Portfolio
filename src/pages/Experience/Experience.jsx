import React from "react";
import {
  Code2,
  Layers,
  Network,
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  FileText,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "35%",
    label: "API Latency Reduction",
    detail: "Optimized Node.js/Express throughput",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Faster Frontend Load",
    detail: "React, GSAP & Tailwind optimizations",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: ShieldCheck,
    value: "12+",
    label: "Production Issues Resolved",
    detail: "Stabilized client-facing systems",
    color: "from-teal-400 to-emerald-500",
  },
  {
    icon: Award,
    value: "95%+",
    label: "Stakeholder Approval",
    detail: "Positive feedback on production delivery",
    color: "from-purple-400 to-pink-500",
  },
];

const ExperienceCard = ({
  title,
  company,
  period,
  location,
  type,
  badge,
  icon: Icon,
  metrics = [],
  bullets = [],
  skills = [],
  className = "",
  isActive = false,
}) => (
  <div
    className={`group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${className}`}
  >
    {/* Animated gradient border glow */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-purple-500/40 rounded-2xl opacity-40 group-hover:opacity-100 transition-all duration-500 blur-sm pointer-events-none" />

    {/* Card Inner */}
    <div className="relative bg-[#091121]/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-slate-800/80 group-hover:border-cyan-500/50 shadow-xl h-full flex flex-col justify-between overflow-hidden transition-all duration-500">
      {/* Decorative top-right corner glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header: Icon + Status Pill */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 rounded-xl blur-lg group-hover:opacity-60 transition-all duration-500" />
            <div className="relative p-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300">
              <Icon className="w-6 h-6 transform group-hover:rotate-6 transition-transform duration-300" />
            </div>
          </div>

          {/* Active status / Role badge */}
          <div className="flex items-center gap-2">
            {isActive ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {badge || "Active Role"}
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                {badge || type}
              </span>
            )}
          </div>
        </div>

        {/* Title & Organization */}
        <div className="space-y-2 mb-5">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-blue-400 font-semibold text-base">
            <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{company}</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400 pt-1">
            {location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                {location}
              </span>
            )}
            <span className="flex items-center gap-1 font-mono text-cyan-300/90 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-800/30">
              <Calendar className="w-3 h-3 text-cyan-400 shrink-0" />
              {period}
            </span>
          </div>
        </div>

        {/* Quantified Impact Badges */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {metrics.map((metric, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-950/50 text-cyan-300 border border-cyan-500/20 shadow-sm"
              >
                <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Bulleted Accomplishments */}
        <div className="space-y-3 mb-6">
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2.5 group/item">
              <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-1 group-hover/item:translate-x-0.5 transition-transform duration-200" />
              <p className="text-sm md:text-[0.925rem] text-slate-300 leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="pt-4 border-t border-slate-800/80">
        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
          Technologies & Competencies
        </span>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Layers,
      isActive: true,
      badge: "Present · Active Role",
      title: "Full Stack Developer Intern",
      company: "Zyvora Innovations",
      location: "Bengaluru, Karnataka",
      period: "Jul 2026 – Present",
      metrics: [
        "Node.js Backend Architecture",
        "Full-Stack React Workflows",
        "REST API Integration",
      ],
      bullets: [
        <>
          Built and developed a <strong className="text-cyan-300 font-semibold">Node.js/Express</strong> backend application for team coordination, designing APIs and implementing core server-side functionality for application workflows.
        </>,
        <>
          Owned full-stack feature development across <strong className="text-cyan-300 font-semibold">React.js, Node.js, and Express.js</strong>, integrating REST APIs and connecting frontend components with backend services.
        </>,
        <>
          Contributed to the development of <strong className="text-emerald-400 font-semibold">production-ready features</strong> through API integration, backend development, frontend implementation, debugging, and cross-functional coordination.
        </>,
      ],
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Full Stack",
        "API Design",
        "Debugging",
      ],
    },
    {
      icon: Code2,
      isActive: false,
      badge: "Completed Internship",
      title: "Full Stack Developer Intern",
      company: "Specular Graphics Private Limited",
      location: "Bengaluru, Karnataka",
      period: "Dec 2025 – Jan 2026",
      metrics: [
        "⚡ 35% API Response Reduction",
        "🚀 40% Faster Load Time",
        "🛠️ 12+ Issues Fixed",
      ],
      bullets: [
        <>
          Optimized backend API performance by reducing average response time by <strong className="text-emerald-400 font-semibold">35%</strong> and resolved <strong className="text-cyan-300 font-semibold">12+ production issues</strong> in a Node.js/Express system, improving overall reliability and throughput.
        </>,
        <>
          Developed and deployed a responsive production-ready frontend using <strong className="text-cyan-300 font-semibold">React, GSAP, and Tailwind CSS</strong>, achieving a <strong className="text-emerald-400 font-semibold">40% faster load time</strong> and increasing user engagement by <strong className="text-emerald-400 font-semibold">25%</strong>.
        </>,
        <>
          Collaborated on feature enhancements for an internal client-facing platform, accelerating deployment cycles by <strong className="text-emerald-400 font-semibold">30%</strong> and receiving positive feedback from <strong className="text-cyan-300 font-semibold">95% of internal stakeholders</strong>.
        </>,
      ],
      skills: [
        "React.js",
        "GSAP",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Performance Optimization",
      ],
    },
    {
      icon: Network,
      isActive: false,
      badge: "Leadership & Track Win",
      title: "Team Lead",
      company: "Dev Track Club, REVA University",
      location: "Bengaluru, Karnataka",
      period: "2024",
      metrics: [
        "🏆 2nd Rank in Track",
        "🥉 3rd Place Club Developer",
        "🤝 Agile Mentorship",
      ],
      bullets: [
        <>
          Led a team of developers to secure <strong className="text-amber-400 font-semibold">2nd rank in the track</strong> and <strong className="text-cyan-300 font-semibold">3rd place</strong> among club developers by creating innovative and creative websites.
        </>,
        <>
          Mentored junior members in modern full-stack workflows, component architecture, and Git collaboration, fostering a collaborative environment.
        </>,
        <>
          Orchestrated project roadmaps, code quality standards, and technical milestones to ensure timely and robust project delivery.
        </>,
      ],
      skills: [
        "Team Leadership",
        "React.js",
        "Agile Methodology",
        "Code Reviews",
        "Web Architecture",
        "Mentorship",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-5 mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Career Milestones & Technical Leadership</span>
            </div>

            <div className="relative">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 bg-clip-text">
                Experience & Impact
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>

            <p className="text-base md:text-xl text-gray-300 font-normal tracking-wide max-w-3xl leading-relaxed">
              Software Developer with hands-on experience building AI-integrated, full-stack applications, scalable REST APIs, and high-performance server architectures with proven, measurable production outcomes.
            </p>
          </div>

          {/* Impact Metrics Overview Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-6xl mx-auto">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={idx}
                  className="relative group rounded-xl p-5 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 text-cyan-400 border border-slate-700/60 group-hover:scale-110 transition-transform duration-300">
                      <StatIcon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-2xl md:text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-200">{stat.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 max-w-7xl mx-auto items-stretch">
            {experiences.map((exp, index) => {
              const isLastOdd =
                experiences.length % 2 !== 0 && index === experiences.length - 1;
              return (
                <ExperienceCard
                  key={index}
                  {...exp}
                  className={
                    isLastOdd
                      ? "md:col-span-2 md:max-w-xl md:mx-auto lg:col-span-1 lg:max-w-none"
                      : ""
                  }
                />
              );
            })}
          </div>

          {/* Resume Download / View Banner */}
          <div className="mt-20 max-w-4xl mx-auto rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30">
            <div className="bg-[#091121]/95 rounded-2xl p-6 md:p-8 backdrop-blur-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  Looking for the complete resume?
                </h3>
                <p className="text-sm text-slate-400">
                  Review verified certifications, hackathon awards (REVA, NMIT, GCEM), and detailed project architecture.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <span>View Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  download="Rohith_HP_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm hover:bg-slate-700 hover:text-white transition-all duration-300"
                >
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000 pointer-events-none" />
      </div>
    </>
  );
};

export default ExperienceSection;
