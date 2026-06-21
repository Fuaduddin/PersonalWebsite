// Education Snap Shoot
const aboutdetails=Vue.createApp({
    data(){
        return{
            aboutitle:"ABOUT",
            aboutshortdesc:"About Me",
            aboutimage:"src/Images/aboutmev.jpeg",
            aboutdetailstitle:"Hi there, I am Fuad Uddin",
            aboutshorttitle:"Full Stack Developer & Digital Marketer, Freelancer",
            avoutdescription:[
                "I am a Full Stack Web Developer with 4.5 years of experience and a degree in Computer Science and Engineering from East West University. Currently, I work as a Sub Assistant Manager (Full Stack Software Engineer) at PRAN-RFL Group. Previously, I have worked at Garbage Man and Byte Heart, where I was recognized for delivering innovative solutions to complex software challenges.",
                "In addition, I am a freelancer and entrepreneur, providing digital marketing and web development services through Upwork, Fiverr, and my company, Fusion Edge. My expertise includes social media marketing, social media management, website development, and website maintenance, with a strong focus on delivering high-quality, results-driven solutions.",
                "I specialize in developing visually appealing and highly functional websites. My technical expertise includes ASP.NET Core/MVC, Vue.js, JavaScript, HTML, CSS, jQuery, Ajax, C, RESTful APIs, LINQ, and cross-platform development on Windows and Linux. I enjoy collaborating with developers and designers to deliver solutions that align with clients’ brand identity and business goals.",
                "I hold a B.Sc. in Computer Science and Engineering from East West University. I am passionate about continuous learning and actively enhance my skills by exploring new technologies and industry best practices."
            ],
            aboutbutton:[
                {title:"Front-End:",stack:"HTML, CSS, Boothstrap, JavaScript, jQuery,Vue JS"},
                {title:"Back-End:",stack:"ASP.NET MVC (5.2.9), ASP.NET Core, Vue.js, jQuery, Ajax, ASP.NET Web Form"},
                {title:"API & Data Handling:",stack:"RESTful APIs (Basic), JSON, LINQ, Postman"},
                {title:"Digital Marketing:",stack:"SEO (Search Engine Optimization), Social Media Marketing, Social Media Manager"},
            ],
            stacktitle: "Full-Stack Development & Digital Marketing Expertise:"
        }
    }
});
aboutdetails.mount('#aboutme');