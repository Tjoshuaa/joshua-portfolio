import Link from 'next/link'

const features = [
  'Marine marketplace',
  'Boat catalogue',
  'Custom boat builder',
  'Marine engine catalogue',
  'Product management',
  'Customer enquiries',
  'Responsive mobile experience',
]

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'Vercel',
]

export default function DataMarinePage() {
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
              01 — Case Study
            </span>

            <span className="h-px w-12 bg-white/15" />

            <span className="text-xs uppercase tracking-[0.2em] text-white/30">
              Marine Marketplace
            </span>

          </div>

          <h1 className="mt-10 text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
            Data
            <br />
            <span className="text-white/25">
              Marine.
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg leading-8 text-white/45">
            A modern digital marine marketplace designed to connect
            customers with boats, marine engines, equipment and custom
            boat-building solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://www.datamarine.ng/"
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

      {/* VISUAL */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-950 to-black md:min-h-[620px]">

          <div className="absolute inset-0">

            <div className="absolute left-[10%] top-[15%] h-48 w-48 rounded-full border border-white/10" />

            <div className="absolute right-[8%] top-[20%] h-72 w-72 rounded-full border border-white/[0.06]" />

            <div className="absolute bottom-[10%] left-[35%] h-64 w-64 rounded-full border border-white/[0.05]" />

          </div>

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">

              <p className="text-[clamp(4rem,12vw,11rem)] font-bold tracking-[-0.1em] text-white/[0.07]">
                DATA
              </p>

              <p className="mt-[-10px] text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.1em] text-white/[0.05]">
                MARINE
              </p>

            </div>

          </div>

          <div className="absolute bottom-8 left-8 rounded-full border border-white/10 bg-black/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white/40 backdrop-blur-xl">
            Marine Marketplace
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
              Turning a marine business into a modern digital marketplace.
            </h2>

            <p className="mt-10 max-w-3xl text-base leading-8 text-white/40">
              Data Marine needed a digital platform capable of presenting
              marine products and services in a professional, easy-to-use
              experience.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/40">
              The result is a responsive experience where customers can
              explore marine products, discover boats and engines, and
              interact with the custom boat-building process.
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
              Strategy to execution.
            </h2>

          </div>

          <div className="space-y-6 text-white/40">

            <p>Business concept development</p>
            <p>Product architecture</p>
            <p>Website development</p>
            <p>UI implementation</p>
            <p>Database and content management</p>
            <p>Deployment and production setup</p>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <p className="text-xs uppercase tracking-[0.3em] text-white/25">
          02 — Features
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
          Built for real use.
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

      {/* PROJECT NAVIGATION */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <div className="grid gap-4 md:grid-cols-2">

          {/* NEXT */}
          <Link
            href="/projects/pleasantville-academy"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:bg-white/[0.05] md:p-12"
          >

            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Next project
            </p>

            <div className="mt-12 flex items-end justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Education Platform
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                  Pleasantville
                </h3>

              </div>

              <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

            </div>

          </Link>

          {/* HOME */}
          <Link
            href="/"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:bg-white/[0.05] md:p-12"
          >

            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Portfolio
            </p>

            <div className="mt-12 flex items-end justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Selected work
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                  All projects
                </h3>

              </div>

              <span className="text-3xl transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>

            </div>

          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

          <p className="text-sm text-white/25">
            © 2026 Thompson Joshua.
          </p>

        </div>

      </footer>

    </main>
  )
}
