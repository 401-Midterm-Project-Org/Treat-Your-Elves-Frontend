import {Box, Button, FormControl, FormGroup, Input, InputLabel, Modal, Typography} from '@mui/material';
import {useState} from 'react';
import {connect} from 'react-redux';
import HttpService from '../../services/httpService';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const mapStateToProps = ({store}) => {
/*
  const wishlists = store.groups
    .filter(group => group.isSelected)
    .flatMap(group => group.wishlists);

  const selectedGroup = store.groups.filter(group => group.isSelected)[0];
*/

  return {
    wishlists: store.wishlists.filter(l => l.isSelected),
    group: store.groups.filter(group => group.isSelected)[0],
  };
};

const mapDispatchToProps = (dispatch) => ({
  update: () => {
    // HttpService.updateItem(wish, 'wishlistid', 'associationsId', 'token');

    dispatch({
      type: 'UPDATE_WISHLIST',
      payload: {
        //
      },
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(function Wishlist({wishlists, update}) {
  const [open, setOpen] = useState(false);
  const [wish, setWish] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpdate = (wish) => {
    //
  };
  const handleDelete = () => {
    //
  };

  return (
    <>
      <Typography variant="h4" component="div">
        Wishlist
      </Typography>
      <Button>ADD WISH</Button>
      <ul>
        {wishlists?.map(
          wishlist => (
            <li key={wishlist.id}>
              {wishlist.itemName}
              <Button variant="contained" size="small"
                      onClick={() => handleDelete(wishlist.userId)}>DELETE</Button>
              <Button variant="contained" size="small" onClick={() => handleOpen}>UPDATE</Button>
            </li>))}
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <FormGroup>
            <FormControl sx={{my: 2}}>
              <InputLabel htmlFor="my-input">New Wish!</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                setWish(e.target.value);
              }}/>
            </FormControl>
            <Button sx={{my: 2}} variant="contained" onClick={() => handleUpdate(wish)}>UPDATE WISH</Button>
            {/* <p>Don't have an account? Register!</p> */}
          </FormGroup>
        </Box>
      </Modal>
    </>
  );
});
