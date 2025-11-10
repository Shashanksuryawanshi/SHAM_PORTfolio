import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BIOTECHNOLOGY STUDENT",
          "BIOINFORMATICS ENTHUSIAST",
          "QC MICROBIOLOGY INTERN",
          "MACHINE LEARNING IN HEALTHCARE RESEARCHER",
          "DATA-DRIVEN BIOLOGIST"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;