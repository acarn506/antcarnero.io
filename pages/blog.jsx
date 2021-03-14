import { blogPosts } from "../Lib/data";

import Container from "../components/Container/Container";
import Link from "next/link";

import { format, parseISO } from "date-fns";

export default function Blog() {
  return (
    <Container title="Blog Page">
      <h1 className=" font-bold text-5xl">My Blogs</h1>
      <div className="my-5 flex flex-col justify-center mx-10">
        {blogPosts.map(blog => (
          <BlogList key={blog.slug} {...blog} />
        ))}
      </div>
    </Container>
  );
}

function BlogList({ title, slug, date, content }) {
  return (
    <div class="my-5 p-5 border border-gray-100 shadow rounded hover:shadow-lg hover:border-gray-200 hover:bg-blue-50 transition duration-500 ease-in-out">
      <div>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </div>
      <div className="my-1 text-gray-600 text-sm">
        {format(parseISO(date), "MMMM do, uuu")}
      </div>
      <div>{content}</div>
    </div>
  );
}
