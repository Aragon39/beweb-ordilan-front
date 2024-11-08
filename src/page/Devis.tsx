import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png"; 
import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

function Devis() { 
    // Définition de l'interface pour les données du formulaire
    interface SignUpState { 
        dateDuDevis: string; 
        dateDeValiditeDuDevis: string;
        dateDeDebutDeLaPrestation: string;
        nomDuDestinataire: string;
        adresse: string;
        emisPar: string;
    }

    // Définition de l'interface pour les lignes de devis
    interface LigneDevis { 
        description: string; 
        prixUnitaire: number; 
        quantite: number; 
    }

    // Initialisation de l'état pour les données du formulaire
    const [formData, setFormData] = useState<SignUpState>({
        dateDuDevis: "",
        dateDeValiditeDuDevis: "",
        dateDeDebutDeLaPrestation: "",
        nomDuDestinataire: "",
        adresse: "",
        emisPar: ""
    });

    // Initialisation de l'état pour les lignes du devis
    const [lignesDevis, setLignesDevis] = useState<LigneDevis[]>([{ description: '', prixUnitaire: 0, quantite: 0 }]);

    // Utilisation de useNavigate pour la navigation
    const navigate = useNavigate(); 

    // Fonction pour gérer les changements dans les champs du formulaire principal
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const { name, value } = e.target; 
        setFormData((prevData) => ({ ...prevData, [name]: value })); // Met à jour l'état des données du formulaire
    };

    // Fonction pour gérer les changements dans les champs des lignes de devis
    const handleLigneChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => { 
        const { name, value } = e.target; 
        setLignesDevis((prevLignes) => { 
            const updatedLignes = [...prevLignes]; 
            updatedLignes[index] = { ...updatedLignes[index], [name]: name === "prixUnitaire" || name === "quantite" ? Number(value) : value }; 
            return updatedLignes; // Met à jour la ligne du devis modifiée
        });
    };

    // Fonction pour ajouter une nouvelle ligne de devis
    const addLigne = () => setLignesDevis([...lignesDevis, { description: '', prixUnitaire: 0, quantite: 0 }]);

    // Fonction pour supprimer une ligne de devis
    const removeLigne = (index: number) => setLignesDevis(lignesDevis.filter((_, i) => i !== index));

    // Fonction pour calculer les totaux du devis (HT, TVA, TTC)
    const calculateTotals = () => { 
        const totalHT = lignesDevis.reduce((sum, ligne) => sum + ligne.prixUnitaire * ligne.quantite, 0); 
        const tva = totalHT * 0.2; // TVA à 20%
        const totalTTC = totalHT + tva; 
        return { totalHT, tva, totalTTC }; // Retourne les totaux calculés
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); // Empêche le rechargement de la page
    };

    // Calcul des totaux pour afficher les informations de facturation
    const { totalHT, tva, totalTTC } = calculateTotals(); 

    return ( 
        <div className="container mx-auto p-4 "> 
            <section className="flex flex-col md:flex-row items-center mb-8">
                {/* Logo de l'entreprise */}
                <img src={Ordilan} alt="logo ordilan" className="h-40 mb-4 md:mb-0" />
                {/* Titre du devis */}
                <h1 className="text-4xl md:text-6xl text-center md:text-left md:ml-52 w-full">DEVIS N°</h1>
            </section>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Boucle pour générer les champs du formulaire avec leurs libellés */}
                {[
                    { label: "Date du Devis", name: "dateDuDevis" },
                    { label: "Date de Validité Du Devis", name: "dateDeValiditeDuDevis" },
                    { label: "Date du Début de la Prestation", name: "dateDeDebutDeLaPrestation" },
                    { label: "Nom du Destinataire", name: "nomDuDestinataire" },
                    { label: "Adresse", name: "adresse" },
                    { label: "Emis Par", name: "emisPar" }
                ].map(({ label, name }) => (
                    <div key={name} className="flex flex-col font-bold">
                        <label className="block mb-2">{label}</label>
                        <input
                            type={name.includes("date") ? "datetime-local" : "text"} // Définit le type de champ selon le nom
                            name={name}
                            value={formData[name as keyof SignUpState]}
                            onChange={handleChange}
                            className="border border-gray-950 rounded-3xl p-2 w-full"
                            required
                        />
                    </div>
                ))}
            </form>

            <section className="mt-8">
                <h2 className="text-xl font-bold">Détails du Devis</h2>
                <div className="overflow-x-auto ">
                    <table className="min-w-full ">
                        <thead>
                            {/* En-têtes du tableau des lignes de devis */}
                            <tr className="bg-blue-500 text-white">
                                <th className="border p-2">Description</th>
                                <th className="border p-2">Prix unitaire HT</th>
                                <th className="border p-2">Quantité</th>
                                <th className="border p-2">Total HT</th>
                                <th className="border p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Affichage des lignes de devis */}
                            {lignesDevis.map((ligne, index) => (
                                <tr key={index}>
                                    <td className="border p-2">
                                        {/* Champ pour la description de la ligne */}
                                        <input
                                            type="text"
                                            name="description"
                                            value={ligne.description}
                                            onChange={(e) => handleLigneChange(index, e)}
                                            className="border w-full"
                                        />
                                    </td>
                                    <td className="border p-2">
                                        {/* Champ pour le prix unitaire HT */}
                                        <input
                                            type="number"
                                            name="prixUnitaire"
                                            value={ligne.prixUnitaire}
                                            onChange={(e) => handleLigneChange(index, e)}
                                            className="border w-full text-center"
                                        />
                                    </td>
                                    <td className="border p-2 ">
                                        {/* Champ pour la quantité */}
                                        <input
                                            type="number"
                                            name="quantite"
                                            value={ligne.quantite}
                                            onChange={(e) => handleLigneChange(index, e)}
                                            className="border w-full text-center"
                                        />
                                    </td>
                                    <td className="border p-2 text-center">
                                        {/* Affichage du total HT de la ligne (prix unitaire * quantité) */}
                                        {(ligne.prixUnitaire * ligne.quantite).toFixed(2)} €
                                    </td>
                                    <td className="border p-2 text-center">
                                        {/* Bouton pour supprimer la ligne */}
                                        <button onClick={() => removeLigne(index)} className="bg-red-500 text-white rounded px-2 py-1">
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Bouton pour ajouter une ligne de devis */}
                <button
                    type="button"
                    onClick={addLigne}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Ajouter une ligne
                </button>
            </section>

            <div className="mt-4 flex justify-end">
                <div className="border-t border-blue-600 pt-4">
                    {/* Affichage des totaux : HT, TVA et TTC */}
                    {[
                        { label: "Total HT", value: totalHT },
                        { label: "TVA (20%)", value: tva },
                        { label: "Total TTC", value: totalTTC }
                    ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between pt-2">
                            <span>{label}:</span>
                            <span>{value.toFixed(2)} €</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex justify-between">
                {/* Bouton Retour qui ramène au menu */}
                <button type="button" onClick={() => navigate("/menu")} className="bg-blue-500 text-white py-2 px-4 rounded">
                    Retour
                </button>
                {/* Bouton pour soumettre le devis */}
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                    Soumettre le Devis
                </button>
            </div>
        </div>
    );
}

export default Devis;
