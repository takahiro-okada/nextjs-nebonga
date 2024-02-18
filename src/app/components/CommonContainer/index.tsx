export default function CommonContainer({ children }: { children: React.ReactNode }) {
  return <div className='container relative mx-auto px-3'>{children}</div>
}
