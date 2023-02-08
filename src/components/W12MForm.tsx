import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './species_name';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('');


	return (
		<section className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */}
			<SpeciesName name={speciesName} onChangespeciesName={(newValue) => setSpeciesName(newValue)} />
		</section>
	);
};

export default W12MForm;
