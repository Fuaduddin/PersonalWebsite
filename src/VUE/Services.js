// Education Snap Shoot
const aboutdetails=Vue.createApp({
    data(){
        return{
            aboutitle:"Services",
            aboutshortdesc:"Here is a quick summary of my Provided Services:",
           // aboutimage:"src/Images/aboutmev.jpeg",
            //aboutdetailstitle:"Hi there, I am Fuad Uddin",
            servicelist:[
                {Icon:"fa fa-code",title:"Web Development",link:"Lorem ------"},
                {Icon:"fa fa-code",title:"Web Development",link:"Lorem ------"},
                {Icon:"fa fa-code",title:"Web Development",link:"Lorem ------"},
                {Icon:"fa fa-code",title:"Web Development",link:"Lorem ------"},
                {Icon:"fa fa-code",title:"Web Development",link:"Lorem ------"},
                {Icon:"fa fa-code",title:"Web Development",link:"Lorem ------"},
            ],
            
            // aboutbutton:[
            //     {title:"Experince",link:"experience.html"},
            //     {title:"Recent Work",link:"RecentWork.html"},
            //     {title:"Portfolios",link:"Protfolios.html"},
            // ]
        }
    }
});
aboutdetails.mount('#services');