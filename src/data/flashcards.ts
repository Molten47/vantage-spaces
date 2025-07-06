import type { FlashCard } from '../types/flashcard'
import WallPlant from '../assets/Wall plantings.jpg'
import CeilingPlant from '../assets/ceiling plantings.jpg'
import BoxPlant from '../assets/Plants on display.jpg'
import HousePlant from '../assets/planted furniture.jpg'

 export const flashCards : FlashCard[]  = [
    {
      id: 1,
      image: BoxPlant,
      title: 'Plants and displays',
      head:'Plants and displays',
      cta: 'Discover',
      paragraph: 'Enhancing your surroundings and providing benefits beyond aesthetics alone'
    },
    {
      id: 2,
      image: CeilingPlant,
      title: 'Ceiling Plants',
      head:'Ceiling Plants',
      cta: 'Discover',
      paragraph: 'Enhancing your surroundings and providing benefits beyond aesthetics alone'
    },
    {
      id: 3,
      image: WallPlant,
      title: 'Wall Plantings',
      head:'Wall Plantings',
      cta: 'Discover',
      paragraph: 'Enhancing your surroundings and providing benefits beyond aesthetics alone'
    },
    {
      id: 4,
      image: HousePlant,
      title: 'Adorning plants',
      head:'Adorning plants',
      cta: 'Discover',
      paragraph: 'Enhancing your surroundings and providing benefits beyond aesthetics alone'
    }
  ]