import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4 style={{textAlign: "center", margin: "20px"}}>Version 1.0.0</h4>
            <Link style={{textAlign: "center", marginLeft: "180px"}} to="/">Go Back</Link>
        </div>
    )
}

export default About;