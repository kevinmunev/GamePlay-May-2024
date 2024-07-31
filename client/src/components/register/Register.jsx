import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "", password: "", rePass: "" };

export default function Register() {
    const navigate = useNavigate();
    const register = useRegister();
    const registerHandler = async ({ email, password, rePass }) => {
        if (password !== rePass) {
            alert("Password does not match.");
            return;
        }
        try {
            await register(email, password);
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    };
    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        registerHandler
    );

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="maria@email.com"
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        id="register-password"
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePass"
                        id="rePass"
                        value={values.rePass}
                        onChange={changeHandler}
                        
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />

                    <p className="field">
                        <span>
                            If you already have profile click{" "}
                            <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
