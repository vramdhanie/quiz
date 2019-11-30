import { SystemState, PHASE_TRANSITION, CHANGE_MODE } from "./types";

export function phaseTransition(newPhase: SystemState) {
  return {
    type: PHASE_TRANSITION,
    payload: newPhase
  };
}

export function changeMode() {
  return {
    type: CHANGE_MODE
  };
}
