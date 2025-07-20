"use client"
import { p } from "motion/react-client"
import courseData from "../data/music_courses.json"
import Link from "next/link"

import { BackgroundGradient } from "./ui/background-gradient";

import Image from "next/image";


// data type define in typescript
interface Course {
    course_id: number,
    title: string,
    instructor: string,
    duration: string,
    level: string,
    price: number,
    description: string,
    is_featured: boolean,
    image_url: string,
}

function FeaturedCources() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.is_featured)//calling of data type
    const images = courseData.courses.filter((course: Course) => course.image_url)//calling of data type
    
    

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className="text-teal-600 text-base font-semibold tracking-wide uppercase">Featured Cources</h2>
                    <p className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight ">Learn with the best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        
                        <div key={course.course_id} className="flex justify-center">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden h-full " >
                                <div className="p-2 sm:p-4 text-center items-center flex flex-col">
                                    <img
                                        src={course.image_url}
                                        alt="jordans"
                                        
                                        className="object-cover rounded-2xl h-[200px] w-[300px] mb-5"
                                    />
                                    <p className="text-xl font-bold mb-5">{course.title}</p>
                                    <p className="text-gray-300 text-sm">{course.description}</p>
                                    <Link href={`/courseData/${course.course_id}`} className="border-1 rounded-2xl mt-5 py-2 px-4 ">
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/cources"}
                    className="py-4 px-20  bg-gray-700 rounded-2xl border-1"
                >
                    View All Cources
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCources
