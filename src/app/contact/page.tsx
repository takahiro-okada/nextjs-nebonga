'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import CommonContainer from '@/src/app/components/CommonContainer'
import PageTitle from '@/src/app/components/PageTItle'

export default function ContactForm() {
  const { handleSubmit, register } = useForm() // 'register' and 'handleSubmit' are swapped

  const onSubmit = (data: any) => {
    data['form-name'] = 'contact'
    const params = new URLSearchParams(data)
    axios({
      data: params.toString(), // 'data' moved up
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // 'headers' moved down
      method: 'POST', // 'method' moved down
      url: '/',
    })
      .then(() => {
        window.location.href = '/thanks'
      })
      .catch((error) => {
        console.error('Submission failed:', error)
      })
  }

  return (
    <main className='mt-32'>
      <CommonContainer>
        <section>
          <PageTitle title='Contact' subtitle='写真撮影、映像制作等のご依頼・ご相談窓口です。' />
          <div className='mt-11 md:mt-28 md:flex'>
            <div className='md:w-1/2'>
              <h3 className='text-2xl font-bold md:text-3xl'>フォームからのお問い合わせ</h3>
              <p className='mt-6'>
                お手数ですが、右の項目をご記入の上「同意して送信する」ボタンを押してください。
                詳しくご記入いただけますと、ご契約までがスムーズになると思いますので、よろしくお願いいたします。
              </p>
              <p className='mt-7 text-sm'>※3営業日以内に担当者よりご連絡させていただきます</p>
            </div>
            <div className='mt-8 md:ml-24 md:mt-0 md:w-1/2'>
              <form onSubmit={handleSubmit(onSubmit)} data-netlify='true' data-netlify-honeypot='bot-field'>
                <div className='mb-5'>
                  <label className='mb-2 block font-medium text-gray-900'>お名前 Name</label>
                  <input
                    {...register('form-name')}
                    className='block w-full rounded-lg  bg-[#F6F6F6] p-2.5 text-gray-900'
                  />
                </div>
                <div className='mb-5'>
                  <label className='mb-2 block font-medium text-gray-900'>メールアドレス Email</label>
                  <input {...register('email')} className='block w-full rounded-lg  bg-[#F6F6F6] p-2.5 text-gray-900' />
                </div>

                <div className='mb-5'>
                  <label className='mb-2 block font-medium text-gray-900'>ご相談内容 Subject</label>
                  <input
                    {...register('subject')}
                    className='block w-full rounded-lg  bg-[#F6F6F6] p-2.5 text-gray-900'
                  />
                </div>

                <div className='mb-5'>
                  <label className='mb-2 block font-medium text-gray-900'>
                    ご相談の詳細について Whad do you want ask?
                  </label>
                  <textarea
                    {...register('message')}
                    className='block min-h-48 w-full  rounded-lg bg-[#F6F6F6] p-2.5 text-gray-900'
                  />
                </div>
                <button
                  className='inline-block whitespace-nowrap rounded-full bg-black px-10 py-3 text-center text-white'
                  type='submit'
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className='mt-24'>
          <div className='mt-11 md:mt-28 md:flex'>
            <div className='md:w-1/2'>
              <h3 className='text-2xl font-bold md:text-3xl'>LINEからのお問い合わせ</h3>
              <p className='mt-6'>
                NeBonga公式アカウントからもお問い合わせいただけます。
                「友だち追加」ボタンもしくは「QRコード」からLINEを開き、友だち追加後にお問合せ内容をメッセージでお送りください。
              </p>
              <p className='mt-7 text-sm'>※3営業日以内に担当者よりご連絡させていただきます</p>
            </div>
            <div className='mt-8 md:ml-24 md:mt-0 md:w-1/2'>
              <div className='flex min-h-28 items-center border border-[#EDEFF1] p-4'>
                <div className='w-1/2 border-r-2 border-[#EDEFF1]  text-center leading-10'>ボタンから友達追加</div>
                <div className='w-1/2 text-center'>
                  <Link href='#' className='inline-block'>
                    <Image
                      src='/images/line-button.png'
                      alt='友だちを追加'
                      className='w-full'
                      width={144}
                      height={45}
                    />
                  </Link>
                </div>
              </div>
              <div className='mt-6 flex min-h-28 content-center items-center border border-[#EDEFF1] p-4'>
                <div className='w-2/3 border-r-2 border-[#EDEFF1]  text-center leading-10 md:w-1/2'>
                  QRコードから友達追加
                </div>
                <div className='w-1/3 text-center md:w-1/2'>
                  <Image src='/images/line-qrcode.png' alt='QRコード' width={80} height={80} className='inline-block' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </CommonContainer>
    </main>
  )
}
