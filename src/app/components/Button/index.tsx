type Props = {
  children: React.ReactNode
  buttonColor?: string
  href?: string
}

export function Button({ children, buttonColor = 'bg-black', href }: Props) {
  return (
    <a
      className={`whitespace-nowrap inline-block w-full max-w-xs rounded-full text-center px-10 py-3 text-white ${buttonColor}`}
      href={href}
    >
      {children}
    </a>
  )
}
