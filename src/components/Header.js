import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return(
    <nav>
      <div className="nav-wrapper light-blue darken-2">
                                    {/* Esto es props.children */}
        <a href="#!" className="brand-logo">{props.children}</a>
      </div>
    </nav>
  );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};
export default Header;
