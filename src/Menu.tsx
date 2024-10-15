
import Fond from './assets/image/Fond Circuit électronique.png'; // Assurez-vous que le chemin est correct

function Menu() {
    return (
        <div className='flex items-center justify-center h-screen overflow-hidden '>
        <img src={Fond} alt="image de fond" className='object-center w-full max-h-full'/>
        </div>
    );
}

export default Menu; // Correction de l'exportation par défaut