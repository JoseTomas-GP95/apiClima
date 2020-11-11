import React from "react";
import PropTypes from "prop-types";


function Error({mensaje, estilo}) {
  return (
    <div>
      <p className={estilo}>{mensaje}</p>
    </div>
  );
}

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
  estilo: PropTypes.string.isRequired
};

export default Error;
