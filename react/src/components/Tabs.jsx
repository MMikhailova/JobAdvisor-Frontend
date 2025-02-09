import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  Stack,
  Button,
  CardMedia,
  Rating,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddIcon from "@mui/icons-material/Add";

import { getCompanyDataVm } from "../api/viewModelels/companyDataVm";
import { useEffect, useState } from "react";
import OpenJobs from "./Jobs";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ company, setCompanyId }) {
  const responsiveHeader = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
    justifyContent: "center",
  };
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [value, setValue] = React.useState(0);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    getCompanyDataVm(company, value).then((vm) => {
      setCompanyData(vm);
    });
  }, [company, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(companyData);
  return companyData.map((c) => (
    <Card sx={{ mt: 0.1, p: 2, maxWidth: 10100 }}>
      <CardHeader
        sx={responsiveHeader}
        avatar={
          <Avatar
            variant="square"
            src={`${c.attributes.image.data.attributes.formats.thumbnail.url}`}
            sx={{ width: 200, height: 100 }}
            style={{ objectFit: "cover" }}
          ></Avatar>
        }
        action={
          <Stack spacing={3} direction="row" sx={{ mt: 3, mx: 2 }}>
            <Button
              sx={{ bgcolor: "#5A85C2" }}
              onClick={() =>
                openInNewTab(`https://www.${c.attributes.name}.com`)
              }
              variant="contained"
              startIcon={<ArrowOutwardIcon />}
            >
              Visit Website
            </Button>
            <Button
              sx={{ bgcolor: "#5A85C2" }}
              variant="contained"
              endIcon={<AddIcon />}
              onClick={() => {
                setCompanyId(c.id);
                navigate("/reviews");
              }}
            >
              Review
            </Button>
          </Stack>
        }
      />
      <CardActions>
        {/* tabs */}
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: 1,
              borderTop: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={value}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable auto tabs example"
              onChange={handleChange}
              // sx={{ display: "flex", textAlign: "center" }}
            >
              <Tab label="About" {...a11yProps(0)} />
              <Tab label="Benefits & Compensation" {...a11yProps(1)} />
              <Tab label="Sustainability" {...a11yProps(2)} />
              <Tab label="Work/Life Balance" {...a11yProps(3)} />
              <Tab label="Diversity & Inclusion" {...a11yProps(4)} />
              <Tab label="Review" {...a11yProps(5)} />
            </Tabs>
          </Box>
          {/* About */}
          <TabPanel
            sx={{ display: "flex", flexDirection: "column" }}
            value={value}
            index={0}
          >
            <Typography variant="h5" gutterBottom>
              {c.attributes.name && c.attributes.name} overview
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography subtitle1="h5" gutterBottom>
                {c.attributes.industry && c.attributes.industry}
              </Typography>
              <Typography variant="caption" gutterBottom>
                {c.attributes.industry && c.attributes.location}
              </Typography>
            </Box>
            <Typography variant="p" gutterBottom>
              {c.attributes.description && c.attributes.description}
            </Typography>
            <OpenJobs company={company}></OpenJobs>
          </TabPanel>
          {/* Benefits & Compensation */}
          <TabPanel value={value} index={1}>
            {value === 1 &&
            c.attributes.benefits_compensations &&
            c.attributes.benefits_compensations.data.length === 0 ? (
              <Typography>
                No information available. If you are a company representative
                and interested in sharing your knowledge, please contact us by{" "}
                <a href="jobadvisor2022@gmail.com">jobadvisor2022@gmail.com </a>
              </Typography>
            ) : (
              value === 1 &&
              c.attributes.benefits_compensations &&
              c.attributes.benefits_compensations.data.map((w) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h7" gutterBottom>
                    Type of benefit
                  </Typography>
                  <Typography variant="p" sx={{ m: 1 }} gutterBottom>
                    {w.attributes.type && w.attributes.type}
                  </Typography>
                  <Typography variant="h7" gutterBottom>
                    Conditions
                  </Typography>
                  <Typography variant="p" sx={{ m: 1 }} gutterBottom>
                    {w.attributes.condition && w.attributes.condition}
                  </Typography>
                  <Typography variant="h7" gutterBottom>
                    Seniority level
                  </Typography>
                  <Typography variant="p" sx={{ m: 1 }} gutterBottom>
                    {w.attributes.seniority && w.attributes.seniority}
                  </Typography>
                </Box>
              ))
            )}
          </TabPanel>
          {/* Sustainability */}
          <TabPanel value={value} index={2}>
            {value === 2 &&
            c.attributes.social_responsibilities &&
            c.attributes.social_responsibilities.data.length === 0 ? (
              <Typography>
                No information available. If you are a company representative
                and interested in sharing your knowledge, please contact us by{" "}
                <a href="jobadvisor2022@gmail.com">jobadvisor2022@gmail.com </a>
              </Typography>
            ) : (
              value === 2 &&
              c.attributes.social_responsibilities &&
              c.attributes.social_responsibilities.data.map((w) => (
                <Box sx={{ display: "flex", flexDirection: "column", m: 3 }}>
                  <Typography variant="h7" sx={{ mb: 1 }} gutterBottom>
                    Type of social activity:{" "}
                    {w.attributes.type && w.attributes.type}
                  </Typography>
                  <Typography variant="h7" sx={{ mb: 1 }} gutterBottom>
                    {w.attributes.title && w.attributes.title}
                  </Typography>

                  <Typography variant="p" sx={{ mb: 1 }} gutterBottom>
                    {w.attributes.description && w.attributes.description}
                  </Typography>
                  <Typography variant="p" sx={{ mb: 1 }} gutterBottom>
                    {w.attributes.impact && w.attributes.impact}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="300"
                    sx={{ objectFit: "contain" }}
                    image={`${w.attributes.image.data.map(
                      (i) => i.attributes.url
                    )}`}
                    alt="Paella dish"
                  >
                    {console.log(w.attributes.image)}
                  </CardMedia>
                </Box>
              ))
            )}
          </TabPanel>
          {/* Work&Life balance */}
          <TabPanel value={value} index={3}>
            {value === 3 &&
            c.attributes.work_life_balances &&
            c.attributes.work_life_balances.data.length === 0 ? (
              <Typography>
                No information available. If you are a company representative
                and interested in sharing your knowledge, please contact us by{" "}
                <a href="jobadvisor2022@gmail.com">jobadvisor2022@gmail.com </a>
              </Typography>
            ) : (
              value === 3 &&
              c.attributes.work_life_balances &&
              c.attributes.work_life_balances.data.map((w) => (
                <Box sx={{ display: "flex", flexDirection: "column", m: 3 }}>
                  <Typography variant="h7" sx={{ mb: 1 }} gutterBottom>
                    Work model: {w.attributes.type && w.attributes.type}
                  </Typography>
                  <Typography variant="h7" sx={{ mb: 1 }} gutterBottom>
                    Advantages:
                  </Typography>
                  <Typography variant="p" sx={{ mb: 3 }} gutterBottom>
                    {w.attributes.workingHours && w.attributes.workingHours}
                  </Typography>
                  <Typography variant="p" sx={{ mb: 3 }} gutterBottom>
                    {w.attributes.description && w.attributes.description}
                  </Typography>
                </Box>
              ))
            )}
          </TabPanel>
          {/* Diversity &Inclusion */}
          <TabPanel value={value} index={4}>
            {value === 4 &&
            c.attributes.diversity_inclusions &&
            c.attributes.diversity_inclusions.data.length === 0 ? (
              <Typography>
                No information available. If you are a company representative
                and interested in sharing your knowledge, please contact us by{" "}
                <a href="jobadvisor2022@gmail.com">jobadvisor2022@gmail.com </a>
              </Typography>
            ) : (
              value === 4 &&
              c.attributes.diversity_inclusions &&
              c.attributes.diversity_inclusions.data.map((w) => (
                <Box sx={{ display: "flex", flexDirection: "column", m: 3 }}>
                  <Typography variant="h7" sx={{ mb: 1 }} gutterBottom>
                    Form of diversity: {w.attributes.type && w.attributes.type}
                  </Typography>
                  <Typography variant="p" sx={{ m: 3 }} gutterBottom>
                    {w.attributes.description && w.attributes.description}
                    <br />
                  </Typography>
                  <CardMedia
                    component="img"
                    height="400"
                    sx={{
                      objectFit: "stretch",
                    }}
                    image={`${w.attributes.image.data.map(
                      (i) => i.attributes.url
                    )}`}
                    alt="diversity"
                  ></CardMedia>
                </Box>
              ))
            )}
          </TabPanel>
          {/* Review */}
          <TabPanel value={value} index={5}>
            {value === 5 &&
              c.attributes.reviews &&
              c.attributes.reviews.data.map((r) => (
                <>
                  <Typography variant="h5" sx={{ mb: 1 }} gutterBottom>
                    {r.attributes.reviewTitle && r.attributes.reviewTitle}
                  </Typography>
                  <Typography subtitle1="h5" gutterBottom>
                    Role: {r.attributes.jobTitle && r.attributes.jobTitle}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={r.attributes.stars}
                    readOnly
                  />{" "}
                  <br />
                  <Typography variant="p" sx={{ my: 3 }} gutterBottom>
                    {r.attributes.feedback && r.attributes.feedback}
                  </Typography>
                </>
              ))}
          </TabPanel>
        </Box>
      </CardActions>
    </Card>
  ));
  // </Box>
}
