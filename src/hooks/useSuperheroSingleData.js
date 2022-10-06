import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

// const fetchSuperhero = async (id) => {
// 	return await axios.get(`http://localhost:5000/superheroes/${id}`);
// };

const fetchSuperhero = async ({ queryKey }) => {
	const heroId = queryKey[1];
	return await axios.get(`http://localhost:5000/superheroes/${heroId}`);
};

export const useSuperheroSingleData = (heroId) => {
	const queryClient = useQueryClient();
	return useQuery(
		['superhero', heroId],
		// () => fetchSuperhero(heroId)
		fetchSuperhero,
		{
			initialData: () => {
				const hero = queryClient
					.getQueryData('superhero')
					?.data?.find((hero) => hero.id === parseInt(heroId));

				if (hero) {
					return { data: hero };
				} else {
					return undefined;
				}
			},
		}
	);
};
