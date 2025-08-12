import React from 'react'
import Hero from './Hero/Hero'
import Choose from './Choose/Choose'
import { Slider } from './Slider/Slider'
import Property from './Property/Property'
import Banner from './Banner/Banner'
import Explore from './Explore/Explore'
import Inquiry from './Inquiry/Inquiry'
import Testimonial from './Testimonial/Testimonial'
import RoomsPage from '../main/Rooms/Rooms'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Room, rooms } from '../data/types'




const limitedRooms = Object.values(
  rooms.reduce((acc: Record<string, Room[]>, room) => {
    if (!acc[room.category]) {
      acc[room.category] = [];
    }
    if (acc[room.category].length < 4) {
      acc[room.category].push(room);
    }
    return acc;
  }, {} as Record<string, Room[]>)
).flat();
const Landing = () => {
  return (
    <div className='' >
      <Hero />
      <div className="p-5">
        <div className="bg-gray-50 py-4">
          <RoomsPage rooms={limitedRooms} />
          <Link href={"/rooms"} className="flex justify-center">
            <Button variant="outline">Browse More Rooms</Button>
          </Link>
        </div>
        <Slider />

        <Choose />

        <Property />
        <Banner />
        <Explore />
        <Inquiry />
        <Testimonial />
      </div>
    </div>
  )
}

export default Landing
