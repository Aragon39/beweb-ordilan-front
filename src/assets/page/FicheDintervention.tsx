import { useState } from "react";
import Ordilan from "../image/Logo-ordilan-png-1024x295.png";

function FicheDintervention() {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Données du formulaire:", formData);
  };

  return (
    <div className="container mx-auto p-4 ">
      <section
        id="logo et titre"
        className="flex flex-col md:flex-row items-center mb-10"
      >
        <img src={Ordilan} alt="logo Ordilan" className="h-40 mb-4 md:mb-0" />
        <h1 className="text-4xl md:text-6xl text-black text-center md:text-left md:ml-10 w-full">
          Fiche D'interventions N°
        </h1>
      </section>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Colonne gauche */}
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

        {/* Colonne droite */}
        <div className="flex flex-col font-bold  ">
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
              className="border border-gray-950 rounded-3xl p-2 w-full "
            />
          </label>
        </div>

        {/* nature de l'intervation */}

        <div>
          <section
            id="nature-de-l-intervention"
            className="mt-4 px-3 text-blue-800 font-bold"
          >
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
        {/* observation */}
        <div>
          <section
            id="observation"
            className="mt-4 px-3 text-blue-800 font-bold text-xl"
          >
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
        {/* Description */}
        <div>
          <section
            id="Description"
            className="mt-4 px-3 text-blue-800 font-bold text-xl"
          >
            <div className="border border-gray-950 rounded-lg p-4 w-full max-w-full mx-auto">
              {"Description:"}
              <textarea
                name="description"
                onChange={handleChange}
                value={formData.description}
                className=" w-full h-10 border-none resize-none focus:outline-none"
              />
            </div>
          </section>
        </div>

        {/* Bouton de soumission */}
        <section
          id="button"
          className="col-span-1 md:col-span-2 flex space-x-4"
        >
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Soumettre
          </button>

          <button
            type="button" // Changer en type="button" pour éviter un double submit si dans un formulaire
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            RETOUR
          </button>
        </section>
      </form>
    </div>
  );
}

export default FicheDintervention;
