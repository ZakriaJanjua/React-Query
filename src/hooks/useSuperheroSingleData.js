import { useQuery } from 'react-query';
import axios from 'axios';

// const fetchSuperhero = async (id) => {
// 	return await axios.get(`http://localhost:5000/superheroes/${id}`);
// };

const fetchSuperhero = async ({ queryKey }) => {
	const heroId = queryKey[1];
	return await axios.get(`http://localhost:5000/superheroes/${heroId}`);
};

export const useSuperheroSingleData = (heroId) => {
	return useQuery(
		['superhero', heroId],
		// () => fetchSuperhero(heroId)
		fetchSuperhero
	);
};
