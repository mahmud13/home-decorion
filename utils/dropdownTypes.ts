import { StaticImageData } from 'next/image';
import bathroomRoomImg from '../public/images/room-types/bathroom.png';
import bedroomRoomImg from '../public/images/room-types/bedroom.png';
import diningRoomImg from '../public/images/room-types/dining-room.png';
import gamingRoomImg from '../public/images/room-types/gaming-room.png';
import livingRoomImg from '../public/images/room-types/living-room.png';
import officeRoomImg from '../public/images/room-types/office.png';
import minimalistImg from '../public/images/themes/minimalist.png';
import modernImg from '../public/images/themes/modern.png';
import professionalImg from '../public/images/themes/professional.png';
import tropicalImg from '../public/images/themes/tropical.png';
import vintageImg from '../public/images/themes/vintage.png';

export type themeType = {
  name: 'Modern' | 'Vintage' | 'Minimalist' | 'Professional' | 'Tropical';
  img: string | StaticImageData;
};

export type roomType = {
  name:
    | 'Living Room'
    | 'Dining Room'
    | 'Bedroom'
    | 'Bathroom'
    | 'Office'
    | 'Gaming Room';
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
];
export const rooms: roomType[] = [
  {
    name: 'Living Room',
    img: livingRoomImg,
  },
  {
    name: 'Dining Room',
    img: diningRoomImg,
  },
  { name: 'Bedroom', img: bedroomRoomImg },
  { name: 'Bathroom', img: bathroomRoomImg },
  { name: 'Office', img: officeRoomImg },
  {
    name: 'Gaming Room',
    img: gamingRoomImg,
  },
];
