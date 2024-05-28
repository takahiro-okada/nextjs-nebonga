'use client'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import CommonContainer from '@/components/base/CommonContainer'
import PageTitle from '@/components/ui/PageTItle'

export default function ContactForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()

  const onSubmit = async (data: any) => {
    const formData = new FormData()
    formData.append('form-name', 'contactform')
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
      console.log(key, data[key])
    })

    try {
      const response = await axios.post('/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      console.log('response:', response)
      if (response.status === 200) {
        window.location.href = '/thanks'
      }
    } catch (error) {
      console.error('Submission failed:', error)
    }
  }

  return (
    <CommonContainer>
      <section>
        <PageTitle title='Contact' subtitle='写真撮影、映像制作等のご依頼・ご相談窓口です。' />
        <div className='mt-11 md:mt-28 md:flex'>
          <div className='md:w-1/2'>
            <h3>フォームからのお問い合わせ</h3>
            <p>
              お手数ですが、右の項目をご記入の上「同意して送信する」ボタンを押してください。
              詳しくご記入いただけますと、ご契約までがスムーズになると思いますので、よろしくお願いいたします。
            </p>
            <p className='mt-7 text-sm'>※3営業日以内に担当者よりご連絡させていただきます</p>
          </div>
          <div className='mt-8 md:ml-24 md:mt-0 md:w-1/2'>
            <form onSubmit={handleSubmit(onSubmit)} name='contactform' data-netlify='true'>
              <div className='mb-5'>
                <label className='mb-2 block font-medium text-gray-900'>お名前 Name</label>
                <input
                  type='text'
                  {...register('name', { required: 'お名前を入力してください。' })}
                  className='block w-full rounded-lg  bg-grayLight p-2.5 text-gray-900'
                />
                {errors.name?.message && <p className='text-[12px] text-red-500'>{errors.name.message as string}</p>}
              </div>
              <div className='mb-5'>
                <label className='mb-2 block font-medium text-gray-900'>メールアドレス Email</label>
                <input
                  type='email'
                  {...register('email', { required: 'メールアドレスを入力してください。' })}
                  className='block w-full rounded-lg bg-grayLight p-2.5 text-gray-900'
                />
                {errors.email?.message && <p className='text-[12px] text-red-500'>{errors.email.message as string}</p>}
              </div>
              <div className='mb-5'>
                <label className='mb-2 block font-medium text-gray-900'>ご相談内容 Subject</label>
                <input
                  type='text'
                  {...register('subject', { required: 'ご相談内容を入力してください。' })}
                  className='block w-full rounded-lg bg-grayLight p-2.5 text-gray-900'
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
                  className='block min-h-48 w-full rounded-lg bg-grayLight p-2.5 text-gray-900'
                />
                {errors.message?.message && (
                  <p className='text-[12px] text-red-500'>{errors.message.message as string}</p>
                )}
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
    </CommonContainer>
  )
}
