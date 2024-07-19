import { Box, Card, Container, Grid, Typography, Divider, CircularProgress, FormGroup, FormControlLabel, Switch, Button, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from 'src/library/heading/pageHeader'
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IAddEnquiryBody, IGetEnquiryDetailsBody } from "src/Interface/Enquiry/IEnquiry";
import ButtonField from "src/libraries/Training/ButtonField";
import CalendarField from "src/libraries/Training/CalendarField";
import Dropdown from "src/libraries/Training/Dropdown";
import InputField from "src/libraries/Training/InputField";
import RadioList from "src/libraries/Training/RadioList";
import { AddStudentDetails, getClass, getEnquiryDetails, resetAddEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList";
import { RootState } from "src/store";
import { IsEmailValid, IsPhoneNoValid, calculateAge } from "../Common/util";
//  import PageHeader from "src/libraries/heading/PageHeader";
import { getCalendarFormat } from "../Common/utils1";
import { ButtonPrimary } from "src/library/StyledComponents/CommonStyled";
  
const AddEnquiry = () => {
    const { Id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [heading,setHeading] = useState('Enquiry Form')
    const [EditMode, setEditMode] = useState(false);
    const [ClassID, setClassID] = useState('0')
    const [StudentName, setStudentName] = useState('noname')
    const [Age, setAge] = useState('')
    const [BirthDate, setBirthDate] = useState('')
    const [GenderList, setGenderList] = useState([
        { Id: 1, Name: 'Male', Value: "1" },
        { Id: 2, Name: 'Female', Value: "2" }
    ])
    const [Gender, setGender] = useState('0')
    const [FatherName, setFatherName] = useState('')
    const [FatherPhoneNo, setFatherPhoneNo] = useState('');
    const [MotherName, setMotherName] = useState('')
    const [MotherPhoneNo, setMotherPhoneNo] = useState('');
    const [StudentAddress, setStudentAddress] = useState('')
    const [SocietyName, setSocietyName] = useState('')
    const [EmailId, setEmailId] = useState('')
    const [PhotoFileName, setPhotoFileName] = useState('')
    const [PhotoFilePath, setPhotoFilePath] = useState('')
    const [ReceiptFileName, setReceiptFileName] = useState('')
    const [ReceiptFilePath, setReceiptFilePath] = useState('')


    const [ClassErrorMessage, setClassErrorMessage] = useState('')
    const [StudentNameErrorMessage, setStudentNameErrorMessage] = useState('')
    const [BirthDateErrorMessage, setBirthDateErrorMessage] = useState('')
    const [GenderErrorMessage, setGenderErrorMessage] = useState('')
    const [FatherNameErrorMessage, setFatherNameErrorMessage] = useState('')
    const [FatherPhoneNoErrorMessage, setFatherPhoneNoErrorMessage] = useState('')
    const [MotherNameErrorMessage, setMotherNameErrorMessage] = useState('')
    const [MotherPhoneNoErrorMessage, setMotherPhoneNoErrorMessage] = useState('')
    const [StudentAddressErrorMessage, setStudentAddressErrorMessage] = useState('')
    const [SocietyNameErrorMessage, setSocietyNameErrorMessage] = useState('')
    const [EmailIdErrorMessage, setEmailIdErrorMessage] = useState('')
    const [PhotoFileErrorMessage, setPhotoFileErrorMessage] = useState('')
    const [ReceiptFileErrorMessage, setReceiptFileErrorMessage] = useState('')


    const Class = useSelector((state: RootState) => state.Enquiry.Class);
    const AddStudentMsg = useSelector((state: RootState) => state.Enquiry.AddEnquiryMsg)
    console.log(Class);
    const EnquiryDetails  = useSelector((state: RootState) => state.Enquiry.EnquiryDetails);
    const  Loading  = useSelector((state: RootState) => state.Enquiry.Loading);

    console.log(EnquiryDetails)
    useEffect(() => {
        if (EnquiryDetails !== null) {
            setClassID(EnquiryDetails.ClassId)
            setStudentName(EnquiryDetails.StudentName)
            setBirthDate(getCalendarFormat(EnquiryDetails.Birthdate))
            setAge(calculateAge(EnquiryDetails.Birthdate).toString())
            setGender(EnquiryDetails.Gender)
            setFatherName(EnquiryDetails.FatherName)
            setFatherPhoneNo(EnquiryDetails.FatherPhoneNo)
            setMotherName(EnquiryDetails.MotherName)
            setMotherPhoneNo(EnquiryDetails.MotherPhoneNo)
            setStudentAddress(EnquiryDetails.StudentAddress)
            setSocietyName(EnquiryDetails.SocietyName)
            setEmailId(EnquiryDetails.EmailId)
        }
    }, [EnquiryDetails])
    useEffect(() => {
        if (Id !== undefined) {
            const GetEnquiryDetailsBody: IGetEnquiryDetailsBody = {
                ID: Number(Id)
            }
            dispatch(getEnquiryDetails(GetEnquiryDetailsBody))
        }

    }, [Id, dispatch]);
    useEffect(() => {
        dispatch(getClass())
        clickCancel()
    }, [dispatch]);

    useEffect(() => {
        if (AddStudentMsg !== '') {
            // toast.success(AddStudentMsg);
            if (AddStudentMsg === '0'){
                toast.error('Failed to Add Enquiry.');
            } else if (AddStudentMsg === '1'){
                toast.success('Enquiry Added Successfully.');
                clickCancel();
            } else if (AddStudentMsg === '2'){
                toast.success('Enquiry Details Updated Successfully.');
                clickCancel();
                navigate('/extended-sidebar/Student/AddEnquiry')
            } else if (AddStudentMsg === '3'){
                toast.error('Email Id Already Exists.');
            } 
            dispatch(resetAddEnquiryDetails());

            // navigate("/")

        }
    }, [AddStudentMsg, dispatch]);

    const clickClass = (value) => {
        setClassID(value);
        setClassErrorMessage("");
    }
    const clickStudentName = (value) => {
        setStudentName(value);
        setStudentNameErrorMessage("");
    }

    const clickBirthDate = (value) => {
        const selectedDate = new Date(value);
        const currentDate = new Date();
        const twoYearsAgo = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());

        // Check if the selected date is in the future
        if (selectedDate > currentDate) {
            setBirthDateErrorMessage("Birth date cannot be in the future");
        } else if (selectedDate > twoYearsAgo) {
            setBirthDateErrorMessage("Child must be at least 1 years old");
        } else {
            // Clear error message if  the selected date is valid
            setBirthDateErrorMessage("");
            setBirthDate(value);
            setAge(calculateAge(value).toString());
        }
    };
    const clickCancel = () => {
        setClassID('0')
        setStudentName('')
        setBirthDate('')
        setAge('')
        setGender('0')
        setFatherName('')
        setFatherPhoneNo('')
        setMotherName('')
        setMotherPhoneNo('')
        setStudentAddress('')
        setSocietyName('')
        setEmailId('')
        setEmailIdErrorMessage('')
        setSocietyNameErrorMessage('')
        setStudentAddressErrorMessage('')
        setMotherPhoneNoErrorMessage('')
        setMotherNameErrorMessage('')
        setFatherPhoneNoErrorMessage('')
        setFatherNameErrorMessage('')
        setBirthDateErrorMessage('')
        setGenderErrorMessage('')
        setStudentNameErrorMessage('')
        setClassErrorMessage('')
        if(EditMode==true){
            setPhotoFileErrorMessage('')
            setReceiptFileErrorMessage('')
        }

    }


    const isNameValid = (name) => {
        // Regular expression to check if the input contains only alphabetic characters
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
      };


    const clickAge = () => {

    };

    const clickGender = (value) => {
        setGender(value);
        setGenderErrorMessage("");
    }
    const clickFatherName = (value) => {
        if (value.trim() === "") {
            setFatherName("");
            setFatherNameErrorMessage("");
          } else if (isNameValid(value)) {
        setFatherName(value);
        setFatherNameErrorMessage("");
        }
    }

    const clickFatherPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setFatherPhoneNo(value);
        setFatherPhoneNoErrorMessage("");
    }
    const clickMotherName = (value) => {
        if (value.trim() === "") {
            setMotherName("");
            setMotherNameErrorMessage("");
          } else if (isNameValid(value)) 
        setMotherName(value);
        setMotherNameErrorMessage("");
        
    }
    const clickMotherPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setMotherPhoneNo(value);
        setMotherPhoneNoErrorMessage("");
    }
    const clickStudentAddress = (value) => {
        setStudentAddress(value);
        setStudentAddressErrorMessage("");
    }
    const clickSocietyName = (value) => {
        setSocietyName(value);
        setSocietyNameErrorMessage("");
    }
    const clickEmailId = (value) => {
        setEmailId(value);
        setEmailIdErrorMessage("");
    }

    const BlurFatherPhoneNo = () => {
        setFatherPhoneNoErrorMessage(IsPhoneNoValid(FatherPhoneNo))
    }
    const BlurMotherPhoneNo = () => {
        setMotherPhoneNoErrorMessage(IsPhoneNoValid(MotherPhoneNo))
    }
    const BlurEmailId = () => {
        setEmailIdErrorMessage(IsEmailValid(EmailId.trim()))
    }
    console.log(Class)

    const IsFormValid = () => {
        let isValid = true;
        if (ClassID === "0") {
            setClassErrorMessage("Please select student's class")
            isValid = false
        } else {
            setClassErrorMessage("")
        };
        if (StudentName === "") {
            setStudentNameErrorMessage("Please enter student's name")
            isValid = false
        } else {
            setStudentNameErrorMessage("");
        };
        if (BirthDate === "") {
            setBirthDateErrorMessage("Please enter student's Birthdate")
            isValid = false
        } else {
            setBirthDateErrorMessage("");
        };
        if (Gender === "0") {
            setGenderErrorMessage("Please select gender")
            isValid = false
        } else {
            setGenderErrorMessage("");
        };
        if (FatherName === "") {
            setFatherNameErrorMessage("Please enter Father name")
            isValid = false
        } else {
            setFatherNameErrorMessage("");
        };
        if (FatherPhoneNo === "") {
            setFatherPhoneNoErrorMessage("Please enter valid phone number")
            isValid = false
        };
        if (MotherName === "") {
            setMotherNameErrorMessage("Please enter Mother name")
            isValid = false
        } else {
            setMotherNameErrorMessage("");
        };
        if (MotherPhoneNo === "") {
            setMotherPhoneNoErrorMessage("Please enter valid phone number")
            isValid = false
        };
        if (StudentAddress === "") {
            setStudentAddressErrorMessage("Please enter Residential Address")
            isValid = false
        } else {
            setStudentAddressErrorMessage("");
        };
        if (SocietyName === "") {
            setSocietyNameErrorMessage("Please enter Society Name")
            isValid = false
        } else {
            setSocietyNameErrorMessage("");
        };
        if (EmailId === "") {
            setEmailIdErrorMessage("Please enter valid email-id")
            isValid = false
        };
        if (EmailIdErrorMessage !==""){
            isValid = false
        } else{
            isValid = true
        };
        if (FatherPhoneNoErrorMessage !==""){
            isValid = false
        } else{
            isValid = true
        };
        if (MotherPhoneNoErrorMessage !==""){
            isValid = false
        } else{
            isValid = true
        };
        return isValid
    }


    const onEdit = () => {
        if (EditMode === false) {
            setEditMode(true)
            navigate('/extended-sidebar/Student/AdmissionForm')        } 
 
    }

    const clickSubmit = () => {
        const isFormValid = IsFormValid();
        if (isFormValid) {
            const AddStudentBody: IAddEnquiryBody = {
                ID: Id == undefined ? 0 : Number(Id),
                ClassId: Number(ClassID),
                StudentName: StudentName,
                Birthdate: BirthDate,
                Gender: Number(Gender),
                FatherName: FatherName,
                FatherPhoneNo: FatherPhoneNo,
                MotherName: MotherName,
                MotherPhoneNo: MotherPhoneNo,
                StudentAddress: StudentAddress,
                SocietyName: SocietyName,
                EmailId: EmailId.trim()

            }
            dispatch(AddStudentDetails(AddStudentBody))

            console.log(IsFormValid())
        }
        else {
            // If the form is not valid, show an error message
            toast.error('Please fill all required fields correctly.');        
        }

    }
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1
    });


    return (
        <>
<PageHeader heading={heading} />
            <Container  sx={{ py: 2}} >
            {Loading ? (
  <Box  p={3} mt={12}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%', 
    }}
  >
   <CircularProgress />
     </Box>
) : (
                    <Card variant="outlined">
                        <Box p={1}>
                            {/* <Typography variant="h2" gutterBottom align="center">
                                Enquiry Form
                            </Typography>
                            <Divider /> */}

                            <form>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <FormGroup>
                                    <FormControlLabel control={<Switch checked={EditMode} onChange={onEdit} />} label="Admission Form" />
                                </FormGroup>
                            </Grid>
                                <Grid container spacing={2} >
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={StudentName}
                                            Label="Student's Name"
                                            ClickItem={clickStudentName}
                                            ErrorMessage={StudentNameErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} sx={{ mt: 2.7 }} >
                                        <Dropdown
                                            ItemList={Class}
                                            Label=""
                                            DefaultValue={ClassID}
                                            ClickItem={clickClass}
                                            Placeholder="Select Class"
                                            ErrorMessage={ClassErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}  sx={{ mt:0.5 }}>
                                        <CalendarField
                                            Item={BirthDate}
                                            Label="Birth Date *"
                                            ClickItem={clickBirthDate}
                                            ErrorMessage={BirthDateErrorMessage}
                                        />

                                    </Grid>

                                    <Grid item xs={6} sm={6}  sx={{ mt:0.5 }}>
                                        <RadioList
                                            ItemList={GenderList}
                                            Label="Gender *"
                                            DefaultValue={Gender}
                                            ClickItem={clickGender}
                                            ErrorMessage={GenderErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={Age}
                                            Label="Student's Age"
                                            ClickItem={clickAge}
                                            ErrorMessage={undefined}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={EmailId}
                                            Label="Email Id"
                                            ClickItem={clickEmailId}
                                            ErrorMessage={EmailIdErrorMessage}
                                            BlurItem={BlurEmailId}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={FatherName}
                                            Label="Father's Name"
                                            ClickItem={clickFatherName}
                                            ErrorMessage={FatherNameErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={FatherPhoneNo}
                                            Label="Phone No."
                                            ClickItem={clickFatherPhoneNo}
                                            ErrorMessage={FatherPhoneNoErrorMessage}
                                            BlurItem={BlurFatherPhoneNo}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={MotherName}
                                            Label="Mother's Name"
                                            ClickItem={clickMotherName}
                                            ErrorMessage={MotherNameErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={MotherPhoneNo}
                                            Label="Phone No."
                                            ClickItem={clickMotherPhoneNo}
                                            ErrorMessage={MotherPhoneNoErrorMessage}
                                            BlurItem={BlurMotherPhoneNo}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={StudentAddress}
                                            Label="Address"
                                            ClickItem={clickStudentAddress}
                                            ErrorMessage={StudentAddressErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={SocietyName}
                                            Label="Society Name"
                                            ClickItem={clickSocietyName}
                                            ErrorMessage={SocietyNameErrorMessage}
                                        />
                                    </Grid>
                                  
                                    <Grid item xs={12}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                gap: 3
                                            }}>
                                            {/* <ButtonField Label="Submit" ClickItem={clickSubmit} /> */}
                                            <ButtonPrimary  onClick={clickSubmit} >Submit&nbsp;<SendIcon fontSize="small"/></ButtonPrimary>
                                            {/* <ButtonField Label="Clear" ClickItem={clickCancel} /> */}
                                            <ButtonPrimary  onClick={clickCancel} >Clear</ButtonPrimary>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>

                        </Box>
                    </Card>
                )}
            </Container>

        </>
    );

}
export default AddEnquiry;