import { useNavigate } from "react-router-dom";

import styles from "./User.module.css";

import Button from "./Button";
import { useAuth } from "../Contexts/FakeAuthContext";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <Button onClick={handleClick}>Logout</Button>
    </div>
  );
}

export default User;
