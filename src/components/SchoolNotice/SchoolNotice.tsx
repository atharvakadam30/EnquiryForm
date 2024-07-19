import { Card, Container, Grid, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PageHeader from 'src/library/heading/pageHeader';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import DotLegend from 'src/library/Legend/DotLegend';
import ListCard from 'src/library/List/ListCard';
import SelectedCard from 'src/library/Card/SelectedCard';
import { useNavigate } from 'react-router';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import { getSchoolNoticeDates, getSchoolNoticeDetailsByDate} from 'src/requests/SchoolNotice1/RequestSchoolNotice';
import { getDateFormatted } from '../Common/util';
import TabulerList from 'src/library/List/TabulerList';
import { IAddSchoolNotice, IGetSchoolNoticeDetails } from 'src/Interface/SchoolNotice/ISchoolNotice';

const SchoolNotice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SchoolNoticeDates = useSelector((state: RootState) => state.SchoolNotice.SchoolNoticeDates);
  const SchoolNoticeDetailsByDate = useSelector((state: RootState) => state.SchoolNotice.SchoolNoticeDetailsByDate); 

  const [visibleDates, setVisibleDates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
useEffect(()=>{
  dispatch(getSchoolNoticeDates())
},[])
  useEffect(() => {
    // Set the initial visible dates
    setVisibleDates(SchoolNoticeDates.slice(0, 6));
  }, [SchoolNoticeDates]);

  const handlePrevious = () => {
    const newIndex = Math.max(currentIndex - 6, 0);
    setCurrentIndex(newIndex);
    setVisibleDates(SchoolNoticeDates.slice(newIndex, newIndex + 6));
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 6, SchoolNoticeDates.length - 6);
    setCurrentIndex(newIndex);
    setVisibleDates(SchoolNoticeDates.slice(newIndex, newIndex + 6));
  };
console.log(SchoolNoticeDetailsByDate)
  const clickItems = (value) => {
    const getNoticeDetails: IGetSchoolNoticeDetails = {
      ClassId:2,
      NoticeDate:(value.value).toString()
    }
    dispatch(getSchoolNoticeDetailsByDate(getNoticeDetails))
    console.log(SchoolNoticeDetailsByDate)
  };

  const clickViewSchoolNotice = (value) => {
    navigate('ViewSchoolNotice/' + value);
  };
  return (
  <>
    <Container>
      <PageHeader heading={'View School Notice'} />
      <DotLegend ItemList={[{ Value: 'Green', Name: 'Received School Notice' }]} /><br />
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={2} alignItems={"center"}>
          <IconButton disabled={currentIndex === 0} onClick={handlePrevious}>
            <ArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8}>
          <SelectedCard ItemList={visibleDates} clickItem={(value) => clickItems(value)}  type='Button' />
        </Grid>
        <Grid item xs={2} alignItems={"center"}>
          <IconButton disabled={currentIndex + 6 >= SchoolNoticeDates.length} onClick={handleNext}>
            <ArrowRightIcon />
          </IconButton>
        </Grid>
      </Grid>
      <br />
          {/* <TabulerList ItemList={SchoolNoticeDetailsByDate} clickEdit={clickEdit}  Delete={ClickDelete} /> */}
          
        <ListCard ItemList={SchoolNoticeDetailsByDate} clickNavigate={clickViewSchoolNotice} />
    </Container>


  </>
  );
};

export default SchoolNotice;
