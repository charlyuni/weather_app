import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Location from './Location';

test('Should render component with props', () => {
	const city = 'Buenos Aires';
	const country = 'Argentina';

	const component = render(<Location city={city} country={country}/>);

	expect(component.container).toBeInTheDocument();
});
