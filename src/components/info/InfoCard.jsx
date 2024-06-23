import React from "react";
import PropTypes from "prop-types";
import { renderToString } from "react-dom/server";
import DOMPurify from "dompurify";

const InfoCard = ({ title = "", infoList = [], titleDetails = "" }) => {
  return (
    <section className="pb-8 my-14 App-header opacity-100 border-top__2pxDashed max-w-718px">
      {title && (
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
      )}
      <div className="container">
        {infoList.length > 0 &&
          infoList.map(({ topicId, topic, locale, era, details }, index) => (
            <div
              key={topicId ?? index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10"
            >
              <div id="topic">
                {topic && <div className="text-2xl font-semibold">{topic}</div>}
                <div className="pt-2">
                  {locale && (
                    <div className="text-lg font-medium">{locale}</div>
                  )}
                  {era && <div className="text-lg font-medium">{era}</div>}
                </div>
              </div>
              {details && (
                <div
                  id="details"
                  className="dynamic-content font-medium col-span-1"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(renderToString(details)),
                  }}
                />
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  titleDetails: PropTypes.node,
  infoList: PropTypes.arrayOf(
    PropTypes.shape({
      topicId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      topic: PropTypes.string,
      locale: PropTypes.string,
      era: PropTypes.string,
      details: PropTypes.node,
    })
  ),
};

export default InfoCard;
