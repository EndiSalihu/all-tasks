import './SecondTask.css';

const Box = ({ date, setting, img, name, description, download }) => {
  let settingStyle = {}

  if(setting === 'New'){
    settingStyle = {
      backgroundColor: '#2cd237',
      color: 'white'
    }}
  else if(setting === 'Fix'){
    settingStyle = {
      backgroundColor: '#013493',
      color: 'white'
    }}
  else{
    settingStyle = {
      backgroundColor: '#b550da',
      color: 'white'
    }}

  return (
    <div className='box'>
      <p><b>{date}</b></p>

      <header>
        <p className='setting' style={settingStyle}>{setting}</p>
        <img src={img} alt="profile-image" />
        <h3>{name}</h3>
      </header>

      <p className='description'>{description}</p>
      <button>{download}</button>
    </div>
  )
}

export default Box
