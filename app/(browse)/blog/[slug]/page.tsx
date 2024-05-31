import { getPostById } from "@/actions/postActions";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: BlogPageProps) => {
  const post = await getPostById(params.slug);
  return <div className="m-2">{post}</div>;
};

export default Page;
