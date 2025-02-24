import React, { useState } from "react";
function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen">
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                  {isLogin ? "Login" : "Sign Up"}
                </h2>
                <p className="text-gray-600 mt-2">
                  {isLogin
                    ? "Welcome back! Please login to your account"
                    : "Create an account to get started"}
                </p>
              </div>

              <form className="space-y-6">
                {!isLogin && (
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-indigo-600 hover:text-indigo-500"
                  >
                    {isLogin ? "Sign up" : "Login"}
                  </button>
                </p>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                    <i className="fab fa-google text-red-500 mr-2"></i>
                    Google
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                    <i className="fab fa-facebook text-blue-600 mr-2"></i>
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
