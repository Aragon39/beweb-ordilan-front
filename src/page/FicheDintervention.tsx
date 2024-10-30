// Importation des modules nécessaires
import { useState } from "react"; // Importation de useState pour gérer l'état local du composant
import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png"; // Remonte d'un niveau

import { useNavigate } from "react-router-dom"; // Importation de useNavigate pour la navigation entre les pages

// Définition de l'interface pour les données du formulaire
interface SignUpState {
  id?: number; // Champ optionnel pour un identifiant
  nom: string; // Nom du client
  dateEtHeureDuDébut: string; // Date et heure de début de l'intervention
  dateEtHeureDeFin: string; // Date et heure de fin de l'intervention
  intervenant: string; // Nom de l'intervenant
  adresse: string; // Adresse du client
  natureDeLintervention: string; // Nature de l'intervention
  observation: string; // Observations liées à l'intervention
  description: string; // Description détaillée de l'intervention
}

// Définition du composant principal FicheDintervention
function FicheDintervention() {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState<SignUpState>({
    nom: "", // Valeur initiale du nom
    dateEtHeureDuDébut: "", // Valeur initiale de la date et heure de début
    dateEtHeureDeFin: "", // Valeur initiale de la date et heure de fin
    intervenant: "", // Valeur initiale de l'intervenant
    adresse: "", // Valeur initiale de l'adresse
    natureDeLintervention: "", // Valeur initiale de la nature de l'intervention
    observation: "", // Valeur initiale des observations
    description: "", // Valeur initiale de la description
  });

  // Utilisation de la navigation de React Router pour la navigation entre les pages
  const navigate = useNavigate();

  // Fonction pour retourner au menu principal
  const handleClose = () => {
    navigate("/menu"); // Navigation vers la route "/menu"
  };

  // Gestion du changement de chaque champ de formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> // Type de l'événement pour les champs d'entrée et les zones de texte
  ) => {
    const { name, value } = e.target; // Récupération du nom et de la valeur du champ modifié
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Mise à jour de l'état avec la nouvelle valeur
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le comportement par défaut de la soumission du formulaire
    console.log("Données du formulaire:", formData); // Affiche les données du formulaire dans la console

    // Vous pouvez ajouter ici le code pour traiter les données du formulaire, par exemple, une requête API.
    // Exemple d'envoi avec axios (assurez-vous d'installer axios) :
    // try {
    //   await axios.post('http://localhost:3000/interventions', formData);
    //   alert("Intervention enregistrée avec succès !");
    //   navigate("/menu"); // Rediriger vers le menu après soumission réussie
    // } catch (error) {
    //   console.error("Erreur lors de l'enregistrement de l'intervention:", error);
    //   alert("Une erreur s'est produite. Veuillez réessayer.");
    // }
  };

  // Composant pour les champs de saisie
  const Input = ({
    name, // Nom du champ, qui correspond à une clé de SignUpState
    type = "text", // Type du champ, par défaut "text"
    placeholder // Texte d'espace réservé à afficher dans le champ
  }: {
    name: keyof SignUpState; // Type du nom basé sur les clés de l'interface SignUpState
    type?: string; // Type du champ, optionnel
    placeholder?: string; // Texte d'espace réservé, optionnel
  }) => (
    <label className="block mb-2 font-bold">
      {placeholder}:
      <input
        type={type} // Définit le type de l'input (text, email, etc.)
        name={name} // Assigne le nom du champ pour le suivi
        onChange={handleChange} // Fonction de gestion pour les changements de valeur
        value={formData[name]} // Liaison à la valeur actuelle du champ dans l'état formData
        required // Indique que ce champ est requis
        className="border border-gray-950 rounded-3xl p-2 w-full font-bold" // Classes CSS pour le style
      />
    </label>
  );

  // Composant pour les zones de texte
  const Text = ({
    name, // Nom du champ, qui correspond à une clé de SignUpState
    placeholder // Texte d'espace réservé à afficher dans la zone de texte
  }: {
    name: keyof SignUpState; // Type du nom basé sur les clés de l'interface SignUpState
    placeholder?: string; // Texte d'espace réservé, optionnel
  }) => (
    <section className="mt-4 px-3 text-blue-800 font-bold">
      <div className="border border-gray-950 rounded-lg p-4">
        {placeholder}:
        <textarea
          name={name} // Assigne le nom du champ pour le suivi
          onChange={handleChange} // Fonction de gestion pour les changements de valeur
          value={formData[name]} // Liaison à la valeur actuelle de la zone de texte dans l'état formData
          className="border-none w-full h-20 resize-none focus:outline-none" // Classes CSS pour le style
        />
      </div>
    </section>
  );

  return (
    <div className="container mx-auto p-4"> {/* Conteneur principal pour le formulaire */}
      {/* Logo et Titre */}
      <section id="logo et titre" className="flex flex-col md:flex-row items-center mb-8">
        <img src={Ordilan} alt="logo Ordilan" className="h-40 mb-4 md:mb-0" />
        <h1 className="text-4xl md:text-6xl text-black text-center md:text-left md:ml-10 w-full">
          Fiche D'interventions N°
        </h1>
      </section>

      {/* Formulaire principal */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Colonne gauche du formulaire */}
        <div className="flex flex-col">
          <Input name="nom" placeholder="Nom client" />
          <Input name="adresse" placeholder="Adresse" />
          <Input name="intervenant" placeholder="Intervenant" />
        </div>

        {/* Colonne droite du formulaire */}
        <div className="flex flex-col font-bold">
          <Input name="dateEtHeureDuDébut" type="datetime-local" placeholder="Date et Heure de Début" />
          <Input name="dateEtHeureDeFin" type="datetime-local" placeholder="Date et Heure de Fin" />
        </div>

        {/* Sections pour la nature de l'intervention, observation et description */}
        <Text name="natureDeLintervention" placeholder="Nature de l'intervention" />
        <Text name="observation" placeholder="Observation" />
        <Text name="description" placeholder="Description" />

        {/* Section des boutons d'action */}
        <section id="button" className="col-span-1 md:col-span-2 flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
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

// Exportation du composant FicheDintervention pour utilisation dans d'autres parties de l'application
export default FicheDintervention;
