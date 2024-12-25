import styles from "./components.module.css";
import React from "react";

type Props = {
  prefectures:
    | {
        prefCode: number;
        prefName: string;
      }[];

  onChange: (name: string, prefName: number, check: boolean) => void;
  isOpen: boolean;
  onToggle: () => void;
};

const Prefectures = ({ prefectures, onChange, isOpen, onToggle }: Props) => {
  return (
    //PC版
    <div>
      <div className={styles.PCcomponents}>
        <p className={styles.p}>都道府県一覧</p>
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
                id={String(prefecture.prefCode)}
                className={styles.checkBox}
              />
              <label
                className={styles.checkBoxLabel}
                htmlFor={String(prefecture.prefCode)}
              >
                {prefecture.prefName}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* SP版 */}
      <div className={styles.SPcomponents}>
        <button onClick={onToggle}>都道府県一覧</button>
        {isOpen && (
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
                  id={String(prefecture.prefCode)}
                  className={styles.checkBox}
                />
                <label
                  className={styles.checkBoxLabel}
                  htmlFor={String(prefecture.prefCode)}
                >
                  {prefecture.prefName}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Prefectures;
