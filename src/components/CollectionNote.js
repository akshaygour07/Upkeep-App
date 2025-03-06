import React, {useState} from 'react';
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import styled from '@emotion/styled';

export const NotesSection = ({ subject, setShowNotes }) => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
  
    const addItem = (noteText) => {
      setItems((prevItems) => [...prevItems, noteText]);
    };
  
    const deleteItem = (id) => {
      setItems((prevItems) => prevItems.filter((_, index) => index !== id));
    };

    const  handleClick = () => {
        setShowNotes(false)
    }
  
    // Filter notes based on search input
    const filteredNotes = items.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <StyledNoteBox>
        {/* Header Section */}
        <Box className="header">
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
            Subject: {subject}
          </Typography>

          <Box sx={{ display: "flex", gap: "30px" }}>
            <TextField
              placeholder="Search notes..."
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="searchBox"
            />

            {/* New Subject Button */}
            <Button className="subjectAddButton" onClick={handleClick}>
              Add Subject +
            </Button>
          </Box>
        </Box>

        {/* Create Notes Area */}
        <Box
          sx={{
            height: "70vh",
            border: "1px solid #f5ba13",
            backgroundColor: "white",
            // backgroundColor: "#ffefa5",
            marginTop: "20px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
          }}
        >
          <CreateArea onAdd={addItem} />

          {/* Notes Display Section */}
          <Box
            sx={{
              gap: "20px",
              marginTop: "25px",
            }}
          >
            {items.map((noteItem, index) => (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteItem}
              />
            ))}
          </Box>
        </Box>
      </StyledNoteBox>
    );
  };


  const StyledNoteBox = styled(Box)({
    width: "90%",
    marginTop:'20px',
    "& .header": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#f5ba13",
      borderRadius: "12px",
      padding: "15px 25px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    "& .searchBox": {
      backgroundColor: "white",
      borderRadius: "20px",
      width: "300px",
      border: "none",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ddd",
          borderRadius: "20px",
          
        },
        "&:hover fieldset": {
          borderColor: "#bbb",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#f5ba13",
          
        },
      },
    },
    "& .subjectAddButton": {
      backgroundColor: "white",
      color: "#f5ba13",
      padding: "8px 20px",
      borderRadius: "30px",
      fontSize: "14px",
      fontWeight: "bold",
      textTransform: "none",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        backgroundColor: "#f4f4f4",
      },
    },
  });