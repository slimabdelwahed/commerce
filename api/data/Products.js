const products = [
    {
      name: "Smartphone XYZ",
      image: "api\data\images\phone.jpg",
      description: "Un smartphone de dernière génération avec un écran AMOLED et une autonomie de 48 heures.",
      rating: 4.5,
      price: 699,
      countInStock: 15,
      numReview: 10,
      reviews: [
        {
          name: "Jean Dupont",
          rating: 5,
          comment: "Excellent téléphone avec une superbe qualité d'écran !",
          user: "643f1b5d7e7b6c2f77a4d234"
        }
      ]
    },
    {
      name: "Ordinateur portable ABC",
      image: "api\data\images\abc.jpg",
      description: "Ordinateur portable avec processeur Intel i7, 16 Go de RAM et SSD 512 Go.",
      rating: 4.2,
      price: 1200,
      countInStock: 8,
      numReview: 8,
      reviews: [
        {
          name: "Alice Martin",
          rating: 4,
          comment: "Très rapide, mais l'autonomie de la batterie pourrait être meilleure.",
          user: "643f1b5d7e7b6c2f77a4d235"
        }
      ]
    },
    {
      name: "Écouteurs sans fil PRO",
      image: "api\data\images\beats-fit-pro.jpg",
      description: "Écouteurs avec réduction active du bruit et autonomie de 10 heures.",
      rating: 4.7,
      price: 149,
      countInStock: 30,
      numReview: 25,
      reviews: [
        {
          name: "Marc Dupuis",
          rating: 5,
          comment: "Le son est incroyable et l'annulation de bruit fonctionne très bien !",
          user: "643f1b5d7e7b6c2f77a4d236"
        }
      ]
    },
    {
      name: "Montre connectée Zeta",
      image: "api\data\images\smartmo.jpg",
      description: "Montre connectée avec suivi des activités sportives et capteur de fréquence cardiaque.",
      rating: 4.3,
      price: 199,
      countInStock: 12,
      numReview: 18,
      reviews: [
        {
          name: "Sophie Leblanc",
          rating: 4,
          comment: "Très pratique pour le sport, mais l'interface pourrait être améliorée.",
          user: "643f1b5d7e7b6c2f77a4d237"
        }
      ]
    },
    {
      name: "Tablette UltraTab 10",
      image: "api\data\images\tablette.jpeg",
      description: "Tablette 10 pouces avec écran haute résolution et 128 Go de stockage.",
      rating: 4.6,
      price: 499,
      countInStock: 20,
      numReview: 12,
      reviews: [
        {
          name: "Paul Durand",
          rating: 5,
          comment: "Excellente tablette, rapide et l'écran est magnifique !",
          user: "643f1b5d7e7b6c2f77a4d238"
        }
      ]
    },
    {
      name: "Casque de réalité virtuelle VRX",
      image: "api\data\images\Fonction-casque-de-realite-virtuelle.jpg",
      description: "Casque VR avec un champ de vision de 110 degrés et support pour la réalité augmentée.",
      rating: 4.8,
      price: 299,
      countInStock: 5,
      numReview: 30,
      reviews: [
        {
          name: "Lucie Bernard",
          rating: 5,
          comment: "Immersion totale, l'expérience VR est vraiment bluffante.",
          user: "643f1b5d7e7b6c2f77a4d239"
        }
      ]
    },
    {
      name: "Caméra Reflex Pro",
      image: "api\data\images\camera.jpg",
      description: "Caméra reflex avec capteur 24MP et vidéo 4K.",
      rating: 4.6,
      price: 999,
      countInStock: 10,
      numReview: 45,
      reviews: [
        {
          name: "Pierre Lefevre",
          rating: 5,
          comment: "Excellente qualité d'image et prise en main facile.",
          user: "643f1b5d7e7b6c2f77a4d240"
        }
      ]
    },
    {
      name: "Casque Audio HD",
      image: "api\data\images\csqu.jpg",
      description: "Casque audio haute définition avec son stéréo.",
      rating: 4.4,
      price: 199,
      countInStock: 25,
      numReview: 35,
      reviews: [
        {
          name: "Elodie Dubois",
          rating: 4,
          comment: "Le son est bon, mais le confort pourrait être amélioré.",
          user: "643f1b5d7e7b6c2f77a4d241"
        }
      ]
    },
    {
      name: "Drone Quadcopter X1",
      image: "api\data\images\drone.jpg",
      description: "Drone avec caméra 1080p et autonomie de 30 minutes.",
      rating: 4.7,
      price: 499,
      countInStock: 12,
      numReview: 28,
      reviews: [
        {
          name: "Antoine Durand",
          rating: 5,
          comment: "Très facile à piloter et les vidéos sont superbes.",
          user: "643f1b5d7e7b6c2f77a4d242"
        }
      ]
    },
    {
      name: "Projecteur Home Cinema",
      image: "api\data\images\projec.jpg",
      description: "Projecteur 4K avec une luminosité de 3000 lumens.",
      rating: 4.8,
      price: 799,
      countInStock: 8,
      numReview: 60,
      reviews: [
        {
          name: "Nathalie Moreau",
          rating: 5,
          comment: "Parfait pour les soirées cinéma à la maison !",
          user: "643f1b5d7e7b6c2f77a4d243"
        }
      ]
    },
    {
      name: "Appareil photo compact X100",
      image: "api\data\images\photo.jpg",
      description: "Appareil photo compact avec zoom optique 10x.",
      rating: 4.3,
      price: 349,
      countInStock: 18,
      numReview: 22,
      reviews: [
        {
          name: "Laurent Richard",
          rating: 4,
          comment: "Bonne qualité d'image, idéal pour les voyages.",
          user: "643f1b5d7e7b6c2f77a4d244"
        }
      ]
    },
    {
      name: "Téléviseur 4K Ultra HD 55 pouces",
      image: "api\data\images\tv.jpg",
      description: "Téléviseur 4K avec HDR10 et assistant vocal intégré.",
      rating: 4.7,
      price: 1299,
      countInStock: 6,
      numReview: 50,
      reviews: [
        {
          name: "Claire Lemoine",
          rating: 5,
          comment: "Qualité d'image époustouflante, parfaite pour les films et les jeux.",
          user: "643f1b5d7e7b6c2f77a4d245"
        }
      ]
    },
    {
      name: "Clavier mécanique RGB",
      image: "api\data\images\clavier.jpg",
      description: "Clavier mécanique avec rétroéclairage RGB personnalisable.",
      rating: 4.5,
      price: 149,
      countInStock: 30,
      numReview: 40,
      reviews: [
        {
          name: "Victor Fabre",
          rating: 4,
          comment: "Très agréable à utiliser, mais un peu bruyant.",
          user: "643f1b5d7e7b6c2f77a4d246"
        }
      ]
    },
    {
      name: "Souris gaming ultra-précise",
      image: "api\data\images\souris.jpg",
      description: "Souris avec capteur optique 16000 DPI et boutons programmables.",
      rating: 4.6,
      price: 99,
      countInStock: 40,
      numReview: 55,
      reviews: [
        {
          name: "Marie Leroy",
          rating: 5,
          comment: "Très réactive et parfaite pour les jeux FPS.",
          user: "643f1b5d7e7b6c2f77a4d247"
        }
      ]
    },
    {
      name: "Imprimante Multifonction",
      image: "api\data\images\R.jpg",
      description: "Imprimante tout-en-un avec scanner et Wi-Fi.",
      rating: 4.2,
      price: 129,
      countInStock: 22,
      numReview: 20,
      reviews: [
        {
          name: "Pascal Bernard",
          rating: 4,
          comment: "Facile à installer, mais un peu lente pour les impressions photo.",
          user: "643f1b5d7e7b6c2f77a4d248"
        }
      ]
    },
    {
      name: "Station d'accueil USB-C",
      image: "api\data\images\station.jpg",
      description: "Station d'accueil avec ports HDMI, USB et Ethernet.",
      rating: 4.3,
      price: 79,
      countInStock: 15,
      numReview: 18,
      reviews: [
        {
          name: "Jean-Pierre Dubois",
          rating: 4,
          comment: "Très pratique pour connecter plusieurs périphériques.",
          user: "643f1b5d7e7b6c2f77a4d249"
        }
      ]
    },
    {
      name: "Chargeur sans fil rapide",
      image: "api\data\images\charg.jpg",
      description: "Chargeur sans fil compatible avec la recharge rapide Qi.",
      rating: 4.6,
      price: 39,
      countInStock: 50,
      numReview: 32,
      reviews: [
        {
          name: "Julie Martin",
          rating: 5,
          comment: "Recharge rapide et pratique, même avec une coque de protection.",
          user: "643f1b5d7e7b6c2f77a4d250"
        }
      ]
    },
    {
      name: "Smartwatch Sport Pro",
      image: "api\data\images\smartsport.jpg",
      description: "Montre connectée avec GPS intégré et suivi de la fréquence cardiaque.",
      rating: 4.4,
      price: 299,
      countInStock: 14,
      numReview: 27,
      reviews: [
        {
          name: "Hélène Robert",
          rating: 4,
          comment: "Excellente pour les activités sportives, mais l'autonomie pourrait être meilleure.",
          user: "643f1b5d7e7b6c2f77a4d251"
        }
      ]
    },
    {
      name: "Système de sécurité sans fil",
      image: "api\data\images\security.jpg",
      description: "Système de surveillance avec caméras HD et détection de mouvement.",
      rating: 4.7,
      price: 599,
      countInStock: 10,
      numReview: 35,
      reviews: [
        {
          name: "Denis Simon",
          rating: 5,
          comment: "Installation facile et excellente qualité vidéo.",
          user: "643f1b5d7e7b6c2f77a4d252"
        }
      ]
    },
    {
      name: "Aspirateur robot intelligent",
      image: "api\data\images\robot.jpg",
      description: "Aspirateur robot avec capteurs de navigation et compatibilité avec assistant vocal.",
      rating: 4.8,
      price: 349,
      countInStock: 7,
      numReview: 58,
      reviews: [
        {
          name: "Yannick Gauthier",
          rating: 5,
          comment: "Très performant, il fait tout le travail tout seul !",
          user: "643f1b5d7e7b6c2f77a4d253"
        }
      ]
    },
    {
      name: "Barre de son Bluetooth",
      image: "api\data\images\son.jpg",
      description: "Barre de son avec connectivité Bluetooth et son surround 3D.",
      rating: 4.5,
      price: 299,
      countInStock: 12,
      numReview: 40,
      reviews: [
        {
          name: "Sylvie Petit",
          rating: 5,
          comment: "Le son est incroyable, parfait pour regarder des films.",
          user: "643f1b5d7e7b6c2f77a4d254"
        }
      ]
    },
    {
      name: "Routeur Wi-Fi 6 Pro",
      image: "api\data\images\roteur.jpg",
      description: "Routeur Wi-Fi 6 avec technologie MU-MIMO pour une connexion rapide et stable.",
      rating: 4.6,
      price: 229,
      countInStock: 18,
      numReview: 48,
      reviews: [
        {
          name: "Arnaud Blanchard",
          rating: 5,
          comment: "Très bonne couverture et vitesse, même dans une grande maison.",
          user: "643f1b5d7e7b6c2f77a4d255"
        }
      ]
    },
    {
      name: "Enceinte Bluetooth Portable",
      image: "api\data\images\musique.jpg",
      description: "Enceinte Bluetooth étanche avec 12 heures d'autonomie.",
      rating: 4.7,
      price: 149,
      countInStock: 25,
      numReview: 65,
      reviews: [
        {
          name: "Sophie Martin",
          rating: 5,
          comment: "Super son pour une si petite taille, et elle est très robuste.",
          user: "643f1b5d7e7b6c2f77a4d256"
        }
      ]
    },
    {
      name: "Lecteur Blu-ray Ultra HD",
      image: "api\data\images\bd-mp4k_b.jpg",
      description: "Lecteur Blu-ray avec support pour Dolby Vision et HDR10.",
      rating: 4.3,
      price: 179,
      countInStock: 10,
      numReview: 22,
      reviews: [
        {
          name: "Philippe Giraud",
          rating: 4,
          comment: "Bonne qualité vidéo, mais un peu lent au démarrage.",
          user: "643f1b5d7e7b6c2f77a4d257"
        }
      ]
    },
    {
      name: "Moniteur 4K 27 pouces",
      image: "api\data\images\pouces.jpg",
      description: "Moniteur avec résolution 4K et 144Hz pour une expérience de jeu immersive.",
      rating: 4.8,
      price: 499,
      countInStock: 15,
      numReview: 50,
      reviews: [
        {
          name: "Lucas Bernard",
          rating: 5,
          comment: "La fluidité et la netteté sont impressionnantes, parfait pour le gaming.",
          user: "643f1b5d7e7b6c2f77a4d258"
        }
      ]
    },
    {
      name: "Climatiseur Portable",
      image: "api\data\images\climatiseur.jpg",
      description: "Climatiseur portable avec fonction déshumidificateur et télécommande.",
      rating: 4.2,
      price: 399,
      countInStock: 8,
      numReview: 30,
      reviews: [
        {
          name: "Monique Laurent",
          rating: 4,
          comment: "Très efficace, mais un peu bruyant à pleine puissance.",
          user: "643f1b5d7e7b6c2f77a4d259"
        }
      ]
    },
    {
      name: "Caméscope HD Compact",
      image: "api\data\images\compact.jpg",
      description: "Caméscope HD avec zoom optique 20x et stabilisateur d'image intégré.",
      rating: 4.5,
      price: 299,
      countInStock: 10,
      numReview: 18,
      reviews: [
        {
          name: "François Millet",
          rating: 5,
          comment: "Très bon pour capturer des vidéos de haute qualité lors de mes voyages.",
          user: "643f1b5d7e7b6c2f77a4d260"
        }
      ]
    },
    {
      name: "Sèche-cheveux Pro",
      image: "api\data\images\seche.jpg",
      description: "Sèche-cheveux professionnel avec moteur puissant et technologie ionique.",
      rating: 4.4,
      price: 129,
      countInStock: 20,
      numReview: 25,
      reviews: [
        {
          name: "Isabelle Fournier",
          rating: 5,
          comment: "Puissant et silencieux, il fait le travail rapidement.",
          user: "643f1b5d7e7b6c2f77a4d261"
        }
      ]
    },
    {
      name: "Lampe de Bureau LED",
      image: "api\data\images\lampe.jpg",
      description: "Lampe de bureau LED avec contrôle tactile et luminosité réglable.",
      rating: 4.6,
      price: 59,
      countInStock: 50,
      numReview: 30,
      reviews: [
        {
          name: "Michel Dupuy",
          rating: 4,
          comment: "Éclairage agréable et design moderne.",
          user: "643f1b5d7e7b6c2f77a4d262"
        }
      ]
    },
    {
      name: "Tondeuse à cheveux Pro",
      image: "api\data\images\tendeuse.jpg",
      description: "Tondeuse à cheveux avec réglage de la longueur et batterie longue durée.",
      rating: 4.7,
      price: 89,
      countInStock: 25,
      numReview: 42,
      reviews: [
        {
          name: "Bernard Lemoine",
          rating: 5,
          comment: "Très précise et facile à utiliser, parfaite pour les coupes à domicile.",
          user: "643f1b5d7e7b6c2f77a4d263"
        }
      ]
    },
    {
      name: "Montre connectée Luxe",
      image: "api\data\images\montrelux.jpg",
      description: "Montre connectée haut de gamme avec écran AMOLED et design élégant.",
      rating: 4.9,
      price: 699,
      countInStock: 5,
      numReview: 60,
      reviews: [
        {
          name: "Camille Morel",
          rating: 5,
          comment: "Le luxe à l'état pur, avec toutes les fonctionnalités connectées.",
          user: "643f1b5d7e7b6c2f77a4d264"
        }
      ]
    },
    {
      name: "Table de mixage DJ",
      image: "api\data\images\mix.jpg",
      description: "Table de mixage professionnelle avec effets intégrés et compatibilité USB.",
      rating: 4.8,
      price: 799,
      countInStock: 6,
      numReview: 35,
      reviews: [
        {
          name: "Alexandre Marchal",
          rating: 5,
          comment: "Super pour les mix en soirée, qualité audio impeccable.",
          user: "643f1b5d7e7b6c2f77a4d265"
        }
      ]
    },
    {
      name: "Ventilateur colonne silencieux",
      image: "api\data\images\vontilateur.jpg",
      description: "Ventilateur colonne avec télécommande et mode silencieux.",
      rating: 4.3,
      price: 99,
      countInStock: 20,
      numReview: 18,
      reviews: [
        {
          name: "Gérard Fabre",
          rating: 4,
          comment: "Très efficace et silencieux, parfait pour la chambre.",
          user: "643f1b5d7e7b6c2f77a4d267"
        }
      ]
    },
    {
      name: "Machine à café automatique",
      image: "api\data\images\cafe.jpg",
      description: "Machine à café avec broyeur intégré et écran tactile.",
      rating: 4.7,
      price: 499,
      countInStock: 10,
      numReview: 50,
      reviews: [
        {
          name: "Marie Lopez",
          rating: 5,
          comment: "Le café est délicieux, et la machine est très facile à utiliser.",
          user: "643f1b5d7e7b6c2f77a4d268"
        }
      ]
    },
    {
      name: "Brosse à dents électrique",
      image: "api\data\images\brosse.jpg",
      description: "Brosse à dents électrique avec 5 modes de brossage et minuteur intégré.",
      rating: 4.5,
      price: 59,
      countInStock: 30,
      numReview: 42,
      reviews: [
        {
          name: "Sophie Lambert",
          rating: 5,
          comment: "Très efficace, je sens la différence en quelques jours d'utilisation.",
          user: "643f1b5d7e7b6c2f77a4d269"
        }
      ]
    },
    {
      name: "Pèse-personne connecté",
      image: "api\data\images\kg.jpg",
      description: "Balance connectée avec suivi du poids, de la masse graisseuse et de l'IMC.",
      rating: 4.4,
      price: 49,
      countInStock: 20,
      numReview: 15,
      reviews: [
        {
          name: "Paul Leroy",
          rating: 5,
          comment: "Super pour suivre mes progrès, l'application est très intuitive.",
          user: "643f1b5d7e7b6c2f77a4d271"
        }
      ]
    },
    {
      name: "Trottinette électrique",
      image: "api\data\images\trotinette.jpg",
      description: "Trottinette électrique avec autonomie de 25 km et pliage rapide.",
      rating: 4.5,
      price: 499,
      countInStock: 12,
      numReview: 38,
      reviews: [
        {
          name: "Julien Blanc",
          rating: 5,
          comment: "Très pratique pour les trajets en ville, bonne autonomie.",
          user: "643f1b5d7e7b6c2f77a4d272"
        }
      ]
    },
    {
      name: "Imprimante 3D Pro",
      image: "api\data\images\troisD.jpg",
      description: "Imprimante 3D haute précision avec support pour plusieurs matériaux.",
      rating: 4.7,
      price: 749,
      countInStock: 5,
      numReview: 25,
      reviews: [
        {
          name: "Nicolas Perrin",
          rating: 5,
          comment: "Impression de haute qualité, idéale pour les projets personnels et professionnels.",
          user: "643f1b5d7e7b6c2f77a4d273"
        }
      ]
    },
    {
      name: "Caméra de surveillance extérieure",
      image: "api\data\images\surveillence.jpg",
      description: "Caméra de sécurité extérieure avec vision nocturne et détection de mouvement.",
      rating: 4.6,
      price: 199,
      countInStock: 10,
      numReview: 30,
      reviews: [
        {
          name: "Pierre Lafont",
          rating: 4,
          comment: "Bonne qualité d'image et facile à installer, mais l'application pourrait être améliorée.",
          user: "643f1b5d7e7b6c2f77a4d274"
        }
      ]
    },
    {
      name: "Console de jeu 8K",
      image: "api\data\images\console.jpeg",
      description: "Console de jeu dernière génération avec support 8K et ray tracing.",
      rating: 4.9,
      price: 699,
      countInStock: 4,
      numReview: 100,
      reviews: [
        {
          name: "Lucas Girard",
          rating: 5,
          comment: "Graphismes à couper le souffle, expérience de jeu incroyable.",
          user: "643f1b5d7e7b6c2f77a4d275"
        }
      ]
    }
  ];

  
  module.exports = products;