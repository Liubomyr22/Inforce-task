import React from "react";

const List = ({ toDoList, removeItemList, changeCompleted }) => {
  return (
    <>
      {toDoList.map(({ id, text, lastStatusChanged, completed }) => {
        return (
          <li key={id}>
            <span>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => {
                  changeCompleted(id);
                }}
              />
              - {text} {lastStatusChanged}
              <button onClick={() => removeItemList(id)}>x</button>
            </span>
          </li>
        );
      })}
    </>
  );
};

export default List;
