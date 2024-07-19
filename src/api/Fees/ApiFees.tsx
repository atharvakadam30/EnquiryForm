import { IAddFeesBody, IGetFeesDetailsBody } from "src/Interface/Fees/IFees"; // Update import to match your Enquiry interfaces
import http from '../../utils/http-common1';



const GetAcademicYearApi = () => {
  return http.post<IAddFeesBody[]>('GetAcademicYear');
};
const GetStudentFeeListApi = () => {
  return http.post<IAddFeesBody[]>('GetStudentFeeList');
};
const GetFeeNameApi = () => {
    return http.post<IAddFeesBody[]>('GetFeeName');
  };

  const GetClassFeeListApi = () => {
    return http.post<IAddFeesBody[]>('GetClassFeeList');
  };

  const AddFeeDetailsApi = (data: IAddFeesBody) => {
    return http.post<string>('AddFeeDetails', data);
  };
  const UpdateIStudentFeeDetailsApi = (data: IAddFeesBody) => {
    return http.post<string>('UpdateIStudentFeeDetails', data);
  };


  const GetClassFeeDetailsForEditApi = (data: IGetFeesDetailsBody) => {
    return http.post<IGetFeesDetailsBody>('GetClassFeeDetailsForEdit', data);
  };

  const GetStudentFeeDetailsForEditApi = (data: IGetFeesDetailsBody) => {
    return http.post<IGetFeesDetailsBody>('GetStudentFeeDetailsForEdit', data);
  };

  const DeleteFeeDetailsApi = (data: IGetFeesDetailsBody) => {
    return http.post<string>('DeleteFeeDetails', data); 
  };

  const GetFeeTypeApi = (data: IGetFeesDetailsBody) => {
    return http.post<IGetFeesDetailsBody[]>('GetFeeType',data);
  };

  const GetIStudentFeeListApi = (data: IGetFeesDetailsBody) => {
    return http.post<IGetFeesDetailsBody[]>('GetIStudentFeeList',data);
  };

const FeesApi = {
    GetAcademicYearApi,
    GetFeeNameApi,
    AddFeeDetailsApi,
    GetClassFeeListApi,
    GetClassFeeDetailsForEditApi,
    DeleteFeeDetailsApi,
    GetFeeTypeApi,
    UpdateIStudentFeeDetailsApi,
    GetStudentFeeListApi,
    GetStudentFeeDetailsForEditApi,
    GetIStudentFeeListApi
};
export default FeesApi;
