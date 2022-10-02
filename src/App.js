import Home from './pages/Home';
import SuperheroFetch from './pages/SuperheroFetch';
import SuperheroRQ from './pages/SuperheroRQ';
import SuperheroRQSingle from './pages/SuperheroRQSingle';
import ParallelQueries from './pages/ParallelQueries';
import { Route, Routes } from 'react-router-dom';
import Links from './components/Links';
function App() {
	return (
		<>
			<Links />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/fetch' element={<SuperheroFetch />} />
				<Route path='/rq/:heroId' element={<SuperheroRQSingle />} />
				<Route path='/rq' element={<SuperheroRQ />} />
				<Route path='/parallel' element={<ParallelQueries />} />
			</Routes>
		</>
	);
}

export default App;
