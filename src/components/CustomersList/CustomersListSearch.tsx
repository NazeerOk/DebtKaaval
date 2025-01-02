"use client";

import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomerInfo from "./CustomerInfo";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { CustomerList } from "@/src/types/CustomerList";

type CustomersListSearchProps = {
  customersList: CustomerList[];
};

const CustomersListSearch = ({ customersList }: CustomersListSearchProps) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchFilter = (customersList: CustomerList[]) => {
    return customersList.filter((customer) =>
      customer.name?.toLowerCase().includes(searchInput.toLowerCase()),
    );
  };

  return (
    <Box>
      <TextField
        id="customer-name-search"
        placeholder="Search Customer"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon sx={{ color: "blue" }} />
              </InputAdornment>
            ),
          },
        }}
        // variant="filled"
        sx={{ mb: 2, mt: 2, p: 0 }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {handleSearchFilter(customersList)?.map(({ balance, date, id, name }) => (
        <CustomerInfo key={id} balance={balance} date={date} name={name} />
      ))}
    </Box>
  );
};

export default CustomersListSearch;
