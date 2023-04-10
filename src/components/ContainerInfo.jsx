import React from 'react'
import Button from './Button';
import "./styles/Container_Info.css"

const ContainerInfo = ({quote, handleNewQuote}) => {
  return (
    <section className='containerInfo'>
    <h1 className='container__title'>Galletas De La Fortuna</h1>

   <Button handleNewQuote={handleNewQuote} ></Button>
    <article className='containerInfo__phrase'>
      <p>{quote.phrase}</p>
    </article>
    
    <article className='containerInfo__author'>
      <h4>Fuente: {quote.author}</h4>
    </article>
  </section>

  );
};

export default ContainerInfo