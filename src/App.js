import React from "react";
import "./App.css";
import AddItemToList from "./List/AddItemToLIst";
import List from "./List/List";

function App() {
  const [toDoList, setToDoList] = React.useState([
    { id: "0", lastStatusChanged: "46565", completed: true, text: "buy milk" },
    { id: "1", lastStatusChanged: "49565", completed: false, text: "buy cake" },
    {
      id: "224324",
      lastStatusChanged: "56565",
      completed: true,
      text: "buy ice-cream",
    },
    {
      id: "3332",
      lastStatusChanged: "66565",
      completed: false,
      text: "buy bread",
    },
    {
      id: "4",
      lastStatusChanged: "96565",
      completed: true,
      text: "buy butter",
    },
  ]);

  const addItemToLIst = (text) => {
    const date = new Date();
    return setToDoList([
      ...toDoList,
      {
        id: `${toDoList.length} + ${Math.random()}`,
        lastStatusChanged: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`,
        completed: false,
        text: `buy ${text}`,
      },
    ]);
  };

  const removeItemList = (id) => {
    setToDoList(
      toDoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const changeCompleted = (id) => {
    const date = new Date();

    setToDoList(
      toDoList.map((data) => {
        return data.id === id
          ? {
              ...data,
              completed: !data.completed,
              lastStatusChanged: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`,
            }
          : data;
      })
    );
  };

  const [filter, setFilter] = React.useState("all");
  const filteredItems = toDoList.filter(({ completed }) => {
    if (filter === "all") return true;
    if (filter === "completed") return completed;
    if (filter === "notCompleted") return !completed;
  });
  return (
    <div className="App">
      {["all", "completed", "notCompleted"].map((filterStatus) => (
        <button key={filterStatus} onClick={() => setFilter(filterStatus)}>
          {filterStatus}
        </button>
      ))}
      <AddItemToList addItemToLIst={addItemToLIst} />
      <List
        changeCompleted={changeCompleted}
        removeItemList={removeItemList}
        toDoList={filteredItems.sort((a, b) => {
          if (a.text > b.text) {
            return 1;
          }
          if (a.text < b.text) {
            return -1;
          }

          return 0;
        })}
      />
    </div>
  );
}

export default App;
