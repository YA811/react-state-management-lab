// src/App.jsx
import { useState } from 'react';
import './App.css';


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = ()=>{
    if(money >= zombieFighters[0].price){
      setMoney(money - zombieFighters[0].price);
      setTotalStrength(totalStrength + zombieFighters[0].strength);
      setTotalAgility(totalAgility + zombieFighters[0].agility);
      setTeam([...team, zombieFighters[0]]);
    }
    else{
      alert('Not enough money');
    }
  };

  const handleRemoveFighter = () => {
    const newTeam = team.filter((_, i) => i!== 0);
    setTeam(newTeam);
    setMoney(money + zombieFighters[0].price);
    setTotalStrength(totalStrength - zombieFighters[0].strength);
    setTotalAgility(totalAgility - zombieFighters[0].agility);

  }

  return (
    <>
    <h1>Zombie fighters</h1>
  <ul>
   <li>
 <h3> Money: {money}</h3>
</li> 
<li>
 <h3> Team Strength: {totalStrength}</h3>
</li> 
<li>
 <h3> Team Agility: {totalAgility}</h3>
</li> 

<li>
  {team.length === 0? <h2>Pick some team members!</h2> : team.map((character, index) => (
    <li key={index}>
      <img src={character.img} />
      <p>Name: {character.name}</p>
      <p>Price: {character.price}</p>
      <p>Strength: {character.strength}</p>
      <p>Agility: {character.agility}</p>
      <button onClick={handleRemoveFighter}>Delete</button>
    </li>
  ))}
</li>

<li>
  {zombieFighters.map((zombieFighter, index) => (
    <li key={index}>
      <img src={zombieFighter.img}  />
      <p>Name: {zombieFighter.name}</p>
      <p>Price: {zombieFighter.price}</p>
      <p>Strength: {zombieFighter.strength}</p>
      <p>Agility: {zombieFighter.agility}</p>
      <button onClick={handleAddFighter}>Add</button>
    </li>
  ))}
</li>
  </ul>
</>
  );
}

export default App
