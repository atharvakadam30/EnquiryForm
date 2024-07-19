import React, { useState, useEffect } from 'react'
import BackButton from 'src/library/BackButton/BackButton'
import PageHeader from 'src/library/heading/pageHeader'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { GetViewSchoolNotice } from 'src/requests/SchoolNotice/RequestSchoolNotice'
import { IGetViewSchoolNoticeListBody } from 'src/Interface/Student/ISchoolNotice';
import { Typography, Card, Container } from '@mui/material';
import { useParams } from 'react-router';
import { getDateFormatted } from '../Common/util';
import axios from 'axios';
import { getSchoolNoticeDetails } from 'src/requests/SchoolNotice1/RequestSchoolNotice';
//import fileDownload from 'js-file-download'
//import MyPDF from '../path/to/file.pdf';




const ViewSchoolNotice = () => {
  const [NoticeDescription, setNoticeDescription] = useState('');
  const [Title, setTitle] = useState('');
  const [NoticeFileName, setNoticeFileName] = useState('');



  const dispatch = useDispatch();
  const [File, setFile] = useState('')
  // const ViewNotice: any = useSelector(
  //   (state: RootState) => state.ViewSchoolNotice.ViewNotice
  // );
  const SchoolNoticeDetails = useSelector((state: RootState) => state.SchoolNotice.SchoolNoticeDetails)
  useEffect(()=>{
    if(SchoolNoticeDetails!=null){
      setNoticeDescription(SchoolNoticeDetails.NoticeDescription)
      setTitle(SchoolNoticeDetails.NoticeTitle)
      setNoticeFileName(SchoolNoticeDetails.NoticeFileName)
    }
    },[SchoolNoticeDetails])
  const { Id } = useParams();
  console.log(SchoolNoticeDetails, "ViewNotice")
  // const GetViewSchoolNoticeBody: IGetViewSchoolNoticeListBody =
  // {
  //     Id : parseInt(Id)
  // }
  // useEffect(() => {
  //   dispatch(GetViewSchoolNotice(GetViewSchoolNoticeBody));
  // }, [])
  useEffect(() => {
    if (Id !== '') {
      dispatch(getSchoolNoticeDetails({ ID:parseInt(Id) }))
    }
  }, [Id])
  
  return (
    <Container>
      <PageHeader heading={'View Notice'} />
      <BackButton FromRoute={'/Student/SchoolNotice'} />
    
        <div>
          <Card>
         <h1>Title: {Title}</h1>
          <h3>Description: </h3>
            <Typography  dangerouslySetInnerHTML={{ __html: NoticeDescription }} />

            {/* <Typography mt={-1.5}>{getDateFormatted(item.NoticeDate)}</Typography> */}
            {/* {item.Attachment !== "" &&
              <a target="_blank" rel="noreferrer" href={'/documents/' + item.Attachment} >Attachment</a>
            } */}
          </Card> <br />
          <Card><h3>Attachment: </h3>{NoticeFileName}</Card>
        </div>
   

    </Container>
   
  )
}

export default ViewSchoolNotice
