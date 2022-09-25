import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SuperheroFetch() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:5000/superheroes').then((res) => {
			setData(res.data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <h3>Loading...</h3>;
	}

	return (
		<>
			<h3>Fetch</h3>
			{data.map((hero) => {
				return <p key={hero.id}>{hero.name}</p>;
			})}
		</>
	);
}
