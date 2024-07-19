import React from 'react';
import { Grid } from '@mui/material';
import SingleButton from './SingleButton';

function SelectedCard({ ItemList, clickItem, type = "checkBox" }) {
  const onClick = (item) => {
    // Pass only the clicked item
    clickItem(item);
  };

  return (
    <Grid container spacing={1}>
      {ItemList.map((item, i) => (
        <Grid item xs={4} key={i}>
          <SingleButton Item={item} ClickItem={() => onClick(item)} type={type} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SelectedCard;
