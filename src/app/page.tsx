import { Container, Grid } from "@mui/material";

import { Header } from "./Header";
import { ProductCard } from "./ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Container sx={{ mt: { xs: "56px", sm: "64px" } }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <ProductCard></ProductCard> <ProductCard></ProductCard>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
