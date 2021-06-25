import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useHistory } from "react-router-dom";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <div className="mx-auto">
      <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
        <div className="text-3xl font-black text-button2 mb-4">Login</div>
        <div className="mb-4">
          <InputText
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Password
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            feedback={false}
          />
        </div>

        <div>
          <Button
            onClick={() => history.replace("/home")}
            label="Login"
            className="p-button-success w-full mt-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
