function Calllist(props){
    return(
        <li className="container1">
            <img src={props.image} alt="profilePic" className="updateprofile"/>
            <p>{props.name}</p>
            <p>{props.time}</p>
            <img src={props.icon} alt="Callicon" className="profile1"/>
        </li>
    )
}

function Calls(){
    const Callobject=[
        {
            image:"https://img.freepik.com/free-photo/view-3d-businessman-taking-selfie_23-2150709934.jpg",
            name:"Akhil",
            time:"20 mins ago",
            icon:"https://cdn-icons-png.flaticon.com/128/1034/1034131.png?ga=GA1.1.1211982432.1675417347&track=ais"
        },
        {
            name:"Kishore",
            image:"https://img.freepik.com/premium-photo/onfident-handsome-man-with-arms-crossed-body-smiling-looking-determined_911620-3113.jpg",
            time:"1 hour ago",
            icon:"https://cdn-icons-png.flaticon.com/128/1034/1034131.png?ga=GA1.1.1211982432.1675417347&track=ais"
          },
          {
            name:"Rakesh",
            image:"https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&ga=GA1.1.1211982432.1675417347&semt=sph",
            time:"Yesterday",
            icon:"https://cdn-icons-png.flaticon.com/128/1034/1034131.png?ga=GA1.1.1211982432.1675417347&track=ais"
          },
          {
            name:"Rocky Abhi",
            image:"https://img.freepik.com/free-photo/portrait-man-smiling-nature_23-2150771183.jpg",
            time:"Justnow",
            icon:"https://cdn-icons-png.flaticon.com/128/1034/1034131.png?ga=GA1.1.1211982432.1675417347&track=ais"
          },
          {
            name:"Vamsi",
            image:"https://img.freepik.com/premium-photo/man-casuals_948023-1853.jpg",
            time:"15 mins ago",
            icon:"https://cdn-icons-png.flaticon.com/128/1034/1034131.png?ga=GA1.1.1211982432.1675417347&track=ais"
          },
          {
            name:"Rocky Abhi",
            image:"https://img.freepik.com/free-photo/portrait-man-smiling-nature_23-2150771183.jpg",
            time:"5 days ago",
            icon:"https://cdn-icons-png.flaticon.com/128/1034/1034131.png?ga=GA1.1.1211982432.1675417347&track=ais"
          },
          {
            image:"https://img.freepik.com/free-photo/view-3d-businessman-taking-selfie_23-2150709934.jpg",
            name:"Akhil",
            time:"10 mins ago",
            icon:"https://cdn-icons-png.flaticon.com/128/1034/1034131.png?ga=GA1.1.1211982432.1675417347&track=ais"
        },
        {
            image:"https://img.freepik.com/free-photo/view-3d-businessman-taking-selfie_23-2150709934.jpg",
            name:"Akhil",
            time:"Two days ago",
            icon:"https://cdn-icons-png.flaticon.com/128/1034/1034131.png?ga=GA1.1.1211982432.1675417347&track=ais"
        },
    ]
    return(
        <ul>
            {Callobject.map((mem)=><Calllist image={mem.image} name={mem.name} time={mem.time} icon={mem.icon}/>)}
        </ul>
    )
}
export default Calls;