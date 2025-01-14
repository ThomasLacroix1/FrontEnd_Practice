import './App.css'
import Navbar from '@/components/Basics/Navbar'
import EnAvant from '@/components/EnAvant'
import EnDirect from '@/components/EnDirect'
import Footer from './components/Footer'

export default function App() {

  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-10'>
        <EnAvant />
        <EnDirect />
      </div>
      <Footer />
    </>
  )
}