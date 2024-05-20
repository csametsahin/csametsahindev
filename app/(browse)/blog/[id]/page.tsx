import { getPostById } from "@/actions/postActions";

interface BlogPageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: BlogPageProps) => {
  const post = await getPostById(params.id);
  return <div className="m-2">{post}</div>;
};

export default Page;
