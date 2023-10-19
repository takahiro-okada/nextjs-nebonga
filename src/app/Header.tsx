export default function Header() {
  return (
    <header
      className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
      role='banner'
    >
      <div className='px-4 lg:px-8 flex items-center justify-between'>
        <div className='flex items-center'>
          <a href='/' className='font-semibold text-xl tracking-tight'>
            Hirokawa Works
          </a>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-row-reverse items-center'>
            <a href='/about' className='text-black hover:underline mx-4 lg:mx-6'>
              About
            </a>
            <a href='/contact' className='text-black hover:underline mx-4 lg:mx-6'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
