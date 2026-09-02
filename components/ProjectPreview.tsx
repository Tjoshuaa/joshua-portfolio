type ProjectPreviewProps = {
  type: 'marine' | 'education' | 'farm'
  title: string
  url: string
}

export default function ProjectPreview({
  title,
  url,
}: ProjectPreviewProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="flex items-center justify-between border-t border-white/10 py-5">
        <div>
          <p className="text-sm font-medium text-white transition-colors group-hover:text-white/70">
            {title}
          </p>
          <p className="mt-1 text-xs text-white/35">
            View live project
          </p>
        </div>

        <span className="text-lg text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
          ↗
        </span>
      </div>
    </a>
  )
}
