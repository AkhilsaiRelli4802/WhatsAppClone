function UpdatesData(props){
    return(
        <li className='container'>
            <img src={props.image} alt="updateImage" className="updateprofile" />
            <div className='list'>
            <p>{props.name}</p>
            <p>{props.msg}</p>
            </div>
        </li>
    )
}
function Updates(){
    const Updateslist=[
        {
          name:"Akhil",
          image:"https://img.freepik.com/free-photo/view-3d-businessman-taking-selfie_23-2150709934.jpg",
          msg:"9 mins ago"
        },
        {
          name:"Kishore",
          image:"https://img.freepik.com/premium-photo/onfident-handsome-man-with-arms-crossed-body-smiling-looking-determined_911620-3113.jpg",
          msg:"1 hour ago"
        },
        {
          name:"Rakesh",
          image:"https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&ga=GA1.1.1211982432.1675417347&semt=sph",
          msg:"Yesterday"
        },
        {
          name:"Rocky Abhi",
          image:"https://img.freepik.com/free-photo/portrait-man-smiling-nature_23-2150771183.jpg",
          msg:"Justnow"
        },
        {
          name:"Vamsi",
          image:"https://img.freepik.com/premium-photo/man-casuals_948023-1853.jpg",
          msg:"15 mins ago"
        },
        {
          name:"Gyanu",
          image:"https://img.freepik.com/free-photo/portrait-smiling-man-bar_23-2150771123.jpg",
          msg:"3 hours ago"
    
        },
        {
          name:"Raviroy",
          image:"https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg",
          msg:"20mins ago"
        },
        {
          name:"Macha",
          image:"https://img.freepik.com/premium-photo/casual-man-with-beard-smiling-portrait_124185-3089.jpg",
          status:"~chinni~",
          msg:"7 hours ago"
        }
      ]
    return(
        <ul className='members'>
            {Updateslist.map((mem)=><UpdatesData name={mem.name} image={mem.image} msg={mem.msg}/>)}
        </ul>
    )
}
export default Updates;