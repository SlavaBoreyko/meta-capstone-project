import React from "react";
import s from "./Specials.module.scss";
import { ProductCard } from "../ProductCard";
import { getProducts } from "../../service/product.service";
import { Button } from "../Button";
import { useFetchItems } from "../../hooks/useFetchItems";

export const Specials = () => {
  const items = useFetchItems(getProducts);

  if (!items || items.length === 0) {
    return null;
  }
  return (
    <section className="widthContainer">
      <div className={s.specialsHeader}>
        <h2>This weeks specials!</h2>
        <Button title="Online Menu" />
      </div>
      <div className={s.grid3column}>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
