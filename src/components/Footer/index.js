import "./index.css";

function FooterBlocks({ title, children }) {
  return (
    <div className="FooterBlock">
      <h3 className="FooterTitle">{title}</h3>
      <p className="FooterInfo">{children}</p>
    </div>
  );
}

export default FooterBlocks;
