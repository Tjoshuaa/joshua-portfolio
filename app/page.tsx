import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    number: '01',
    type: 'Marine Marketplace',
    title: 'Data Marine',
    description:
      'A modern marine marketplace for boats, marine engines, equipment and custom boat-building solutions.',
    href: '/projects/data-marine',
    image: '/projects/IMG_1985.jpeg',
  },
  {
    number: '02',
    type: 'Education Platform',
    title: 'Pleasantville Academy',
    description:
      'A modern educational website designed to communicate programmes, facilities, admissions and the academy experience.',
    href: '/projects/pleasantville-academy',
    image: '/projects/IMG_1988.png',
  },
  {
    number: '03',
    type: 'Agribusiness',
    title: "T'S Farm",
    description:
      'An integrated agricultural business concept connecting production, processing, packaging and distribution.',
    href: '/projects/ts-farm',
    image: null,
  },
]

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'UI/UX',
  'Business Strategy',
  'Product Development',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <nav className="border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

            <Link
              href="/"
              className="text-xl font-bold tracking-[-0.08em]"
            >
              TJ<span className="text-white/25">.</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="#about"
                className="text-sm text-white/40 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/work/projects"
                className="text-sm text-white/40 transition hover:text-white"
              >
                Work
              </Link>

              <Link
                href="#skills"
                className="text-sm text-white/40 transition hover:text-white"
              >
                Skills
              </Link>

              <Link
                href="#contact"
                className="text-sm text-white/40 transition hover:text-white"
              >
                Contact
              </Link>
            </div>

            <Link
              href="#contact"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:bg-white hover:text-black"
            >
              Let's talk
            </Link>

          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">

        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-white/[0.025] blur-3xl" />

        <div className="absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">

          <div className="max-w-6xl">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white/60" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/35">
                Developer · Builder · Strategist
              </span>
            </div>

            <h1 className="mt-10 text-[clamp(4.5rem,12vw,12rem)] font-semibold leading-[0.76] tracking-[-0.1em]">
              I build
              <br />
              <span className="text-white/20">digital</span>
              <br />
              experiences.
            </h1>

            <div className="mt-14 flex flex-col justify-between gap-10 md:flex-row md:items-end">

              <p className="max-w-xl text-lg leading-8 text-white/40">
                I'm Thompson Joshua — a developer and digital builder
                creating modern websites, digital products and business
                experiences that turn ideas into real-world solutions.
              </p>

              <Link
                href="/work/projects"
                className="group flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
              >
                Explore my work

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/10"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-[0.6fr_1.4fr] lg:px-10">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              01 — About
            </p>
          </div>

          <div>

            <h2 className="max-w-5xl text-4xl font-medium leading-tight tracking-[-0.06em] md:text-6xl">
              I combine technology, design and business thinking to build
              things that actually work.
            </h2>

            <div className="mt-10 grid gap-8 text-base leading-8 text-white/40 md:grid-cols-2">

              <p>
                My work sits between software development and business.
                I enjoy taking an idea from concept and turning it into a
                usable digital product.
              </p>

              <p>
                From marketplaces and educational websites to agricultural
                business concepts, I focus on creating experiences that are
                useful, clear and built to grow.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              02 — Selected Work
            </p>

            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.07em] md:text-7xl">
              Things I've
              <br />
              <span className="text-white/20">
                built.
              </span>
            </h2>

          </div>

          <Link
            href="/work/projects"
            className="group flex w-fit items-center gap-3 text-sm text-white/40 transition hover:text-white"
          >
            View all projects

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

        <div className="mt-20 space-y-24">

          {projects.map((project) => (

            <article key={project.number}>

              <Link
                href={project.href}
                className="group block"
              >

                <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] md:min-h-[560px]">

                  {/* REAL SCREENSHOT */}
                  {project.image ? (

                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      priority={project.number === '01'}
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                    />

                  ) : (

                    /* T'S FARM */
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-[#07110a] to-black" />

                      <div className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full border border-emerald-400/[0.08] transition duration-700 group-hover:scale-125" />

                      <div className="absolute right-[8%] top-[15%] h-80 w-80 rounded-full border border-white/[0.05] transition duration-700 group-hover:scale-110" />

                      <div className="absolute bottom-[8%] left-[35%] h-64 w-64 rounded-full border border-white/[0.04]" />

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="text-center transition duration-700 group-hover:scale-105">

                          <p className="text-[clamp(5rem,14vw,13rem)] font-bold leading-none tracking-[-0.11em] text-white/[0.06]">
                            FARM
                          </p>

                          <div className="mx-auto mt-6 h-px w-24 bg-emerald-400/20" />

                          <p className="mt-5 text-xs uppercase tracking-[0.5em] text-white/30">
                            Integrated Agribusiness
                          </p>

                        </div>

                      </div>
                    </>

                  )}

                  {/* OVERLAY */}
                  {project.image && (
                    <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/5" />
                  )}

                  {/* NUMBER */}
                  <div className="absolute left-7 top-7 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs text-white/65 backdrop-blur-xl">
                    {project.number}
                  </div>

                  {/* CATEGORY */}
                  <div className="absolute bottom-7 left-7 rounded-full border border-white/15 bg-black/50 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white/65 backdrop-blur-xl">
                    {project.type}
                  </div>

                  {/* ARROW */}
                  <div className="absolute bottom-7 right-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/50 text-xl text-white/70 backdrop-blur-xl transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                    ↗
                  </div>

                </div>

              </Link>

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    {project.title}
                  </h3>

                </div>

                <p className="max-w-xl text-sm leading-7 text-white/35">
                  {project.description}
                </p>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-20 text-center">

          <Link
            href="/work/projects"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm text-white/50 transition hover:bg-white hover:text-black"
          >
            Explore all projects
            <span>→</span>
          </Link>

        </div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-white/10"
      >

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <p className="text-xs uppercase tracking-[0.3em] text-white/25">
            03 — Skills
          </p>

          <h2 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.07em] md:text-7xl">
            Tools I use to
            <br />
            <span className="text-white/20">
              build.
            </span>
          </h2>

          <div className="mt-16 flex flex-wrap gap-3">

            {skills.map((skill) => (

              <span
                key={skill}
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/40 transition hover:border-white/25 hover:text-white"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-24 text-center md:px-16">

          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative">

            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              04 — Contact
            </p>

            <h2 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.08em] md:text-8xl">
              Have an idea?
              <br />
              <span className="text-white/20">
                Let's build it.
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-xl text-base leading-7 text-white/35">
              Whether you're building a website, launching a digital
              product or developing a new business idea, I'd love to hear
              about it.
            </p>

            <a
              href="mailto:hello@thompsonjoshua.com"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Start a conversation
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 sm:flex-row sm:items-center lg:px-10">

          <p className="text-sm text-white/25">
            © 2026 Thompson Joshua.
          </p>

          <div className="flex gap-6">

            <Link
              href="/work/projects"
              className="text-sm text-white/25 transition hover:text-white"
            >
              Work
            </Link>

            <a
              href="mailto:hello@thompsonjoshua.com"
              className="text-sm text-white/25 transition hover:text-white"
            >
              Email
            </a>

          </div>

        </div>

      </footer>

    </main>
  )
}
