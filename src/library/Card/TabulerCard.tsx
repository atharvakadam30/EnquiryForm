import { Card, Grid, Hidden, Tooltip, Typography } from '@mui/material'
import React,{useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function TabulerCard({item ,clickEdit ,Submit ,Delete ,Submit1=undefined}) {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {

      if (window.innerWidth < 900) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
  }
  window.addEventListener('resize', handleResize)
  return (
    <div>
          <Card sx={{ mb: 1 }}  >
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Hidden mdDown>
              <Tooltip title={item.Text1} placement="left-start">
           <Typography px={3} sx={{overflow:"hidden" ,whiteSpace:"nowrap" ,textOverflow:"ellipsis", width:"300px"}}>{item.Text1}</Typography>
           {/* <Typography dangerouslySetInnerHTML={{ __html: item.Text2 }} px={3} sx={{overflow:"hidden" ,whiteSpace:"nowrap" ,textOverflow:"ellipsis", width:"300px"}}></Typography> */}
            </Tooltip>
          
              </Hidden>
          
              <Grid item xs={3} md={2}>
                <Typography>{item.Text2}</Typography>
              </Grid>
              <Grid item xs={4.5} md={2}>
                <Typography>{item.Text3}</Typography>
              </Grid>
          
              <Grid item xs={1.5} md={1.5}>
            
              </Grid>
              <Grid item xs={1.5} md={1.5}>
              <Tooltip title="Edit Details"><EditIcon color={'success'} onClick={() => clickEdit(item.Id)} />
              </Tooltip>
              </Grid>
              <Grid item xs={1.5} md={1.5}>
              <Tooltip title="Delete Notice"><DeleteIcon  color={'error'} onClick={() => Delete(item.Id)} />
              </Tooltip>
              </Grid>
              {/* {Submit1 &&  <Grid item xs={2} md={1}>
                <ArrowForwardIcon color={'secondary'} onClick={() =>Submit1(item.Id)} />
              </Grid> } */}
             
            </Grid>
          </Card>

    </div>
  )
}

export default TabulerCard