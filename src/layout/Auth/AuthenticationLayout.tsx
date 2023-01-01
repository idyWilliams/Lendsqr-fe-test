import React from "react";
import "../Auth/AuthenticationLayout.scss";
import Logo from "../../assets/logo/Logo";
import image from "../../assets/images/pablo-sign-in 1.png";
import Login from "../../components/login/Login";
import { useNavigate } from "react-router-dom";
interface Props {
  // Props are optional, but you can specify types and default values
  title: string;
  backgroundColor?: string;
}
const AuthenticationLayout: React.FC<Props> = ({
  title,
  backgroundColor = "white",
}) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard", { replace: true });
  };
  return (
    <div className="auth-wrapper">
      <div className="AuthLayout" style={{ backgroundColor }}>
        <section className="left-section">
          <div className="logo">
            <Logo />
          </div>
        </section>
        <section className="right-section">
          <div className="login-wrapper">
            <div className="case">
              <Login onLogin={handleLogin} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
