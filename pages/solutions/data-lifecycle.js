import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Industries.module.css'
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
const datalifecycle = () => {
  return (
   <>
    <Head>
        <title>Data Lifecycle</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
      <ParallaxProvider>
         <Parallaximg imgsrc="/Photos/Pages/whyariadne.png" height="80vh" opacity=".5" >
         <div className={styles.banner} >
                 
                 
                 <h1 className="text-left">Data Lifecycle</h1>
               <h4 className='text-left'>Ariadne Maps shows the utmost care when it comes to the privacy of people. It is one of our 

core values and we have developed unique approaches to enable privacy protection!</h4>
                 </div>
   
         </Parallaximg>
   
      </ParallaxProvider>
    <div className='p-10'>
      

      <div>
      
      <p>
      <h4>Data Lifecycle</h4><br/>
      <p>The entire lifecycle of data can be described in three major steps, visually described in the figure below that explains the lifecycle of data in Ariadne infrastructure. The first step is the data collection. The second step is the data broadcasting and the third and final step is the data storage.</p><br/>
      
      <h4>Data Collection</h4><br/>
      <p>Ariadne surveyors are responsible for capturing data emitted by smartphones. Ariadne surveyors are accessible only via a VPN network. The connection to the surveyors is encrypted following asymmetrical procedure. In particular, the RSA algorithm is being used following a 4096-bit asymmetric key. A limited number of users have access to the key.  Incoming data can be described following three categories.</p><br/>

      <h4>Random Mac</h4><br/>
      <p>The first and the most common incoming stream of information is randomized MAC addresses. Android and iOS use randomized MAC addresses when probing for new networks while not currently associated with a network. This information is considered anonymous information since it cannot be related to an individual. In particular, many random MAC addresses can be related to a single phone and many phones can be related to a single mac address, when MAC randomization is being enabled.</p><br/>
      
      <h4>Static But Not The Real MAC</h4><br/>
      <p>The second common data stream is from devices that have been connected on the network. Here the MAC address is stable, while the phone is at the premise, however, the address is a random MAC address and it cannot be related to the user. When the phone is disconnected and reconnected to the network, it will likely use a different MAC address.</p><br/>

      <h4>Hashed ID</h4><br/>
      <p>Ariadne surveyor devices when sensed a signal produced an identifier that can link this signal to the phone. This ID has to be linked with the device since each phone location will be calculated based on readings from multiple devices. As a result, at this point, phones that probe using their read MAC address are only pseudo-anonymized.</p><br/>

      <h4>Data Broadcast</h4><br/>
      <p>Data is broadcasted following and MQTT implementation. Broadcasted data is encrypted using TLS 1.2 with the ECDHE-ECDSA-AES128-GCM-SHA256 cipher suite. When data collected on the cloud is temporary hashed and clustered based on the pseudo-anonymized ID. At this step, the locations of individuals are connected.</p><br/>

      <h4>Salt Injection</h4><br/>
      <p>After the location is being computed, randomly generated salt is injected to the identifier, and hence a new identifier is assigned. The hash for the injection is being changing daily and hence there is no way to compute the real MAC address any more. This data can be already considered anonymous.</p><br/>

      <h4>Differential Privacy Anonymization</h4><br/>
      <p>In the differential privacy component, a hash function is randomly selected with which the identifiable attribute(s) are hashed into a shared hash space. For this, two or more different hash functions are used. The sum of the probabilities of choosing a hash function must sum up to 1.0. The idea is that the more evenly distributed the probabilities for selecting a particular hash function are the lower the chances are to guess the identifiable attribute from the outputted hash value for an attacker. We created a local pattern by computing the number of occurrences for each hash value appearing in the results. This number of occurrences can also be interpreted as probabilities for an individual actually being there. A relatively low number (compared to other occurrence counts) could imply that this counted hashed individual probably was not actually there but is rather a result of the application of different hash functions resulting in different hash values for the same individual. When performing this approach in a streaming-wise manner the local component can append the computed pattern to the already existing output pattern of the current day. This is possible because in the revisit analysis we are interested in revisits considering different days and the appending of the output patterns in a streaming-wise mode increases the local likelihood of the individuals actually being there just on the given day. After collecting the local visit patterns which already can be aggregated to day separated files, the central component determines the revisit pattern stating how many individuals were likely to revisit a certain amount of times. When different local devices capture data and compute local patterns for a given day, the central component can simply append the respective patterns to one another in order to get the overall pattern for the day. In order to obtain the revisit group membership of each hash value a function, described in a later section, responsible for obtaining revisit group memberships is being executed.</p><br/>

      <h4>K-Anonymity Anonymization</h4><br/>
      <p>In the K-Anonymity component, an implementation adapted for trajectory anonymization is applied. This approach is based on a clustering of similar trajectories and aims for optimal solutions with the given constraints. In this approach, all incoming bunches of data are clustered into small clusters. A good cluster match is detected when the information loss remains to a high optimum, identified via a predefined threshold. In a second step the algorithm identifies clusters of data that either could not be further delayed, or they have formed perfect clusters, and it either deletes them or publishes them respectively. In more details, the cluster selection is retrieving all formed clusters from a list of incoming data and examines the information loss for each cluster individually. If there is a cluster where the information loss is below the allowed limit, then the particular cluster becomes member of the cluster. The delay constrains are defined based on the minimum cluster size and the maximum allowed waiting time. Each generalizations of clusters (with a low information loss) is always kept in memory, in order to be used for the reduction of mergers and increase of information quality of future anonymization attempts.</p><br/>

      <h4>Data Storage</h4><br/>
      <p>Data is stored on a server located in Frankfurt, Germany and operated by Amazon Web Services Germany GmbH. AWS is equipped with all ISO certificates and regulations to secure the protection of the data. In particular AWS has certification for compliance with ISO/IEC 27001:2013, 27017:2015, 27018:2019, and ISO/IEC 9001:2015. Ariadne Maps GmbH has not outsourcing partners, and hence no one else than Ariadne Maps GmbH can access the stored data. Ariadne Maps GmbH does not stream information that can be linked to an individual and it never stores information that corresponds to a single person and deletes all collected information in regular intervals. Ariadne Maps GmbH only stores aggregated data that cannot be linked to individuals and hence do not fall in GDPR. Ariadne Maps GmbH has an alert protocol in place that immediately blocks access to non-authorised users and blocks access to all services in case of password leak. This protocol has already been tested.</p><br/>

      <h4>Data Access</h4><br/>
      <p>Data can be accessed via a graphical user interface, i.e. a dashboard. As already been mentioned, all data concerned groups of people and not individuals. The dashboard can only be accessed via username and password and all passwords are complex (min. 8 digits upper/lower case letter, numbers and special characters) are forced. Users can reset their own passwords and the access to data is encrypted. Data is transferred only via HTTPS connection. A logging mechanist for user access is in place and data is not transferred to non-European countries.</p><br/>



     
      </p>
      </div>
    </div></>
  )
}

export default datalifecycle