import {connect} from 'react-redux';


const mapStateToProps = ({store}) => ({
  isLoggedIn: store.user.isLoggedIn,
  username: store.user.username,
  userEmail: store.user.email,
  userPicture: store.user.picture,
  isLoading: store.loadStatus.isLoading,
});

// todo: when user clicks login button, isLoading needs dispatched to true
const mapDispatchToProps = (dispatch) => ({
  // todo: anything to dispatch back to the store?
});

const Profile = ({isLoading, isLoggedIn, username, userEmail, userPicture}) => {
  if (isLoading) {
    return (
      <div>
        loading...
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div>
        <h2>Logged in!</h2>
        <img src={userPicture} alt={username}/>
        <h2>{username}</h2>
        <p>{userEmail}</p>
      </div>);
  }

  return <></>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
