import React from 'react'
import Header from './components/header/Header';

const App = () => {
    const header1 = React.createElement("h1", { className: 'header' }, 'Namaste React');
    const header2 = React.createElement("h2", null, "Namaste JavaScript");
    const header3 = React.createElement("h3", null, "Namaste everyone");
  return (
    <>
    <Header/>
    {
        React.createElement("div", { className: 'container' }, [header1,header2,header3])
    }
    </>
  )
}

export default App