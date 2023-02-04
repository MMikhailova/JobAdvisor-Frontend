import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Other/Team";
import AboutUs from "./pages/Other/AboutUs";
import CompanyOverview from "./pages/CompanyOverview";
import HomePage from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import ContactUs from "./pages/Other/ContactUs";
import ReviewForm from "./pages/ReviewForm";

export default function App() {
  const [tag, setTag] = useState("work-life-balances");
  const [company, setCompany] = useState("");
  const [companyId, setCompanyId] = useState(null);
  const handleSelection = (selectedTag) => {
    selectedTag && setTag(selectedTag);
  };
  console.log(company);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage setCompany={setCompany} onSelect={handleSelection} />
            }
          />
          <Route
            path="/searchResult"
            element={<SearchResult setCompany={setCompany} tag={tag} />}
          />
          <Route
            path="/companyOverview"
            element={
              <CompanyOverview company={company} setCompanyId={setCompanyId} />
            }
          />
          <Route
            path="/reviews"
            element={<ReviewForm companyId={companyId} />}
          />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}
