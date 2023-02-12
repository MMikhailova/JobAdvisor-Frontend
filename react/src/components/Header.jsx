import * as React from "react";

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Typography sx={{ ml: 5 }}>
      <img
        style={{ cursor: "pointer" }}
        src="../assets/ja-logo.png"
        alt="jobadvisorlogo"
        width={170}
        height={150}
        onClick={() => navigate("/")}
      />
    </Typography>
  );
};

export default Header;
