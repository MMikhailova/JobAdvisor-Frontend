import { Grid, Typography, List, ListItemText } from "@mui/material";
import { Link } from "@mui/material";

export default function Contact() {
  return (
    <Grid
      container
      sx={{ justifyContent: "center", alignItems: "center" }}
      height={"50vh"}
    >
      <Grid md={5} lg={6}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "sans-serif",
            typography: {
              md: "h3",
              sm: "h4",
              xs: "h5",
            },
          }}
        >
          Contact Us
        </Typography>
        <List>
          <ListItemText>
            <Typography
              lineHeight={2}
              sx={{
                mt: 3,
                textAlign: "center",
              }}
            >
              Email enquires:
              <Link href="mailto:jobadvisor2022@gmail.com">
                jobadvisor2022@gmail.com
              </Link>
            </Typography>
          </ListItemText>
        </List>
      </Grid>
    </Grid>
  );
}
