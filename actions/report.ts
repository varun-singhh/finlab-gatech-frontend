import axios from "axios";
import { LOADING, REPORT_LOADED, ERR_LOADING_REPORT } from "./types";
import { Dispatch } from "redux";

export const getReportData =
  (year: any, ticker: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOADING });

      const res = await axios.get(
        `http://localhost:8000/api/report?year=${year}&ticker=${ticker}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: REPORT_LOADED,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ERR_LOADING_REPORT,
        payload: error.response?.data,
      });
    }
  };
