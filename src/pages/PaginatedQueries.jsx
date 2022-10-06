import { useQuery } from 'react-query';
import { useState } from 'react';
import axios from 'axios';

const fetchColors = (pageNumber) => {
	return axios.get(`http://localhost:5000/colors?_limit=2&_page=${pageNumber}`);
};

export default function PaginatedQueries() {
	const [pageNumber, setPageNumber] = useState(1);
	const { data, isLoading, isError, error } = useQuery(
		['colors', pageNumber],
		() => fetchColors(pageNumber),
		{
			keepPreviousData: true,
		}
	);

	if (isLoading) return <h3>Loading...</h3>;
	if (isError) return <h3>Error: {error.message}</h3>;

	return (
		<>
			<h3>Paginated Queries</h3>
			{data?.data?.map((color) => (
				<div key={color.id}>
					<p>
						{color.id}. {color.label}
					</p>
				</div>
			))}
			<button
				onClick={() => setPageNumber((prev) => prev - 1)}
				disabled={pageNumber === 1}
			>
				Prev Page
			</button>
			<button
				onClick={() => setPageNumber((prev) => prev + 1)}
				disabled={pageNumber === 4}
			>
				Next Page
			</button>
		</>
	);
}
