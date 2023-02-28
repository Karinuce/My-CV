import "./index.css";

function Pill({ children, className }) {
  return (
    <div className="Personal-skills">
      <p className={"Personal-skills-param " + className}>{children}</p>
    </div>
  );
}

export default Pill;
