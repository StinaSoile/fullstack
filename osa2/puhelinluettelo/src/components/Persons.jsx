import { Person } from './Person'

export const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </ul>
  )
}
