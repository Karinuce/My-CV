import "./index.css";

function Content({ className, children, title }) {
  return (
    <div className={"Content " + className}>
      <div className="Content-header">
        <h3 className="Block-title">{title}</h3>
        <div className="Fancy-line">
          <div className="Gray-line"></div>
        </div>
      </div>
      <div className="Content">{children}</div>
    </div>
  );
}

export default Content;
