import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../../features/tasks/tasksSlice';
import Input from '../common/Input';
import Button from '../common/Button';
import { FaSave, FaTimes } from 'react-icons/fa';
import Swal from "sweetalert2";

const TaskForm = ({ task, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: task?.title || '',
        description: task?.description || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.description.trim()) return;

        if (task) {
            dispatch(updateTask({ ...task, ...formData }));

            Swal.fire({
                icon: "success",
                title: "Task Updated!",
                text: "Your task has been successfully updated.",
                timer: 2000,
                showConfirmButton: false,
            });

        } else {
            dispatch(addTask(formData));

            Swal.fire({
                icon: "success",
                title: "Task Added!",
                text: "Your new task has been created.",
                timer: 2000,
                showConfirmButton: false,
            });
        }

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-teal-600">{task ? 'Edit' : 'Add'} Task</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                    <Input
                        label="Description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                    <div className="flex gap-3 justify-end mt-6">
                        <Button type="button" onClick={onClose} variant="secondary" icon={FaTimes}>
                            Cancel
                        </Button>
                        <Button type="submit" icon={FaSave}>
                            {task ? 'Update' : 'Create'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;