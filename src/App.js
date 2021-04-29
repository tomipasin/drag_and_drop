import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const people = [
  {
    id: '01',//ordem das respostas
    name: 'Tomi',
    thumb: 'images/tomi.png'
  },
  {
    id: '02',
    name: 'Renan',
    thumb: 'images/renan.png'
  },
  {
    id: '03',
    name: 'Michelly',
    thumb: 'images/michelly.png'
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
  }

  const correctAnswers = [
    {id: '03'},
    {id: '02'},
    {id: '01'},
  ];

  function checkAnswer() {
    const li = document.querySelectorAll(".characters-thumb");
    let answers = new Array();
    li.forEach(function (text) {
      answers.push({
        id: text.innerHTML.substr(9,2)
      });
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
                            <img id={id} src={thumb} alt={`${name} Thumb`} />
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
