import { SystemState, PHASE_TRANSITION } from "./types";

export function phaseTransition(newPhase: SystemState) {
  return {
    type: PHASE_TRANSITION,
    payload: newPhase
  };
}
