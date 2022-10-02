import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperheroes = async () => {
	return axios.get('http://localhost:5000/superheroes');
};

const fetchFriends = async () => {
	return axios.get('http://localhost:5000/friends');
};

export default function ParallelQueries() {
	const { data: superheroes } = useQuery('superheroes', fetchSuperheroes);
	const { data: friends } = useQuery('friends', fetchFriends);
	return (
		<>
			<h3>Parallel Queries</h3>
			<p>Superheroes: {superheroes?.data?.length}</p>
			<p>Friends: {friends?.data?.length}</p>
		</>
	);
}
