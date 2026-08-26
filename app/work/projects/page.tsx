import Link from 'next/link'

const projects = [
  {
    number: '01',
    category: 'Marine Marketplace',
    title: 'Data Marine',
    description:
      'A modern marine marketplace connecting customers with boats, marine engines, equipment and custom boat-building solutions.',
    href: '/projects/data-marine',
    external: 'https://www.datamarine.ng/',
    accent: 'from-slate-800 via-slate-950 to-black',
    label: 'MARINE',
  },
  {
    number: '02',
    category: 'Education Platform',
    title: 'Pleasantville Academy',
    description:
      'A polished digital presence designed to communicate an academy’s programmes, facilities, admissions and educational experience.',
    href: '/projects/pleasantville-academy',
    external: 'https://pleasantville-academy.vercel.app/',
    accent: 'from-amber-950 via-orange-950/30 to-black',
    label: 'ACADEMY',
  },
  {
    number: '03',
    category: 'Agribusiness',
    title: "T'S Farm",
    description:
      'An integrated agribusiness concept connecting farming, feed production, processing, packaging, distribution and customers.',
    href: '/projects/ts-farm',
    accent: 'from-green-950 via-[#07110a] to-black',
    label: 'FARM',
  },
]

export default function WorkProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          <Link
            href="/"
            className="text-xl font-bold tracking-[-0.07em]"
          >
            TJ<span className="text-white/25">.</span>
          </Link>

          <div className="flex items-center gap-3">

            <Link
              href="/"
              className="hidden rounded-full px-5 py-2.5 text-sm text-white/40 transition hover:text-white sm:block"
            >
              Home
            </Link>

            <Link
              href="/#contact"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:bg-white hover:text-black"
            >
              Contact
            </Link>

          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-36 lg:pt-36">

        <div className="max-w-5xl">

          <div className="flex items-center gap-3">

            <span className="text-xs uppercase tracking-[0.3em] text-white/30">
              Selected Work
            </span>

            <span className="h-px w-12 bg-white/15" />

            <span className="text-xs text-white/20">
              03 PROJECTS
            </span>

          </div>

          <h1 className="mt-10 text-[clamp(4.5rem,12vw,11rem)] font-semibold leading-[0.78] tracking-[-0.095em]">
            Selected
            <br />
            <span className="text-white/20">
              work.
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg leading-8 text-white/40">
            A selection of digital products, websites and business concepts
            created across technology, education, marine commerce and
            agribusiness.
          </p>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="space-y-24">

          {projects.map((project) => (

            <article key={project.number}>

              {/* IMAGE / VISUAL */}
              <Link
                href={project.href}
                className="group block"
              >

                <div
                  className={`relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} md:min-h-[620px]`}
                >

                  {/* Decorative circles */}
                  <div className="absolute left-[8%] top-[12%] h-48 w-48 rounded-full border border-white/[0.07] transition duration-700 group-hover:scale-125" />

                  <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full border border-white/[0.05] transition duration-700 group-hover:scale-110" />

                  <div className="absolute bottom-[8%] left-[32%] h-64 w-64 rounded-full border border-white/[0.04]" />

                  {/* Glow */}
                  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl transition duration-700 group-hover:scale-150" />

                  {/* Typography */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="text-center transition duration-700 group-hover:scale-105">

                      <p className="text-[clamp(4rem,13vw,12rem)] font-bold leading-none tracking-[-0.11em] text-white/[0.065]">
                        {project.label}
                      </p>

                      <div className="mx-auto mt-6 h-px w-20 bg-white/15" />

                      <p className="mt-5 text-xs uppercase tracking-[0.45em] text-white/25">
                        {project.category}
                      </p>

                    </div>

                  </div>

                  {/* Number */}
                  <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/35 backdrop-blur-xl">
                    {project.number}
                  </div>

                  {/* View */}
                  <div className="absolute bottom-7 right-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/30 text-xl text-white/60 backdrop-blur-xl transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                    ↗
                  </div>

                </div>

              </Link>

              {/* PROJECT INFO */}
              <div className="grid gap-8 px-2 pt-8 md:grid-cols-[0.8fr_1.2fr]">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
                    {project.title}
                  </h2>

                </div>

                <div>

                  <p className="max-w-xl text-base leading-8 text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">

                    <Link
                      href={project.href}
                      className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.03]"
                    >
                      View case study
                    </Link>

                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/45 transition hover:border-white/25 hover:text-white"
                    >
                      Live website ↗
                    </a>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-36 lg:px-10"
      >

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] px-8 py-20 text-center md:px-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

          <div className="relative">

            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              Have a project?
            </p>

            <h2 className="mx-auto mt-7 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Let's build something
              <span className="text-white/20">
                {' '}remarkable.
              </span>
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="mailto:hello@thompsonjoshua.com"
                className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
              >
                Start a conversation
              </a>

              <Link
                href="/"
                className="rounded-full border border-white/10 px-7 py-4 text-sm text-white/50 transition hover:bg-white/[0.05] hover:text-white"
              >
                Back home
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 lg:px-10">

          <p className="text-sm text-white/25">
            © 2026 Thompson Joshua.
          </p>

          <Link
            href="/"
            className="text-sm text-white/30 transition hover:text-white"
          >
            TJ. ↑
          </Link>

        </div>

      </footer>

    </main>
  )
}
