import { FaSearch } from 'react-icons/fa';

const SearchFilterBar = ({ search, filter, sort, onSearchChange, onFilterChange, onSortChange }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700"
                />
            </div>
            <select value={filter} onChange={(e) => onFilterChange(e.target.value)} className="px-4 py-3 border rounded-lg dark:bg-gray-700">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="done">Done</option>
            </select>
            <select value={sort} onChange={(e) => onSortChange(e.target.value)} className="px-4 py-3 border rounded-lg dark:bg-gray-700">
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
};

export default SearchFilterBar;