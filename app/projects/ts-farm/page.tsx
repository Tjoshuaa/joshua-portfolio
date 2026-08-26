import Link from 'next/link'

const features = [
  'Catfish farming',
  'Poultry production',
  'Feed production',
  'Fish processing',
  'Smoked catfish',
  'Processed chicken',
  'Cold storage',
  'Farm-to-customer delivery',
  'Wholesale distribution',
  'Digital ordering',
]

const phases = [
  ['01', 'FARM', 'Production of fish, poultry and agricultural crops.'],
  ['02', 'FEED', 'Developing in-house feed production to support the farm.'],
  ['03', 'PROCESSING', 'Turning raw agricultural products into finished products.'],
  ['04', 'PACKAGING', 'Professional packaging designed for retail and wholesale.'],
  ['05', 'DISTRIBUTION', 'Supplying customers, restaurants, hotels and supermarkets.'],
]

const capabilities = [
  'Business Strategy',
  'Digital Commerce',
  'Brand Development',
  'Operations',
  'Marketing',
]

export default function TSFarmPage() {
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
              03 — Case Study
            </span>

            <span className="h-px w-12 bg-white/15" />

            <span className="text-xs uppercase tracking-[0.2em] text-white/30">
              Agribusiness
            </span>

          </div>

          <h1 className="mt-10 text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.8] tracking-[-0.09em]">
            T'S
            <br />
            <span className="text-white/25">
              FARM.
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg leading-8 text-white/45">
            An integrated agribusiness concept designed to connect
            production, processing, packaging, distribution and customers
            into one scalable agricultural value chain.
          </p>

        </div>

      </section>

      {/* HERO VISUAL */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-green-950 via-[#07110a] to-black md:min-h-[650px]">

          <div className="absolute left-[10%] top-[10%] h-64 w-64 rounded-full bg-emerald-500/[0.08] blur-[100px]" />

          <div className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-green-500/[0.05] blur-[120px]" />

          <div className="absolute left-[8%] top-[20%] h-52 w-52 rounded-full border border-emerald-400/[0.08]" />

          <div className="absolute right-[8%] top-[12%] h-80 w-80 rounded-full border border-white/[0.05]" />

          <div className="absolute bottom-[8%] left-[35%] h-64 w-64 rounded-full border border-white/[0.04]" />

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">

              <p className="text-[clamp(5rem,14vw,13rem)] font-bold leading-none tracking-[-0.11em] text-white/[0.06]">
                FARM
              </p>

              <div className="mx-auto mt-5 h-px w-24 bg-emerald-400/20" />

              <p className="mt-5 text-xs uppercase tracking-[0.5em] text-white/30">
                Farm · Feed · Process · Package · Distribute
              </p>

            </div>

          </div>

          <div className="absolute bottom-8 left-8 rounded-full border border-white/10 bg-black/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white/40 backdrop-blur-xl">
            Integrated Agribusiness
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
              Building an agricultural business beyond the farm.
            </h2>

            <p className="mt-10 max-w-3xl text-base leading-8 text-white/40">
              T'S Farm is structured around a vertically integrated
              agricultural model. Instead of stopping at production, the
              concept extends into feed production, processing, packaging,
              distribution and direct-to-customer sales.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/40">
              The long-term vision is to create a connected agricultural
              value chain capable of serving individuals, restaurants,
              hotels, supermarkets and wholesale customers.
            </p>

          </div>

        </div>

      </section>

      {/* VALUE CHAIN */}
      <section className="border-y border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

          <p className="text-xs uppercase tracking-[0.3em] text-white/25">
            02 — Value Chain
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
            One connected
            <br />
            agricultural system.
          </h2>

          <div className="mt-16 space-y-px">

            {phases.map(([number, title, description]) => (

              <div
                key={number}
                className="group grid gap-6 border-t border-white/10 py-8 transition hover:bg-white/[0.02] md:grid-cols-[80px_220px_1fr] md:items-center"
              >

                <span className="text-xs text-white/20">
                  {number}
                </span>

                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-white/35">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <p className="text-xs uppercase tracking-[0.3em] text-white/25">
          03 — Business Model
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
          Designed to scale.
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

      {/* ROLE */}
      <section className="border-y border-white/10">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 lg:px-10">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              My role
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em]">
              Business concept
              <br />
              development.
            </h2>

          </div>

          <div className="space-y-6 text-white/40">

            <p>Business model development</p>
            <p>Value-chain planning</p>
            <p>Market positioning</p>
            <p>Growth strategy</p>
            <p>Digital ordering concept</p>
            <p>Distribution planning</p>

          </div>

        </div>

      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">

        <p className="text-xs uppercase tracking-[0.3em] text-white/25">
          04 — Capabilities
        </p>

        <div className="mt-10 flex flex-wrap gap-3">

          {capabilities.map((capability) => (

            <span
              key={capability}
              className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/45"
            >
              {capability}
            </span>

          ))}

        </div>

      </section>

      {/* PROJECT NAVIGATION */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">

        <div className="grid gap-4 md:grid-cols-2">

          {/* PREVIOUS */}
          <Link
            href="/projects/pleasantville-academy"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:bg-white/[0.05] md:p-12"
          >

            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Previous project
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

              <span className="text-3xl transition-transform duration-300 group-hover:-translate-x-2">
                ←
              </span>

            </div>

          </Link>

          {/* ALL PROJECTS */}
          <Link
            href="/#work"
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
