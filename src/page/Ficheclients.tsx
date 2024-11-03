import { useState } from "react";
import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png";
import { useNavigate } from "react-router-dom";
import { createClient, SignUpState } from "../services/clientService"; // Assurez-vous que le chemin est correct

function Ficheclients() {
  const [formData, setFormData] = useState<SignUpState>({
    nom: "",
    prenom: "",
    adresse: "",
    telephone: "",
    date: "",
    email: "",
    materiels: "",
    etat:"", // Utilisation d'un tableau pour l'état
    observation: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs

  const handleClose = () => {
    navigate('/menu'); 
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Données du formulaire :", formData);

    try {
      // Appel au service pour créer le client
      await createClient(formData); 
      console.log("Client créé avec succès");
      navigate('/Listeclients'); // Redirige vers la liste des clients
    } catch (error) {
      console.error("Erreur lors de la création du client :", error);
      setError("Une erreur est survenue lors de la création du client."); // Afficher l'erreur
    }
  };

  return (
    <div className="container mx-auto p-4">
      {error && <div className="text-red-500">{error}</div>} {/* Affichage des erreurs */}

      <section id="titre et logo" className="flex flex-col md:flex-row items-center mb-8">
        <img src={Ordilan} alt="logo Ordilan" className="h-40 mb-4 md:mb-0" />
        <h1 className="text-4xl text-black md:text-left md:ml-12">FICHE CLIENTS</h1>
      </section>

      {/* Formulaire principal */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Colonne gauche */}
        <div className="flex flex-col">
          <label htmlFor="nom" className="block mb-2 font-bold">Nom
            <input type="text" name="nom" id="nom" onChange={handleChange} value={formData.nom} placeholder="Nom" className="border border-gray-950 rounded-3xl p-2 w-full font-serif" required />
          </label>

          <label htmlFor="prenom" className="block mb-2 font-bold">Prénom
            <input type="text" name="prenom" id="prenom" onChange={handleChange} value={formData.prenom} placeholder="Prénom" className="border border-gray-950 rounded-3xl p-2 w-full font-serif" required />
          </label>

          <label htmlFor="telephone" className="block mb-2 font-bold">Téléphone
            <input type="text" name="telephone" id="telephone" onChange={handleChange} value={formData.telephone} placeholder="Téléphone" className="border border-gray-950 rounded-3xl p-2 w-full font-serif" required />
          </label>

          <label htmlFor="adresse" className="block mb-2 font-bold">Adresse
            <input type="text" name="adresse" id="adresse" onChange={handleChange} value={formData.adresse} placeholder="Adresse" className="border border-gray-950 rounded-3xl p-2 w-full font-serif" required />
          </label>
        </div>

        {/* Colonne droite */}
        <div className="flex flex-col">
          <label htmlFor="date" className="block mb-2 font-bold">Date
            <input type="datetime-local" name="date" id="date" onChange={handleChange} value={formData.date} className="border border-gray-950 rounded-3xl p-2 w-full font-serif" required />
          </label>

          <label htmlFor="email" className="block mb-2 font-bold">Email
            <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} placeholder="Email" className="border border-gray-950 rounded-3xl p-2 w-full font-serif" required />
          </label>

          <label htmlFor="materiels" className="block mb-2 font-bold">Matériel
            <select id="materiels" name="materiels" value={formData.materiels} className="block w-full mx-auto px-3 border border-gray-950 p-2 rounded-3xl font-serif" onChange={handleChange} required>
              <option value="">-- CHOISIR UN MATÉRIEL --</option>
              <option value="ORDINATEUR">ORDINATEUR</option>
              <option value="ECRAN">ÉCRAN</option>
              <option value="TABLETTE">TABLETTE</option>
              <option value="IMPRIMANTE">IMPRIMANTE</option>
            </select>
          </label>

          <label htmlFor="etat du Materiels" className="block mb-2 font-bold">Etat du Matèriel
            <select id="etat du materiels" name="etat" value={formData.etat} className="block w-full mx-auto px-3 border border-gray-950 p-2 rounded-3xl font-serif" onChange={handleChange} required>
              <option value="">-- CHOISIR L'ETAT DU MATERIELS --</option>
              <option value="Exellent">Exellent</option>
              <option value="Bon">Bon</option>
              <option value="Mauvais">Mauvais</option>
              <option value="Trés Mauvais">Trés Mauvais</option>
            </select>
          </label>
        </div>




        {/* Observation */}
        <section id="observation" className="col-span-1 md:col-span-2 mt-4 border border-gray-950 rounded-xl p-4">
          <label htmlFor="observation" className="block mb-2 font-bold text-black">Observation :</label>
          <textarea name="observation" id="observation" onChange={handleChange} value={formData.observation} className="w-full h-24 rounded-md p-2 resize-none" placeholder="Veuillez entrer vos observations ici..." />
        </section>

        {/* Section des boutons */}
        <section id="button" className="col-span-1 md:col-span-2 flex space-x-4 mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Créer clients
          </button>

          <button type="button" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleClose}>
            Fermer le Formulaire
          </button>
        </section>
      </form>
    </div>
  );
}

export default Ficheclients;
