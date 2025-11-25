import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import TaskList from '../components/task/TaskList';
import TaskForm from '../components/task/TaskForm';
import SearchFilterBar from '../components/ui/SearchFilterBar';
import Button from '../components/common/Button';
import DarkModeToggle from '../components/ui/DarkModeToggle';
import { FaPlus } from 'react-icons/fa';

const ITEMS_PER_LOAD = 10;

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tasks = useSelector(state => state.tasks.tasks);
    const [searchParams, setSearchParams] = useSearchParams();
    const [showForm, setShowForm] = useState(false);
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

    const search = searchParams.get('q') || '';
    const filter = searchParams.get('status') || 'all';
    const sort = searchParams.get('sort') || 'latest';

    const filteredTasks = useMemo(() => {
        let result = [...tasks];
        if (search) result = result.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
        if (filter !== 'all') result = result.filter(t => t.status === filter);
        result.sort((a, b) => sort === 'latest' ? b.createdAt - a.createdAt : a.createdAt - b.createdAt);
        return result;
    }, [tasks, search, filter, sort]);

    const visibleTasks = filteredTasks.slice(0, visibleCount);
    const hasMore = visibleCount < filteredTasks.length;

    const loadMore = () => {
        setTimeout(() => {
            setVisibleCount(prev => prev + ITEMS_PER_LOAD);
        }, 800);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login", { replace: true });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <header className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-teal-600 cursor-pointer" onClick={() => navigate("/dashboard")}>MTask</h1>
                    <div className="flex items-center gap-4">
                        <DarkModeToggle />
                        <Button onClick={handleLogout}>Logout</Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                <SearchFilterBar
                    search={search}
                    filter={filter}
                    sort={sort}
                    onSearchChange={(v) => setSearchParams(prev => ({ ...Object.fromEntries(prev), q: v }))}
                    onFilterChange={(v) => setSearchParams(prev => ({ ...Object.fromEntries(prev), status: v }))}
                    onSortChange={(v) => setSearchParams(prev => ({ ...Object.fromEntries(prev), sort: v }))}
                />

                <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-600 dark:text-gray-400">{filteredTasks.length} tasks</p>
                    <Button onClick={() => setShowForm(true)} icon={FaPlus}>Add Task</Button>
                </div>

                <TaskList
                    tasks={visibleTasks}
                    hasMore={hasMore}
                    loadMore={loadMore}
                />

                {showForm && <TaskForm onClose={() => setShowForm(false)} />}
            </main>
        </div>
    );
};

export default Dashboard;
