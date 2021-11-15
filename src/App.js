import React from 'react';
import './style.scss';
import eclair from './eclair.png';
import normal from './normal.png';
import combat from './combat.png';
import pikachu from './pikachu.png';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <p>
          <p className='niveauEvo'>Pokémon de base</p>
          <p className='nomPokemon'>Pikachu</p>
        </p>
        <p>
          <span className='PV'>40 PV</span>
          <img src={eclair} className='eclair'></img>
        </p>
      </div>
      <img src={pikachu} className='pikachu'></img>
      <p className='description'>
        Pokémon Souris. Taille : 0.4 m, poids : 6 kg
      </p>
      <div className='skill1'>
        <p>
          <img src={normal} className='normal'></img>
          <img src={combat} className='combat'></img>
        </p>
        <p>Rogne</p>
        <p>10</p>
      </div>
      <div className='downBar'></div>
      <div className='skill2'>
        <p>
          <img src={eclair} className='eclairSkill2 '></img>
          <img src={normal} className='normal'></img>
        </p>
        <p>
          Secousse Tonnerre
          <br />
          <span className='detailSkill'>
            Lancez une pièce. Si c'est pile,
            <br />
            Pikachu s'inflige 10 dégats
          </span>
        </p>
        <p>30</p>
      </div>
      <div className='downBar'></div>
      <div className='downCard1'>
        <p>Faiblesse</p>
        <p>Résistance</p>
        <p>Coût de retraite</p>
      </div>
      <div className='downCard2'>
        <img src={combat} className='combatRetraite'></img>
        <img src={normal} className='normalRetraite'></img>
      </div>
      <div className='lore'>
        Quand plusieurs de ces Pokémon se réunissent, ils <br />
        provoquent de gigantesques orages. NIV 12. No. 25
      </div>
      <div className='rare'>58/102 •</div>
    </div>
  );
}

export default App;
