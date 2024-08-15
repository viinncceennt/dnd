import React from "react";
import DiceRoller from "../ui/game/dice-roller";

export default function page() {
  return (
    <div className="flex flex-col flex-wrap md:py-9 md:px-20 px-3 w-full">
      <h1 className="text-3xl">Bienvenue dans le lobby</h1>
      <DiceRoller />
    </div>
  );
}
