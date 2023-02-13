import { FormEvent, useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";
import WhatIs2Plus2 from "./what_2_plus_2";
import ReasonForSparing from "./reason_for_sparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>(" ");
  const [planetName, setPlanetName] = useState<string>("");
  const [numberOfBeings, setnumberOfBeings] = useState<string>("");
  const [whatIs2Plus2, setwhatIs2Plus2] = useState<string>(" ");
  const [reasonForSparing, setReasonForSparing] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const submitMessage = `Species Name =  ${speciesName} ,
              Planet Name = ${planetName},  
              Number Of Beings = ${numberOfBeings},
              What is 2 + 2? = ${whatIs2Plus2},
              Reason For Sparing = ${planetName} 
              `;
    console.log(submitMessage);
  };

  return (
    <form className="w12MForm" onSubmit={handleSubmit}>
      <W12MHeader />

      <section className="w12MForm">
        {/* REST OF FORM GOES HERE */}
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(newValue) => setSpeciesName(newValue)}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(newValue) => setPlanetName(newValue)}
        />

        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNoOfBeing={(newValue) => setnumberOfBeings(newValue)}
        />

        <WhatIs2Plus2
          value={whatIs2Plus2}
          onChangeWhatIs2Plus2={(newValue) => setwhatIs2Plus2(newValue)}
        />

        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(newValue) => setReasonForSparing(newValue)}
        />

        <button type="submit">Submit</button>
      
      </section>
    </form>
  );
};

export default W12MForm;
