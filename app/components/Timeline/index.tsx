// Timeline コンポーネントのProps型定義
interface TimelineItem {
  event: string
  year: string
}

interface TimelineProps {
  data: TimelineItem[]
}

export default function Timeline({ data }: TimelineProps) {
  return (
    <table className='table-fixed align-top leading-[1.8]'>
      {data.map((item, index) => (
        <tr key={index}>
          <td className='w-1/6 align-baseline'>{item.year}</td>
          <td className='w-5/6'>{item.event}</td>
        </tr>
      ))}
    </table>
  )
}
