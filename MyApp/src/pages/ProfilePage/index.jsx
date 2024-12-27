import { Link } from "react-router";

const Profile = () => {
  return (
    <div>
      <h1> It's My Profile</h1>
      <div>
        <Link to={"/"}>Go to Home</Link>
        <Link to={"/about"}>Go to About</Link>
      </div>
    </div>
  );
};
export default Profile;
