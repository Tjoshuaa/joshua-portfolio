'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Project = {
  number: string
  type: string
  title: string
  description: string
  tags: string[]
  images: string[]
  href: string
  featured: boolean
}

const projects: Project[] = [
  {
    number: '01',
    type: 'Marine Marketplace',
    title: 'Data Marine',
    description:
      'A premium marine marketplace built to showcase boats, marine engines, equipment and custom boat-building solutions.',
    tags: ['Next.js', 'React', 'Supabase'],
    images: [
      '/projects/IMG_1985.jpeg',
      '/projects/IMG_1986.png',
      '/projects/IMG_1987.png',
    ],
    href: '/projects/data-marine',
    featured: true,
  },
  {
    number: '02',
    type: 'Education Platform',
    title: 'Pleasantville Academy',
    description:
      'A modern school website designed to present programmes, facilities, admissions and the complete academy experience.',
    tags: ['Next.js', 'React', 'UI/UX'],
    images: [
      '/projects/IMG_1988.png',
      '/projects/IMG_1989.png',
      '/projects/IMG_1990.png',
    ],
    href: '/projects/pleasantville-academy',
    featured: true,
  },
  {
    number: '03',
    type: 'Agribusiness',
    title: "T'S Farm",
    description:
      'An integrated agricultural business concept connecting farming, processing, packaging, distribution and direct customer delivery.',
    tags: ['Business', 'Strategy', 'Digital'],
    images: [],
    href: '/projects/ts-farm',
    featured: false,
  },
]

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'Responsive Design',
  'UI / UX',
  'Product Development',
  'Business Strategy',
]

export default function Home() {
  const [activeImage, setActiveImage] = useState<Record<string, number>>({})

  const changeImage = (title: string, index: number) => {
    setActiveImage((current) => ({
      ...current,
      [title]: index,
    }))
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white selection:bg-white selection:text-black">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto mt-4 flex max-w-[1400px] items-center justify-between rounded-full border border-white/[0.09] bg-[#0a0a0a]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-black">
              TJ
            </span>

            <span className="hidden text-sm font-medium tracking-tight sm:block">
              Thompson Joshua
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#about"
              className="text-sm text-white/45 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="#work"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Work
            </Link>

            <Link
              href="#skills"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Skills
            </Link>

            <Link
              href="#contact"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Contact
            </Link>
          </div>

          <Link
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
          >
            Let's talk
          </Link>

        </nav>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-screen items-center">

        <div className="pointer-events-none absolute left-1/2 top-[25%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 pt-36 sm:px-8 lg:px-12">

          <div className="flex flex-col">

            <div className="mb-10 flex items-center gap-3">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/45">
                Available for selected projects
              </span>

            </div>

            <h1 className="max-w-[1250px] text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]">

              <span className="block">
                Thompson
              </span>

              <span className="block text-white/25">
                Joshua.
              </span>

            </h1>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div className="max-w-2xl">

                <p className="text-xl leading-8 text-white/55 sm:text-2xl sm:leading-9">
                  Web developer and digital builder creating
                  <span className="text-white">
                    {' '}modern digital experiences
                  </span>
                  {' '}for businesses, organisations and ideas worth building.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <Link
                    href="#work"
                    className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
                  >
                    Explore my work

                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-white/60 transition hover:border-white/25 hover:text-white"
                  >
                    Start a project
                  </Link>

                </div>

              </div>

              <div className="hidden lg:block">

                <div className="flex items-center gap-3 text-right">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                      Based in
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Nigeria
                    </p>
                  </div>

                  <span className="h-12 w-px bg-white/10" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                      Focus
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Web & Digital
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-24 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/25">
            <span className="h-px w-12 bg-white/15" />
            Scroll to explore
          </div>

        </div>

      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="border-y border-white/[0.08]"
      >

        <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36">

          <div className="grid gap-16 lg:grid-cols-[0.35fr_1fr]">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
                01 — About
              </p>
            </div>

            <div>

              <h2 className="max-w-5xl text-3xl font-medium leading-[1.1] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                I build digital products with a
                <span className="text-white/25">
                  {' '}developer&apos;s mindset
                </span>
                {' '}and a
                <span className="text-white/25">
                  {' '}business perspective.
                </span>
              </h2>

              <div className="mt-12 grid gap-10 md:grid-cols-2">

                <p className="text-base leading-8 text-white/40">
                  I enjoy taking ideas from the early concept stage and
                  turning them into polished, functional digital experiences.
                  My work combines development, design thinking and practical
                  business strategy.
                </p>

                <p className="text-base leading-8 text-white/40">
                  From marketplaces and education platforms to agricultural
                  ventures, I focus on building experiences that are useful,
                  clear, responsive and ready to grow.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          WORK
      ========================================================= */}

      <section
        id="work"
        className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
              02 — Selected Work
            </p>

            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.075em] sm:text-7xl lg:text-8xl">
              Selected
              <span className="text-white/20">
                {' '}work.
              </span>
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-7 text-white/35">
            A selection of websites, digital experiences and business
            concepts I&apos;ve worked on.
          </p>

        </div>

        <div className="mt-20 space-y-32">

          {projects.map((project) => {

            const currentImage = activeImage[project.title] ?? 0

            return (
              <article
                key={project.number}
                className="group"
              >

                <Link
                  href={project.href}
                  className="block"
                >

                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0c0c0c] sm:rounded-[2rem]">

                    {project.featured && project.images.length > 0 ? (

                      <div className="relative aspect-[16/10] overflow-hidden">

                        <Image
                          src={project.images[currentImage]}
                          alt={`${project.title} screenshot`}
                          fill
                          priority={project.number === '01'}
                          sizes="(max-width: 768px) 100vw, 1400px"
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.015]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl sm:left-7 sm:top-7">
                          {project.number}
                        </div>

                        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-lg text-white/70 backdrop-blur-xl transition duration-300 group-hover:bg-white group-hover:text-black sm:right-7 sm:top-7">
                          ↗
                        </div>

                        <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:px-5 sm:py-2.5">
                          {project.type}
                        </div>

                      </div>

                    ) : (

                      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0d0a]">

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(120,170,110,0.13),transparent_42%)]" />

                        <div className="absolute left-[10%] top-[18%] h-40 w-40 rounded-full border border-white/[0.06] sm:h-72 sm:w-72" />

                        <div className="absolute bottom-[5%] right-[12%] h-52 w-52 rounded-full border border-white/[0.04] sm:h-96 sm:w-96" />

                        <div className="absolute inset-0 flex items-center justify-center">

                          <div className="text-center">

                            <p className="text-[clamp(4rem,13vw,11rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.07]">
                              T&apos;S FARM
                            </p>

                            <div className="mx-auto mt-5 h-px w-16 bg-white/20" />

                            <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-white/30">
                              Integrated Agribusiness
                            </p>

                          </div>

                        </div>

                        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-xl sm:left-7 sm:top-7">
                          {project.number}
                        </div>

                        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-lg text-white/70 backdrop-blur-xl transition group-hover:bg-white group-hover:text-black sm:right-7 sm:top-7">
                          ↗
                        </div>

                      </div>

                    )}

                  </div>

                </Link>

                {project.featured && project.images.length > 0 && (
                  <div className="mt-4 flex items-center gap-2">

                    {project.images.map((_, index) => (

                      <button
                        key={index}
                        type="button"
                        onClick={() =>
                          changeImage(project.title, index)
                        }
                        aria-label={`View ${project.title} image ${index + 1}`}
                        className={`h-1 rounded-full transition-all ${
                          currentImage === index
                            ? 'w-10 bg-white'
                            : 'w-5 bg-white/15 hover:bg-white/35'
                        }`}
                      />

                    ))}

                  </div>
                )}

                <div className="mt-8 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-start">

                  <div>

                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/25">
                      {project.type}
                    </p>

                    <h3 className="mt-3 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                      {project.title}
                    </h3>

                  </div>

                  <div className="max-w-2xl">

                    <p className="text-base leading-8 text-white/40">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.09] px-4 py-2 text-xs text-white/40"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </article>
            )
          })}

        </div>

      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section className="border-y border-white/[0.08]">

        <div
          id="skills"
          className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
        >

          <div className="grid gap-16 lg:grid-cols-[0.35fr_1fr]">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
                03 — Capabilities
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.065em] sm:text-6xl">
                From idea to
                <span className="text-white/20">
                  {' '}digital product.
                </span>
              </h2>

              <div className="mt-14 border-l border-white/[0.08]">

                <div className="border-b border-white/[0.08] px-6 py-7 sm:px-8">

                  <div className="flex flex-col justify-between gap-3 sm:flex-row">

                    <h3 className="text-xl font-medium">
                      Web Development
                    </h3>

                    <span className="text-sm text-white/25">
                      01
                    </span>

                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
                    Responsive websites and web applications built with
                    modern technologies and a focus on performance,
                    usability and maintainability.
                  </p>

                </div>

                <div className="border-b border-white/[0.08] px-6 py-7 sm:px-8">

                  <div className="flex flex-col justify-between gap-3 sm:flex-row">

                    <h3 className="text-xl font-medium">
                      Product & UI Design
                    </h3>

                    <span className="text-sm text-white/25">
                      02
                    </span>

                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
                    Clean interfaces and thoughtful user experiences
                    designed around real users and real business goals.
                  </p>

                </div>

                <div className="border-b border-white/[0.08] px-6 py-7 sm:px-8">

                  <div className="flex flex-col justify-between gap-3 sm:flex-row">

                    <h3 className="text-xl font-medium">
                      Digital Business
                    </h3>

                    <span className="text-sm text-white/25">
                      03
                    </span>

                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
                    Combining technology and business thinking to turn
                    concepts into practical digital solutions.
                  </p>

                </div>

              </div>

              <div className="mt-14">

                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                  Technology
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">

                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.09] px-5 py-3 text-sm text-white/45 transition hover:border-white/25 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="relative overflow-hidden"
      >

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-32 sm:px-8 lg:px-12 lg:py-44">

          <div className="max-w-5xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
              04 — Let&apos;s work together
            </p>

            <h2 className="mt-8 text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.08em]">

              Have something
              <br />

              <span className="text-white/20">
                worth building?
              </span>

            </h2>

            <p className="mt-10 max-w-xl text-base leading-8 text-white/40 sm:text-lg">
              Tell me what you&apos;re working on, what you&apos;re trying to
              solve, or simply what you&apos;re dreaming up.
            </p>

            <a
              href="mailto:hello@thompsonjoshua.com"
              className="group mt-10 inline-flex items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              hello@thompsonjoshua.com

              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.08]">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-12">

          <div>

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-black text-black">
                TJ
              </span>

              <span className="text-sm text-white/50">
                Thompson Joshua
              </span>

            </div>

            <p className="mt-3 text-xs text-white/20">
              Web Developer · Digital Builder
            </p>

          </div>

          <div className="flex flex-wrap gap-6">

            <Link
              href="#about"
              className="text-xs text-white/25 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="#work"
              className="text-xs text-white/25 transition hover:text-white"
            >
              Work
            </Link>

            <Link
              href="#contact"
              className="text-xs text-white/25 transition hover:text-white"
            >
              Contact
            </Link>

            <a
              href="mailto:hello@thompsonjoshua.com"
              className="text-xs text-white/25 transition hover:text-white"
            >
              Email
            </a>

          </div>

          <p className="text-xs text-white/20">
            © 2026
          </p>

        </div>

      </footer>

    </main>
  )
}
