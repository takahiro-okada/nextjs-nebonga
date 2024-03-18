type Props = {
  buttonColor?: string
  children: React.ReactNode
  href?: string
}

export function Button({ buttonColor = 'bg-black', children, href }: Props) {
  return (
    <a
      className={`inline-block w-full max-w-xs whitespace-nowrap rounded-full px-10 py-3 text-center text-white ${buttonColor}`}
      href={href}
    >
      {children}
    </a>
  )
}
