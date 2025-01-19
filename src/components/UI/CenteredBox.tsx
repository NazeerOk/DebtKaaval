import { Box } from "@mui/material";
import React from "react";

type CenteredBox = {
  children: React.ReactElement | React.ReactElement[];
  sx?: React.CSSProperties;
  onClick?: () => void;
};

const CenteredBox = ({ children, sx, onClick }: CenteredBox) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ ...sx }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default CenteredBox;
