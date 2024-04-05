let timeoutId
export const Notification = ({ message, setNewMessage }) => {
  const origMsg = `${message}`
  if (message === null) {
    return null
  }

  if (timeoutId !== undefined) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    setNewMessage(null)
    console.log(origMsg)
    console.log(message)
  }, 5000)

  return <div className="notification">{message}</div>
}
