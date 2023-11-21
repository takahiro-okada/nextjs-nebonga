type Props = {
  children: React.ReactNode
  className?: string
  href?: string
}

export function Button({ children, className, href }: Props) {
  return (
    <a className={`inline-block rounded-full border-2 border-gray-400 bg-white px-10 py-2`} href={href}>
      {children}
    </a>
  )
}
