import PostBody from "@/components/post-body";
import PreviewAlert from "@/components/preview-alert";
import Skeleton from "@/components/skeleton";
import { client } from "@/lib/contentful/client";
import { redirect } from "next/navigation";

const Post = async ({ post, params, preview }: any) => {
  const { contentfulPost } = await getContentfulData(params);
  return (
    <section className="section">
      {preview && <PreviewAlert />}
      <div className="container">
        <article className="prose mx-auto">
          {post ? (
            <Skeleton />
          ) : (
            <>
              <PostBody post={contentfulPost} />
            </>
          )}
        </article>
      </div>
    </section>
  );
};

export const getContentfulData = async (params: any) => {
  const cfClient = client;

  const { slug } = params;
  const response = await cfClient.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });
  if (!response?.items?.length) {
    redirect("/");
  }

  return {
    contentfulPost: response?.items?.[0],
  };
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "post" });
  const paths = response.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Post;
