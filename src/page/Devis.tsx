import Ordilan from "../assets/image/Logo-ordilan-png-1024x295.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Devis() {
    interface SignUpState {
        dateDuDevis: string;
        dateDeValiditeDuDevis: string;
        dateDeDebutDeLaPrestation: string;
        nomDuDestinataire: string;
        adresse: string;
        emisPar: string;
    }

    interface LigneDevis {
        description: string;
        prixUnitaire: number;
        quantite: number;
    }

    const [formData, setFormData] = useState<SignUpState>({
        dateDuDevis: "",
        dateDeValiditeDuDevis: "",
        dateDeDebutDeLaPrestation: "",
        nomDuDestinataire: "",
        adresse: "",
        emisPar: "",
    });

    const [lignesDevis, setLignesDevis] = useState<LigneDevis[]>([{ description: '', prixUnitaire: 0, quantite: 0 }]);

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLigneChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLignesDevis((prevLignes) => {
            const updatedLignes = [...prevLignes];
            updatedLignes[index] = {
                ...updatedLignes[index],
                [name]: name === "prixUnitaire" || name === "quantite" ? Number(value) : value,
            };
            return updatedLignes;
        });
    };

    const addLigne = () => setLignesDevis([...lignesDevis, { description: '', prixUnitaire: 0, quantite: 0 }]);

    const removeLigne = (index: number) => setLignesDevis(lignesDevis.filter((_, i) => i !== index));

    const calculateTotals = () => {
        const totalHT = lignesDevis.reduce((sum, ligne) => sum + ligne.prixUnitaire * ligne.quantite, 0);
        const tva = totalHT * 0.2; // TVA à 20%
        const totalTTC = totalHT + tva;
        return { totalHT, tva, totalTTC };
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // Vérifiez si les champs obligatoires sont remplis
        if (!formData.nomDuDestinataire || !formData.adresse || lignesDevis.length === 0) {
            alert("Veuillez remplir tous les champs obligatoires !");
            return;
        }
    
        // Exemple de traitement des données
        const devisData = {
            formData,
            lignesDevis,
            totals: calculateTotals(),
        };
    
        console.log("Données du devis:", devisData);
    
        // Requête HTTP pour envoyer les données
        fetch('http://localhost:3306/api/devis', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(devisData),
        })
        .then(response => {
            if (response.ok) {
                return response.blob();
            }
            throw new Error('Erreur lors de la génération du PDF');
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'devis.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Erreur:', error));
    
        alert("Le devis a été soumis avec succès !");
        navigate("/menu"); // Redirige l'utilisateur après la soumission
    };
    const { totalHT, tva, totalTTC } = calculateTotals();

    return (
        <div className="container mx-auto p-4">
            <section className="flex flex-col md:flex-row items-center mb-8">
                <img src={Ordilan} alt="logo ordilan" className="h-40 mb-4 md:mb-0" />
                <h1 className="text-4xl md:text-6xl text-center md:text-left md:ml-52 w-full">DEVIS N°</h1>
            </section>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { label: "Date du Devis", name: "dateDuDevis" },
                        { label: "Date de Validité Du Devis", name: "dateDeValiditeDuDevis" },
                        { label: "Date du Début de la Prestation", name: "dateDeDebutDeLaPrestation" },
                        { label: "Nom du Destinataire", name: "nomDuDestinataire" },
                        { label: "Adresse", name: "adresse" },
                        { label: "Emis Par", name: "emisPar" },
                    ].map(({ label, name }) => (
                        <div key={name} className="flex flex-col font-bold">
                            <label className="block mb-2">{label}</label>
                            <input
                                type={name.includes("date") ? "datetime-local" : "text"}
                                name={name}
                                value={formData[name as keyof SignUpState]}
                                onChange={handleChange}
                                className="border border-gray-950 rounded-3xl p-2 w-full"
                                required
                            />
                        </div>
                    ))}
                </div>

                <section className="mt-8">
                    <h2 className="text-xl font-bold">Détails du Devis</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-blue-500 text-white">
                                    <th className="border p-2">Description</th>
                                    <th className="border p-2">Prix unitaire HT</th>
                                    <th className="border p-2">Quantité</th>
                                    <th className="border p-2">Total HT</th>
                                    <th className="border p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lignesDevis.map((ligne, index) => (
                                    <tr key={index}>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                name="description"
                                                value={ligne.description}
                                                onChange={(e) => handleLigneChange(index, e)}
                                                className="border w-full"
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <input
                                                type="number"
                                                name="prixUnitaire"
                                                value={ligne.prixUnitaire}
                                                onChange={(e) => handleLigneChange(index, e)}
                                                className="border w-full text-center"
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <input
                                                type="number"
                                                name="quantite"
                                                value={ligne.quantite}
                                                onChange={(e) => handleLigneChange(index, e)}
                                                className="border w-full text-center"
                                            />
                                        </td>
                                        <td className="border p-2 text-center">
                                            {(ligne.prixUnitaire * ligne.quantite).toFixed(2)} €
                                        </td>
                                        <td className="border p-2 text-center">
                                            <button
                                                onClick={() => removeLigne(index)}
                                                className="bg-red-500 text-white rounded px-2 py-1"
                                            >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
                        {[
                            { label: "Total HT", value: totalHT },
                            { label: "TVA (20%)", value: tva },
                            { label: "Total TTC", value: totalTTC },
                        ].map(({ label, value }) => (
                            <div key={label} className="flex justify-between pt-2">
                                <span>{label}:</span>
                                <span>{value.toFixed(2)} €</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex justify-between">
                    <button
                        type="button"
                        onClick={() => navigate("/menu")}
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Retour
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Soumettre le Devis
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Devis;
