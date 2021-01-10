import React, { useEffect, useState } from "react";
import { Card, CardBody, Label, Input, Button } from "reactstrap";

import req from "../../services/request";

const { login } = req;
function LoginPage() {
  const [form, setForm] = useState({
    username: "burak",
    password: "123456",
  });
  const [loader, setLoader] = useState(false);

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.name]: e.value,
    });
  };

  const onSubmit = async () => {
    setLoader(true);
    try {
      const response = await login({
        ...form,
      });
      localStorage.setItem("csmm-token", response.data.token);
      window.location = "/";
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  return (
    <div className="loginPage ">
      <div className="row w-100 justify-content-center">
        <Card className="col-md-3">
          <div className="logo d-flex justify-content-center">
            <h3>CSMM</h3>
          </div>
          <CardBody>
            <Label for="email">Email</Label>
            <Input
              onChange={(e) => {
                onInputChange(e.target);
              }}
              type="text"
              name="username"
              id="email"
              value={form.username}
              placeholder="email"
            />
            <br />
            <Label
              for="examplePassword"
              className="d-flex justify-content-between"
            >
              Password <b className="link">Reset Password</b>
              {/* Şifre yenileme sayfasına redirect edecek */}
            </Label>
            <Input
              onChange={(e) => {
                onInputChange(e.target);
              }}
              type="password"
              value={form.password}
              name="password"
              id="password"
              placeholder="password "
            />
            <br />
            <div className="loginActions">
              <div className="row">
                <div className="col-12  ">
                  <Button
                    onClick={() => {
                      onSubmit();
                    }}
                    outline
                    color="primary"
                    disabled={loader}
                  >
                    {loader ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <div>Sıng In</div>
                    )}
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
