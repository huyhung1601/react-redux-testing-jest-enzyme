import Header from "./component/header/Header";
import './app.scss'
import Headline from "./component/headline/Headline";

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}]
function App() {
  return (
    <div className="App">
      <Header/>
        <section className="main">
      <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>

      </section>
    </div>
  );
}

export default App;
