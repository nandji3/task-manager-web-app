import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './components/layout/PrivateRoute';
import Loader from './components/common/Loader';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const TaskDetails = lazy(() => import('./pages/TaskDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
