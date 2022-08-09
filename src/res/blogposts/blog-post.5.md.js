export default `
This will be my third and fourth Co-op work term I have completed now at the University of Guelph.

<img src="images/blogposts/ArcticWolfLogo.png"
     alt="AWN Logo"
     style="margin-left: auto; margin-right: auto; display: block; width: 45%;" />

## Information about the employer
Arctic Wolf Networks is an American cybersecurity company that provides hardware and software solutions for security monitoring 
and threat detection across several platforms including hardware, networks, and cloud platforms. Formerly in California, 
AWN is primarily based in Minnesota, while employees span across the world in North America and Europe. Formerly a start-up, 
AWN’s $4.3B+ evaluation designates it as a unicorn company, and consistently places in several top up-and-coming cybersecurity 
rankings. Their products compete intensely alongside other cybersecurity companies like Crowdstrike, SentinelOne, and more, 
despite the difference between their offerings. 

## Job Description
As a Software Developer intern at Arctic Wolf Networks, I was tasked with completing the design and implementation of features 
for various projects. Throughout both teams, I was involved primarily in designing and implementing solutions for features, 
updates, and fixes. This involved heavy collaboration and discussion between me and my peers.

With the infrastructure team, I was primarily working on projects ranging from build process management to developer experience 
tools. The projects include:

* Spincycle; a secrets rotation tool for AWN projects that integrated its internal build process and GitHub
* Devcontainers; a tool that containerized the AWN development environment into a Docker container, and allowed developers 
to work from within
* Ark-ecr-target; a tool that scanned AWN images built from their main build pipeline, and detected CVEs using AWS ECR

These tasks involved updating lambda functions, build tools, creating command line verbs, designing a NoSQL key-value 
table structure (DynamoDB), and automating deployment through harness and Jenkins.

With the scanner team, I was working on features primarily for the scanner service IVA; which provided users with endpoints 
to manipulate hardware scanners. This included writing:

* An endpoint that churned a scanner from the database
* An endpoint that sent and executed a termination package in a physical scanner
* Designing a child-parent job dependency system between scanner jobs using a tree structure

These tasks involved writing endpoints and unit tests in Golang, designing a SQL table structure (PostgreSQL), implementing 
a tree structure, and understanding goroutines and their concurrency.

Overall, I learned through all my peers and by working through my assigned tickets. I was especially excited when completing 
open-ended tasks and derived my greatest learning moments from those situations; specifically, a CVE exemption feature I 
implemented for the infrastructure team’s image scanning tool, and the job dependency system for the scanner team’s scanner 
service. 

## Goals
I listed five primary goals that I wanted to accomplish during both my work terms at Arctic Wolf. These were the next steps 
to my previous co-op work term goals, and those that I believe would help me transition better into an effective full-time engineer:

1. Firstly, I planned to continue improving my time management and personal organization skills. Specifically, I wanted to 
improve my multi-tasking ability.
  * I was able to work with multiple tasks due to the nature of the job. To explain, developers often review each other’s 
  works prior to submission. Since my peers were typically busy with their own tasks as well, I realized that it would be 
  better for me to put my focus on other work and let my teammates prioritize their work before reviewing my work. This 
  ultimately let me balance my work evenly, while maintaining a stable merge rate. Once my teammates completed their work 
  or set aside some time to review my requests, I would be able to update my work and complete my merges

2. Then, collaboration with the team based on designing and implementing solutions was my next prioritization.
  * I was able to accomplish this with both teams. Whenever I would be designing an endpoint, a table structure, or a piece 
  of software, I would often request my teammates for input on Slack or Zoom. Through constant discussion, brainstorming 
  and listening, I would either come up with good methods to complete my task, or reference my teammates’ suggestions. Even 
  though my implementations were often based on my peer’s instructions, the importance of the discussions were never about 
  how to complete a task, but rather why I would complete a task a certain way. This helps improve my understanding on how 
  I would design certain solutions, what the reasons were, and more, which I believe are core skills to defining an effective 
  engineer.

3. Moreover, I sought to learn more about the infrastructure and development tools used by the team for their projects 
and ramp up in quick fashion.
    * Infrastructure team
        * Learning about the build process, organization, and connection between tools in the infrastructure team took me quite a bit of time. Since their tools were relied on by most of the developers in Arctic Wolf, their projects were often spread widely. Their build process was especially complex; comprising of building multiple projects from a mono-repo, into a single pipeline which was composed of several smaller build processes reliant on single projects called cells. There are additional tools that complete forms of verification across the projects within the single pipeline. Regardless, I was able to learn all these new tools throughout my work with the infrastructure team. I was especially excited to become far more familiar with AWS than I ever have.
        * The specific tools I’ve learned through this term include:
            1. Languages
                * Golang
                * Python2 + 3
            2. Cloud Platforms
                * AWS
                    * Lambda
                    * DynamoDB
                    * Elastic Container Registry
                    * S3
                    * IAM
                    *. CodeArtifact
                    * Simple Queue Service
                    * Cloudformation
                    * Secrets Manager
                    * Cloudwatch
            3. Deployment
                * Jenkins
                * Shell scripts
                * Docker
                * Harness
    * Scanner team
        * Since I had become familiar with the generic developer workflow and build process back during my term with the 
        infrastructure team, I had no problem ramping up quickly with the scanner team. This also applied to the development 
        tools, as scanner team was using technology that I had become familiar with, like Golang, Python3, Bash, AWS tools 
        of the variety, and more. Despite this, I did have to learn about the formal process of generating VM scanners for 
        testing purposes, how the scanner project was structured, and how to use the Kubernetes clusters for testing.


4. Subsequently, understanding the design process and development of the foundation of these projects was a related goal.
    * I was not able to accomplish this goal on both teams. Though I wanted to learn and go through some sessions related 
    to architecting the structure of projects, how they make choices on technologies, and more, it was quickly noted to me 
    that learning these skills take years of development experience. I was suggested by both team leads when inquiring about 
    this sort of knowledge, that I could prioritize developing and learning alongside a good source of information, like a 
    book. I took it upon myself to begin purchasing books and seeking out opportunities to get experience in design and 
    architecture in my own pastime. 

5. Finally, I wanted to improve my online communication skills with my team due to industry shifting into a remote work environment.
  * In my opinion, I was able to succeed to a fair degree with both teams. I was often communicating through both Slack and 
  Zoom about my progress, discussing design and implementation details with other engineers, and getting to know my peers 
  better. Since communication is typically ingrained into the entire development process; it is crucial for engineers to 
  have good communication and collaboration with their team. Despite remote environments creating physical space between 
  teammates, I noticed it wasn’t difficult to maintain effective and friendly teamwork between my peers; something that I 
  certainly appreciate and value.

## Conclusions
In conclusion, I’m extremely content with my experience at Arctic Wolf Networks. My high expectations for the work term 
have been accomplished and more. I was able to work on newer, bigger challenges during these two terms than I have ever 
before. And despite my enjoyment of the convenience of working on products I am familiar with, I am aware now of my inherent 
joy of working on open-ended tasks; the stress that comes with the excitement, the realization of how little I understood 
something I’d worked on before, and my complete ownership of the features done. Good experiences are one thing, but I truly 
believe difficult experiences are the ones where I learn and remember crucially. These two terms have improved my confidence 
when handling new tasks; and here’s to hoping I continue to go through those kinds of situations. For my own learning’s sake.  


## Acknowledgments
I would love to acknowledge everyone that I’ve worked closely with at AWN:

From the infrastructure team (TBA), my mentors Chris Stavropoulos and Tracey Spicer, and my teammates; Davide Palozzi, Andy 
Heller, Joshua Grohn, Chibi Li, and co-intern, Simrandeep Bajwa.

From the scanner team (Sentinels), my mentors Dhanvanthari Manju Ilangovan, Mae Kennedy and Shawana Khoker, and my teammates; 
Konstantin Slastnikov, Sean Mahood, Shanmukh Basavarajappa, and co-intern, Will Pringle.

Thanks for the amazing and friendly experience! I certainly learned a lot, and wow I’ve never felt imposter syndrome 
hit me harder than before hahaha. I hope I contributed well within your standards!

`;