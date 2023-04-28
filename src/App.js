
import Profile from './profile/profile';
import picture from './flower.jpg';

function App() {
  const handleName = (name) => {
    alert(`My  name is ${name}`);
  };

  return (
    <div>
      <Profile
        fullName="Amine Smida"
        bio="I'm Limited edition"
        profession="Web Developer"
        handleName={handleName}
      >
        {picture}
      </Profile>
    </div>
  );
}

export default App;
