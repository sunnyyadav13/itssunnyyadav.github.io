import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { certifications } from "@/lib/site-data";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <main className="px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <SectionHeading
            eyebrow="Certifications"
            title="Verified learning, credentials, and published work."
            description="This page keeps the credentials in one place with the source links preserved from the resume PDF."
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
                <h2 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm text-muted">{item.issuer}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
