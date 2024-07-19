import { Select, MenuItem, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import PageHeader from 'src/library/heading/pageHeader';
import DropDown from 'src/library/DropDown/DropDown';
import DropDown1 from 'src/libraries/Training/DropDown1';
import DropDown2 from 'src/libraries/Training/DropDown2';
import { getClass } from 'src/requests/Enquiry/RequestEnquiryList';
import { getFeeName, getFeeTypeList, getStudentFeeList } from 'src/requests/Fees/RequestFees';
import { IGetFeesDetailsBody } from 'src/Interface/Fees/IFees';
import StudentClassFeeList from './StudentClassFeeList';
import CallIcon from '@mui/icons-material/Call'
import { Container, Grid, Button, Typography, Box, IconButton, Tooltip } from '@mui/material'
import DynamicList from 'src/libraries/Training/DynamicList'
import { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { getEnquiryList } from 'src/requests/Enquiry/RequestEnquiryList'
import { useNavigate } from 'react-router';
import { DeleteFeeDetails, resetDeleteFeeDetails } from 'src/requests/Fees/RequestFees';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';


const ClassStudentsFeeDetails = () => {
  const Class = useSelector((state: RootState) => state.Enquiry.Class);
  const FeeName = useSelector((state: RootState) => state.Fees.FeeName);
  const FeeType = useSelector((state: RootState) => state.Fees.FeeType);

  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(getClass())
    Dispatch(getFeeName())
    Dispatch(getStudentFeeList())
  }, [Dispatch])
  const [classId, setClassId] = useState('')
  const [FeeNameId, setFeeNameId] = useState('')
  const [FeeTypeName, setFeeTypeName] = useState('')
  useEffect(() => {
    if (classId != '' && FeeNameId != '') {
      const FeeTypeParam: IGetFeesDetailsBody = {
        ClassId: Number(classId),
        FeeNameId: Number(FeeNameId)
      }
      Dispatch(getFeeTypeList(FeeTypeParam))
    }
  }, [classId, FeeNameId])

  const clickClass = (value) => {
    setClassId(value)
  }
  const clickFeeName = (value) => {
    setFeeNameId(value)
  }
  const clickFeeType = (value) => {
    setFeeTypeName(value)
  }
  const StudentFeeList = useSelector((state: RootState) => state.Fees.StudentFeeList);





  const [pageIndex, setPageIndex] = useState(0)
  const pageSize = 10

  const handleNextPage = () => {
    setPageIndex(pageIndex + 1)
  }

  const handlePrevPage = () => {
    setPageIndex(pageIndex - 1)
  }
  const filteredList = StudentFeeList.filter((std) => {
    if (classId != '' && FeeTypeName != '' && FeeNameId != '') {
      if (classId === "1" && FeeNameId === "1" && FeeTypeName != "") {
        return std.Text2 === "Play Group" && std.Text5 === "Term 1" && std.Text4 === FeeTypeName
      } else if (classId === "1" && FeeNameId === "2" && FeeTypeName != "") {
        return std.Text2 === "Play Group" && std.Text5 === "Term 2" && std.Text4 === FeeTypeName
      } else if (classId === "2" && FeeNameId === "1" && FeeTypeName != "") {
        return std.Text2 === "Nursery" && std.Text5 === "Term 1" && std.Text4 === FeeTypeName
      } else if (classId === "2" && FeeNameId === "2" && FeeTypeName != "") {
        return std.Text2 === "Nursery" && std.Text5 === "Term 2" && std.Text4 === FeeTypeName
      } else if (classId === "3" && FeeNameId === "1" && FeeTypeName != "") {
        return std.Text2 === "Junior K.G" && std.Text5 === "Term 1" && std.Text4 === FeeTypeName
      } else if (classId === "3" && FeeNameId === "2" && FeeTypeName != "") {
        return std.Text2 === "Junior K.G" && std.Text5 === "Term 2" && std.Text4 === FeeTypeName
      } else if (classId === "4" && FeeNameId === "1" && FeeTypeName != "") {
        return std.Text2 === "Senior K.G" && std.Text5 === "Term 1" && std.Text4 === FeeTypeName
      } else if (classId === "4" && FeeNameId === "2" && FeeTypeName != "") {
        return std.Text2 === "Senior K.G" && std.Text5 === "Term 2" && std.Text4 === FeeTypeName
      } else if (classId === "5" && FeeNameId === "1" && FeeTypeName != "") {
        return std.Text2 === "DayCare" && std.Text5 === "Term 1" && std.Text4 === FeeTypeName
      } else if (classId === "5" && FeeNameId === "2" && FeeTypeName != "") {
        return std.Text2 === "DayCare" && std.Text5 === "Term 2" && std.Text4 === FeeTypeName
      }
    } else {
      return std
    }

  });
  const paginatedList = filteredList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
  const navigate = useNavigate();
  const HeaderList = ["STUDENT NAME", "CLASS", "ACADEMIC YEAR", "FEE TYPE", "FEE NAME", "END DATE",
    "AMOUNT (₹)", "Edit"]
  const IconList = [{
    Id: 1, Icon: <Tooltip title="Edit Student Fee Details"><IconButton><EditIcon sx={{ color: '#ffc107' }} />
    </IconButton></Tooltip>, Action: 'Edit', Value: "1"
  }]
  const totalCount = filteredList.length
  const startIndex = pageIndex * pageSize + 1
  const endIndex = Math.min((pageIndex + 1) * pageSize, totalCount)

  const clickItem = (value) => {
    if (value.Action === "Edit") {
      navigate("../StudentFeeForm/" + value.Id)


    } else if (value.Action === "Remove") {
      if (window.confirm("Are you sure you want to delete this Fee Detail?")) {
        Dispatch(DeleteFeeDetails({ ID: Number(value.Id) }))
      }
    }
  }
const clickAddFeeForm = () =>{
  navigate('../AddFeeForm')
}

  return (
    <>
      <Container >
        <Grid container spacing={2} sx={{ width: '100%', overflow: 'hidden' }}>
          <Grid item xs={12} display={'flex'} justifyContent={'center'}>
            <PageHeader heading={"Fee Details"} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <DropDown1 ItemList={Class} ClickItem={clickClass} Label={"Select Class"} DefaultValue={classId}
                />
              </Grid>
              <Grid item xs={4}>
                {classId &&
                  <DropDown1 ItemList={FeeName} ClickItem={clickFeeName} Label={"Select Fee Name"} DefaultValue={FeeNameId}
                  />}
              </Grid>
              <Grid item xs={4}>
                {classId && FeeNameId && FeeType.length != 0 &&
                  <DropDown2 ItemList={FeeType} ClickItem={clickFeeType} Label={"Select Fee Type"} DefaultValue={FeeTypeName}
                  />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary" style={{ color: "white" }}
              startIcon={<AddIcon />} onClick={clickAddFeeForm}
            >
              Add Fee Details
            </Button>
          </Grid>
        </Grid>
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
export default ClassStudentsFeeDetails

