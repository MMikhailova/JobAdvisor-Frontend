import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/footer/Contact";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function ContactUs() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mx: "0px",
        height: { xs: "auto", md: "100vh" },
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header></Header>
      <Contact></Contact>
      <Footer></Footer>
    </Grid>
  );
}
