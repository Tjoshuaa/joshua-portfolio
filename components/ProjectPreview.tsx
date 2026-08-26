type ProjectPreviewProps = {
  type: 'marine' | 'education' | 'farm'
  title: string
  url: string
}

export default function ProjectPreview({
  type,
  title,
  url,
}: ProjectPreviewProps) {
  const themes = {
    marine: {
      label: 'MARINE',
      sublabel: 'Marine Marketplace',
      background:
        'bg-gradient-to-br from-slate-900 via-slate-950 to-black',
    },
    education: {
      label: 'ACADEMY',
      sublabel: 'Education Platform',
      background:
        'bg-gradient-to-br from-amber-950 via-orange-950/40 to-black',
    },
    farm: {
      label: 'FARM',
      sublabel: 'Agribusiness',
      background:
        'bg-gradient-to-br from-emerald-950 via-green-950/40 to-black',
    },
  }

  const theme = themes[type]

  return (
    <div
      className={`relative min-h-[360px] overflow-hidden ${theme.background} md:min-h-[460px]`}
    >
      {/* Browser bar */}
      <div className="absolute left-6 right-6 top-6 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">
        <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

          <div className="ml-3 flex-1 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] text-white/25">
            {url.replace('https://', '').replace('www.', '')}
          </div>
        </div>

        {/* Fake website preview */}
        <div className="relative h-[270px] overflow-hidden md:h-[360px]">
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute left-8 top-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              {theme.sublabel}
            </p>

            <h3 className="mt-5 max-w-sm text-4xl font-bold tracking-[-0.07em] text-white/90 md:text-5xl">
              {title}
            </h3>

            <div className="mt-6 h-2 w-24 rounded-full bg-white/20" />
            <div className="mt-3 h-2 w-40 rounded-full bg-white/10" />
          </div>

          <div className="absolute bottom-[-60px] right-[-30px] h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute bottom-[-20px] right-[70px] h-32 w-32 rounded-full border border-white/10" />

          <div className="absolute bottom-7 left-8 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/40 backdrop-blur-md">
            {theme.label}
          </div>
        </div>
      </div>

      {/* Visit button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute bottom-7 right-7 z-10 flex items-center gap-3 rounded-full border border-white/15 bg-black/60 px-5 py-3 text-xs font-medium text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black"
      >
        Visit live site
        <span className="transition-transform group-hover:translate-x-1">
          ↗
        </span>
      </a>
    </div>
  )
}
