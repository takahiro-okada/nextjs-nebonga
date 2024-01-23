'use client'

import PageMainVisual from '../components/PageMainVIsual'

export default function Contact() {
  return (
    <>
      <PageMainVisual title='Contact' bgImage='/images/bg-sample.jpg' />
      <main className='flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6'>
        <form name='contact' method='POST' data-netlify='true'>
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </p>
          <p>
            <label>
              Your Role:{' '}
              <select name='role[]' multiple>
                <option value='leader'>Leader</option>
                <option value='follower'>Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name='message'></textarea>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
      </main>
    </>
  )
}
