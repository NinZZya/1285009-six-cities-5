import NameSpace from '../name-space';


const USER_SPACE = NameSpace.USER;


export const getUserStatus = (state) => state[USER_SPACE].status;

export const getUser = (state) => state[USER_SPACE].user;

export const getError = (state) => state[USER_SPACE].error;
