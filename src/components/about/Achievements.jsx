import React from "react";

const achievementsContent = [
  { title: "1 an", subTitle1: "d'", subTitle2: "Experience" },
  { title: "3", subTitle1: "projets", subTitle2: "terminés" },
  { title: "3", subTitle1: "Clients", subTitle2: "satisfaits" },
 
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
