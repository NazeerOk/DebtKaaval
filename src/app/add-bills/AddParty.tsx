import CenteredBox from "@/src/components/UI/CenteredBox";
import { Avatar, Box, Fab, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const PARTIES = [
  {
    id: 1,
    name: "Check",
  },
  {
    id: 2,
    name: "New",
  },
];

type CustomerList = {
  id: number;
  name: string;
};

const AddParty = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchFilter = (customersList: CustomerList[]) => {
    return customersList.filter((customer) =>
      customer.name?.toLowerCase().includes(searchInput.toLowerCase()),
    );
  };

  return (
    <Box
      sx={{ m: 2, minHeight: "80vh", display: "flex", flexDirection: "column" }}
    >
      <TextField
        label="Search for Party"
        variant="outlined"
        fullWidth
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 400 }}>
          Parties
        </Typography>
        <Box>
          {handleSearchFilter(PARTIES).map((party) => (
            <CenteredBox
              sx={{
                justifyContent: "flex-start",
                gap: "10px",
                marginTop: "10px",
              }}
              key={party.id}
            >
              <Avatar sx={{ backgroundColor: "seagreen" }}>
                {party.name[0]}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                {party.name}
              </Typography>
            </CenteredBox>
          ))}
        </Box>
      </Box>
      <Box sx={{ alignSelf: "flex-end", marginTop: "auto", display: "flex" }}>
        <Link href={"/add-customer"}>
          <Fab variant="extended" size="medium" color="primary">
            <PersonAddIcon sx={{ mr: 1 }} />
            Add Customer
          </Fab>
        </Link>
      </Box>
    </Box>
  );
};

export default AddParty;
