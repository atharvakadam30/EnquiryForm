import { Box, Button, Card, Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid, IconButton, Switch, Tooltip, Typography } from "@mui/material"
import { useEffect, useState, useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IAddEnquiryBody, IGetEnquiryDetailsBody } from "src/Interface/Enquiry/IEnquiry"
import { IAddFollowUpBody } from "src/Interface/FollowUp/IFollowUp"
import ButtonField from "src/libraries/Training/ButtonField"
import EditIcon from '@mui/icons-material/Edit';
import { getCalendarFormat } from '../Common/utils1';
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import SendIcon from '@mui/icons-material/Send';
import PageHeader from 'src/library/heading/pageHeader'
import { AddStudentDetails, getClass, resetAddEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList"
import { getEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList"
import { RootState, useDispatch, useSelector } from 'src/store'
import { AddFollowUpDetails, GetFollowUpHistoryList, GetStatus, resetAddFollowUpMsg } from "src/requests/FollowUp/RequestFollowUpList"
import { toast } from "react-toastify"

import { ButtonPrimary } from "src/library/StyledComponents/CommonStyled"
import DynamicList from "src/libraries/Training/DynamicList"
import { UpdateIStudentFeeDetails, getIStudentFeeList, getStudentFeeDetails, resetUpdateIStudentFeeDetailsMsg } from "src/requests/Fees/RequestFees"
import { IGetFeesDetailsBody } from "src/Interface/Fees/IFees"
const StudentFeeForm = () => {
    const IStudentFeeList = useSelector((state: RootState) => state.Fees.IStudentFeeList);
    const StudentFeeDetails = useSelector((state: RootState) => state.Fees.StudentFeeDetails);
    const updateFeeDetailsMsg = useSelector((state: RootState) => state.Fees.updateFeeDetailsMsg);
 

    const Dispatch = useDispatch();
    const topRef = useRef(null);
    const { Id } = useParams();
    const [AcademicYear, setAcademicYear] = useState("")
    const [FeeName, setFeeName] = useState("")
    const [FeeType, setFeeType] = useState("")
    const [Class , setClassName] = useState("")
    const [Amount, setAmount] = useState("")
    const [EndDate, setEndDate] = useState('')
    const [StudentName, setStudent ] = useState('')
    const [AmountErrorMessage, setAmountErrorMessage] = useState('')
    const [EndDateErrorMessage, setEndDateErrorMessage] = useState('')
//
const clickCancel= () =>{
    setClassName('')
    setStudent('')
    setFeeType('')
    setFeeName('')
    setAmount('')
    setEndDate('')
    setAcademicYear('')
}
const clickClear= () =>{
    // setClassName('')
    // setStudent('')
    // setFeeType('')
    // setFeeName('')
    setAmount('')
    setEndDate('')
    // setAcademicYear('')
}

useEffect(()=>{
    if(Id != ''){
Dispatch(getStudentFeeDetails({ID:Number(Id)}))
    }
},[Id])

useEffect(()=>{
if(updateFeeDetailsMsg != ''){
    toast.success(updateFeeDetailsMsg)
    Dispatch(resetUpdateIStudentFeeDetailsMsg())
}
},[updateFeeDetailsMsg])

useEffect(()=>{
    if (StudentFeeDetails != null){
        
        Dispatch(getIStudentFeeList({StudentId:Number(StudentFeeDetails.StudentId)}))
    };
},[StudentFeeDetails])

useEffect(()=>{
    if(StudentFeeDetails != null){
        setFeeName(StudentFeeDetails.FeeName)
        setClassName(StudentFeeDetails.ClassName)
        setFeeType(StudentFeeDetails.FeeType)
        setAmount(StudentFeeDetails.Amount)  
        setAcademicYear(StudentFeeDetails.AcademicYear)   
        setStudent(StudentFeeDetails.StudentName)   
        setEndDate(getCalendarFormat(StudentFeeDetails.EndDate))
    }
},[StudentFeeDetails])

const [pageIndex, setPageIndex] = useState(0)
const pageSize = 10

const handleNextPage = () => {
  setPageIndex(pageIndex + 1)
}

const handlePrevPage = () => {
  setPageIndex(pageIndex - 1)
}

const paginatedList = IStudentFeeList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
const HeaderList = ["Academic Year", "Fee Name", "Fee Type","END DATE",
  "AMOUNT (₹)", "Edit"]
const IconList = [{
  Id: 1, Icon: <Tooltip title="Edit Student Fee Details"><IconButton><EditIcon sx={{ color: '#ffc107' }} />
  </IconButton></Tooltip>, Action: 'Edit', Value: "1"
}]
const totalCount = IStudentFeeList.length
const startIndex = pageIndex * pageSize + 1
const endIndex = Math.min((pageIndex + 1) * pageSize, totalCount)
const navigate = useNavigate()
const clickItem = (value) => {
  if (value.Action === "Edit") {
    navigate("../" + value.Id);
    topRef.current.scrollIntoView({ behavior: "smooth" });

  } else if (value.Action === "Remove") {

  }
}
const clickAmount = (value) =>{
    if (!isNaN(+value))
    setAmount(value)
    setAmountErrorMessage("")
}
const clickEndDate = (value)=>{
    setEndDate(value)
}
const readOnly = () =>{}
const isValid = () =>{
    let returnVal = true;
    if(Amount === ''){
        setAmountErrorMessage("Please Enter Fees Amount")
        returnVal = false
    } else{
        setAmountErrorMessage("")
    }
    if(EndDate === ''){
        setEndDateErrorMessage("Please Enter End Date")
        returnVal = false
    } else{
        setEndDateErrorMessage("")
    }
    return returnVal
}
const clickSubmit = () =>{
    
    if (AcademicYear === ''){
        toast.error("Please Select Student Fee to Edit from Below List.")
    } else {
        let ValidForm = isValid()
        if (ValidForm){
           const FeeDetailsBody : IGetFeesDetailsBody = {
            ID : Number(Id),
            EndDate : EndDate,
            Amount: Amount
           }
           Dispatch(UpdateIStudentFeeDetails(FeeDetailsBody))
           clickCancel()
        }
    }
   
}
    return (
        <>  <span ref={topRef}></span>
            <PageHeader heading={'Student Fee Details'}  />
            <Container sx={{ py: 2 }}>
                <Card variant="outlined">
                    <Box p={2}>
                        <form>
                            <Grid container spacing={2} >
                                <Grid item xs={6}>
                                    <InputField Item={AcademicYear} Label={'Academic Year'}
                                        ClickItem={readOnly}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputField Item={Class} Label={'Class'}
                                        ClickItem={readOnly}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <InputField Item={StudentName} Label={'Student Name'}
                                        ClickItem={readOnly}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputField Item={FeeName} Label={'Fee Name'}
                                        ClickItem={readOnly}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6} >
                                    <InputField Item={FeeType} Label={'Fee Type'}
                                        ClickItem={readOnly}
                                        ErrorMessage={undefined} />
                                </Grid>
  
                                    <Grid item xs={6}>
                                    <InputField Item={Amount} Label={'Amount (₹)'}
                                        ClickItem={clickAmount}
                                        ErrorMessage={AmountErrorMessage} />
                                </Grid>
                                <Grid item xs={6} sm={6}  >
                                        <CalendarField
                                            Item={EndDate}
                                            Label="End Date *"
                                            ClickItem={clickEndDate}
                                            ErrorMessage={EndDateErrorMessage}
                                        />

                                    </Grid>
                                <Grid item xs={6}>
                                
                                </Grid>
                                <Grid item xs={6}>
                                    {/* <ButtonField Label={'Submit'} ClickItem={clickSubmit} /> &nbsp;&nbsp; */}
                                    <ButtonPrimary onClick={clickSubmit} >Submit&nbsp;<SendIcon fontSize="small" /></ButtonPrimary>

                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonPrimary onClick={clickClear} >Clear</ButtonPrimary>

                                    {/* <ButtonField Label={'Cancel'} ClickItem={undefined} /> */}
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Card>
            </Container> <br />
      <Container>
        <Grid container spacing={2} sx={{ width: '100%', overflow: 'hidden' }} >
          <Grid item xs={12}>
            {/* <Typography variant="h3" gutterBottom>Enquiry List</Typography> */}
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
            <div style={{ flexGrow: 1, overflow: 'auto' }}>
              <DynamicList
                HeaderList={HeaderList}
                ItemList={paginatedList}
                IconList={IconList}
                ClickItem={clickItem}
              />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <Typography variant="body2">Fee List {startIndex}-{endIndex} of {totalCount} Fee Records</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button onClick={handlePrevPage} variant="outlined" disabled={pageIndex === 0} style={{ color: '#878686', minWidth: '120px' }}>
                  Previous Page
                </Button>
                <Button onClick={handleNextPage} variant="outlined" disabled={(pageIndex + 1) * pageSize >= totalCount} style={{ color: '#878686' }}>
                  Next Page
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>


        </>
    )
}

export default StudentFeeForm