//ドロップダウンメニューの型定義
type DropdownProps = {
  options: { label: string; value: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

//都道府県情報の型定義
type PrefecturesState = {
  message: null;
  result: {
    prefCode: number;
    prefName: string;
  }[];
};
type PrefectureProps = {
  prefectures:
    | {
        prefCode: number;
        prefName: string;
      }[];
  onChange: (name: string, prefName: number, check: boolean) => void;
  isOpen: boolean;
  onToggle: () => void;
};

//人口情報の型定義
type PopulationState = {
  prefName: string;
  data: { year: number; value: number }[];
}[];

//グラフ情報の型定義
type GraphProps = {
  label: string;
  populationdata: {
    prefName: string;
    data: { year: number; value: number }[];
  }[];
};

export type {
  DropdownProps,
  PrefecturesState,
  PrefectureProps,
  PopulationState,
  GraphProps,
};
