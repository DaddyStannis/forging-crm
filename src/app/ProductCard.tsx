import {
  Card,
  CardContent,
  CardMedia,
  Input,
  TextField,
  Typography,
  FormLabel,
  CardActions,
  Box,
} from "@mui/material";

export const ProductCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="294"
        image="/images/photo_2024-07-27_00-05-47.jpg"
        alt="Paella dish"
      />
      {/* <Input type="number"></Input> */}
      <CardContent>
        <Typography variant="h5">article</Typography>
      </CardContent>
      <CardActions>
        <Box>
          <FormLabel
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Кількість
            <TextField defaultValue={0} inputProps={{ type: "number" }} />
          </FormLabel>
        </Box>
      </CardActions>
    </Card>
  );
};
