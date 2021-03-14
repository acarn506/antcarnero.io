import Container from "../../components/Container/Container";
import { blogPosts } from "../../Lib/data";
import { format, parseISO } from "date-fns";

interface Props {
  title: string;
  date: string;
  content: string;
}

export default function BlogPage({ title, date, content }: Props) {
  return (
    <Container title={title}>
      <div className="my-5">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div>{format(parseISO(date), "MMMM do, uuu")}</div>
      </div>
      <div className="mx-10">{content}</div>
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
