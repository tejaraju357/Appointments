import './index.css'

const AppointmentIem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const URL = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }
  return (
    <>
      <div className="appointment-item">
        <div className="header-container">
          <p className="title">{title}</p>
          <img src={URL} onClick={onClickStar} alt = "star" className="star"/>
        </div>
        <p className="date">{date}</p>
      </div>
    </>
  )
}

export default AppointmentIem
