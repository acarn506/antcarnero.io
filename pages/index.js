import Container from "../components/Container/Container";

export default function Home() {
  return (
    <Container>
      <section className="my-5">
        <h3 className="text-2xl font-sans">Welcome, I'm</h3>
        <h1 className="m-0 text-5xl font-sans">Anthony Carnero</h1>
        <h3 className="my-5">
          I write code, create user-friendly interfaces, and visualize data.
          <br />
          Currently, searching for a new role as a Full-Stack or Frontend
          Enginner.
        </h3>
        <h3>Checkout some of my visualzations and dashboards down below.</h3>
      </section>
    </Container>
  );
}
