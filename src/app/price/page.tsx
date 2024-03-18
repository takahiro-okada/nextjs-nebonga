'use client'
import Image from 'next/image'

import { Button } from '../components/Button'
import CommonContainer from '../components/CommonContainer'
import FlowCard from '../components/FlowCrad'
import PageTitle from '../components/PageTItle'
import PriceCard from '../components/PriceCard'

export default function Price() {
  return (
    <main>
      <CommonContainer>
        <PageTitle title='Price' subtitle='NeBongaのお仕事の一部をご紹介します' />

        <p className='mt-12 md:mt-16'>
          お客様のご要望に合わせた映像制作/写真撮影を行っているため、料金を一律にはできません。
          <br />
          正確なお見積りはヒアリングののにご提示致しますが、目安となるお見積りと価格表は下記の通りです。
        </p>

        <section>
          <ul className='mt-16 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-x-6 md:gap-y-12'>
            <PriceCard
              caseNumber='01'
              title={['個人向け\nプロモーション映像・写真']}
              description='結婚式のオープニング・プロフィール映像など'
              priceRange='15〜35'
              additionalInfo='映像撮影は初めて！という方も大歓迎。アイデア出しや構成もサポートします。写真のみの方もご相談ください。'
              points={['企画構成', '映像撮影', '前撮り・後撮り撮影', 'データ or DVD納品']}
            />
            <PriceCard
              caseNumber='02'
              title='企業・団体向け Web動画'
              description='ウェビナー動画編集・事業PR映像など'
              priceRange='25〜50'
              additionalInfo='インタビュー映像なども含めた説得力のあるPR映像を撮影させていただきます。 Webサイトのトップページに載せる動画など。'
              points={['企画構成', '映像撮影（完成尺目安3分以内）', '写真撮影', 'データ or DVD納品']}
            />
            <PriceCard
              caseNumber='03'
              title={['個人企業・団体向け\nWeb動画・CM撮影']}
              description='長尺事業PR映像, 短編ドラマ系など'
              priceRange='50〜250'
              additionalInfo='ストーリー性・作品性の高いインパクトのある映像を撮影いたします。ライティングやカラーで個性を出したい方はこちらへ。'
              points={['企画構成', '映像撮影（完成尺目安5~10分以内）', '写真撮影', 'データ or DVD納品']}
            />
            <PriceCard
              caseNumber='04'
              title={['企業・団体向け\nオールインワン']}
              description='新規事業PR, 新卒採用動画など'
              priceRange='200〜350'
              additionalInfo='映像制作・写真撮影・Webサイト制作やロゴデザインなど、広報におけるコンテンツ作成をセットで承ります。'
              points={[
                '企画構成',
                '映像撮影（完成尺目安10分以上）',
                '写真撮影',
                'Webサイト・ロゴデザイン制作',
                'データ or DVD納品',
              ]}
            />
          </ul>
        </section>
      </CommonContainer>

      <section className='mt-24 bg-[#F5F6F7] py-24'>
        <CommonContainer>
          <h2 className='text-3xl font-bold'>ご依頼までの流れ</h2>
          <p className='mt-6'>
            目的を明確にするヒアリングで“想い”を視覚化するお手伝いをさせていただきます 。<br />
            まずは、お気軽にお問い合わせください。
          </p>

          <ul className='mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5'>
            <FlowCard
              number='01'
              titleEn='Contact'
              titleJa='お問い合わせ'
              iconImageSrc='/images/icon-email.svg'
              description='Webサイト上のお問い合わせフォームもしくは公式LINEにてお問い合わせをお願いいたします。'
            />
            <FlowCard
              number='02'
              titleEn='Meeting'
              titleJa='打ち合わせ'
              iconImageSrc='/images/icon-chat.svg'
              description='ご用件をヒアリングさせていただき、撮影目的・内容・希望納期等を整理させていただきます。'
            />
            <FlowCard
              number='03'
              titleEn='Estimate'
              titleJa='お見積もり'
              iconImageSrc='/images/icon-note.svg'
              description='お見積書をお送りしますので、内容をご確認いただき、ご了承いただければ撮影行程へ。'
            />
            <FlowCard
              number='04'
              titleEn='Filming'
              titleJa='撮影・編集'
              iconImageSrc='/images/icon-camera.svg'
              description='撮影と編集を行います。編集行程でも随時進捗状況を共有させていただきます。'
            />
            <FlowCard
              number='05'
              titleEn='Confirm'
              titleJa='納品'
              iconImageSrc='/images/icon-present.svg'
              description='完成品をデータ or DVDにてお渡しします。費用をお支払いいただき、お取引の終了となります。'
            />
          </ul>
          <div className='mt-14'>
            <div className='flex flex-col justify-center gap-6 md:flex-row'>
              <Button href='/contact'>フォームからお問い合わせ</Button>
              <Button href='/contact' buttonColor='bg-[#00B900]'>
                LINEからお問い合わせ
              </Button>
            </div>
          </div>
        </CommonContainer>
      </section>

      <section className='mt-24'>
        <CommonContainer>
          <h2 className='text-3xl font-bold'>講演実績</h2>
          <p className='mt-6 leading-7'>
            対象：小学生～大学生 / 企業・団体向け
            <br />
            内容：JICA海外協力隊体験談・国際協力・異文化理解・SDGs教育・多文化共生・キャリア教育など
            <br />
            形態：対面/オンライン
            <br />
          </p>
          <p className='mt-6'>
            150件を超える講演実績のもと、講師を育成するアドバイザーもしておりますので、ご自身のプレゼンテーションにお悩みがある方も、お気軽にご相談ください。ご依頼に関しましては、お問い合わせフォームよりご連絡ください。
          </p>

          <ul className='mt-12 grid gap-5 md:grid-cols-4 '>
            <li>
              <Image src='/images/lecture01.jpg' className='w-full' alt='' width={268} height={144} />
            </li>
            <li>
              <Image src='/images/lecture02.jpg' className='w-full' alt='' width={268} height={144} />
            </li>
            <li>
              <Image src='/images/lecture03.jpg' className='w-full' alt='' width={268} height={144} />
            </li>
            <li>
              <Image src='/images/lecture04.jpg' className='w-full' alt='' width={268} height={144} />
            </li>
          </ul>
        </CommonContainer>
      </section>
    </main>
  )
}
