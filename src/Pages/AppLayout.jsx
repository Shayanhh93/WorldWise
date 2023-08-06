import styles from "./AppLayout.module.css";

import Map from "../Components/Map";
import User from "../Components/User";
import Sidebar from "../Components/Sidebar";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
