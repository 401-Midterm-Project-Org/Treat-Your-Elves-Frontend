import {Button, Dialog, DialogActions, DialogTitle, FormControl, Input, InputLabel} from '@mui/material';
import {useState} from 'react';
import {connect} from 'react-redux';


const mapStateToProps = ({store}) => ({
  selectedGroup: store.groups.filter(group => group.isSelected)[0],
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (group, username) => {
    const g = {
      ...group,
      groupMembers: [
        // ...group[0].groupMembers,
        {
          id: crypto.randomUUID(),
          name: username,
        }
      ],
    };

    dispatch({
      type: 'MEMBER_ADDED',
      payload: {
        // group, username
        group: g,
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
              }}>Add Member</Button>
      <Dialog open={openInvite} onClose={handleCloseInvite}>
        <DialogTitle>Invite New Member</DialogTitle>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter email</InputLabel>
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
