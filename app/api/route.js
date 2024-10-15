// import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics";
import { AzureKeyCredential } from "@azure/core-auth";
// import { AzureOpenAI } from "openai";
const { AzureOpenAI } = require("openai");
import { OpenAIClient } from "@azure/openai";
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = '2024-05-01-preview';
const deployment = 'gpt-35-turbo';


export async function POST(req)  {

    const { messages } = await req.json();

    const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

    // Add Resume and my information
    // Setup proper System messages

    messages.unshift({ 
        role: 'system', 
        content: `You are PortfolioGPT. Answering only questions based on 
        the resume, self-introduction, hobbies and BQ provided. 
        When user ask about my experiences, projects, skills and education, 
        answer based on the resume and BQ. 
        When user ask about my personality, goal and hobby or something personal,
        answer based on the self-introduction and hobbies.

        Resume：${DATA_RESUME}
        self-introduction：${DATA_SELF_INTRODUCTION}
        hobbies：${DATA_HOBBIES}
        BQ：${DATA_BQ}

        Help user learn more about Wenbo from his Resume, self-introduction, hobbies and BQ.`
    });

    const response = await client.chat.completions.create({
        messages,
        max_tokens: 128,
    });


    return NextResponse.json({ 
        message: response.choices[0].message.content
    });
}

const DATA_RESUME = 
`Wenbo Peng
Canada Work Authorization (PR Holder)
wenbopeng00@gmail.com || (873) 288-6426 || linkedin.com/in/wenbo-peng-94577223b || https://pwbhs.com 

SKILLS
Back-End:                  Java, Spring Boot, Spring Framework, C#, .Net Core, Node.js, Express, Kotlin, MyBatis, Hibernate, REST
Front-End:                 Angular, React, Nesxt, JavaScript, JSP, HTML5, CSS, jQuery, AJAX, TypeScript, Thymeleaf, Bootstrap
Database & Clouds:         MySQL, SQL Server, PostgreSQL, SQL Server, MongoDB, Azure, AWS, Spring Cloud, Microservice, Docker
Tools & Others:            Git, CI/CD, Jenkins, Redis, JSON/XML, Linux, Maven, Agile, TDD, DevOps, Kubernetes, JUnit


EDUCATION
Dalhousie University	Halifax, NS, Canada
Bachelor of Computer Science (BCS)	January 2022 - September 2023

Algonquin College	Ottawa, ON, Canada
Advanced Diploma in Computer Engineering Technology	September 2019 - December 2021

EXPERIENCE
Zevnodata			                                                                                                           Toronto, ON, Canada                  
Software Development Intern                                                                                                                           February 2024 – May 2024
•	Developed a platform that enables streamlined interactions between clients and developers by using Spring Java.
•	Utilized MongoDB for efficient data management and implemented RESTful APIs to enable seamless system interactions, 		enhancing system load capacity by 30% with JWT and Spring Async.
•  	Bundled the application using Docker and leveraged AWS S3 for data storage, automating deployment workflows with Jenkins 
	pipelines, which streamlined development iterations by 40%, reducing 25% of deployment errors and operational downtime.

CUTV (China United Television)                                                                                                                 Shenzhen, China                    
Web Development Intern                                                                                                                                     May 2021 – August 2021
•	Played a pivotal role in developing a large-scale media platform. Implemented load balancing using Ribbon in Spring Cloud and 
	enhanced data management with ORM and Redis, which boosts the platform's capacity from 100,000 to 400,000 concurrent users.
•  	Leveraged Angular's robust data-binding and modular component architecture to engineer a dynamic and responsive front-end, 
	collaborated closely with a diverse team of developers and designers to craft an intuitive and visually striking user interface.
•  	Utilized Eureka for managing cluster environments and employed Spring Cloud Config for management of external configuration 
	files, which streamlined operations and optimized resource utilization, improving system scalability and maintainability by 25%.

PROJECTS
Full Stack E-commerce Platform
•	Developed a comprehensive e-commerce website, leveraging Angular's reactive programming for the front end and enhancing data 
	management efficiency, and Java Spring Boot for the backend.
•	Executed CRUD operations in the backend using Hibernate with MySQL for robust data management, utilizing JPA annotations to 
	define and implement one-to-many and many-to-one relationships.
•	Leveraged REST APIs to ensure responsive data access, improving interactivity and content diversity.
•	Integrated Stripe API to implement a secure and efficient payment system, enabling intuitive checkout experiences for users.

Blog Management Website
• 	Developed a comprehensive Blog Management System as part of a team, leveraging Java Spring Boot for the backend to enhance 
	the application's scalability and manageability, with deployment orchestrated using Docker on AWS.
• 	Implemented a RESTful API using Spring Boot, facilitating seamless CRUD operations, including advanced configurations for 
	pagination, sorting, and custom queries, with MyBatis ensuring efficient and scalable database interactions with MySQL.
•	Integrated React for a dynamic and responsive front-end. Used Hooks and Context API to manage state and handle real-time 
	content updates and user interactions efficiently, ensuring a smooth and engaging browsing experience.

Project Management System
•	Led the development of a C#/.NET Core 5 Campus Project Management System for streamlined project workflow management.
•	Designed and developed an efficient Dashboard by using Bootstrap, leveraging the MVVM design pattern, to empower clients and 
	faculty in managing and approving project requests.
•	Integrated Microsoft Identity Framework and Azure Active Directories for secure faculty authentication and collaborated for the 		integration of the authentication system with the college.
•	Leveraged GitHub for version control and automated CI/CD pipelines, ensuring efficient and reliable iteration of project versions 
	and dependencies. Hosted the application on Microsoft Azure for security and scalability.
`

const DATA_SELF_INTRODUCTION =
`My name is Wenbo, I have recently graduated from Dalhousie University with a degree in computer science. My primary interest is in full-stack development since I wanna leverage my skills across the entire web application development.

During my internship, I gained hands-on experience in developing several full-stack applications. When I was at Zevnodata in Toronto, I developed a platform that enables streamlined interactions between clients and developers by using Spring Java and Angular. At CUTV in Shenzhen, I contributed to the development of a media application that reached over 500,000 users. This involves using native Javascript and Spring Java within a collaborative team environment.

During my university years, I gained valuable experience in agile teams, utilizing technologies such as Spring Java, .NET, SQL and React. I applied these skills in developing several individual and campus projects, such as an e-commerce platform and blog management system, which enhanced my understanding of real-world application development.

 I am a positive, responsible and hardworking individual. These experiences from my projects and internship allow me to communicate and work efficiently with partners or colleagues. I am enthusiastic about building a long-term career with your organization and ready to take on greater challenges in my professional journey. Thank you! 
`

const DATA_HOBBIES =
`
My free time hobbies are traveling, photography, cooking, badminton and playing games. 
I love magnificent landscapes and humanistic photography with a sense of storytelling, 
and I will follow up with a personal gallery page to showcase my photography. 
I also like to experiment with recipes and adapt them to my own and my family's tastes.
`

const DATA_BQ = 
`
- When you had to work with someone who was difficult to get along with. How did you handle interactions with that person? (What's a challenge or conflict you faced, and how did you solve it?)
When encountering conflicts with colleagues or working with someone who is difficult to get along with, I’ll try to actively communicate with co-worker first, sharing my views, and exploring any misunderstandings. If problem cannot be fully resolved through discussion, I focus on achieving our common goal of meeting project deadlines. If the conflict potentially impact our project outcomes, I would consider seeking intervention from our Supervisor.
During the university, I encountered a challenging collaboration when I was assigned to a final project with a partner who was introverted and passive. At first, we relied on email communication, but since he often took days to respond to emails, it was unproductive. 
After a week I took the initiative to sign up for the social app he preferred. By expressing my concerns directly, we reached some solutions. Considering that he is rather introverted, we decided to have regular meetings only once a week to ensure that we keep our project schedule under control. After two weeks of meeting with him, we began to understand each other's working styles, leading to more effective collaboration. Despite the ongoing need to regularly inquire about his work progress, we ultimately managed to integrate our work through online video. 
This experience has taught me to be more patient and try to communicate with each other to produce a solution that is acceptable to everyone in the team.

- Talk about your project/Time Organization
(What's your most challenging project/project you are most proud of? Explain what would be your reaction if the deadline had been Decreased. )
(For Both)During my internship at CUTV, my team was assigned to develop a RESTful API to provide responsive data handling for a multi-platform application. This project was designed to enable users to send traditional holiday greetings to their friends and family.
(For Both)However, the project schedule was tight and the REST API development needed to be completed two weeks earlier than planned, in order to allow colleagues developing other platforms to not be affected by our progress. I suggested that our team could use agile development to complete the basic data retrieval functionality first, allowing the other groups to test the effectiveness of the API at the scheduled time. (For Time organization)Concurrently, the team requested additional help from the manager to lighten our workload. With a new team member on board, we emphasized clear communication and targeted task distribution to make the most of our new team structure. Also, a short wrap-up meeting at the end of each day allows the team to get an overview of the progress of each module. Ultimately, we successfully completed the iterative development of the API functionality on schedule.
(For Talk about the project)The project's complexity was heightened by the need for the REST API capable of efficient data retrieval. I cached the blessings in JSON format in the hash table so that users could quickly retrieve the ones they wanted. In order to cope with possible high traffic on the day of the holiday, I used paging to manage the blessings in batches and limit the flow of the API. These steps were critical to optimizing the responsiveness of the system.
(Conclusion of Time organization)Reflecting on this pressured experience, emphasizes the need for quick adaptation and teamwork within decreased deadlines, especially when developing foundational components like RESTful APIs that other project parts depend on. This project not only sharpened my technical skills but also taught me valuable project management lessons in working under tight schedules.
(Conclusion of Talk about the project)Reflecting on this project, I learned the critical importance of efficient data handling and optimizing network traffic to enhance user experience. Successful project delivery goes beyond just the technical execution, it's also about the effectiveness of team management. This was particularly true for a time-sensitive initiative like a holiday-based project.

- Where Do You See Yourself in 5 Years?
In the next five years, I'm excited to significantly contribute to the success of your company, and I can see myself growing professionally in this role. As a Full Stack Developer, I aim to take on additional responsibilities, lead projects, and play a key role in Large-Scale and Innovative Projects. My passion for mentoring aligns with my goal of nurturing talent within the team as I deepen my industry understanding.
Committed to continuous learning, I plan to undertake training courses, acquiring new skills to stay at the forefront of technological advancements. I am dedicated to being a respected, trusted, and high-performing member of the team, potentially advancing to a more senior level.
I see myself building a long-term and mutually beneficial career with your company, aligning with the company's mission and commitment to being a Project leader.

-Strengths
The two main strengths I'd like to highlight are working well with others and handling projects. I developed these skills through lots of practice in college and during my internship.
At the beginning of college, when I was a freshman, I was a bit unsure about how to work in a team. I didn't speak much because I thought my main goal was just to get high grades. But soon, I realized that being able to work as part of a team is very important. I understood that one person alone can't do what a strong team can do together. This realization changed how I approached team assignments. Instead of only trying to get high grades, I aimed to be someone who helps the team work better and have fun while doing our work.
During my internship, I found that the teamwork skills I developed in college were very useful. Despite being an intern, I often spoke with other interns about the details of our projects. I also regularly talked to my group leader about our project progress and the work we were doing.
Looking back, I'm proud of how much I've improved in being a good team player and managing projects. I'm excited to bring these strengths to your organization because I believe they will be very valuable. I hope this gives you a good sense of my strengths.

- Weaknesses
One area I'm actively working on is managing my natural introversion specifically when it comes to public presentations and warming up to new environments. I'm the kind of person who might be a bit quiet and reserved when first meeting people or starting in a new environment. But after I've had some time to get to know people and understand my surroundings, I become more outgoing and communicative.
This trait was even more pronounced when I first entered college, at that time I rarely expressed my ideas in the group. But as time has gone by, I've made some progress. I've found that working in smaller team settings has helped me improve my communication skills and become more comfortable sharing my ideas. I started to realize that my voice had value, and my ideas could contribute positively to the projects we were working on.
However, I do recognize that I still struggle with larger group settings or big meetings. The dynamic is different, and I find it harder to become as outgoing in those situations. But I am aware of this and am focused on improving.
As I get more experience and exposure to varied professional situations, I'm sure I'll be able to handle larger groups just as effectively as I do smaller ones. I'm committed to this personal growth journey and I'm ready to embrace the challenges and opportunities that lie ahead. I hope this response provides you with the insight you were seeking.

- Which do you think is more important, quality or efficiency
When deciding whether to prioritize development efficiency or quality, it depends on the project context.
In startup environments, getting a product to market quickly is crucial for user feedback, attracting investors, and establishing a market presence. For example, a startup might focus on rapid development to launch an Application quickly and iterate based on user feedback for fast improvements and necessary pivots.
In contrast, in industries like healthcare or finance, where errors can have severe consequences, quality is essential. Developing software for a medical device, for instance, requires rigorous testing to ensure it operates correctly and safely, even if this slows down the development process. For long-term projects that need to be maintained and extended over many years, high-quality code is critical. A large-scale enterprise software must be built with quality in mind to ensure it can be easily updated, reducing technical debt and long-term costs.
In summary, the priority between development speed and quality depends on the project. In startup environments and rapid prototyping, quick iterations and market entry are essential, so efficiency is key. In healthcare, finance or large-scale projects, reliability, safety, and maintainability are crucial, so quality should be the focus.

- How do you handle pressure or stressful situations?
During my time as a software developer intern at Zevnodata, we faced a critical deadline for deploying a major update to our client interaction platform, which had to go live without any delays.
My task was to ensure that all components of the update were fully functional and integrated smoothly, despite the high pressure to meet the launch deadline.
Action:
Planning and Prioritization: I find that a little stress can be motivating, so I used it to sharpen my focus. I started by planning out all necessary tasks and prioritizing them based on their impact on the launch. This structured approach helped in managing my workload effectively and reduced the chance of overlooking critical issues.
Proactive Issue Identification: By habitually making detailed plans, I could foresee potential challenges and address them early in the process. This not only streamlined our workflow but also ensured that we were always prepared for unexpected hurdles.
Communication: I maintained open and frequent communication with my team and project manager. This helped in quickly addressing any ambiguities and ensured that everyone was aligned with the updated project goals. 
By leveraging detailed planning and effective communication, we successfully launched the update on time. The launch was smooth, and the project received positive feedback from stakeholders for its performance and stability. This experience reinforced my ability to thrive under pressure, turning challenging situations into opportunities for innovation and team cohesion.
`