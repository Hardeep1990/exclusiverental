import React, { useEffect } from "react";

const Chatbot = () => {
  let script = useEffect[0];
  useEffect(() => {
    script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <h1>Chatbot</h1>
      {script}
    </div>
  );
};

export default Chatbot;
