import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'

const RootLayout = () => {
  return (
    <>
        <Navbar />

        <section className="container">
            <Outlet />
        </section>

        footer
    </>
  )
}

export default RootLayout