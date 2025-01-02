import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import CenteredBox from "../UI/CenteredBox";
import { CustomerList } from "@/src/types/CustomerList";

const CustomerInfo = ({ balance, date, name }: CustomerList) => {
  return (
    <CenteredBox sx={{ justifyContent: "space-between" }}>
      <Box display={"flex"} gap={"20px"}>
        <CenteredBox>
          <Avatar>{name[0]}</Avatar>
        </CenteredBox>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1">
            {new Intl.DateTimeFormat("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
              .format(new Date(date))
              .replace(/\//g, "-")}
          </Typography>
        </Box>
      </Box>
      <CenteredBox>
        <Typography variant="h6">&#8377;{` ${balance}`}</Typography>
      </CenteredBox>
    </CenteredBox>
  );
};

export default CustomerInfo;
