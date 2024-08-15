"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DiceRoller() {
  const [result, setResult] = useState(null);
  const [numberOfFaces, setNumberOfFaces] = useState(6);
  const [isRolling, setIsRolling] = useState(false);
  const [savedRolls, setSavedRolls] = useState([]);

  const diceOptions = [4, 6, 8, 10, 12, 20, 100];

  const rollDice = () => {
    setIsRolling(true);
    setResult(null);

    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const time = `${hours}:${minutes}`;

    // Stop the animation and set the final result after 2 seconds
    setTimeout(() => {
      const finalResult = Math.floor(Math.random() * numberOfFaces) + 1;
      setResult(finalResult);
      setIsRolling(false);

      // Save the roll result along with the number of faces
      setSavedRolls((prevRolls) => [
        ...prevRolls,
        { faces: numberOfFaces, result: finalResult, time: time },
      ]);
    }, 1200);
  };

  const handleNumberOfFacesChange = (event) => {
    setNumberOfFaces(Number(event.target.value));
  };

  return (
    <div className="flex md:flex-row flex-col flex-wrap items-center gap-2 justify-center md:m-11">
      <div className="md:w-1/3 flex flex-col md:px-6 items-center justify-center w-full">
        <h2>Lancez les dés</h2>

        <PlaceHolderDice isRolling={isRolling} result={result} />
        <ChooseNumberFace
          numberOfFaces={numberOfFaces}
          handleNumberOfFacesChange={handleNumberOfFacesChange}
          diceOptions={diceOptions}
          isRolling={isRolling}
        />
        <button
          onClick={rollDice}
          className="btn btn-primary text-base-content rounded-md mt-4"
          disabled={isRolling}
        >
          Lancer le dé
        </button>
      </div>
      <div className="mt-4 md:w-1/3 w-full">
        <RollsHistory savedRolls={savedRolls} />
        <button
          className="btn btn-outline my-4"
          onClick={() => setSavedRolls([])} // Clear the saved rolls
        >
          Effacer l&apos;historique
        </button>
      </div>
    </div>
  );
}

function RollsHistory({ savedRolls }) {
  return (
    <>
      <h3 className="text-xl">Historique des Lancers:</h3>
      <ul>
        {savedRolls.map((roll, index) => (
          <li key={index} className="my-1">
            dé à <span className="text-secondary">{roll.faces}</span> faces :{" "}
            <span className="text-secondary">{roll.result}</span> - à{" "}
            <span className="text-accent">{roll.time}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function PlaceHolderDice({ isRolling, result }) {
  return (
    <div className="border border-red-100 overflow-hidden w-24 h-24 flex justify-center items-center text-5xl p-4 mt-4 rounded-md">
      {isRolling ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        >
          🎲
        </motion.div>
      ) : (
        result
      )}
    </div>
  );
}

function ChooseNumberFace({
  numberOfFaces,
  handleNumberOfFacesChange,
  diceOptions,
  isRolling,
}) {
  return (
    <div className="form-control w-full max-w-xs mt-4">
      <label className="label">Choisir le nombre de faces</label>
      <select
        className="select select-bordered"
        onChange={handleNumberOfFacesChange}
        value={numberOfFaces}
        disabled={isRolling}
      >
        {diceOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
