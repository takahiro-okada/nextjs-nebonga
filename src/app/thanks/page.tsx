import Link from 'next/link'

export default function Thanks() {
  return (
    <main className='mt-32 flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6'>
      <h1 className='mb-6 text-3xl font-bold text-gray-800'>お問い合わせありがとうございました。</h1>

      <Link href='/' className='text-blue-500 underline'>
        トップページに戻る
      </Link>
    </main>
  )
}
