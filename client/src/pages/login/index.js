import React from "react";
import { Card, CardBody, Label, Input, Button } from "reactstrap";
function LoginPage() {
  return (
    <div className="loginPage ">
      <div className="row w-100 justify-content-center">
        <Card className="col-md-3">
          <CardBody>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" placeholder="email" />
            <br />
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password "
            />
            <br />
            <div className="loginActions">
              <div className="row">
                <div className="col-12  ">
                  <Button outline color="success">
                    Login
                  </Button>
                </div>

                <div className="col-12  m-t-10 ">
                  <Button outline color="info">
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
          <h4 className="or">
            OR <br />
            <small className="or">login with</small>
          </h4>
          <div className="social-login loginActions">
            <div className="row">
              <div className="col-12 ">
                {" "}
                <Button outline color="secondary">
                  Google
                </Button>
              </div>
              <div className="col-12 m-t-10">
                <Button outline color="secondary ">
                  Github
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
