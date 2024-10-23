import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  selectedHotel: any = null; // Stores the selected hotel details
  showHotelDetails: boolean = false; // Controls visibility of hotel details popup
  governorates: string[] = ['Cairo', 'Giza', 'Alexandria', 'Hurghada', 'Sharm Elsheikh', 'Aswan'];
  selectedGovernorate: string = '';
  hotels: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  onGovernorateChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedGovernorate = selectElement.value;
    console.log('Selected Governorate:', this.selectedGovernorate);
    this.getHotelsByGovernorate();
  }

  getHotelsByGovernorate(): void {
    this.hotels = MOCK_HOTELS.filter(hotel => hotel.governorate === this.selectedGovernorate);
    console.log('Filtered Hotels:', this.hotels);
  }

  openHotelDetails(hotel: any): void {
    this.selectedHotel = hotel; // Store the selected hotel
    this.showHotelDetails = true; // Show hotel details
  }

  closeHotelDetails(): void {
    this.showHotelDetails = false; // Hide hotel details
  }

  redirectToBooking(): void {
    if (this.selectedHotel?.bookingUrl) {
      window.open(this.selectedHotel.bookingUrl, '_blank');
    }
  }
}

// Mock hotel data (replace with actual API data later)
const MOCK_HOTELS = [
  {
    name: 'The Nile Ritz-Carlton',
    governorate: 'Cairo',
    stars: 5,
    description: "Get the celebrity treatment with world-class service at The Nile Ritz-Carlton, Cairo Located in the heart of Cairo lies the iconic Nile Ritz-Carlton Cairo, located between the Nile river, Tahrir square and adjacent to the Egyptian Museum. The hotel features panoramic views of the Nile corniche and only a stroll across to Qasr El Nil Bridge and Cairo Opera House. Guests can enjoy the free WiFi in the public areas as well as in the room. Spacious and stylish, the rooms offer working desks. All rooms come with a TV. You will find a coffee machine in the room. Each room is fitted with a private bathroom that consists of a lavish bath tub and a walk-in shower. For your comfort, you will find bath robes, slippers and a hair dryer. The hotel offers a Casino and night life experience. More than nine distinctive restaurants and bars promise an unforgettable getaway. Bab El-Sharq is the signature Arabian restaurant offering Shisha and daily entertainment, Vivo the Italian restaurant overlooks the Nile and Cairo tower and Nox offers a nightlife experience from the rooftop overlooking entire Cairo. The hotel also offers 24/7 fitness center, a lavish spa and a year-round sunny outdoor pool. Khan El Khalili Bazaar is 0.6 mi away from The Nile Ritz-Carlton, Cairo, while The Cairo Tower is 0.8 mi away. The nearest airport is Cairo Airport, 16 mi from the property. Couples in particular like the location – they rated it 9.2 for a two-person trip",
    imageUrl: '456051785.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/the-nile-ritz-carlton-cairo.html'
  },

  {
    name: 'The St. Regis Cairo',
    governorate: 'Cairo',
    stars: 4,
    description: 'Situated in Cairo, 3.3 km from Tahrir Square, The St. Regis Cairo features accommodation with free bikes, private parking, a fitness centre and a terrace. This 5-star hotel offers an ATM, a concierge service and free WiFi. The accommodation provides a sauna, evening entertainment and room service. The rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a bidet, free toiletries and a hairdryer. Rooms include a coffee machine, while certain rooms are fitted with a kitchen with a fridge, a dishwasher and an oven. At The St. Regis Cairo rooms are fitted with bed linen and towels. A buffet, continental or vegetarian breakfast can be enjoyed at the property. At the accommodation you will find a restaurant serving American, Italian and Pizza cuisine. Vegetarian, dairy-free and halal options can also be requested. At The St. Regis Cairo guests are welcome to take advantage of a hot tub. Speaking Arabic, German, English and Italian at the reception, staff are ready to help around the clock. The Egyptian Museum is 3.5 km from the hotel, while Cairo Tower is 4.2 km from the property. The nearest airport is Cairo International Airport, 18 km from The St. Regis Cairo. Couples particularly like the location — they rated it 9.2 for a two-person trip.',
    imageUrl: 'image-236.png',
    bookingUrl: 'https://www.booking.com/hotel/eg/the-st-regis-cairo.html'
  },

  {
    name: 'Royal Maxim Palace Kempinski Cairo',
    governorate: 'Cairo',
    stars: 3,
    description: 'Get the celebrity treatment with world-class service at Royal Maxim Palace Kempinski Cairo Royal Maxim Palace Kempinski Cairo is a 5-star hotel that offers luxury accommodations in the center of Cairo. It features an all year-round outdoor pool, a palatial inspired courtyard, and a modern fitness center. Cairo International Airport is a 15-minute drive away. Every elegant room comes with a flat-screen TV and a seating area to relax in after a busy day. Rooms have views of the pool, garden or courtyard. Each room includes a private bathroom with a bath or shower, bathrobes, slippers and free toiletries. Guests can enjoy a wide array of culinary delights at one of the 9 restaurants and bars. All day snacks and refreshments are also served at the Royal Club Lounge. The property offers indoor and outdoor event spaces suited for any special event. As we will be setting up our Ramadan Tent. Resense Spa is the first luxury European spa in the city offering a unique relaxing experience where guests can rejuvenate with multiple treatments and sessions. Special events can be arranged at the largest ballroom in Egypt, The Excelsior.  Cairo Festival City is 7 km from Royal Maxim Palace Kempinski Cairo, while Cairo Intl Conference Centre is 10 km away. The nearest airport is Cairo Airport, 6 km from Royal Maxim Palace Kempinski Cairo. Couples particularly like the location — they rated it 8.3 for a two-person trip.',
    imageUrl: 'f148d40b474c-73658289_4K.avif',
    bookingUrl: 'https://www.booking.com/hotel/eg/royal-maxim-palace-kempinski-cairo.html'
  },

  {
    name: 'Steigenberger Pyramids Cairo',
    governorate: 'Giza',
    stars: 5,
    description: 'Get the celebrity treatment with world-class service at Steigenberger Pyramids Cairo Located in Cairo, 1.4 miles from Giza Pyramids, Steigenberger Pyramids Cairo provides accommodations with a garden, private parking, a restaurant and a bar. This 5-star hotel offers room service, a 24-hour front desk and free WiFi. The property has entertainment staff and an ATM. All guest rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a bidet, free toiletries and a hairdryer. Rooms include an electric tea pot, while selected rooms will provide you with a balcony and others also have city views. At Steigenberger Pyramids Cairo all rooms have bed linen and towels. A buffet breakfast is available every morning at the accommodation. Great Sphinx is 2.2 miles from Steigenberger Pyramids Cairo, while Mosque of Ibn Tulun is 10 miles away. Sphinx International Airport is 18 miles from the property. Couples in particular like the location – they rated it 8.4 for a two-person trip.',
    imageUrl: '276806560.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/steigenberger-pyramids-cairo.html'
  },

  {
    name: 'Radiant Pyramids View',
    governorate: 'Giza',
    stars: 5,
    description: 'Get the celebrity treatment with world-class service at Radiant Pyramids View Located in Cairo, a 18-minute walk from Great Sphinx, Radiant Pyramids View has accommodations with a shared lounge, free private parking, a terrace and a bar. This 5-star hotel offers room service, a 24-hour front desk and free WiFi. The property provides an ATM, a concierge service and organizing tours for guests. At the hotel the rooms include air conditioning, a desk, a flat-screen TV, a private bathroom, bed linen, towels and a balcony with a mountain view. All rooms will provide guests with a closet and an electric tea pot. A buffet, à la carte or Full English/Irish breakfast is served at the property. At Radiant Pyramids View you\'ll find a restaurant serving African, American and Middle Eastern cuisine. Vegetarian, halal and kosher options can also be requested. Giza Pyramids is 1.7 miles from the accommodation, while Cairo Tower is 9.5 miles from the property. Cairo International Airport is 20 miles away.',
    imageUrl: '595745314.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/radiant-pyramids-view.html'
  },

  {
    name: 'Movenpick MS Hamees',
    governorate: 'Giza',
    stars: 5,
    description: 'Experience World-class Service at Movenpick MS Hamees Movenpick MS Hamees Nile Cruise 4 or 7 Nights Each Monday From Luxor & 3 Nights Each Friday From Aswan is a 5-star cruise that offers guests the chance to enjoy the scenery from Luxor to Aswan through the Nile River. There is an outdoor swimming pool on deck. The cabins are decorated in a modern style with bright colors and wooden furniture. They are air conditioned and feature a flat-screen satellite TV a mini-bar. The bathroom has a bath and includes a hairdryer. Movenpick MS Hamees Nile Cruise 4 or 7 Nights Each Monday From Luxor & 3 Nights Each Friday From Aswan\'s restaurant serves breakfast, lunch and dinner buffets and offers room service. At the deck’s bar, guests can enjoy cocktails while admiring the panoramic views. The check-in location is 20 minutes’ drive from the railway station, and 40 minutes from Luxor International Airport by car.',
    imageUrl: '538750443.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/moevenpick-ms-hamees.html'
  },

  {
    name: 'San Stefano Hotel Alexandria',
    governorate: 'Alexandria',
    stars: 5,
    description: 'Get the celebrity treatment with world-class service at Four Seasons Hotel Alexandria At San Stefano Set in an architectural landmark, Hotel San Stefano features a fashionable resort setting with a private sandy beach and overlooking the Mediterranean Sea. It features a full-service spa, outdoor pool and restaurants with terraces. Guests can enjoy free WiFi throughout the property and in the guest rooms. All rooms at the Four Seasons Hotel Alexandria At San Stefano have a balcony, some of them including Mediterranean Sea views. A mini-bar, TV and air conditioning are all standard facilities. The hotel has a 2 story Spa and fitness center that offers 14 treatment rooms, sauna, steam room, whirlpool and a squash court. For leisure, the hotel provides a number of recreation activities year round based on seasonality: an outdoor infinity pool, an indoor heated pool, a private beach, Kids For all Seasons program and sightseeing. The hotel offers nine distinctive restaurants and lounges serving a diverse selection of local seafood and international specialties. Options range from Lebanese and Italian fine-dining to contemporary Mediterranean favorites – café snacks, cocktails and gelati. A Shisha corner is also available. The Alexandria Four Seasons Hotel is 37 mi from Alexandria Borg El Arab Airport. A hotel limousine is available upon request. Couples in particular like the location – they rated it 9.6 for a two-person trip.',
    imageUrl: 'Four-Seasons-Hotel-Alexandria-at-San-Stefano-Exterior.webp',
    bookingUrl: 'https://www.booking.com/hotel/eg/four-seasons-alexandria-at-san-stefano.html'
  },

  {
    name: 'Rixos Premium Alamein',
    governorate: 'Alexandria',
    stars: 5,
    description: 'Experience world-class service at Rixos Premium Alamein Facing the beachfront, Rixos Premium Alamein offers 5-star accommodation in El Alamein and has a shared lounge, terrace and bar. Among the facilities at this property are a kids\' club and room service, along with free WiFi throughout the property. The property features a seasonal outdoor pool, indoor pool, fitness centre and garden. The resort will provide guests with air-conditioned rooms offering a wardrobe, a kettle, a minibar, a safety deposit box, a TV and a private bathroom with a bidet. A buffet, continental or Full English/Irish breakfast can be enjoyed at the property. At Rixos Premium Alamein you will find a restaurant serving Italian, Seafood and Turkish cuisine. Vegetarian, dairy-free and halal options can also be requested. You can play billiards and table tennis at the accommodation, and bike hire is available. Speaking Arabic, English, French and Italian at the reception, staff will be happy to provide guests with practical guidance on the area. Porto Marina is 8.6 km from Rixos Premium Alamein. The nearest airport is El Alamein International Airport, 63 km from the resort. Couples particularly like the location — they rated it 9.3 for a two-person trip.',
    imageUrl: 'Rixos-Premium-Alamein-Exterior.webp',
    bookingUrl: 'https://www.booking.com/hotel/eg/el-alamein-towers.en-gb.html'
  },

  {
    name: 'Tolip Hotel Alexandria',
    governorate: 'Alexandria',
    stars: 5,
    description: 'Get the celebrity treatment with world-class service at Tolip Hotel Alexandria This 5-star hotel in Alexandria offers an outdoor pool, a spa and a gym. It features modern accommodations with views of the sea or city. Free Wi-Fi is available in public areas. Air-conditioned rooms are equipped with a mini-bar and flat-screen satellite TV. Each suite comes with a living room and a dining table. Featuring a bathtub and shower, private bathrooms are stocked with free toiletries. All rooms have a balcony. Guests can choose to dine at any of the hotel’s 9 dining outlets, which serve a variety of cuisine ranging from local to international. The pool bars are an ideal place for relaxation. The hotel is 1312 feet from Al-Salam Theater and Stanley Bridge, and is 0.9 mi from Sidi Gaber Railway Station. Borg el Arab International Airport is 26 mi away. The property offers parking at an extra cost. Couples in particular like the location – they rated it 8.8 for a two-person trip.',
    imageUrl: '288644202.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/royal-tulip-alexandria.html'
  },

  {
    name: 'Pickalbatros Blu Spa Resort',
    governorate: 'Hurghada',
    stars: 5,
    description: 'Experience World-class Service at Pickalbatros Blu Spa Resort - Adults Friendly 16 Years Plus- Ultra All-Inclusive Facing the beachfront, Pickalbatros Blu Spa Resort - Adults Friendly 16 Years Plus- Ultra All-Inclusive offers 5-star accommodations in Hurghada and features a garden, shared lounge and terrace. Among the facilities of this property are a restaurant, room service and a 24-hour front desk, along with free WiFi. The wellness area includes an indoor pool, fitness center and sauna, while an outdoor swimming pool is also available. All guest rooms at the resort come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, free toiletries and a hairdryer. Rooms have an electric tea pot, while some rooms here will provide you with a balcony and others also provide guests with sea views. At Pickalbatros Blu Spa Resort - Adults Friendly 16 Years Plus- Ultra All-Inclusive every room comes with bed linen and towels. A buffet, continental or Full English/Irish breakfast is served at the property. Spa and wellness facilities are at guests\' disposal during their stay at the accommodation, including a hot tub and on-request massage treatments. The area is popular for snorkeling, and car rental is available at Pickalbatros Blu Spa Resort - Adults Friendly 16 Years Plus- Ultra All-Inclusive. Albatros White Beach is a 7-minute walk from the resort, while Marina Sports Club Beach is half a mile away. The nearest airport is Hurghada International Airport, 1.9 miles from Pickalbatros Blu Spa Resort - Adults Friendly 16 Years Plus- Ultra All-Inclusive. Couples in particular like the location – they rated it 9.6 for a two-person trip.',
    imageUrl: '390878942.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/pickalbatros-blu-spa-resort-adults-friendly-16-years-plus.html'
  },

  {
    name: 'Steigenberger Golf Resort El Gouna',
    governorate: 'Hurghada',
    stars: 5,
    description: 'Experience World-class Service at Steigenberger Golf Resort El Gouna Enjoy a unique mix of serenity and privacy with a Nubian flair at the five-star Steigenberger Golf Resort El Gouna! Located in the heart of El Gouna, Steigenberger Golf Resort provides the perfect escape to the Red Sea with its secluded location overlooking some of the most breathtaking views accompanied by a unique fine dining experience. This 5-star resort caters to all who visit with a range of activities and facilities. Guests with a knack for elegance and exclusivity will enjoy the charming gardens, glistening beach, and the ultramodern wellness center. Golfers will specifically enjoy their stay with the 18-hole golf course and access to a neighboring golf course at Karl Litten Golf Course. Disconnect from the world as you soak your worries in the hot tub or jacuzzi and enjoy a relaxing massage or a rejuvenating treatment at Planet Spa. Satisfy your taste buds at one of our three restaurants with a view of the entire town along with the Red Sea. Steigenberger Golf Resort El Gouna’s main restaurant Fairways presents breakfast and dinner in extravagant daily changing buffets and delicious live cooking stations. You can also enjoy a full fine-dining experience and authentic quality Japanese cuisine at Harumaki. The rooms in Steigenberger Golf Resort El Gouna promise nothing but comfort and luxury with stunning views and high-quality facilities that are designed for your convenience. The Steigenberger Suite is the utmost luxury suite with 2 bathrooms, separate bedroom and living room, Overlooking the Garden or Pool. Experience the combination of upper Egypt and lavish living as the rooms flaunt their decorations in Nubian colors with modern facilities catering to your needs, making Steigenberger Golf Resort a paradise destination for couples and families. El Gouna provides a large variety of activities and sports, from kitesurfing to diving, excursions in the desert and more. Couples in particular like the location – they rated it 9.1 for a two-person trip.',
    imageUrl: '429799977.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/steigenberger-golf-resort-el-gouna.html'
  },

  {
    name: 'Hilton Hurghada Plaza Hotel',
    governorate: 'Hurghada',
    stars: 5,
    description: 'Experience World-class Service at Hilton Hurghada Plaza Hotel Offering pristine views of the Red Sea from guest rooms, Hilton Hurghada Plaza features a private sandy beach, accompanied by water sports facilities. Hosting twelve restaurants and bars, guests will enjoy a wide variety of options for dining and entertainment. Indulge in a refreshing cocktail or cool beer at the swim-up Bluefin bar, experience a taste of fresh, Mediterranean cuisine at Lophelia seafood restaurant or simply unwind with a cocktail at sunset at Sands Beach Bar. The bright, airy rooms have elegant décor, and are each equipped with complimentary toiletries and bottled mineral water. All rooms have a safe box, bath and shower facilities, iron/ ironing board and hairdryers for your convenience. Guests of Hilton Hurghada Plaza can relax around one of our two outdoor pools, while the children play in the dedicated "Clownfish" aqua park. Stroll down to our private sandy beach, and enjoy drinks or an afternoon snack at the "Sands" beach bar. Beach volleyball, tennis courts, padel tennis, squash and billiards are also available (charges may apply). After a training session at the gym, you can relax in the sauna, Turkish bath or the hot tub. Massage treatments and other beauty treatments can also be reserved in the spa "La Perla". (Charges apply) By car, Hilton Hurghada Plaza is just 5 minutes to downtown Hurghada, and 15 minutes\' drive from Hurghada International Airport. Couples in particular like the location – they rated it 8.8 for a two-person trip.',
    imageUrl: '483736943.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/hilton-hurghada-plaza.html'
  },

  {
    name: 'V Hotel Sharm El Shiekh',
    governorate: 'Sharm Elsheikh',
    stars: 5,
    description: 'Experience World-class Service at V Hotel Sharm El Shiekh V Hotel Sharm El Shiekh is located in Sharm El Sheikh and features its own private beach overlooking the Red Sea. The resort has 2 outdoor swimming pools with sun terrace and an indoor swimming pool. The rooms and suites are air-conditioned and feature a balcony. They include a mini-bar and a seating area with a TV, as well as a safety deposit box. V Hotel Sharm El Shiekh has 3 restaurants serving Italian, Indian and international cuisine. The lobby has several seating areas and a 24-hour front desk. Free Wi-Fi is available in public areas. Sharm El Sheikh International Airport is 4.7 mi away. Naama Bay is 20 minutes by car from the resort. Public parking is available. Couples in particular like the location – they rated it 8.9 for a two-person trip.',
    imageUrl: '581507308.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/pyramisa-resort.html'
  },

  {
    name: 'Savoy Sharm El Sheikh',
    governorate: 'Sharm Elsheikh',
    stars: 5,
    description: 'Experience World-class Service at Savoy Sharm El Sheikh Located directly on the beach and in the center of SOHO Square, this 5-star resort offers lush tropical surroundings and luxurious rooms with satellite TVs. Facilities include 5 swimming pools and water sports activities that include diving and snorkeling. Tennis and squash courts are also available. The bright rooms of Savoy Sharm El Sheikh Hotel enjoy a modern and stylish interior. All rooms have a private balcony or terrace featuring panoramic views of the landscaped gardens, the pools, or the Red Sea. Savoy Sharm El Sheikh Hotel’s 6 restaurants serve dishes from all over the world, including Asian, Italian, and Mediterranean cuisine. Guests can enjoy a wide variety of drinks, live music, and water pipes at any of the 5 bars. SOHO Square Sharm El Sheikh provides entertainment for all tastes with a variety of restaurants, cafes and bars. The Aqua Spa & Wellness Center offers a range of health and beauty treatments, including Ayurvedic massages and body exfoliations. There is also a kids\' club, games room with table football, and darts. Sharm El Sheikh International Airport is 5 mi away. Pick up service available by hotel bus for an additional charge and must be arranged minimum 48 hours in advance by providing flight details to a property. Couples in particular like the location – they rated it 9.3 for a two-person trip.',
    imageUrl: '517140792.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/savoy-sharm-el-sheikh.html'
  },

  {
    name: 'Reef Oasis Blue Bay Resort & Spa',
    governorate: 'Sharm Elsheikh',
    stars: 5,
    description: 'Experience World-class Service at Reef Oasis Blue Bay Resort & Spa The elegant ultra all inclusive Reef Oasis Blue Bay is a 5-star resort located in Sharm El Sheikh, 1.2 mi from the famous Naama Bay and 3.1 mi from the airport. The property includes a private beach area, a water park and an outdoor pool. Free WiFi access is available in public areas. All rooms at the Reef Oasis are air-conditioned and include a private bathroom. The registration will be in the main lobby with the look and sound of luxury fountain, music and aroma thereby. There is a welcome area with welcome drinks served to you with our gracious hospitality upon your arrival. The Food and Beverage outlets will include the breakfast snacks and light lunches in both Leisure pool bar and beach bar. The fisherman bar will be serving you drinks at the infinity pool until sunset. The main dining room “Bay View” will be available with great varieties and food offering on its Breakfast, Lunch and dinner buffets. The Italian Restaurant will be open via our reservation program. The Gallery area along with the Pub bar will be operating 24 hours with sandwiches and beverage menu. We will have the Leisure pool with its Jacuzzi area and water slides, Baby Pool and infinity pools with the Jacuzzi area operating for your convenience along with the beach with the three Jacuzzis®. Room service will be operated 24 hours “on additional charge basis”. The property includes animation and entertainment, a sport zone, a diving center, a gym and a Spa. Reservations are required. For the convenience of our guests, the hotel provides a free “Tuftuf” every 5 min and golf carts for special service like luggage delivery. Couples in particular like the location – they rated it 9.3 for a two-person trip.',
    imageUrl: '599236414.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/reef-oasis-blue-bay-sharm-el-sheikh.html'
  },


  {
    name: 'Steigenberger Omar El Khayam Nile Cruise - From Abu Simbel for 03 Nights',
    governorate: 'Aswan',
    stars: 5,
    description: 'Experience World-class Service at Steigenberger Omar El Khayam Nile Cruise - Every Monday from Aswan for 07 & 04 Nights - Every Friday From Abu Simbel for 03 Nights Steigenberger Omar El Khayam is a 5-star cruise ship that offers luxurious cabins fitted with advanced technology. It travels between the historical cities of Aswan and Abu Simbel. It features a swimming pool with a sun-lounger terrace, and offers the ultimate relaxation experience with absolutely no disturbance. All cabins at Steigenberger Omar feature a balcony overlooking the Nile. Each room includes a satellite TV, a spacious wardrobe and a mini-bar. The suite has a spacious seating area with sofa and a marble bathroom. Guests can enjoy a gourmet class cuisine served at Abu Nawas Restaurant. Drinks and cocktails are served at Bashawat or Mamlouk Lounge. Room service is available 24 hours. For a vigorous workout, guests can make use of the gym which is equipped with cardiovascular machines. Cleopatra Spa offers relaxing massage treatments complimented by the hot tub. Steigenberger Omar El Khayam\'s itinerary is based on every Monday departure from Aswan 4 nights or 7 nights, and every Friday departure from Abu Simbel for 3 nights. Couples in particular like the location – they rated it 9.8 for a two-person trip.',
    imageUrl: '530675528.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/jaz-omar-khayam-cruise.html'
  },

  {
    name: 'Pyramisa Island Hotel Aswan',
    governorate: 'Aswan',
    stars: 5,
    description: 'Get the celebrity treatment with world-class service at Pyramisa Island Hotel Aswan Exotic resort in the middle of the Nile on an island near the center of Aswan. 28 acres of landscaped gardens with magnificent views of the Nile, mountains and Aswan city. Pyramisa Resort is a few minutes sailing to Agha Khan Mausoleum and downtown shopping area.  All 450 rooms and suites enjoy exotic panoramic views of the Nile, the mountains, tropical gardens, swimming-pools. Our spacious and comfortable rooms are nicely furnished with all modern facilities and Spa. Guests can request to arrange for pick-up service form the airport to the hotel for a charge, by using the hotel’s contact details in the confirmation e-mail received. Couples in particular like the location – they rated it 8.9 for a two-person trip.',
    imageUrl: '510651192.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/lti-pyramisa-isis-island-aswan.html'
  },

  {
    name: 'Azal Lagoons Resort Abu Simbel',
    governorate: 'Aswan',
    stars: 5,
    description: 'Get the celebrity treatment with world-class service at Azal Lagoons Resort Abu Simbel Located in Abu Simbel, 3.1 miles from Abu Simbel Temples, Azal Lagoons Resort Abu Simbel provides accommodations with an outdoor swimming pool, free private parking, a fitness center and a garden. With free WiFi, this 5-star hotel has a terrace and a bar. The property has room service, a 24-hour front desk and currency exchange for guests. The hotel will provide guests with air-conditioned rooms with a closet, an electric tea pot, a fridge, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At Azal Lagoons Resort Abu Simbel all rooms come with bed linen and towels. The accommodation offers a buffet or continental breakfast. At Azal Lagoons Resort Abu Simbel you\'ll find a restaurant serving American, Mediterranean and Middle Eastern cuisine. Vegetarian and halal options can also be requested. At the hotel guests are welcome to use a sauna. The nearest airport is Abu Simbel Airport, 0.6 miles from Azal Lagoons Resort Abu Simbel. Couples in particular like the location – they rated it 8.8 for a two-person trip.',
    imageUrl: '496552835.jpg',
    bookingUrl: 'https://www.booking.com/hotel/eg/azal-lagoons-abu-simbel-resort.html'
  }
];
