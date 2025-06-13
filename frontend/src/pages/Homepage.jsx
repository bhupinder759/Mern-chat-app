import React from 'react'
import { useAuthStore } from '../store/useAuthStore';

const Homepage = () => {
  const {authUser} = useAuthStore();
  
  return (
    <div>
      
    </div>
  )
}

export default Homepage
