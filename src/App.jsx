import React from 'react';

function App() {
    return (
        <div className="App">
            <h1>ALEX USPENSKIY</h1>
            <p>Addison, Texas</p>
            <p>469-638-2819</p>
            <p><a href="https://www.linkedin.com/in/uspensky" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p><a href="mailto:alexander.uspenskiy@gmail.com">alexander.uspenskiy@gmail.com</a></p>

            <h2>IT DIRECTOR</h2>
            <p>EMPOWER & MOTIVATE TEAMS | BUILD GREAT PRODUCTS | GLOBAL IT LEADERSHIP</p>
            <p>Building great products that solve real-world problems for customers</p>

            <h3>Professional Experience</h3>

            <h4>Levi Strauss & Co., Cancun, Mexico</h4>
            <p>October 2022 – May 2024</p>
            <p>Senior Mobile App Engineering Manager</p>
            <p>Member of the US Mobile Engineering team, tasked with distributing and constructing the Levi’s Mobile Application</p>
            <ul>
                <li>Managed personnel across a 30+ person distributed engineering team in the Americas and India. Established and refined engineering best practices leading to improved performance, reduced development cycles, and improved application quality.</li>
                <li>Managed the delivery of Mobile Apps for the US/CA and European regions, overseeing the CI/CD pipeline, deployment of APIs to cloud platforms (AWS, Google, Azure), containerization, release management, and distribution through the Apple Store and Google Store.</li>
            </ul>

            <h4>Levi Strauss & Co., Moscow, Russia</h4>
            <p>October 2020 - September 2022</p>
            <p>IT Director</p>
            <p>Led Digital Transformation in LS&Co Europe, managed full IT Portfolio, adopted Agile (SAFe 5.0) for cross-functional IT teams</p>
            <ul>
                <li>Transitioning product services to the cloud and employing containerization resulted in a 20% enhancement in service level.</li>
                <li>Implemented product and catalog data services linking ERP with e-commerce, and introduced advanced search capabilities using Elastic Search.</li>
            </ul>
            <h4>VTB, Moscow, Russia</h4>
            <p>August 2019 – August 2020</p>
            <p>Deputy Head of Division</p>
            <p>Spearheaded the development and support of VTB bank's Corporate Business CRM and MDM systems, leading 12 cross-functional Agile teams (120+ personnel) to deliver solutions for 10,000+ internal users.</p>
            <ul>
                <li>Migrating critical infrastructure to the cloud increased redundancy by 25%.</li>
                <li>Introduced advanced product search functionalities utilizing Elastic Search.</li>
                <li>Delivered more than 10 vital features for CRM and MDM applications, enhancing business functionality and streamlining operator workflows.</li>
                <li>Streamlined development processes through the successful implementation of a new SDLC (JIRA, Confluence, etc.), resulting in a 10% reduction (USD $1M) in annual outsourcing costs through open tender negotiations.</li>
                <li>Led the migration to a modern technology stack (Java, PostgreSQL, React, etc.), enabling future scalability and improved user experience.</li>
                <li>Established a two-stream Agile model with 12 cross-functional teams (PO, BA, QA, DEV) to ensure efficient project delivery aligned with business needs.</li>
            </ul>
            <h4>MARY KAY INC., Dallas, Texas</h4>
            <p>August 2018 - August 2019</p>
            <p>Applications Development Manager</p>
            <ul>
                <li>Offered technical leadership and supervised IT operations. Designed and implemented the IT development process to align with the company’s strategic goals.</li>
                <li>Accountable for overseeing the overall management and performance of teams, including third-party resources.</li>
            </ul>

            <h4>MARY KAY INC., Moscow, Russia</h4>
            <p>January 2008 - August 2018</p>
            <p>Applications Development Manager</p>
            <ul>
                <li>Recruited to provide technical leadership and manage IT activities around the Europe region.</li>
                <li>Developed and implemented the IT development process to support the company’s strategic objectives and managed the overall performance of teams including 3rd party resources.</li>
                <li>Enhanced search functionalities leveraging both MS SQL and Elastic Search.</li>
                <li>Developed and deployed top 10 E-Commerce platforms to USA, LA, and EMEA markets.</li>
                <li>Successfully implemented 10+ global projects related to E-Commerce, Mobile, Warehouse Management, and E-Business applications for Europe and US regions.</li>
                <li>Managed a distributed IT team of 50+ developers worldwide (US, Ukraine, Mexico, China, Korea, Russia).</li>
                <li>Established trust and strong relationships between head office and CoE IT Team.</li>
                <li>Managed warehouse and supply chain management, product, and catalog data management.</li>
            </ul>

            <h4>DELL Computers, Moscow, Russia</h4>
            <p>June 2003 - January 2008</p>
            <p>Development Team Leader</p>
            <ul>
                <li>Led distributed development teams across multiple DELL US/EMEA projects.</li>
                <li>Completed five big E-Commerce Enterprise projects.</li>
            </ul>


            {/* Add more sections for other professional experiences */}
            
            <h3>Education</h3>
            <p>Moscow State Technical University</p>
            <p>Master, Computer Science · (1994 - 2001)</p>

            <h3>View My Resume:</h3>
            <p><a href="/public/Resume_Alex_Uspenskiy_long_ITDirector.pdf" target="_blank" rel="noopener noreferrer">Download Resume PDF</a></p>
        </div>
    );
}

export default App;
