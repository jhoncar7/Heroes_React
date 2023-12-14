import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";


export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { name, onInputChange } = useForm({
        name: ''
    });

    const onLogin = (event) => {

        event.preventDefault();

        if (name.trim().length <= 1) return;

        const lastPath = localStorage.getItem('lastPath') || '/';

        login(name);

        navigate(lastPath, {
            replace: true
        });
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <form onSubmit={onLogin}>
                        <input
                            type="text"
                            placeholder='Ingrese un nombre de usuario'
                            className='form-control'
                            name='name'
                            autoComplete='off'
                            value={name}
                            onChange={onInputChange}
                        />
                        <button className='btn btn-outline-primary mt-3'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
