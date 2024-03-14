import Nav from "../../components/user/Nav";
import {Outlet} from "react-router-dom";

function UserLayout(){
    return(
        <>
            <div className="App">
                <Nav />
                <Outlet />
            </div>
        </>
    )
}
export default UserLayout;