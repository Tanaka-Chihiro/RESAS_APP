import styles from "./components.module.css";
import React from "react";
import { PrefectureProps } from "../lib/types";

const Prefectures = ({
  prefectures,
  onChange,
  isOpen,
  onToggle,
}: PrefectureProps) => {
  return (
    <>
      {/* PC版 */}
      <div className={styles.PCcomponents}>
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
                id={"PCbox" + prefecture.prefCode}
                className={styles.checkBox}
              />
              <label
                className={styles.checkBoxLabel}
                htmlFor={"PCbox" + prefecture.prefCode}
              >
                {prefecture.prefName}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* SP版 */}
      <div className={styles.SPcomponents}>
        <button onClick={onToggle} className={styles.button}>
          都道府県一覧
        </button>
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
                  id={"SPbox" + prefecture.prefCode}
                  className={styles.checkBox}
                />
                <label
                  className={styles.checkBoxLabel}
                  htmlFor={"SPbox" + prefecture.prefCode}
                >
                  {prefecture.prefName}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Prefectures;
