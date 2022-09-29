import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchSuperheroes = async () => {
	return axios.get('http://localhost:5000/superheroes');
};

export default function SuperheroRQ() {
	const [polling, setPolling] = useState(3000);

	const onSuccess = (data) => {
		console.log('Perform side effect after data fetching');
		if (data.length > 4) {
			setPolling(false);
		}
	};

	const onError = (error) => {
		console.log('Perform side effect after error', error);
	};

	const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
		'superhero',
		fetchSuperheroes,
		{
			cacheTime: 100000, //default is 5 minutes
			staleTime: 30000, //default is 0
			refetchOnMount: false, //false true always -- default is true
			refetchOnWindowFocus: false, //false true always -- default is true
			refetchInterval: polling, //default is false -- paused when window loses focus
			refetchIntervalInBackground: false, //default is false -- does not pause when window loses focus

			enabled: true, //default is true
			onSuccess,
			onError,
			select: (data) => {
				return data?.data?.map((hero) => hero.name);
			},
		}
	);

	if (isLoading || isFetching) {
		return <h3>Loading...</h3>;
	}

	if (isError) {
		return <h3>{error.message}</h3>;
	}

	return (
		<>
			<h3>SuperheroRQ</h3>
			<button onClick={refetch}>Fetch through React Query</button>
			{/* {data?.data?.map((hero) => {
				return <p key={hero.id}>{hero.name}</p>;
			})} */}
			{data?.map((heroName) => (
				<p key={heroName}>{heroName}</p>
			))}
		</>
	);
}
