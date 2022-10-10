import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { Fragment } from 'react';

const fetchColors = ({ pageParam = 1 }) => {
	return axios.get(`http://localhost:5000/colors?_limit=2&_page=${pageParam}`);
};

export default function InfiniteQueries() {
	const {
		data,
		isLoading,
		isError,
		error,
		hasNextPage,
		fetchNextPage,
		isFetching,
		isFetchingNextPage,
	} = useInfiniteQuery('colors', fetchColors, {
		getNextPageParam: (_lastPage, pages) => {
			if (pages.length < 4) {
				return pages.length + 1;
			} else {
				return undefined;
			}
		},
	});
	if (isLoading) return <h3>Loading...</h3>;
	if (isError) return <h3>Error: {error.message}</h3>;
	return (
		<>
			<h3>Infinite Query</h3>
			{data?.pages?.map((group, i) => {
				return (
					<Fragment key={i}>
						{group?.data?.map((color) => (
							<p key={color.id}>
								{color.id} - {color.label}
							</p>
						))}
					</Fragment>
				);
			})}
			{(isFetching || isFetchingNextPage) && (
				<strong>
					Fetching...
					<br />
				</strong>
			)}
			<button disabled={!hasNextPage} onClick={fetchNextPage}>
				Load More
			</button>
		</>
	);
}
