import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Connections() {
    const navigate = useNavigate(); // Initialiser useNavigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onButtonClick = () => {
        // Réinitialisation des messages d'erreur
        setEmailError("");
        setPasswordError("");

        // Validation de l'email
        if (email === "") {
            setEmailError("Please enter your email");
            return; // Arrête l'exécution si l'email est vide
        }

        // Validation du mot de passe
        if (password === "") {
            setPasswordError("Please enter a password");
            return; // Arrête l'exécution si le mot de passe est vide
        }

        // Vérifie la longueur du mot de passe
        if (password.length < 8) {
            setPasswordError("Password must be 8 characters or longer");
            return; // Arrête l'exécution si le mot de passe est trop court
        }

        // Vérifie le format de l'email
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email address");
            return; // Arrête l'exécution si l'email n'est pas valide
        }

        // Si toutes les validations passent, redirige vers la page menu
        navigate('/menu');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-blue-950 to-accent-500">
            <div className="relative w-96 p-10 bg-black bg-opacity-50 rounded-lg shadow-lg">
                <h2 className="text-white text-3xl text-center mb-8">Login Page</h2>
                <form>
                    {/* Champ d'email */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={(ev) => setEmail(ev.target.value)}
                                className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <label className="absolute top-0 left-0 p-2 text-white transition-all duration-300 transform -translate-y-6 scale-75 origin-top-left pointer-events-none">
                                Email Address
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
                                placeholder="Enter your password"
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <label className="absolute top-0 left-0 p-2 text-white transition-all duration-300 transform -translate-y-6 scale-75 origin-top-left pointer-events-none">
                                Password
                            </label>
                        </div>
                        <label className="text-red-500 text-sm">{passwordError}</label>
                    </div>

                    {/* Bouton de soumission */}
                    <button
                        onClick={onButtonClick}
                        className="w-full p-3 bg-gradient-to-b from-gray-800 to-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        type="button"
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Connections;