import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon fontSize="large" className="title-icon" />
        UpKeep
      </h1>
    </header>
  );
}

export default Header;
