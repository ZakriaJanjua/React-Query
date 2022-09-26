import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={new QueryClient()}>
				<ReactQueryDevtools initialIsOpen={false} />
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
