import Home from './pages/Home';
import SuperheroFetch from './pages/SuperheroFetch';
import SuperheroRQ from './pages/SuperheroRQ';
import { Route, Routes } from 'react-router-dom';
import Links from './components/Links';
function App() {
	return (
		<>
			<Links />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/fetch' element={<SuperheroFetch />} />
				<Route path='/rq' element={<SuperheroRQ />} />
			</Routes>
		</>
	);
}

export default App;
