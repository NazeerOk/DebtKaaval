"use client";

import { useState, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type CustomerDetails = {
  name: string;
  number: string | number;
};

export default function AddCustomer() {
  const router = useRouter();

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: "",
    number: "",
  });

  const handleCustomerDetails = (
    prop: "name" | "number",
    val: string | number,
  ) => {
    if (prop === "number" && val === "e") return;
    setCustomerDetails((prevState) => ({
      ...prevState,
      [prop]: val,
    }));
  };

  const handleSaveBtn = () => {};

  return (
    <>
      <Dialog fullScreen open={true} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={router.back}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add Party
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component={"form"}
          noValidate
          autoComplete="off"
          sx={{
            padding: 2,
            m: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box>
            <TextField
              label="Party name"
              variant="outlined"
              fullWidth
              required
              value={customerDetails["name"]}
              onChange={(e) => handleCustomerDetails("name", e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Typography variant="subtitle1" sx={{ mr: 2 }}>
              +91
            </Typography>
            <TextField
              id="mobile-number"
              label="Mobile Number"
              variant="standard"
              fullWidth
              value={customerDetails.number}
              onChange={(e) =>
                e.target.value.toString().length <= 10 &&
                handleCustomerDetails("number", e.target.value)
              }
              required={Boolean(customerDetails.number)}
              onKeyDown={(e) =>
                ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
              }
              onWheel={(e) => (e.target as HTMLElement).blur()}
              type="number"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            disabled={
              customerDetails.name === "" ||
              Boolean(
                customerDetails.number &&
                  customerDetails.number.toString().length < 10,
              )
            }
            onClick={handleSaveBtn}
          >
            Add Customer
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
