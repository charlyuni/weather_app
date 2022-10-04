import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import TopButtons from './TopButtons';

test('Should render component with props', () => {
	const cities = Array(10).fill('SomeFakeCity');
	const onClickTopBotton = jest.fn();

	const component = render(<TopButtons cities={cities} onClickTopBotton={onClickTopBotton} />);

	expect(component.container).toBeInTheDocument();
});
