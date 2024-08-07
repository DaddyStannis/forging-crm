import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Shop
        </Typography>
        <IconButton color="inherit">
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
