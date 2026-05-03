import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import {
  certifications,
  education,
  experience,
  highlights,
  projects,
  siteConfig,
  skillGroups,
} from "@/lib/site-data";

const stats = [
  { value: "2+", label: "years in professional software engineering roles" },
  { value: "3", label: "machine learning and computer vision projects" },
  { value: "10", label: "certifications and publication links online" },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen text-foreground">
      <SiteHeader />
      <main className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel overflow-hidden rounded-[2rem] border border-border p-8 sm:p-10">
            <div className="inline-flex rounded-full border border-border bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Open to software engineering opportunities
            </div>
            <div className="mt-8 space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-muted">
                {siteConfig.location}
              </p>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                  {siteConfig.name}
                </h1>
                <p className="max-w-3xl text-2xl leading-tight text-muted sm:text-3xl">
                  {siteConfig.title} focused on building dependable full-stack systems.
                </p>
              </div>
              <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
                {siteConfig.heroSummary}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:-translate-y-0.5"
              >
                Explore Projects
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full border border-foreground px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
              >
                Download Resume
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-border bg-white/70 p-4">
                  <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-panel rounded-[2rem] border border-border p-8">
              <SectionHeading
                eyebrow="Profile"
                title="A practical builder with a backend-first core."
                description={siteConfig.intro}
              />
              <p className="mt-6 text-sm leading-7 text-muted">
                {siteConfig.futureFocus}
              </p>
            </div>
            <div className="glass-panel rounded-[2rem] border border-border p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Quick Links
              </p>
              <div className="mt-5 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm hover:border-foreground"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
                  className="block rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm hover:border-foreground"
                >
                  {siteConfig.phone}
                </a>
                {siteConfig.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm hover:border-foreground"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mx-auto mt-8 max-w-6xl rounded-[2rem] border border-border bg-[#fff7ef] px-6 py-8 sm:px-8">
          <div className="section-grid">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Strengths
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.5rem] border border-border bg-white/70 px-4 py-4 text-sm leading-7 text-muted"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto mt-16 max-w-6xl space-y-8">
          <SectionHeading
            eyebrow="Experience"
            title="Professional work rooted in real business systems."
            description="My production work has focused on retail modules where API quality, workflow correctness, and operational reliability matter."
          />
          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="glass-panel rounded-[2rem] border border-border p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-base text-muted">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-foreground hover:text-accent"
                      >
                        {item.company}
                      </a>{" "}
                      for{" "}
                      <a
                        href={item.clientHref}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-foreground hover:text-accent"
                      >
                        {item.client}
                      </a>{" "}
                      · {item.location}
                    </p>
                    <p className="max-w-3xl text-sm leading-7 text-muted">{item.summary}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-[1.5rem] border border-border bg-white/70 p-4 text-sm leading-7 text-muted"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto mt-16 max-w-6xl space-y-8">
          <SectionHeading
            eyebrow="Projects"
            title="Applied machine learning and computer vision work."
            description="These projects show how I approach experimentation, implementation, and presenting technical work clearly."
          />
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl space-y-8">
          <SectionHeading
            eyebrow="Education"
            title="Academic path shaped by engineering depth."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={`${item.school}-${item.degree}`}
                className="glass-panel rounded-[2rem] border border-border p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  {item.period}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{item.degree}</h3>
                <p className="mt-2 text-sm text-muted">
                  {item.school} · {item.location}
                </p>
                {item.detail ? (
                  <p className="mt-4 text-sm leading-7 text-muted">{item.detail}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto mt-16 max-w-6xl space-y-8">
          <SectionHeading
            eyebrow="Skills"
            title="Comfortable across product layers."
            description="I’m strongest when I can connect the frontend experience with backend logic, data design, and production delivery concerns."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="glass-panel rounded-[2rem] border border-border p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-white/70 px-3 py-2 text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="mx-auto mt-16 max-w-6xl space-y-8">
          <SectionHeading
            eyebrow="Certifications"
            title="Proof of continuous learning."
            description="I’ve preserved the links from the resume so visitors can verify publications and credentials directly."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="glass-panel rounded-[1.75rem] border border-border p-5 hover:-translate-y-1 hover:border-foreground"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {item.kind}
                  </span>
                  <span className="text-sm text-muted">Open ↗</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.issuer}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto mt-16 max-w-6xl">
          <div className="glass-panel rounded-[2rem] border border-border p-8 sm:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something thoughtful and reliable."
              description="I’m easy to reach for collaborations, full-time opportunities, and technical conversations."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:-translate-y-0.5"
              >
                Email Me
              </a>
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:border-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
