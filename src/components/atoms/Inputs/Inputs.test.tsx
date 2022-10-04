import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Inputs from './Inputs';

test('Should render component with props', () => {
	const onclick = jest.fn();
	const onClickInput = jest.fn();
	const onClickLocatio = jest.fn();

	const component = render(<Inputs onclick={onclick} onClickInput={onClickInput} onClickLocatio={onClickLocatio} />);

	expect(component.container).toBeInTheDocument();
});
