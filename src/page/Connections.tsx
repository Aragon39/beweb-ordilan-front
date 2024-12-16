import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Connections() {
  const navigate = useNavigate(); // Initialiser useNavigate
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // Basculer entre connexion et création
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [name, setName] = useState(''); // Pour la création de compte

  const onLoginClick = () => {
    setEmailError('');
    setPasswordError('');

    if (email === '') {
      setEmailError('Veuillez entrer votre email.');
      return;
    }

    if (password === '') {
      setPasswordError('Veuillez entrer votre mot de passe.');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Veuillez entrer une adresse email valide.');
      return;
    }

    // Simule une connexion réussie et redirige vers le menu
    navigate('/menu');
  };

  const onCreateAccountClick = async () => {
    setEmailError('');
    setPasswordError('');

    if (name === '') {
      alert('Veuillez entrer votre nom.');
      return;
    }

    if (email === '') {
      setEmailError('Veuillez entrer votre email.');
      return;
    }

    if (password === '') {
      setPasswordError('Veuillez entrer votre mot de passe.');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Veuillez entrer une adresse email valide.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3306/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création du compte.');
      }

      alert('Compte créé avec succès !');
      setIsCreatingAccount(false); // Revenir à la page de connexion
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Une erreur est survenue lors de la création du compte.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-blue-950 to-accent-500">
      <div className="relative w-96 p-10 bg-black bg-opacity-50 rounded-lg shadow-lg">
        {isCreatingAccount ? (
          <>
            <h2 className="text-white text-3xl text-center mb-8">Créer un compte</h2>
            <form>
              {/* Champ Nom */}
              <div className="mb-6">
                <input
                  type="text"
                  value={name}
                  placeholder="Entrez votre nom"
                  onChange={(ev) => setName(ev.target.value)}
                  className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Champ Email */}
              <div className="mb-6">
                <input
                  type="email"
                  value={email}
                  placeholder="Entrez votre email"
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="text-red-500 text-sm">{emailError}</label>
              </div>

              {/* Champ Mot de Passe */}
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  placeholder="Entrez votre mot de passe"
                  onChange={(ev) => setPassword(ev.target.value)}
                  className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="text-red-500 text-sm">{passwordError}</label>
              </div>

              {/* Bouton de création */}
              <button
                onClick={onCreateAccountClick}
                className="w-full p-3 bg-gradient-to-b from-gray-800 to-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                type="button"
              >
                Créer un compte
              </button>

              {/* Lien pour retourner à la connexion */}
              <p
                onClick={() => setIsCreatingAccount(false)}
                className="mt-4 text-blue-400 cursor-pointer hover:underline text-center"
              >
                Vous avez déjà un compte ? Connectez-vous
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-white text-3xl text-center mb-8">Page de connexion</h2>
            <form>
              {/* Champ Email */}
              <div className="mb-6">
                <input
                  type="email"
                  value={email}
                  placeholder="Entrez votre email"
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="text-red-500 text-sm">{emailError}</label>
              </div>

              {/* Champ Mot de Passe */}
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  placeholder="Entrez votre mot de passe"
                  onChange={(ev) => setPassword(ev.target.value)}
                  className="w-full p-3 text-white bg-transparent border-b border-white outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="text-red-500 text-sm">{passwordError}</label>
              </div>

              {/* Bouton de connexion */}
              <button
                onClick={onLoginClick}
                className="w-full p-3 bg-gradient-to-b from-gray-800 to-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                type="button"
              >
                Se connecter
              </button>

              {/* Lien pour créer un compte */}
              <p
                onClick={() => setIsCreatingAccount(true)}
                className="mt-4 text-blue-400 cursor-pointer hover:underline text-center"
              >
                Pas encore de compte ? Créez-en un
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Connections;
