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
			cacheTime: 100000,
			staleTime: 30000,
		}
	);

	console.log(isLoading, isFetching);

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
