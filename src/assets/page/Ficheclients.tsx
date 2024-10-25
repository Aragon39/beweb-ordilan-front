import Ordilan from '../image/Logo-ordilan-png-1024x295.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";

function Ficheclients() {
    interface SignUpState {
        id?: number; // Ajout d'un id optionnel pour la mise à jour
        nom: string;
        prenom: string;
        date: string;
        email: string;
        adresse: string;
        telephone: string;
        observation: string;
        materiels: string;
        etat: string[];
    }

    const navigate = useNavigate();
    const location = useLocation();
    const clientData = location.state?.client; // Récupération des données du client si disponibles

    const [formData, setFormData] = useState<SignUpState>({
        nom: '',
        prenom: '',
        date: '',
        email: '',
        adresse: '',
        telephone: '',
        observation: '',
        materiels: '',
        etat: [],
    });

    // Remplir le formulaire avec les données du client si elles existent
    useEffect(() => {
        if (clientData) {
            setFormData(clientData);
        }
    }, [clientData]);

    const handleClose = () => {
        navigate('/menu');
    };

    // Gestion des modifications des champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "etat") {
            // Gérer les cases à cocher pour l'état
            setFormData(prevData => {
                const etat = prevData.etat.includes(value)
                    ? prevData.etat.filter(item => item !== value) // Si déjà sélectionné, le retirer
                    : [...prevData.etat, value]; // Sinon, l'ajouter

                return { ...prevData, etat };
            });
        } else {
            setFormData(prevData => ({ ...prevData, [name]: value }));
        }
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission

        try {
            if (clientData) {
                // Mise à jour du client existant
                await axios.put(`http://localhost:3000/clients/${formData.id}`, formData);
            } else {
                // Création d'un nouveau client
                await axios.post('http://localhost:3000/clients', formData);
            }
            navigate('/Listeclients'); // Redirige vers la liste des clients après l'ajout ou la mise à jour
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erreur lors de la soumission :', error.response?.data);
            } else {
                console.error('Erreur inconnue :', error);
            }
        }
    };

    return (
        <div className={`h-auto w-auto overflow-auto bg-ficheclients bg-cover`}>
            <section id='logo et titre'>
                <img src={Ordilan} alt='logo Ordilan' className='absolute flex h-40 top-2.5 left-4' />
                <h1 className='absolute flex right-20 text-6xl top-16 text-black'>Fiche Client</h1>
            </section>

            <form onSubmit={handleSubmit} className='mt-60'>
                <div className='flex'>
                    <div className='flex flex-col space-y-4 w-1/2'>
                        {/* NOM */}
                        <label className="block px-3">
                            <input type="text"
                                   name="nom"
                                   id="nom"
                                   onChange={handleChange}
                                   value={formData.nom}
                                   required
                                   className='border border-gray-950 rounded-3xl p-2 w-11/12 font-bold '
                                   placeholder="Nom"
                            />
                        </label>
                        <label className="block px-3">
                            <input type="text"
                                   name="prenom"
                                   id="prenom"
                                   onChange={handleChange}
                                   value={formData.prenom}
                                   required
                                   className='border border-gray-950 rounded-3xl p-2 w-11/12 font-bold '
                                   placeholder="Prénom"
                            />
                        </label>
                        {/* TELEPHONE */}
                        <label className="block px-3">
                            <input
                                type="text"
                                name="telephone"
                                value={formData.telephone} // Ajout de la valeur pour le téléphone
                                className='border border-gray-950 rounded-3xl p-2 w-11/12 mt-1 font-bold'
                                placeholder='Téléphone'
                                onChange={handleChange}
                                required
                            />
                        </label>
                        {/* ADRESSE */}
                        <label className="block px-3">
                            <input
                                type="text"
                                name="adresse"
                                value={formData.adresse} // Ajout de la valeur pour l'adresse
                                className='border border-gray-950 rounded-3xl p-2 w-11/12 mt-1 font-bold'
                                placeholder="Adresse"
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    {/* DATE */}
                    <div className='flex flex-col space-y-4 w-1/2'>
                        <label>
                            <input
                                type="datetime-local"
                                name="date"
                                value={formData.date} // Ajout de la valeur pour la date
                                className='block w-11/12 mx-auto px-3 border border-gray-950 rounded-2xl p-2 font-bold'
                                onChange={handleChange}
                                required
                            />
                        </label>

                        {/* EMAIL */}
                        <label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email} // Ajout de la valeur pour l'email
                                className='block w-11/12 mx-auto px-3 border border-gray-950 rounded-2xl p-2 font-bold'
                                placeholder='Email'
                                onChange={handleChange}
                                required
                            />
                        </label>
                        {/* MATERIELS */}
                        <select
                            name="materiels"
                            value={formData.materiels} // Ajout de la valeur pour les matériels
                            className='block w-11/12 mx-auto px-3 border border-gray-950 rounded-2xl p-2 font-bold'
                            onChange={handleChange}
                            required
                        >
                            <option value="">CHOIX DU MATÉRIEL</option>
                            <option value="ORDINATEUR">ORDINATEUR</option>
                            <option value="TABLETTE">TABLETTE</option>
                            <option value="ECRAN">ÉCRAN</option>
                            <option value="IMPRIMANTE">IMPRIMANTE</option>
                        </select>
                    </div>
                </div>

                {/* OPTIONS ÉTAT DU MATÉRIEL */}
                <section id='etat materiel' className='mt-8 px-3'>
                    <div className='bg-gray-50 p-1 rounded-lg w-auto flex flex-wrap gap-8 border border-red-950'>
                        <p className="font-bold text-xl">État de Matériel</p>

                        <label className='ml-auto font-bold text-xl'>
                            <input type="checkbox" name="etat" value="excellent" className='mr-2'
                                   checked={formData.etat.includes("excellent")} // Vérification si l'état est sélectionné
                                   onChange={handleChange} />
                            Excellent
                        </label>
                        <label className='ml-auto font-bold text-xl'>
                            <input type="checkbox" name="etat" value="correct" className='mr-2'
                                   checked={formData.etat.includes("correct")}
                                   onChange={handleChange} />
                            Correct
                        </label>
                        <label className='ml-auto font-bold text-xl'>
                            <input type="checkbox" name="etat" value="bon" className='mr-2'
                                   checked={formData.etat.includes("bon")}
                                   onChange={handleChange} />
                            Bon
                        </label>
                        <label className='ml-auto font-bold text-xl'>
                            <input type="checkbox" name="etat" value="mauvais" className='mr-2'
                                   checked={formData.etat.includes("mauvais")}
                                   onChange={handleChange} />
                            Mauvais
                        </label>
                    </div>
                </section>

                {/* OBSERVATION */}
                <section id='observation' className='mt-2 px-3'>
                    <div className="flex mt-2">
                        <textarea name="observation"
                                  onChange={handleChange}
                                  value={formData.observation} // Ajout de la valeur pour les observations
                                  className='border border-gray-950 rounded-lg p-2 w-full h-40 mt-2 resize-none'
                                  placeholder="Écrivez vos observations ici ...">
                        </textarea>
                    </div>
                </section>

                {/* BOUTONS */}
                <section id='button' className="flex space-x-4 mt-6 p-3">
                    <button
                        type="submit"  // Bouton pour soumettre le formulaire
                        className='bg-blue-950 text-white font-bold py-2 px-4 rounded'>
                        {clientData ? "Modifier Client" : "Créer Client"} {/* Modifier le texte du bouton */}
                    </button>
                    <button
                        type="button"
                        onClick={handleClose}
                        className='bg-blue-950 text-white font-bold py-2 px-4 rounded'>
                        Fermer le formulaire
                    </button>
                </section>
            </form>
        </div>
    );
}

export default Ficheclients;
