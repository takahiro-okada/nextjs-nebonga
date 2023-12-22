type Props = {
  children: React.ReactNode
  className?: string
  href?: string
}

export function Button({ children, className, href }: Props) {
  return (
    <a className={`inline-block w-full max-w-xs rounded-full border-2 bg-black px-10 py-3 text-white`} href={href}>
      {children}
    </a>
  )
}
