import { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ListTask from "./components/ListTask";
import SearchFeild from "./components/SearchFeild";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addItem = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div className="App">
      <h1>TODO-LIST-APP</h1>
      <p>Hello, this is Makara! 😀</p>
      <InputFeild addItem={addItem} />
      {todoList.map((todo, index) => {
        return <ListTask key={index} title={todo} />;
      })}
      <SearchFeild />
    </div>
  );
}

export default App;
