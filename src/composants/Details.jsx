import React, { useState } from "react";
import Contactwhatsapp from "./Contactwhatsapp";

const packages = {
    pack1: {
        name: "Nanopack : 3 Bonbons",
        image: "./Gallery/nanopack.jpg",
        price: "100 XAF"
    },
    pack2: {
        name: "Minipack : 15 Bonbons",
        image: "./Gallery/minipack.jpg",
        price: "500 XAF"
    },
    pack3: {
        name: "Mediumpack : 30 Bonbons",
        image: "./Gallery/mediumpack.jpg",
        price: "1000 XAF"
    },
    pack4: {
        name: "Superpack : 340 Bonbons",
        image: "./Gallery/superpack.jpg",
        price: "10.000 XAF"
    }
};

function Details() {
    const [selectedPack, setSelectedPack] = useState("pack1");
    const currentPack = packages[selectedPack];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                {/* Image Section */}
                <div className="flex justify-center items-start mt-10">
                    <img
                        src={currentPack.image}
                        alt={currentPack.name}
                        className="w-full max-w-2xl max-h-[750px] rounded-2xl shadow-md transform transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Product Info Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Bonbons de Creamy Milk Candies
                    </h1>

                    <h3 className="text-xl font-bold text-gray-900">
                        Choisissez votre pack :
                    </h3>

                    {/* Select packaging with responsive buttons */}
                    <div className="flex flex-wrap gap-4">
                        {Object.entries(packages).map(([key, pack]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedPack(key)}
                                className={`flex-1 min-w-[120px] md:flex-none md:w-auto px-4 py-2 rounded-md text-sm font-semibold border transition
                ${selectedPack === key
                                        ? "bg-red-600 text-white border-red-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {pack.name}
                            </button>
                        ))}
                    </div>


                    <div className="flex items-center gap-0.5 text-red-700">
                        <p className="text-3xl text-red-600 font-semibold mr-10">
                            {currentPack.price}
                        </p>
                        {"⭐".repeat(5).split("").map((star, index) => (
                            <span key={index} className="text-xl">{star}</span>
                        ))}
                    </div>

                    <p className="text-gray-700 text-base">
                        Jouissez de l'authenticité de nos bonbons et à bon prix...
                    </p>

                    <ul className="list-disc list-inside text-gray-600 text-sm">
                        <li>Parfait compromis entre gourmandise et douceur, sans être trop sucré ni trop collant.</li>
                        <li>Expérience authentique asiatique : tellement courant dans la culture, il offre un vrai voyage gustatif.</li>
                        <li>Partage convivial : sa taille généreuse convient à offrir ou savourer à plusieurs.</li>
                        <li>Qualité maîtrisée : lait premium, absence de conservateurs artificiels, ingrédients reconnus.</li>
                        <li>Idéal pour les nostalgiques : replongez dans votre enfance ou découvrez un classique.</li>
                    </ul>

                    <p className="text-3xl text-red-600 font-bold uppercase">ingredients</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                        <li>Sirop de maïs</li>
                        <li>Sucre</li>
                        <li>Lait concentré sucré (sucre, lait entier en poudre, eau)</li>
                        <li>Lait entier en poudre</li>
                        <li>Huile végétale raffinée (huile de palmiste raffinée, huile de palme raffinée)</li>
                        <li>Beurre</li>
                        <li>Gélatine</li>
                        <li>Arômes artificiels (arôme de lait, arôme de beurre)</li>
                        <li>Lécithine de soja</li>
                        <li>Sel</li>
                    </ul>


                    <Contactwhatsapp selectedPack={selectedPack} />
                </div>
            </div>
        </div>
    );
}

export default Details;
