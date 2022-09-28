import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperheroes = async () => {
	return axios.get('http://localhost:5000/superheroes');
};

export default function SuperheroRQ() {
	const { isLoading, data, isError, error, isFetching } = useQuery(
		'superhero',
		fetchSuperheroes,
		{
			cacheTime: 100000, //default is 5 minutes
			staleTime: 30000, //default is 0
			refetchOnMount: false, //false true always -- default is true
			refetchOnWindowFocus: false, //false true always -- default is true
			refetchInterval: false, //default is false -- paused when window loses focus
			refetchIntervalInBackground: false, //default is false -- does not pause when window loses focus
		}
	);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	if (isError) {
		return <h3>{error.message}</h3>;
	}

	return (
		<>
			<h3>SuperheroRQ</h3>
			{data?.data?.map((hero) => {
				return <p key={hero.id}>{hero.name}</p>;
			})}
		</>
	);
}
