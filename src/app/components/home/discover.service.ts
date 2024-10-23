import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DiscoverService {

  constructor() { }

  discoversadventure: any[] = [
    {
      id: 1,
      title: 'The Nile',
      imgs: [
        'nile2.jpg',
        'nile1.jpg',
        'nile3.jpg',
        'nile4.jpg'
      ],
      description: 'The Nile River is Egypt lifeblood, sustaining its civilization for centuries. It flows from south to north, providing vital resources that shaped ancient cultures.',
      features: [
        'Feature 1: Cradle of Civilization. The Nile was instrumental in the development of ancient Egypt, with cities and temples flourishing along its banks. The river’s predictable flooding cycle allowed early Egyptians to develop advanced agricultural techniques.',
        'Feature 2: Cultural and Historical Significance. The Nile is intertwined with Egyptian mythology and history. It was revered as a god in ancient times, and many of Egypt’s greatest monuments, including the Pyramids and the Temple of Karnak, are situated along its banks.'
      ]
    },
    {
      id: 2,
      title: 'The Red Sea',
      imgs: [
        'red.jpg',
        'red-sea.jpeg',
        'red2.jpg',
        'red4.jpg'
      ],
      description: 'The Red Sea is crucial for Egypt, famous for its rich marine life and coral reefs, supporting both tourism and trade, essential to the economy.',
      features: [
        'Feature 1: Diving Sites and Coral Reefs The Red Sea is renowned for its exceptional diving locations, boasting vibrant coral reefs and a unique variety of marine life that extends along the coast. Prominent diving sites include Ras Mohammed, Giftun Island, and Abu Dabbab, famous for their abundance of dolphins, sea turtles, and rare fish species. These sites offer visitors a unique opportunity to explore the underwater world with its vivid colors and diverse creatures.',
        'Feature 2: Resorts and Tourist Cities The Red Sea cities, such as Hurghada, Sharm El-Sheikh, and Marsa Alam, are among Egypt top tourist destinations. These cities provide a wide range of tourist activities, from water sports like windsurfing and sailing to enjoying desert excursions and visiting nature reserves. Additionally, these cities are home to luxury resorts that cater to tourists seeking relaxation and high-end amenities, along with restaurants and shopping centers that offer a comprehensive travel experience.'
      ]
    },
    {
      id: 3,
      title: 'The Mediterranean Sea',
      imgs: [
        'med1.jpg',
        'TheMediterraneanSea1.jpg',
        'TheMediterraneanSea2.jpg',
        'TheMediterraneanSea3.jpg'
      ],
      description: 'The Mediterranean Sea is a major tourist hub in Egypt, known for its stunning beaches and historical sites, making it a favorite for water sports and relaxation.',
      features: [
        'Feature 1: Alexandria — The Pearl of the Mediterranean Alexandria, often referred to as the "Pearl of the Mediterranean," is Egypt’s second-largest city and holds a rich historical and cultural heritage. Founded by Alexander the Great, it was once one of the most significant centers of learning and culture in the ancient world. Today, visitors can explore historical landmarks such as the Bibliotheca Alexandrina, the Citadel of Qaitbay, and Montaza Palace. Its vibrant waterfront, known as the Corniche, provides scenic views and serves as a hub of activity for dining, shopping, and cultural events.',
        'Feature 2: Pristine Beaches and Relaxation Spots he Mediterranean coast is home to some of Egypt’s most beautiful beaches, featuring soft white sands and clear blue waters. Tourist cities like Marsa Matruh, El Alamein, and Ras El Bar are renowned for their tranquil environments, making them ideal for swimming, sunbathing, and water sports. Marsa Matruh, in particular, is famous for its sheltered bays, such as Cleopatra Beach and Agiba Beach, offering crystal-clear water and picturesque views. This region combines natural beauty with a touch of history, offering a unique coastal experience distinct from other parts of Egypt.'
      ]
    },
    {
      id: 4,
      title: 'The Deserts of Egypt',
      imgs: [
        'desert1.jpg',
        'TheDeserts2.jpg',
        'TheDeserts1.jpg',
        'TheDeserts3.jpg'
      ],
      description: 'The deserts of Egypt feature stunning landscapes and a rich history, attracting adventurers and tourists alike',
      features: [
        'Feature 1: The Western Desert The Western Desert is famous for its oases like Siwa, known for palm groves and the ancient Oracle Temple of Amun. The surreal White Desert features stunning chalk rock formations, providing a tranquil escape and opportunities for exploration.',
        'Feature 2: The Eastern Desert The Eastern Desert is rich in history, featuring Mount Sinai, where Moses received the Ten Commandments, and Saint Catherine Monastery. Adventure seekers can enjoy rugged terrain, camping under the stars, and activities like sandboarding and off-road biking.'
      ]
    }
  ];




discoverExploreAncient: any[] = [
  {
    id: 1,
    title: 'Giza Pyramids',
    imgs: [
      'GizaPyramids.jpg',
      'giza.jpeg',
      'Giza1.jpg',
      'Giza2.jpg'
    ],
    description: 'one of the Seven Wonders of the Ancient World, are located in Giza, Egypt. The Great Pyramid of Khufu, built around 2580 BC, is renowned as a symbol of ancient Egyptian architecture.',
    features: [
      'Feature 1: Engineering Marvel. The Pyramids of Giza stand as a testament to the architectural and engineering prowess of ancient Egypt. Built over 4,500 years ago, these massive structures were constructed with precise alignment and immense stone blocks, showcasing the skill and ingenuity of the ancient builders.',
      'Feature 2: Cultural and Historical Significance. The Pyramids of Giza, particularly the Great Pyramid, are not only a symbol of ancient Egypt grandeur but also hold deep cultural and spiritual significance. Serving as royal tombs, they were believed to ensure the pharaohs journey to the afterlife, reflecting the Egyptians strong belief in life beyond death.'
    ]
  },
  {
    id: 2,
    title: 'Karnak Temples',
    imgs: [
      'karnk.jpg',
      'Karnak1.jpg',
      'Karnak2.jpg',
      'Karnak3.jpg'
    ],
    description: 'One of the largest temple complexes in the world, located in Luxor, and considered an important religious center in ancient Egypt.',
    features: [
      'Feature 1: Largest Religious Complex in Ancient Egypt. The Karnak Temple is one of the largest and greatest temples in the history of ancient Egypt. It spans a vast area and includes numerous halls, statues, and pylons that were constructed over a period of two thousand years, making it a unique complex that reflects the evolution of religious architecture throughout the ages.',
      'Feature 2: Spiritual and Historical Significance. The Karnak Temple was a major center of worship dedicated to the god Amun-Ra. It witnessed many significant religious festivals and processions, such as the Opet Festival. The temple symbolizes the spiritual and political power of the pharaohs, who added new sections and buildings to reinforce their legitimacy as rulers.'
    ]
  },
  {
    id: 3,
    title: 'Valley of the Kings',
    imgs: [
      'valleyking.jpg',
      'Valley1.jpg',
      'valley2.jpg',
      'valley3.jpg'
    ],
    description: 'The Valley is the burial site of pharaohs and nobles of ancient Egypt, located near Luxor. It contains many famous tombs, including that of Tutankhamun, and is one of Egypt most significant archaeological sites.',
    features: [
      'Feature 1: Royal Burial Ground. The Valley of the Kings is renowned as the burial site for many of Egypt pharaohs and powerful nobles during the New Kingdom period. Nestled between rugged mountains, this valley contains over 60 tombs, including the famous tomb of King Tutankhamun. The intricate designs and decorations inside these tombs reflect the artistry and beliefs surrounding the afterlife in ancient Egyptian culture.',
      'Feature 2: Archaeological Significance. The Valley of the Kings is a treasure trove for archaeologists and historians, offering invaluable insights into ancient Egyptian burial practices, art, and culture. The discovery of the tombs, particularly that of Tutankhamun in 1922, has provided a wealth of artifacts and knowledge about the era, making it one of the most significant archaeological sites in the world.'
    ]
  },
  {
    id: 4,
    title: 'Abu Simbel Temples',
    imgs: [
      'AbuSimbel.jpg',
      'luxor.jpeg',
      'AbuSimbel1.jpg',
      'AbuSimbel2.jpeg'
    ],
    description: 'Built in the 13th century BC by order of Pharaoh Ramses II, they are considered one of the greatest architectural achievements of ancient Egypt. Located near Lake Nasser, they are famous for their massive statues carved into the rock.',
    features: [
      'Feature 1: Architectural Masterpiece. The Abu Simbel Temples are remarkable examples of ancient Egyptian architecture, carved directly into the mountainside during the reign of Pharaoh Ramses II in the 13th century BCE. The complex consists of two main temples, with the Great Temple featuring four colossal statues of Ramses II at its entrance, showcasing the grandeur and skill of ancient builders.',
      'Feature 2: Cultural and Historical Importance. The temples were originally constructed to honor Ramses II and the goddess Hathor. They also served as a reminder of the pharaoh power and divinity. In the 1960s, the temples were relocated to higher ground to prevent flooding from Lake Nasser, an engineering feat that preserved their historical significance and beauty, making them a UNESCO World Heritage Site.'
    ]
  },
  {
    id: 5,
    title: 'The Egyptian Museum',
    imgs: [
      'The_Egyptian_Museum.jpg',
      'TheEgyptianMuseum2.jpg',
      'TheEgyptianMuseum4.jpg',
      'TheEgyptianMuseum5.jpg'
    ],
    description: 'Located in Cairo, it houses an extensive collection of ancient Egyptian artifacts, including the treasures of Tutankhamun and thousands of other historical pieces that showcase Egypt rich heritage.',
    features: [
      'Feature 1: Vast Collection of Ancient Artifacts. The Egyptian Museum in Cairo is home to one of the world’s largest collections of ancient Egyptian artifacts, with over 120,000 items on display. It houses treasures such as the golden mask of Tutankhamun, royal mummies, and statues from various dynasties, providing an unparalleled glimpse into the rich history and culture of ancient Egypt.',
      'Feature 2: Cultural and Historical Significance. Established in 1902, the Egyptian Museum has been a cornerstone for preserving Egypt heritage and educating the world about its ancient civilization. It stands as a symbol of Egypt enduring legacy, attracting scholars, archaeologists, and tourists from all over the globe.'
    ]
  }
];


discoverExploreModern: any[] = [
  {
    id: 1,
    title: 'Cairo Tower',
    imgs: [
      'tower.jpg',
      'tower3.jpg',
      'tower4.jpg',
      'tower6.jpg'
    ],
    description: 'Cairo Tower is a 187-meter-high modern landmark in Cairo, built in the shape of a lotus flower. It provides visitors with breathtaking views of the city and the Nile River from its observation deck.',
    features: [
      'Feature 1: Modern Architectural Icon. The Cairo Tower, standing 187 meters tall, is one of the most recognizable landmarks in Cairo. Built in the 1960s, its design was inspired by the shape of a lotus flower, symbolizing the beauty and elegance of Egyptian culture. The tower offers panoramic views of the city and the Nile River, making it a popular tourist attraction.',
      'Feature 2: Symbol of National Pride. The Cairo Tower was constructed during a period of modernization and national development in Egypt. It represents the country’s aspirations and progress. Today, it stands as a symbol of modern Egypt, blending cultural heritage with contemporary design.'
    ]
  },
  {
    id: 2,
    title: 'New Alamein City',
    imgs: [
      'alamein1.jpg',
      'Alamein3.jpg',
      'Alamein2.jpg',
      'Alamein4.jpg'
    ],
    description: 'New Alamein City is a modern coastal city in Egypt, located along the Mediterranean Sea. It offers luxurious resorts, beautiful beaches, and a variety of recreational facilities.',
    features: [
      'Feature 1: Modern Tourist Destination. New Alamein City is one of Egypt newest tourist destinations, offering a variety of activities and attractions. The city features beautiful beaches along the Mediterranean coast, recreational areas, and upscale shopping centers, making it an ideal place for vacationers.',
      'Feature 2: Blend of Culture and Entertainment. New Alamein City hosts various cultural and artistic events, along with restaurants serving a wide range of local and international cuisines. Festivals and events are organized throughout the year, making it an attractive destination for tourists from around the world.'
    ]
  },
  {
    id: 3,
    title: 'Bibliotheca Alexandrina',
    imgs: [
      'Bibliotheca_Alexandrina.jpg',
      'BibliothecaAlexandrina2.jpg',
      'BibliothecaAlexandrina3.jpg',
      'BibliothecaAlexandrina4.jpg'
    ],
    description: 'It is a modern cultural center located in Alexandria, Egypt. It houses millions of books and manuscripts and serves as an important destination for researchers and students.',
    features: [
      'Feature 1: Architectural Marvel. The Bibliotheca Alexandrina is a stunning modern library that pays homage to the ancient Library of Alexandria, one of the most significant libraries of the ancient world. Opened in 2002, its unique design features a cylindrical shape and a striking facade made of limestone, symbolizing the sun rising over the Mediterranean. The library is equipped with advanced technology and facilities, making it a hub for knowledge and learning.',
      'Feature 2: Cultural and Educational Hub. The Bibliotheca Alexandrina serves as a cultural center that hosts various exhibitions, conferences, and cultural events throughout the year. It houses millions of books in multiple languages, manuscripts, and other valuable resources, attracting researchers, scholars, and tourists alike. The library aims to promote intellectual exchange and preserve the cultural heritage of Egypt and the Mediterranean region.'
    ]
  },
  {
    id: 4,
    title: 'Sharm El Sheikh',
    imgs: [
      'sharm.jpg',
      'sharm1.jpg',
      'red-sea.jpeg',
      'sharm3.jpg'
    ],
    description: 'Is a popular tourist destination located on the Red Sea coast, renowned for its beautiful beaches and diving centers. The city offers a wide range of water activities, such as snorkeling and water sports, making it ideal for beach lovers.',
    features: [
      'Feature 1: Stunning Natural Beauty. Sharm El Sheikh is renowned for its breathtaking landscapes, featuring crystal-clear waters, vibrant coral reefs, and majestic mountains. Located at the southern tip of the Sinai Peninsula, the area offers some of the best diving and snorkeling spots in the world, attracting marine enthusiasts and nature lovers alike.',
      'Feature 2: Premier Tourist Destination. Sharm El Sheikh is a popular tourist destination, known for its luxurious resorts, vibrant nightlife, and diverse entertainment options. Visitors can enjoy a range of activities, including water sports, desert safaris, and cultural excursions, making it an ideal location for both relaxation and adventure.'
    ]
  }
];


getDiscovers(){
    return this.discoversadventure;
  }
getDiscoversExplore(){
  return this.discoverExploreAncient;
}
getDiscoversExplore1(){
  return this.discoverExploreModern;
}
}





