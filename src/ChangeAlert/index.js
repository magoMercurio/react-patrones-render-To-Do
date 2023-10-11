import React from "react";
import { useStorageListener } from './useStoragelistener'

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  console.log(show)
  if (show) {
    return (
      <div>
        <p>Hubo Cambios</p>
        <button
          onClick={() => toggleShow(false)}
        >
          Volver a cargar la informacion
        </button>
      </div>
    )
  } else {
    return null;
  }

}

export  {ChangeAlert};