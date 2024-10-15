"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

    const [menuOpen, setMenuOpen ] = useState(false);
    const [messageInput, setMessageInput] = useState('');

    const [messages, setMessages] = useState([

        {
            role: 'assistant',
            content: 'How can I help you learn more about Wenbo and his Resume?'
        }

    ]);

    const submitForm = async (e) => {
        e.preventDefault();
        let newMessages = [...messages, 
            { role: 'user', content: messageInput }];
        setMessages(newMessages);
        setMessageInput('');

        const apiMessage = await fetch(
            '/api', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ messages: newMessages })
            }
        ).then(res => res.json());
        
        setMessages([...newMessages, 
            { role: 'system', content: apiMessage.message }]);
    }

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
            <div className="logo">L</div>
            <div className="logo-text">Profolio Website</div>

        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto:wenbopeng00@gmail.com" className="button">Contact Me</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>

                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                </svg>
                    
            </a>
        </nav>
       </header>

       <main>
            <section className="hero container">
                <div className="hero-blue">
                    <div>
                        <h1><small>Hi, I'm</small>
                            Wenbo Peng
                        
                        </h1>
                        <p>
                            A Developer and Operator in Canada. 

                            <span>I'm intreseted in Back End, Full Stack
                                    and Cloud development, and AI topics.</span>

                        </p>

                        <div className="call-to-action">
                            <a href="./Wenbo Peng SDE Resume.pdf" target="_blank" className="button black">
                                View Resume
                            </a>
                            <a href="mailto:wenbopeng00@gmail.com" className="button white">
                                Contact Me
                            </a>

                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/wenbo-peng-94577223b"  target="_blank">
                                <img src="./imgs/linkedin.png"  alt="LinkedIn" width="38" />
                            </a>
                            <a href="#">
                                <img src="./imgs/github.png" alt="Github" width="38" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="hero-yellow">
                    <img src="./imgs/portrait.png" alt="Wenbo Peng" width="100%" />
                </div>


            </section>
            
            <section className="logos container"> 
                <div className="marquee">
                    <div className="track">
                        <img src="./imgs/java.png" alt="java" width="60" style={{marginLeft: '12px', marginRight: '12px' }}  />
                        <img src="./imgs/Csharp.png" alt="Csharp" width="97" />
                        <img src="./imgs/Spring.png" alt="Spring" width="110" />
                        <img src="./imgs/NET_Core.png" alt="Net Core" width="100" />
                        <img src="./imgs/Kotlin.png" alt="Kotlin" width="90" />
                        <img src="./imgs/javascript.png" alt="javascript" width="100" />
                        <img src="./imgs/Typescript.png" alt="Typescript" width="100" />
                        <img src="./imgs/html.png" alt="html" width="100" />
                        <img src="./imgs/css.png" alt="css" width="100" />
                        <img src="./imgs/MySQL.png" alt="MySQL" width="100" />
                        <img src="./imgs/sql-server.png" alt="SQLServer" width="100" />
                        <img src="./imgs/Mongodb.png" alt="MongoDB" width="100" style={{marginLeft: '-4px', marginRight: '-3px' }} />
                        <img src="./imgs/AWS.png" alt="AWS" width="110" />
                        <img src="./imgs/azure.png" alt="azure" width="98" />
                        <img src="./imgs/Angular.png" alt="Angular" width="95" />
                        <img src="./imgs/react.png" alt="react" width="100" />
                        <img src="./imgs/Git.png" alt="Git" width="110" />
                        <img src="./imgs/Docker.png" alt="Docker" width="110" />
                        <img src="./imgs/Linux.png" alt="Linux" width="80" />
                        <img src="./imgs/Jenkins.png" alt="Jenkins" width="78" />

                        {/* 为了重复滚动 */}
                        <img src="./imgs/java.png" alt="java" width="60" style={{marginLeft: '12px', marginRight: '12px' }} />
                        <img src="./imgs/Csharp.png" alt="Csharp" width="97" />
                        <img src="./imgs/Spring.png" alt="Spring" width="110" />
                        <img src="./imgs/NET_Core.png" alt="Net Core" width="100" />
                        <img src="./imgs/Kotlin.png" alt="Kotlin" width="90" />
                        <img src="./imgs/javascript.png" alt="javascript" width="100" />
                        <img src="./imgs/Typescript.png" alt="Typescript" width="100" />
                        <img src="./imgs/html.png" alt="html" width="100" />
                        <img src="./imgs/css.png" alt="css" width="100" />
                        <img src="./imgs/MySQL.png" alt="MySQL" width="100" />
                        <img src="./imgs/sql-server.png" alt="SQLServer" width="100" />
                        <img src="./imgs/Mongodb.png" alt="MongoDB" width="100" style={{marginLeft: '-4px', marginRight: '-3px' }} />
                        <img src="./imgs/AWS.png" alt="AWS" width="110" />
                        <img src="./imgs/azure.png" alt="azure" width="98" />
                        <img src="./imgs/Angular.png" alt="Angular" width="95" />
                        <img src="./imgs/react.png" alt="react" width="100" />
                        <img src="./imgs/Git.png" alt="Git" width="110" />
                        <img src="./imgs/Docker.png" alt="Docker" width="110" />
                        <img src="./imgs/Linux.png" alt="Linux" width="80" />
                        <img src="./imgs/Jenkins.png" alt="Jenkins" width="78" />
                    </div>

                </div>

            </section>

            <section id="skills" className="skills container">
                <h2>
                    <small>About Me</small>
                    Skills

                </h2>   
                <div className="holder-blue">
                    <div className="left-column">
                        <h3>Back End</h3>
                        <ul>
                            <li>Java</li>
                            <li>C#</li>
                            <li>Kotlin</li>
                            <li>Node.js</li>
                            <li>Spring Framework</li>
                            <li>Spring Boot</li>
                            <li>.NET Core</li>
                            <li>ASP.NET</li>
                            <li>Express</li>

                        </ul>

                        <h3>Front End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>jQuery</li>
                            <li>Angular</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Thymeleaf</li>
                            
                        </ul>

                        <h3>DB & Cloud</h3>
                        <ul>
                            <li>SQL</li>
                            <li>NoSQL</li>
                            <li>MySQL</li>
                            <li>SQL Server</li>
                            <li>MongoDB</li>
                            <li>AWS</li>
                            <li>Azure</li>
                            <li>Spring Cloud</li>
                            
                        </ul>
                    </div>
                    <div className="right-column">
                        <h3>A bit about me</h3>
                        <p>
                            Hi, I'm Wenbo Peng, 
                            a Developer and Operator in Canada. 
                            I'm intreseted in Back End, Full Stack
                            and Cloud development, and AI topics.
                        </p>
                        <p>
                            I am an positive, responsible, and dedicated individual actively seeking opportunities in 
                            <span className="highlight">Full Stack</span>, <span className="highlight">Back End</span>, 
                            <span className="highlight">Cloud Development</span>, <span className="highlight">DevOps</span>, and <span className="highlight">Quality Assurance</span>. 
                            With a strong work ethic and passion for solving complex technical challenges, 
                            I am committed to delivering high-quality solutions that drive success.

                        </p>
                    </div>


                </div>

            </section>

            <section className="work-experience container">
                <h2>
                    <small>Recent</small>
                    Work Experience

                </h2>
                <div className="jobs">
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/removal_zevnodata_grey.png" alt="zevnodata" width="100%" />
                            </div>

                        </figure>

                        <h3>Zevnodata <br></br>
                            <small>Toronto, Canada</small>
                        </h3>
                        <div>Software Development intern <br></br>Feb 2024 - May 2024</div>
                        <p>
                            Descriptions
                        </p>
                    </article>

                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/cutv.png" alt="cutv" width="100%" />
            
                            </div>

                        </figure>

                        <h3>China United Television <br></br>
                            <small>Shenzhen, China</small>
                        </h3>
                        <div>Web Development intern <br></br>May 2021 - Aug 2021</div>
                        <p>
                            Descriptions
                        </p>
                    </article>

                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/360.png" alt="360" width="100%" />
                            </div>

                        </figure>

                        <h3>Qihoo 360 Technology <br></br>
                            <small>Shenzhen, China</small>
                        </h3>

                        <div>Quality Assurance Intern <br></br> May 2019 - Aug 2019</div>
                        <p>
                            Descriptions
                        </p>
                    </article>



                </div>

            </section>

            <section id="projects" className="bento container">
                <h2>
                    <small>
                        Previous
                    </small>
                    Completed Projects
                </h2>
                <div className="bento-grid">
                    <a href="#" className="bento-item">
                        <img src="./imgs/eCommerceApp.png" alt="eCommerceApp" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/Project management.png" alt="Project Management System" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        <img src="./imgs/Project management.png" alt="Project Management System" width="100%" />
                    </a>
                    <a href="#" className="bento-item">
                        4
                    </a>
                    <a href="#" className="bento-item">
                        5
                    </a>

                </div>

            </section>

            <section className="chatbot container">
                <h2>
                    <small>
                        Talk to <menu></menu>
                    </small>
                    chatbot
                </h2>
                <div className="chatbot-blue">
                    <div className="chat-info">
                        <h3>Azure AI chatbot</h3>
                        <p>
                        I've put together a chatbot here which 
                        knows all my skills, work Experience and 
                        has a copy of my Resume. You can use it
                        to ask questions about me to get a better
                        idea of who I am and what I've done.
                        </p>
                        <p>
                        You can also download my resume here if 
                        you want to take a look at it, I'm currently 
                        looking for opportunities so if you have a 
                        position you think I'd be a good fit for,
                        please click the Contact Me button below to 
                        get in touch!
                        </p>
                        <p>
                        I'd love to connect and discuss how my skills 
                        and experiences can contribute to your team's success!
                        </p>
                        <a href="./Wenbo Peng SDE Resume.pdf" target="_blank" className="button black">
                            Download Resume
                        </a>
                        <a href="mailto:wenbopeng00@gmail.com" className="button white">
                            Contact Me
                        </a>
                    </div>
                    <div className="chat-box">
                        <div className="scroll-area">
                            <ul id="chat-log">
                                {messages.map((message, index) => (
                                    <li key={index} className={`${message.role}`}>
                                        <span className={`avatar`}>{message.role === 
                                        'user' ? 'You' : 'AI'}</span>
                                            <div className="message">{message.content}</div>
                                    </li>
                                ))}


                                
                                {/* <li>
                                    <span className="avatar bot">AI</span>

                                    <div className="message">
                                        Hi, I'm a friendly chatbot that 
                                        lets you interactive with this
                                        Portfoilo and resume.
                                        How can I help?
                                    </div>
                                </li>
                                <li>
                                    <span className="avatar bot">User</span>

                                    <div className="message">
                                        I have a question...
                                    </div>
                                </li> */}
                                
                            </ul>

                        </div>
                        <form onSubmit={submitForm} className="chat-message">
                            <input type="text" 
                            placeholder="Hey Wenbo, What skills are you best at?" 
                            value={messageInput} onChange={e => 
                            setMessageInput(e.target.value)} />
                            
                            <button className="button black">Send</button>

                        </form>


                    </div>

                </div>       

            </section>
       </main>


  <footer>
    <div className="footer-content">
        <p>&copy; 2024 Wenbo Peng</p>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#top">Back to Top</a></li>
        </ul>
    </div>
  </footer>
    
    </>



  );
}
