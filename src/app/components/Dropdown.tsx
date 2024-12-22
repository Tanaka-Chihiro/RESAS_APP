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
          人口構成：
          <select value={value} onChange={onChange} className={styles.select}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
