import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const RootLayout = () => {
  return (
    <>
        <Navbar />

          <main className="container">
            <Outlet />
          </main>

        <Footer />

    </>
  )
}

export default RootLayout