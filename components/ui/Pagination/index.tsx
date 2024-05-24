export default function Pagination({ currentPage, totalPages, basePath }) {
  const getPages = () => {
    let pages = []
    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, 4, '...', totalPages]
    } else if (currentPage > totalPages - 3) {
      pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    } else {
      pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
    }
    return pages
  }

  return (
    <nav aria-label='Page navigation' className='flex justify-center mt-7'>
      <ul className='inline-flex gap-2 justify-center -space-x-px text-base h-10'>
        {getPages().map((page, index) =>
          page === '...' ? (
            <li key={index} className='flex items-center justify-center px-2'>
              ...
            </li>
          ) : (
            <li key={page}>
              <a
                href={`/${basePath}/page/${page}`}
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === page ? 'bg-gray-300 border-gray-300' : ''
                }`}
              >
                {page}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
