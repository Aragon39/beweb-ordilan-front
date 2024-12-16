import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png";
import {
  createClient,
  updateClient,
  SignUpState,
} from "../services/clientService.ts"; // Assurez-vous que le chemin est correct
import axios from "axios";

const Ficheclients: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const clientToEdit = location.state?.client;

  const [formData, setFormData] = useState<SignUpState>({
    nom: "",
    prenom: "",
    adresse: "",
    CodePostal: "",
    telephone: "",
    dateEtHeureDeDebut: "",
    dateEtHeureDeFin: "",
    email: "",
    materiels: "",
    marqueDeLaMachine: "",
    etat: "",
    natureDeLintervention: "",
    descriptions: "",
    observation: "",
    intervenant: "",
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (clientToEdit) {
      setFormData(clientToEdit);
    }
  }, [clientToEdit]);

  const handleClose = () => {
    navigate("/menu");
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
    e.preventDefault();
    console.log("Données du formulaire :", formData);

    try {
      if (clientToEdit) {
        await updateClient(clientToEdit.id, formData);
      } else {
        await createClient(formData);
      }
      navigate("/Listeclients");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erreur Axios :", error.response?.data); // Détails de l'erreur serveur
        setError(
          `Une erreur est survenue : ${
            error.response?.data?.message || error.message
          }`
        );
      } else {
        console.error("Erreur inconnue :", error);
        setError("Une erreur inconnue est survenue.");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      {error && <div className="text-red-500">{error}</div>}

      <section
        id="titre et logo"
        className="flex flex-col md:flex-row items-center mb-8"
      >
        <img src={Ordilan} alt="logo Ordilan" className="h-40 mb-4 md:mb-0" />
        <h1 className="text-5xl text-black md:text-left md:ml-12">
          FICHE CLIENTS ET D'INTERVENTION
        </h1>
      </section>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col">
          <label htmlFor="nom" className="block mb-2 font-bold">
            Nom
            <input
              type="text"
              name="nom"
              id="nom"
              onChange={handleChange}
              value={formData.nom}
              placeholder="Nom"
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>

          <label htmlFor="prenom" className="block mb-2 font-bold">
            Prénom
            <input
              type="text"
              name="prenom"
              id="prenom"
              onChange={handleChange}
              value={formData.prenom}
              placeholder="Prénom"
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>

          <label htmlFor="telephone" className="block mb-2 font-bold">
            Téléphone
            <input
              type="text"
              name="telephone"
              id="telephone"
              onChange={handleChange}
              value={formData.telephone}
              placeholder="Téléphone"
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>

          <label htmlFor="adresse" className="block mb-2 font-bold">
            Adresse
            <input
              type="text"
              name="adresse"
              id="adresse"
              onChange={handleChange}
              value={formData.adresse}
              placeholder="Adresse"
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>

          <label htmlFor="CodePostal" className="block mb-2 font-bold">
            Code Postal
            <input
              type="text"
              name="CodePostal"
              id="CodePostal"
              onChange={handleChange}
              value={formData.CodePostal}
              placeholder="Code Postal"
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>

          <label htmlFor="intervenant" className="block mb-2 font-bold">
            Intervenant
            <input
              type="text"
              name="intervenant"
              id="intervenant"
              onChange={handleChange}
              value={formData.intervenant}
              placeholder="intervenant"
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label htmlFor="dateEtHeureDeDebut" className="block mb-2 font-bold">
            Date et Heure de Début
            <input
              type="datetime-local"
              name="dateEtHeureDeDebut"
              id="dateEtHeureDeDebut"
              onChange={handleChange}
              value={formData.dateEtHeureDeDebut}
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>

          <label htmlFor="dateEtHeureDeFin" className="block mb-2 font-bold">
            Date et Heure de Fin
            <input
              type="datetime-local"
              name="dateEtHeureDeFin"
              id="dateEtHeureDeFin"
              onChange={handleChange}
              value={formData.dateEtHeureDeFin}
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>

          <label htmlFor="email" className="block mb-2 font-bold">
            Email
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
              className="border border-gray-950 rounded-3xl p-2 w-full font-serif"
              required
            />
          </label>

          <label htmlFor="marqueDeLamachine" className="block mb-2 font-bold">
            Choisir La Marque De La Machine
            <select
              id="marqueDeLaMachine"
              name="marqueDeLaMachine"
              value={formData.marqueDeLaMachine}
              className="block w-full mx-auto px-3 border border-gray-950 p-2 rounded-3xl font-serif"
              onChange={handleChange}
              required
            >
              <option value="">-- CHOISIR LA MARQUE DE LA MACHINE --</option>
              <option value="LENOVO">LENOVO</option>
              <option value="HP">HP</option>
              <option value="DELL">DELL</option>
              <option value="SAMSUNG">SAMSUNG</option>
              <option value="ACER">ACER</option>
            </select>
          </label>

          <label htmlFor="materiels" className="block mb-2 font-bold">
            Matériel
            <select
              id="materiels"
              name="materiels"
              value={formData.materiels}
              className="block w-full mx-auto px-3 border border-gray-950 p-2 rounded-3xl font-serif"
              onChange={handleChange}
              required
            >
              <option value="">-- CHOISIR UN MATÉRIEL --</option>
              <option value="ORDINATEUR">ORDINATEUR</option>
              <option value="ECRAN">ÉCRAN</option>
              <option value="TABLETTE">TABLETTE</option>
              <option value="IMPRIMANTE">IMPRIMANTE</option>
            </select>
          </label>

          <label htmlFor="etat" className="block mb-2 font-bold">
            État du Matériel
            <select
              id="etat"
              name="etat"
              value={formData.etat}
              className="block w-full mx-auto px-3 border border-gray-950 p-2 rounded-3xl font-serif"
              onChange={handleChange}
              required
            >
              <option value="">-- CHOISIR L'ÉTAT DU MATÉRIEL --</option>
              <option value="Exellent">Exellent</option>
              <option value="Bon">Bon</option>
              <option value="Mauvais">Mauvais</option>
              <option value="Très Mauvais">Très Mauvais</option>
            </select>
          </label>
        </div>

        <div>
          <section
            id="nature-de-l-intervention"
            className="mt-4 px-3 text-blue-800 font-bold"
          >
            <div className="border border-gray-950 rounded-lg p-4 text-xl">
              Nature de l'intervention:
              <textarea
                name="natureDeLintervention"
                onChange={handleChange}
                value={formData.natureDeLintervention}
                className="border-none w-full h-10 resize-none focus:outline-none"
              />
            </div>
          </section>
        </div>

        <div>
          <section
            id="observation"
            className="mt-4 px-3 text-blue-800 font-bold text-xl"
          >
            <div className="border border-gray-950 rounded-lg p-4">
              Observation:
              <textarea
                name="observation"
                onChange={handleChange}
                value={formData.observation}
                className="border-none w-full h-10 resize-none focus:outline-none"
              />
            </div>
          </section>
        </div>

        <div>
          <section
            id="Description"
            className="mt-4 px-3 text-blue-800 font-bold text-xl"
          >
            <div className="border border-gray-950 rounded-lg p-4 w-full max-w-full mx-auto">
              Description:
              <textarea
                name="descriptions"
                onChange={handleChange}
                value={formData.descriptions}
                className="w-full h-10 border-none resize-none focus:outline-none"
              />
            </div>
          </section>
        </div>

        <section
          id="button"
          className="col-span-1 md:col-span-2 flex space-x-4 mt-4"
        >
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            {clientToEdit ? "Modifier" : "Créer clients"}
          </button>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleClose}
          >
            Fermer le Formulaire
          </button>
        </section>
      </form>
    </div>
  );
};

export default Ficheclients;
