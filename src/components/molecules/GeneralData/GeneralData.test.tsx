import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import GeneralData from './GeneralData';

test('Should render component with props', () => {
	const title = 'Pronostico proximas Dias';

	const data = {
		"cod": "200",
		"message": 0,
		"cnt": 40,
		"list": [
			{
				"dt": 1664906400,
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
			},
		],
		"city": {
			"id": 3435910,
			"name": "Buenos Aires",
			"coord": {
				"lat": -34.6132,
				"lon": -58.3772
			},
			"country": "AR",
			"population": 1000000,
			"timezone": -10800,
			"sunrise": 1664875555,
			"sunset": 1664920699
		},
		"data": {
			"id": 3435910,
			"name": "Buenos Aires",
			"coord": {
				"lat": -34.6132,
				"lon": -58.3772
			},
			"country": "AR",
			"population": 1000000,
			"timezone": -10800,
			"sunrise": 1664875555,
			"sunset": 1664920699
		}
	}


	const component = render(<GeneralData data={data} />);
	expect(component.container).toBeInTheDocument();

});
