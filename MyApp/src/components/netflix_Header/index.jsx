import NHActions from "../netflix_header_Actions";
import "./header.css";

const NHeader = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <h1 className="header_title">{title}</h1>
      <NHActions />
    </header>
  );
};

export default NHeader;
