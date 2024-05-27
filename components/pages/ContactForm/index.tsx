'use client'
import { motion } from 'framer-motion'

import CommonContainer from '@/components/base/CommonContainer'
import PageTitle from '@/components/ui/PageTItle'

export default function ContactForm() {
  // const {
  //   formState: { errors },
  //   handleSubmit,
  //   register,
  // } = useForm()

  // const onSubmit = async (data: any) => {
  //   const formData = new FormData()
  //   formData.append('form-name', 'contact')
  //   Object.keys(data).forEach((key) => {
  //     formData.append(key, data[key])
  //   })

  //   try {
  //     const response = await axios.post('/', formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     })
  //     if (response.status === 200) {
  //       window.location.href = '/thanks'
  //     }
  //   } catch (error) {
  //     console.error('Submission failed:', error)
  //   }
  // }

  return (
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
            {/* <form onSubmit={handleSubmit(onSubmit)}>
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
            </form> */}

            <form
              name='contact'
              method='POST'
              action='/thanks'
              className='form'
              netlify-honeypot='bot-field'
              data-netlify='true'
            >
              <input type='hidden' name='bot-field' />
              <div className='form-item'>
                <span className='form-item-name'>お名前</span>

                <div className='form-item-body'>
                  <div className='form-item-text'>
                    <input type='text' name='name' className='m-form-text' required />
                  </div>
                </div>
              </div>

              <div className='form-item'>
                <span className='form-item-name'>個人 / 法人</span>

                <div className='form-item-body'>
                  <div className='m-form-radio'>
                    <div className=''>
                      <label>
                        <input type='radio' name='customer-type' value='個人' required />
                        <span className='m-form-radio-name'>
                          <span className='m-form-radio-text'>個人</span>
                        </span>
                      </label>
                    </div>

                    <div className=''>
                      <label>
                        <input type='radio' name='customer-type' value='法人' />
                        <span className='m-form-radio-name'>
                          <span className='m-form-radio-text'>法人</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-item'>
                <span className='form-item-name'>ご依頼内容</span>

                <div className='form-item-body'>
                  <div className='m-form-checkbox'>
                    <div className=''>
                      <label>
                        <input type='checkbox' name='service-menu[]' value='ウェブサイト制作' />
                        <span className='m-form-checkbox-name'>
                          <span className='m-form-checkbox-text'>ウェブサイト制作</span>
                        </span>
                      </label>
                    </div>

                    <div className=''>
                      <label>
                        <input type='checkbox' name='service-menu[]' value='ウェブサービス制作' />
                        <span className='m-form-checkbox-name'>
                          <span className='m-form-checkbox-text'>ウェブサービス制作</span>
                        </span>
                      </label>
                    </div>

                    <div className=''>
                      <label>
                        <input type='checkbox' name='service-menu[]' value='グラフィックデザイン' />
                        <span className='m-form-checkbox-name'>
                          <span className='m-form-checkbox-text'>グラフィックデザイン</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-item'>
                <span className='form-item-name'>ご希望納期</span>

                <div className='form-item-body'>
                  <div className='form-item-select'>
                    <div className='m-form-select'>
                      <select name='schedule[]' required>
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
                </div>
              </div>
              <div className='form-item'>
                <span className='form-item-name'>メッセージ</span>

                <div className='form-item-body'>
                  <div className='form-item-textarea'>
                    <textarea name='message' className='m-form-textarea' required></textarea>
                  </div>
                </div>
              </div>

              <div className='recaptcha-item'>
                <div data-netlify-recaptcha='true'></div>
              </div>
              <div className='m-btn-wrap'>
                <input type='submit' name='' value='送信' className='m-btn' />
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </CommonContainer>
  )
}
