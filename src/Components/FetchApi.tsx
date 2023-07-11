import React, { useState, useEffect } from "react";

function FetchApi() {
  const url = "https://dasilva-fotografie-api.vercel.app/fotos";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      
    </>
  );
}

export default FetchApi;
