import React from 'react'

function Contactwhatsapp() {

    const phoneNumber = "237695848209";
    const message = "Bonjour ! Je suis intéressé par vos Bonbons Creamy Milk Candies 😋 que j'ai trouvé sur votre site web. Comment puis-je m'en procurer ?";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="lg:mr-10 flex lg:mt-0">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-3 font-semibold border border-red-500 bg-red-500 text-white rounded-lg hover:bg-white hover:text-red-500 transition sm:min-w-[200px] min-w-[150px] text-center justify-center">
                🛒 Commander
            </a>
        </div>
    )
}

export default Contactwhatsapp
