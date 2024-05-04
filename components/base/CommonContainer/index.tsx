export default function CommonContainer({ children }: { children: React.ReactNode }) {
  return <div className='container relative mx-auto max-w-[1142px] px-6'>{children}</div>
}
