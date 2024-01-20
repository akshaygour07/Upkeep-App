import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpend, setisExpend] = useState(false);

  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteText((preValue) => {
      return {
        ...noteText,
        [name]: value,
      };
    });
  }

  function expand() {
    setisExpend(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpend && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={noteText.title}
          />
        )}

        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpend ? "3" : "1"}
          value={noteText.content}
        />
        <Zoom in={isExpend}>
          <button
            onClick={(event) => {
              props.onAdd(noteText);
              setNoteText({
                title: "",
                content: "",
              });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
