import Mock from "../mock";

const database = {
  information: {
    name: 'M Bilawal Zaman',
    aboutContent: "I am a MERN Stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
    age: 33,
    phone: '',
    nationality: 'Pakistan',
    language: 'English, Urdu',
    email: 'mbilawalzaman@gmail.com',
    address: 'House 325, Laurex colony, Allama Iqbal road gharhi shahou Lahore, Pakistan',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/mbilawalzaman',
      twitter: 'https://twitter.com/mbilawalzaman',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/mbilawalzaman',
      dribbble: '',
      github: 'https://github.com/mbilawalzaman'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/MERN_Muhammad_Bilawal_Zaman.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'brush-alt',
      details: "MERN stack developer, I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "I excel in crafting robust and scalable web solutions tailored to your business needs. I ensure seamless integration of front-end and back-end components."
    },
    // {
    //   title: "Mobile Application",
    //   icon: 'mobile',
    //   details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    // }
  ],
  reviews: [
    {
      id: 1,
      content: "Working with this MERN stack developer has been a game-changer for our projects. Their expertise in building full-stack web applications is unparalleled. We appreciate their dedication and timely deliveries. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Ali Malik',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "It was a pleasure collaborating with this MERN stack developer. Their attention to detail and commitment to quality were evident throughout the project. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Ahmed',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Fantastic work! This MERN stack developer exceeded our expectations. Their ability to transform ideas into reality is remarkable. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Dev Tech',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "MERN",
      value: 95
    },
    {
      title: "Tailwind CSS",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "NextJS",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "PMS - Project Management System",
      subtitle: "",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Calculator",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      largeImageUrl: ["/images/portfolio-image-2-lg.jpg"],
      url: 'https://github.com/mbilawalzaman/CODSOFT-calculator'
    },
    {
      id: 4,
      title: "Recuiter Webpage",
      subtitle: "Frontend web  page for a Recuiter company.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://github.com/mbilawalzaman/CODSOFT-Landing-Page'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "OCT 2023 - JAN 2024",
        position: "MERN Stack Trainee",
        company: "Knowledge Streams",
        details: "As a MERN Stack Trainee at Knowledge Streams, I gained hands-on experience in developing full-stack web applications. I was involved in various projects where I honed my skills in MongoDB,Postgres SQL, Express.js, React.js, and Node.js. Collaborating with a talented team, I contributed to the implementation of robust and scalable solutions."
      },
      {
        id: 2,
        year: "JUL 2023 - SEP 2023",
        position: "Frontend Web Developer - Internee",
        company: "Axis Cyber Technologies",
        details: "As a Frontend Web Developer intern at Axis Cyber Technologies, I focused on creating engaging and responsive user interfaces. I worked with modern frontend technologies such as HTML, CSS, and JavaScript, ensuring seamless user experiences across various platforms. Collaborating with senior developers, I participated in the development and enhancement of client-side features."
      },
      // {
      //   id: 3,
      //   year: "2014 - 1016",
      //   position: "UI/UX Designer",
      //   company: "Example Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2010 - 2014",
        graduation: "Bachelor of Computer Science",
        university: "Virtual University of Pakistan",
        details: "Completed my Bachelor's degree in Computer Science from the Virtual University of Pakistan. Acquired a strong foundation in computer science principles and gained practical skills in software development."      },
      {
        id: 2,
        year: "2006 - 2008",
        graduation: "Intermidiate of Computer Science",
        university: "Wise College",
        details: "Studied Computer Science at Wise College for my intermediate education. Developed a solid understanding of fundamental programming concepts and problem-solving skills."
      },
      {
        id: 3,
        year: "2017",
        graduation: "Matricuation",
        university: "Defence Public School",
        details: "Completed my Matriculation at Defence Public School. Established a strong academic foundation and developed a keen interest in computer science."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+92-323-4181571', '+92-344-6945316'],
    emailAddress: ['mbilawalzaman@gmail.com'],
    address: "House 325, Laurex colony, Allama Iqbal road gharhi shahou Lahore, Pakistan"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});