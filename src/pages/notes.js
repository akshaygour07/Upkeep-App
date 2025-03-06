import React, { useState } from "react";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { Highlight } from "@mui/icons-material";
import { NotesSection } from "../components/CollectionNote";




const Notes = ({collapsed, handleCollapse}) => {
  const [showNotes, setShowNotes] = useState(false);
  const [subject, setSubject] = useState("")

  return (
    <Layout collapsed={collapsed} handleCollapse={handleCollapse}>
      <StyledNotesSection>
        {!showNotes ?  (<Box className="notes-creation">
          <Typography className="note-text">
            Choose Your Subject or Create New Subject
          </Typography>
          <Box  
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <TextField 
                placeholder="Subject" 
                className="note-text-field" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <Button className="note-button" onClick={() => setShowNotes(true)}>Start</Button>
            </Box>
            <Highlight style={{ fontSize: 100 }} className="title-icon" />
          </Box>
        </Box> 
        ): (
          <NotesSection subject={subject} setShowNotes={setShowNotes} />
        )}
      </StyledNotesSection>
    </Layout>
  );
};

export default Notes;

const StyledNotesSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  
  "& .notes-creation": {
    background: "#fff",
    padding: "25px",
    height: "25vh",
    marginTop: "60px",
    borderRadius: "7px",
    boxShadow: "0 1px 5px rgb(138, 137, 137)",
  },
  "& .note-text": {
    fontSize: "25px",
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "'McLaren', cursive",
  },
  "& .note-button":{
    backgroundColor: "#f5ba13",
    color: "white",
    "&:hover": { backgroundColor: "orange" },
  },
  "& .note-text-field": {
    background: "#fff",
    width:"350px",
    borderRadius: "7px",
    boxShadow: "0 1px 3px rgb(138, 137, 137)",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
});
