import React from 'react';

// Importando as imagens
import lasanha from './assets/Massas/Ambientada/Lasanha Frita - full web.webp';
import penne from './assets/Massas/Ambientada/Penne com Cubos de Mignon - full web.webp';
import pirogue from './assets/Massas/Ambientada/Pirogue ao Molho Calabria - full.webp';
import talharim from './assets/Massas/Ambientada/Talharim ao Molho Bolonhesa - full web.webp';
import tortellini from './assets/Massas/Ambientada/Tortellini de Maçã - full.webp';
import pesto from './assets/Massas/Ambientada/pâtes à la sauce pesto.png';

import bacalhau from './assets/Principais/Ambientada/Bacalhau - full web.webp';
import bifeChorizoCarbonara from './assets/Principais/Ambientada/Bife de Chorizo com Talharim a La Carbonara - full web.webp';
import bifeChorizoSugo from './assets/Principais/Ambientada/Bife de Chorizo com Talharim ao Sugo - full web.webp';
import frenchRack from './assets/Principais/Ambientada/French Rack de Cordeiro com Aligot - Full web.webp';
import mignonPoivre from './assets/Principais/Ambientada/Mignon ao Poivre - full.webp';
import mignonParmegiana from './assets/Principais/Ambientada/Mignon à Parmegiana - full web.webp';
import salmao from './assets/Principais/Ambientada/Salmão Grelhado com Crosta de Parmesão e Legumes - full web.webp';
import tilapia from './assets/Principais/Ambientada/Tilápia à Belle Munière - full web.webp';
import risottoLegumes from './assets/Principais/Ambientada/risotto au fromage Époisses et sauce au vin blanc.jpeg';

import risotoMineira from './assets/Risotos/Ambientada/Risoto a Marineira - full.webp';
import risotoMare from './assets/Risotos/Ambientada/Risoto ao Mare - full web.webp';
import risotoVegetariano from './assets/Risotos/Ambientada/Risoto Vegetariano - full.webp';

import sopaAgnolini from './assets/Sopas/Ambientada/Sopa de Agnolini de Queijo - full.webp';
import sopaLegumes from './assets/Sopas/Ambientada/Sopa de Legumes - full web.webp';
import sopaMinestrone from './assets/Sopas/Ambientada/Sopa Minestrone - full web.webp';

const products = {
  massas: [
    { id: 1, name: 'Lasanha Frita', price: 60, img: lasanha, alt: 'Lasanha Frita empanada e frita, recheada com carne moída, molho de tomate e queijo. Preço: R$60' },
    { id: 2, name: 'Penne com Cubos de Mignon', price: 65, img: penne, alt: 'Penne ao molho sugo com cubos de filé mignon salteados. Preço: R$65' },
    { id: 3, name: 'Pirogue ao Molho Calabria', price: 60, img: pirogue, alt: 'Pirogue (massa recheada) com molho de linguiça calabresa e queijo. Preço: R$60' },
    { id: 4, name: 'Talharim ao Molho Bolonhesa', price: 65, img: talharim, alt: 'Talharim ao molho bolonhesa tradicional com carne moída, legumes e especiarias. Preço: R$65' },
    { id: 5, name: 'Tortellini de Maçã', price: 65, img: tortellini, alt: 'Tortellini recheado com maçã caramelizada e queijo brie, servido ao molho de manteiga e sálvia. Preço: R$65' },
    { id: 6, name: 'Pâtes à la Sauce Pesto', price: 60, img: pesto, alt: 'Pâtes ao molho pesto com manjericão fresco, pinhões, queijo parmesão e azeite de oliva. Preço: R$60' },
  ],
  pratosPrincipais: [
    { id: 7, name: 'Bacalhau', price: 80, img: bacalhau, alt: 'Prato de Bacalhau: Filetes de bacalhau grelhados servidos com legumes salteados e batatas cozidas. Preço: R$80' },
    { id: 8, name: 'Bife de Chorizo com Talharim à La Carbonara', price: 75, img: bifeChorizoCarbonara, alt: 'Bife de Chorizo com Talharim à La Carbonara: Bife de chorizo grelhado acompanhado de talharim com molho à carbonara. Preço: R$75' },
    { id: 9, name: 'Bife de Chorizo com Talharim ao Sugo', price: 75, img: bifeChorizoSugo, alt: 'Bife de Chorizo com Talharim ao Sugo: Bife de chorizo grelhado acompanhado de talharim com molho de tomate. Preço: R$75' },
    { id: 10, name: 'French Rack de Cordeiro com Aligot', price: 80, img: frenchRack, alt: 'French Rack de Cordeiro com Aligot: Costeletas de cordeiro assadas servidas com aligot (purê de batatas com queijo). Preço: R$80' },
    { id: 11, name: 'Mignon ao Poivre', price: 80, img: mignonPoivre, alt: 'Mignon ao Poivre: Filé mignon grelhado com molho de pimenta do reino. Preço: R$80' },
    { id: 12, name: 'Mignon à Parmegiana', price: 80, img: mignonParmegiana, alt: 'Mignon à Parmegiana: Filé mignon empanado e frito com molho de tomate e queijo mussarela. Preço: R$80' },
    { id: 13, name: 'Salmão Grelhado com Crosta de Parmesão e Legumes', price: 75, img: salmao, alt: 'Salmão Grelhado com Crosta de Parmesão e Legumes: Filé de salmão grelhado com crosta de parmesão e legumes salteados. Preço: R$75' },
    { id: 14, name: 'Tilápia à Belle Munière', price: 80, img: tilapia, alt: 'Tilápia à Belle Munière: Filé de tilápia empanado e frito com manteiga e limão. Preço: R$80' },
    { id: 15, name: 'Risotto de Legumes Grelhados com Carne Branca ao Molho Shoyu', price: 80, img: risottoLegumes, alt: 'Risotto de Legumes Grelhados com Carne Branca ao Molho Shoyu: Risotto de legumes grelhados com carne branca e molho shoyu. Preço: R$80' },
  ],
  risotos: [
    { id: 16, name: 'Risoto à Mineira', price: 75, img: risotoMineira, alt: 'Risoto à Mineira: Risoto de frango com legumes e couve, finalizado com queijo parmesão. Preço: R$75' },
    { id: 17, name: 'Risoto ao Mare', price: 75, img: risotoMare, alt: 'Risoto ao Mare: Risoto de frutos do mar com legumes e vinho branco. Preço: R$75' },
    { id: 18, name: 'Risoto Vegetariano', price: 70, img: risotoVegetariano, alt: 'Risoto Vegetariano: Risoto de legumes com cogumelos e queijo parmesão. Preço: R$70' },
  ],
  sopas: [
    { id: 19, name: 'Sopa de Agnolini de Queijo', price: 35, img: sopaAgnolini, alt: 'Sopa de Agnolini de Queijo: Caldo de legumes com agnolini recheados de queijo. Preço: R$35' },
    { id: 20, name: 'Sopa de Legumes', price: 35, img: sopaLegumes, alt: 'Sopa de Legumes: Caldo de legumes frescos com croutons. Preço: R$35' },
    { id: 21, name: 'Sopa Minestrone', price: 40, img: sopaMinestrone, alt: 'Sopa Minestrone: Sopa italiana de legumes com macarrão e pesto. Preço: R$40' },
  ],
};

const ProductList = ({ addToCart }) => {
  return (
    <div>
      {/* Seção Massas */}
      <div className="nomes">
        <h2 aria-label="Massas">Massas</h2>
      </div>
      <div className="list">
        {products.massas.map(product => (
          <div className="item" key={product.id}>
            <img src={product.img} alt={product.alt} />
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

      {/* Seção Pratos Principais */}
      <div className="nomes">
        <h2 aria-label="Pratos Príncipais">Pratos Principais</h2>
      </div>
      <div className="list">
        {products.pratosPrincipais.map(product => (
          <div className="item" key={product.id}>
            <img src={product.img} alt={product.alt} />
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

      {/* Seção Risotos */}
      <div className="nomes">
        <h2 aria-label="Risotos">Risotos</h2>
      </div>
      <div className="list">
        {products.risotos.map(product => (
          <div className="item" key={product.id}>
            <img src={product.img} alt={product.alt} />
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

      {/* Seção Sopas */}
      <div className="nomes">
        <h2 aria-label="Sopas">Sopas</h2>
      </div>
      <div className="list">
        {products.sopas.map(product => (
          <div className="item" key={product.id}>
            <img src={product.img} alt={product.alt} />
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;