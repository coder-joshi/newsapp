import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center my-10">
      <img src="/spinner.gif" alt="Loading..." className="w-16 h-16" />
    </div>
  );
}

export default Spinner;
