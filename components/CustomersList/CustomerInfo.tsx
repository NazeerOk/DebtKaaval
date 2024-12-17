import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import CenteredBox from "../UI/CenteredBox";

type CustomerInfo = {
  name: string;
  balance: number | string;
  date: Date;
};

const CustomerInfo = ({ balance, date, name }: CustomerInfo) => {
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
              .format(date)
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
