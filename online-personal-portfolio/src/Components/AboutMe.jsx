import React from "react"
import "./AboutMe.css"
import { Container, Row } from "react-bootstrap"

class AboutMe extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container className="backdrop">
                <Row className="para" as='p'>
                    Hi, I'm Warner Harper. I'm a second-year Software Engineering student at the Rochester Institute of Technology, enrolled in the Combined Accelerated Bachelor's/Master's Program. I expect to earn my Bachelor of Science in Software Engineering in Spring 2029 and my Master of Science in Cybersecurity in Spring 2030.
                </Row>
                <Row className="para" as='p'>
                    Outside of academics, I'm a member of the RIT Varsity Baseball Team, where I play first and third base. I enjoy competitive video games, mostly sports titles, and spending time with friends, whether that's watching a movie, playing pickup basketball, or just hanging out. I'm also trying to get more into reading and find books that really resonate with me.
                </Row>
                <Row className="para" as='p'>
                    In a work environment, I place a strong emphasis on clear and consistent communication. I believe good communication shouldn't stop at individual teams, it should flow throughout an entire organization so everyone can work together efficiently. Creating an environment where people feel comfortable speaking up is important to me, especially for those who may find it challenging to do so.
                </Row>
                <Row className="para" as='p'>
                    I strive to lead by example, regardless of whether I hold a formal leadership role. Baseball has taught me that leadership doesn't come from one person alone, it comes from everyone doing their part, setting a standard, and holding each other accountable.
                </Row>
                <Row className="paraLast" as='p'>
                    Software engineering is something I've been passionate about since the first time I wrote “Hello World!” What hooked me wasn't just making a computer do something, it was the problem-solving process behind it. I thrive when challenges get difficult. My competitive nature drives me to push through tough problems, and coding often feels like a challenge I refuse to lose.
                </Row>
            </Container>
        )
    }
}

export default AboutMe