
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#111827",
      color: "white",
      padding: "80px 10%",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize: "48px"}}>
        Hello, I'm Hanin!
      </h1>

      <h2>DevOps & Cloud Engineer</h2>

      <p>
        Welcome to my professional Portfolio.
      </p>

      <section style={{marginTop: "50px"}}>
        <h2>Certifications</h2>
        <p>Cloud, Docker, Kubernetes and DevOps</p>
      </section>

      <section style={{marginTop: "30px"}}>
        <h2>Projects DevOps & Cloud</h2>
        <p>Automation, CI/CD, Kubernetes and Cloud projects.</p>
      </section>
    </main>
  );
}
