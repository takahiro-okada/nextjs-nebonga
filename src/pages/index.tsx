import { GetStaticProps } from 'next';
import 'tailwindcss/tailwind.css';
import { useQuery } from '@apollo/client';
import apolloClient from '../lib/apolloClient';
import { GET_POSTS } from '../graphql/queries';

type FeaturedImageNode = {
  id: string;
  title: string;
  link: string;
};

type FeaturedImage = {
  node: FeaturedImageNode;
};

type Post = {
  id: string;
  title: string;
  content: string;
  featuredImage: FeaturedImage;
};

type Props = {
  initialPosts: Post[];
};

const Home = ({ initialPosts }: Props) => {
  const { data } = useQuery(GET_POSTS, {
    ssr: false,
  });

  const posts = data?.posts.edges.map(({ node }: any) => node) || initialPosts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post: Post) => (
        <div key={post.id} className="rounded overflow-hidden shadow-lg p-4 bg-white">
          <img className="w-full h-48 object-cover" src={post.featuredImage.node.link} alt={post.featuredImage.node.title} />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{post.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: GET_POSTS,
  });

  const initialPosts = data.posts.edges.map(({ node }: any) => node);

  return {
    props: {
      initialPosts,
    },
    revalidate: 60,
  };
};

export default Home;
