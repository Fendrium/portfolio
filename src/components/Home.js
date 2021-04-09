import React from 'react';
import bg from '../static/bg-img.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={bg}
        alt="background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h className="text-6xl text-cyan-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello, I'm Charlie
        </h>
      </section>
    </main>
  );
}
