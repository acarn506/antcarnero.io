import Container from "../../components/Container/Container";
import { getAllPosts } from "../../Lib/data";
import { format, parseISO } from "date-fns";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

export default function BlogPage({ title, date, content }) {
  const hydratedContent = hydrate(content);
  return (
    <Container title={title}>
      <div className="my-5">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div>{format(parseISO(date), "MMMM do, uuu")}</div>
      </div>
      <div className="mx-10 prose">{hydratedContent}</div>
    </Container>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find(blog => blog.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map(blog => ({
      params: { slug: blog.slug }
    })),
    fallback: false
  };
}
