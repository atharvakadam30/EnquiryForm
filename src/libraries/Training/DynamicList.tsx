import { Checkbox, Grow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const DynamicList = ({
  HeaderList,
  ItemList,
  IconList = undefined,
  ClickItem = undefined,
  ClickCheck = undefined,
  IsSelect = 0
}) => {
  const clickCheckbox = (value) => {
    let arr = [];
    arr = ItemList.map((Item) => {
      return Item.Id === value
        ? { ...Item, IsActive: !Item.IsActive }
        : IsSelect == 1
          ? { ...Item, IsActive: false }
          : Item;
    });
    ClickCheck({ Id: value, Value: arr, Action: 'Select' });
  };
  const CheckAll = () => {
    let arr = [];
    arr = ItemList.map((Item) => {
      return { ...Item, IsActive: !getIsCheckedAll() };
    });
    ClickCheck({ Id: 0, Value: arr, Action: 'Select' });
  };
  const getIsCheckedAll = () => {
    let IsChecked = true;
    ItemList.map((Item) => {
      if (!Item.IsActive) {
        IsChecked = false;
      }
    });
    return IsChecked;
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#90caf9' }}>
            {HeaderList.map((item, i) => {
              return (
                <TableCell align="center" key={i}  sx={{ color: 'grey'}} >
                               <Typography variant="body1" fontWeight="bold">
                    <b>{item}</b>
                  </Typography>
                  {IsSelect == 2 && i == 0 && (
                    <>
                      <br></br>
                      <Checkbox
                        checked={getIsCheckedAll()}
                        onChange={CheckAll}
                      />
                    </>
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <Grow in={true} {...{ timeout: 1500 }}>
          <TableBody>
            {ItemList.map((item, index) => {
              return (
                <TableRow key={index}>

                  {item.Text1 != undefined && (
                    <TableCell align="center">{item.Text1}</TableCell>
                  )}
                  {item.Text2 != undefined && (
                    <TableCell align="center">{item.Text2}</TableCell>
                  )}
                  {item.Text3 != undefined && (
                    <TableCell align="center">{item.Text3}</TableCell>
                  )}
                  {item.Text4 != undefined && (
                    <TableCell align="center">{item.Text4}</TableCell>
                  )}
                  {item.Text5 != undefined && (
                    <TableCell align="center">{item.Text5}</TableCell>
                  )}
                  {item.Text6 != undefined && (
                    <TableCell align="center">{item.Text6}</TableCell>
                  )}
                  {item.Text7 != undefined && (
                    <TableCell align="center">{item.Text7}</TableCell>
                  )}
                  {IconList?.map((obj, i) => {
                    return (
                      <TableCell
                        align="center"
                        key={i}
                        onClick={() => {
                          ClickItem({ Id: item.Id, Action: obj.Action });
                        }}
                      >
                        {obj.Icon}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Grow>
      </Table>
    </TableContainer>
  );
};

export default DynamicList;
