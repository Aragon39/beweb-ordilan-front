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
  }

  const [formData, setFormData] = useState<SignUpState>({
    nom: "",
    dateEtHeureDuDébut: "",
    dateEtHeureDeFin: "",
    intervenant: "",
    adresse: "",
    natureDeLintervention: "",
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
    <div className="container mx-auto p-4">
      <section
        id="logo et titre"
        className="flex flex-col md:flex-row items-center mb-10"
      >
        <img src={Ordilan} alt="logo Ordilan" className="h-40 mb-4 md:mb-0" />
        <h1 className="text-4xl md:text-6xl text-black text-center md:text-left md:ml-10 w-full">
          Fiche D'interventions
        </h1>
      </section>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Colonne gauche */}
        <div className="flex flex-col">
          <label className="block mb-2">
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
          <label className="block mb-2">
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
          <label className="block mb-2">
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
        <div className="flex flex-col">
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
          <label className="block mb-2">
            Date et Heure de Fin:
            <input
              type="datetime-local"
              name="dateEtHeureDeFin"
              onChange={handleChange}
              value={formData.dateEtHeureDeFin}
              required
              className="border border-gray-950 rounded-3xl p-2 w-full font-bold"
            />
          </label>
        </div>

        {/* nature de l'intervation */}
        <section id="nature de L'intervation" className="mt-2 px-3">
          <div className="flex mt-2">
            <textarea
              name="nature de l'intervention"
              onChange={handleChange}
              value={formData.natureDeLintervention}
              placeholder="Nature de l'intervation"
              className="border border-gray-950 rounded-lg p-2 w-full h-40 mt-2 resize-none"
            ></textarea>
          </div>
        </section>

        {/* Bouton de soumission */}
        <section id="button" className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Soumettre
          </button>
        </section>
      </form>
    </div>
  );
}

export default FicheDintervention;
