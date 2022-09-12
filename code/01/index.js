import { Machine } from "xstate";

const handleBulbMachine = Machine({
  id: "lightBulb",
  initial: "unlit",
  states: {
    lit: {
      on: {
        BREAK: "broken",
        TOGGLE: "unlit",
      },
    },
    unlit: {
      on: {
        BREAK: "broken",
        TOGGLE: "lit",
      },
    },
    broken: {},
  },
});

console.log(handleBulbMachine.initialState);
console.log(handleBulbMachine("unlit", "TOGGLE"));
console.log(handleBulbMachine("unlit", "BREAK"));
console.log(handleBulbMachine("broken", "TOGGLE"));
