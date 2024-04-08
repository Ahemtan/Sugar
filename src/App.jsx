import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import RootLayout from "./components/Layout/RootLayout";
import ErrorPage from "./pages/error";
import ProductDetails from "./pages/product-details";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" index  element={<Home />}/>
          <Route path="/product/:id" index  element={<ProductDetails />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App