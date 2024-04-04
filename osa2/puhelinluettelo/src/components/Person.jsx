export const Person = ({ person, destroy, personValuesToForm }) => {
  return (
    <li>
      <span
        onClick={() => {
          personValuesToForm(person)
        }}
      >
        {person.name}
      </span>{' '}
      {person.number}
      <button
        onClick={() => {
          destroy(person)
        }}
      >
        {'del'}
      </button>
    </li>
  )
}
