// cookies.ts
import Cookies from "js-cookie";

export const loadState = () => {
  try {
    const serializedState = String(Cookies.get("state"));
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    Cookies.set("state", serializedState);
  } catch {
    // ignore write errors
  }
};
