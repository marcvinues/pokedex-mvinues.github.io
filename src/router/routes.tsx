import React from 'react'
import { generatePath } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'


export const Router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home1111</h1>
  },
  {
    path: '/:pokemonId',
    element: <h1>Detail</h1>
  }
])

export const PokemonRoute = {
  path: "/:pokemonName",
  generatePath(params: { PokemonName: string }) {
    return generatePath(this.path, 
      {...params})
  }
}