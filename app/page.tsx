'use client'

import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Data Marine',
    category: 'Marine Marketplace',
    description:
      'A modern marine marketplace connecting customers with boats, marine engines, accessories, and custom boat solutions.',
    tags: ['Next.js', 'Supabase', 'Vercel'],
  },
  {
    number: '02',
    title: 'Pleasantville Academy',
    category: 'Education',
    description:
      'A modern digital experience for an educational institution, designed to showcase programs, facilities, and the student experience.',
    tags: ['Next.js', 'React', 'Vercel'],
  },
  {
    number: '03',
    title: "T's Farm",
    category: 'Agribusiness',
    description:
      'An integrated agricultural business concept connecting farming, processing, packaging, distribution, and customers.',
    tags: ['Strategy', 'Business', 'Digital'],
  },
]

const services = [
  'Web Development',
  'Business Strategy',
  'Digital Products',
  'UI / UX',
  'Digital Marketing',
  'Project Management',
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#"
            className="text-xl font-bold tracking-[-0.05em]"
          >
            TJ<span className="text-white/30">.</span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#about"
              className="text-sm text-white/50 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#work"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#services"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:bg-white hover:text-black md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sm md:hidden"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#work" onClick={() => setMenuOpen(false)}>
                Work
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-10">
          <div className="max-w-6xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-[clamp(4rem,11vw,9.5rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
              Building
              <br />
              <span className="text-white/25">ideas into</span>
              <br />
              reality<span className="text-white/25">.</span>
            </h1>

            <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-lg leading-8 text-white/45">
                I'm Thompson Joshua — a business strategist and digital
                builder creating modern websites, digital products, and
                business solutions.
              </p>

              <a
                href="#work"
                className="group flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
              >
                Explore my work

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-10">
          <div>
            <p className="text-4xl font-semibold">03+</p>
            <p className="mt-2 text-sm text-white/35">
              Digital projects
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold">∞</p>
            <p className="mt-2 text-sm text-white/35">
              Ideas worth building
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold">2026</p>
            <p className="mt-2 text-sm text-white/35">
              Building the next chapter
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              01 — About
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
              I combine business thinking with technology to turn concepts
              into experiences people can actually use.
            </h2>

            <p className="mt-10 max-w-2xl leading-8 text-white/40">
              My work sits between business, technology, creativity, and
              entrepreneurship. I enjoy taking an idea from concept through
              strategy, design, development, and launch.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 pb-32 lg:px-10"
      >
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            02 — Selected work
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Things I've built.
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-500 hover:border-white/20"
            >
              <div className="grid lg:grid-cols-[100px_1fr_0.8fr]">
                <div className="hidden border-r border-white/10 p-8 text-sm text-white/20 lg:block">
                  {project.number}
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    {project.category}
                  </p>

                  <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl leading-7 text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden border-t border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent lg:border-l lg:border-t-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold tracking-[-0.08em] text-white/[0.04]">
                      {project.title.substring(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <div className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black transition group-hover:-translate-y-1">
                    ↗
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-y border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            03 — Capabilities
          </p>

          <div className="mt-14 grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              What I
              <br />
              bring to
              <br />
              the table.
            </h2>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="bg-[#050505] p-8 transition hover:bg-white/[0.04]"
                >
                  <span className="text-xs text-white/20">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 text-lg font-medium">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-16 lg:p-24">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            04 — Contact
          </p>

          <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Have an idea?
            <br />
            Let's build it.
          </h2>

          <p className="mt-8 max-w-xl leading-7 text-white/40">
            Whether you're looking to build a website, launch a digital
            product, develop a business idea, or collaborate on something
            ambitious, I'd love to hear about it.
          </p>

          <a
            href="mailto:hello@joshuathompson.dev"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
          >
            Get in touch →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-sm text-white/30">
            © 2026 Thompson Joshua. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white">
              GitHub
            </a>

            <a href="#" className="hover:text-white">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
