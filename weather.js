let weather = {
    'message': 'accurate',
    'cod': '200',
    'count': 1,
    'list': [
        {
            'id': 23643743,
            'name': 'london',
            'coord': {
                'lat': 51.5005,
                'lon': -0.1258
            },
            'main': {
                'temp': 7,
                'pressure': 1012,
                'humdity': 81,
                'temp_min': 5,
                'temp_max': 8
            },
            "dt": 1485791400, // wind speed
            'wind': {
                'speed': 4.6,
                'deg': 90
            },
            'sys': {
                'country': 'GB'
            },
            'rain': null,
            'snow': null,
            "clouds": {
                'all': 90
            },
            'weather': [
                {
                    'id': 701,
                    'main': 'mist',
                    'icon': '50d'
                },
                {
                    'id': 300,
                    'main': 'drizzle',
                    'description': "light intensity drizzle", // Added missing comma here
                    'icon': '89d'
                }
            ]
        }
    ]
}
