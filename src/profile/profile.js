
const Profile = ({ fullName, bio, profession, children, handleName }) => {
 

  const imgStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
  };

  return (
    <div>
      <img src={children} alt="profile" style={imgStyle} />
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
};



export default Profile;
