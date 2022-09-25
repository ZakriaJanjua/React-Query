import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperheroes = async () => {
	return axios.get('http://localhost:5000/superheroes');
};

export default function SuperheroRQ() {
	const { isLoading, data } = useQuery('superhero', fetchSuperheroes);

	if (isLoading) {
		return <h3>Loading...</h3>;
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
