import { ROLES, User } from './01-enum';

const currentUser: User = {
  userName: 'selvin',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = ():boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  } else {
    return false;
  }
};

let respuesta: boolean = checkAdminRole()

respuesta

export const checkRole = (...roles: ROLES[]):boolean => {
  if(roles.includes(currentUser.role)){
    return true;
  }

  return false;
};

let respuesta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);

respuesta2
