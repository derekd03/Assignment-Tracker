import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <>
    <div className="p-2">
      <h3>About</h3>
      <br></br>
      <p>
        By: Derek D'Souza - A01266791
      </p>
      <br></br>
      <p>
        This is a simple assignment tracker app built with Vite, Tanstack and Zustand.
      </p>
    </div>
    </>
  )
}
