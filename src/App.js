import './App.css';

const programminglanguages = [
  "ReactJS",
  "HTML",
  "CSS",
  "JavaScript"
];

function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.name}'s React Playground</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We are playing around with {props.language} to see how good it can be.</p>
      <ul style={{textAlign: "left"}}>
        {props.programminglanguages.map((programminglanguages, i) => (
          <li key={i}>{programminglanguages}</li>)
        )}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>How cool would it be to use React in {props.year}, it is one of the most popular web frameworks.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Fred" />
      <Main language="React" programminglanguages={programminglanguages} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
