export interface OptionsType {
  winners: string[];
  shuffleResultShow: string;
  numberOfWinners: number;
  namesCount: number;
  finished: boolean;
  modal: boolean;
  filter: boolean;
  remove: boolean;
  nameArray: string[];
  text: string;
}

export interface ModelProps {
  shuffle: string;
  winners: string[];
  finished: boolean;
  totalNames: number;
  setOptions: React.Dispatch<React.SetStateAction<OptionsType>>;
}
