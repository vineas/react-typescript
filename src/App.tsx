import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='Malih' messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text </Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Button handleClick={() => {
        alert('Button clicked');
      }} />
    </div>
  );
}

export default App;
