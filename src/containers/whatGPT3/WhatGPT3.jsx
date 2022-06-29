import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">SCOPE OF THE CONFERENCE</h1>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <p>Original contributions from researchers describing their original, unpublished, research contribution which is not currently under review by another conference or journal and addressing state-of-the-art research are invited to share their work in all areas of ICMLDE 2022 but not limited to the conference tracks.</p>
        <br />
        <p>Conference Sub Themes and Tracks:</p>
      </div>
      <div className="gpt3__whatgpt3-container2">
        <div className="gpt3__whatgpt3-container">
          <Feature title="Internet of Things" text="The advent in IoT is well-known to all of us. Nowadays near about all smart devices use IoT technology at the backend. This track focuses on the following but are not limited to: Wireless Sensor Networks, Communication in Wireless Sensor Networks, Connectivity and Networking Issues, Signal processing in IoT, Security and Privacy issues, IoT data analytics and services, Innovations in IoT, Virtualization in IoT, IoT and Cloud/Edge integration, Use-cases and deployment." />
          <Feature title="Cloud Computing Paradigms" text="The exclusive use of cloud computing paradigms attracts many researchers to find novel solutions to the existing problems in this domain. This track includes the following but are not limited to: Mobility and Virtualization in Cloud, Cloud Infrastructure and Paradigms, Storage and Data Management in Cloud, Service discovery and availability in Cloud, Cloud Service Enforcement and Service Level Agreement (SLA), Edge/Fog Computing, Networking in the Cloud platform" />
          <Feature title="GIS and Remote Sensing" text="Nowadays, there is a buzzword called Remote Sensing. This domain is so rapidly growing due to its extensive application areas, it attracts researchers to use it. Thu, this track includes the following but are not limited to: Regionalization and Land-Use Land Cover, UAV-Based Remote Sensing Techniques, Geospatial Data Analytics, Health GIS, Cloud GIS and Spatial Data Infrastructure, Time Series Analysis with High Spatial Resolution Imagery." />
        </div>
      </div>
      <div className="gpt3__whatgpt3-container2">
        <div className="gpt3__whatgpt3-container">
          <Feature title=" Quantum Information Processing" text="As the present world is going towards the futuristic direction of quantum computing, this domain is growing vast day-by-day. This track includes the following topics but are not limited to: Quantum cryptography and communications, Quantum Machine Learning Algorithms, Quantum Imaging and Sensing, Spin-based Quantum Information Processing, Quantum error correction and fault tolerance, Quantum complexity, Quantum machine learning algorithms based on Grover search." />
          <Feature title="Wireless Communication and Signal Processing" text="This track is focusing on the following topics but are not limited to: Cognitive Radio Systems, Smart Antenna Technology, Communication in Complex Environments, Broadband Wireless Communication, 3GPP, LTE, LTE-A, Secure and Cooperative Communication, Multimedia Broadcast and Multicast Services, Wireless System Optimization and Coding, Mobility Management and Locality issues, Power Cognitive Communication, MIMO, WLAN, WANET, WiMax, MANET, and VANET Technologies." />
          <Feature title="Computational Intelligence" text="This track includes the recent topics as follows but is not limited to: Cognitive and Computational Foundations of Brain Science, Human Information Processing Systems, Brain-Machine Intelligence and Brain-Inspired Computing, Optimization techniques, System modeling and simulation fuzzy system, Evolutionary computational methods, Bayesian learning, Hybrid intelligent systems, Big-data, Data mining, Robotics & Computer Vision, Machine Learning Algorithms and Ensembling." />
        </div>
      </div>
      <div className="gpt3__whatgpt3-container2">
        <div className="gpt3__whatgpt3-container">
          <Feature title="  Cryptography and Information Security" text="This track includes the recent topics as follows but is not limited to: Cyber Warfare Trends and Approaches, Social engineering, Algorithms in biometrics, Enterprise Systems Security, Formal Methods Application in Security, SCADA and Embedded systems security, Distributed and Pervasive Systems Security, Secure Software Development, Situational Awareness Assessments, Network Situational Awareness, National and Critical Infrastructure Security Issues." />
          <Feature title="Blockchain Technology" text="Brain Computer Interface, Biosignal Processing, Biosensors, Wearable Micro and Nano sensors, Neural Engineering, Modeling and Simulation of Biomedical Processes, Smart Implant, Telemedicine, Telesurgery, Pulmonary and Cardiovascular Engineering, Healthcare Big Data Analytics, Biomedical Robotics, Rehabilitation Engineering, Gene Expression Engineering" />
          <Feature title="Natural Language Processing" text="The scope of this track includes but are not limited to: Named Entity Recognition, Speech and Audio Processing, Optical Character Recognition, Latent Dirichlet Allocation, Spoken Language Processing, Computational Models of Speech and Language, Psychology and Neuropsychology of language." />
        </div>
      </div>
    </div>
  );
}
export default WhatGPT3;
