import React from "react";

const personalInfoContent = [
  { meta: "Prénom", metaInfo: "Oumayma " },
  { meta: "Nom de famille", metaInfo: "yacoub" },
  { meta: "Âge", metaInfo: "26 ans" },
  { meta: "Nationalité", metaInfo: "Tunisienne" },
  { meta: "Freelance", metaInfo: "Active" },
  { meta: "Numéro de téléphone", metaInfo: "+21693709009" },
  { meta: "Email", metaInfo: "oumaymaycb@gmail.com" },
  { meta: "Langues", metaInfo: "Français, Anglais , Arabe" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
