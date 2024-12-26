import { createContext } from "react";

const array = [
    {
      name: "Mark",
      age: 23,
      img: "https://th.bing.com/th/id/OIP.Afk9XWKAozdV1F0NBdd4SgHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: "Maks",
      age: 32,
      img: "https://th.bing.com/th/id/R.0f2ea4b60a870dad377fafe916e8a93d?rik=4%2fKi2T1f3thTSA&pid=ImgRaw&r=0"
    },
    {
      name: "Bill",
      age: 40,
      img: "https://th.bing.com/th/id/R.84581c066095e193013f502301b6f839?rik=h6pCbb50tRPbMg&pid=ImgRaw&r=0"
    },
  ]


export const context = createContext()

const Provider = (props) => {


    return (
        <context.Provider value={array}>{props.children}</context.Provider>
    )
}


export default Provider
