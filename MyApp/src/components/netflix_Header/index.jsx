import "./header.css";

const NHeader = () => {
  return (
    <header className="header">
      <h1 className="header_title">Netflix</h1>
      <div className="header_actions">
        <select className="header_select">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <button className="header_btn">Signin</button>
      </div>
    </header>
  );
};

export default NHeader;
