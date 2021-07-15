import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  title = 'angular-cv-v2';

  header_buttons = [
    {name: 'gmail', path: 'assets/logos/gmail.svg', value: 'mishamyagkiy3@gmail.com'},
    {name: 'telegram', path: 'assets/logos/telegram.svg', value: '@shark_skeleton'},
    {name: 'skype', path: 'assets/logos/skype.svg', value: 'mishamyagkiy3'},
    {name: 'linkedIn', path: 'assets/logos/linkedIn.svg', value: 'Mihail Myagkiy'},
    {name: 'kyiv', path: 'assets/logos/location.svg', value: 'Kyiv'},
  ];
  hard_skills = [
    {name: 'Java', path: 'assets/logos/java.svg'},
    {name: 'NodeJS', path: 'assets/logos/node.svg'},
    {name: 'Spring Boot', path: 'assets/logos/springBoot.svg'},
    {name: 'Angular', path: 'assets/logos/angular.svg'},
    {name: 'JavaScript', path: 'assets/logos/js.svg'},
    {name: 'TypeScript', path: 'assets/logos/ts.svg'},
    {name: 'SQL', path: 'assets/logos/sql.svg'},
    {name: 'MongoDB', path: 'assets/logos/mongodb.svg'},
    {name: 'Maven', path: 'assets/logos/maven.svg'},
  ];
  soft_skills = [
    {name: 'Troubleshooting', path: 'assets/logos/trouble.svg'},
    {name: 'Leadership', path: 'assets/logos/leader.svg'},
    {name: 'Critical Thinking', path: 'assets/logos/critical.svg'},
    {name: 'Project Management', path: 'assets/logos/project.svg'},
    {name: 'Communication', path: 'assets/logos/communication.svg'},
    {name: 'Mentoring', path: 'assets/logos/mentoring.svg'},
  ];
  languages = [
    {name: 'English', level: 'Intermediate / Upper Intermediate', path: 'assets/logos/eng.svg'},
    {name: 'Ukrainian', level: 'Native speaker', path: 'assets/logos/ukr.svg'},
    {name: 'Russian', level: 'Native speaker', path: 'assets/logos/rus.svg'},
  ];
  displayedColumns: string[] = ['name', 'level'];

  projects = [
    {name: 'Virtual entertainment and gaming', position: 'Full-stack developer', stack: [
        {path: 'assets/logos/html.svg', tip: 'HTML'},
        {path: 'assets/logos/css.svg', tip: 'CSS'},
        {path: 'assets/logos/js.svg', tip: 'JavaScript'},
        {path: 'assets/logos/java.svg', tip: 'Java'},
        {path: 'assets/logos/springBoot.svg', tip: 'Spring Boot'},
        {path: 'assets/logos/maven.svg', tip: 'Maven'},
        {path: 'assets/logos/docker.svg', tip: 'Docker'},
        {path: 'assets/logos/virtualBox.svg', tip: 'Virtual Box'},
        {path: 'assets/logos/sql.svg', tip: 'SQL'},
        {path: 'assets/logos/svn.svg', tip: 'SVN'},
      ],
      info: 'Integration of new products onto an existing platform'
    },
    {name: 'Testing system', position: 'QA & Developer', stack: [
        {path: 'assets/logos/html.svg', tip: 'HTML'},
        {path: 'assets/logos/css.svg', tip: 'CSS'},
        {path: 'assets/logos/js.svg', tip: 'JavaScript'},
        {path: 'assets/logos/node.svg', tip: 'NodeJS'},
        {path: 'assets/logos/php.svg', tip: 'PHP'},
        {path: 'assets/logos/selenium.svg', tip: 'Selenium'},
      ],
      info: 'Bot development for testing the platform'
    },
    {name: 'Data bot', position: 'Full-stack developer', stack: [
        {path: 'assets/logos/html.svg', tip: 'HTML'},
        {path: 'assets/logos/css.svg', tip: 'CSS'},
        {path: 'assets/logos/js.svg', tip: 'JS'},
        {path: 'assets/logos/python.svg', tip: 'Python 3'},
        {path: 'assets/logos/hadoop.svg', tip: 'Hadoop'},
        {path: 'assets/logos/spark.svg', tip: 'Spark'},
        {path: 'assets/logos/mongodb.svg', tip: 'MongoDB'},
      ],
      info: 'A bot for collecting and processing information with cloud computing'
    },
    {name: 'E-commerce system', position: 'Full-stack developer', stack: [
        {path: 'assets/logos/angular.svg', tip: 'Angular'},
        {path: 'assets/logos/material.svg', tip: 'Material'},
        {path: 'assets/logos/ts.svg', tip: 'TS'},
        {path: 'assets/logos/python.svg', tip: 'Python 3'},
        {path: 'assets/logos/node.svg', tip: 'NodeJS'},
        {path: 'assets/logos/mongodb.svg', tip: 'MongoDB'},
      ],
      info: 'A system that connects together several disparate services and allows you to use the functionality of everyone in the one place'
    },
    {name: 'Workplace automation system', position: 'Full-stack developer', stack: [
        {path: 'assets/logos/angular.svg', tip: 'Angular'},
        {path: 'assets/logos/java.svg', tip: 'Java'},
        {path: 'assets/logos/node.svg', tip: 'NodeJS'},
        {path: 'assets/logos/material.svg', tip: 'Material'},
        {path: 'assets/logos/springBoot.svg', tip: 'Spring Boot'},
        {path: 'assets/logos/maven.svg', tip: 'Maven'},
        {path: 'assets/logos/selenium.svg', tip: 'Selenium'},
        {path: 'assets/logos/docker.svg', tip: 'Docker'},
        {path: 'assets/logos/git.svg', tip: 'Git'},
        {path: 'assets/logos/mongodb.svg', tip: 'MongoDB'},
      ],
      info: 'Web application which allows develop and manage projects on any device which has connection via internet anywhere.'
    },
    {name: 'E-Shop', position: 'Full-stack developer', stack: [
        {path: 'assets/logos/angular.svg', tip: 'Angular'},
        {path: 'assets/logos/java.svg', tip: 'Java'},
        {path: 'assets/logos/js.svg', tip: 'JavaScript'},
        {path: 'assets/logos/ts.svg', tip: 'TypeScript'},
        {path: 'assets/logos/css.svg', tip: 'CSS'},
        {path: 'assets/logos/material.svg', tip: 'Material'},
        {path: 'assets/logos/springBoot.svg', tip: 'Spring Boot'},
        {path: 'assets/logos/aws.svg', tip: 'AWS'},
        {path: 'assets/logos/hadoop.svg', tip: 'Hadoop'},
        {path: 'assets/logos/maven.svg', tip: 'Maven'},
        {path: 'assets/logos/postgre.svg', tip: 'PostGreSQL'},
      ],
      info: 'E-commerce online store which for sell different types of products and allows you to sell your own products'
    },
    {name: 'Voice assistant', position: 'Team Lead & PM', stack: [
        {path: 'assets/logos/angular.svg', tip: 'Angular'},
        {path: 'assets/logos/java.svg', tip: 'Java'},
        {path: 'assets/logos/springBoot.svg', tip: 'Spring Boot'},
        {path: 'assets/logos/python.svg', tip: 'Python 3'},
        {path: 'assets/logos/ts.svg', tip: 'TypeScript'},
        {path: 'assets/logos/css.svg', tip: 'CSS'},
        {path: 'assets/logos/tenserflow.svg', tip: 'TenserFlow'},
        {path: 'assets/logos/hadoop.svg', tip: 'Hadoop'},
        {path: 'assets/logos/material.svg', tip: 'Material'},
        {path: 'assets/logos/maven.svg', tip: 'Maven'},
        {path: 'assets/logos/selenium.svg', tip: 'Selenium'},
        {path: 'assets/logos/git.svg', tip: 'Git'},
        {path: 'assets/logos/mongodb.svg', tip: 'MongoDB'},
      ],
      info: 'Web application for interacting with a computer using voice commands'
    },
    {name: 'E-Shop', position: 'Full-stack developer', stack: [
        {path: 'assets/logos/angular.svg', tip: 'Angular'},
        {path: 'assets/logos/node.svg', tip: 'NodeJS'},
        {path: 'assets/logos/js.svg', tip: 'JavaScript'},
        {path: 'assets/logos/ts.svg', tip: 'TypeScript'},
        {path: 'assets/logos/material.svg', tip: 'Material'},
        {path: 'assets/logos/sql.svg', tip: 'SQL'},
      ],
      info: 'Online store which sell different types of tools'
    },
    {name: 'ERP', position: 'Java developer', stack: [
        {path: 'assets/logos/java.svg', tip: 'Java'},
        {path: 'assets/logos/springBoot.svg', tip: 'Spring Boot'},
        {path: 'assets/logos/node.svg', tip: 'NodeJS'},
        {path: 'assets/logos/selenium.svg', tip: 'Selenium'},
        {path: 'assets/logos/maven.svg', tip: 'Maven'},
        {path: 'assets/logos/git.svg', tip: 'Git'},
        {path: 'assets/logos/bitbucket.svg', tip: 'Bitbucket'},
        {path: 'assets/logos/sql.svg', tip: 'SQL'},
      ],
      info: 'A system for combining a platform and an application solution. The application solution is installed on the platform. There are many configurations (Accounting, Trade Management, etc.)'
    },
    {name: 'CMS', position: 'Full-stack developer', stack: [
        {path: 'assets/logos/angular.svg', tip: 'Angular'},
        {path: 'assets/logos/java.svg', tip: 'Java'},
        {path: 'assets/logos/html.svg', tip: 'HTML'},
        {path: 'assets/logos/css.svg', tip: 'CSS'},
        {path: 'assets/logos/js.svg', tip: 'JS'},
        {path: 'assets/logos/springBoot.svg', tip: 'Spring Boot'},
        {path: 'assets/logos/material.svg', tip: 'Material'},
        {path: 'assets/logos/maven.svg', tip: 'Maven'},
        {path: 'assets/logos/git.svg', tip: 'Git'},
        {path: 'assets/logos/mongodb.svg', tip: 'MongoDB'},
      ],
      info: 'A system for creating websites using prepared components with the possibility of their further customization and modification'
    },
    {name: 'E-Shop', position: 'Full-stack developer', stack: [
        {path: 'assets/logos/angular.svg', tip: 'Angular'},
        {path: 'assets/logos/java.svg', tip: 'Java'},
        {path: 'assets/logos/spring.svg', tip: 'Spring'},
        {path: 'assets/logos/js.svg', tip: 'JavaScript'},
        {path: 'assets/logos/ts.svg', tip: 'TypeScript'},
        {path: 'assets/logos/material.svg', tip: 'Material'},
        {path: 'assets/logos/maven.svg', tip: 'Maven'},
        {path: 'assets/logos/sql.svg', tip: 'SQL'},
      ],
      info: 'E-commerce online store which sell different types of products and allows you to sell your own products'
    },
    {name: 'Software for robotic arms', position: 'Software engineer', stack: [
        {path: 'assets/logos/cPlus.svg', tip: 'C++'},
        {path: 'assets/logos/git.svg', tip: 'Git'},
        {path: 'assets/logos/sql.svg', tip: 'SQL'},
      ],
      info: 'Robotic arm software for manufacturing'
    },
    {name: 'Knowledge system', position: 'Java developer', stack: [
        {path: 'assets/logos/html.svg', tip: 'HTML'},
        {path: 'assets/logos/css.svg', tip: 'CSS'},
        {path: 'assets/logos/js.svg', tip: 'JavaScript'},
        {path: 'assets/logos/java.svg', tip: 'Java'},
        {path: 'assets/logos/git.svg', tip: 'Git'},
        {path: 'assets/logos/sql.svg', tip: 'SQL'},
      ],
      info: 'Web application for testing school knowledge of students'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  btnClick(name: String) {
    if (name == 'gmail') {
      window.location.href="mailto:mishamyagkiy3@gmail.com";
    } else if (name == 'telegram') {
      window.location.href="https://telegram.me/shark_skeleton";
    }
    else if (name == 'skype') {
      window.location.href="skype:mishamyagkiy3?chat";
    }
    else if (name == 'linkedIn') {
      window.location.href="https://www.linkedin.com/in/%D0%BC%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE-%D0%BC%D1%8F%D0%B3%D0%BA%D0%B8%D0%B9-8140a614a/";
    }
    else if (name == 'kyiv') {
      window.location.href="https://maps.google.com/?q=1200Kyiv";
    }
    else {
      alert('Please don`t touch code manually');
    }
  }
}
