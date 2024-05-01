import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const rootStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  marginBottom: "1rem",
};

const buttonStyle: React.CSSProperties = {
  marginTop: "0.5rem",
  padding: "8px 16px",
  backgroundColor: "rgba(93, 135, 255, 0.85)",
  color: "#ffffff",
  borderRadius: "20px",
  border: "none",
  textDecoration: "none",
};

const LandingPage = () => {
  return (
    <Container style={rootStyle} maxWidth="sm">
      <Typography variant="h4" component="h1" style={titleStyle}>
        Welcome to the Financial Services Innovation Lab
      </Typography>
      <Typography variant="h6" component="p">
        Programming Task for Summer Research
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Analyzing the 10K filing of Companies using LLM API
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/reports"
        style={buttonStyle}
      >
        Start Analysis
      </Button>
    </Container>
  );
};

export default LandingPage;
