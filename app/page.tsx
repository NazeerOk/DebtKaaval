import { Grid2 } from "@mui/material";

import styles from "./page.module.css";
import CustomersList from "../components/CustomersList/CustomersList";

export default function Home() {
  return (
    <div className={styles.page}>
      <Grid2
        container
        spacing={2}
        sx={{
          minHeight: "15vh",
          background: "var(--teal)",
          padding: "10px",
          color: "white",
          position: "relative",
        }}
      >
        <Grid2 size={12} sx={{ textAlign: "center" }}>
          <h3>DebtKaaval</h3>
        </Grid2>
        <Grid2
          container
          sx={{
            background: "white",
            color: "black",
            borderRadius: "10px",
            padding: "5px",
            position: "absolute",
            bottom: "-10px",
            left: 0,
            // margin: "10px",
            minHeight: "80px",
          }}
          size={12}
          spacing={2}
        >
          <Grid2 size={6} sx={{ textAlign: "center" }}>
            <p>Order to be delivered</p>
          </Grid2>
          <Grid2 size={6} sx={{ textAlign: "center" }}>
            <p>Pending Amount</p>
          </Grid2>
        </Grid2>
      </Grid2>
      <CustomersList />
    </div>
  );
}
