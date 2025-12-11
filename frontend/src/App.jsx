import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Register from './pages/Auth/Register'
import NotFoundPage from './pages/NotFoundPage'
import DocumentList from './pages/Documents/DocumentList'
import DocumentDetails from './pages/Documents/DocumentDetails'
import FlashcardPage from './pages/Flashcards/FlashcardsPage'
import FlashcardsPageList from './pages/Flashcards/FlashcardsPageList' 
import QuizPage from './pages/Quizzes/Quizpage'
import QuizList from './pages/Quizzes/QuizResult'
import ProfilePage from './pages/Profile/ProfilePage'

const App = () => {
  const isAuthenticated = false 
  const loading = false

  if (loading) {
  return (
    <div className='flex items-center justify-center h-screen'>
      <p>Loading...</p>
    </div>
  )
}
return (
  <Router>
    <Routes>
      <Route path='/' element={isAuthenticated ? <Navigate to='/dashboard' replace /> : <Navigate to='/login' replace />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      <Route element={<ProtectedRoute />}>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/documents' element={<DocumentList/>} />
      <Route path='/document/:id' element={<DocumentDetails/>} />
      <Route path='/flashcards' element={<FlashcardsPageList/>} />
      <Route path='/documents/:id/flashcards' element={<FlashcardsPage/>} />
      <Route path='/quizzes' element={<QuizPage/>} />
      <Route path='/quiz/:id' element={<QuizResult/>} />
      <Route path='/profile' element={<ProfilePage/>} />

      </Route>
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </Router>
)
}

export default App
