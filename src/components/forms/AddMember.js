import {Button, Dialog, DialogActions, DialogTitle, FormControl, Input, InputLabel} from '@mui/material';
import {useState} from 'react';
import {connect} from 'react-redux';


const mapStateToProps = ({store}) => ({
  selectedGroup: store.groups.filter(group => group.isSelected)[0],
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (group, username) => {
    dispatch({
      type: 'MEMBER_ADDED',
      payload: {
        // group, username
        id: crypto.randomUUID(),
        name: username,
        groupId: group.id,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(function AddMember({handleSubmit, selectedGroup}) {

  const [openInvite, setOpenInvite] = useState(false);
  const [user, setUser] = useState();

  const handleOpenInvite = () => {
    setOpenInvite(true);
  };

  const handleCloseInvite = () => {
    setOpenInvite(false);
  };

  return (
    <>
      <Button onClick={handleOpenInvite} variant="contained"
              sx={{
                display: 'inline-grid'
              }}>Add Elf Member</Button>
      <Dialog open={openInvite} onClose={handleCloseInvite}>
        <DialogTitle>Add Elf to Group</DialogTitle>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter elf username</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setUser(e.target.value)}/>
        </FormControl>
        <DialogActions>
          <Button onClick={() => {
            handleCloseInvite();
            handleSubmit(selectedGroup, user);
          }}>Send</Button>
          <Button onClick={handleCloseInvite}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
