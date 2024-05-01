import React from 'react';

export default function Header() {
  return (
    <div className="bg-blue-500 py-8">
      <div className="container mx-auto text-center text-white">
        <h3 className="text-3xl">hy, I'm Studant, another fine lottle freebie from UTFPR.</h3>
        <p className="mt-4 text-lg">Accumsan feugiat mi commodo erat lorem ipsum, sed magna</p>
        <p className="text-lg">lobortis feugiat sapien sed etiam volutpat accumsan.</p>
        <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg mx-auto">
          DISCOVER
        </button>
      </div>
    </div>
  );
}
