import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faCss3, faGithub, faGoogle, faHtml5, faLinkedin, faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons"
import { faLocationPin, faPhone} from "@fortawesome/free-solid-svg-icons"

export default function App() {
  return (
    <div className="App">
    <div className="Resume">
      <div className="Header">
        <h1>John Leo Medina</h1>
        <h2><em>DIRECTOR OF SOFTWARE ENGINEERING</em></h2>
      </div>
      <div className="Content">
        <div className="Contact">
        <h1><strong>CONTACT</strong></h1>
       
          <ul>jlmedina.student@ua.edu.ph<FontAwesomeIcon icon={faGoogle} pull = "right" /></ul>
          <ul>09055088481 <FontAwesomeIcon icon={faPhone} pull = "right"/></ul>
          <ul>Arayat, Pampanga <FontAwesomeIcon icon={faLocationPin} pull = "right"/> </ul>
          <ul><a href = "https://www.linkedin.com/login" target="_blank">linkedin <FontAwesomeIcon icon={faLinkedin} pull = "right"/></a></ul>
          <ul><a href = "https://github.com/winterkeii" target="_blank">Github <FontAwesomeIcon icon={faGithub} pull = "right"/> </a></ul>
          <hr></hr>
          <h1><strong>EDUCATION</strong></h1>
       
          <ul>Bachelor of Science</ul>
          <ul>Information Technology</ul>
          <ul>University of the</ul>
          <ul>Assumption</ul>
          <ul>2023-2025</ul>
          <ul>San Fernando City, Pampanga</ul>
          <hr></hr>
          <h1><strong>SKILLS</strong></h1>
       
          <ul>React JS <FontAwesomeIcon icon={faReact} pull = "right" /></ul>
          <ul>React Native <FontAwesomeIcon icon={faReact} pull = "right" /> </ul>
          <ul>Vue JS <FontAwesomeIcon icon={faVuejs} pull = "right" /></ul>
          <ul>Angular <FontAwesomeIcon icon={faAngular} pull = "right" /></ul>
          <ul>Python <FontAwesomeIcon icon={faPython} pull = "right" /></ul>
          <ul>Html & CSS <FontAwesomeIcon icon={faHtml5} pull = "right" /><FontAwesomeIcon icon={faCss3} pull = "right" /></ul>
          
        </div>
          
        <div className="Experience">
        <h1>WORK EXPERIENCE</h1>
        <h3>Software Engineering</h3>
        <h5>Google</h5>
        <p>January 2016 - current / New York, NY
          <p>Worked with product managers to re-architect a multi-page web app into a single page web-app, boosting yearly revenue by $1.4M</p>
          <p>Constructed the logic for a streamlined ad-serving platform that scaled to our 35M users, which improved the page speed by 15%</p>
        <p>Tested software for bugs and operating speed, fixing bugs and documenting processes to increase efficiency by 18%</p>
        <p>Iterated platform for college admissions, collaborating with a group of 4 engineers to create features across the software</p>
        </p><br></br><hr></hr>
        <h3>Software Engineering</h3>
        <h5>Paypal</h5>
        <p>July 2011 - December 2015 / San Jose, CA
          <p>Contributed to the development of a new feature that increased customer. engagement by 15% Optimized existing codebase, resulting in a 10% reduction in processing time. Consistently met project deadlines and received a commendation for dedication and focus.</p>
          <p>Optimized existing codebase, resulting in a 10% reduction in processing time.</p>
        
        <p>Addressed a security loophole in the company's network, preventing a potential data breach. Effectively communicated with the IT team and non-technical staff to resolve hardware and software issues..</p>
        </p>
        <br></br><hr></hr>
        <h3>Software Engineering</h3>
        <h5>AMD</h5>
        <p>October 2007 - May 2011 / Edmonton, Canada
          <p>Designed and implemented a new software application, resulting in a 20% increase in efficiency for the department.</p>
          <p>Led a project to integrate third-party APIs, reducing data redundancy and improving data quality.</p>
        <p>Collaborated with the product team to understand their requirements and tailor-made solutions that increased product functionality by 35%.</p>
        <p>Developed an internal tool that automated routine tasks and increased department productivity by 25%.</p>
        </p>
        </div>
      </div>
    </div>
    </div>
  );
}
