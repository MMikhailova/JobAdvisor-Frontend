import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import Teamjob from "../../components/footer/Teamjob";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Team() {
  return (
    <Grid
      xs={12}
      sx={{
        height: { xs: "auto", md: "100vh" },
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header></Header>
      <Teamjob></Teamjob>
      <Footer></Footer>
    </Grid>
  );
}
