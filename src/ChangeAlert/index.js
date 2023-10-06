import React from "react";
import { withStorageListener } from './withStoragelistener'

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo Cambios?</p>
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export  {ChangeAlertWithStorageListener};