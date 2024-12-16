
import axios from 'axios';

export interface SignUpState {
  id?: number;
  nom: string;
  prenom: string;
  dateEtHeureDeDebut: string;
  dateEtHeureDeFin: string;
  email: string;
  adresse: string;
  CodePostal: string;
  telephone: string;
  observation: string;
  natureDeLintervention: string;
  descriptions: string;
  materiels: string;
  marqueDeLaMachine: string;
  etat: string;
  intervenant: string;
}

export interface Client {
  id: number;
  nom: string;
  prenom: string;
  dateEtHeureDeDebut: string;
  dateEtHeureDeFin: string;
  email: string;
  adresse: string;
  CodePostal: string;
  telephone: string;
  observation: string;
  natureDeLintervention: string;
  descriptions: string;
  materiels: string;
  marqueDeLaMachine: string;
  etat: string;
  intervenant: string;
}

// URL de l'API Backend sur le port 3306
const API_URL = "http://localhost:3306/api/clients";  // Corriger ici le port à 3006

// Créer un client
export const createClient = async (clientData: SignUpState) => {
  console.log("Données envoyées au serveur:", clientData); // Ajoutez cette ligne pour déboguer
  try {
    const response = await axios.post<Client>(API_URL, clientData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Erreur spécifique à Axios, on peut récupérer des informations détaillées
      console.error("Erreur lors de la création du client:", error.response?.data);
      throw new Error(error.response?.data?.message || "Erreur inconnue");
    } else {
      // Erreur générique
      console.error("Erreur lors de la création du client:", error);
      throw error;
    }
  }
};
// Récupérer un client par ID
export const fetchClientById = async (id: number) => {
  try {
    const response = await axios.get<Client>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du client", error);
    throw error;
  }
};

// Mettre à jour un client
export const updateClient = async (id: number, clientData: SignUpState) => {
  try {
    const response = await axios.put<Client>(`${API_URL}/${id}`, clientData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du client", error);
    throw error;
  }
};

// Récupérer la liste des clients
export const fetchClients = async () => {
  try {
    const response = await axios.get<Client[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de la liste des clients", error);
    throw error;
  }
};

// Supprimer un client par ID
export const deleteClient = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Erreur lors de la suppression du client", error);
    throw error;
  }
};
