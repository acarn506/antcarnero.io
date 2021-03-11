import { blogPosts } from "../Lib/data";

import Container from "../components/Container/Container";
import Link from "next/link";

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
    <div class="my-5">
      <div>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </div>
      <div>{date}</div>
      <div>{content}</div>
    </div>
  );
}
