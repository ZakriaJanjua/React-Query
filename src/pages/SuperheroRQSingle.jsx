import { useSuperheroSingleData } from '../hooks/useSuperheroSingleData';
import { useParams } from 'react-router-dom';

export default function SuperheroRQSingle() {
	const { heroId } = useParams();
	const { isLoading, data, isError, error } = useSuperheroSingleData(heroId);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	if (isError) {
		return <h3>{error.message}</h3>;
	}

	return (
		<>
			<h3>SuperheroRQSingle</h3>
			<p>
				{data?.data?.name} - {data?.data?.alterEgo}
			</p>
		</>
	);
}
