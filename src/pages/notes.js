import React, { useState } from "react";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { Highlight } from "@mui/icons-material";

const Notes = ({collapsed, handleCollapse}) => {
    const [items, setItems] = useState([]);

  const addItem = (noteText) => {
    setItems((prevItems) => [...prevItems, noteText]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== id));
  };

  return (
    <Layout collapsed={collapsed} handleCollapse={handleCollapse}>
    <StyledNotesSection>
      <Box className="notes-creation">
        <Typography variant="h5" textAlign="center" mb="20px" fontFamily="'McLaren', cursive">Choose Your Subject or Create New Subject</Typography>
        <Box sx={{display: 'flex', justifyContent:'space-between', padding:"20px"}}>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:"20px"}}>
            <TextField 
              placeholder="Subject"
              sx={{
                background: "#fff",
                borderRadius: "7px",
                boxShadow: "0 1px 5px rgb(138, 137, 137)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Remove the border color
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Remove the border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Remove the border color on focus
                  },
                },
              }}
            />
            <Button sx={{backgroundColor:'#f5ba13', color:'white', "&:hover":{backgroundColor:'orange'}}}>Start</Button>
          </Box>
          <Highlight style={{ fontSize: 100 }} className="title-icon" /> 
        </Box>
      </Box>
      {/* <CreateArea onAdd={addItem} />
      {items.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteItem}
        />
      ))} */}
    </StyledNotesSection>
    </Layout>
  );
};

export default Notes;

const StyledNotesSection = styled(Box)({
  display:'flex',
  justifyContent:'center',
  width:"100%",
  marginTop:"40px",
  "& .notes-creation":{
    background: "#fff",
    padding: "25px",
    height:"25vh",
    borderRadius: "7px",
    boxShadow: "0 1px 5px rgb(138, 137, 137)",
  }
})
