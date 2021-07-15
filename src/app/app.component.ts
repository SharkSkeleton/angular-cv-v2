import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag = false;
  hard_skills = [
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
    {path: 'assets/logos/node.svg', tip: 'NodeJS'},
    {path: 'assets/logos/php.svg', tip: 'PHP'},
    {path: 'assets/logos/selenium.svg', tip: 'Selenium'},
    {path: 'assets/logos/hadoop.svg', tip: 'Hadoop'},
    {path: 'assets/logos/spark.svg', tip: 'Spark'},
    {path: 'assets/logos/mongodb.svg', tip: 'MongoDB'},
    {path: 'assets/logos/angular.svg', tip: 'Angular'},
    {path: 'assets/logos/material.svg', tip: 'Material'},
    {path: 'assets/logos/ts.svg', tip: 'TS'},
    {path: 'assets/logos/python.svg', tip: 'Python 3'},
    {path: 'assets/logos/git.svg', tip: 'Git'},
    {path: 'assets/logos/aws.svg', tip: 'AWS'},
    {path: 'assets/logos/postgre.svg', tip: 'PostGreSQL'},
    {path: 'assets/logos/tenserflow.svg', tip: 'TenserFlow'},
    {path: 'assets/logos/ts.svg', tip: 'TypeScript'},
    {path: 'assets/logos/bitbucket.svg', tip: 'Bitbucket'},
    {path: 'assets/logos/spring.svg', tip: 'Spring'},
    {path: 'assets/logos/cPlus.svg', tip: 'C++'},
  ];
}
