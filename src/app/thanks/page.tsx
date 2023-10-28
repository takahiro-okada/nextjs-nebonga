import Link from 'next/link'

export default function Thanks() {
  return (
    <main className='p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl mb-6 font-bold text-gray-800'>お問い合わせありがとうございました。</h1>

      <Link href='/' className='text-blue-500 underline'>
        トップページに戻る
      </Link>
    </main>
  )
}
