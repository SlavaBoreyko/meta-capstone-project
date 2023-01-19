import React from "react";
import { useReducer } from "react";
import { BookingForm } from "../BookingForm/BookingForm";

const availableTimesArr = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];
const reducer = (state, action) => {
  if (action.type === "date") {
    const dateParse = new Date(action.payload);
    const date = dateParse.getDate();
    if (date === 1) {
      return {
        ...state,
        date: action.payload,
        availableTimes: availableTimesArr.slice(1, 2),
      };
    }
    if (date === 2) {
      return {
        ...state,
        date: action.payload,
        availableTimes: availableTimesArr.slice(0, 3),
      };
    }
    return {
      ...state,
      date: action.payload,
    };
  }
  if (action.type === "time") {
    return {
      ...state,
      time: action.payload,
    };
  }
  if (action.type === "guests") {
    return {
      ...state,
      guests: action.payload,
    };
  }
  if (action.type === "occasion") {
    return {
      ...state,
      occasion: action.payload,
    };
  }
};

const initialState = {
  date: 1,
  availableTimes: availableTimesArr,
  time: "17:00",
  guests: 2,
  occasion: "",
};

export const Main = () => {
  // you will change the availableTimes state to a reducer.
  const [state, dispatch] = useReducer(reducer, initialState);

  return <BookingForm state={state} dispatch={dispatch} />;
};
