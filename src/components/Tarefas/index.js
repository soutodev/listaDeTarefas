import React from "react";
import PropTypes from "prop-types";
import { FaWindowClose, FaEdit } from "react-icons/fa";
import './Tarefas.css';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => handleEdit(e, index)}
                />

                <FaWindowClose
                 onClick={(e) => handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
  );
}

Tarefas.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
}
