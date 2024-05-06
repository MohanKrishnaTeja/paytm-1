import { AppBar } from "../components/AppBar"
import { Balence } from "../components/Balence"
import { Users } from "../components/Users"

export const DashBoard = () =>{
    return <div>
        <AppBar />
        <div className="m-8">
            <Balence value={"20000"} />
            <Users />
        </div>
    </div>
}
