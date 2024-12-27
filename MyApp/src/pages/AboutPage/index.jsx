import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <h1> Know more in About</h1>
      <div>
        <Link to={"/"}>Go to Home</Link>
        <Link to={"/profile"}>Go to Profile</Link>
      </div>
    </div>
  );
};
export default About;
