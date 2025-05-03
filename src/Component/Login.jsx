import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if(isLogin){
      const response= await axios.post('https://hr-dashboard-backend-ltxp.onrender.com/api/users/login',
        {email,password},
        {
        headers:{
          'Content-Type':'application/json',
             },
        }
      
      )
      console.log("Login Successful",response.data)
    localStorage.setItem('user',JSON.stringify(response.data.user))
    localStorage.setItem('token',JSON.stringify(response.data.token))
    navigate('/')
  }
     else{
 const response=await axios.post('https://hr-dashboard-backend-ltxp.onrender.com/api/users/register',{
  name,email,password},
  {
  headers:{
    "Content-Type":"application/json"
  }
 },
 
)

 console.log("Register Successful",response.data)
 localStorage.setItem("user",JSON.stringify(response.data.user))
 localStorage.setItem("token",JSON.stringify(response.data.token))
 navigate('/')
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Something went wrong!');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin) };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        {isLogin ? 'Login Page' : 'Register Page'}
      </h1>
      <div className="rounded-md shadow-lg border gap-4 pl-9 pr-9 pt-9 pb-9 bg-gray-100 border-[#50d71e]">
        <form className="flex flex-col gap-6 w-[300px]" onSubmit={handleLogin}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#50d71e] rounded-2xl px-4 py-3"
            />
          )}
         
          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-[#50d71e] rounded-2xl px-4 py-3"
        />

        
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-[#50d71e] rounded-2xl"
          />
          <button
            type="submit"
            className="rounded-2xl bg-[#50d71e] w-28 py-2 text-xl ml-24">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="cursor-pointer text-cyan-500 underline" onClick={toggleForm}>
            {isLogin ? "Don't have an account? Register" : 'Already registered? Login'}
          </p>
          {isLogin && (
            <p className="mt-2 text-cyan-500 underline cursor-pointer">
              Forgot Password
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
