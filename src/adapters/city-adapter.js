const CityToId = {
  'Paris': 1,
  'Cologne': 2,
  'Brussels': 3,
  'Amsterdam': 4,
  'Hamburg': 5,
  'Dusseldorf': 6,
};

export const adaptCityToClient = ({city}) => {

  return {
    id: CityToId[city.name],
    name: city.name,
    zoom: city.location.zoom,
    coords: [
      city.location.latitude,
      city.location.longitude,
    ],
  };
};
