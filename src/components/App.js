import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(noteText) {
    setItems((prevItem) => {
      return [...prevItem, noteText];
    });
  }

  function deleteItem(id) {
    setItems((prevItem) => {
      return items.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
