import React from "react";
import PropTypes from "prop-types";

function createMarkup(content) {
  console.log(content);
  return { __html: content };
}

const About = (props) => {
  const intros = props.intros.map((intro, key) => (
    <p key={key} dangerouslySetInnerHTML={createMarkup(intro)} />
  ));

  return (
    <div className="row about">
      <div className="col-12">{intros}</div>
    </div>
  );
};

About.propTypes = {
  intros: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default About;
