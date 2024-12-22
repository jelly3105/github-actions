import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

// Test 2
function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn and Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
