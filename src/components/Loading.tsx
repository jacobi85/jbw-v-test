import React from "react";
import { Spinner } from "vcc-ui";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: 24,
      }}
    >
      <Spinner size={32} />
    </div>
  );
};

export default Loading;
