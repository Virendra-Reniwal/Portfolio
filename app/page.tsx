"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Cpu,
  Sparkles,
  Zap,
  Rocket,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThreeBackground } from "@/components/three-background";
import { FloatingElements } from "@/components/floating-elements";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <ThreeBackground />
      <FloatingElements />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 animate-gradient-shift"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 animate-slide-down relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-heading text-xl font-bold text-foreground hover:scale-105 transition-all duration-500 cursor-pointer animate-glow">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {["About", "Experience", "Education", "Projects", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-110 relative group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
                  </a>
                )
              )}
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            {
              color: "blue",
              size: "w-4 h-4",
              position: "top-1/4 left-1/4",
              delay: "stagger-1",
            },
            {
              color: "purple",
              size: "w-3 h-3",
              position: "top-1/3 right-1/4",
              delay: "stagger-2",
            },
            {
              color: "indigo",
              size: "w-3.5 h-3.5",
              position: "bottom-1/3 left-1/3",
              delay: "stagger-3",
            },
            {
              color: "cyan",
              size: "w-2.5 h-2.5",
              position: "top-1/2 right-1/3",
              delay: "stagger-4",
            },
            {
              color: "emerald",
              size: "w-3 h-3",
              position: "bottom-1/4 right-1/5",
              delay: "stagger-5",
            },
            {
              color: "pink",
              size: "w-4 h-4",
              position: "top-1/5 left-1/5",
              delay: "stagger-6",
            },
            {
              color: "yellow",
              size: "w-2.5 h-2.5",
              position: "bottom-1/5 left-2/3",
              delay: "stagger-7",
            },
            {
              color: "violet",
              size: "w-3.5 h-3.5",
              position: "top-2/3 right-1/6",
              delay: "stagger-8",
            },
          ].map((particle, index) => (
            <div
              key={index}
              className={`absolute ${particle.position} ${particle.size} bg-${particle.color}-500/50 rounded-full animate-particle-dance ${particle.delay} shadow-2xl shadow-${particle.color}-500/30 hover-magnetic`}
            ></div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-slide-up-smooth stagger-1">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-liquid-gradient text-neon">
                Virendra Reniwal
              </span>
            </h1>
          </div>
          <div className="animate-slide-up-smooth stagger-2">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-text-shimmer">
              Curious and dedicated software developer who enjoys building
              things that work well and are easy to maintain. Always eager to
              learn, collaborate, and grow with every project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-smooth stagger-3">
            <Button
              size="lg"
              className="btn-liquid hover-magnetic group relative overflow-hidden animate-morphing-glow"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 relative z-10"
              >
                <Sparkles className="w-4 h-4 group-hover:animate-skill-orbit transition-transform duration-700" />
                View My Projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </a>
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="glass-card hover-magnetic group animate-card-breathe bg-transparent"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-magnetic-hover" />
              Download Resume
            </Button> */}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left-smooth stagger-1">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6 relative text-neon">
                About Me
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-morphing-glow"></div>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-in-up stagger-2">
                I'm a passionate MCA student specializing in Computer
                Applications with a strong foundation in full-stack development.
                With experience in MERN stack, WebRTC, and modern web
                technologies, I love building innovative solutions that solve
                real-world problems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up stagger-3">
                Currently pursuing my Master's degree while gaining hands-on
                experience through internships and personal projects. I'm always
                eager to learn new technologies and contribute to meaningful
                projects that make a difference.
              </p>
              <div className="flex gap-4 animate-fade-in-up stagger-4">
                <a
                  href="https://github.com/Virendra-Reniwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card hover-magnetic animate-card-breathe bg-white/5 backdrop-blur-md border-white/10 transition-all duration-300 ease-in-out group-hover:scale-[1.02]"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="GitHub"
                      className="w-5 h-5 mr-2 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                    />
                    <span className="text-sm font-medium text-white/90 group-hover:text-white">
                      GitHub
                    </span>
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/virendrareniwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card hover-magnetic animate-card-breathe bg-white/5 backdrop-blur-md border-white/10 transition-all duration-300 ease-in-out group-hover:scale-[1.02] stagger-1"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=linkedin"
                      alt="LinkedIn"
                      className="w-5 h-5 mr-2 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                    />
                    <span className="text-sm font-medium text-white/90 group-hover:text-white">
                      LinkedIn
                    </span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative animate-slide-in-right-smooth stagger-2">
              <div className="aspect-square rounded-2xl glass-card p-8 hover-magnetic group relative overflow-hidden animate-liquid-gradient">
                <img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJxYmUxaHk2bDhvY2xoNmJzd2F0c2RqanJ6Mnd1MjBuZTE0aXp1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif"
                  alt="Coding"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
              {[
                {
                  icon: Code,
                  color: "blue",
                  position: "-top-4 -right-4",
                  delay: "stagger-1",
                },
                {
                  icon: Database,
                  color: "green",
                  position: "-bottom-4 -left-4",
                  delay: "stagger-3",
                },
                {
                  icon: Cpu,
                  color: "purple",
                  position: "top-1/2 -left-8",
                  delay: "stagger-2",
                },
                {
                  icon: Zap,
                  color: "yellow",
                  position: "top-1/4 -right-8",
                  delay: "stagger-4",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute ${item.position} glass-card rounded-full p-3 animate-particle-dance ${item.delay} hover-magnetic group cursor-pointer`}
                >
                  <item.icon
                    className={`w-6 h-6 text-${item.color}-500 group-hover:animate-skill-orbit transition-transform duration-700`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12 animate-fade-in-smooth relative">
            Experience
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <Briefcase className="w-8 h-8 text-green-500 animate-float-smooth" />
            </div>
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Web Developer Intern",
                company: "Iotcom.io Ltd",
                duration: "Aug 2023 – Nov 2023",
                location: "Jaipur",
                description:
                  "Developed multiple projects in collaboration with clients, demonstrating strong communication and teamwork skills while building fully dynamic websites.",
                achievements: [
                  "Developed multiple projects in collaboration with clients, demonstrating strong communication and teamwork",
                  "Contributed to both group and solo projects, showcasing adaptability and independent problem-solving",
                  "Built fully dynamic websites covering front-end, back-end, and database development",
                  "Quickly learned new frameworks, reflecting dedication to growth and continuous improvement",
                ],
              },
            ].map((exp, index) => (
              <Card
                key={index}
                className="group hover-lift-smooth animate-slide-in-left-smooth border-2 hover:border-green-500/20 relative overflow-hidden animate-border-glow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="font-heading group-hover:text-green-500 transition-colors duration-500 flex items-center gap-2">
                        {exp.title}
                        <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-500" />
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground animate-fade-in-up"
                          style={{ animationDelay: `${achIndex * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse-smooth"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12 animate-fade-in-smooth relative">
            Education
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <GraduationCap className="w-8 h-8 text-blue-500 animate-float-smooth" />
            </div>
          </h2>
          <div className="space-y-8">
            {[
              {
                degree: "Master of Computer Applications (MCA)",
                field: "Computer Applications",
                school: "JECRC University",
                duration: "2024 – 2026",
                gpa: "7.23 SGPA",
                description:
                  "Pursuing advanced studies in computer applications with focus on software development, system design, and emerging technologies.",
                coursework: [
                  "Advanced Programming",
                  "Database Management Systems",
                  "Software Engineering",
                  "Web Technologies",
                  "Data Structures & Algorithms",
                  "System Analysis & Design",
                ],
              },
              {
                degree: "Bachelor of Computer Applications (BCA)",
                field: "Computer Applications",
                school: "Suresh Gyan Vihar University",
                duration: "2021 – 2024",
                gpa: "7.83 CGPA",
                description:
                  "Strong foundation in computer science fundamentals with excellent academic performance and practical project experience.",
                coursework: [
                  "Programming Fundamentals",
                  "Database Management",
                  "Web Development",
                  "Software Engineering",
                  "Computer Networks",
                  "Operating Systems",
                ],
              },
            ].map((edu, index) => (
              <Card
                key={index}
                className="group hover-lift-smooth animate-slide-in-right-smooth border-2 hover:border-blue-500/20 relative overflow-hidden animate-border-glow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="font-heading group-hover:text-blue-500 transition-colors duration-500 flex items-center gap-2 mb-2">
                        {edu.degree}
                        <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-500" />
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground mb-1">
                        {edu.field}
                      </CardDescription>
                      <CardDescription className="text-base text-muted-foreground">
                        {edu.school}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-600 border-blue-500/20 animate-pulse-glow"
                      >
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge
                          key={course}
                          variant="outline"
                          className="text-xs hover:bg-blue-500 hover:text-white transition-all duration-500 hover:scale-110 border-2 animate-fade-in-up"
                          style={{ animationDelay: `${courseIndex * 100}ms` }}
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12 animate-fade-in-smooth relative text-neon">
            Technical Skills
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <Rocket className="w-8 h-8 text-blue-500 animate-float-ultra-smooth" />
            </div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-slide-in-left-smooth stagger-1">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 text-neon">
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "React", icon: "react" },
                  { name: "Redux", icon: "redux" },
                  { name: "Next.js", icon: "nextjs" },
                  { name: "Material UI", icon: "materialui" },
                  { name: "Bootstrap", icon: "bootstrap" },
                  { name: "Tailwind CSS", icon: "tailwindcss" },
                ].map((skill, index) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className={`glass-card justify-center py-3 px-4 text-sm hover-magnetic cursor-pointer animate-card-breathe group relative overflow-hidden stagger-${
                      index + 1
                    }`}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 mr-2 group-hover:animate-skill-orbit transition-transform duration-500"
                    />
                    <span className="relative z-10 group-hover:text-blue-500 transition-colors duration-500 text-neon">
                      {skill.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center animate-slide-in-up-smooth stagger-2">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 text-neon">
                Backend & Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "Node.js", icon: "nodejs" },
                  { name: "Express.js", icon: "express" },
                  { name: "JavaScript", icon: "js" },
                  { name: "TypeScript", icon: "ts" },
                  { name: "C++", icon: "cpp" },
                ].map((skill, index) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className={`glass-card justify-center py-3 px-4 text-sm hover-magnetic cursor-pointer animate-card-breathe group relative overflow-hidden stagger-${
                      index + 1
                    }`}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 mr-2 group-hover:animate-skill-orbit transition-transform duration-500"
                    />
                    <span className="relative z-10 group-hover:text-green-500 transition-colors duration-500 text-neon">
                      {skill.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center animate-slide-in-right-smooth stagger-3">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 text-neon">
                Database & Cloud
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "MongoDB", icon: "mongodb" },
                  { name: "PostgreSQL", icon: "postgres" },
                  { name: "AWS", icon: "aws" },
                  { name: "Docker", icon: "docker" },
                ].map((skill, index) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className={`glass-card justify-center py-3 px-4 text-sm hover-magnetic cursor-pointer animate-card-breathe group relative overflow-hidden stagger-${
                      index + 1
                    }`}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 mr-2 group-hover:animate-skill-orbit transition-transform duration-500"
                    />
                    <span className="relative z-10 group-hover:text-purple-500 transition-colors duration-500 text-neon">
                      {skill.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center animate-slide-in-left-smooth stagger-4">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 text-neon">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "Git", icon: "git" },
                  { name: "GitHub", icon: "github" },
                  { name: "VS Code", icon: "vscode" },
                  { name: "Postman", icon: "postman" },
                ].map((skill, index) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className={`glass-card justify-center py-3 px-4 text-sm hover-magnetic cursor-pointer animate-card-breathe group relative overflow-hidden stagger-${
                      index + 1
                    }`}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 mr-2 group-hover:animate-skill-orbit transition-transform duration-500"
                    />
                    <span className="relative z-10 group-hover:text-indigo-500 transition-colors duration-500 text-neon">
                      {skill.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center animate-slide-in-right-smooth stagger-5">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 text-neon">
                Social & Contact
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  {
                    name: "LinkedIn",
                    icon: "linkedin",
                    url: "https://www.linkedin.com/in/virendrareniwal",
                  },
                  {
                    name: "GitHub",
                    icon: "github",
                    url: "https://github.com/Virendra-Reniwal",
                  },
                  {
                    name: "Gmail",
                    icon: "gmail",
                    url: "mailto:virenderreniwal884@gmail.com",
                  },
                  // { name: "Discord", icon: "discord", url: "#" },
                ].map((social, index) => (
                  <Badge
                    key={social.name}
                    variant="secondary"
                    className={`glass-card justify-center py-3 px-4 text-sm hover-magnetic cursor-pointer animate-card-breathe group relative overflow-hidden stagger-${
                      index + 1
                    }`}
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${social.icon}`}
                      alt={social.name}
                      className="w-5 h-5 mr-2 group-hover:animate-skill-orbit transition-transform duration-500"
                    />
                    <span className="relative z-10 group-hover:text-pink-500 transition-colors duration-500 text-neon">
                      {social.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12 animate-fade-in-smooth">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IVR Calling Management System",
                description:
                  "Interactive voice response system to automate inbound and outbound call flows with role-based access controls and real-time analytics.",
                image: "/ivr-dashboard-interface.png",
                tags: ["MERN Stack", "JWT", "WebRTC", "Socket.io"],
                // github: "#",
                // live: "#",
              },
              {
                title: "Video Calling Platform",
                description:
                  "Real-time video calling platform using WebRTC for peer-to-peer media streaming with interactive live video, audio, and chat modules.",
                image: "/video-call-interface.png",
                tags: ["WebRTC", "Socket.IO", "React", "Node.js"],
                // github: "#",
                // live: "#",
              },
              {
                title: "Dynamic Web Applications",
                description:
                  "Multiple client projects featuring fully dynamic websites with comprehensive front-end, back-end, and database integration.",
                image: "/modern-web-dashboard.png",
                tags: ["React", "Node.js", "MongoDB", "Express.js"],
                // github: "#",
                // live: "#",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover-lift-smooth animate-reveal-smooth border-2 hover:border-primary/20 relative overflow-hidden animate-border-glow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ExternalLink className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading group-hover:text-primary transition-colors duration-500 flex items-center gap-2">
                    {project.title}
                    <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-500" />
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 border-2 animate-fade-in-up"
                        style={{ animationDelay: `${tagIndex * 100}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {/* <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover-lift-smooth bg-transparent border-2 hover:border-primary/50 group animate-border-glow"
                    >
                      <a
                        // href={project.github}
                        className="flex items-center gap-1"
                      >
                        <Github className="w-3 h-3 group-hover:rotate-360 transition-transform duration-700" />
                        Code
                      </a>
                    </Button> */}
                    {/* <Button
                      size="sm"
                      asChild
                      className="hover-lift-smooth group relative overflow-hidden animate-pulse-glow"
                    >
                      <div className="relative flex items-center">
                        <a
                          // href={project.live}
                          className="flex items-center gap-1 relative z-10"
                        >
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                          Live Demo
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </Button> */}
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-smooth">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Interested in collaboration or have a project idea? Let's discuss!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left-smooth">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {[
                  {
                    iconUrl: "https://skillicons.dev/icons?i=gmail",
                    bgColor: "bg-green-100",
                    textColor: "text-green-600",
                    text: "gmail",
                    link: "mailto:virenderreniwal884@gmail.com",
                  },
                  {
                    iconUrl: "https://skillicons.dev/icons?i=github",
                    bgColor: "bg-purple-100",
                    textColor: "text-purple-600",
                    text: "github",
                    link: "https://github.com/Virendra-Reniwal",
                  },
                  {
                    iconUrl: "https://skillicons.dev/icons?i=linkedin",
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-600",
                    text: "linkedin",
                    link: "https://www.linkedin.com/in/virendrareniwal",
                  },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`${contact.bgColor} p-2 rounded-full group-hover:bg-opacity-80 transition-colors duration-500 flex items-center justify-center`}
                    >
                      <img
                        src={contact.iconUrl}
                        alt="icon"
                        className={`${contact.textColor} w-5 h-5 group-hover:scale-125 transition-transform duration-500`}
                        style={{ filter: "none" }}
                      />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right-smooth">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="hover:text-foreground transition-colors duration-500 animate-fade-in-smooth">
              &copy; {new Date().getFullYear()} Virendra Reniwal. Deployed on
              GitHub Pages.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
