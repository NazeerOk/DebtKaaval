"use client";

import { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Divider, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { SALE_BILL_START_DATE, SALE_BILL_END_DATE } from "../../utils/config";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddCustomer() {
  const router = useRouter();

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
              Sale Bill
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
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography component={"span"}>Sale Bill Number</Typography>
              <Typography component={"p"}>1</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography component={"span"}>Date</Typography>
              <input
                type="date"
                min={SALE_BILL_START_DATE}
                max={SALE_BILL_END_DATE}
              />
            </Box>
          </Box>

          <Divider variant="fullWidth" />
          <Box>
            <Typography component={"span"}>Bill To</Typography>
            <Box>
              <TextField
                label="Search by Customer"
                variant="outlined"
                fullWidth
                disabled
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={handleSaveBtn}>
            Add Bill
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
