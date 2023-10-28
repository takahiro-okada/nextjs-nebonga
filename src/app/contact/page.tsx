'use client'

export default function Contact() {
  return (
    <main class='p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 class='text-3xl mb-6 font-bold text-gray-800'>Contact</h1>

      <form name='contact' method='POST' data-netlify='true' class='w-full max-w-md'>
        <div class='mb-4'>
          <label htmlFor='name' class='block text-gray-700 text-sm font-bold mb-2'>
            お名前（必須）
          </label>
          <input
            name='name'
            type='text'
            required
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div class='mb-4'>
          <label htmlFor='email' class='block text-gray-700 text-sm font-bold mb-2'>
            メールアドレス（必須）
          </label>
          <input
            name='email'
            type='email'
            required
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div class='mb-4'>
          <label htmlFor='content' class='block text-gray-700 text-sm font-bold mb-2'>
            お問い合わせ内容
          </label>
          <textarea
            name='content'
            required
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32'
          ></textarea>
        </div>
        <button
          type='submit'
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          送信する
        </button>
      </form>
    </main>
  )
}
