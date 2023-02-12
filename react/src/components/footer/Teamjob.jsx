import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Teamjob() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0px",
        height: "auto",
        maxWidth: "100%",
      }}
    >
      <Typography
        sx={{
          typography: {
            lg: "h2",
            md: "h3",
            sm: "h4",
            xs: "h6",
          },
          textAlign: "center",
          fontWeight: "600px",
          color: "Orange",
        }}
        gutterBottom
      >
        Our Team
      </Typography>
      <Box
        sx={{
          my: 4,
          justifyContent: { md: "space-evenly" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Card sx={{ textAlign: "center" }}>
          <CardContent>
            <img
              src="../../assets/fenny.png"
              alt="Team"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "90px",
              }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="teal"
              align="center"
            >
              <h5>Fenny</h5>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <h6>UI/UX Designer</h6>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ textAlign: "center" }}>
          <CardContent>
            <img
              src="../../assets/maria.png"
              alt="Team"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "90px",
              }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              color="teal"
            >
              <h5>Maria</h5>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <h6>Project Manager/Full stack developer </h6>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ textAlign: "center" }}>
          <CardContent>
            <img
              src="../../assets/minju.png"
              alt="Team"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "90px",
              }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              color="teal"
            >
              <h5>Minju</h5>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              <h6>Junior Developer</h6>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
