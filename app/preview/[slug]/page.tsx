import PostDetail from '@/components/pages/PostDetail'
import getPreview from '@/libs/queries/getPreview'

// Types.
type PreviewProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

/**
 * Preview route.
 *
 * This route is used to preview posts before they are published.
 * It must contain the secret key in the query parameters.
 *
 * @usage https://example.com/preview/123456?secret=secret-key
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default async function Preview(props: PreviewProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  // Get the secret from the query parameters.
  const secret = searchParams.secret

  // No secret? Bail.
  if (!secret || secret !== process.env.NEXTJS_PREVIEW_SECRET) {
    return (
      <div className='container mx-auto text-center'>
        <h1>This page requires a preview secret.</h1>
        <p>
          Please verify the secret has been set in both the environment variable (.env) and wp-config.php files and the
          secret is passed as a query parameter.
        </p>
      </div>
    )
  }

  // Attempt to get the preview.
  const post = await getPreview(params.slug)

  // No preview available? Bail.
  if (!post) {
    return (
      <div className='container mx-auto text-center'>
        <h1>Preview Error</h1>
        <p>
          Couldn&apos;t find a WordPress post with the Post ID:{' '}
          <span className='bg-yellow-200 p-1 text-black'>{params.slug}</span>
        </p>
        <p>Please verify the Post ID and try again.</p>
      </div>
    )
  }

  return <PostDetail post={post} slug='works' categoryKey='worksCategories' />
}
