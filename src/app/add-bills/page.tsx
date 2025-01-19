"use client";

import { forwardRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { SALE_BILL_START_DATE, SALE_BILL_END_DATE } from "../../utils/config";
import FullScreenDialog from "@/src/components/UI/FullScreenDialog";
import AddParty from "./AddParty";
import CenteredBox from "@/src/components/UI/CenteredBox";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type DisplayViewType = "Party" | "Items" | "";

export default function AddBills() {
  const router = useRouter();
  const [displayView, setDisplayView] = useState<DisplayViewType>("");

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
              <CenteredBox
                sx={{
                  width: "100%",
                  border: "2px solid rgba(0, 0, 0, 0.23)",
                  height: "50px",
                  borderRadius: "3%",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                }}
              >
                <Box onClick={() => setDisplayView("Party")}>
                  <Typography variant="body1">Search by Customer</Typography>
                </Box>
              </CenteredBox>
              {displayView === "Party" && (
                <FullScreenDialog
                  title="Add Party"
                  onClose={() => {
                    setDisplayView("");
                  }}
                >
                  <AddParty />
                </FullScreenDialog>
              )}
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
