import React, { Component } from "react";

class HistorialSelecciones extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior:{this.props.seleccionAnterior}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{this.props.contadorHistorial}</ul>
      </div>
    );
  }
}
export default HistorialSelecciones;
