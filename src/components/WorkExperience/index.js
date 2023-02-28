import "./index.css";

function WorkExperience({ position, children }) {
  return (
    <div className="WorkExperience">
      <div className="WorkPlaces">
        <p className="WorkTitle">
          <span className="WorkPosition">{position}</span>
        </p>
        <p className="AboutWork">{children}</p>
      </div>
    </div>
  );
}

export default WorkExperience;
