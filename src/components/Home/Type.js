import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BIO-MEDICAL ENGINNER",
          "FREELANCER",
          "ML IN HEALTH-CARE",
          "WEB-DEVLOPER",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
