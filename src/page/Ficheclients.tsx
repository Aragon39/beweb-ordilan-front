import React, { useEffect, useState } from 'react'; // Importation des modules React et hooks
import axios from 'axios'; // Importation de la bibliothèque axios pour les requêtes HTTP
import { useNavigate, useLocation } from "react-router-dom"; // Importation des hooks pour la navigation et la localisation
import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png"; // Remonte d'un niveau


function Ficheclients() {
    interface SignUpState {
        id?: number; // Identifiant optionnel
        nom: string; // Nom du client
        prenom: string; // Prénom du client
        date: string; // Date
        email: string; // Email du client
        adresse: string; // Adresse
        telephone: string; // Numéro de téléphone
        observation: string; // Observations
        materiels: string; // Matériels
        etat: string[]; // État du matériel
    }

    const navigate = useNavigate(); // Hook pour naviguer entre les routes
    const { state } = useLocation(); // Récupération de l'état de la localisation
    const clientData = state?.client; // Données du client, si disponibles

    // État du formulaire
    const [formData, setFormData] = useState<SignUpState>({
        nom: '', prenom: '', date: '', email: '', adresse: '', telephone: '',
        observation: '', materiels: '', etat: [],
    });

    // Remplissage des données du formulaire si le client est défini
    useEffect(() => {
        if (clientData) setFormData(clientData);
    }, [clientData]);

    const handleClose = () => navigate('/menu'); // Fonction pour fermer le formulaire et retourner au menu

    // Gestion des changements dans les champs de formulaire
    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: name === "etat"
                ? prevData.etat.includes(value)
                    ? prevData.etat.filter(item => item !== value) // Désélectionner l'état si déjà sélectionné
                    : [...prevData.etat, value] // Ajouter l'état à la liste
                : value,
        }));
    };

    // Soumission du formulaire
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le comportement par défaut de la soumission
        try {
            const url = `http://localhost:3000/clients${clientData ? `/${formData.id}` : ''}`; // URL pour l'API
            // Effectuer la requête PUT ou POST en fonction de l'existence des données du client
            await (clientData ? axios.put(url, formData) : axios.post(url, formData));
            navigate('/Listeclients'); // Rediriger vers la liste des clients
        } catch (error) {
            console.error('Erreur lors de la soumission :', error); // Afficher l'erreur dans la console
        }
    };

    // Composant pour les champs d'entrée
    const InputField = ({ name, type = "text", placeholder }: { name: keyof SignUpState; type?: string; placeholder: string }) => (
        <label className="block px-3">
            <input
                type={type}
                name={name}
                onChange={handleChange}
                value={formData[name]}
                required
                className='border border-gray-950 rounded-3xl p-2 w-full font-bold'
                placeholder={placeholder}
            />
        </label>
    );

    // Composant pour les zones de texte
    const TextAreaField = ({ name, placeholder }: { name: keyof SignUpState; placeholder: string }) => (
        <section id='observation' className='mt-2 px-3 col-span-2'>
            <div className="flex mt-2">
                <textarea
                    name={name}
                    onChange={handleChange}
                    value={formData[name]}
                    className='border border-gray-950 rounded-lg p-2 w-full h-40 mt-2 resize-none'
                    placeholder={placeholder}
                />
            </div>
        </section>
    );

    return (
        <div className={`h-auto w-auto overflow-auto bg-ficheclients bg-cover`}>
            {/* Section du logo et titre */}
            <section id='logo et titre' className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center lg:mb-8">
                    <img src={Ordilan} alt='logo Ordilan' className='h-40 mb-4 md:mb-0 md:mr-96' />
                    <h1 className='text-6xl text-black mt-4 lg:mt-8'>Fiche Client</h1>
                </div>
            </section>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col space-y-4'>
                    {['nom', 'prenom', 'telephone', 'adresse'].map(field => (
                        <InputField key={field} name={field as keyof SignUpState} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
                    ))}
                </div>

                <div className='flex flex-col space-y-4'>
                    <label>
                        <input
                            type="datetime-local"
                            name="date"
                            value={formData.date}
                            className='block w-full mx-auto px-3 border border-gray-950 rounded-2xl p-2 font-bold'
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <InputField name="email" type="email" placeholder='Email' />

                    <select
                        name="materiels"
                        value={formData.materiels}
                        className='block w-full mx-auto px-3 border border-gray-950 rounded-2xl p-2 font-bold'
                        onChange={handleChange}
                        required
                    >
                        <option value="">CHOIX DU MATÉRIEL</option>
                        {['ORDINATEUR', 'TABLETTE', 'ECRAN', 'IMPRIMANTE'].map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <section id='etat materiel' className='mt-8 px-3 col-span-2'>
                    <div className='bg-gray-50 p-1 rounded-lg w-full flex flex-wrap gap-8 border border-red-950'>
                        <p className="font-bold text-xl">État de Matériel</p>
                        {['excellent', 'correct', 'bon', 'mauvais'].map(etat => (
                            <label key={etat} className='ml-auto font-bold text-xl'>
                                <input
                                    type="checkbox"
                                    name="etat"
                                    value={etat}
                                    className='mr-2'
                                    checked={formData.etat.includes(etat)}
                                    onChange={handleChange}
                                />
                                {etat.charAt(0).toUpperCase() + etat.slice(1)}
                            </label>
                        ))}
                    </div>
                </section>

                <TextAreaField name="observation" placeholder="Écrivez vos observations ici ..." />

                <section id='button' className="flex space-x-4 mt-4 p-3 col-span-2">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        {clientData ? "Modifier Client" : "Créer Client"}
                    </button>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Fermer le formulaire
                    </button>
                </section>
            </form>
        </div>
    );
}

export default Ficheclients; // Exportation du composant pour utilisation dans d'autres parties de l'application
