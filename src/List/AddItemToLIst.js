import React from "react";

const AddItemToList = ({ addItemToLIst }) => {
  const [input, setInput] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addItemToLIst(input);
      }}
    >
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />

      <button>Add Item</button>
    </form>
  );
};

export default AddItemToList;
