import NameSpace from '~/store/reducer/name-space';


const NAME_SPACE = NameSpace.CITIES;


export const getActiveCityId = (state) => state[NAME_SPACE].activeId;
export const getCities = (state) => state[NAME_SPACE].cities;
