"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "/1.jpg",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "/2.jpg",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "/1.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "/2.jpg",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "/1.jpg",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "/2.jpg",
    },
];

function Instructors() {
    return (
        <div className="h-screen">
            <WavyBackground className="max-w-4xl mx-auto pb-40">
                <p className="mt-20 text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                    I am Musician
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                    We have built millions of musicians.
                </p>
                <div className="flex flex-row items-center justify-center pt-10 mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors
