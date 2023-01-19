import React from "react";
import s from "./Main.module.scss";
import { useReducer } from "react";
import { BookingForm } from "../BookingForm/BookingForm";

const availableTimesArr = [
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
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
        availableTimes: availableTimesArr.slice(1, 3),
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

const dateNow = new Date(Date.now());
const dateString = dateNow.toISOString().substring(0, 10);

export const initialState = {
  date: dateString,
  availableTimes: availableTimesArr,
  time: "",
  guests: 2,
  occasion: "Occasion",
};

export const Main = () => {
  // you will change the availableTimes state to a reducer.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="widthContainer">
      <div className={s.container}>
        {/* <h1 style={{ fontSize: "4rem", marginBottom: "3rem" }}>
          Reservation details
        </h1> */}
        <BookingForm state={state} dispatch={dispatch} />
      </div>
    </div>
  );
};
