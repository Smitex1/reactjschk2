import logo from './logo.svg';
import './App.css';

import ProfilePhoto from './component/Profile/profilePhoto';
import FullName from './component/FullName';
import Address from './component/Profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
     
    </div>
  );
}

export default App;
