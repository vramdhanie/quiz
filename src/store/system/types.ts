export enum Phase {
  NEW,
  LOADING,
  PLAYING,
  DONE
}

export enum Mode {
  LIGHT = "Light Mode",
  DARK = "Dark Mode"
}

export interface SystemState {
  phase: Phase;
  mode: Mode;
}

export const PHASE_TRANSITION = "PHASE_TRANSITION";
export const CHANGE_MODE = "CHANGE_MODE";

interface PhaseTransitionAction {
  type: typeof PHASE_TRANSITION;
  payload: SystemState;
}

interface ChangeModeAction {
  type: typeof CHANGE_MODE;
}

export type SystemActionTypes = PhaseTransitionAction | ChangeModeAction;
