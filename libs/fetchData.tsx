import getAllStories from './queries/getAllStories'
import getAllWorks from './queries/getAllWorks'
import getAllNews from './queries/getAllNews'
import { PAGE_SIZE } from './constants'

export async function fetchData(slug: string, offset: number, size: number = PAGE_SIZE) {
  try {
    if (slug === 'story') {
      const { posts, total } = await getAllStories(offset, size)
      return {
        basePath: 'story',
        categoryKey: 'categories',
        context: 'Story',
        posts,
        subtitle: '感じたことなどを綴ります',
        total,
      }
    }

    if (slug === 'works') {
      const { posts, total } = await getAllWorks(offset, size)
      return {
        basePath: 'works',
        categoryKey: 'worksCategories',
        context: 'Works',
        posts,
        subtitle: 'NeBongaのお仕事の一部をご紹介します',
        total,
      }
    }

    if (slug === 'news') {
      const { posts, total } = await getAllNews(offset, size)
      return {
        basePath: 'news',
        categoryKey: 'newsCategories',
        context: 'News',
        posts,
        subtitle: '各種お知らせ',
        total,
      }
    }
  } catch (error) {
    console.error(error)
    return { error: 'データの取得中にエラーが発生しました。' }
  }
}
