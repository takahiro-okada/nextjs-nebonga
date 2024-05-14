'use client'
import CommonContainer from '@/components/base/CommonContainer'
import ProfileSection from '@/components/pages/ProfileSection'

export default function AboutProfile() {
  return (
    <section className='mt-24' data-section='company-person'>
      <CommonContainer>
        <ProfileSection
          name='川崎 芳勲'
          englishName='Yoshihiro Kawasaki'
          descriptionJa={`株式会社NeBonga 代表取締役。<br><br>1990年生まれ、神奈川県横浜市在住。<br>映像作家・写真家。<br>企業/団体のPR映像制作、国際協力・教育分野のコンテンツ制作。<br>大学生時代より56カ国を旅し、人間の暮らしや営みを撮影することに夢中になる。<br>その経験から、「対話」と「相互理解」を撮影のべースとしており、信頼関係の構築から得られる説得力のある映像制作を得意としている。`}
          descriptionEn={`NeBonga Inc.<br>CEOBorn in 1990 in Yokohama. Based in Tokyo, Japan.​<br>CinematographerPR movie / Creation of contents related international cooperation, education and so on.<br>I’ve traveled to 56 countries and started to take photography of people's life around the world.<br>Based on this experience (includes time in Uganda for two years),  Having deep conversation and trusting each other is my most important value.`}
          imageSrc='/images/profile-hiro.jpg'
          timeline={[
            { event: '関西学院大法学部政治学科卒', year: '2013' },
            { event: 'JICA海外協力隊としてウガンダ共和国へ', year: '2014' },
            {
              event: `ポンプメーカーの国際営業部勤務`,
              year: '2017',
            },
            {
              event: `協力隊時代の現地での活動や帰国後の社会還元が評価され、皇居にて、当時の天皇皇后両陛下に謁見を賜る`,
              year: '',
            },
            { event: '個人事業主として独立', year: '2018' },
            { event: '株式会社NeBonga設立', year: '2023' },
          ]}
        />
        <div className='mt-24'>
          <ProfileSection
            name='平松 佑理'
            englishName='Yuri Hiramatsu'
            descriptionJa={`株式会社NeBonga 営業・経理・写真撮影 担当。<br><br>食品マーケティング会社勤務時代に、地域食材を使った商品開発や卸営業、小売店の運営等多岐に渡る業務を経験。<br>特に兵庫県豊岡市の和菓子店での勤務では、お客様の喜んでいただける顔が見えることに、やりがいを感じていた。<br>現在は、学生時代に勉強していた手話を活かし、国際手話の通訳士の勉強をしている。`}
            descriptionEn={`NeBonga Inc. Sales/Accounting/Photography<br>While working for a food marketing company, I experienced a wide range of business activities such as product development using local ingredients, wholesale sales, and retail store management.<br>Working at a Japanese sweet shop in Toyooka City, Hyogo Prefecture, I feel happiness when I have nice conversation with customers.<br>Currently, I'm studying to become an interpreter for International Signs by making use of my experience of studying it when I was student.`}
            imageSrc='/images/profile-yuri.jpg'
            timeline={[
              { event: '同志社大学　商学部商学科卒', year: '2010' },
              { event: '損害保険会社勤務', year: '2010' },
              { event: 'JICA海外協力隊としてフィリピンへ', year: '2015' },
              { event: '食品マーケティング企業勤務', year: '2018' },
              { event: '株式会社NeBongaに入社', year: '2023' },
            ]}
          />
        </div>
      </CommonContainer>
    </section>
  )
}
