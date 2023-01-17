import React from "react";
import s from "./TestimonialCard.module.scss";
import profileImg from "../../assets/img/restaurant chef B.jpg";

export const TestimonialCard = ({ item }) => {
  const { name, photo, rating, review } = item;
  return (
    <div className={s.cardBox}>
      <div>{rating}</div>
      <div className={s.profile}>
        <img className={s.profileImg} src={photo} alt="Profile" />
        <p>{name}</p>
      </div>
      <p className={s.reviewText}>{review}</p>
    </div>
  );
};
