import { useState } from "react";
import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png"; // Remonte d'un niveau
import { useNavigate } from "react-router-dom";


function FicheDintervention() {

  // Définition de l'interface pour les données du formulaire
  interface SignUpState {
    id?: number;
    nom: string;
    dateEtHeureDuDébut: string;
    dateEtHeureDeFin: string;
    intervenant: string;
    adresse: string;
    natureDeLintervention: string;
    observation: string;
    description: string;
  }

  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState<SignUpState>({
    nom: "",
    dateEtHeureDuDébut: "",
    dateEtHeureDeFin: "",
    intervenant: "",
    adresse: "",
    natureDeLintervention: "",
    observation: "",
    description: "",
  });

  // Utilisation de la navigation de React Router
  const navigate = useNavigate();

  // Fonction pour retourner au menu principal
  const handleClose = () => {
    navigate('/menu'); 
  };

  // Gestion du changement de chaque champ de formulaire
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Données du formulaire:", formData);
  };

  return (
    <div className="container mx-auto p-4 ">

      {/* Logo et Titre */}
      <section id="logo et titre" className="flex flex-col md:flex-row items-center mb-8">
        <img src={Ordilan} alt="logo Ordilan" className="h-40 mb-4 md:mb-0" />
        <h1 className="text-4xl md:text-6xl text-black text-center md:text-left md:ml-52 w-full">
          Fiche D'interventions N°
        </h1>
      </section>

      {/* Formulaire principal */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Colonne gauche du formulaire */}
        <div className="flex flex-col ">
          <label className="block mb-2 font-bold">
            Nom client:
            <input
              type="text"
              name="nom"
              id="nom"
              onChange={handleChange}
              value={formData.nom}
              required
              className="border border-gray-950 rounded-3xl p-2 w-full font-bold"
            />
          </label>

          <label className="block mb-2 font-bold">
            Adresse:
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              required
              className="border border-gray-950 rounded-3xl p-2 w-full font-bold"
            />
          </label>

          <label className="block mb-2 font-bold">
            Intervenant:
            <input
              type="text"
              name="intervenant"
              value={formData.intervenant}
              onChange={handleChange}
              required
              className="border border-gray-950 rounded-3xl p-2 w-full font-bold"
            />
          </label>
        </div>

        {/* Colonne droite du formulaire */}
        <div className="flex flex-col font-bold">
          <label className="block mb-2">
            Date et Heure de Début:
            <input
              type="datetime-local"
              name="dateEtHeureDuDébut"
              onChange={handleChange}
              value={formData.dateEtHeureDuDébut}
              required
              className="border border-gray-950 rounded-3xl p-2 w-full font-bold"
            />
          </label>

          <label className="block mb-2 font-bold">
            Date et Heure de Fin:
            <input
              type="datetime-local"
              name="dateEtHeureDeFin"
              onChange={handleChange}
              value={formData.dateEtHeureDeFin}
              required
              className="border border-gray-950 rounded-3xl p-2 w-full"
            />
          </label>
        </div>

        {/* Section pour la nature de l'intervention */}
        <div>
          <section id="nature-de-l-intervention" className="mt-4 px-3 text-blue-800 font-bold">
            <div className="border border-gray-950 rounded-lg p-4 text-xl">
              {"Nature de l'intervention :"}
              <textarea
                name="natureDeLintervention"
                onChange={handleChange}
                value={formData.natureDeLintervention}
                className="border-none w-full h-10 resize-none focus:outline-none"
              />
            </div>
          </section>
        </div>

        {/* Section pour l'observation */}
        <div>
          <section id="observation" className="mt-4 px-3 text-blue-800 font-bold text-xl">
            <div className="border border-gray-950 rounded-lg p-4">
              {"Observation :"}
              <textarea
                name="observation"
                onChange={handleChange}
                value={formData.observation}
                className="border-none w-full h-10 resize-none focus:outline-none"
              />
            </div>
          </section>
        </div>

        {/* Section pour la description */}
        <div>
          <section id="Description" className="mt-4 px-3 text-blue-800 font-bold text-xl">
            <div className="border border-gray-950 rounded-lg p-4 w-full max-w-full mx-auto">
              {"Description:"}
              <textarea
                name="description"
                onChange={handleChange}
                value={formData.description}
                className="w-full h-10 border-none resize-none focus:outline-none"
              />
            </div>
          </section>
        </div>

        {/* Section des boutons d'action */}
        <section id="button" className="col-span-1 md:col-span-2 flex space-x-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Soumettre
          </button>

          <button
            type="button" 
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleClose}
          >
            RETOUR
          </button>
        </section>
      </form>
    </div>
  );
}

export default FicheDintervention;