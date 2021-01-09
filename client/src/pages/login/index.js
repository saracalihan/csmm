import React from "react";
import { Card, CardBody, Label, Input, Button } from "reactstrap";
function LoginPage() {
  return (
    <div className="loginPage ">
      <div className="row w-100 justify-content-center">
        <Card className="col-md-3">
          <div className="logo d-flex justify-content-center">
            <h3>CSMM</h3>
          </div>
          <CardBody>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" placeholder="email" />
            <br />
            <Label
              for="examplePassword"
              className="d-flex justify-content-between"
            >
              Password <b className="link">Reset Password</b>
              {/* Şifre yenileme sayfasına redirect edecek */}
            </Label>
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
                  <Button outline color="primary">
                    Sıng In
                  </Button>
                </div>
              </div>
            </div>
            <div className="social-login loginActions">
              <Button outline color="secondary">
                Google
              </Button>{" "}
              <Button outline color="secondary">
                Twitter
              </Button>
              <Button outline color="secondary">
                Facebook
              </Button>
            </div>
          </CardBody>

          <div className="d-flex justify-content-center">
            <b className="m-t-10 link ">Sing up</b>
            {/* kayıt sayfasına redirect edecek */}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
