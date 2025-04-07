import React from 'react';
import './App.css'
import logo from './logo.svg';

const magazines = [
  { id: 1, title: 'Fenway Park', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Mikes Pastry', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Faneuil Haul', theme: 'design', isAvailable: false },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'orange' : 'green'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'TD Garden',
  location: 'Boston, MA',
  credit: 'Photo taken by Jack Malatesta',
  image: logo,
  width: '264',
  height: '378'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} </h2>
      <h3>{book.location}</h3>
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
      <p>{book.credit}</p>
    </div>
  );
}

function MagicButton() {
  return (
    <>
    <h3>This button will take you to nothing!</h3>
    <button>Click Here</button>
    </>
  );
}

function App() {
  return (
    <>
    <h1>Places to Visit in Boston</h1>
    <ZineRack/>
    <Bookshelf/>
    <MagicButton/>
    </>
  )
}

export default App
