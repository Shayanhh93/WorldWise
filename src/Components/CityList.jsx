import styles from "./CityList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";
import { useCities } from "../Contexts/CitiesContext";

function CityList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your city" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
