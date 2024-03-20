'use client'

import axios from 'axios'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'

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
    <main>
      <CommonContainer>
        <section>
          <PageTitle title='Contact' subtitle='写真撮影、映像制作等のご依頼・ご相談窓口です。' />
          <div className='mt-11 md:flex md:mt-28'>
            <div className='md:w-1/2'>
              <h3 className='text-2xl md:text-3xl font-bold'>フォームからのお問い合わせ</h3>
              <p className='mt-6'>
                お手数ですが、右の項目をご記入の上「同意して送信する」ボタンを押してください。
                詳しくご記入いただけますと、ご契約までがスムーズになると思いますので、よろしくお願いいたします。
              </p>
              <p className='text-sm mt-7'>※3営業日以内に担当者よりご連絡させていただきます</p>
            </div>
            <div className='mt-8 md:mt-0 md:ml-24 md:w-1/2'>
              <form onSubmit={handleSubmit(onSubmit)} data-netlify='true' data-netlify-honeypot='bot-field'>
                <div className='mb-5'>
                  <label className='block mb-2 font-medium text-gray-900'>お名前 Name</label>
                  <input
                    {...register('form-name')}
                    className='bg-[#F6F6F6] text-gray-900 rounded-lg  block w-full p-2.5'
                  />
                </div>
                <div className='mb-5'>
                  <label className='block mb-2 font-medium text-gray-900'>メールアドレス Email</label>
                  <input {...register('email')} className='bg-[#F6F6F6] text-gray-900 rounded-lg  block w-full p-2.5' />
                </div>

                <div className='mb-5'>
                  <label className='block mb-2 font-medium text-gray-900'>ご相談内容 Subject</label>
                  <input
                    {...register('subject')}
                    className='bg-[#F6F6F6] text-gray-900 rounded-lg  block w-full p-2.5'
                  />
                </div>

                <div className='mb-5'>
                  <label className='block mb-2 font-medium text-gray-900'>
                    ご相談の詳細について Whad do you want ask?
                  </label>
                  <textarea
                    {...register('message')}
                    className='bg-[#F6F6F6] text-gray-900 rounded-lg  block w-full p-2.5 min-h-48'
                  />
                </div>
                <button
                  className='inline-block whitespace-nowrap rounded-full px-10 py-3 text-center text-white bg-black'
                  type='submit'
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className='mt-24'>
          <div className='mt-11 md:flex md:mt-28'>
            <div className='md:w-1/2'>
              <h3 className='text-2xl md:text-3xl font-bold'>LINEからのお問い合わせ</h3>
              <p className='mt-6'>
                NeBonga公式アカウントからもお問い合わせいただけます。
                「友だち追加」ボタンもしくは「QRコード」からLINEを開き、友だち追加後にお問合せ内容をメッセージでお送りください。
              </p>
              <p className='text-sm mt-7'>※3営業日以内に担当者よりご連絡させていただきます</p>
            </div>
            <div className='mt-8 md:mt-0 md:ml-24 md:w-1/2'>
              <div className='min-h-28 flex items-center border border-[#EDEFF1] py-4 px-4'>
                <div className='w-1/2 border-r-[2px] text-center  border-[#EDEFF1] leading-10'>ボタンから友達追加</div>
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
              <div className='min-h-28 mt-6 flex items-center content-center border border-[#EDEFF1] py-4 px-4'>
                <div className='w-2/3 md:w-1/2 border-r-[2px]  border-[#EDEFF1] text-center leading-10'>
                  QRコードから友達追加
                </div>
                <div className='w-1/3 md:w-1/2 text-center'>
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
