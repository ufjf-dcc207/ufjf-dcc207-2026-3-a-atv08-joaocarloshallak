import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'
const data:Array<PacoteType> = [
{
  id: 'dab70d83-9f69-449f-85e5-b28897b84b63',
  largura: 20.0,
  altura: 30.0,
  profundidade: 10.0,
  peso: 2.34
},
{
  id: '95eee3f6-6308-49de-ba31-78bd43eaaedd',
  largura: 70.0,
  altura: 50.0,
  profundidade: 10.0,
  peso: 3.33
}
]
export default function App() {
  return (
    <section>
      <h2>Pacotes</h2>
      <div className="pacotes">
        {data.map(p  => <Pacote pacote={p} key={p.id}/>)}
      </div>
    </section>
  )
}