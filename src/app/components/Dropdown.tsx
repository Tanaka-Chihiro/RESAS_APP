import styles from "./components.module.css";

type ChildProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown = ({ value, onChange }: ChildProps) => {
  return (
    <>
      <div className={styles.components}>
        <div className={styles.dropDownComponents}>
          <select value={value} onChange={onChange} className={styles.select}>
            <option key={0} value={"0"}>
              総人口
            </option>
            <option key={1} value={"1"}>
              年少人口
            </option>
            <option key={2} value={"2"}>
              生産年齢人口
            </option>
            <option key={3} value={"3"}>
              老年人口
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
