import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

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