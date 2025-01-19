import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Transition } from "@/src/utils/helper";

type ChildComponentProps = { handleClose: () => void };

type FullScreenProps = {
  title: string;
  onClose: () => void;
  children: React.ReactElement<ChildComponentProps>;
};

export default function FullScreenDialog({
  title,
  onClose,
  children,
}: FullScreenProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {React.cloneElement(children, { handleClose })}
      </Dialog>
    </React.Fragment>
  );
}
