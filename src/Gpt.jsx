import React, { useEffect, useState } from 'react';

const App = () => {
  const [contacto, setContato] = useState({ nome: '', telefone: '' });
  const [listaContactos, setListaContactos] = useState([])

  function definirNome(event) {
    setContato({ ...contacto, nome: event.target.value })
  }

  function definirTelefone(event) {
    setContato({ ...contacto, telefone: event.target.value })
  }

  function adicionarContacto() {
    setListaContactos([...listaContactos, contacto])

    setContacto({nome: '', telefone: ''})
  }

  useEffect(() => {
    if(localStorage.getItem('meus_contactos') !== null){
      setListaContactos(JSON.parse(localStorage.getItem('meus_contactos')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('meus_contactos', JSON.stringify(listaContactos))
  }, [listaContactos])
  

  return (
    <div>
      <button onClick={adicionarContacto}>Save</button>
      <input type="text"  onChange={definirNome} value={contacto.nome} />
      <input type="text"  onChange={definirTelefone} value={contacto.telefone} />
    </div>
  );
};

export default App;
