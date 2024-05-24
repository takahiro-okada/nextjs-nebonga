type PaginationProps = {
  basePath: string
  currentPage: number
  totalPages: number
}

export default function Pagination({ basePath, currentPage, totalPages }: PaginationProps) {
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
    <nav aria-label='Page navigation' className='mt-7 flex justify-center'>
      <ul className='inline-flex h-10 justify-center gap-2 -space-x-px text-base'>
        {getPages().map((page, index) =>
          page === '...' ? (
            <li key={index} className='flex items-center justify-center px-2'>
              ...
            </li>
          ) : (
            <li key={page}>
              <a
                href={`/${basePath}/page/${page}`}
                className={`flex h-10 items-center justify-center border border-gray-300 px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === page ? 'border-gray-300 bg-grayLight' : ''
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
