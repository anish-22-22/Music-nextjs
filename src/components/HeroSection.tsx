import Link from 'next/link'
import React from 'react'

import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className='h-screen  w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className='p-4 w-full relative z-10 text-center'>
        <h1
        className='text-4xl md:text-7xl mt-20 md:mt-0 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
        >Master the art of Music</h1>
        <p
        className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
        >Dive into our comprehensive music and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
      </div>
      <div className="mt-4 ">
        <Link href = {"/cources"}>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-neutral-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Cources
      </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
