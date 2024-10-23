import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private url = environment.url;

  constructor() { }

  tours: any[] = [
    {
      id: 1,
      place: 'Cairo',
      img: 'cairo.jpeg',
      tourDate: "October 15, 2024",
      price: 150,
      placeBrief: "Cairo, the sprawling capital of Egypt, is a city where ancient history and modern life intertwine. With a population of over 20 million, it's the largest city in the Arab world. The city skyline is dominated by the iconic Pyramids of Giza, while the winding streets of Islamic Cairo transport visitors back in time. The Nile River cuts through the city, providing a lifeline and a picturesque backdrop. Cairo's rich cultural tapestry is woven from its Pharaonic, Coptic, and Islamic heritage, evident in its museums, mosques, and bazaars.",
      program: "Your day begins with a visit to the world-renowned Egyptian Museum, home to over 120,000 ancient Egyptian artifacts. Spend the morning marveling at the golden mask of Tutankhamun and the mummies of Egypt's great pharaohs. After lunch at a local restaurant serving traditional Egyptian cuisine, head to the historic Al-Azhar Mosque. This 10th-century mosque is not only a stunning example of Islamic architecture but also houses the world's second-oldest university. As the afternoon wanes, lose yourself in the labyrinthine alleys of Khan El Khalili Bazaar. This 14th-century market is a sensory overload of sights, sounds, and smells. Haggle for spices, perfumes, and intricate metalwork as you soak in the atmosphere of old Cairo. End your day with a sunset felucca ride on the Nile, watching the city lights come to life as you enjoy a traditional Egyptian dinner onboard."
    },
    {
      id: 2,
      place: 'Giza',
      img: 'giza.jpeg',
      tourDate: "October 16, 2024",
      price: 200,
      placeBrief: "Giza, located on the west bank of the Nile, is home to one of the world's most iconic ancient wonders - the Pyramids. This plateau hosts the Great Pyramid of Khufu, the slightly smaller Pyramid of Khafre, and the relatively modest-sized Pyramid of Menkaure. These monumental structures, built over 4,500 years ago, stand as a testament to the engineering prowess of the ancient Egyptians. Alongside the pyramids, the enigmatic Great Sphinx keeps its eternal watch, its lion body and human head shrouded in mystery and legend. Giza offers a unique juxtaposition of ancient wonders against the backdrop of the modern city, creating a surreal and unforgettable experience.",
      program: "Your Giza adventure begins at dawn with a camel ride around the Giza plateau, offering a unique perspective of the pyramids as the sun rises. As the day brightens, embark on a guided tour of the Great Pyramid of Khufu. Marvel at its precise construction and the theories surrounding its building techniques. You'll have the opportunity to enter the pyramid and explore its narrow passages and chambers. Next, visit the Solar Boat Museum, which houses a reconstructed ship believed to have been used in the funeral procession of Khufu. After a lunch break featuring panoramic views of the pyramids, continue to the Great Sphinx. Learn about its disputed origins and the various legends surrounding this colossal statue. In the late afternoon, visit the Sound and Light Show area, where you'll witness the pyramids and sphinx illuminated in a spectacular display as the sun sets. End your day with a traditional Bedouin dinner in the desert, complete with local music and stargazing."
    },
    {
      id: 3,
      place: 'Old Town',
      img: 'old-town.jpeg',
      tourDate: 'October 17, 2024',
      price: 120,
      placeBrief: "The Old Town of Cairo, also known as Islamic Cairo or Medieval Cairo, is a historic area that seems frozen in time. This UNESCO World Heritage site is a maze of narrow streets, ancient mosques, madrasas (religious schools), and vibrant markets. The area is home to some of the finest examples of Islamic architecture in the world, with buildings dating back to the 7th century. The Old Town also includes Coptic Cairo, showcasing Egypt's Christian heritage. The juxtaposition of Islamic and Coptic monuments in such close proximity is a testament to Egypt's diverse cultural tapestry. Walking through these winding alleys is like stepping back in time, offering glimpses into daily life that has remained largely unchanged for centuries.",
      program: "Begin your Old Town exploration at the Citadel of Cairo, a medieval Islamic fortification offering panoramic views of the city. Tour the magnificent Muhammad Ali Mosque, known as the 'Alabaster Mosque' for its gleaming white stone. Next, delve into the heart of Islamic Cairo, visiting the 9th-century Ibn Tulun Mosque, one of the oldest and largest in Egypt. Continue to the Sultan Hassan Mosque and Al-Rifa'i Mosque, marveling at their intricate designs and historical significance. After lunch in a local café, explore the winding streets of the Mu'izz li-Din Allah Street, lined with well-preserved medieval architecture. Visit the Qalawun complex, showcasing Mamluk architecture at its finest. In the late afternoon, head to Coptic Cairo. Tour the Hanging Church, built atop the gates of an old Roman fortress, and visit the Coptic Museum to learn about Egypt's Christian heritage. End your day at the Ben Ezra Synagogue, believed to be the site where baby Moses was found, symbolizing the historical coexistence of different faiths in Cairo."
    },
    {
      id: 4,
      place: 'Alexandria',
      img: 'alex.jpeg',
      tourDate: 'October 18, 2024',
      price: 180,
      placeBrief: "Alexandria, Egypt's window on the Mediterranean, is a city steeped in history and nostalgia. Founded by Alexander the Great in 331 BC, it was once the intellectual and cultural center of the ancient world. The city was home to the legendary Library of Alexandria and the Pharos Lighthouse, one of the Seven Wonders of the Ancient World. Today, Alexandria is a bustling metropolis with a distinctly European flavor, visible in its wide waterfront promenade and Belle Époque architecture. The city seamlessly blends its ancient Greco-Roman heritage with its cosmopolitan present, offering visitors a unique glimpse into Egypt's multifaceted history and culture.",
      program: "Start your Alexandrian journey at the modern Bibliotheca Alexandrina, built to recapture the spirit of the ancient Great Library. Take a guided tour of this architectural marvel and learn about its vast collection and cultural significance. Next, descend into the mysterious Catacombs of Kom El Shoqafa, a necropolis featuring a unique blend of Egyptian, Greek, and Roman funeral artwork. After lunch at a seaside restaurant specializing in fresh Mediterranean seafood, visit the Roman Amphitheater, the only one of its kind in Egypt. Continue to the Qaitbay Citadel, a 15th-century fortress built on the site of the ancient Lighthouse of Alexandria. Explore its towers and ramparts while enjoying panoramic views of the Mediterranean. In the late afternoon, take a stroll along the Corniche, Alexandria's waterfront promenade, stopping at the Cecil Hotel, once a haunt of Winston Churchill and Somerset Maugham. End your day with a visit to the Alexandria National Museum, housed in a restored Italian-style palace, where you can trace the city's history from ancient times to the modern era."
    },
    {
      id: 5,
      place: 'Aswan',
      img: 'aswan.jpeg',
      tourDate: 'October 19, 2024',
      price: 220,
      placeBrief: "Aswan, Egypt's southernmost city, is a serene Nile Valley destination where the desert meets the river. Known for its laid-back atmosphere, Aswan has been a favorite winter resort since the 19th century. The city is a gateway to Nubian culture, offering insights into this ancient civilization. The Nile is at its most beautiful here, flowing around bright green islands dotted with palm groves and tropical plants. Aswan is also famous for its monuments, including the masterfully crafted Philae Temple and the monumental Aswan High Dam. The city's unique blend of Egyptian and Nubian cultures creates a rich tapestry of traditions, cuisine, and music.",
      program: "Begin your Aswan experience with a boat trip to the Philae Temple complex on Agilkia Island. This UNESCO World Heritage site, dedicated to the goddess Isis, was completely relocated to save it from the rising waters of Lake Nasser. After exploring its beautifully preserved structures, visit the Aswan High Dam, a feat of modern engineering that tamed the Nile's annual flood. Next, tour the Nubian Museum, which showcases the history and culture of ancient Nubia. After lunch featuring traditional Nubian cuisine, take a short flight or boat ride to Abu Simbel, the colossal temple complex built by Ramses II. Marvel at the massive statues and the incredible feat of relocating these temples to higher ground. Return to Aswan in the late afternoon for a relaxing felucca ride around Elephantine Island and Kitchener's Island, home to the lush Aswan Botanical Gardens. As the sun sets, enjoy dinner at a rooftop restaurant overlooking the Nile, followed by a visit to a local Nubian village for an evening of traditional music and dance."
    },
    {
      id: 6,
      place: 'Luxor',
      img: 'luxor.jpeg',
      tourDate: 'October 20, 2024',
      price: 250,
      placeBrief: "Luxor, often called the world's greatest open-air museum, stands on the site of ancient Thebes, the pharaohs' capital at the height of their power during the 16th–11th centuries B.C. The modern city has grown up beside the Nile, but the vast majority of its treasures lie on the West Bank of the river. Here, you'll find the Valley of the Kings, where generations of pharaohs were buried in hidden tombs, and the Valley of the Queens. The East Bank is home to the Luxor and Karnak Temple complexes, colossal monuments spanning centuries of Egyptian history. With its unparalleled concentration of relics and monuments, Luxor offers visitors an immersive journey into the grandeur of ancient Egypt.",
      program: "Your Luxor exploration begins at dawn with a hot air balloon ride over the West Bank, offering breathtaking views of the Nile Valley and ancient monuments. After landing, head to the Valley of the Kings to explore the elaborately decorated tombs of Egypt's most powerful pharaohs, including the famous tomb of Tutankhamun. Continue to the nearby Temple of Hatshepsut, a stunning example of ancient Egyptian architecture set against towering cliffs. After lunch at a local restaurant, cross to the East Bank and visit the sprawling Karnak Temple complex. Spend the afternoon exploring its vast array of pylons, obelisks, and sanctuaries, including the famous Hypostyle Hall with its 134 massive columns. As the sun begins to set, head to Luxor Temple, which takes on a magical quality as it's illuminated for the evening. End your day with a sound and light show at Karnak, where the ancient stones come to life with projections and narration telling the story of Thebes."
    },
    {
      id: 7,
      place: 'Red Sea',
      img: 'red-sea.jpeg',
      tourDate: 'October 21, 2024',
      price: 300,
      placeBrief: "The Red Sea coast of Egypt is a paradise for beach lovers and water sports enthusiasts. Stretching over 1,000 kilometers, this coastline is renowned for its crystal-clear waters, vibrant coral reefs, and diverse marine life. Popular resorts like Hurghada, Sharm El Sheikh, and Marsa Alam offer world-class facilities for diving, snorkeling, windsurfing, and kitesurfing. The Red Sea's warm waters host over 1,200 species of fish, including 44 species of sharks, making it a top destination for underwater exploration. Beyond the water, the stark beauty of the Eastern Desert provides opportunities for desert safaris and stargazing. The region's year-round sunshine and modern amenities make it an ideal destination for those seeking both relaxation and adventure.",
      program: "Start your Red Sea adventure with an early morning snorkeling trip to Giftun Island National Park. Explore the vibrant coral gardens and swim alongside colorful fish in the crystal-clear waters. After returning to the resort, enjoy a lunch of fresh seafood at a beachside restaurant. In the afternoon, embark on a glass-bottom boat tour, offering a unique perspective of the underwater world without getting wet. For the more adventurous, there's an option to try parasailing for a bird's-eye view of the coastline. As the day cools, take a sunset cruise on a traditional felucca, enjoying the changing colors of the sky and sea. For dinner, experience a Bedouin-style feast in the desert, complete with traditional music and the opportunity to stargaze in the clear desert sky. End the night with a walk along the moonlit beach, the perfect end to a day in this coastal paradise."
    },
    {
      id: 8,
      place: 'Siwa',
      img: 'siwa.jpeg',
      tourDate: 'October 22, 2024',
      price: 210,
      placeBrief: "Siwa Oasis, located in Egypt's Western Desert, is a remote paradise that seems worlds away from modern civilization. This lush oasis, surrounded by date palm plantations and freshwater springs, has been inhabited since ancient times by the Berber-speaking Siwi people. Siwa is famous for its unique culture, ancient ruins, and natural beauty. The oasis is home to the ruins of the Oracle Temple, where Alexander the Great is said to have consulted the Oracle of Amun. Siwa's isolation has preserved many of its traditions, including distinctive crafts and cuisine. The surrounding desert offers stunning landscapes of sand dunes and salt lakes, creating a surreal and magical atmosphere that captivates visitors.",
      program: "Begin your Siwa adventure with a visit to the ruins of Shali, the old town of Siwa. Explore the maze-like streets of this 13th-century mud-brick fortress, learning about Siwan history and architecture. Next, head to the Temple of the Oracle, where Alexander the Great allegedly sought divine confirmation of his rule. After lunch featuring traditional Siwan cuisine, take a dip in Cleopatra's Bath, a natural spring said to have been visited by the legendary queen herself. In the afternoon, embark on a 4x4 desert safari into the Great Sand Sea. Experience the thrill of dune bashing and sandboarding on the massive dunes. As the sun begins to set, visit the serene Lake Siwa to witness the stunning desert sunset reflected in its salt-crusted surface. End your day with a traditional Siwan dinner under the stars at a desert camp, where you can enjoy local music and learn about Bedouin culture. For those interested, there's an option for a late-night excursion to Bir Wahed, a hot sulfur spring in the middle of the desert, for a uniquely relaxing midnight swim."
    },
    {
      id: 9,
      place: 'Nile Cruise',
      img: 'nile-cruise.jpg',
      tourDate: 'October 28, 2024',
      price: 500,
      placeBrief: "A Nile cruise is a journey through the heart of ancient Egypt, offering a unique perspective on the country's timeless beauty and rich history. Typically running between Luxor and Aswan, these cruises allow visitors to watch the ever-changing scenery of the Nile Valley unfold, from lush riverbanks and rural villages to ancient temples and tombs. The Nile, often called the lifeblood of Egypt, has been a critical transportation route for thousands of years. Today, a cruise along its waters combines luxury and adventure, allowing travelers to explore multiple archaeological sites while enjoying the comfort of a floating hotel. From the deck of a cruise ship, visitors can experience the same views that inspired ancient pharaohs and countless travelers throughout history.",
      program: "Your Nile cruise adventure begins in Luxor, where you'll board your luxury cruise ship. After settling in, visit the magnificent Karnak Temple complex, followed by an exploration of Luxor Temple as the sun sets. The next morning, cross to the West Bank to explore the Valley of the Kings"
    }
  ]

  getTours(){
    return this.tours;
  }
  getTour(tourId:Number){
    return this.tours.find(tour=> tour.id === tourId)
  }
}
