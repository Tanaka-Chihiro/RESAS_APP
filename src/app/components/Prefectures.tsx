import styles from "./components.module.css";
import React from "react";

type Props = {
  prefectures:
    | {
        prefCode: number;
        prefName: string;
      }[];

  onChange: (name: string, prefName: number, check: boolean) => void;
};
const Prefectures = ({ prefectures, onChange }: Props) => {
  return (
    <div className={styles.components}>
      <div className={styles.checkBoxComponents}>
        {prefectures.map((prefecture) => (
          <div key={prefecture.prefName}>
            <input
              type="checkbox"
              name="Prefecture name"
              onChange={(event) => {
                onChange(
                  prefecture.prefName,
                  prefecture.prefCode,
                  event.target.checked
                );
              }}
              id={"checkbox" + prefecture.prefCode}
              className={styles.checkBox}
            />
            <label
              className={styles.checkBoxLabel}
              htmlFor={"checkbox" + prefecture.prefCode}
            >
              {prefecture.prefName.length === 3
                ? "" + prefecture.prefName
                : prefecture.prefName}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prefectures;
