import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  isLoading: state.userProfile.isLoading,
  isLoggedIn: state.user.isLoggedIn,
  username: state.user.username,
  userEmail: state.userProfile.email,
  userPicture: state.userProfile.picture,
});

// todo: when user clicks login button, isLoading needs dispatched to true
const mapDispatchToProps = (dispatch) => ({
  // todo: anything to dispatch back to the store?
});

const Profile = ({isLoading, isLoggedIn, username, userEmail, userPicture}) => {
  console.log('in profile-->', isLoading, isLoggedIn, username, userEmail, userPicture);
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
