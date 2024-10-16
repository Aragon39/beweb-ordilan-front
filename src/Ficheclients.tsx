import imagefond from './assets/image/fiche client.jpeg';
import Ordilan from './assets/image/Logo-ordilan-png-1024x295.png';

function Ficheclients() {
    return (
        <div>
            <img src={imagefond} alt='image de fond' className='object-center  absolute inset-0 w-full h-full '/>
            <img src={Ordilan} alt='logo Ordilan' className='absolute h-40 top-2.5'/>
            <h1 className='absolute right-20 text-6xl top-16 text-black'>Fiche Client</h1>

            <form
                className='mt-60 flex relative gap-x-8 '> {/* Utilisation de flex pour créer deux colonnes avec un espace horizontal */}
                <div className='flex flex-col space-y-4 w-1/2'> {/* Colonne gauche prenant 50% de la largeur */}

                    <label className="block px-3"> {/* Label pour le champ de nom */}

                        <input type="text" name="name"
                               className='border border-gray-950 rounded-3xl p-2 w-11/12 mt-1 font-bold  '
                               placeholder="Nom et Prénom"/>
                    </label>
                    <label className="block px-3"> {/* Label pour le champ de téléphone */}
                        <input type="text" name="telephone"
                               className='border border-gray-950 rounded-3xl p-2 w-11/12 mt-1 font-bold'
                               placeholder='Téléphone'/>
                    </label>
                    <label className="block px-3"> {/* Label pour l'adresse */}
                        <input type="text" name="address"
                               className='border border-gray-950 rounded-3xl p-2 w-11/12 mt-1 font-bold'
                               placeholder="Adresse"/>
                    </label>
                </div>

                <div className='flex flex-col space-y-4 w-1/2'> {/* Colonne droite prenant 50% de la largeur */}
                    <label className="block px-3"> {/* Label pour le champ de date */}
                        <input type="text" name="date"
                               className='border border-gray-950 rounded-2xl p-2 w-full mt-1 font-bold '
                               placeholder='date'/>
                    </label>
                    <label className="block px-3"> {/* Champ de saisie supplémentaire */}
                        <input type="email" name="email"
                               className='border border-gray-950 rounded-2xl p-2 w-full mt-1 font-bold'
                               placeholder='Email'/>
                    </label>
                    <label className="block px-3"> {/* Champ de saisie supplémentaire */}
                        <input type='text' name="types de matériels"
                               className='border border-gray-950 rounded-2xl p-2 w-full mt-1 font-bold'
                               placeholder='Types de Matériel'/>
                    </label>
                </div>
            </form>

            <div className=' absolute w-full mt-2 px-3'>
                <div className='bg-gray-50  p-1 rounded-lg w-full flex flex-wrap gap-8 mt-12 border border-red-950 '>

                    <p className="font-bold text-xl">État de Matériel</p>

                    <label className='flex items-center ml-auto font-bold text-xl '>
                        <input type="checkbox" name="excellent" value="excellent" className='mr-2'/>
                        Excellent
                    </label>
                    <label className='flex items-center ml-auto font-bold text-xl'>
                        <input type="checkbox" name="correct" value="correct" className='mr-2'/>
                        Correct
                    </label>
                    <label className='flex items-center ml-auto font-bold text-xl'>
                        <input type="checkbox" name="bon" value="bon" className='mr-2'/>
                        Bon
                    </label>
                    <label className='flex items-center  ml-auto font-bold text-xl'>
                        <input type="checkbox" name="mauvais" value="mauvais" className='mr-2'/>
                        Mauvais
                    </label>
                    <label className='flex items-center ml-auto font-bold text-xl'>
                        <input type="checkbox" name="tres_mauvais" value="tres_mauvais" className='mr-2'/>
                        Très mauvais
                    </label>

                </div>
            </div>

        </div>

    );
}

export default Ficheclients;