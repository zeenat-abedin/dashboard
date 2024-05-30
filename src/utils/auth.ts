let isAuthenticated: boolean = false;
let mockUser: any = null;

export const authenticate = (user: any): void => {
  isAuthenticated = true;
  mockUser = user;
};

export const signout = (): void => {
  isAuthenticated = false;
  mockUser = null;
};

export const getIsAuthenticated = (): boolean => isAuthenticated;

export const getUser = (): any => mockUser;