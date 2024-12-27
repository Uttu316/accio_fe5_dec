import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1> Welcome to Home</h1>

      <div>
        <Link to={"/about"}>Go to About</Link>
        <Link to={"/profile"}>Go to Profile</Link>
        <Link to={"/restaurant"}> Go To Restaurant</Link>
      </div>
    </div>
  );
};
export default Home;
