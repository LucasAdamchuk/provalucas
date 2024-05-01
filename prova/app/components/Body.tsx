import React from 'react';

export default function Body() {
  return (
    <div>
      <div className="font-bold">
        <h3 className="text-center text-2xl">Adipiscing amet consequat</h3>
      </div>
      <div className="mt-6 grid gap-4 items-center md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl text-center">
          <a href="https://google.com">
            <img className="mx-auto" src="/img/perna.svg" alt="" />
            <div>
              <h4 className="text-2xl">Magna feugiat lorem</h4>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi</p>
            <p>ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            </div>
            <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg mx-auto">
          MORE
        </button>
          </a>
        </div>

        <div className="rounded-2xl text-center">
          <a href="https://google.com">
            <img className="mx-auto" src="/img/rua.svg" alt="" />
            <div>
              <h4 className="text-2xl">Magna feugiat lorem</h4>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi</p>
            <p>ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            </div>
            <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg mx-auto">
          MORE
        </button>
          </a>
        </div>

        <div className="rounded-2xl text-center">
          <a href="https://google.com">
            <img className="mx-auto" src="/img/casa.svg" alt="" />
            <div>
              <h4 className="text-2xl" >Magna feugiat lorem</h4>
            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi</p>
            <p>ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
            </div>
          </a>
          <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg mx-auto">
          MORE
        </button>
        </div>
      </div>
    </div>
  );
}
