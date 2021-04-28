import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const people = [
  {
    id: 'tomi',
    name: 'Tomi',
    thumb: 'public/images/tomi.png'
  },
  {
    id: 'renan',
    name: 'Renan',
    thumb: 'public/images/renan.png'
  },
  {
    id: 'michelly',
    name: 'Michelly',
    thumb: 'public/images/michelly.png'
  },

]

function App() {
  const [characters, updateCharacters] = useState(people);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
    console.log(items)
  }

  const correctAnswers = [
    '<img src="/images/michelly.png" alt="Michelly Thumb">',
    '<img src="/images/renan.png" alt="Renan Thumb">',
    '<img src="/images/tomi.png" alt="Tomi Thumb">',
  ];

  function checkAnswer() {
    const li = document.querySelectorAll(".characters-thumb");
    let answers = new Array();
    li.forEach(function (text) {
      answers.push(text.innerHTML);
    });
    if (JSON.stringify(correctAnswers) === JSON.stringify(answers)) {
      alert("Acertou!!!!!!!!");
    } else {
      alert("Errrrrooooouuuuuu!!!!!!!!!");
    }
    console.log(answers)
    console.log(correctAnswers)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>teste de drag & drop</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul id="w" className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li id="char" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            {name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <button className="but"onClick={checkAnswer}>Finalizar</button>
      </header>
    </div>
  );
}

export default App;
