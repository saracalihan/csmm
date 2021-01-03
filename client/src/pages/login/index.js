import React from "react";
import LoginContainer from "../../containers/Login";

function LoginPage() {
  return (
    <LoginContainer>
      {({ states }) => {
        return <div>loginPage</div>;
      }}
    </LoginContainer>
  );
}

export default LoginPage;
