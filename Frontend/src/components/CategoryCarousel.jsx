import React from 'react'

import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { setsearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Date Science",
    "Graphic Designer",
    "FullStack Developer",

]
const CategoryCarousel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const searchJobHandler = (query) => {
        dispatch(setsearchedQuery(query));
        navigate("/browse");
      };
    return (
        <div>
            <Carousel className="w-full max-w-2xl mx-auto my-20">
                <CarouselContent className="gap-4">
                    {category.map((cat, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                            <Button
                                onClick={() => searchJobHandler(cat)}
                                variant="outline"
                                className="rounded-full px-6 py-2 font-medium border-gray-300 
          hover:bg-orange-500 hover:text-white hover:border-orange-500 
          hover:shadow-md hover:scale-105 transition-all duration-300"
                            >
                                {cat}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="hover:bg-orange-500 hover:text-white transition-all" />
                <CarouselNext className="hover:bg-orange-500 hover:text-white transition-all" />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
