import React from "react";
import { withStorageListener } from './withStoragelistener'

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return <div>Hubo Cambios?</div>;
  }

}

const ChangeAlertWithStorageListener = withStorageAlert(changeAlert)

export  {ChangeAlertWithStorageListener};