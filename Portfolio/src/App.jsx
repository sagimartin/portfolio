import { useTranslation } from 'react-i18next';
import './i18n'
import DesktopUI from './components/DesktopUI';

import './App.css';

function App() {
  return (
    <DesktopUI style={{ maxWidth: "2560px", minWidth: "320px" }}/>
  );
}

export default App;
