import { Reducer } from "redux";
import { LOADING, REPORT_LOADED, ERR_LOADING_REPORT } from "../actions/types";

interface ReportState {
  loading: boolean;
  data: any | null;
  message: string | null;
}

const initialState: ReportState = {
  loading: false,
  data: null,
  message: null,
};

const reportReducer: Reducer<ReportState> = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case REPORT_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        message: "successfully loaded report data",
      };
    case ERR_LOADING_REPORT:
      return {
        ...state,
        loading: false,
        data: null,
        message: "error loading report data",
      };
    default:
      return state;
  }
};

export default reportReducer;
