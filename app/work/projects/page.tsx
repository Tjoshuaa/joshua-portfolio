import Image from 'next/image'
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
    image: '/projects/IMG_1985.jpeg',
  },
  {
    number: '02',
    category: 'Education Platform',
    title: 'Pleasantville Academy',
    description:
      'A polished digital experience designed to communicate an academy’s programmes, facilities, admissions and educational experience.',
    href: '/projects/pleasantville-academy',
    external: 'https://pleasantville-academy.vercel.app/',
    image: '/projects/IMG_1987.png',
  },
  {
    number: '03',
    category: 'Agribusiness',
    title: "T'S Farm",
    description:
      'An integrated agribusiness concept connecting production, processing, packaging, distribution and customers.',
    href: '/projects/ts-farm',
    external: null,
    image: null,
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
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-32 lg:pt-36">

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

        <div className="space-y-28">

          {projects.map((project) => (

            <article key={project.number}>

              <Link
                href={project.href}
                className="group block"
              >

                <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] md:min-h-[620px]">

                  {/* REAL SCREENSHOT */}
                  {project.image ? (

                    <Image
                      src={project.image}
                      alt={`${project.title} website screenshot`}
                      fill
                      priority={project.number === '01'}
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                    />

                  ) : (

                    /* T'S FARM — NO SCREENSHOT YET */
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

                  {/* SCREENSHOT OVERLAY */}
                  {project.image && (
                    <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/5" />
                  )}

                  {/* NUMBER */}
                  <div className="absolute left-7 top-7 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs text-white/65 backdrop-blur-xl">
                    {project.number}
                  </div>

                  {/* CATEGORY */}
                  <div className="absolute bottom-7 left-7 rounded-full border border-white/15 bg-black/50 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white/65 backdrop-blur-xl">
                    {project.category}
                  </div>

                  {/* ARROW */}
                  <div className="absolute bottom-7 right-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/50 text-xl text-white/70 backdrop-blur-xl transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                    ↗
                  </div>

                </div>

              </Link>

              {/* INFO */}
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

                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/45 transition hover:border-white/25 hover:text-white"
                      >
                        Live website ↗
                      </a>
                    )}

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CONTACT CTA */}
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

            <a
              href="mailto:hello@thompsonjoshua.com"
              className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Start a conversation
            </a>

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
            Portfolio ↑
          </Link>

        </div>

      </footer>

    </main>
  )
}
