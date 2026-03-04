import Image from "next/image"

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/icons/brand-mark-ui.png"
      alt="Mujer Alma en Calma"
      width={512}
      height={512}
      className={className}
      priority
    />
  )
}
