import Square from './components/square/Square';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Square color={color.color} />
    </>
  );
};

export default App;
