import Container from "../components/Container/Container";

export default function Home() {
  return (
    <Container>
      <section className="intro">
        <h3 className="welcome">Welcome, I'm</h3>
        <h1 className="name">Anthony Carnero</h1>
        <h3>
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
