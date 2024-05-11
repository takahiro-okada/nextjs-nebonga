'use client'
import axios from 'axios'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import CommonContainer from '@/components/base/CommonContainer'
import PageTitle from '@/components/ui/PageTItle'

export default function ContactForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()

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
              <motion.h3
                className='text-2xl font-bold md:text-3xl'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                フォームからのお問い合わせ
              </motion.h3>
              <motion.p
                className='mt-6'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                お手数ですが、右の項目をご記入の上「同意して送信する」ボタンを押してください。
                詳しくご記入いただけますと、ご契約までがスムーズになると思いますので、よろしくお願いいたします。
              </motion.p>
              <motion.p
                className='mt-7 text-sm'
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                ※3営業日以内に担当者よりご連絡させていただきます
              </motion.p>
            </div>
            <motion.div
              className='mt-8 md:ml-24 md:mt-0 md:w-1/2'
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)} data-netlify='true' data-netlify-honeypot='bot-field'>
                <div className='mb-5'>
                  <label className='mb-2 block font-medium text-gray-900'>お名前 Name</label>
                  <input
                    {...register('form-name', { required: 'お名前を入力してください。' })}
                    className='block w-full rounded-lg  bg-grayLight p-2.5 text-gray-900'
                  />
                  {errors['form-name']?.message && (
                    <p className='text-[12px] text-red-500'>{errors['form-name'].message as string}</p>
                  )}
                </div>
                <div className='mb-5'>
                  <label className='mb-2 block font-medium text-gray-900'>メールアドレス Email</label>
                  <input
                    {...register('email', { required: 'メールアドレスを入力してください。' })}
                    className='block w-full rounded-lg  bg-grayLight p-2.5 text-gray-900'
                  />
                  {errors.email?.message && (
                    <p className='text-[12px] text-red-500'>{errors.email.message as string}</p>
                  )}
                </div>
                <div className='mb-5'>
                  <label className='mb-2 block font-medium text-gray-900'>ご相談内容 Subject</label>
                  <input
                    {...register('subject', { required: 'ご相談内容を入力してください。' })}
                    className='block w-full rounded-lg  bg-grayLight p-2.5 text-gray-900'
                  />
                  {errors.subject?.message && (
                    <p className='text-[12px] text-red-500'>{errors.subject.message as string}</p>
                  )}
                </div>
                <div className='mb-5'>
                  <label className='mb-2 block font-medium text-gray-900'>
                    ご相談の詳細について What do you want to ask us?
                  </label>
                  <textarea
                    {...register('message', { required: 'ご相談の詳細を入力してください。' })}
                    className='block min-h-48 w-full  rounded-lg bg-grayLight p-2.5 text-gray-900'
                  />
                  {errors.message?.message && (
                    <p className='text-[12px] text-red-500'>{errors.message.message as string}</p>
                  )}
                  <span className='text-[12px] text-[#7E828A]'>
                    〈お問い合わせフォーム記入例〉
                    <br />
                    用途：事業PR動画
                    <br />
                    目的：新規事業の認知度をUPさせたい
                    <br />
                    予算：○○万円以内 希望納期：3ヶ月以内
                    <br />
                    本数：3-5分を1本、1分以内を2-3本
                    <br />
                    ※参考動画URLなどもございましたら、合わせてご記入ください。
                  </span>
                </div>
                <button
                  className='inline-block whitespace-nowrap rounded-full bg-black px-10 py-3 text-center text-white'
                  type='submit'
                >
                  送信する
                </button>
              </form>
            </motion.div>
          </div>
        </section>
        <section className='mt-24'>
          <motion.div
            className='mt-11 md:mt-28 md:flex'
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <div className='md:w-1/2'>
              <h3 className='text-2xl font-bold md:text-3xl'>LINEからのお問い合わせ</h3>
              <p className='mt-6'>
                NeBonga公式アカウントからもお問い合わせいただけます。
                「友だち追加」ボタンもしくは「QRコード」からLINEを開き、友だち追加後にお問合せ内容をメッセージでお送りください。
              </p>
              <p className='mt-7 text-sm'>※3営業日以内に担当者よりご連絡させていただきます</p>
            </div>
            <div className='mt-8 md:ml-24 md:mt-0 md:w-1/2'>
              <div className='flex min-h-28 items-center border border-grayDark p-4'>
                <div className='w-2/5 border-r border-grayDark pr-3  text-center md:w-1/2'>
                  ボタンから
                  <br className='md:hidden' />
                  友達追加
                </div>
                <div className='w-3/5 text-center md:w-1/2'>
                  <Link href='https://page.line.me/167gakqf' className='inline-block'>
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
              <div className='mt-6 flex min-h-28 content-center items-center border border-grayDark p-4'>
                <div className='w-2/3 border-r border-grayDark  text-center md:w-1/2'>
                  QRコードから友達追加
                </div>
                <div className='w-1/3 text-center md:w-1/2'>
                  <Image src='/images/line-qrcode.png' alt='QRコード' width={80} height={80} className='inline-block' />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </CommonContainer>
    </main>
  )
}
