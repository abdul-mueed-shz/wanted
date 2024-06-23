import React from "react";
import PropTypes from "prop-types";
import { renderToString } from "react-dom/server";
import DOMPurify from "dompurify";
import ReactStars from "react-rating-stars-component";

const RatingCard = ({ title = "", skillsList = [], titleDetails = "" }) => {
  const handleSkillClick = (link) => {
    if (!link) {
      return;
    }
    window.open(link, "_blank");
  };

  return (
    <section className="pb-8 my-14 App-header opacity-100 border-top__2pxDashed max-w-718px">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
        <div
          id="heading"
          className="text-3xl font-medium col-span-2 md:col-span-1"
        >
          {title}
        </div>
        <div
          id="details"
          className="dynamic-content text-lg font-medium col-span-1"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(renderToString(titleDetails)),
          }}
        />
      </div>
      <div className="container">
        {skillsList.length > 0 &&
          skillsList.map(
            ({ skillId, skill, rating, icon: IconComponent, link }, index) => (
              <div
                key={skillId ?? index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10"
              >
                <div
                  id="skill"
                  className="flex max-w-min items-center space-x-4 cursor-pointer"
                  onClick={() => handleSkillClick(link)}
                >
                  <div className="icon-container">
                    {React.createElement(IconComponent, {
                      size: 25,
                      color: "white",
                    })}
                  </div>
                  <div className="text-2xl ">{skill}</div>
                </div>
                <div
                  id="details"
                  className="dynamic-content font-medium col-span-1 flex"
                >
                  <ReactStars
                    count={10}
                    value={rating}
                    size={34}
                    activeColor="#4d4d4d"
                    edit={false}
                  />
                </div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

RatingCard.propTypes = {
  title: PropTypes.string,
  titleDetails: PropTypes.string,
  skillsList: PropTypes.arrayOf(
    PropTypes.shape({
      skillId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      skill: PropTypes.string,
      rating: PropTypes.number,
      icon: PropTypes.elementType,
    })
  ),
};

export default RatingCard;
