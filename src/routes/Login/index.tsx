import React from "react";
import "./styles.css";
import { useAuth } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { onLogin } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    onLogin().then(() => navigate("/"));
  };

  return (
    <div className="loginWrapper fadeInDown">
      <div id="formContent">
        <h2 className="active underlineHover"> Sign In </h2>
        <div className="fadeIn first">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            id="icon"
            alt="User Icon"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            className="fadeIn second"
            name="username"
            placeholder="username"
            required
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
            required
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
};
export default Login;
