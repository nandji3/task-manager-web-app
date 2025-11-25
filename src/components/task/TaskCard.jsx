import { memo, useCallback, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../../features/tasks/tasksSlice';
import { Link } from 'react-router-dom';
import { FaCheck, FaUndo, FaEdit, FaTrash } from 'react-icons/fa';
import ConfirmationDialog from '../common/ConfirmationDialog';

const TaskCard = memo(({ task }) => {
    const dispatch = useDispatch();
    const [showConfirm, setShowConfirm] = useState(false);

    const handleToggle = useCallback(() => dispatch(toggleTaskStatus(task.id)), [dispatch, task.id]);
    const handleDelete = useCallback(() => {
        dispatch(deleteTask(task.id));
        setShowConfirm(false);
    }, [dispatch, task.id]);

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
                <h3 className="font-bold text-lg text-teal-600 dark:text-teal-400">{task.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{task.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.status === 'done' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {task.status}
                    </span>
                    <div className="flex gap-4 text-gray-600">
                        <button onClick={handleToggle} className="hover:text-teal-600">
                            {task.status === 'done' ? <FaUndo /> : <FaCheck />}
                        </button>
                        <Link to={`/task/${task.id}`} className="hover:text-teal-600"><FaEdit /></Link>
                        <button onClick={() => setShowConfirm(true)} className="hover:text-red-600"><FaTrash /></button>
                    </div>
                </div>
            </motion.div>

            {showConfirm && (
                <ConfirmationDialog
                    message="Delete this task permanently?"
                    onConfirm={handleDelete}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
        </>
    );
});

export default TaskCard;