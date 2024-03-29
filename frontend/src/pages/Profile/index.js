import React from 'react';
import { Link } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vindo, APAD</span>

        <Link className="button"to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#e20241" />
        </button>
      </header>

      <h1>Casos cadastrados </h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição do teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
      </ul>
    </div>
  )
}