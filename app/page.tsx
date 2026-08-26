'use client'

import Image from 'next/image'
import Link from 'next/link'

type Project = {
  number: string
  type: string
  title: string
  description: string
  tags: string[]
  images: string[]
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
    images: [
      '/projects/IMG_1985.jpeg',
      '/projects/IMG_1986.png',
      '/projects/IMG_1987.png',
    ],
    href: '/projects/data-marine',
  },
  {
    number: '02',
    type: 'Education Platform',
    title: 'Pleasantville Academy',
    description:
      'A modern educational website designed to present the academy, its programmes, facilities, admissions process and overall learning experience in a clear and professional way.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'UI/UX'],
    images: [
      '/projects/IMG_1988.png',
      '/projects/IMG_1989.png',
      '/projects/IMG_1990.png',
    ],
    href: '/projects/pleasantville-academy',
  },
  {
    number: '03',
    type: 'Agribusiness',
    title: "T'S Farm",
    description:
      'An integrated agricultural business concept connecting production, processing, packaging, distribution and direct customer delivery.',
    tags: ['Business Strategy', 'Product Development', 'Digital'],
    images: [],
    href: '/projects/ts-farm',
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
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white selection:bg-white selection:text-black">

      {/* NAVIGATION */}

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex h-16 max-w-[1380px] items-center justify-between rounded-full border border-white/[0.1] bg-[#090909]/85 px-4 shadow-2xl backdrop-blur-2xl sm:px-6">

          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black text-black">
              TJ
            </span>

            <span className="hidden text-sm font-medium text-white/80 sm:block">
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

      {/* HERO */}

      <section className="relative flex min-h-screen items-center">

        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />

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

        <div className="relative mx-auto w-full max-w-[1380px] px-5 pb-20 pt-36 sm:px-8 lg:px-12">

          <div className="max-w-6xl">

            <div className="mb-10 flex items-center gap-3">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/45">
                Web Developer · Digital Builder
              </span>

            </div>

            <h1 className="text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]">

              <span className="block">
                I build
              </span>

              <span className="block text-white/25">
                digital
              </span>

              <span className="block">
                experiences.
              </span>

            </h1>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div className="max-w-2xl">

                <p className="text-xl leading-8 text-white/50 sm:text-2xl sm:leading-9">
                  I&apos;m Thompson Joshua — a web developer and digital
                  builder creating modern websites and digital products
                  that turn ideas into real-world solutions.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <Link
                    href="#work"
                    className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
                  >
                    View my work

                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-white/10 px-7 py-4 text-sm text-white/60 transition hover:border-white/25 hover:text-white"
                  >
                    Start a project
                  </Link>

                </div>

              </div>

              <div className="hidden lg:block">

                <div className="flex items-center gap-5">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                      Based in
                    </p>

                    <p className="mt-2 text-sm text-white/60">
                      Nigeria
                    </p>
                  </div>

                  <div className="h-10 w-px bg-white/10" />

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                      Focus
                    </p>

                    <p className="mt-2 text-sm text-white/60">
                      Web & Digital
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-24 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/20">
            <span className="h-px w-12 bg-white/15" />
            Scroll to explore
          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="border-y border-white/[0.08]"
      >

        <div className="mx-auto max-w-[1380px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36">

          <div className="grid gap-16 lg:grid-cols-[0.35fr_1fr]">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
                01 — About
              </p>
            </div>

            <div>

              <h2 className="max-w-5xl text-3xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                I combine technology, design and business thinking to build
                digital experiences that
                <span className="text-white/25">
                  {' '}actually work.
                </span>
              </h2>

              <div className="mt-12 grid gap-10 md:grid-cols-2">

                <p className="text-base leading-8 text-white/40">
                  I enjoy taking ideas from concept to a functional,
                  polished digital product. My approach combines modern
                  development with practical design and business thinking.
                </p>

                <p className="text-base leading-8 text-white/40">
                  My work spans marketplaces, educational platforms and
                  business concepts — always with a focus on creating
                  experiences that are useful, clear and ready to grow.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WORK */}

      <section
        id="work"
        className="mx-auto max-w-[1380px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
              02 — Selected Work
            </p>

            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.075em] sm:text-7xl lg:text-8xl">
              Projects
              <span className="text-white/20">
                {' '}I&apos;ve built.
              </span>
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-7 text-white/35">
            A selection of websites and digital projects created with
            technology, design and business goals in mind.
          </p>

        </div>

        <div className="mt-20 space-y-36">

          {projects.map((project) => (

            <article key={project.number}>

              {/* PROJECT HEADER */}

              <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-end">

                <div>

                  <div className="mb-5 flex items-center gap-4">

                    <span className="text-xs text-white/25">
                      {project.number}
                    </span>

                    <span className="h-px w-10 bg-white/15" />

                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                      {project.type}
                    </span>

                  </div>

                  <h3 className="text-5xl font-semibold tracking-[-0.07em] sm:text-6xl lg:text-7xl">
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

              {/* SCREENSHOTS UNDER PROJECT NAME */}

              {project.images.length > 0 ? (

                <div className="mt-12 grid gap-4 md:grid-cols-3">

                  {project.images.map((image, index) => (

                    <Link
                      key={image}
                      href={project.href}
                      className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0c]"
                    >

                      <div className="relative aspect-[4/3]">

                        <Image
                          src={image}
                          alt={`${project.title} project screenshot ${index + 1}`}
                          fill
                          priority={project.number === '01'}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                        />

                        <div className="absolute inset-0 bg-black/5 transition group-hover:bg-transparent" />

                        <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-xl">
                          View project
                        </div>

                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/60 backdrop-blur-xl transition group-hover:bg-white group-hover:text-black">
                          ↗
                        </div>

                      </div>

                    </Link>

                  ))}

                </div>

              ) : (

                <Link
                  href={project.href}
                  className="group relative mt-12 block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0d0b]"
                >

                  <div className="relative aspect-[16/7]">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(120,170,110,0.14),transparent_45%)]" />

                    <div className="absolute left-[10%] top-[15%] h-40 w-40 rounded-full border border-white/[0.05] sm:h-64 sm:w-64" />

                    <div className="absolute bottom-[5%] right-[12%] h-52 w-52 rounded-full border border-white/[0.04] sm:h-80 sm:w-80" />

                    <div className="absolute inset-0 flex items-center justify-center">

                      <div className="text-center transition duration-500 group-hover:scale-105">

                        <p className="text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.08]">
                          T&apos;S FARM
                        </p>

                        <div className="mx-auto mt-5 h-px w-16 bg-white/20" />

                        <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-white/30">
                          Integrated Agribusiness
                        </p>

                      </div>

                    </div>

                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/60 backdrop-blur-xl transition group-hover:bg-white group-hover:text-black sm:right-7 sm:top-7">
                      ↗
                    </div>

                  </div>

                </Link>

              )}

              {/* PROJECT FOOTER */}

              <div className="mt-6 flex flex-col justify-between gap-5 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center">

                <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                  {project.type}
                </span>

                <Link
                  href={project.href}
                  className="group flex items-center gap-3 text-sm text-white/45 transition hover:text-white"
                >
                  Explore {project.title}

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CAPABILITIES */}

      <section className="border-y border-white/[0.08]">

        <div
          id="skills"
          className="mx-auto max-w-[1380px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
        >

          <div className="grid gap-16 lg:grid-cols-[0.35fr_1fr]">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
                03 — Capabilities
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.065em] sm:text-6xl">
                Building from
                <span className="text-white/20">
                  {' '}idea to execution.
                </span>
              </h2>

              <div className="mt-14 border-l border-white/[0.08]">

                <div className="border-b border-white/[0.08] px-6 py-8 sm:px-8">

                  <div className="flex justify-between gap-5">

                    <h3 className="text-xl font-medium">
                      Web Development
                    </h3>

                    <span className="text-sm text-white/20">
                      01
                    </span>

                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
                    Responsive websites and web applications built with
                    modern technologies, clean architecture and practical
                    user experiences.
                  </p>

                </div>

                <div className="border-b border-white/[0.08] px-6 py-8 sm:px-8">

                  <div className="flex justify-between gap-5">

                    <h3 className="text-xl font-medium">
                      UI / UX
                    </h3>

                    <span className="text-sm text-white/20">
                      02
                    </span>

                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
                    Interfaces designed to be clear, responsive and easy
                    for people to understand and use.
                  </p>

                </div>

                <div className="border-b border-white/[0.08] px-6 py-8 sm:px-8">

                  <div className="flex justify-between gap-5">

                    <h3 className="text-xl font-medium">
                      Digital Product Development
                    </h3>

                    <span className="text-sm text-white/20">
                      03
                    </span>

                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
                    Turning business ideas into practical digital products
                    that can be launched, tested and improved.
                  </p>

                </div>

              </div>

              <div className="mt-14">

                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                  Technology & Skills
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

      {/* CONTACT */}

      <section
        id="contact"
        className="relative overflow-hidden"
      >

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

        <div className="relative mx-auto max-w-[1380px] px-5 py-32 sm:px-8 lg:px-12 lg:py-44">

          <div className="max-w-5xl">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
              04 — Contact
            </p>

            <h2 className="mt-8 text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.08em]">

              Have an idea
              <br />

              <span className="text-white/20">
                worth building?
              </span>

            </h2>

            <p className="mt-10 max-w-xl text-base leading-8 text-white/40 sm:text-lg">
              Whether you&apos;re building a website, launching a digital
              product or developing a new business idea, let&apos;s talk.
            </p>

            <a
              href="mailto:hello@thompsonjoshua.com"
              className="group mt-10 inline-flex items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Start a conversation

              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/[0.08]">

        <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-12">

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
              href="#skills"
              className="text-xs text-white/25 transition hover:text-white"
            >
              Skills
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
