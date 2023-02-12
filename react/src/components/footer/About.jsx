import { Typography } from "@mui/material";

// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={2}
      pb={4}
      sx={{
        mx: "0px",
        height: { xs: "auto", md: "100vh" },
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Grid xs={12} md={10}>
        <Typography sx={{ ml: 5 }}>
          <img
            style={{ cursor: "pointer" }}
            src="../assets/ja-logo.png"
            alt="jobadvisorlogo"
            width={150}
            height={120}
            onClick={() => navigate("/")}
          />
        </Typography>
      </Grid>
      <Grid xs={12} md={12} lg={12}>
        <Typography
          sx={{
            textAlign: "center",
            typography: {
              lg: "h2",
              md: "h3",
              sm: "h4",
              xs: "h6",
            },
          }}
        >
          About JobAdvisor
        </Typography>
      </Grid>
      <Grid
        container
        spacing={4}
        wrap="wrap"
        textAlign={"justify"}
        justifyContent={"center"}
        gap={2}
      >
        <Grid
          xs={10}
          md={4}
          sx={{
            backgroundColor: "#DEFEF2",
          }}
        >
          <Typography variant="h6">Mission</Typography>
          <Typography variant="body1">
            Job Advisor helps organisations promote right values and job seekers
            to make right choices for their career.
          </Typography>
        </Grid>
        <Grid
          sx={{
            backgroundColor: "#FEEFC6",
          }}
          xs={10}
          md={4}
        >
          <Typography variant="h6">Vision</Typography>
          <Typography variant="body1">
            At Job Advisor, we help people to get jobs. We believe financial
            independence can help people live up to their potential and get back
            control of their own lives.
          </Typography>
        </Grid>
        <Grid
          xs={10}
          md={4}
          sx={{
            backgroundColor: "#D7E7FF",
          }}
        >
          <Typography variant="h6">Values</Typography>
          <Typography variant="body1">
            Create economic opportunity for every member of the global
            workforce. our users can find all the information they need with one
            or two clicks
          </Typography>
        </Grid>
      </Grid>

      {/* 
      <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          marginRight={"80px"}
        >
          MISSION
        </Typography>
      </Grid>
      <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
        <Typography variant="paragraph" justify="" color="text.primary">
          At Job Advisor, We help people to get jobs. We believe financial
          independence can help people live up to their potential and get back
          control of their own lives .
        </Typography>
      </Grid>

      <Grid item md={5} lg={6} sx={{ my: 5, mx: 3 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          marginRight={"80px"}
        >
          VISION
        </Typography>
        <Typography variant="paragraph" justify="" color="text.primary">
          Create economic opportunity for every member of the global workforce.
          our users can find all the information they need with one or two
          clicks
        </Typography>
      </Grid> */}
    </Grid>
  );
}
