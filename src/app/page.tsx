import Image from "next/image";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { withBasePath } from "@/lib/path";
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
        <section className="hero-grid mx-auto max-w-6xl">
          <div className="glass-panel hero-panel overflow-hidden rounded-[2rem] border border-border p-8 sm:p-10">
            <div className="space-y-8">
              {/* <div className="inline-flex rounded-full px-100 py-10 text-xs font-semibold uppercase tracking-[0.24em] eyebrow-pill">
                {siteConfig.title} Hi all! 👋
              </div> */}
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-muted">
                  {siteConfig.location}
                </p>
                <div className="max-w-3xl space-y-4">
                  <h1 className="font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                    {siteConfig.name}
                  </h1>
                  <p className="max-w-2xl text-2xl leading-tight text-muted sm:text-3xl">
                    "Master's of Applied Computer Science" Student @Concordia University, Montreal. </p>
                </div>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  {siteConfig.heroSummary} 
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-border bg-surface-strong p-4"
                >
                  <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:-translate-y-0.5"
              >
                Explore Projects
              </a>
              <a
                href={withBasePath("/resume.pdf")}
                className="rounded-full border border-foreground px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
              >
                Download Resume
              </a>
            </div>
          </div>

          <aside className="profile-stack">
            <div className="glass-panel overflow-hidden rounded-[2rem] border border-border p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <div className="profile-frame relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={withBasePath("/profile.jpeg")}
                    alt="Sunny Yadav profile portrait at sunset."
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: "center 28%" }}
                  />
                </div>
              </div>
              
            </div>

            <div className="glass-panel rounded-[2rem] border border-border p-10">
              <SectionHeading 
                eyebrow=""
                title="About me"
                description={siteConfig.intro}
              />
              
            </div>

            <div className="glass-panel rounded-[2rem] border border-border p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Quick Links
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Reach out
                </p>
              </div>
              <div className="mt-5 grid gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-between rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm hover:border-foreground"
                >
                  <span>{siteConfig.email}</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
                  className="flex items-center justify-between rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm hover:border-foreground"
                >
                  <span>{siteConfig.phone}</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <div className="grid gap-3 sm:grid-cols-3">
                  {siteConfig.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-border bg-surface-strong px-4 py-3 text-sm hover:border-foreground"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <div className="content-stack mx-auto mt-8 max-w-6xl">
          <section className="rounded-[2rem] border border-border bg-surface-strong px-6 py-8 sm:px-8">
            <div className="section-grid">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Strengths
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[1.5rem] border border-border bg-background px-4 py-4 text-sm leading-7 text-muted"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="space-y-8">
            <SectionHeading
              eyebrow=""
              title="Experience"
              description=""
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
                        className="rounded-[1.5rem] border border-border bg-surface-strong p-4 text-sm leading-7 text-muted"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <SectionHeading
              eyebrow=""
              title="Projects"
              description=""
            />
            <div className="space-y-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <SectionHeading
              eyebrow=""
              title="Education"
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

          <section id="skills" className="space-y-8">
            <SectionHeading
              eyebrow=""
              title="Skills"
              description="I'm strongest when I can connect the frontend experience with backend logic, data design, and production delivery concerns."
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
                        className="rounded-full border border-border bg-surface-strong px-3 py-2 text-sm text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="certifications" className="space-y-8">
            <SectionHeading
              eyebrow=""
              title="Certifications"
              description=""
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

          <section id="contact">
            <div className="glass-panel rounded-[2rem] border border-border p-8 sm:p-10">
              <SectionHeading
                eyebrow=""
                title="Contacts"
                description="Get In touch "
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
