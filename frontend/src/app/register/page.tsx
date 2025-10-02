"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [roles, setRoles] = useState("user")
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const onHandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Promise.all([axios.post("http://localhost:3001/user/register", {
        email, password, role: roles.toLowerCase(),
      }),
      new Promise(resolve => setTimeout(resolve, 1500))
      ])

      router.push("/login")
    }
    catch (error) {
      alert("User Already Exist Please Login")
      router.push("/login")
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex h-screen m-0 bg-gray-50">
        {/* Left Image */}
        <div className="w-1/2 h-full hidden md:block">
          <img
            src="/Register.jpg"
            className="w-full h-full object-cover rounded-l-2xl shadow-lg"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Create Account
            </h1>

            <form className="flex flex-col gap-4" onSubmit={onHandleSubmit}>
              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                  required
                />
              </div>

              {/* User Type */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">User Type</label>
                <select
                  id="options"
                  onChange={(e) => setRoles(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                >
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </div>


              <button
                className="bg-blue-500 text-white rounded-xl self-center w-full h-10 flex items-center justify-center gap-2"
                disabled={loading} 
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-4 border-white rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

              {/* Login Link */}
              <div className="flex flex-col items-center mt-6">
                <p className="text-sm text-gray-600">Already registered?</p>
                <a
                  href="/login"
                  className="text-blue-500 hover:underline text-sm font-medium"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>


    </>
  )

}