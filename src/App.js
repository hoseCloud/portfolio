import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Comments />
    </div>
  );
}

export default App;
