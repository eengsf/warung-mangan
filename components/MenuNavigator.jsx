"use client";

import { GiChickenOven } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";
import { GiSausage } from "react-icons/gi";
import MenuList from "./MenuList";
import { useState } from "react";
// import { motion } from "framer-motion";

const MenuNavigator = () => {
  const [chicken, setChicken] = useState(true);
  const [noodle, setNoodle] = useState(false);
  const [drink, setDrink] = useState(false);
  const [friedFood, setFriedFood] = useState(false);
  const [category, setCategory] = useState("chicken");

  const handleChicken = () => {
    setChicken(true);
    setNoodle(false);
    setDrink(false);
    setFriedFood(false);
    setCategory("chicken");
  };
  const handleNoodle = () => {
    setChicken(false);
    setNoodle(true);
    setDrink(false);
    setFriedFood(false);
    setCategory("noodle");
  };
  const handleDrink = () => {
    setChicken(false);
    setNoodle(false);
    setDrink(true);
    setFriedFood(false);
    setCategory("drink");
  };
  const handleFriedFood = () => {
    setChicken(false);
    setDrink(false);
    setNoodle(false);
    setFriedFood(true);
    setCategory("friedFood");
  };

  return (
    <>
      <div className="w-full max-w-md flex">
        <ul className="flex md:flex-row flex-col justify-between w-full gap-3">
          <li className=" translate-y-0 transition-all duration-500">
            <button
              onClick={handleChicken}
              className={`flex md:flex-col flex-row items-center hover:text-my-normal-green gap-2 mb-2 ${
                chicken
                  ? "border-b-2 border-my-dark-green text-my-normal-green"
                  : ""
              }`}>
              <GiChickenOven size={50} />
              Chicken
            </button>
            {chicken ? (
              <div className="md:hidden flex flex-col justify-around">
                <MenuList category={category} />
              </div>
            ) : null}
          </li>

          <li>
            <button
              onClick={handleNoodle}
              className={`flex md:flex-col flex-row items-center hover:text-my-normal-green gap-2 mb-2 ${
                noodle
                  ? "border-b-2 border-my-dark-green text-my-normal-green"
                  : ""
              }`}>
              <GiNoodles size={50} />
              Noodle
            </button>
            {noodle ? (
              <div className="md:hidden flex flex-col justify-around">
                <MenuList category={category} />
              </div>
            ) : null}
          </li>

          <li>
            <button
              onClick={handleDrink}
              className={`flex md:flex-col flex-row items-center hover:text-my-normal-green gap-2 mb-2 ${
                drink
                  ? "border-b-2 border-my-dark-green text-my-normal-green"
                  : ""
              }`}>
              <SiCoffeescript size={50} />
              Drink
            </button>
            {drink ? (
              <div className="md:hidden flex flex-col justify-around">
                <MenuList category={category} />
              </div>
            ) : null}
          </li>

          <li>
            <button
              onClick={handleFriedFood}
              className={`flex md:flex-col flex-row items-center hover:text-my-normal-green gap-2 mb-2 ${
                friedFood
                  ? "border-b-2 border-my-dark-green text-my-normal-green"
                  : ""
              }`}>
              <GiSausage size={50} />
              Fried Food
            </button>
            {friedFood ? (
              <div className="md:hidden flex flex-col justify-around">
                <MenuList category={category} />
              </div>
            ) : null}
          </li>
        </ul>
      </div>
      <div className="md:flex hidden flex-wrap justify-around h-full">
        <MenuList category={category} />
      </div>
    </>
  );
};

export default MenuNavigator;
