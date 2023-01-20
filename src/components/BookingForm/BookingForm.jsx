import React from "react";
import s from "./BookingForm.module.scss";
import { Button } from "../Button";
import dishIcon from "../../assets/svg/dishIcon.svg";
import {
  AccessTime as AccessTimeIcon,
  PersonOutline as PersonOutlineIcon,
  CalendarMonth as CalendarMonthIcon,
} from "@mui/icons-material";
import { SelectOption } from "../SelectOption";
import { fetchAPI } from "../../api/bookingDataAPI";

const occasionOptions = [
  { value: "Occasion", label: "Occasion", icon: PersonOutlineIcon },
  { value: "Birthday", label: "Birthday", icon: PersonOutlineIcon },
  { value: "Engagement", label: "Engagement", icon: PersonOutlineIcon },
  { value: "Anniversary", label: "Anniversary", icon: PersonOutlineIcon },
];

export const BookingForm = ({ state, dispatch, submitForm }) => {
  const handleChangeDate = (e) => {
    dispatch({ type: "date", payload: e.target.value });
    const date = new Date(e.target.value);
    const availableTimes = fetchAPI(date);
    dispatch({ type: "availableTimes", payload: availableTimes });
    dispatch({ type: "time", payload: availableTimes[0] });
  };

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(state);
    console.log("submitForm", state);
  };

  return (
    <div className={s.container}>
      <h1 style={{ fontSize: "4rem", marginBottom: "3rem" }}>Book Now</h1>
      <form onSubmit={handleSubmit} className={s.formContainer}>
        <div className={s.inputBox}>
          <label htmlFor="res-date">Choose date</label>
          <i>
            <CalendarMonthIcon fontSize="large" />
          </i>
          <input
            type="date"
            name="date"
            id="res-date"
            onChange={handleChangeDate}
            value={state.date}
          />
        </div>

        <div className={s.inputBox}>
          <label htmlFor="res-time">Choose time</label>
          <i>
            <AccessTimeIcon fontSize="large" />
          </i>
          <select
            id="res-time"
            name="time"
            onChange={handleChange}
            value={state.time}
          >
            {state.availableTimes.map((time) => (
              // BookingSlot ?
              <option data-testid="select-option" key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className={s.inputBox}>
          <label htmlFor="guests">Number of guests</label>
          <i>
            <PersonOutlineIcon fontSize="large" />
          </i>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            onChange={handleChange}
            value={state.guests}
          />
        </div>

        <div className={s.inputBox}>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={handleChange}
            value={state.occasion}
          >
            {Object.values(occasionOptions).map((optionItem) => (
              <option key={optionItem.value} value={optionItem.value}>
                {optionItem.label}
              </option>
            ))}
          </select>
        </div>
        {/* <SelectOption options={occasionOptions} /> */}
        <input
          className={s.submitBtn}
          type="submit"
          value="Make Your Reservation"
        />
      </form>
    </div>
  );
};
