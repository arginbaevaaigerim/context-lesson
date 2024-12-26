import { useContext } from "react"
import { context } from "../store"

const Data = () => {

    const store = useContext(context)
    console.log(store);
    

    return (

        <div>
            {store.map((el) => {
                return (
                    <div >
                        <h1>{el.name}</h1>
                        <h1>{el.age}</h1>
                        <img src={el.img} style={{width: "200px"}} alt="" />
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}


export default Data
