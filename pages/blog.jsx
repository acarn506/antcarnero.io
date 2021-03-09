import { blogPosts } from "../Lib/data";

import Container from "../components/Container/Container";
import Link from "next/link";

export default function Blog() {
  return (
    <Container title="Blog Page">
      <h1>My Blogs</h1>
      <div>
        {blogPosts.map(blog => (
          <div key={blog.slug}>
            <div>
              <Link href={`/blog/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
            </div>
            <div>{blog.date}</div>
            <div>{blog.content}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}
