// todo: need a profile store / reducer
const Profile = ({isLoading, isAuthenticated, user}) => {
    if (isLoading) {
    return (
      <div>
        loading...
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
