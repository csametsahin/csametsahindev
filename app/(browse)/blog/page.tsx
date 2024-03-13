import Post from "@/components/post";

const Blog = () => {
  return (
    <div className="flex flex-col mx-auto lg:mr-40 lg:ml-20  space-y-2 py-2">
      <div>
        {/* When we multiple this post layout moves should fix it later */}
        <Post />
      </div>
    </div>
  );
};

export default Blog;
