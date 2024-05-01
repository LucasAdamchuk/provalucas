import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="bg-black py-8">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-3xl">Ipsum feugiat consequat?</h3>
          <p className="text-lg">Sed lacus nascetur ac ante amet sapien.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-500 px-4 py-2 rounded-lg">
              SIGIN UP
            </button>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-lg">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 py-8">
        <div className="container mx-auto text-center text-white" style={{ padding: '20px' }}>
          <p>© Untitled | Design: Estudantes Web</p>
        </div>
      </div>
    </div>
  );
}
