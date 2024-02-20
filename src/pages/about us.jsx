import { useState } from 'react';
import './AboutUs.css'
const AboutUs = () => {
  const [requestRecieved, setRequestRecieved] = useState(false);

  const handleRequestInstallation = () => {
    //additional logic or API calls
    //update the state to simulate a request being recieved
    setRequestRecieved(true);
  }




  return (
      <> 
<div className="header" >
<h1>About Us</h1>
<p className='text-container'>


Welcome to Concrete Hub, your trusted partner in the world of concrete. With a legacy of excellence spanning over years, we have built a solid reputation as a leading concrete company dedicated to delivering top-quality solutions for a wide range of construction needs.
we are committed to the principles of integrity, innovation, and precision. We take immense pride in our skilled team of professionals who bring their expertise and passion to every project, no matter how big or small. Our goal is to provide our clients with concrete solutions that stand the test of time, ensuring safety, durability, and aesthetic appeal.
<br /><br />
<h1>What sets us apart:</h1><br /><br />

Experience and Expertise: Our team consists of highly experienced concrete specialists who have successfully completed numerous projects across various industries. We leverage our knowledge to offer tailored solutions to meet your specific requirements.
<br /><br />
Quality Assurance: Quality is at the core of everything we do. We utilize the finest materials, advanced technology, and stringent quality control measures to ensure that every project we undertake results in a concrete structure of exceptional quality.
<br/><br />
Innovation and Sustainability: We stay at the forefront of industry trends and embrace eco-friendly practices to reduce our environmental footprint. Our commitment to sustainability extends to every aspect of our work, from materials sourcing to construction techniques.
<br /><br />
Customer-Centric Approach: Our customers are our greatest asset, and we put your needs at the center of our operations. We believe in open communication, timely project updates, and the flexibility to adapt to your changing requirements.
<br/><br />
Safety First: The safety of our employees, clients, and the community is paramount. We adhere to strict safety protocols and regularly update our practices to ensure a secure working environment.
<br /><br />
Diverse Portfolio: We offer a wide range of concrete services, from pouring foundations and flatwork to decorative concrete and concrete repair. Whether you're a homeowner, developer, or contractor, we have the expertise to fulfill your needs.
<br /><br />
Concrete Hub is more than just a concrete company; we are your partner in building a solid foundation for your vision. Our commitment to excellence, paired with a relentless pursuit of innovation, ensures that our clients receive the highest quality concrete solutions available in the industry.
<br /><br />
We invite you to explore our website, browse our portfolio, and contact us for your upcoming projects. Together, we can turn your concrete dreams into a reality.</p>
<br />
{requestRecieved ? (
  <p>Your Installation request has been recieved. Thank you!</p>
): (
  <>
<button onClick={handleRequestInstallation}>Request Installation</button>

<br />
</>
)}
</div>

</>

  )
}

export default AboutUs;
