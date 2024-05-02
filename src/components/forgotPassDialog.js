import React, { useState } from 'react';

function ForgotPasswordDialog() {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-xl font-semibold mb-4">Forgot Password?</h2>
                <form >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md">Reset Password</button>
                        <button type="button" className="text-sm text-gray-600" onClick={() => console.log('Cancel clicked')}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordDialog;
