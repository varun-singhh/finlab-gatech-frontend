import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

interface MyFormProps {
  onSubmit: (text: string, year: number) => void;
}

const Form: React.FC<MyFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [year, setYear] = useState<number | "">("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as number);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(text, year as number);
  };

  // Generate years from 1995 to current year
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 1995; i <= currentYear; i++) {
    years.push(i);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Enter Tiker Name"
            value={text}
            onChange={handleTextChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Select
            value={year}
            onChange={handleYearChange}
            displayEmpty
            fullWidth
            margin="normal"
          >
            <MenuItem value="" disabled>
              Select Year
            </MenuItem>
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={2}>
          <button
            type="submit"
            style={{
              padding: "16px 16px",
              backgroundColor: "rgba(93, 135, 255, 0.85)",
              color: "#ffffff",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Generate Report
          </button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
