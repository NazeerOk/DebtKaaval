"use client";

import React, { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Box, Fab, InputAdornment, TextField, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import customerPic from "../../public/images/customer_card.png";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CustomerInfo from "./CustomerInfo";

const DummyJSON = [
  {
    id: 1,
    name: "John Doe",
    balance: "20",
    date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: "Alan",
    balance: "50",
    date: new Date(),
  },
  {
    id: 3,
    name: "Victor",
    balance: "40",
    date: new Date(new Date().setMonth(11, 1)),
  },
];

const CustomersList = () => {
  const [customersList] = useState([]);
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
      {customersList.length === 0 ? (
        <Box>
          <Image
            src={customerPic}
            alt="customer-card"
            width={"300"}
            height={"300"}
          />
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Add Customers & Collect Payment Faster
          </Typography>
        </Box>
      ) : (
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
          />
          {DummyJSON.map(({ balance, date, id, name }) => (
            <CustomerInfo key={id} balance={balance} date={date} name={name} />
          ))}
        </Box>
      )}

      <Box sx={{ alignSelf: "flex-end", marginTop: "auto" }}>
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

export default CustomersList;
