import { Box, Typography, Grid, List } from "@mui/material";
//import { createTheme } from "@mui/material/styles";
export default function TextSection() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        textAlign: "center",
        justifyContent: "center",
        mx: 2,
        flexDirection: "column",
      }}
    >
      <Grid
        container
        md={5}
        lg={12}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <List>
          <Typography
            sx={{
              color: "#EC615B",
              lineHeight: "30px",
              typography: {
                md: "h5",
                sm: "h6",
                xs: "h6",
              },
            }}
          >
            Search by specific company
          </Typography>
          <Typography
            sx={{
              lineHeight: "42px",
              mt: 2,
            }}
          >
            Check out our selection of companies working towards following goals
          </Typography>
        </List>
      </Grid>
    </Box>
  );
}
