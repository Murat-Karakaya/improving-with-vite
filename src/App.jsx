import logo from '/logo.svg'
import './App.css'
import Moveable from './my_modules/Moveable.jsx';

function App() {
  


  return (
    <>
      <Moveable>
          <img src={logo} className="logo" alt="Murat logo" />
      </Moveable>
      <h1>Improving Deployment</h1>
      <p>{`This website was made to experiment about deploying vite. While creating this site, I came across this cool effect where you can change the place of this logo whenever you like. Use the arrow keys to change the place of this logo ;)`}</p>
      <p>Also, the design mode is on. So you can change everything on this site!?</p>
    </>
  )
}

export default App
