import { Mode } from "../store/system/types";

export interface StyledProps {
  className?: string;
}

export interface AppProps extends StyledProps {
  mode: Mode;
}
