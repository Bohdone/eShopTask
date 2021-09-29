import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader/Loader";
import {useAuthState} from "react-firebase-hooks/auth";
import {connect} from "react-redux";


function App({auth}) {

    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <AppRouter/>
            </div>
        </BrowserRouter>

    );
}


const mapStateToProps = state =>({
    auth : state.app.auth
})
export default connect(mapStateToProps, null)(App);
