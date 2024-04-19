import WorkItems from '@/components/pages/WorksItems'
import getPickupWorks from '@/libs/queries/getPickupWorks'

export default async function PickupWorks() {
  const works = await getPickupWorks()

  return (
    <div>
      <p>Related Works</p>
      <WorkItems posts={works.posts} />
    </div>
  )
}
