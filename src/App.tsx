import './App.css'
import { PlanetSystem } from './components/PlanetSystem';
import { usePlanetSystems } from './hooks/usePlanetSystem';

function App() {
  const {data, loading} = usePlanetSystems();

  if(loading) return <p>Loading...</p>

  return (
    <main>
      {data.map(ps => {
        return <PlanetSystem key={ps.id} {...ps} />
      })}
    </main>
  )
}

export default App
