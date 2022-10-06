import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
	return axios.get('http://localhost:5000/users/' + email);
};

const fetchCoursesByChannelId = (channelId) => {
	return axios.get('http://localhost:5000/channel/' + channelId);
};
export default function Dependant({ email }) {
	const { data: user } = useQuery(['user', email], () =>
		fetchUserByEmail(email)
	);
	const channelId = user?.data?.channelId;

	const { data: channel } = useQuery(
		['courses', channelId],
		() => fetchCoursesByChannelId(channelId),
		{
			enabled: !!channelId,
		}
	);

	return (
		<>
			<h3>Dependant</h3>
			{channel?.data?.courses.map((course) => (
				<p key={course}>{course}</p>
			))}
		</>
	);
}
