import { StaticImageData } from 'next/image';
import bathroomRoomImg from '../public/images/room-types/bathroom.png';
import bedroomRoomImg from '../public/images/room-types/bedroom.png';
import childrensRoomImg from '../public/images/room-types/childrens-room.jpg';
import diningRoomImg from '../public/images/room-types/dining-room.png';
import gamingRoomImg from '../public/images/room-types/gaming-room.png';
import garageImg from '../public/images/room-types/garage.jpg';
import guestBedroomImg from '../public/images/room-types/guest-bedroom.jpg';
import gymImg from '../public/images/room-types/gym.jpg';
import livingRoomImg from '../public/images/room-types/living-room.png';
import officeRoomImg from '../public/images/room-types/office.png';
import homeOfficeImg from '../public/images/room-types/home-office.jpg';
import kitchenImg from '../public/images/room-types/kitchen.png';

import artisanImg from '../public/images/themes/artisan.jpg';
import biophilicImg from '../public/images/themes/biophilic.jpg';
import bohemianImg from '../public/images/themes/bohemian.jpg';
import coastalImg from '../public/images/themes/coastal.jpg';
import contemporaryImg from '../public/images/themes/contemporary.jpg';
import countryImg from '../public/images/themes/country.jpg';
import creamyImg from '../public/images/themes/creamy.jpg';
import industrialImg from '../public/images/themes/industrial.png';
import maximalistImg from '../public/images/themes/maximalist.jpg';
import minimalistImg from '../public/images/themes/minimalist.png';
import modernImg from '../public/images/themes/modern.png';
import naturalwoodtImg from '../public/images/themes/natural wood.jpg';
import neoclassicaltImg from '../public/images/themes/neoclassical.jpg';
import newchineseImg from '../public/images/themes/new-chinese.jpg';
import professionalImg from '../public/images/themes/professional.png';
import retroImg from '../public/images/themes/retro.jpg';
import scandinavianImg from '../public/images/themes/scandinavian.jpg';
import skichaletImg from '../public/images/themes/ski-chalet.jpg';
import softImg from '../public/images/themes/soft.jpg';
import southwesternImg from '../public/images/themes/southwestern.jpg';
import transitional from '../public/images/themes/transitional.jpg';
import tropicalImg from '../public/images/themes/tropical.png';
import vintageImg from '../public/images/themes/vintage.png';

export type themeType = {
  name: string;
  img: string | StaticImageData;
};

export type roomType = {
  name: string;
  img: string | StaticImageData;
};

export const themes: themeType[] = [
  { name: 'Modern', img: modernImg },
  { name: 'Vintage', img: vintageImg },
  { name: 'Minimalist', img: minimalistImg },
  {
    name: 'Professional',
    img: professionalImg,
  },
  { name: 'Tropical', img: tropicalImg },
  { name: 'Bohemian', img: bohemianImg },
  { name: 'Coastal', img: coastalImg },
  { name: 'Artisan', img: artisanImg },
  { name: 'Biophilic', img: biophilicImg },
  { name: 'Contemporary', img: contemporaryImg },
  { name: 'Country', img: countryImg },
  { name: 'Creamy', img: creamyImg },
  { name: 'Industrial', img: industrialImg },
  { name: 'Maximalist', img: maximalistImg },
  { name: 'Natural wood', img: naturalwoodtImg },
  { name: 'Neoclassical', img: neoclassicaltImg },
  { name: 'New chinese', img: newchineseImg },
  { name: 'Retro', img: retroImg },
  { name: 'Scandinavian', img: scandinavianImg },
  { name: 'Ski chalet', img: skichaletImg },
  { name: 'soft', img: softImg },
  { name: 'Southwestern', img: southwesternImg },
  { name: 'Transitional', img: transitional },
];
export const rooms: roomType[] = [
  { name: 'Living Room', img: livingRoomImg },
  { name: 'Dining Room', img: diningRoomImg },
  { name: 'Bedroom', img: bedroomRoomImg },
  { name: 'Bathroom', img: bathroomRoomImg },
  { name: 'Office', img: officeRoomImg },
  { name: 'Gaming Room', img: gamingRoomImg },
  { name: 'Childrens Room', img: childrensRoomImg },
  { name: 'Garage', img: garageImg },
  { name: 'Guest Bedroom', img: guestBedroomImg },
  { name: 'Gym', img: gymImg },
  { name: 'Home Office', img: homeOfficeImg },
  { name: 'Kitchen.', img: kitchenImg },
];
