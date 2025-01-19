import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Box, Fab, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import customerPic from "../../../public/images/customer_card.png";
import { CustomerList } from "@/src/types/CustomerList";
import CustomersListSearch from "./CustomersListSearch";

const CustomersList = async () => {
  const customersListResponse = await fetch(
    `${process.env.BASE_URL}/api/customers-list`,
  );
  const customersList: CustomerList[] = await customersListResponse.json();

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
        <CustomersListSearch customersList={customersList} />
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
