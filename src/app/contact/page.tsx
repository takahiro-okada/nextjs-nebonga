'use client'

import axios from 'axios'
import { useForm } from 'react-hook-form'

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
    <form onSubmit={handleSubmit(onSubmit)} data-netlify='true' data-netlify-honeypot='bot-field'>
      <input type='hidden' {...register('form-name')} value='contact' />
      <input type='hidden' {...register('bot-field')} />
      <input type='text' placeholder='Your Name' {...register('name')} required />
      <input type='email' placeholder='Your Email' {...register('email')} required />
      <textarea placeholder='Your Message' {...register('message')} required />
      <button type='submit'>Submit</button>
    </form>
  )
}
