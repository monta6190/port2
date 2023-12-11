import React from "react";

const skillsContent = [
  {
    name: "AutoCad",
    skillPercent: "95",
  },
  {
    name: "SketchUp",
    skillPercent: "80",
  },
  {
    name: "3DS MAX",
    skillPercent: "90",
  },
  
  {
    name: "Illustrator",
    skillPercent: "80",
  },
  {
    name: "V-ray",
    skillPercent: "90",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
