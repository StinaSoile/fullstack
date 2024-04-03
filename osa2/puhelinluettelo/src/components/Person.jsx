export const Person = ({ person, destroy }) => {
  return (
    <li>
      {person.name} {person.number}
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
