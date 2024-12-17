import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Menu: React.FC = () => {
    // Crée une référence pour accéder au canevas HTML
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Récupère l'élément canvas à partir de la référence
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Récupère le contexte 2D du canevas
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Définit la taille du canevas pour remplir toute la fenêtre
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        // Crée les étoiles avec des propriétés aléatoires
        const stars = Array.from({ length: 3500 }).map(() => ({
            x: Math.random() * canvas.width,  // Position x
            y: Math.random() * canvas.height, // Position y
            radius: Math.random() * 2,        // Rayon de l'étoile
            speed: Math.random() * 0.8 + 0.8, // Vitesse
            z: Math.random() * canvas.width,  // Effet de profondeur
            color: `hsl(${Math.random() * 360}, 100%, ${Math.random() * 50 + 50}%)` // Couleur aléatoire
        }));

        // Fonction pour animer les étoiles
        const animateStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canevas

            stars.forEach(star => {
                // Calcul de perspective pour un effet 3D
                const perspective = 200 / (star.z + 200);
                const x = (star.x - canvas.width / 2) * perspective + canvas.width / 2;
                const y = (star.y - canvas.height / 2) * perspective + canvas.height / 2;
                const radius = star.radius * perspective;

                // Dessine chaque étoile
                ctx.fillStyle = star.color;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();

                // Met à jour la position des étoiles pour créer l'illusion de mouvement
                star.y += star.speed;

                // Réinitialise la position des étoiles lorsqu'elles sortent de l'écran
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });

            // Demande la prochaine image d'animation
            requestAnimationFrame(animateStars);
        };

        animateStars();

        // Met à jour la taille du canevas lorsque la fenêtre est redimensionnée
        window.addEventListener('resize', resizeCanvas);

    }, []);

    const handleLogout = () => {
        // Supprimez les données d'authentification, par exemple, supprimez le token
        localStorage.removeItem('authToken');
        
        navigate('/');
    };

    return (
        <nav className="flex items-center justify-center min-h-screen bg-black relative">
            {/* Canevas pour les étoiles en arrière-plan */}
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />

            <div className="flex flex-col items-center space-y-5 p-7 relative max-w-lg w-full">

                {/* Section pour chaque lien de menu */}
                <section id="fiche-clients" className="flex justify-center w-full">
                    <Link
                        to="/ficheclients"
                        className="border border-gray-950 text-5xl p-3 rounded-3xl text-center bg-gradient-to-r from-black to-blue-500 text-accent-50 w-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                        Fiche Client
                    </Link>
                </section>
                
                <section id="liste-clients" className="flex justify-center w-full">
                    <Link
                        to="/listeclients"
                        className="border border-gray-950 text-5xl p-3 rounded-3xl text-center bg-gradient-to-r from-black to-blue-500 text-accent-50 w-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                        Liste Clients
                    </Link>
                </section>

                <section id="Historique-clients" className="flex justify-center w-full">
                    <Link
                        to="/Historiqueclients"
                        className="border border-gray-950 text-5xl p-3 rounded-3xl text-center bg-gradient-to-r from-black to-blue-500 text-accent-50 w-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                        Historique Clients
                    </Link>
                </section>

                <section id="Devis" className="flex justify-center w-full">
                    <Link
                        to="/Devis"
                        className="border border-gray-950 text-5xl p-3 rounded-3xl text-center bg-gradient-to-r from-black to-blue-500 text-accent-50 w-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                        Devis
                    </Link>
                </section>

                <section id="PaiementForm" className="flex justify-center w-full">
                    <Link
                        to="/PaiementForm"
                        className="border border-gray-950 text-5xl p-3 rounded-3xl text-center bg-gradient-to-r from-black to-blue-500 text-accent-50 w-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                        Paiement
                    </Link>
                </section>

                {/* Bouton de déconnexion */}
                <section id='Deconnection' className='flex justify-center w-full'>
                    <button
                        onClick={handleLogout}
                        className='border border-gray-950 text-5xl rounded-r-3xl p-3 text-center bg-gradient-to-r from-black to-blue-500 text-accent-50 w-full shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2'>
                        Déconnexion
                    </button>
                </section>

            </div>
        </nav>
    );
};

export default Menu;
