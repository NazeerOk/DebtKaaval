"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GroupsIcon from "@mui/icons-material/Groups";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Paper } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ height: "100px" }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Parties"
            icon={<GroupsIcon sx={{ color: "blue" }} />}
            LinkComponent={Link}
            href="/"
          />
          <BottomNavigationAction
            label="Bills"
            icon={<ReceiptLongIcon sx={{ color: "grey" }} />}
            LinkComponent={Link}
            href="/bills"
          />
          <BottomNavigationAction
            label="Items"
            icon={<Inventory2Icon sx={{ color: "grey" }} />}
          />
          <BottomNavigationAction
            label="More"
            icon={<MoreHorizIcon sx={{ color: "grey" }} />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
