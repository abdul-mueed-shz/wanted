import React from "react";
import PropTypes from "prop-types";

const CopyRight = ({ copyRightDate = "", detail = [], creator = "" }) => {
  return (
    <section className="my-14 App-header opacity-100 border-top__2pxDashed max-w-718px">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
          <div id="topic" className="flex items-center gap-2">
            &copy;
            {copyRightDate && (
              <div className="text-lg font-medium">{copyRightDate}</div>
            )}
          </div>
          <div
            id="details"
            className="flex justify-end font-medium text-lg col-span-1 hover:underline cursor-pointer"
          >
            Home
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
          <div
            id="topic"
            className="flex items-center gap-2 text-lg font-medium"
          >
            Made by
            {creator && <div className="font-semibold">{creator}</div>}
          </div>
          <div
            id="details"
            className="flex justify-end font-medium text-lg col-span-1 hover:underline cursor-pointer"
          >
            Licensing
          </div>
        </div>
      </div>
    </section>
  );
};

CopyRight.propTypes = {
  copyRightDate: PropTypes.string,
  creator: PropTypes.string,
  detail: PropTypes.string,
};

export default CopyRight;
