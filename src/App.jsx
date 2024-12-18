import './App.css'
import Navbar from '@/components/Basics/Navbar'
import EnAvant from '@/components/EnAvant'
import EnDirect from '@/components/EnDirect'

export default function App() {

  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-8'>
        <EnAvant />
        <EnDirect />
      </div>

    </>
  )
}