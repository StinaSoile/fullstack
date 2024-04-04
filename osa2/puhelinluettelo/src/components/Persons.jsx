import { Person } from './Person'

export const Persons = ({ personsToShow, destroy, personValuesToForm }) => {
  return (
    <ul>
      {personsToShow.map((person) => (
        <Person
          key={person.name}
          person={person}
          destroy={destroy}
          personValuesToForm={personValuesToForm}
        />
      ))}
    </ul>
  )
}
