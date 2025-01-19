import { Box, Fab } from "@mui/material";
import Link from "next/link";
import React from "react";
import ReceiptIcon from "@mui/icons-material/Receipt";

const Bills = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={2}
      mt={3}
      position={"relative"}
      height={"75%"}
      sx={{ backgroundColor: "white" }}
      borderRadius={2}
    >
      <Box sx={{ alignSelf: "flex-end", marginTop: "auto" }}>
        <Link href={"/add-bills"}>
          <Fab variant="extended" size="medium" color="primary">
            <ReceiptIcon sx={{ mr: 1 }} />
            Add Bills
          </Fab>
        </Link>
      </Box>
    </Box>
  );
};

export default Bills;
