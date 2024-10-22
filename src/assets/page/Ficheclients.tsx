import Ordilan from '../image/Logo-ordilan-png-1024x295.png';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


function Ficheclients() {
    interface SignUpState {
        nom: string;
        prenom: string;
        date: string;
        email: string;
        adresse: string;
        telephone: string;
        observation: string;
    }

    const [formData, setFormData] = useState<SignUpState>({
        nom: '',
        prenom: '',
        date: '',
        email: '',
        adresse: '',
        telephone: '',
        observation: '',
    });

    const navigate = useNavigate();
    const handleClose = () =>{
        navigate('/menu');
    };


    // Gestion des modifications des champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission

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
        <div className={`h-auto w-screen overflow-auto bg-ficheclients bg-cover`}>
            <header>
            <img src={Ordilan} alt='logo Ordilan' className=' absolute  flex h-40 top-2.5 left-4' />
            <h1 className='absolute  flex right-20 text-6xl top-16 text-black'>Fiche Client</h1>
        </header>
            {/* Le formulaire englobe désormais tout, y compris l'observation et les boutons */}
            <form onSubmit={handleSubmit} className='mt-60  '>
                <div className='flex'>
                    <div className='flex flex-col space-y-4 w-1/2'>
                        {/*NOM ET PRENOM*/}
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
                                   name="Prenom"
                                   id="Prenom"
                                   onChange={handleChange}
                                   value={formData.prenom}
                                   required
                                   className='border border-gray-950 rounded-3xl p-2 w-11/12 font-bold '
                                   placeholder="Prénom"
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
                                className='border border-gray-950 rounded-3xl p-2 w-full mt-1 font-bold'
                                onChange={handleChange}
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
                        MATERIELS
                        <select id='Materiels'>
                            <option value="ORDIANATEUR">ORDINATEUR</option>
                            <option value="TABLETTE">TABLETTE</option>
                            <option value="ECRAN">ECRAN</option>
                            <option value="IMPRIMANTE">IMPRIMANTE</option>
                        </select>

                    </div>
                </div>

                                             {/*OPTIONS ETAT DU MATERIEL*/}
                <section id='etat materiel' className=' mt-6 px-3'>
                    <div className='bg-gray-50 p-1 rounded-lg w-full flex flex-wrap gap-8 border border-red-950'>
                        <p className="font-bold text-xl">État de Matériel</p>

                        <label className=' ml-auto font-bold text-xl '>
                            <input type="checkbox" name="excellent" value="excellent" className='mr-2' />
                            Excellent
                        </label>
                        <label className=' ml-auto font-bold text-xl'>
                            <input type="checkbox" name="correct" value="correct" className='mr-2' />
                            Correct
                        </label>
                        <label className='ml-auto font-bold text-xl'>
                            <input type="checkbox" name="bon" value="bon" className='mr-2' />
                            Bon
                        </label>
                        <label className=' ml-auto font-bold text-xl'>
                            <input type="checkbox" name="mauvais" value="mauvais" className='mr-2' />
                            Mauvais
                        </label>
                    </div>
                </section>
                                                           {/*OBSERVATION*/}
                <section id='observation' className='mt-2 px-3'>
                    <div className="flex mt-2">
                   <textarea name="observation" onChange={handleChange} className='border border-gray-950 rounded-lg p-2 w-full h-40 mt-2 resize-none' placeholder="Ecrivez vos observations ici ..."></textarea>
                    </div>
                </section>

                                      {/* BOUTONS */}
                <section id='button' className="flex space-x-4 mt-6">
                    <button
                        type="submit"  // Bouton pour soumettre le formulaire
                        className='bg-blue-950  text-white font-bold py-2 px-4 rounded'>
                    Créer client
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

