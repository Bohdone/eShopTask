import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {connect} from "react-redux";


const AppRouter = ({auth}) =>{

    const [user] = useAuthState(auth)

    return user ?
    (
            <Switch>
            {privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={MAIN_ROUTE}/>
        </Switch>
    )
            :
    (
        <Switch>
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
        )}
        <Redirect to={LOGIN_ROUTE}/>
    </Switch>
    )
};


const mapStateToProps = state =>({
    auth : state.app.auth
})

export default connect(mapStateToProps,null)(AppRouter)