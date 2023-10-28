'use client'

export default function Contact() {
  return (
    <main className='p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl mb-6 font-bold text-gray-800'>Contact</h1>

      <form name='contact' method='POST' data-netlify='true' className='w-full max-w-md' netlify>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>
            お名前（必須）
          </label>
          <input
            name='name'
            type='text'
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
            メールアドレス（必須）
          </label>
          <input
            name='email'
            type='email'
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='content' className='block text-gray-700 text-sm font-bold mb-2'>
            お問い合わせ内容
          </label>
          <textarea
            name='content'
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32'
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          送信する
        </button>
      </form>
    </main>
  )
}
