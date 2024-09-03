"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

function Cart() {
  const router = useRouter();

  const dashboard = () => router.push('/dashboard')
    
  return (
    <div>
        <button>
            Cart
        </button>
        <br />
        <button onClick={dashboard}>
            Dashboard
        </button>
    </div>
  )
}

export default Cart