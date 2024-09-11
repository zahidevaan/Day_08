import './App.css';
import BioData from './components/BioData';

const persons = [
  {
    name: "Zahid Hasan",
    email: "evaanzahid@gmail.com",
    phone: "+8801738948749",
    github: "zahidevaan",
    interests: ["Badminton", "Cricket", "Coding", "Traveling"],
    skils : ["HTML", "CSS", "JavaSript", "Liquid", "Shopify", "WordPress", "Elementor"],
    socials:[
      {handle: "facebook.com/zahidevaan", platform: "Facebook"},
      {handle: "likedin.com/in/zahievaan", platform: "LinkedIn"},
      {handle: "instagram.com/zahidevaan", platform: "Instagram"},
      {handle: "pinterest.com/zahidevaan", platform: "Pinterest"},
      ] 
  },
  {
    name: "Tawhid Ahmed",
    email: "ahmedtawhid02@gmail.com",
    phone: "+880171595544",
    github: "ahmedtawhid",
    interests: ["Football", "Cricket", "Coding", "Bike Ride"],
    skils : ["HTML", "CSS", "JavaSript", "React", "Nextjs"],
    socials:[
      {handle: "facebook.com/ahmedtawhid", platform: "Facebook"},
      {handle: "likedin.com/in/ahmedtawhid", platform: "LinkedIn"},
      {handle: "instagram.com/ahmedtawhid", platform: "Instagram"},
      {handle: "pinterest.com/ahmedtawhid", platform: "Pinterest"},
      ] 
  },
  {
    name: "Rasel Ahmed",
    email: "ahmedrasel0102@gmail.com",
    phone: "+880171595544",
    github: "ahmedrasel01",
    interests: ["Football", "Cricket", "Bike Ride"],
    skils : ["Nodejs", "Expressjs", "JavaSript", "React", "Nextjs"],
    socials:[
      {handle: "facebook.com/ahmedrasel01", platform: "Facebook"},
      {handle: "likedin.com/in/ahmedrasel01", platform: "LinkedIn"},
      {handle: "instagram.com/ahmedrasel01", platform: "Instagram"},
      {handle: "pinterest.com/ahmedrasel01", platform: "Pinterest"},
      ] 
  },
  {
    name: "Rasel Ahmed",
    email: "ahmedrasel0102@gmail.com",
    phone: "+880171595544",
    github: "ahmedrasel01",
    interests: ["Football", "Cricket", "Bike Ride"],
    skils : ["Nodejs", "Expressjs", "JavaSript", "React", "Nextjs"],
    socials:[
      {handle: "facebook.com/ahmedrasel01", platform: "Facebook"},
      {handle: "likedin.com/in/ahmedrasel01", platform: "LinkedIn"},
      {handle: "instagram.com/ahmedrasel01", platform: "Instagram"},
      {handle: "pinterest.com/ahmedrasel01", platform: "Pinterest"},
      ] 
  }
]


function App() {
  return (
    <>
    <div className="App">
    {persons.map(item => (
      <BioData 
        name = {item.name}
        email= {item.email}
        phone= {item.phone}
        github= {item.github} 
        interests = {item.interests}
        skils={item.skils}
        socials={item.socials}
      />
    ))}
    </div>
    </>
  );
}

export default App;
