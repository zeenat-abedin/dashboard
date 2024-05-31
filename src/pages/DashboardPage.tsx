import { FC } from 'react';
import { getUser } from '../utils/auth';

import Counter from '../components/Counter/Counter';
import Dashboard from '../components/Dashboard/Dashboard';
import UserDataForm from '../components/UserDataForm/UserDataForm';
import RichTextEditor from '../components/RichTextEditor/RichTextEditor';

interface User {
  email: string;
}

const DashboardPage: FC = () => {
  const user: User = getUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <Counter />
      <RichTextEditor />
      <UserDataForm/>
      <Dashboard/>
    </div>
  );
};

export default DashboardPage;