"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";


export const projects = [
    {
        title: "Spotify",
        description:
            "A digital music streaming service that gives users access to millions of songs, podcasts, and playlists from artists worldwide.",
        link: "https://spotify.com",
    },
    {
        title: "Apple Music",
        description:
            "A music streaming service that offers a vast library of songs, curated playlists, and exclusive content for subscribers.",
        link: "https://music.apple.com",
    },
    {
        title: "SoundCloud",
        description:
            "An open audio platform that enables creators to upload, promote, and share their music with listeners worldwide.",
        link: "https://soundcloud.com",
    },
    {
        title: "YouTube Music",
        description:
            "A music streaming service by YouTube, offering official tracks, music videos, remixes, live performances, and more.",
        link: "https://music.youtube.com",
    },
    {
        title: "Tidal",
        description:
            "A high-fidelity music streaming service offering lossless audio, curated playlists, and exclusive artist content.",
        link: "https://tidal.com",
    },
    {
        title: "Bandcamp",
        description:
            "An online music platform that helps independent artists share and sell their music directly to fans.",
        link: "https://bandcamp.com",
    },
];


function UpcominWebinars() {
    return (
        <div className=' bg-gray-900 pt-10 h-full'>
            <div className=" mx-auto-px-4 sm:px-6">
                <div className='text-center'>
                    <h2 className='uppercase tracking-wide font-semibold text-teal-600'>Featured Webinar</h2>
                    <p className='sm:text-4xl font-bold text-3xl tracking-wide'>Enhance Your Musical Journey</p>
                </div>
                <div className='mt-10'>
                    <div className="w-full sm:max-w-7xl mx-auto px-8">
                        <HoverEffect items={projects} />
                    </div>
                </div>
                <div className='text-center pb-10'>
                    <Link href="/courses"
                        className='px-6  py-2 border-1 bg-gray-600 rounded-3xl'>
                        View All Webinars
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default UpcominWebinars
