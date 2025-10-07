import BookList from "./components/BookList";
import Counter from "./components/counter/Counter";
import Product from "./components/Product/Product";
import Signup from "./components/user/Signup";
import Navbar from "./layout/Navbar";

function App(){        
  return (
    <>
      <Navbar/>
      {/* <Signup/> */}
      {/* <BookList/> */}
      {/* <Counter/> */}
      <Product/>
    </>

  )
}
export default App;