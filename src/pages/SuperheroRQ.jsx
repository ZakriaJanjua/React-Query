import { useSuperheroesData } from '../hooks/useSuperheroesData';
import { Link } from 'react-router-dom';
export default function SuperheroRQ() {
	const onSuccess = (data) => {
		console.log('Perform side effect after data fetching', data);
	};

	const onError = (error) => {
		console.log('Perform side effect after error', error);
	};

	const { isLoading, data, isError, error, isFetching, refetch } =
		useSuperheroesData(onSuccess, onError);

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
			{data?.map((hero) => (
				<p key={hero.id}>
					<Link
						to={`/rq/${hero.id}`}
						style={{ textDecoration: 'none', color: 'blue' }}
					>
						{hero.name}
					</Link>
				</p>
			))}
		</>
	);
}
