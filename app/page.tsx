'use client'

import Link from 'next/link'
import { useState } from 'react'

type Project = {
  number: string
  type: string
  title: string
  description: string
  tags: string[]
  href: string
}

const projects: Project[] = [
  {
    number: '01',
    type: 'Marine Marketplace',
    title: 'Data Marine',
    description:
      'A modern marine marketplace created to showcase boats, marine engines, equipment and custom boat-building solutions. The platform combines product discovery with a tailored boat-building experience.',
    tags: ['Next.js', 'React', 'Supabase', 'Vercel'],
    href: '/projects/data-marine',
  },
  {
    number: '02',
    type: 'Education Platform',
    title: 'Pleasantville Academy',
    description:
      'A modern educational website designed to present the academy, its programmes, facilities, admissions process and overall learning experience in a clear and professional way.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'UI/UX'],
    href: '/projects/pleasantville-academy',
  },
  {
    number: '03',
    type: 'Agribusiness',
    title: "T'S Farm",
    description:
      'An integrated agricultural business concept connecting production, processing, packaging, distribution and direct customer delivery.',
    tags: ['Business Strategy', 'Product Development', 'Digital'],
    href: '/projects/ts-farm',
  },
]

const capabilities = [
  {
    number: '01',
    title: 'Web Development',
    text: 'Modern, responsive websites and digital platforms built around real business objectives.',
  },
  {
    number: '02',
    title: 'Business Strategy',
    text: 'Turning ideas into structured products, services and digital business opportunities.',
  },
  {
    number: '03',
    title: 'Digital Products',
    text: 'Designing and developing practical digital experiences that solve problems and create value.',
  },
  {
    number: '04',
    title: 'Product Design',
    text: 'Clear interfaces and user experiences that make digital products easier and more engaging to use.',
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    value: 'Ayibapreye Thompson',
    href: 'https://www.linkedin.com/in/ayibapreye-thompson/',
  },
  {
    label: 'Instagram',
    value: '@a.tjoshua',
    href: 'https://www.instagram.com/a.tjoshua/',
  },
  {
    label: 'GitHub',
    value: 'Tjoshuaa',
    href: 'https://github.com/Tjoshuaa',
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.18em] text-white transition-opacity hover:opacity-70"
          >
            TJ.
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#work"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Work
            </a>
            <a
              href="#capabilities"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Capabilities
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{menuOpen ? '×' : '☰'}</span>
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-4 mt-2 rounded-3xl border border-white/10 bg-[#0b0b0b]/95 p-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                About
              </a>
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                Work
              </a>
              <a
                href="#capabilities"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                Capabilities
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-white/40 sm:text-sm">
              Business Strategist · Digital Builder
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[110px]">
              I build
              <br />
              <span className="text-white/35">digital</span> experiences.
            </h1>

            <div className="mt-10 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-base leading-7 text-white/50 sm:text-lg">
                I combine business thinking, technology and creative problem
                solving to build digital products, brands and experiences
                designed to move ideas forward.
              </p>

              <a
                href="#work"
                className="group flex w-fit items-center gap-3 text-sm font-medium text-white"
              >
                Explore my work
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </div>
          </div>

          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-white/30 sm:flex-row">
            <span>Based in Nigeria</span>
            <span>Available for selected projects</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              01 — About
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
              A builder focused on the intersection of{' '}
              <span className="text-white/35">
                business, technology and creativity.
              </span>
            </h2>

            <div className="mt-10 grid gap-6 text-sm leading-7 text-white/50 sm:grid-cols-2">
              <p>
                I enjoy taking ideas from an early concept and turning them
                into something tangible — whether that means a website, a
                digital platform, a product concept or a complete business
                experience.
              </p>

              <p>
                My approach combines strategic thinking with hands-on
                development, allowing me to look beyond how something should
                look and focus on why it should exist and how it should work.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="mailto:tjthompson3245@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm text-white transition-all hover:border-white hover:bg-white hover:text-black"
              >
                Work with me
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                02 — Selected Work
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Things I&apos;ve built.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/40">
              A selection of digital projects, business concepts and platforms
              developed across different industries.
            </p>
          </div>

          <div className="border-t border-white/10">
            {projects.map((project) => (
              <Link
                key={project.number}
                href={project.href}
                className="group block border-b border-white/10 py-8 transition-all duration-300 hover:px-3 sm:py-10"
              >
                <div className="grid gap-6 lg:grid-cols-[80px_220px_1fr_40px] lg:items-center">
                  <span className="text-xs text-white/25">
                    {project.number}
                  </span>

                  <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                    {project.type}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] transition-colors group-hover:text-white/70 sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-white/35"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-2xl text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                03 — Capabilities
              </p>
            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item.number}
                  className="border-b border-white/10 py-8 sm:px-6 sm:first:pl-0 sm:nth-[2n+1]:border-r"
                >
                  <span className="text-xs text-white/25">
                    {item.number}
                  </span>

                  <h3 className="mt-6 text-xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    {item.text}
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
        className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                04 — Contact
              </p>

              <h2 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl">
                Let&apos;s build
                <br />
                <span className="text-white/35">something.</span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
                Have an idea, project or business opportunity? Get in touch
                and let&apos;s talk about how we can turn it into something
                real.
              </p>
            </div>

            <div>
              {/* EMAIL */}
              <a
                href="mailto:tjthompson3245@gmail.com"
                className="group block border-t border-white/10 py-7"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                      Email
                    </p>
                    <p className="mt-2 text-lg text-white transition-colors group-hover:text-white/60 sm:text-xl">
                      tjthompson3245@gmail.com
                    </p>
                  </div>

                  <span className="text-xl text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/2349169534809"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-t border-white/10 py-7"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                      Phone / WhatsApp
                    </p>
                    <p className="mt-2 text-lg text-white transition-colors group-hover:text-white/60 sm:text-xl">
                      +234 916 953 4809
                    </p>
                  </div>

                  <span className="text-xl text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </a>

              {/* SOCIALS */}
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-white/10 py-7"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        {social.label}
                      </p>

                      <p className="mt-2 text-lg text-white transition-colors group-hover:text-white/60 sm:text-xl">
                        {social.value}
                      </p>
                    </div>

                    <span className="text-xl text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </a>
              ))}

              {/* LOCATION */}
              <div className="border-y border-white/10 py-7">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Location
                </p>

                <p className="mt-2 text-lg text-white sm:text-xl">
                  Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-14 text-center sm:px-10 sm:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Start a conversation
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            Have something worth building?
          </h2>

          <a
            href="mailto:tjthompson3245@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
          >
            Email me
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-white/30 sm:flex-row sm:items-center">
          <div>
            <span className="font-medium text-white/60">TJ.</span>
            <span className="ml-3">
              Thompson Joshua — Business Strategist & Digital Builder
            </span>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="mailto:tjthompson3245@gmail.com"
              className="transition-colors hover:text-white"
            >
              Email
            </a>

            <a
              href="https://wa.me/2349169534809"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/ayibapreye-thompson/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/a.tjoshua/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://github.com/Tjoshuaa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
