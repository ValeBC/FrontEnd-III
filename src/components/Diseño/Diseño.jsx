import React, { Component } from "react";
import Historia from "../Historia/Historia";
import data from "../data.json";
import Opciones from "../Opciones/Opciones";
import HistorialSelecciones from "../HistorialSelecciones/HistorialSelecciones";
import Swal from "sweetalert2";

const contadorHistorial = [];

class Diseño extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      seleccionAnterior: "",
    };
  }

  componentDidMount() {
    Swal.fire({
      title:
        "¡Bienvenido a ELIGE TU PROPIA AVENTURA! Tus elecciones te llevarán por el recorrido de la historia de una forma u otra. ¡Adelante!",
      width: 600,
      padding: "3em",
      color: "#FFFACD",
      background: "#000000",
      backdrop: `
      rgba(0, 0, 0)
      url("https://media.giphy.com/media/vND6hHLoZlNADU9eia/giphy.gif")
      repeat
           
    `,
    });
  }

  componentDidUpdate(estadoPrevio) {
    if (estadoPrevio.contador !== this.state.contador) {
      contadorHistorial.push(this.state.seleccionAnterior);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    const contador = this.state.contador;
    const selecAnterior = this.state.seleccionAnterior;
    if (contador >= 7) {
      Swal.fire({
        title: "FIN",
        text: "¡Llegaste al final de la historia!",
        imageUrl: "https://media.giphy.com/media/13aSSyJaI5NkTm/giphy.gif",
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    } else if (id === "A" && selecAnterior !== "A") {
      this.setState({
        contador: contador + 1,
        seleccionAnterior: "A",
      });
    } else if (id === "A" && selecAnterior === "A") {
      this.setState({
        contador: contador + 2,
      });
    } else if (id === "B" && selecAnterior === "A") {
      this.setState({
        contador: contador + 3,
        seleccionAnterior: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: contador + 2,
        seleccionAnterior: "B",
      });
    }
    console.log(contadorHistorial);

    console.log(contador);
  };

  render() {
    return (
      <>
        <Historia contador={[this.state.contador]} />
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <HistorialSelecciones
          seleccionAnterior={this.state.seleccionAnterior}
          contadorHistorial={contadorHistorial.map(
            (contadorHistorial, i) => (
              <li key={i}>{contadorHistorial}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </>
    );
  }
}

export default Diseño;
