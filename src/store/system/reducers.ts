import {
  PHASE_TRANSITION,
  CHANGE_MODE,
  SystemState,
  SystemActionTypes,
  Phase,
  Mode
} from "./types";

const initialState: SystemState = {
  phase: Phase.NEW,
  mode: Mode.LIGHT
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case PHASE_TRANSITION: {
      return {
        ...state,
        ...action.payload
      };
    }
    case CHANGE_MODE: {
      return {
        ...state,
        mode: state.mode === Mode.LIGHT ? Mode.DARK : Mode.LIGHT
      };
    }
    default:
      return state;
  }
}
