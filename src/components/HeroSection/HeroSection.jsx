import React from "react";
import s from "./HeroSection.module.scss";
import { Button } from "../Button";
import restImg from "../../assets/img/restauranfood.jpg";

export const HeroSection = () => {
  return (
    <header className="widthContainer">
      <div className={s.heroContainer}>
        <div className={s.textContainer}>
          <h1 className={s.h1Title}>Little Lemon</h1>
          <h3 className={s.h2Title}>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Button title="Reserve a Table" />
        </div>
        <img className={s.imgCover} src={restImg} alt="Restauran food" />
      </div>
      <div className={s.heroBackground}></div>
    </header>
  );
};
