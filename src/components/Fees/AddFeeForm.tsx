import React, { useState, useEffect, useRef } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography, Grid } from '@mui/material'
import CalendarField from "src/libraries/Training/CalendarField";
import InputField from "src/libraries/Training/InputField";
import Dropdown from "src/libraries/Training/Dropdown";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { IAddSchoolNotice } from 'src/Interface/SchoolNotice/ISchoolNotice';
import { IGetClassNameListBody } from 'src/Interface/ClassNameList/ICLassNameList';
import { StudentDetailsgetClassName } from 'src/requests/ClassNameList/RequestClassNameList'
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ChangeFileIntoBase64, CheckFileValidation, IsDateValid, IsFutureDateValid, IsTodayFutureDateValid, getDateFormatted, getInputDateFormatted, getTodayformatDate, toolbarOptions } from '../Common/util';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
// import AddSchoolNoticeList from './AddSchoolNoticeList';
import { Styles } from 'src/assets/style/CommonStyle';
import Icon1 from 'src/library/icon/icon1';
import { ButtonPrimary } from 'src/library/StyledComponents/CommonStyled';
import SendIcon from '@mui/icons-material/Send';
import { getClass, getEnquiryList } from 'src/requests/Enquiry/RequestEnquiryList';
import { AddSchoolNoticeDetails, getSchoolNoticeDetails, resetSchoolNoticeDetails } from 'src/requests/SchoolNotice1/RequestSchoolNotice';
import { number } from 'prop-types';
import { getCalendarFormat } from '../Common/utils1';
import ClassFeeList from './ClassFeeList';
import { getAcademicYear, getFeeName, AddFeeDetails, resetAddFeesDetailsMsg, getClassFeeList, getFeeDetails, resetDeleteFeeDetails } from 'src/requests/Fees/RequestFees';
import { IAddFeesBody } from 'src/Interface/Fees/IFees';

function AddFee() {
  const deleteFeeDetailsMsg = useSelector((state: RootState) => state.Fees.deleteFeeDetailsMsg);

  const Class = useSelector((state: RootState) => state.Enquiry.Class);
  const AcademicYear = useSelector((state: RootState) => state.Fees.AcademicYear);
  const FeeName = useSelector((state: RootState) => state.Fees.FeeName);
  const AddSchoolNoticeMsg = useSelector((state: RootState) => state.SchoolNotice.AddSchoolNoticeMsg)
  const AddFeeDetailsMsg = useSelector((state: RootState) => state.Fees.AddFeeDetailsMsg)
  const FeeDetails = useSelector((state: RootState) => state.Fees.FeeDetails);

  const SchoolNoticeDetails = useSelector((state: RootState) => state.SchoolNotice.SchoolNoticeDetails)

  const [Id, setID] = useState('')
  const [AcademicYearID, setAcademicYearID] = useState('0');
  const [FeeNameID, setFeeNameID] = useState('0');
  const [ClassID, setClassID] = useState('0');
  const [Title, setTitle] = useState('');
  const [Amount, setAmount] = useState('');
  const aRef = useRef(null);
  const [EndDate, setEndDate] = useState('');
  const [FeeType, setFeeType] = useState('');
  const [error, setError] = useState('');
  const [fileData, setFileData] = useState('');
  const [fileName, setFileName] = useState('');
  const [NoticeDescription, setNoticeDescription] = useState('');
  const [selectdate, setSelectDate] = useState('');
  const [AcademicYearErrorMessage, setAcademicYearErrorMessage] = useState('')
  const [ClassErrorMessage, setClassErrorMessage] = useState('')
  const [TitleErrorMessage, setTitleErrorMessage] = useState('')
  const [AmountErrorMessage, setAmountErrorMessage] = useState('')
  const [FeeNameErrorMessage, setFeeNameErrorMessage] = useState('')
  const [selectdateErrorMessage, setselectdateErrorMessage] = useState('')
  const [FeeTypeErrorMessage, setFeeTypeErrorMessage] = useState('')
  const [EndDateErrorMessage, setEndDateErrorMessage] = useState('')


  const dispatch = useDispatch();
  useEffect(() => {
    if (deleteFeeDetailsMsg !== '') {
      console.log(deleteFeeDetailsMsg)
      toast.success(deleteFeeDetailsMsg);
      dispatch(resetDeleteFeeDetails())
      dispatch(getClassFeeList())

    }
  }, [deleteFeeDetailsMsg])

  useEffect(() => {
    dispatch(getClass())
    dispatch(getAcademicYear())
    dispatch(getFeeName())
    dispatch(getClassFeeList())
  }, [dispatch]);
  
  useEffect(() => {
    if (Id != '') {
      dispatch(getFeeDetails({ ID: Number(Id) }))
    }
  }, [Id])

  useEffect(() => {
    if (FeeDetails != null) {
      setFeeType(FeeDetails.FeeType)
      setEndDate(getCalendarFormat(FeeDetails.EndDate))
      setAmount(FeeDetails.Amount)
      setFeeNameID(FeeDetails.FeeNameId)
      setAcademicYearID(FeeDetails.AcademicYearId)
      setClassID(FeeDetails.ClassId)
    }
  }, [FeeDetails])

  useEffect(() => {
    if (AddFeeDetailsMsg !== '') {
      toast.success(AddFeeDetailsMsg);
      dispatch(resetAddFeesDetailsMsg())
      clickCancel()
      dispatch(getClassFeeList())
    }
  }, [AddFeeDetailsMsg])

  useEffect(() => {
    if (Id !== '') {
      dispatch(getSchoolNoticeDetails({ ID: Number(Id) }))
    }
  }, [Id])


  const clickAcademicYear = (value) => {
    setAcademicYearID(value);
    setAcademicYearErrorMessage("");
  }
  const clickFeeName = (value) => {
    setFeeNameID(value);
    setAcademicYearErrorMessage("");
  }

  const clickClass = (value) => {
    setClassID(value);
    setClassErrorMessage("");
  }

  const clickTitle = (value) => {
    setTitle(value);
    setTitleErrorMessage("");
  }
  const clickAmount = (value) => {
    if (!isNaN(+value))
      setAmount(value);
    setAmountErrorMessage("");
  }
  const clickEndDate = (value) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      setEndDateErrorMessage("End Date could not be past date.");
    } else {
      setEndDate(value);
      setEndDateErrorMessage("");
    }
  }
  const clickFeeType = (value) => {
    setFeeType(value);

  }
  const clickNoticeDate = (value) => {
    setSelectDate(value);
    setselectdateErrorMessage("");
  }
  const clickCancel = () => {
    setFeeType("")
    setEndDate("")
    setAmount("")
    setAcademicYearID("0")
    setFeeNameID("0")
    setClassID("0")
    setID('')
  }

  if (Id !== '') {
    console.log(Id)
  }
  const IsFormValid = () => {
    let isValid = true;
    if (AcademicYearID === "0") {
      setAcademicYearErrorMessage("Please select Academic Year")
      isValid = false
    } else {
      setAcademicYearErrorMessage("")
    }
    if (FeeNameID === "0") {
      setFeeNameErrorMessage("Please select Fee Name")
      isValid = false
    } else {
      setFeeNameErrorMessage("")
    }
    if (ClassID === "0") {
      setClassErrorMessage("Please select student's class")
      isValid = false
    } else {
      setClassErrorMessage("")
    };
    if (Amount === "") {
      setAmountErrorMessage("Please enter Fee Amount")
      isValid = false
    } else {
      setAmountErrorMessage("")
    }
    if (FeeType === "") {
      setFeeTypeErrorMessage("Please enter Fee Type")
      isValid = false
    } else {
      setFeeTypeErrorMessage("")
    }
    if (EndDate === "") {
      setEndDateErrorMessage("Please select End Date")
      isValid = false
    } else {
      setEndDateErrorMessage("")
    }
    return isValid
  }

  const clickSubmit = () => {
    const isFormValid = IsFormValid();
    if (isFormValid) {
      const FeeDetails: IAddFeesBody = {
        ID: Id == '' ? 0 : Number(Id),
        ClassId: Number(ClassID),
        AcademicYearId: Number(AcademicYearID),
        FeeNameId: Number(FeeNameID),
        FeeType: FeeType,
        Amount: Amount,
        Date: EndDate
      }
      dispatch(AddFeeDetails(FeeDetails))

      console.log(IsFormValid())
    }
    else {
      // If the form is not valid, show an error message
      toast.error('Please fill all required fields correctly.');
    }

  }

  const clickEdit = (value) => {
    setID(value)
    console.log(Id)
  }


  return (
    <>
      <PageHeader heading={'Add Fee Form'} />
      <Container sx={{ py: 2 }}>
        <Card>
          <Box p={1}>
            <Grid container spacing={2} rowSpacing={2}>
              <Grid item xs={6} sm={6}>
                <Dropdown
                  ItemList={AcademicYear}
                  Label="Academic Year"
                  DefaultValue={AcademicYearID}
                  ClickItem={clickAcademicYear}
                  Placeholder="Select Academic Year"
                  ErrorMessage={AcademicYearErrorMessage}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <Dropdown
                  ItemList={Class}
                  Label=""
                  DefaultValue={ClassID}
                  ClickItem={clickClass}
                  Placeholder="Select Class"
                  ErrorMessage={ClassErrorMessage}
                />
              </Grid>
              <Grid item xs={6} sm={6} sx={{ mt: 2.7 }}>
                <Dropdown
                  ItemList={FeeName}
                  Label=""
                  DefaultValue={FeeNameID}
                  ClickItem={clickFeeName}
                  Placeholder="Select Fee Name"
                  ErrorMessage={FeeNameErrorMessage}
                />
              </Grid>

              <Grid item xs={6} sm={6}>
                <InputField
                  Item={Amount}
                  Label="Amount (₹)"
                  ClickItem={clickAmount}
                  ErrorMessage={AmountErrorMessage}
                />
              </Grid>
              <Grid item xs={6} sm={6} sx={{ mt: .7 }}>
                <InputField
                  Item={FeeType}
                  Label="Fee Type"
                  ClickItem={clickFeeType}
                  ErrorMessage={FeeTypeErrorMessage}
                />
              </Grid>
              <Grid item xs={6}>
                <CalendarField
                  Item={EndDate}
                  Label=" End Date *"
                  ClickItem={clickEndDate}
                  ErrorMessage={EndDateErrorMessage}
                />
              </Grid>
            </Grid>
            <br />
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 3
                }}>
                <ButtonPrimary onClick={clickSubmit} >Save</ButtonPrimary>
                <ButtonPrimary onClick={clickCancel} >Clear</ButtonPrimary>
              </Box>
            </Grid>

          </Box>
        </Card>
        <br></br>


      </Container >
      <ClassFeeList ClassFeeId={clickEdit} />

    </>
  )
}

export default AddFee

