import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";
import WhatIs2Plus2 from "./what_2_plus_2";
import ReasonForSparing from "./reason_for_sparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("");
  const [planetName, setPlanetName] = useState<string>("");
  const [numberOfBeings, setnumberOfBeings] = useState<number>(0);
  const [whatIs2Plus2, setwhatIs2Plus2] = useState<string>("Not 4");
  const [reasonForSparing, setReasonForSparing] = useState<string>("");


  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}
      <SpeciesName
        name={planetName}
        onChangeSpeciesName={(newValue) => setSpeciesName(newValue)}
      />
      <PlanetName
        name={speciesName}
        onChangePlanetName={(newValue) => setPlanetName(newValue)}
      />

      <NumberOfBeings
        value={numberOfBeings}
        onChangeNoOfBeing={(newValue) => setnumberOfBeings(newValue)}
      />

      <WhatIs2Plus2
        value={whatIs2Plus2}
        onChangeWhatIs2Plus2={(newValue) => setwhatIs2Plus2(newValue)}
      />

      <ReasonForSparing
        value={reasonForSparing}
        onChangeReasonForSparing={(newValue) => setReasonForSparing(newValue)}
      />

	  <button type="submit">Submit</button>
    </section>
  );
};

export default W12MForm;
