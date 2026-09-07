import { createFileRoute } from "@tanstack/react-router";
import { useEffect, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  Sparkles,
  Twitter,
} from "lucide-react";
import portrait from "@/assets/dinesh-portrait.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import edtechImage from "@/assets/edtech-project.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinesh | B.Tech Student & Aspiring Web Developer" },
      { name: "description", content: "Meet Dinesh, an 18-year-old B.Tech student creating modern web experiences. Explore his skills and featured projects." },
      { property: "og:title", content: "Dinesh | Web Developer Portfolio" },
      { property: "og:description", content: "Projects, skills, and contact information for Dinesh, a B.Tech student and aspiring web developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = ["HTML & CSS", "JavaScript", "React", "Node.js", "Git & GitHub", "SQL"];

const projects = [
  {
    index: "01",
    title: "E-Commerce Website",
    description: "A responsive online storefront with product discovery, a streamlined cart experience, and a polished checkout flow.",
    stack: ["React", "Node.js", "MongoDB"],
    image: ecommerceImage,
    alt: "Laptop displaying Dinesh's e-commerce website project",
  },
  {
    index: "02",
    title: "EdTech Platform",
    description: "A focused learning platform with course discovery, progress tracking, interactive lessons, and student dashboards.",
    stack: ["React", "Express", "PostgreSQL"],
    image: edtechImage,
    alt: "Laptop displaying Dinesh's EdTech platform project",
  },
];

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${String(data.get("name") ?? "Visitor")}`);
    const body = encodeURIComponent(`${String(data.get("message") ?? "")}\n\nFrom: ${String(data.get("email") ?? "")}`);
    window.location.href = `mailto:kmt123@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-18 sm:px-8" aria-label="Main navigation">
          <a href="#home" className="min-w-0 truncate font-display text-xl font-bold">Dinesh<span className="text-primary">.</span></a>
          <div className="flex shrink-0 items-center gap-4 text-xs font-semibold text-muted-foreground sm:gap-7 sm:text-sm">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative isolate flex min-h-[calc(100svh-4rem)] scroll-mt-20 items-center overflow-hidden border-b border-border">
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-2/5 border-l border-border bg-secondary/35 lg:block" />
          <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-24">
            <div className="reveal">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Open to opportunities
              </div>
              <p className="mb-4 font-display text-sm font-semibold text-muted-foreground">Hello, I’m Dinesh —</p>
              <h1 className="max-w-3xl text-balance font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
                I build thoughtful experiences for the <span className="text-primary">web.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">B.Tech student, 18, and aspiring web developer turning curiosity into useful, accessible digital products.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">View projects <ArrowDown className="h-4 w-4" /></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-bold transition-colors hover:border-primary hover:text-primary">Let’s talk <ArrowUpRight className="h-4 w-4" /></a>
              </div>
              <div className="mt-14 flex items-center gap-8 border-t border-border pt-6 text-sm text-muted-foreground">
                <span><strong className="block font-display text-xl text-foreground">B.Tech</strong>Student</span>
                <span><strong className="block font-display text-xl text-foreground">18</strong>Years old</span>
                <span><strong className="block font-display text-xl text-foreground">2+</strong>Projects</span>
              </div>
            </div>
            <div className="reveal relative mx-auto w-full max-w-sm lg:ml-auto">
              <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-md border border-primary/40" />
              <img src={portrait} alt="Dinesh, B.Tech student and aspiring web developer" width={1024} height={1280} className="aspect-[4/5] w-full rounded-md object-cover" />
              <div className="absolute -bottom-5 -left-5 rounded-md border border-border bg-card p-4 shadow-2xl">
                <Code2 className="mb-2 h-5 w-5 text-primary" />
                <p className="font-display text-sm font-bold">Learning by building</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-16 border-b border-border bg-secondary/25 py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="reveal grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
              <div>
                <p className="font-display text-xs font-bold uppercase text-primary">01 / About me</p>
                <h2 className="mt-4 text-balance font-display text-4xl font-bold sm:text-5xl">Curious mind.<br />Practical builder.</h2>
              </div>
              <div>
                <p className="max-w-3xl text-xl leading-9 text-muted-foreground">I’m a B.Tech student who enjoys solving problems through code. I’m building a strong foundation in modern web development and learning how thoughtful design and reliable engineering work together.</p>
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-md border border-border bg-card p-6">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <p className="mt-5 text-xs font-bold uppercase text-muted-foreground">Education</p>
                    <h3 className="mt-2 font-display text-xl font-bold">Bachelor of Technology</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Undergraduate student · Age 18</p>
                  </div>
                  <div className="rounded-md border border-border bg-card p-6">
                    <Code2 className="h-6 w-6 text-accent" />
                    <p className="mt-5 text-xs font-bold uppercase text-muted-foreground">Focus</p>
                    <h3 className="mt-2 font-display text-xl font-bold">Modern web development</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Responsive interfaces and useful products</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal mt-14 border-t border-border pt-10">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <h3 className="font-display text-xl font-bold">Tools I work with</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => <span key={skill} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary">{skill}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 border-b border-border py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="font-display text-xs font-bold uppercase text-primary">02 / Selected work</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Projects with purpose.</h2></div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">A selection of products I’ve explored while learning to build complete web experiences.</p>
            </div>
            <div className="mt-12 grid gap-7 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="reveal group overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
                  <div className="overflow-hidden border-b border-border"><img src={project.image} alt={project.alt} width={1280} height={800} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold text-primary">PROJECT {project.index}</p><h3 className="mt-2 font-display text-2xl font-bold">{project.title}</h3></div><ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" /></div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{item}</span>)}</div>
                    <div className="mt-6 flex gap-5 text-sm font-bold"><a href="#contact" className="inline-flex items-center gap-1 text-primary hover:underline">Live demo <ArrowUpRight className="h-3.5 w-3.5" /></a><a href="#contact" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"><Github className="h-4 w-4" /> GitHub</a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 bg-secondary/25 py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
            <div className="reveal">
              <p className="font-display text-xs font-bold uppercase text-primary">03 / Contact</p>
              <h2 className="mt-4 text-balance font-display text-4xl font-bold sm:text-5xl">Have an idea?<br />Let’s talk.</h2>
              <p className="mt-5 max-w-md leading-7 text-muted-foreground">I’m open to internships, collaborations, and conversations about building for the web.</p>
              <div className="mt-9 space-y-3">
                <a href="tel:1234567890" className="flex items-center gap-3 text-sm font-semibold transition-colors hover:text-primary"><span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card"><Phone className="h-4 w-4 text-primary" /></span>1234567890</a>
                <a href="mailto:kmt123@gmail.com" className="flex items-center gap-3 text-sm font-semibold transition-colors hover:text-primary"><span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card"><Mail className="h-4 w-4 text-primary" /></span>kmt123@gmail.com</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="reveal rounded-md border border-border bg-card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-bold text-muted-foreground">YOUR NAME<input required name="name" type="text" placeholder="Dinesh" className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary" /></label>
                <label className="text-xs font-bold text-muted-foreground">EMAIL ADDRESS<input required name="email" type="email" placeholder="you@example.com" className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary" /></label>
              </div>
              <label className="mt-5 block text-xs font-bold text-muted-foreground">MESSAGE<textarea required name="message" rows={5} placeholder="Tell me about your idea..." className="mt-2 w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary" /></label>
              <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">Send message <Send className="h-4 w-4" /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
          <div><p className="font-display text-xl font-bold">Dinesh<span className="text-primary">.</span></p><a href="mailto:kmt123@gmail.com" className="mt-1 block text-sm text-muted-foreground hover:text-primary">kmt123@gmail.com</a></div>
          <div className="flex gap-2">
            {[{ label: "LinkedIn", Icon: Linkedin }, { label: "GitHub", Icon: Github }, { label: "Instagram", Icon: Instagram }, { label: "Twitter", Icon: Twitter }].map(({ label, Icon }) => <a key={label} href="#contact" aria-label={label} title={label} className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Icon className="h-4 w-4" /></a>)}
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Dinesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
