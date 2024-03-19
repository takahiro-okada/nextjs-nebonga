'use client'
export default function PostDetail() {
  return (
    <main>
      <section>
        <h1>hoge</h1>
        <article className='container prose mx-auto px-3 lg:prose-xl'>
          <div className='mt-8 rounded-xl bg-slate-300 p-7'>
            <p>まずはお気軽にお問い合わせください</p>
            <div className='grid grid-cols-2 gap-5 text-center'>
              <a href='https://lin.ee/6iXVJ5l' className='rounded-full bg-yellow-400 px-4 py-2 font-bold text-white'>
                LINEからお問い合わせ
              </a>
              <a href='https://lin.ee/6iXVJ5l' className='rounded-full bg-yellow-400 px-4 py-2 font-bold text-white'>
                お問い合わせ
              </a>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-2 gap-4'>
            <div className='h-28 bg-slate-300 px-4 py-2 text-left'>
              <a href='#' className=''>
                <div className='text-xs'>2023.10.11</div>
                <p className='text-xs'>
                  ここには投稿のタイトルが入りますここには投稿のタイトルが入りますここには投稿のタイトルが入ります
                </p>
              </a>
            </div>
            <div className='h-28 bg-slate-300 px-4 py-2 text-right'>
              <a href='#' className=''>
                <div className='text-xs'>2023.10.11</div>
                <p className='text-xs'>
                  ここには投稿のタイトルが入りますここには投稿のタイトルが入りますここには投稿のタイトルが入ります
                </p>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
