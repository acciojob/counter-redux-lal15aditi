import { INCREASE, DECREASE } from "./actionTypes";

export function increaseCount() {
  console.log("Increase count");

  return {
    type: INCREASE,
  };
}

export function decreseCount() {
  console.log("Decrease count");

  return {
    type: DECREASE,
  };
}
