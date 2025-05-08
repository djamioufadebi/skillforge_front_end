import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, CheckCircle, BookOpen } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';
import Button from '../common/Button';
import Input from '../common/Input';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.LEARNER);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
  }>({});
  
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});
    
    // Simple validation
    let isValid = true;
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
      name?: string;
    } = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    
    if (!isValid) {
      setErrors(newErrors);
      return;
    }
    
    try {
      await register(email, password, name, role);
      navigate('/');
    } catch (err) {
      // Error is handled by the auth context
    }
  };
  
  return (
    <div className="max-w-md w-full space-y-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create an Account</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Join SkillForge to start learning or teaching</p>
      </div>
      
      {error && (
        <div className="bg-error-50 dark:bg-error-900/20 text-error-500 p-4 rounded-md">
          {error}
        </div>
      )}
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            placeholder="John Doe"
            icon={<User size={18} />}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            placeholder="you@example.com"
            icon={<Mail size={18} />}
            required
          />
          
          <Input
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            helperText="Must be at least 8 characters"
            placeholder="********"
            icon={<Lock size={18} />}
            required
          />
          
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            placeholder="********"
            icon={<Lock size={18} />}
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              I want to:
            </label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div
                className={`relative rounded-lg border p-4 cursor-pointer transition-colors ${
                  role === UserRole.LEARNER
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                onClick={() => setRole(UserRole.LEARNER)}
              >
                <div className="flex items-center">
                  <div className="mr-2">
                    <BookOpen size={20} className="text-primary-500" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Learn New Skills</span>
                </div>
                {role === UserRole.LEARNER && (
                  <CheckCircle
                    size={18}
                    className="absolute top-2 right-2 text-primary-500 fill-primary-500"
                  />
                )}
              </div>
              
              <div
                className={`relative rounded-lg border p-4 cursor-pointer transition-colors ${
                  role === UserRole.TRAINER
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                onClick={() => setRole(UserRole.TRAINER)}
              >
                <div className="flex items-center">
                  <div className="mr-2">
                    <BookOpen size={20} className="text-primary-500" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Teach & Earn</span>
                </div>
                {role === UserRole.TRAINER && (
                  <CheckCircle
                    size={18}
                    className="absolute top-2 right-2 text-primary-500 fill-primary-500"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={loading}
            fullWidth
          >
            Create Account
          </Button>
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-400">
          By signing up, you agree to our{' '}
          <Link to="/terms" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">
            Privacy Policy
          </Link>
          .
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;