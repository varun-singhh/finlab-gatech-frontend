import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getReportData } from "../../../actions/report";
import { AppDispatch, RootState } from "../../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MyFormProps {
  onSubmit: (text: string, year: number) => void;
}

const Form: React.FC<MyFormProps> = () => {
  const loadState = useSelector((state: RootState) => state?.report.loading);
  const messageState = useSelector((state: RootState) => state?.report.message);
  const dispatch: AppDispatch = useDispatch();

  console.log(loadState);
  const [ticker, setTicker] = useState("");
  const [year, setYear] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleTickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as number);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    dispatch(getReportData(year, ticker));
  };

  // Generate years from 1995 to current year
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 1995; i <= currentYear; i++) {
    years.push(i);
  }

  const notifySuccess = () => toast.success(message);
  const notifyFailure = () => toast.error(message);

  useEffect(() => {
    setLoading(loadState ?? false);
    setMessage(messageState ?? "");
  }, [loadState, messageState]);

  useEffect(() => {
    if (message === "successfully loaded report data") {
      notifySuccess();
    }
    if (message === "error loading report data") {
      notifyFailure();
    }
  }, [message]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Enter Tiker Name"
            value={ticker}
            onChange={handleTickerChange}
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
            {loading === true ? "Generating Report ..." : "Generate Report"}
          </button>
        </Grid>
        <ToastContainer />
      </Grid>
    </form>
  );
};

export default Form;
