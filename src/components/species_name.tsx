import React from "react";

interface SpeciesNameProps{
    name: string,
    onChangespeciesName: (newValue:string) => void;
}

const SpeciesName:React.FC<SpeciesNameProps> = ({
    name, onChangespeciesName}) => {
    return (
<div>
<label>
                Species Name:
            </label>
            <input type="text" value={name} name="speciesName" 
            onChange={(e) => onChangespeciesName(e.target.value)} />
        </div>

    )
}
export default SpeciesName;