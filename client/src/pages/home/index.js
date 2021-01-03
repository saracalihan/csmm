import React from "react";
import HomeContainer from "../../containers/Home/HomeContainer";

function HomePage() {
  return (
    <HomeContainer>
      {({ states, me }) => {
        return (
          <div>
            <h1>Home</h1>
            <pre>{me.isLoaded && JSON.stringify(me.payload, null, 2)}</pre>
          </div>
        );
      }}
    </HomeContainer>
  );
}

export default HomePage;
