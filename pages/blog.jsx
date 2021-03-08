import { blogPosts } from "../Lib/data";

import Container from "../components/Container/Container";

export default function Blog() {
  return (
    <Container title="Blog Page">
      <h1>My Blogs</h1>
      <div>
        {blogPosts.map(blog => (
          <div key={blog.slug}>
            <div>{blog.title}</div>
            <div>{blog.date.toString()}</div>
            <div>{blog.content}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}
