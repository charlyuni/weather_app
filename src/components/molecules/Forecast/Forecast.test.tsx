import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import ForecastCard from '../../atoms/ForecastCard/ForecastCard';

const MOCK_DATA = [{
	"dt": 166422,
	"main": {
		"temp": 19.41,
		"feels_like": 18.74,
		"temp_min": 18.09,
		"temp_max": 19.41,
		"pressure": 1017,
		"sea_level": 1017,
		"grnd_level": 1012,
		"humidity": 51,
		"temp_kf": 1.32
	},
	"weather": [
		{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}
	],
	"clouds": {
		"all": 4
	},
	"wind": {
		"speed": 4.93,
		"deg": 103,
		"gust": 6.6
	},
	"visibility": 10000,
	"pop": 0,
	"sys": {
		"pod": "d"
	},
	"dt_txt": "2022-10-04 18:00:00",
	"rain": { "3": 10000 },
}, {
	"dt": 1664,
	"main": {
		"temp": 19.41,
		"feels_like": 18.74,
		"temp_min": 18.09,
		"temp_max": 19.41,
		"pressure": 1017,
		"sea_level": 1017,
		"grnd_level": 1012,
		"humidity": 51,
		"temp_kf": 1.32
	},
	"weather": [
		{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		}
	],
	"clouds": {
		"all": 0
	},
	"wind": {
		"speed": 4.93,
		"deg": 103,
		"gust": 6.6
	},
	"visibility": 10000,
	"pop": 0,
	"sys": {
		"pod": "d"
	},
	"dt_txt": "2022-10-04 18:00:00",
	"rain": { "3": 10000 },
}
];

describe('Forecast', () => {
	it('should render correctly with data', () => {
		const { container } = render(<ForecastCard hours={String(MOCK_DATA[1].dt)} icon={MOCK_DATA[1].weather[0].icon} temp={MOCK_DATA[1].main.temp} />);
		expect(container).toBeInTheDocument();
	}
	)
});