import React from 'react';
import Logo from './assets/image/connection.png'
const Connection: React.FC = () => {
    return (

        <div className="flex items-center justify-center h-screen  ">
            <img className="w-1/2 h-auto rounded-lg border-2 border-gray-300 " src={Logo} alt='logo de connection'/>

        </div>
    );
};

export default Connection;