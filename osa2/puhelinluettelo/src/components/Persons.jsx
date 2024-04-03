import { Person } from './Person'

export const Persons = ({ personsToShow, destroy }) => {
  return (
    <ul>
      {personsToShow.map((person) => (
        <Person key={person.name} person={person} destroy={destroy} />
      ))}
    </ul>
  )
}
