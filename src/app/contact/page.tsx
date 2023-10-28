'use client'

export default function Contact() {
  return (
    <main className='p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl mb-6 font-bold text-gray-800'>Contact</h1>

      <form
        name='contact'
        method='POST'
        action='/thanks'
        className='w-full max-w-md'
        netlify-honeypot='bot-field'
        data-netlify='true'
      >
        <input type='hidden' name='bot-field' />

        <div className='form-item mb-4'>
          <span className='form-item-name block text-gray-700 text-sm font-bold mb-2'>お名前</span>
          <div className='form-item-body'>
            <input
              type='text'
              name='name'
              className='m-form-text shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
        </div>

        <div className='form-item mb-4'>
          <span className='form-item-name block text-gray-700 text-sm font-bold mb-2'>個人 / 法人</span>
          <div className='form-item-body flex space-x-4'>
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

        <div className='form-item mb-4'>
          <span className='form-item-name block text-gray-700 text-sm font-bold mb-2'>ご依頼内容</span>
          <div className='form-item-body flex flex-col space-y-2'>
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

        <div className='form-item mb-4'>
          <span className='form-item-name block text-gray-700 text-sm font-bold mb-2'>ご希望納期</span>
          <div className='form-item-body'>
            <select
              name='schedule[]'
              className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
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

        <div className='form-item mb-4'>
          <span className='form-item-name block text-gray-700 text-sm font-bold mb-2'>メッセージ</span>
          <div className='form-item-body'>
            <textarea
              name='message'
              className='m-form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32'
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
            className='m-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
          />
        </div>
      </form>
    </main>
  )
}
