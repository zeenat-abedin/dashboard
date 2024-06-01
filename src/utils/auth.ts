import { useState } from 'react';


let mockUser: any = null;
let isLoggedIn: boolean = false;

export const authenticate = (user: any): void => {
  isLoggedIn = true;
  mockUser = user;
};

export const signup = (userData: any): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      mockUser = userData;
      isLoggedIn = true;
      resolve(true); 
    }, 1000); 
  });
};

export const signout = (): void => {
  isLoggedIn = false;
  mockUser = null;
};

export const isAuthenticated = (): boolean => isLoggedIn;

export const getUser = (): any => mockUser;

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user:any) => {
//       if (user) {
//         navigate('/dashboard');
//       } else {
//         navigate('/');
//       }
//     });

//     return unsubscribe;
//   }, [navigate]);
// };