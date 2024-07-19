import { createSlice } from "@reduxjs/toolkit";
import FeesApi from "src/api/Fees/ApiFees";
import { IAddFeesBody, IGetFeesDetailsBody } from "src/Interface/Fees/IFees";
import { AppThunk } from "src/store";
import { getDateFormatted } from 'src/components/Common/utils1';

const FeesSlice = createSlice({
    name: 'Fees',
    initialState: {
        AcademicYear: [],
        FeeName: [],
        FeeType: [],
        ClassFeeList: [],
        AddFeeDetailsMsg: '',
        FeeDetails: null,
        StudentFeeDetails: null,
        updateFeeDetailsMsg: '',
        deleteFeeDetailsMsg: '',
        StudentFeeList: [],
        IStudentFeeList: [],
        Loading: true
    },
    reducers: {

        getAcademicYear(state, action) {
            state.Loading = false;
            state.AcademicYear = action.payload;
        },
        getStudentFeeList(state, action) {
            state.Loading = false;
            state.StudentFeeList = action.payload;
        },
        getIStudentFeeList(state, action) {
            state.Loading = false;
            state.IStudentFeeList = action.payload;
        },
        getClassFeeList(state, action) {
            state.Loading = false;
            state.ClassFeeList = action.payload;
        },
        getFeeName(state, action) {
            state.Loading = false;
            state.FeeName = action.payload;
        },
        getAddFeeDetailsMsg(state, action) {
            state.Loading = false;
            state.AddFeeDetailsMsg = action.payload;
        },
        getUpdateIStudentFeeDetailsMsg(state, action) {
            state.Loading = false;
            state.updateFeeDetailsMsg = action.payload;
        },
        resetAddFeesDetailsMsg(state) {
            state.Loading = false;
            state.AddFeeDetailsMsg = "";
        },
        resetUpdateIStudentFeeDetailsMsg(state) {
            state.Loading = false;
            state.updateFeeDetailsMsg = "";
        },
        getFeeDetails(state, action) {
            state.Loading = false;
            state.FeeDetails = action.payload;
        },
        getStudentFeeDetails(state, action) {
            state.Loading = false;
            state.StudentFeeDetails = action.payload;
        },
        resetStudentFeeDetails(state) {
            state.Loading = false;
            state.StudentFeeDetails = null;
        },
        resetFeeDetails(state) {
            state.Loading = false;
            state.FeeDetails = null;
        },
        getDeleteFeeDetailsMsg(state, action) {
            state.Loading = false;
            state.deleteFeeDetailsMsg = action.payload;
        },
        resetDeleteFeeDetailsMsg(state) {
            state.Loading = false;
            state.deleteFeeDetailsMsg = "";
        },
        getLoading(state, action) {
            state.Loading = true;
        },
        getFeeTypeList(state, action) {
            state.Loading = false;
            state.FeeType = action.payload;
        }
    }
});


export const getAcademicYear =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetAcademicYearApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Name: Item.AcademicYear,
                    Value: Item.ID.toString()
                };
            });
            dispatch(FeesSlice.actions.getAcademicYear(responseData));
        };

export const getStudentFeeList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetStudentFeeListApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Text1: Item.StudentName,
                    Text2: Item.ClassName,
                    Text3: Item.AcademicYear,
                    Text4: Item.FeeType,
                    Text5: Item.FeeName,
                    Text6: getDateFormatted(Item.EndDate),
                    Text7: Item.Amount

                };
            });
            dispatch(FeesSlice.actions.getStudentFeeList(responseData));
        };

export const getFeeName =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetFeeNameApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Name: Item.FeeName,
                    Value: Item.ID.toString()
                };
            });
            dispatch(FeesSlice.actions.getFeeName(responseData));
        };
export const AddFeeDetails =
    (data: IAddFeesBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.AddFeeDetailsApi(data);
            dispatch(FeesSlice.actions.getAddFeeDetailsMsg(response.data));
        };

export const UpdateIStudentFeeDetails =
    (data: IAddFeesBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.UpdateIStudentFeeDetailsApi(data);
            dispatch(FeesSlice.actions.getUpdateIStudentFeeDetailsMsg(response.data));
        };

export const resetAddFeesDetailsMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.resetAddFeesDetailsMsg());
        };


export const resetUpdateIStudentFeeDetailsMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.resetUpdateIStudentFeeDetailsMsg());
        };

export const resetFeeDetails =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.resetFeeDetails());
        };

export const getClassFeeList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            // const responseData = response.data.map((Item, i) => {
            //     return {
            //         Id: Item.ID,
            //         Text1: Item.EmployeeName,
            //         Text2: Item.BirthDate,
            //         Text3: Item.EmailId,
            //         Text4: Item.PhoneNo,
            //     };
            const response = await FeesApi.GetClassFeeListApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Text1: Item.ClassName,
                    Text2: Item.AcademicYear,
                    Text3: Item.FeeName,
                    Text4: Item.FeeType,
                    Text5: Item.Amount,
                    Text6: getDateFormatted(Item.EndDate)
                };
            });
            dispatch(FeesSlice.actions.getClassFeeList(responseData));
        };

export const getFeeDetails =
    (data: IGetFeesDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetClassFeeDetailsForEditApi(data);

            dispatch(FeesSlice.actions.getFeeDetails(response.data));
        };

export const getStudentFeeDetails =
    (data: IGetFeesDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetStudentFeeDetailsForEditApi(data);

            dispatch(FeesSlice.actions.getStudentFeeDetails(response.data));
        };

export const DeleteFeeDetails =
    (data: IGetFeesDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.DeleteFeeDetailsApi(data);
            dispatch(FeesSlice.actions.getDeleteFeeDetailsMsg(response.data));
        };
export const resetDeleteFeeDetails =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.resetDeleteFeeDetailsMsg());
        };

export const getFeeTypeList =
    (data: IGetFeesDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetFeeTypeApi(data);
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: i,
                    Name: Item.FeeType,
                    Value: i.toString()
                };
            });
            dispatch(FeesSlice.actions.getFeeTypeList(responseData));
        };

export const getIStudentFeeList =
    (data: IGetFeesDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetIStudentFeeListApi(data);
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Text1: Item.AcademicYear,
                    Text2: Item.FeeName,
                    Text3: Item.FeeType,
                    Text4: getDateFormatted(Item.EndDate),
                    Text5: Item.Amount
                };
            });
            dispatch(FeesSlice.actions.getIStudentFeeList(responseData));
        };

export default FeesSlice.reducer;
