import { getAllPosts } from "../Lib/data";

import Container from "../components/Container/Container";
import Link from "next/link";

import { format, parseISO } from "date-fns";

export default function Blog({ posts }) {
  return (
    <Container title="Blog Page">
      <h1 className=" font-bold text-5xl">My Blogs</h1>
      <div className="my-5 flex flex-col justify-center mx-10">
        {posts.map(blog => (
          <BlogList key={blog.slug} {...blog} />
        ))}
      </div>
    </Container>
  );
}

function BlogList({ title, slug, date, content }) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="my-5 p-5 border border-gray-100 shadow rounded hover:shadow-lg hover:border-gray-200 hover:bg-blue-50 transition duration-500 ease-in-out cursor-pointer">
        <a>{title}</a>
        <div className="my-1 text-gray-600 text-sm">
          {format(parseISO(date), "MMMM do, uuu")}
        </div>
        <div>{content.substr(0, 250)}</div>
      </div>
    </Link>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug
      }))
    }
  };
}
