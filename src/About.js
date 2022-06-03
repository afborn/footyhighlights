import logo from './logo192.png'

const About = () => {
    return (
        <div className="footyp">
             <p>This page allows users to view official match highlights from 
                 various soccer leagues and posted on various channels, such as Youtube.
             The data is retrieved from <a href="https://www.scorebat.com" target="_blank">Scorebat API</a>
             <br />Made with <img src={logo} style={{width: "20px", height:"auto"}} />
             <br />Enjoy!</p>
        </div>
    );
}
 
export default About