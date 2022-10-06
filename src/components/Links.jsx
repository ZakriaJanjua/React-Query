import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css';

export default function Links() {
	return (
		<header>
			<Link className='link' to='/'>
				Home
			</Link>
			<Link className='link' to='/fetch'>
				Fetch
			</Link>
			<Link className='link' to='/rq'>
				RQ
			</Link>
			<Link className='link' to='/rq-parallel'>
				Parallel
			</Link>
			<Link className='link' to='/rq-dynamic'>
				Dynamic
			</Link>
			<Link className='link' to='/rq-dependant'>
				Dependant
			</Link>
		</header>
	);
}
