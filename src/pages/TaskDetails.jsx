import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskForm from '../components/task/TaskForm';

const TaskDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = useSelector(state => state.tasks.tasks.find(t => t.id === id));

    if (!task) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Task not found</p>
            </div>
        );
    }

    return <TaskForm task={task} onClose={() => navigate(-1)} />;
};

export default TaskDetails;