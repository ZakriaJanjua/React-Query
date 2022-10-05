import Home from './pages/Home';
import SuperheroFetch from './pages/SuperheroFetch';
import SuperheroRQ from './pages/SuperheroRQ';
import SuperheroRQSingle from './pages/SuperheroRQSingle';
import ParallelQueries from './pages/ParallelQueries';
import DynamicParallel from './pages/DynamicParallel';
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
				<Route path='/rq-parallel' element={<ParallelQueries />} />
				<Route
					path='/rq-dynamic'
					element={<DynamicParallel heroIds={[1, 3]} />}
				/>
			</Routes>
		</>
	);
}

export default App;
