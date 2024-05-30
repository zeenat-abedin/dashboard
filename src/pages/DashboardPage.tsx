import { FC } from 'react';
import { getUser } from '../utils/auth';

// import Counter from "./components/Counter/Counter";
// import Dashboard from "./components/Dashboard/Dashboard";
// import RichTextEditor from "./components/RichTextEditor/RichTextEditor";
// import UserDataForm from "./components/UserDataForm/UserDataForm";

interface User {
  email: string;
}

const DashboardPage: FC = () => {
  const user: User = getUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
};

export default DashboardPage;