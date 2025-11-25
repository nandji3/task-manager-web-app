import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-6xl font-bold text-teal-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Page not found</p>
        <Link to="/dashboard">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium">
                Back to Dashboard
            </button>
        </Link>
    </div>
);

export default NotFound;