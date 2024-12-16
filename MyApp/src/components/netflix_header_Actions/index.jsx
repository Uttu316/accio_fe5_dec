import "./nhActions.css";

const NHActions = () => {
  return (
    <div className="header_actions">
      <select className="header_select">
        <option>English</option>
        <option>हिन्दी</option>
      </select>
      <button className="header_btn">Signin</button>
    </div>
  );
};

export default NHActions;
