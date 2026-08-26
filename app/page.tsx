'use client'

import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'DATA MARINE',
    category: 'Marine Marketplace',
    description:
      'A premium digital marine marketplace built for boats, marine engines, fishing equipment, safety gear and custom boat building.',
    tags: ['Next.js', 'Supabase', 'E-commerce'],
    url: 'https://www.datamarine.ng/',
    accent: 'MARINE',
    type: 'marine',
  },
  {
    number: '02',
    title: 'PLEASANTVILLE',
    category: 'Education Platform',
    description:
      'A modern school website designed to communicate the academy’s vision, academics, facilities, gallery, admissions and learning experience.',
    tags: ['Next.js', 'React', 'Responsive'],
    url: 'https://pleasantville-academy.vercel.app/',
    accent: 'ACADEMY',
    type: 'education',
  },
  {
    number: '03',
    title: "T'S FARM",
    category: 'Agribusiness',
    description:
      'An integrated agricultural business concept connecting farming, processing, packaging, distribution and direct customer delivery.',
    tags: ['Strategy', 'Branding', 'Business'],
    url: '#contact',
    accent: 'FARM',
    type: 'farm',
  },
]

const services = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Modern, responsive websites and digital experiences.',
  },
  {
    number: '02',
    title: 'Business Strategy',
    description: 'Turning ideas into structured and commercially viable businesses.',
  },
  {
    number: '03',
    title: 'Digital Products',
    description: 'Planning and building useful digital products from concept to launch.',
  },
  {
    number: '04',
    title: 'UI / UX',
    description: 'Clean interfaces designed around clarity and user experience.',
  },
  {
    number: '05',
    title: 'Digital Marketing',
    description: 'Digital presence, positioning and growth-focused thinking.',
  },
  {
    number: '06',
    title: 'Project Management',
    description: 'Taking projects from an idea to a working final product.',
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />

        <div className="absolute right-[-250px] top-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.045] blur-[150px]" />

        <div className="absolute left-[-250px] top-[70%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[150px]" />
      </div>

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050505]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#"
            className="text-xl font-bold tracking-[-0.07em]"
          >
            TJ<span className="text-white/25">.</span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#about"
              className="text-sm text-white/45 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#work"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#services"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm transition duration-300 hover:bg-white hover:text-black md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sm text-white md:hidden"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.08] bg-[#050505] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-6">
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
      <section className="relative">
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-10">
          <div className="w-full">
            <div className="mb-9 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs uppercase tracking-[0.28em] text-white/40">
                Available for opportunities
              </span>
            </div>

            <h1 className="max-w-6xl text-[clamp(4rem,11vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Building
              <br />
              <span className="text-white/[0.24]">ideas into</span>
              <br />
              reality<span className="text-white/[0.24]">.</span>
            </h1>

            <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-lg leading-8 text-white/45">
                I'm Thompson Joshua — a business strategist and digital
                builder creating modern websites, digital products and
                business solutions.
              </p>

              <a
                href="#work"
                className="group flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.04]"
              >
                Explore my work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/[0.08]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-10">
          <div>
            <p className="text-5xl font-semibold tracking-[-0.05em]">
              03<span className="text-white/25">+</span>
            </p>
            <p className="mt-3 text-sm text-white/35">
              Featured projects
            </p>
          </div>

          <div>
            <p className="text-5xl font-semibold tracking-[-0.05em]">
              ∞
            </p>
            <p className="mt-3 text-sm text-white/35">
              Ideas worth building
            </p>
          </div>

          <div>
            <p className="text-5xl font-semibold tracking-[-0.05em]">
              2026
            </p>
            <p className="mt-3 text-sm text-white/35">
              The next chapter
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              01 — About
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.055em] md:text-6xl">
              I combine business thinking with technology to turn concepts
              into experiences people can actually use.
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/40">
              My work sits between business, technology, creativity and
              entrepreneurship. I enjoy taking an idea from the early concept
              stage through strategy, design, development and launch.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 pb-32 lg:px-10"
      >
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              02 — Selected work
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/30">
            A selection of digital products, websites and business concepts
            developed from idea to execution.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] transition duration-500 hover:border-white/20"
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                {/* PROJECT VISUAL */}
                <div className="relative min-h-[360px] overflow-hidden border-b border-white/[0.08] lg:min-h-[500px] lg:border-b-0 lg:border-r">
                  <div
                    className={`absolute inset-0 ${
                      project.type === 'marine'
                        ? 'bg-gradient-to-br from-slate-800 via-slate-950 to-black'
                        : project.type === 'education'
                          ? 'bg-gradient-to-br from-amber-900/40 via-orange-950/30 to-black'
                          : 'bg-gradient-to-br from-green-950 via-black to-emerald-950/30'
                    }`}
                  />

                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-[15%] top-[18%] h-32 w-32 rounded-full border border-white/20" />
                    <div className="absolute bottom-[15%] right-[12%] h-48 w-48 rounded-full border border-white/10" />
                    <div className="absolute left-[40%] top-[40%] h-px w-[60%] rotate-[-25deg] bg-white/10" />
                  </div>

                  <div className="absolute left-8 top-8 flex items-center gap-3">
                    <span className="text-xs text-white/30">
                      {project.number}
                    </span>

                    <span className="h-px w-10 bg-white/20" />

                    <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-[clamp(4rem,8vw,8rem)] font-bold tracking-[-0.09em] text-white/[0.08]">
                        {project.accent}
                      </p>

                      <div className="mx-auto mt-2 h-px w-24 bg-white/20" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs text-white/50 backdrop-blur-md">
                      Digital Project
                    </span>
                  </div>
                </div>

                {/* PROJECT INFO */}
                <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                        {project.number}
                      </span>

                      <span className="text-xs text-white/25">
                        2026
                      </span>
                    </div>

                    <h3 className="mt-12 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-7 max-w-xl text-base leading-8 text-white/40">
                      {project.description}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-2">
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

                  <div className="mt-14">
                    <a
                      href={project.url}
                      target={project.url.startsWith('http') ? '_blank' : undefined}
                      rel={
                        project.url.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group/link flex w-fit items-center gap-4 rounded-full border border-white/15 px-6 py-3.5 text-sm transition duration-300 hover:bg-white hover:text-black"
                    >
                      View project

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        ↗
                      </span>
                    </a>
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
        className="border-y border-white/[0.08]"
      >
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/25">
            03 — Capabilities
          </p>

          <div className="mt-14 grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
              What I
              <br />
              bring to
              <br />
              the table.
            </h2>

            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group bg-[#050505] p-8 transition duration-300 hover:bg-white/[0.04]"
                >
                  <span className="text-xs text-white/20">
                    {service.number}
                  </span>

                  <h3 className="mt-9 text-lg font-medium transition group-hover:translate-x-1">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/30">
                    {service.description}
                  </p>
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
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-16 lg:p-24">
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-white/[0.04] blur-[100px]" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              04 — Contact
            </p>

            <h2 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
              Have an idea?
              <br />
              <span className="text-white/25">Let's build it.</span>
            </h2>

            <p className="mt-10 max-w-xl text-base leading-8 text-white/40">
              Whether you're looking to build a website, launch a digital
              product, develop a business idea or collaborate on something
              ambitious, I'd love to hear about it.
            </p>

            <a
              href="mailto:hello@joshuathompson.dev"
              className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.04]"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-lg font-semibold tracking-[-0.05em]">
              TJ<span className="text-white/25">.</span>
            </p>

            <p className="mt-2 text-xs text-white/25">
              Business strategist · Digital builder
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/30">
            <a
              href="https://github.com/Tjoshuaa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
          <p className="text-xs text-white/20">
            © 2026 Thompson Joshua. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
