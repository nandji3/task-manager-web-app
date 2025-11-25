import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'test@gmail.com' && password === 'test@123') {
            dispatch(login({ email }));
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600 px-4">
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">

                {/* Title */}
                <h2 className="text-4xl font-extrabold text-center mb-6 text-teal-600">
                    TaskManager
                </h2>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="test@gmail.com"
                    />

                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="test@123"
                    />

                    {error && (
                        <p className="text-red-500 text-center mb-3 mt-2">
                            {error}
                        </p>
                    )}

                    <Button type="submit" className="w-full mt-2">
                        Login
                    </Button>
                </form>

                {/* Demo Credentials Card */}
                <div className="mt-8 border border-teal-300 bg-teal-50 rounded-lg p-4 shadow-inner">
                    <h3 className="text-teal-700 font-semibold text-lg mb-2">
                        Demo Credentials
                    </h3>
                    <div className="text-gray-700 text-sm space-y-1">
                        <p>
                            <span className="font-medium text-teal-600">Email:</span> test@gmail.com
                        </p>
                        <p>
                            <span className="font-medium text-teal-600">Password:</span> test@123
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
