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

export interface TextFieldProps {
  options: OptionsType;
  setOptions: React.Dispatch<React.SetStateAction<OptionsType>>;
}

export interface submitBtnProps {
  handleResult: () => void;
  options: OptionsType;
}

export interface removeBtnProps {
  setOptions: React.Dispatch<React.SetStateAction<OptionsType>>;
}

export interface selectBtnProps {
  setOptions: React.Dispatch<React.SetStateAction<OptionsType>>;
}
