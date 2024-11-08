// services/clientService.ts
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
  natureDeLintervention:string;
  descriptions:string;
  materiels: string;
  marqueDeLaMachine: string;
  etat: string;
  intervenant: string
}

export interface Client {
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
  natureDeLintervention:string;
  descriptions:string;
  materiels: string;
  marqueDeLaMachine: string;
  etat: string;
  intervenant: string
}

const API_URL = "http://localhost:3000/clients";

// Créer un client
export const createClient = async (clientData: SignUpState) => {
  return axios.post(API_URL, clientData);
};

// Récupérer un client par ID
export const fetchClientById = async (id: number) => {
  return axios.get<Client>(`${API_URL}/${id}`);
};

// Mettre à jour un client
export const updateClient = async (id: number, clientData: SignUpState) => {
  return axios.put(`${API_URL}/${id}`, clientData);
};

// Récupérer la liste des clients
export const fetchClients = async () => {
  return axios.get<Client[]>(API_URL);
};

// Supprimer un client par ID
export const deleteClient = async (id: number) => {
  return axios.delete(`${API_URL}/${id}`);
};
