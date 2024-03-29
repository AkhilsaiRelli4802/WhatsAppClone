import Contacts from './Contact';
import './App.css';

function App() {
  const Contactlist=[
    {
      name:"Akhil",
      image:"https://img.freepik.com/free-photo/view-3d-businessman-taking-selfie_23-2150709934.jpg",
      status:"Working in the shadows",
      msg:"Hello"
    },
    {
      name:"Kishore",
      image:"https://img.freepik.com/premium-photo/onfident-handsome-man-with-arms-crossed-body-smiling-looking-determined_911620-3113.jpg",
      status:"Urgent calls Only",
      msg:"Hi"
    },
    {
      name:"Rakesh",
      image:"https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&ga=GA1.1.1211982432.1675417347&semt=sph",
      status:"Hope",
      msg:"Good Morning"
    },
    {
      name:"Rocky Abhi",
      image:"https://img.freepik.com/free-photo/portrait-man-smiling-nature_23-2150771183.jpg",
      status:"nothing to say about meh. I'm just a normal man my dad is my hero and my credit card.",
      msg:"Sure"
    },
    {
      name:"Vamsi",
      image:"https://img.freepik.com/premium-photo/man-casuals_948023-1853.jpg",
      status:"Partner",
      msg:"Done For the day"
    },
    {
      name:"Gyanu",
      image:"https://img.freepik.com/free-photo/portrait-smiling-man-bar_23-2150771123.jpg",
      status:"I feel like .. I've lost something",
      msg:"Text u later"

    },
    {
      name:"Raviroy",
      image:"https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg",
      status:"peace",
      msg:"it's kk"
    },
    {
      name:"Macha",
      image:"https://img.freepik.com/premium-photo/casual-man-with-beard-smiling-portrait_124185-3089.jpg",
      status:"~chinni~",
      msg:"After long time"
    }
  ]
  return (
    <ul className='members'>
        {Contactlist.map((mem)=><Contacts name={mem.name} image={mem.image} status={mem.status} msg={mem.msg}/>)}
    </ul>
  );
}

export default App;
