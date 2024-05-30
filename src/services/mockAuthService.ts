export const authenticate = async (email: string, password: string): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return email === 'test@example.com' && password === 'password';
};