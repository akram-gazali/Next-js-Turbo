import React from 'react';
import Link from 'next/link';
import AuthLayout from '../layout';
import SignupForm from './signupForm';
import SubmitButton from '@/components/ui/submitButton';


const SignupPage = () => {
    return(
        <AuthLayout>
        <div className="bg-white p-8 rounded-lg w-96 flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl font-bold mb-4">Sign up Page</h1>
            <SignupForm />
            <div className="flex justify-between text-sm">
                <p>Already an account?</p>
                <Link className="underLine" href={"auth/signin"}>
                    Sign in
                </Link>

            </div>
            <SubmitButton>Sign Up</SubmitButton>

        </div>
        </AuthLayout>
    );
};
export default SignupPage;