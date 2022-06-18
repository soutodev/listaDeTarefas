
import React, { Component } from "react";

//form
import { FaPlus } from 'react-icons/fa';

//Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';



import './Main.css';

export default class Main extends Component {
  //class field
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Beber água',
      'Estudar',
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit />
                <FaWindowClose />
              </div>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
