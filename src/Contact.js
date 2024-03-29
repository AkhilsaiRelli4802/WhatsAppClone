function Contacts(props){
    return(
    <li className='container'>
      <img src={props.image} alt="Img Text" className="profile"/>
      <div className='list'>
      <p >{props.name}</p>
      <p>{props.msg}</p>
      <p>About:{props.status}</p>
      <div>
      </div>
      </div>
    </li>
    )
  }
  export default Contacts;