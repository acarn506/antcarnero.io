import Container from "../../components/Container/Container";
import { blogPosts } from "../../Lib/data";

interface Props {
  title: string;
  date: string;
  content: string;
}

export default function BlogPage({ title, date, content }: Props) {
  return (
    <Container title={title}>
      <h1>{title}</h1>
      <div>{content}</div>
    </Container>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: blogPosts.find(blog => blog.slug === params.slug)
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map(blog => ({
      params: { slug: blog.slug }
    })),
    fallback: false
  };
}
