import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Notas () {

  const notas = [
    {
      id : uuidv4(),
      tarea : 'Estudiar ADSO'
    },
    {
      id : uuidv4(),
      tarea : 'Estudiar Javascript'
    },
    {
      id : uuidv4(),
      tarea : 'Estudiar React'
    },
    {
      id : uuidv4(),
      tarea : 'Elaborar evidencias'
    }
  ]

  return (
    <section className = 'formatoFondoNotas'>
      <ul>
        {notas.map (
          nota => <li key = {nota.id}> {nota.tarea} </li>
        )}
      </ul>
    </section>
  )
}

export default Notas;