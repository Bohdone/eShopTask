import React from 'react';
import firebase from "firebase/compat";
import {connect} from "react-redux";



const Login = ({auth}) => {

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }

    return (
        <div className={'loginWrap'}>
            <div className="card">
                <div className="card-header">
                    Авторизация
                </div>
                <div className="card-body">
                    <h5 className="card-title">Войдите в свой аккаунт</h5>
                    <p className="card-text">Чтобы начать пользоваться приложением Вы должны произвести авторизацию.</p>
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={login}
                        >LOGIN</button>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state =>({
    auth : state.app.auth
})
export default connect(mapStateToProps, null)(Login);