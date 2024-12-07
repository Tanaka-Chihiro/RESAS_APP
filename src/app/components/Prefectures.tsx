import { getPrefecturesData } from "../lib/getPrefecturesData";
import styles from "./components.module.css";

const Prefectures = async () => {
  const prefectures = await getPrefecturesData();
  return (
    <div className={styles.components}>
      <div className={styles.checkBoxComponents}>
        {prefectures.map((prefecture) => (
          <div>
            <input type="checkbox" name={prefecture.name} id={prefecture.id} />
            <label htmlFor="checkbox">{prefecture.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prefectures;
