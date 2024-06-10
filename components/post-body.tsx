import RichText from "./rich-text";

const PostBody = ({ post }: any) => {
  const { content } = post.fields;

  return (
    <div className="mx-auto prose">
      <RichText content={content} />
    </div>
  );
};

export default PostBody;
