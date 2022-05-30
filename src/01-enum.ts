export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  userName: string;
  role: ROLES;
};

const nicoUser: User = <User>{
  role: ROLES.ADMIN,
  userName: 'selvinmedina',
};
