import React from "react";
import { skillsProp } from "../props";

const SkillsList = (props) => {
  const { technical, supplementary, commercial, academic } = props.skills;

  return (
    <div className="col-12 col-sm-4 tech">
      <h2>Key Skills</h2>
      <ul className="technical">
        {technical.map((techSkill, key) => (
          <li key={key}>{techSkill}</li>
        ))}
      </ul>
      <h5>Experience</h5>
      <ul className="experience">
        {commercial.map((commercialSkill, key) => {
          const { dateRange, description, companyName, companyLink } =
            commercialSkill;
          return (
            <li key={key}>
              <strong>{dateRange}</strong> {description}{" "}
              <a href={companyLink}>{companyName}</a>
            </li>
          );
        })}
      </ul>
      <h4>Education</h4>
      <ul className="academic">
        {academic.map((academicItem, key) => (
          <li key={key}>
            <strong>{academicItem.date}</strong> {academicItem.description}
          </li>
        ))}
      </ul>
      <h2>Additional Skills</h2>
      <ul className="technical">
        {supplementary.map((supplementarySkill, key) => (
          <li key={key}>{supplementarySkill}</li>
        ))}
      </ul>
    </div>
  );
};

SkillsList.propTypes = {
  skills: skillsProp.isRequired,
};

export default SkillsList;
