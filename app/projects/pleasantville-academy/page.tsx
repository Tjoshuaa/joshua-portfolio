import Link from 'next/link'

const features = [
  'School information',
  'Academic programmes',
  'Admissions information',
  'Facilities showcase',
  'Gallery',
  'Responsive mobile design',
  'Contact experience',
]

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Vercel',
]

export default function PleasantvilleAcademyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* NAV */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-[-0.07em]"
          >
            TJ<span className="text-white/25">.</span>
          </Link>

          <Link
            href="/#work"
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:bg-white hover:text-black"
          >
            ← Back to work
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="max-w-5xl">

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-white/30">
              02 — Case Study
            </span>

            <span className="h-px w-12 bg-white/15" />

            <span className="text-xs uppercase tracking-[0.2em] text-white/30">
              Education Platform
            </span>
          </div>

          <h1 className="mt-10 text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
            Pleasantville
            <br />
            <span className="text-white/25">
              Academy.
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg leading-8 text-white/45">
            A modern digital presence created to communicate an academy's
            identity, programmes, facilities, admissions and learning
            environment through a polished online experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://pleasantville-academy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Visit live website ↗
            </a>

            <span className="rounded-full border border-white/10 px-6 py-4 text-sm text-white/40">
              2026
            </span>

          </div>
        </div>
      </section>

      {/* PROJECT VISUAL */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-950 via-orange-950/30 to-black md:min-h-[620px]">

          {/* Decorative geometry */}
          <div className="absolute inset-0">
            <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute right-[10%] top-[12%] h-72 w-72 rounded-full border border-white/[0.06]" />
            <div className="absolute bottom-[5%] left-[30%] h-80 w-80 rounded-full border border-white/[0.05]" />
          </div>

          {/* Browser */}
          <div className="absolute left-[7%] right-[7%] top-[12%] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">

            <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

              <div className="ml-3 flex-1 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] text-white/25">
                pleasantville-academy.vercel.app
              </div>
            </div>

            <div className="relative h-[280px] md:h-[390px]">

              <div className="absolute left-8 top-8 md:left-12 md:top-12">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                  Education · Excellence · Future
                </p>

                <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
                  Pleasantville
                  <br />
                  <span className="text-white/30">
                    Academy
                  </span>
                </h2>

                <div className="mt-7 h-2 w-24 rounded-full bg-white/20" />
                <div className="mt-3 h-2 w-40 rounded-full bg-white/10" />
              </div>

              <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full border border-white/10 md:h-44 md:w-44" />

            </div>
          </div>

          <div className="absolute bottom-8 left-8 rounded-full border border-white/10 bg-black/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white/40 backdrop-blur-xl">
            Education Platform
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              01 — Overview
            </p>
          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.055em] md:text-6xl">
              Giving an educational institution a stronger digital identity.
            </h2>

            <p className="mt-10 max-w-3xl text-base leading-8 text-white/40">
              Pleasantville Academy needed a modern web presence capable of
              presenting the school clearly to parents, students and visitors.
              The website brings the institution's key information into one
              accessible digital experience.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/40">
              The experience focuses on clear navigation, strong visual
              presentation and responsive design so visitors can explore the
              academy from both desktop and mobile devices.
            </p>

          </div>
        </div>
      </section>

      {/* ROLE */}
      <section className="border-y border-white/10">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 lg:px-10">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              My role
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em]">
              From concept to launch.
            </h2>
          </div>

          <div className="space-y-6 text-white/40">
            <p>Website planning</p>
            <p>Information architecture</p>
            <p>UI implementation</p>
            <p>Responsive development</p>
            <p>Content presentation</p>
            <p>Production deployment</p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <p className="text-xs uppercase tracking-[0.3em] text-white/25">
          02 — Features
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
          Designed around the visitor.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">

          {features.map((feature, index) => (
            <div
              key={feature}
              className="bg-[#050505] p-8 transition hover:bg-white/[0.04]"
            >
              <span className="text-xs text-white/20">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-8 text-lg font-medium">
                {feature}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-y border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <p className="text-xs uppercase tracking-[0.3em] text-white/25">
            03 — Technology
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/45"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* LIVE PROJECT CTA */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-16 lg:p-24">

          <p className="text-xs uppercase tracking-[0.3em] text-white/25">
            Explore the project
          </p>

          <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-7xl">
            See Pleasantville
            <br />
            <span className="text-white/25">
              in action.
            </span>
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://pleasantville-academy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Visit live website ↗
            </a>

            <Link
              href="/projects/data-marine"
              className="rounded-full border border-white/15 px-7 py-4 text-sm text-white/60 transition hover:bg-white hover:text-black"
            >
              ← Previous project
            </Link>

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
