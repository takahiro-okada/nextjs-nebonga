import Image from 'next/image'

export default function LessonWorks() {
  return (
    <>
      <h2 className='text-3xl font-bold'>講演実績</h2>
      <p className='mt-6 leading-7'>
        対象：小学生～大学生 / 企業・団体向け
        <br />
        内容：JICA海外協力隊体験談・国際協力・異文化理解・SDGs教育・多文化共生・キャリア教育など
        <br />
        形態：対面/オンライン
        <br />
      </p>
      <p className='mt-6'>
        150件を超える講演実績のもと、講師を育成するアドバイザーもしておりますので、ご自身のプレゼンテーションにお悩みがある方も、お気軽にご相談ください。ご依頼に関しましては、お問い合わせフォームよりご連絡ください。
      </p>

      <ul className='mt-12 grid gap-5 md:grid-cols-4 '>
        <li>
          <Image src='/images/lecture01.jpg' className='w-full' alt='スクリーンを見る学生' width={268} height={144} />
        </li>
        <li>
          <Image
            src='/images/lecture02.jpg'
            className='w-full'
            alt='学校で講演をしている様子'
            width={268}
            height={144}
          />
        </li>
        <li>
          <Image src='/images/lecture03.jpg' className='w-full' alt='講演の様子' width={268} height={144} />
        </li>
        <li>
          <Image
            src='/images/lecture04.jpg'
            className='w-full'
            alt='JICA東京センターでの講演のチラシ'
            width={268}
            height={144}
          />
        </li>
      </ul>
    </>
  )
}
