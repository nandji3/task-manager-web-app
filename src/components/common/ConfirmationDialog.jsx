import Button from './Button';

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => (
    <div className="fixed inset-0 !bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:!bg-gray-300 p-6 rounded-lg shadow-xl max-w-sm w-full">
            <p className="text-lg mb-6">{message}</p>
            <div className="flex gap-3 justify-end">
                <Button onClick={onCancel} variant="secondary">Cancel</Button>
                <Button onClick={onConfirm}>Delete</Button>
            </div>
        </div>
    </div>
);

export default ConfirmationDialog;