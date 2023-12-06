'use client'

import PageMainVisual from '../components/PageMainVIsual'

export default function Contact() {
  return (
    <>
      <PageMainVisual title='Contact' bgImage='/images/bg-sample.jpg' />
      <main className='flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6'>
        <form
          name='contact'
          method='POST'
          action='/thanks'
          className='w-full max-w-md'
          netlify-honeypot='bot-field'
          data-netlify='true'
        >
          <input type='hidden' name='bot-field' />

          <div className='mb-4'>
            <span className='mb-2 block text-sm font-bold text-gray-700'>お名前</span>
            <div className=''>
              <input
                type='text'
                name='name'
                className='w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow'
                required
              />
            </div>
          </div>

          <div className='mb-4'>
            <span className='mb-2 block text-sm font-bold text-gray-700'>個人 / 法人</span>
            <div className=' flex space-x-4'>
              <label className='flex items-center'>
                <input type='radio' name='customer-type' value='個人' className='mr-2' required />
                個人
              </label>
              <label className='flex items-center'>
                <input type='radio' name='customer-type' value='法人' className='mr-2' />
                法人
              </label>
            </div>
          </div>

          <div className='mb-4'>
            <span className='mb-2 block text-sm font-bold text-gray-700'>ご依頼内容</span>
            <div className=' flex flex-col space-y-2'>
              <label className='flex items-center'>
                <input type='checkbox' name='service-menu[]' value='ウェブサイト制作' className='mr-2' />
                ウェブサイト制作
              </label>
              <label className='flex items-center'>
                <input type='checkbox' name='service-menu[]' value='ウェブサービス制作' className='mr-2' />
                ウェブサービス制作
              </label>
              <label className='flex items-center'>
                <input type='checkbox' name='service-menu[]' value='グラフィックデザイン' className='mr-2' />
                グラフィックデザイン
              </label>
            </div>
          </div>

          <div className='mb-4'>
            <span className='mb-2 block text-sm font-bold text-gray-700'>ご希望納期</span>
            <div className=''>
              <select name='schedule[]' className='w-full rounded border px-3 py-2 leading-tight text-gray-700'>
                <option value='' disabled selected>
                  選択してください
                </option>
                <option value='1ヶ月以内'>1ヶ月以内</option>
                <option value='2ヶ月以内'>2ヶ月以内</option>
                <option value='3ヶ月以内'>3ヶ月以内</option>
                <option value='未定'>未定</option>
              </select>
            </div>
          </div>

          <div className='mb-4'>
            <span className='mb-2 block text-sm font-bold text-gray-700'>メッセージ</span>
            <div className=''>
              <textarea
                name='message'
                className='h-32 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow'
                required
              ></textarea>
            </div>
          </div>

          <div className='recaptcha-item mb-4'>
            <div data-netlify-recaptcha='true'></div>
          </div>

          <div className='m-btn-wrap mt-6'>
            <input
              type='submit'
              value='送信'
              className='m-btn cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            />
          </div>
        </form>
      </main>
    </>
  )
}
