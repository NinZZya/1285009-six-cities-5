import NameSpace from '../name-space';


const NAME_SPACE = NameSpace.USER;


export const getUserStatus = (state) => state[NAME_SPACE].status;

export const getUser = (state) => state[NAME_SPACE].user;

export const getError = (state) => state[NAME_SPACE].error;
