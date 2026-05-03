import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <main className="px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <SectionHeading
            eyebrow="Projects Archive"
            title="Technical work with a machine learning and computer vision lens."
            description="A fuller view of the projects featured on the home page, kept in a dedicated route so the site can scale cleanly over time."
          />
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
