import SideNavCategories from '@/components/base/SideNavCategories'
import RecommendedWorks from '@/components/pages/RecommendedWorks'

type SideNavProps = {
  categoryKey: string
  linkPrefix: string
}

export default function SideNav({ categoryKey, linkPrefix }: SideNavProps) {
  return (
    <>
      <SideNavCategories categoryKey={categoryKey} linkPrefix={linkPrefix} />

      <div className='mt-12'>
        <RecommendedWorks />
      </div>
    </>
  )
}
