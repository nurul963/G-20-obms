import App from "../App"
import About from "./About"

const Home=()=>{
    let person={
        id:123,
        name:"ABCD",
        salary:34000,
        city:"Rajpura"
    }
    return (
        <>
        <About person={person} />
        </>
    )
}
export default Home