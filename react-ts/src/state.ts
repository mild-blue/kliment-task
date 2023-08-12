import { createContext, Dispatch, useContext } from "react";

export enum OrderType {
  SCREENING = "screening",
  PRESCRIPTION = "prescription",
}

export type UserState = {
  orderType: OrderType | null;
};

export const initialUserState: UserState = { orderType: null };

// export type AppState = {
//  user: UserState;
// };

export type AppState = UserState;
export const initialAppState = initialUserState;

export const StateContext = createContext<[AppState, Dispatch<AppState>]>([initialAppState, () => null]);

export function useUser(): [UserState, Dispatch<UserState>] {
  // this looks super dummy, but it's basically a selector that works regardless of the store layout
  const [state, setState] = useContext(StateContext);
  return [state, setState];
}
