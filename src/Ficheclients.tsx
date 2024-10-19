import imagefond from './assets/image/fiche client.jpeg';
import Ordilan from './assets/image/Logo-ordilan-png-1024x295.png';
import React, { useState } from 'react';
import axios from 'axios';

function Ficheclients() {
    interface SignUpState {
        nomEtPrenom: string;
        prenom: string;
        date: string;
        email: string;
        adresse: string;
        telephone: string;
        materiel: string;
        observation: string;
    }

    const [formData, setFormData] = useState<SignUpState>({
        nomEtPrenom: '',
        prenom: '',
        date: '',
        email: '',
        adresse: '',
        telephone: '',
        materiel: '',
        observation: '',
    });

    const [errorMessage, setErrorMessage] = useState<string>(''); // Pour gérer le message d'erreur

    // Gestion des modifications des champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission

        // Validation des champs requis
        const { nomEtPrenom, date, email, adresse, telephone, materiel } = formData;

        if (!nomEtPrenom || !date || !email || !adresse || !telephone || !materiel) {
            setErrorMessage('Veuillez remplir tous les champs obligatoires.');
            return;
        } else {
            setErrorMessage(''); // Réinitialise le message d'erreur si tous les champs sont remplis
        }

        try {
            const response = await axios.post('http://localhost:5173/ficheclients', formData);
            console.log(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erreur lors de la soumission :', error.response?.data);
            } else {
                console.error('Erreur inconnue :', error);
            }
        }
    };

    return (
        <div className='Ficheclients'>
            <img src={imagefond} alt='image de fond' className='object-center absolute inset-0 w-full h-full ' />
            <img src={Ordilan} alt='logo Ordilan' className='absolute h-40 top-2.5' />
            <h1 className='absolute right-20 text-6xl top-16 text-black'>Fiche Client</h1>

            {/* Affichage du message d'erreur */}
            {errorMessage && <p className='text-red-500 text-center'>{errorMessage}</p>}

            {/* Le formulaire englobe désormais tout, y compris l'observation et les boutons */}
            <form onSubmit={handleSubmit} className='mt-60 flex flex-col relative gap-x-8'>
                <div className='flex'>
                    <div className='flex flex-col space-y-4 w-1/2'>
                                                            {/*NOM ET PRENOM*/}
                        <label className="block px-3">
                            <input type="text"
                                name="nomEtPrenom"
                                id="nomEtPrenom"
                                onChange={handleChange}
                                value={formData.nomEtPrenom}
                                required
                                className='border border-gray-950 rounded-3xl p-2 w-11/12 mt-1 font-bold'
                                placeholder="Nom et Prénom"
                            />
                        </label>
                                                                 {/*TELEPHONE*/}
                        <label className="block px-3">
                            <input
                                type="text"
                                name="telephone"
                                className='border border-gray-950 rounded-3xl p-2 w-11/12 mt-1 font-bold'
                                placeholder='Téléphone'
                                onChange={handleChange}
                                required
                            />
                        </label>
                                                                   {/*ADRESSE */}
                        <label className="block px-3">
                            <input
                                type="text"
                                name="adresse"
                                className='border border-gray-950 rounded-3xl p-2 w-11/12 mt-1 font-bold'
                                placeholder="Adresse"
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                                                                   {/*DATE*/}
                    <div className='flex flex-col space-y-4 w-1/2'>
                        <label className="block px-3">
                            <input
                                type="datetime-local"
                                name="date"
                                className='border border-gray-950 rounded-2xl p-2 w-full mt-1 font-bold'
                                onChange={handleChange}
                                value={formData.date}
                                required
                            />
                        </label>
                                                                  {/*EMAIL*/}
                        <label className="block px-3">
                            <input
                                type="email"
                                name="email"
                                className='border border-gray-950 rounded-2xl p-2 w-full mt-1 font-bold'
                                placeholder='Email'
                                onChange={handleChange}
                                required
                            />
                        </label>
                                                                {/*MATERIELS*/}
                        <label className="block px-3">
                            <input
                                type='text'
                                name="materiel"
                                className='border border-gray-950 rounded-2xl p-2 w-full mt-1 font-bold'
                                placeholder='Types de Matériel'
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </div>

                {/*OPTIONS MATERIELS*/}
                <div className='mt-6'>
                    <div className='bg-gray-50 p-1 rounded-lg w-full flex flex-wrap gap-8 border border-red-950'>
                        <p className="font-bold text-xl">État de Matériel</p>

                        <label className='flex items-center ml-auto font-bold text-xl '>
                            <input type="checkbox" name="excellent" value="excellent" className='mr-2' />
                            Excellent
                        </label>
                        <label className='flex items-center ml-auto font-bold text-xl'>
                            <input type="checkbox" name="correct" value="correct" className='mr-2' />
                            Correct
                        </label>
                        <label className='flex items-center ml-auto font-bold text-xl'>
                            <input type="checkbox" name="bon" value="bon" className='mr-2' />
                            Bon
                        </label>
                        <label className='flex items-center ml-auto font-bold text-xl'>
                            <input type="checkbox" name="mauvais" value="mauvais" className='mr-2' />
                            Mauvais
                        </label>
                        <label className='flex items-center ml-auto font-bold text-xl'>
                            <input type="checkbox" name="tres_mauvais" value="tres_mauvais" className='mr-2' />
                            Très mauvais
                        </label>
                    </div>

                                                           {/*OBSERVATION*/}
                    <div className="mt-4">
                        <textarea
                            name="observation"
                            onChange={handleChange}
                            value={formData.observation}
                            className='border border-gray-950 rounded-lg p-2 w-full h-32 mt-2'
                            placeholder="Ecrivez vos observations ici ..."
                        ></textarea>
                    </div>
                </div>

                                                          {/* BOUTONS */}
                <div className="flex justify-center space-x-4 mt-6">
                    <button
                        type="submit"  // Bouton pour soumettre le formulaire
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Créer client
                    </button>
                    <button
                        type="button"
                        onClick={() => { console.log('Fermer le formulaire'); }}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Fermer le formulaire
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Ficheclients;

