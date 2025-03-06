import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, IconButton } from "@mui/material";

function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  const [open, setOpen] = useState(false); // To control modal visibility

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClickOpen() {
    setOpen(true); // Open modal when textarea is clicked
  }

  function handleClose() {
    setOpen(false); // Close modal
  }

  function handleSave() {
    props.onAdd(noteText);
    setNoteText({
      title: "",
      content: "",
    });
    setOpen(false); // Close modal after saving the note
  }

  return (
    <>
      <form className="create-note">
        {/* Non-editable Textarea styled like a button */}
        <TextField
          onClick={handleClickOpen}
          name="content"
          placeholder="Take a note..."
          InputProps={{
            readOnly: true,
            // backgroundColor: "#ffefa5",
            style: { cursor: "pointer", backgroundColor: "#ffefa5", padding: "8px", color: 'black' },
          }}
          fullWidth
          variant="outlined"
        />
      </form>

      {/* Modal/Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write Your Note</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={noteText.title}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            onChange={handleChange}
            name="content"
            placeholder="Take your note content..."
            value={noteText.content}
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CreateArea;
