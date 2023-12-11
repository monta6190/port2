import React from "react";

const educationContent = [
  {
    year: "2016-2019",
    degree: "licence fondamentale en Beaux-Arts",
    institute: "ESSTeD - Ecole Supérieure Des Sciences et Technologies du Design",
    details: `  Licence fondamentale en Beaux-Arts, Arts et Métiers, Architecture d'intérieur - Scénographie`,
  },
  
  {
    year: "2021-2023",
    degree: "Master de recherche en design ",
    institute: "ESSTeD - Ecole Supérieure Des Sciences et Technologies du Design",
    details: `Master de recherche en design , Design d'expériences`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
