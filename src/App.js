import './App.css';
import Signup from './components/Login';
import Login from './components/Signup';
import { StreamChat } from "stream-chat"
import Cookies from 'universal-cookie';

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(API_KEY);

  if (token){
    // kommer connecta användaren till ett specifict konto
    client.connectUser({
      id: cookies.get("userId"),
      firstName: cookies.get("firstName"),
      lastName: cookies.get("lastName"),
      name: cookies.get("username"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    token
    ).then((user)=> {
      console.log(user)
    });
}
  return (
    <div className="App">
      <Signup />
      <Login />
    </div>
  );
}

export default App;
