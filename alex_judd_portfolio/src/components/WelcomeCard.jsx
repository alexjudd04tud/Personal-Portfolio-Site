import '../index.css'

function WelcomeCard() {
    return (
    
    <center>
        <div className="WelcomeCard">
        <h1>Welcome 👋 </h1>
        <h4>I'm Alex, a Computer Science student at TUDublin!</h4>
        <h4>Check out my github, Linkedin and University below: </h4>
        <ul>
            <a
                href="https://github.com/alexjudd04tud"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="src/assets/github.png"></img>
                      
            </a>
            
            <a
                href="https://www.linkedin.com/in/alex-judd-639867219/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="src/assets/linkedin.jpg"></img>
                      
            </a>

             <a
                href="https://www.tudublin.ie/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="src/assets/college.webp"></img>
                      
            </a>
        </ul>
    </div>
        
    </center>
    );
}

export default WelcomeCard