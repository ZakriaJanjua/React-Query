import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperheroes = async (heroId) => {
	return axios.get(`http://localhost:5000/superheroes/${heroId}`);
};

export default function DynamicParallel({ heroIds }) {
	const queryResults = useQueries(
		heroIds.map((heroId) => ({
			queryKey: ['superhero', heroId],
			queryFn: () => fetchSuperheroes(heroId),
			staleTime: Infinity,
		}))
	);
	return (
		<>
			<h3>Dynamic Parallel</h3>
			{queryResults.map((result) => (
				<p key={result?.data?.data?.id}>
					{result?.data?.data?.name} - {result?.data?.data?.alterEgo}
					<br />
				</p>
			))}
		</>
	);
}
