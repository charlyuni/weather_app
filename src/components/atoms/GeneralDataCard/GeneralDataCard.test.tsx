import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import GeneralDataCard from './GeneralDataCard';

test('Should render component with props', () => {
	const icons = 'SomeFakeIcon';
	const title = 'SomeFaketitle';
	const size = 10;
	const value = 'SomeFakeValue';
	const unit = 'SomeFakeUnit';

	const component = render(<GeneralDataCard icons={icons} title={title} size={size} value={value} unit={unit} />);

	expect(component.container).toBeInTheDocument();
});
