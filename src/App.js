import Header from "./component/header/Header";
import './app.scss'
import Headline from "./component/headline/Headline";

function App() {
  return (
    <div className="App">
      <Header/>
        <section className="main">
      <Headline header="Posts" desc="Click the button to render posts"/>

      </section>
    </div>
  );
}

export default App;
