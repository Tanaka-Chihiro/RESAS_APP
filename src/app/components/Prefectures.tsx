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
    //PC版
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
              id={"box" + prefecture.prefCode}
              className={styles.checkBox}
            />
            <label
              className={styles.checkBoxLabel}
              htmlFor={"box" + prefecture.prefCode}
            >
              {prefecture.prefName}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prefectures;
