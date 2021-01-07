import React, { useEffect, useState } from "react";
import request from "../../services/request";

const { me } = request;
function HomePage() {
  const [meData, setmeData] = useState({});
  useEffect(async () => {
    try {
      const meResponse = me();
      setmeData((await meResponse).data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <pre>{meData && JSON.stringify(meData, null, 2)}</pre>
    </div>
  );
}

export default HomePage;
