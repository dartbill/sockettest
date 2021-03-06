import '@testing-library/jest-dom';
import { UsernameEntry } from './index';
import { screen, render } from '@testing-library/react';
import React from 'react';

// Main Imports
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import reducer from '../../reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// futureproof provider wrapper attempt 2 =================================

const initialState = {
	category: 20,
	level: 'easy',
	typeOfQ: 'multiple',
	questions: [],
};

const TestProviders = ({ initState }) => {
	initState ||= { initialState };
	let testReducer = () => reducer(initState, { type: '@@INIT' });
	const testStore = createStore(testReducer, applyMiddleware(thunk));

	return ({ children }) => (
		<BrowserRouter>
			<Provider store={testStore}>{children}</Provider>
		</BrowserRouter>
	);
};

const renderWithReduxProvider = (ui, options = {}) => {
	let TestWrapper = TestProviders(options);
	render(ui, { wrapper: TestWrapper, ...options });
};

describe('Login Component', () => {
	beforeAll(() => {
		renderWithReduxProvider(<UsernameEntry />);
	});

	it('textbox', () => {
		const e = screen.getByRole('textbox');
		expect(e).toBeInTheDocument();
	});
	it('button', () => {
		const e = screen.getByRole('button');
		expect(e).toBeInTheDocument();
	});
});
