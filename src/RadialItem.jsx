import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class RadialItem extends Component {
  handleClick = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      className,
      size,
      top,
      left,
      image,
      handleClick,
      children,
      href,
    } = this.props;
    const marginValue = -1 * (size / 2) + "px";

    const itemStyle = {
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      lineHeight: `${size}px`,
      backgroundImage: image,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    if (image !== "none") {
      itemStyle.border = "none";
      itemStyle.boxShadow = "none";

      if (className !== "radial-menu-button") {
        itemStyle.backgroundColor = "transparent";
      }
    }

    return (
      <Link
        className={className}
        style={itemStyle}
        onClick={handleClick}
        to={href}
      >
        {children}
      </Link>
    );
  }
}

RadialItem.propTypes = {
  className: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.number,
};

RadialItem.defaultProps = {
  image: "none",
  size: 100,
};

export default RadialItem;
