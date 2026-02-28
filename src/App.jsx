import { useState, useEffect } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Auth from './Auth'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser)
    return unsub
  }, [])

  if (!user) return <Auth />

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default App