import { useNavigate } from "react-router";
import style from "./welcome.module.css";
const WelcomeComponent = () => {
  const navigate = useNavigate();
  return (
    <div className={style.box}>
      <h2>Welcome To Translator App </h2>
      <h3>Select Your App(ManagementDashboard -PublicView)</h3>
      <button onClick={() => navigate("/dashboard")}>
        ManagementDashboard
      </button>
      <button onClick={() => navigate("/public-view")}>PublicView</button>
    </div>
  );
};
export default WelcomeComponent;
