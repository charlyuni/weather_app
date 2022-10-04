import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import TemperatureCard from './TemperatureCard';

test('Should render component with props', () => {
	const icons = 'SomeFakeIcon';
    const title = 'SomeFaketitle';
    const size = 10;
	const value = 'SomeFakeValue';
	const unit = 'SomeFakeUnit';

	const component = render(<TemperatureCard icons={icons} title={title} size={size} value={value} unit={unit}  />);

	expect(component.container).toBeInTheDocument();
});
