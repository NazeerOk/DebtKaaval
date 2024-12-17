import { Box } from "@mui/material";
import React from "react";

type CenteredBox = {
  children: React.ReactElement | React.ReactElement[];
  sx?: React.CSSProperties;
};

const CenteredBox = ({ children, sx }: CenteredBox) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ ...sx }}
    >
      {children}
    </Box>
  );
};

export default CenteredBox;
