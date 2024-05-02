import React from 'react';


function SignInDialog() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-100">
                <h2 className="text-xl font-semibold mb-4">Sign In</h2>
                <form className="mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="button" className="text-sm text-blue-600">Forgot Password?</button>
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md">Sign In</button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm">Don't have an account?</p>
                    <a href="/signup" className="text-blue-500 font-semibold">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default SignInDialog;
