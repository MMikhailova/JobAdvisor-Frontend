import { Grid, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

import { useNavigate } from "react-router-dom";

export default function Banner({ setCompany }) {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        height: { xs: "auto", md: "100vh" },
        textAlign: { xs: "center", md: "left", lg: "left" },
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Grid item xs={12} sx={{ textAlign: "start", ml: 1 }}>
        <Typography>
          <img
            src="../assets/ja-logo.png"
            alt="jobadvisorlogo"
            width={170}
            height={150}
            onClick={() => navigate("/")}
          />
        </Typography>
      </Grid>
      <Grid item xs={12} md={10} lg={10}>
        <Typography
          sx={{
            // textAlign: { xs: "center", md: "left", lg: "center" },
            fontFamily: "sans-serif",
            typography: {
              lg: "h2",
              md: "h3",
              sm: "h4",
              xs: "h5",
            },
          }}
        >
          Discover a company DNA
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            // textAlign: "left",
            fontFamily: "sans-serif",
            typography: {
              lg: "h2",
              md: "h3",
              sm: "h4",
              xs: "h5",
            },
          }}
        >
          to find the perfect match for You!
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={10}>
        <Typography
          sx={{
            typography: { md: "body1", sm: "body2" },
          }}
        >
          Job Advisor helps companies promote the right values and job seekers
          make the right career choice.
        </Typography>
      </Grid>
      <Grid item xs={10} md={6} lg={6} sx={{ mt: 1 }}>
        <SearchBar setCompany={setCompany}></SearchBar>
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        <img
          src="../../assets/figma download/edited-idea.png"
          alt="women"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
}
