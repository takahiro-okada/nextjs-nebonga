export default function SideNav() {
  return (
    <aside className='w-1/4 border-r'>
      <h2 className='mb-4 text-xl'>Projects</h2>
      <ul className='space-y-4'>
        <li>
          <a href='#' className='hover:underline'>
            All
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Movies
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Company
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            NGO
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Administration
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Photography
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Personal
          </a>
        </li>
        {/* ... other links */}
      </ul>

      <h2 className='mb-4 mt-8 text-xl'>年別の月</h2>
      <ul className='space-y-4'>
        <li>
          <a href='#' className='hover:underline'>
            2023
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            2022
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            2021
          </a>
        </li>
        {/* ... other links */}
      </ul>

      <h2 className='mb-4 mt-8 text-xl'>Tags</h2>
      <ul className='flex flex-wrap space-x-4 space-y-2'>
        <li>
          <a href='#' className='hover:underline'>
            #Photo
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            #Africa
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            #Portfolio
          </a>
        </li>
        {/* ... other tags */}
      </ul>
    </aside>
  )
}
