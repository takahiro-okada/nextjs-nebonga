'use client'
import { motion } from 'framer-motion'

import CommonContainer from '@/components/base/CommonContainer'

export default function AboutCompany() {
  return (
    <section className='mt-12'>
      <CommonContainer>
        <div className='space-y-4'>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <h2 className='text-2xl font-bold tracking-tighter'>会社概要</h2>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <div className='grid-cols-2 items-start gap-4 md:grid md:gap-24'>
              <table className='text-left'>
                <tr className='border-b border-grayNormal'>
                  <th className='w-1/3 py-6 align-baseline md:w-1/5'>会社名</th>
                  <td className='w-2/3 py-6 md:w-4/5'>
                    株式会社NeBonga(ネボンガ)
                    <br />
                    (英語表記:NeBonga Inc.)
                  </td>
                </tr>
                <tr className='border-b border-grayNormal'>
                  <th className='w-1/3 py-6 align-baseline md:w-1/5'>住所</th>
                  <td className='w-2/3 py-6 md:w-4/5'>
                    〒1500043
                    <br />
                    東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル 2F-C
                  </td>
                </tr>
                <tr className='border-b border-grayNormal'>
                  <th className='w-1/3 py-6 align-baseline md:w-1/5'>代表</th>
                  <td className='w-2/3 py-6 md:w-4/5'>川崎 芳勲</td>
                </tr>
                <tr className='border-b border-grayNormal'>
                  <th className='w-1/3 py-6 align-baseline md:w-1/5'>資本金</th>
                  <td className='w-2/3 py-6 md:w-4/5'>3,000,000円</td>
                </tr>
                <tr className='border-b border-grayNormal'>
                  <th className='w-1/3 py-6 align-baseline md:w-1/5'>創業</th>
                  <td className='w-2/3 py-6 md:w-4/5'>2023年9月</td>
                </tr>
              </table>
              <table className='text-left'>
                <tr className='border-b border-grayNormal'>
                  <th className='w-1/3 py-6 align-baseline md:w-1/5'>事業内容</th>
                  <td className='w-2/3 py-6 md:w-4/5'>
                    <ul className='list-disc'>
                      <li>写真・動画・映画コンテンツの企画、撮影、編集業務及びその制作物の販売</li>
                      <li>ソーシャルメディア、ＷＥＢサイト構築、運用並びにその他の広告宣伝</li>
                      <li>各種セミナー、イベント等の企画、開催、運営等及び講演等の受託</li>
                    </ul>
                  </td>
                </tr>
                <tr className='border-b border-grayNormal'>
                  <th className='w-1/3 py-6 align-baseline md:w-1/5'>取引先銀行</th>
                  <td className='w-2/3 py-6 md:w-4/5'>三井住友銀行・GMOあおぞらネット銀行</td>
                </tr>
                <tr className='border-b border-grayNormal'>
                  <th className='w-1/3 py-6 align-baseline md:w-1/5'>お問い合わせ</th>
                  <td className='w-2/3 py-6 md:w-4/5'>contact@nebonga.com</td>
                </tr>
              </table>
            </div>
          </motion.div>
        </div>
      </CommonContainer>
    </section>
  )
}
