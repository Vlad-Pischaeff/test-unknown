const FormLogin = ({ setHaveAccount }) => {
    return (
        <main>
            <form className="login">
                <div className="login_header">
                    Login
                </div>
                <div className="login_body">
                    <input  className="login_input" 
                            type="text" 
                            name="login"
                            placeholder="login" 
                            required />
                    <input  className="login_input" 
                            type="password" 
                            name="password"
                            placeholder="password" 
                            required />
                </div>
                <div className="login_photo">
                    <img src="http://localhost:5000/upload/icons8-person-64.png" />
                </div>
                <input  className="login_button" 
                        type="submit" 
                        value="Login" />
                <input  className="login_button-sign" 
                        type="button" 
                        value="Don't have an account yet?" 
                        onClick={() => setHaveAccount(false)} />
            </form>
        </main>
    );
};

export default FormLogin;