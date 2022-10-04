import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import ForescastCard from './ForecastCard';

test('Should render component with props', () => {
	const icon = 'SomeFakeIcon';
	const hours = 'SomeFakeHours';
	const temp = 10;

	const component = render(<ForescastCard hours={hours} icon={icon} temp={temp} />);

	expect(component.container).toBeInTheDocument();
});
