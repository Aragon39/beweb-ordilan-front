import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");



    const onButtonClick = () => {
        setEmailError("");
        setPasswordError("");

        if (email === "") {
            setEmailError("Please enter your email");
            return;
        }

        if (password === "") {
            setPasswordError("Please enter a password");
            return;
        }

        if (password.length < 8) { // Correction du message d'erreur
            setPasswordError("Password must be 8 characters or longer");
            return;
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }
        navigate('/Menu');


    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 bg-teal-600">

            <div className="relative w-96 p-10 bg-black bg-opacity-50 rounded-lg shadow-lg">
                <h2 className="text-white text-3xl text-center mb-8">Login</h2>
                <form>
                    {/* Champ d'email */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                placeholder="Entrez votre adresse e-mail"
                                onChange={(ev) => setEmail(ev.target.value)}
                                className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <label
                                className="absolute top-0 left-0 p-2 text-white duration-300 transform -translate-y-6 scale-75 origin-top-left pointer-events-none">
                                Adresse e-mail
                            </label>
                        </div>
                        <label className="text-red-500 text-sm">{emailError}</label>
                    </div>

                    {/* Champ de mot de passe */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                placeholder="Entrez votre mot de passe"
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <label
                                className="absolute top-0 left-0 p-2 text-white transition-all duration-300 transform -translate-y-6 scale-75 origin-top-left pointer-events-none">
                                Mot de passe
                            </label>
                        </div>
                        <label className="text-red-500 text-sm">{passwordError}</label>
                    </div>

                    {/* Bouton de soumission */}
                    <button
                        onClick={onButtonClick}
                        className="w-full p-3 bg-gradient-to-b from-gray-800 to-accent-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        type="button"
                    >
                        Se Connecter
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;