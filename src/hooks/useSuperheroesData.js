import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchSuperheroes = async () => {
	return await axios.get('http://localhost:5000/superheroes');
};

const addSuperhero = async (hero) => {
	return axios.post('http://localhost:5000/superheroes1', hero);
};

export const useSuperheroesData = (onSuccess, onError) => {
	return useQuery('superhero', fetchSuperheroes, {
		cacheTime: 100000, //default is 5 minutes
		staleTime: 30000, //default is 0
		refetchOnMount: false, //false true always -- default is true
		refetchOnWindowFocus: false, //false true always -- default is true
		refetchInterval: false, //default is false -- paused when window loses focus
		refetchIntervalInBackground: false, //default is false -- does not pause when window loses focus

		// enabled: false, //default is true !important -- if false, query invalidation will not trigger a refetch
		onSuccess,
		onError,
		select: (data) => {
			return data?.data?.map((hero) => ({ name: hero.name, id: hero.id }));
		},
	});
};

/*
export const useAddSuperheroData = () => {
	const queryClient = useQueryClient();
	return useMutation(addSuperhero, {
		onSuccess: () => {
			queryClient.invalidateQueries('superhero');
		},
	});
};
*/

/*
export const useAddSuperheroData = () => {
	const queryClient = useQueryClient();
	return useMutation(addSuperhero, {
		onSuccess: (data) => {
			queryClient.setQueryData('superhero', (oldQueryData) => {
				return {
					...oldQueryData,
					data: [...oldQueryData.data, data.data],
				};
			});
		},
	});
};
*/

export const useAddSuperheroData = () => {
	const queryClient = useQueryClient();
	return useMutation(addSuperhero, {
		onMutate: async (newHero) => {
			await queryClient.cancelQueries('superhero');
			const prevHeroData = queryClient.getQueriesData('superhero');
			queryClient.setQueryData('superhero', (oldQueryData) => {
				return {
					...oldQueryData,
					data: [
						...oldQueryData.data,
						{ id: oldQueryData?.data?.length + 1, ...newHero },
					],
				};
			});
			return {
				prevHeroData,
			};
		},
		onError: (_error, _hero, context) => {
			queryClient.setQueryData('superhero', context.prevHeroData);
		},
		onSettled: () => {
			queryClient.invalidateQueries('superhero');
		},
	});
};
