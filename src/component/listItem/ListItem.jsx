import React from "react";
import PropTypes from "prop-types";
const ListItem = (props) => {
  const { title, desc } = props;
  return (
    <>
      {!title ? null : (
        <div data-test="listItemComponent">
          <h2 data-test="componentTitle">{title}</h2>
          <p>{desc}</p>
        </div>
      )}
    </>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ListItem;
