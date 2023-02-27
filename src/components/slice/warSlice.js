// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  warReports: {
      
  }
}

const warSlice = createSlice({
    name: 'war',
    initialState,
    reducers: {
        sendReliabilityReport: (state, action) => {
            state.warReports.reliability = action.payload;
        },
        sendSecurityReport: (state, action) => {
            state.warReports.security = action.payload;
        },
        sendCosReport: (state, action) => {
            state.warReports.cos = action.payload;
        },
        sendOperationExcelReport: (state, action) => {
            state.warReports.operationalExcel = action.payload;
        },
        sendPerformenceExcelReport: (state, action) => {
            state.warReports.perfExcel = action.payload;
        },
        sendSustainabilityReport: (state, action) => {
            state.warReports.sustaiability = action.payload;
        }
    },
})

export default warSlice.reducer;
export const { sendReliabilityReport, sendSecurityReport, sendCosReport, sendOperationExcelReport, sendPerformenceExcelReport, sendSustainabilityReport } = warSlice.actions;