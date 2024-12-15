import styles from "./components.module.css";

type Props = {
  populationdata: {
    prefName: string;
    data: { year: number; value: number }[];
  }[];
};

export default function Graph({ populationdata }: Props) {
  return (
    <>
      <div className={styles.components}>{}</div>
    </>
  );
}
