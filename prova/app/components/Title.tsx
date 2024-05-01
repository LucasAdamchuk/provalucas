import React from 'react';

export default function Header() {
  return (
    <div className="bg-white">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center py-8">
          <div className="order-1 sm:order-2 mb-4 sm:mb-0">
            <img className="h-70 w-70" src="/img/pessoa.svg" alt="Imagem" />
          </div>
          {/* Texto */}
          <div className="order-2 sm:order-1 text-center sm:text-left"> {/* Centralizado em dispositivos móveis e à esquerda em dispositivos maiores */}
            <h3 className="text-3xl">Lorem ipsum dolor adipiscing</h3>
            <h4 className="text-3xl">met dolor consequat</h4>
            <p className="text-lg">Adipiscing a commodo ante nunc accumsan et interdum mi</p>
            <p className="text-lg">ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat</p>
            <p className="text-lg">aclacus nascetur ac non. Lorem curae et ante amet sapien sed</p>
            <p className="text-lg">tempus adipiscing id accumsan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
