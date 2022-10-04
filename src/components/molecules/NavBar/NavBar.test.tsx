import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import NavBar from './NavBar';

test('Should render component with props', () => {
	const onclick = jest.fn();
	const onClickInput = jest.fn();
	const onClickLocatio = jest.fn();
	const onClickTopBotton = jest.fn();
	const cities = Array(10).fill('SomeFakeCity');

	const component = render(<NavBar onclick={onclick} onClickInput={onClickInput} onClickLocatio={onClickLocatio} cities={cities} onClickTopBotton={onClickTopBotton} />);

	expect(component.container).toBeInTheDocument();
});
