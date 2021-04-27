1. What the relationship between an instance and AMI is? 
> AMI it is where instances runnning. AMI it is environment for instances.

2. What does an AMI include? 
> 1. block device mapping; 
> 2. One or more Amazon Elastic Block Store (Amazon EBS) 
> 3. Launch permissions


3. What the difference between Amazon S3 and EC2 is? 
> S3 is storage for files
> EC2 is computer for computing hard-weight operations


4. How many buckets can you create in AWS by default? 
> 100 buckets

5. What is Buffer in Amazon web services? 
> Buffer helps to synchronize different components, which gets requests and processes it in an unsynchronized way

6. What are the storage class available in Amazon S3? 
> * Standart
> * Intelligent‑Tiering (S3 Intelligent‑Tiering) 
> * Standard-Infrequent Access (S3 Standard-IA) 
> * One Zone-Infrequent Access (S3 One Zone-IA) 
> * Glacier (S3 Glacier) 
> * Glacier Deep Archive (S3 Glacier Deep Archive) 


7. What is the importance of buffer in Amazon Web Services? 
> In AWS buffer also ensures efficiency over traffic or load.

8. When should you use the classic load balancer and the application load balancer? 
> * Classic Load Balancer is likely to be the best choice if your routing and load-balancing needs can all be handled based on IP addresses and TCP ports.
> * Application Load Balancer - especially advantageous for next-generation infrastructure, such as that based on containers, or if you are building complex web applications in which requests for certain components should be directed to one cluster, while others go to a different one.


9. Can you change the instance type of the instances that are running in your application  tier and are also using autoscaling? If yes, then how? 
> You would need to create a new launch config specifying the new instance type and associate that with your autoscaling group - removing the current launch config. Over time the EC2s with the previous instance type will be terminated (assuming the default termination rules apply) and the new instance types will be launched when the auto scaling group scales out.

10. Any advantages and disadvantages when do autoscaling on running instance especially  on production instance? 
> * Better fault tolerance. 
> * Better availability. Amazon EC2 Auto Scaling helps ensure that your application always has the right amount of capacity to handle the current traffic demand.
> * Better cost management.

11. What do you do to secure your data in Cloud? 
> * DDOS protection
> * Network isolation
> * Application-layer threat prevention
> * Security group & network ACL
> * Identity & access management
> * Encryption & tokenization


12. Explain Stopping, Starting, and Terminating an Amazon EC2 instance. 
> * Stopping - The instance is preparing to be stopped or stop-hibernated.
> * Starting - The instance is preparing to enter the running state 
> * Terminating - The instance is preparing to be terminated.



13. Define regions and availability zones in Amazon EC2 
> * North America
> * South America 
> * Europe, Africa and East 
> * Asia & Pacific Ocean

14. Is it important to select suitable zones for AWS services? What's the benefits of it? 
> Delivery of content(data, images, etc.) is faster. User experience is better. 


15. What are the challenges in microservices debugging and troubleshooting?
> *  Data Synchronization (Consistency) 
> * Security — An API Gateway can solve these challenges. There are many open source and enterprise APIs are available like Spring Cloud Gateway, Apigee, WSO2, Kong, Okta (2-step authentication) and public cloud offering from AWS, GCP and Azure etc. Custom solutions can also be developed for API security using JWT token, Spring Security, and Netflix OSS Zuul2.

> *  Services Communication — There are the different way to communicate microservices –
> a. Point to point using API Gateway
> b. Messaging event driven platform using Kafka and RabbitMQ
> c. Service Mesh

> * Service Discovery — This will be addressed by open source Istio Service Mesh, API Gateway, Netflix Eureka APIs. It can also be done using Netflix Eureka at the code level. However, doing it in with the orchestration layer will be better and can be managed by these tools rather doing and maintaining it through code and configuration.

> * Data Staleness — The database should be always updated to give recent data. The API will fetch data from the recent and updated database. A timestamp entry can also be added with each record in the database to check and verify the recent data. Caching can be used and customized with an acceptable eviction policy based on business requirements.

> * Distributed Logging, Cyclic Dependencies of Services and Debugging — There are multiple solutions for this. Externalized logging can be used by pushing log messages to an async messaging platform like Kafka, Google PubSub, ELK etc. Also, a good number of APM tools available like WaveFront, DataDog, App Dynamics, AWS CloudWatch etc.

> * Testing — This issue can be addressed with unit and integration testing by mocking microservices individually or integrated/dependent APIs which are not available for testing using WireMock, BDD, Cucumber, integration testing.

> * Monitoring & Performance — Monitoring can be done using open-source tools like Prometheus with Grafana APIs by creating gauges and matrices, GCP StackDriver, Kubernetes, Influx DB, combined with Grafana, Dynatrace, Amazon CloudWatch, VisualVM, jProfiler, YourToolKit, Graphite etc.

> * DevOps Support — Microservices deployment and support-related challenges can be addressed using state-of-the-art CI/CD DevOps tools like Jenkin, Concourse (supports Yaml), Spinnaker is good for multi-cloud deployment. PAAS K8 based solutions TKG, OpenShift.

> * Fault Tolerance - Istio Service Mesh or Spring Hystrix can be used to break the circuit if there is no response from the dependent microservices for the given SLA/ETA and provide a mechanism to re-try and graceful shutdown services without any data loss.