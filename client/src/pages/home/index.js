import React from "react";
import HomeContainer from "../../containers/Home/HomeContainer";

function HomePage() {
  return (
    <HomeContainer>
      {({ states }) => {
        return <div>Home</div>;
      }}
    </HomeContainer>
  );
}

export default HomePage;
