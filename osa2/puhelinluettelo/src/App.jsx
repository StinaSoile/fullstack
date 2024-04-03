import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNmb, setNewNmb] = useState('')
  const [filterValue, setNewFilter] = useState('')
  // const [removablePerson, setNewRemovable] =useState('')

  useEffect(() => {
    personService.getAll().then((initData) => setPersons(initData))
  }, [])

  const isPerson = (props) => {
    return props.name === newName
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNmb,
    }
    if (persons.find(isPerson)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNmb('')
    })
    // setPersons(persons.concat(personObject))
    // setNewName('')
    // setNewNmb('')
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNmbChange = (event) => {
    setNewNmb(event.target.value)
  }

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  )

  const destroy = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.destroy(person).then((deletedPerson) => {
        // console.log(deletedPerson)
        setPersons(persons.filter((person) => person.id !== deletedPerson.id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handleFilter={handleFilter} />
      <h2>Add new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNmb={newNmb}
        handleNameChange={handleNameChange}
        handleNmbChange={handleNmbChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} destroy={destroy} />
    </div>
  )
}

export default App
