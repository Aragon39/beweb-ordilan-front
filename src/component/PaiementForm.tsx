import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

interface PaiementFormProps {
  clientName: string;
  price: number;
}

const PaiementForm: React.FC<PaiementFormProps> = ({ clientName, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage("Stripe n'est pas encore prêt. Veuillez patienter.");
      return;
    }

    setIsProcessing(true);
    setMessage(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setMessage("Erreur : élément de carte introuvable.");
      setIsProcessing(false);
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      console.log('Stripe Response:', { error, paymentMethod });

      // Si une erreur est retournée par Stripe
      if (error) {
        console.error('Erreur Stripe:', error);
        setMessage(`Erreur : ${error.message}`);
      } else if (paymentMethod) {
        // Si le paiement a réussi
        setMessage(`Paiement réussi pour ${clientName}! ID du paiement : ${paymentMethod.id}`);
        console.log('ID du paiement:', paymentMethod.id);
      }
    } catch (err) {
      console.error('Erreur générale:', err);
      setMessage("Une erreur s'est produite lors du paiement.");
    }

    setIsProcessing(false);
  };

  return (
    <div
      style={{
        padding: '40px',
        maxWidth: '700px',
        margin: 'auto',
        background: 'linear-gradient(135deg, #6e7bff, #ff6a00)',  // Nouveau fond dégradé dynamique
        borderRadius: '15px',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
        color: '#fff',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 'bold' }}>
        💳 Formulaire de Paiement
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2em', marginBottom: '30px' }}>
        Bonjour <span style={{ color: '#ffeb3b' }}>{clientName}</span>, veuillez entrer vos informations de
        paiement pour compléter votre achat.
      </p>

      {/* Affichage du prix */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
          Montant à payer : <span style={{ color: '#ffeb3b' }}>{price.toFixed(2)}€</span>
        </h3>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* Champs prénom et nom */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <label
              htmlFor="first-name"
              style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}
            >
              Prénom :
            </label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Prénom"
              style={{
                padding: '10px',
                fontSize: '16px',
                width: '100%',
                borderRadius: '8px',
                border: '1px solid #ddd',
                backgroundColor: '#f3f3f3',
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label
              htmlFor="last-name"
              style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}
            >
              Nom :
            </label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Nom"
              style={{
                padding: '10px',
                fontSize: '16px',
                width: '100%',
                borderRadius: '8px',
                border: '1px solid #ddd',
                backgroundColor: '#f3f3f3',
              }}
            />
          </div>
        </div>

        {/* CardElement pour la carte */}
        <div>
          <label
            htmlFor="card-element"
            style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}
          >
            Numéro de carte bancaire :
          </label>
          <div
            style={{
              border: '2px solid #fff',
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '18px',
                    color: '#32325d',
                    letterSpacing: '0.025em',
                    padding: '10px',
                    backgroundColor: '#fff',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                    fontFamily: 'Arial, sans-serif',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          style={{
            marginTop: '25px',
            padding: '15px 25px',
            backgroundColor: '#ffeb3b',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1.2em',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffca28'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
        >
          {isProcessing ? 'Traitement...' : 'Payer'}
        </button>
      </form>

      {/* Affichage des messages d'erreur ou de succès */}
      {message && (
        <p
          style={{
            marginTop: '20px',
            fontWeight: 'bold',
            fontSize: '1.2em',
            textAlign: 'center',
            color: message.includes('Erreur') ? 'red' : 'green',
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default PaiementForm;
