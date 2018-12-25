import React from 'react';
import './Skills.css';

class Skills extends React.Component {
    render() {
      return (
          <div id="skills" className="skills">
            <h2 className="workexp">Work Experience</h2>
            <div className="work-fc">
              <div className="wrk-exp">
                <h3 className="we">C.I. Financial </h3>
                <div className="subhead1">Programmer Analyst</div>
                <ul>
                  <li>Developed and optimized ad-hoc SQL queries and stored procedures regularly</li>
                  <li>Created Python scripts to replace outdated SQR queries while maintaining consistency in data output to client</li>
                  <li>Took charge of a major POC project to update over 1200 SQRs (SQL reports) to a modern programming language</li>
                  <li>Presented POC project plans to Director of I.T and several development teams; handling all communications</li>
                </ul>
              </div>    
              <div class="date">
              <span class="detail-side">May 2017 - August 2017</span>
              </div>
            </div>
            <div className="work-fc">
              <div className="wrk-exp">
                  <h3 className="we">Ministry of Education </h3>
                  <div className="subhead1">I.T QA</div>
                  <ul>
                    <li>Responsible for developing, maintaining and providing support for existing automation framework</li>
                    <li>Set-up and coordinated the execution of automated tests during daily builds, saving several hours of manual testing daily</li>
                    <li>Took responsibility for knowledge transfer into incoming co-op students and created documents to integrate new students to existing projects, allowing new coop students to get acclimated quickly</li>
                    <li>Won 1st place in internal co-op innovation day creating an innovative solution to issues presented in the organization</li>
                  </ul>
                </div>    
                <div className="date">
                <span className="detail-side">January 2016 - August 2016</span>
                </div>
              </div>

              <div className="work-fc">
              <div className="wrk-exp">
                  <h3 className="we">University of Toronto</h3>
                  <div className="subhead1">Teaching Assistant</div>
                  <ul>
                    <li>Conducted weekly tutorials on topics ranging from python memory model, mutability of data types to object oriented programming</li>
                    <li>Facilitated weekly labs with over 20 students in attendance and provided support to struggling students</li>
                    <li>Provided clear explanations on topics and materials to student's questions using class forums</li>
                  </ul>
                </div>    
                <div className="date">
                <span className="detail-side">August 2015 - December 2015</span>
                </div>
              </div>            
          </div>
      );
    }
}

export default Skills;