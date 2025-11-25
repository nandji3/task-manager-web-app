const Input = ({ label, error, ...props }) => (
    <div className="mb-4">
        {label && <label className="block text-gray-700 dark:text-gray-300 mb-1">{label}</label>}
        <input
            className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${error ? 'border-red-500' : 'border-gray-300'
                } dark:bg-gray-800`}
            {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

export default Input;