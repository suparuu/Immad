import "./App.scss";
import List from "./component/List"
import Insert from './component/Insert'


function App() {

  return (
    <div className="App">
      <article>
        <List></List>
        <Insert ></Insert>
      </article>
    </div>
  );
}

export default App;
