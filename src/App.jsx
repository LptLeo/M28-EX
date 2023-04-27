import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './global.scss';

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState(0)
  const [erro, setErro] = useState(false)

  const calc = () => parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))

  const calcularImc = () => {
    setImc(parseFloat(calc()))
    if (peso == 0 || altura == 0 || isNaN(calc())) {
      setErro(true)
      setTimeout(() => {
        setErro(false)
      }, 2000);
    } else {
      setErro(false)
    }
  }

  return (
    <div className="container w-75">
      {erro ? (
        <h1 className='text-center p-3 bg-danger rounded fw-bold'>ERRO! TENTE NOVAMENTE</h1>
      ) : (
        <h1 className='text-center p-3 bg-warning rounded fw-bold'>Calculadora de Indice de Massa Corportal (IMC)</h1>
      )}
      <div className="container">
        <form className='d-flex'>
          <div className='pe-2'>
            <label>Peso</label>
            <input className='form-control rounded' onChange={e => setPeso(e.target.value)} placeholder='Quilos' type="number" />
          </div>
          <div className='px-2'>
            <label>Altura</label>
            <input className='form-control rounded' onChange={e => setAltura(e.target.value)} placeholder='Metros' type="number" />
          </div>
          <span className='bg-primary p-3 fs-2 fw-bold text-light rounded'>SEU IMC: {imc.toFixed(2)}</span>
        </form>
        <button onClick={calcularImc} className='btn btn-primary mt-2 mb-4' type="submit">Calcular</button>
      </div>
      <div className='container w-50 fw-bold'>
        <div className="row">
          <span className='text-center bg-primary fw-bolder text-light py-2 rounded'>VEJA A INTERPRETAÇÃO DO IMC</span>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-start text-primary">
            IMC
          </div>
          <div className="col-4 text-start text-primary">
            CLASSIFICAÇÃO
          </div>
          <div className="col-4 text-center text-primary">
            OBESIDADE(GRAU)
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-start text-secondary">
            MENOR QUE 18,5
          </div>
          <div className="col-4 text-start text-secondary">
            MAGREZA
          </div>
          <div className="col-4 text-center text-secondary">
            0
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-start text-secondary">
            ENTRE 18,5 E 24,9
          </div>
          <div className="col-4 text-start text-secondary">
            NORMAL
          </div>
          <div className="col-4 text-center text-secondary">
            0
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-start text-secondary">
            ENTRE 25,0 E 29,9
          </div>
          <div className="col-4 text-start text-secondary">
            SOBREPESO
          </div>
          <div className="col-4 text-center text-secondary">
            I
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-start text-secondary">
            ENTRE 30,0 E 39,9
          </div>
          <div className="col-4 text-start text-secondary">
            OBESIDADE
          </div>
          <div className="col-4 text-center text-secondary">
            II
          </div>
        </div>
        <div className="row border-bottom py-2">
          <div className="col-4 text-start text-secondary">
            MAIOR QUE 40,0
          </div>
          <div className="col-4 text-start text-secondary">
            OBESIDADE GRAVE
          </div>
          <div className="col-4 text-center text-secondary">
            III
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
