import "./fc.css";

const FirstComponent = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to List</h1>

      <ol className="list">
        <li className="list_item">Apple</li>
        <li className="list_item">Facebbok</li>
        <li className="list_item">Netflix</li>
        <li className="list_item">Microsoft</li>
      </ol>
    </div>
  );
};

export default FirstComponent;
