import { useState } from "react";

import Logo from './assets/image/connection.png'

function Login() {
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


    };

    return (
        <div className="flex items-center justify-center h-screen">
            {/* Conteneur de l'image */}
            <div className="h-screen w-full flex items-center justify-center">
                {/* Image sans filtre de luminosité */}
                <img
                    src={Logo}
                    alt="connection"
                    className="w-2/3 h-auto mx-auto rounded-lg brightness-100" // Agrandi à 2/3 de la largeur du conteneur
                />

                {/* Formulaire de connexion positionné sur l'image */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-15 rounded-lg">
                    <h2 className="text-4xl text-white text-center mb-4">LOGIN</h2> {/* Réduit la marge inférieure */}
                    <form
                        className="w-full max-w-xs mt-2"> {/* Ajout d'une marge supérieure pour remonter le formulaire */}
                        <div className="mb-6">
                            <input
                                type="email"
                                value={email}
                                placeholder="Enter email address here"
                                onChange={ev => setEmail(ev.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label className="text-red-500 text-sm">{emailError}</label>
                        </div>
                        <div className="mb-4"> {/* Réduit la marge inférieure */}
                            <input
                                type="password"
                                value={password}
                                placeholder="Enter password here"
                                onChange={ev => setPassword(ev.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label className="text-red-500 text-sm">{passwordError}</label>
                        </div>
                    </form>
                    {/* Bouton séparé du formulaire */}
                    <input
                        onClick={onButtonClick}
                        className=" p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 " // Ajout d'une marge supérieure pour séparer le bouton
                        type="button"
                        value="Submit"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;