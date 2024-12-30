import styles from "./components.module.css";

type ChildProps = {
  options: { label: string; value: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown = ({ options, value, onChange }: ChildProps) => {
  return (
    <>
      <div className={styles.components}>
        <div className={styles.dropDownComponents}>
          <p className={styles.dropdown_p}>人口構成</p>
          <select value={value} onChange={onChange} className={styles.select}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <p className={styles.p}>
          ※人口構成を変更したら都道府県を再度選択してください。
        </p>
      </div>
    </>
  );
};

export default Dropdown;
