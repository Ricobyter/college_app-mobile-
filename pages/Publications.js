import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const Publications = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2022');

  const years = ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007'];

  const publications = {
    2022: {
      journals: [
        {
          title: "A novel multi-scale based deep convolutional neural network for detecting COVID-19 from X-rays",
          authors: "Mohan Karnati, Ayan Seal, Geet Sahu, Yazidi, Ondrej Krejcar",
          journal: "Applied Soft Computing",
          volume: "125",
          doi: "https://doi.org/10.1016/j.asoc.2022.109109"
        },
        {
          title: 'Trends and Prospects of Techniques for Haze Removal From Degraded Images: A Survey',
          authors: 'Geet Sahu, Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Peter Brida, Ondrej Krejcar',
          journal: 'IEEE Transactions on Emerging Topics in Computational Intelligence',
          volume: '',
          doi: 'https://doi.org/10.1109/TETCI.2022.3173443',
        },
        {
          title: 'Thrombotic and Atherogenetic Predisposition in Polyglobulic Donors',
          authors: 'Nikola Slaninova, Iveta Bryjova, Zenon Lasota, Radmila Richterova, Jan Kubicek, Martin Augustynek, Ayan Seal, Ondrej Krejcar, Antonino Proto',
          journal: 'Biomedicines',
          volume: '10',
          doi: 'https://doi.org/10.3390/biomedicines10040888',
        },
        {
          title: "Graphical representation learning-based approach for automatic classification of electroencephalogram signals in depression",
          authors: "Surbhi Soni, Ayan Seal, Anis Yazidi, Ondrej Krejcar",
          journal: "Computers in Biology and Medicine",
          volume: "145",
          doi: "https://doi.org/10.1016/j.compbiomed.2022.105420"
        },
        
        {
          title: "Deep learning techniques for infrared image/video understanding",
          authors: "Ayan Seal, Debotosh Bhattacharjee, Anis Yazidi",
          journal: "Multimedia Tools and Applications",
          volume: "",
          doi: "https://doi.org/10.1007/s11042-022-12787-2"
        },
        
        {
          title: "VGG-ICNN: A Lightweight CNN model for crop disease identification",
          authors: "Poornima Singh Thakur, Tanuja Sheorey, Aparajita Ojha",
          journal: "Multimedia Tools and Applications",
          volume: "",
          doi: "https://doi.org/10.1007/s11042-022-13144-z"
        },
        
        {
          title: "Real-time interception performance evaluation of certain proportional navigation based guidance laws in aerial ground engagement",
          authors: "Amit Kumar, Aparajita Ojha, Sonal Yadav, Anupam Kumar",
          journal: "Intelligent Service Robotics",
          volume: "15",
          doi: "https://doi.org/10.1007/s11370-021-00404-4"
        },
        
        {
          title: "Max-min threshold-based cancelable biometric templates for low-end devices",
          authors: "Gourav Siddhad, Pritee Khanna",
          journal: "Journal of Electronic Imaging",
          volume: "31",
          doi: "https://doi.org/10.1117/1.JEI.31.3.033025"
        },
        
        {
          title: "A survey on vision-based outdoor smoke detection techniques for environmental safety",
          authors: "Shubhangi Chaturvedi, Pritee Khanna, Aparajita Ojha",
          journal: "ISPRS Journal of Photogrammetry and Remote Sensing",
          volume: "185",
          doi: "https://doi.org/10.1016/j.isprsjprs.2022.01.013"
        },
        {
          title: "3D Supervoxel based features for early detection of AD: A microscopic view to the brain MRI",
          authors: "Shiwangi Mishra, Iman Beheshti, M Tanveer, Pritee Khanna",
          journal: "Multimedia Tools and Applications",
          volume: "",
          doi: "https://doi.org/10.1007/s11042-021-11871-3"
        },
        
        {
          title: "Challenges for ocular disease identification in the era of artificial intelligence",
          authors: "Neha Gour, M Tanveer, Pritee Khanna",
          journal: "Neural Computing and Applications",
          volume: "",
          doi: "https://doi.org/10.1007/s00521-021-06770-5"
        },
        
        {
          title: "Artificial intelligence and deep learning for biomedical applications",
          authors: "Pritee Khanna, Mohammad Tanveer, Mukesh Prasad, Chin-Teng Lin",
          journal: "Multimedia Tools and Applications",
          volume: "",
          doi: "https://doi.org/10.1007/s11042-022-12956-3"
        },
        
        {
          title: "A Deep Learning-Based Approach to Detect Correct Suryanamaskara Pose",
          authors: "Ujjayanta Bhaumik, Koushlendra Kumar Singh, Akbar Sheikh Akbari, Manish Kumar Bajpai",
          journal: "SN Computer Science",
          volume: "3",
          doi: "https://doi.org/10.1007/s42979-022-01226-6"
        },
        
        {
          title: "Hybrid multiagent based adaptive genetic algorithm for limited view tomography using oppositional learning",
          authors: "Raghavendra Mishra, Manish Kumar Bajpai",
          journal: "Biomedical Signal Processing and Control",
          volume: "75",
          doi: "https://doi.org/10.1016/j.bspc.2022.103610"
        },
        
        {
          title: "Deep neural network for beam hardening artifacts removal in image reconstruction",
          authors: "Kailash Kalare, Manish Bajpai, Shubhabrata Sarkar, Prabhat Munshi",
          journal: "Applied Intelligence",
          volume: "52",
          doi: "https://doi.org/10.1007/s10489-021-02604-y"
        },
        
        {
          title: "Deep Learning Capabilities for the Categorization of Microcalcification",
          authors: "Koushlendra Kumar Singh, Suraj Kumar, Marios Antonakakis, Konstantina Moirogiorgou, Anirudh Deep, Kanchan Lata Kashyap, Manish Kumar Bajpai, Michalis Zervakis",
          journal: "International Journal of Environmental Research and Public Health",
          volume: "19",
          doi: "https://doi.org/10.3390/ijerph19042159"
        },
        {
          title: "Hybrid multiagent based adaptive genetic algorithm for limited view tomography using oppositional learning",
          authors: "Raghavendra Mishra, Manish Kumar Bajpai",
          journal: "Biomedical Signal Processing and Control",
          volume: "75",
          doi: "https://doi.org/10.1016/j.bspc.2022.103610"
        },
        
        {
          title: "Deep neural network for beam hardening artifacts removal in image reconstruction",
          authors: "Kailash Kalare, Manish Bajpai, Shubhabrata Sarkar, Prabhat Munshi",
          journal: "Applied Intelligence",
          volume: "52",
          doi: "https://doi.org/10.1007/s10489-021-02604-y"
        },
        
        {
          title: "Deep Learning Capabilities for the Categorization of Microcalcification",
          authors: "Koushlendra Kumar Singh, Suraj Kumar, Marios Antonakakis, Konstantina Moirogiorgou, Anirudh Deep, Kanchan Lata Kashyap, Manish Kumar Bajpai, Michalis Zervakis",
          journal: "International Journal of Environmental Research and Public Health",
          volume: "19",
          doi: "https://doi.org/10.3390/ijerph19042159"
        },
        
        {
          title: "A compartmental Mathematical model of COVID-19 intervention scenarios for Mumbai",
          authors: "Avaneesh Singh, Manish Kumar Bajpai",
          journal: "medRxiv",
          volume: "",
          doi: "https://doi.org/10.1101/2022.02.28.22271624"
        },
        
        {
          title: "Fractional Model with Social Distancing Parameter for Early Estimation of COVID-19 Spread",
          authors: "Saroj Kumar Chandra, Manish Kumar Bajpai",
          journal: "Arabian Journal for Science and Engineering",
          volume: "47",
          doi: "https://doi.org/10.1007/s13369-021-05827-w"
        },
        
        {
          title: "An efficient self-embedding fragile watermarking scheme for image authentication with two chances for recovery capability",
          authors: "Durgesh Singh, Sanjay K Singh, Sandeep Sambhaji Udmale",
          journal: "Multimedia Tools and Applications",
          volume: "",
          doi: "https://doi.org/10.1007/s11042-022-13270-8"
        },
        
        {
          title: "A novel intelligent round robin CPU scheduling algorithm",
          authors: "Prem Sagar Sharma, Sanjeev Kumar, Madhu Sharma Gaur, Vinod Jain",
          journal: "International Journal of Information Technology",
          volume: "14",
          doi: "https://doi.org/10.1007/s41870-021-00630-0"
        },
        
        {
          title: "A new intrusion detection method for cyber–physical system in emerging industrial IoT",
          authors: "Himanshu Mittal, Ashish Kumar Tripathi, Avinash Chandra Pandey, Mohammad Dahman Alshehri, Mukesh Saraswat, Raju Pal",
          journal: "Computer Communications",
          volume: "190",
          doi: "https://doi.org/10.1016/j.comcom.2022.04.004"
        },
        
        {
          title: "Enhancing sentiment analysis using Roulette wheel selection based cuckoo search clustering method",
          authors: "Avinash Chandra Pandey, Ankur Kulhari, Deep Shikha Shukla",
          journal: "Journal of Ambient Intelligence and Humanized Computing",
          volume: "13",
          doi: "https://doi.org/10.1007/s12652-021-03603-0"
        },
        
        {
          title: "Significance driven inverse distance weighted filter to restore impulsive noise corrupted X-ray image",
          authors: "Bharat Garg, Prashant Singh Rana, Vijaypal Singh Rathor",
          journal: "Journal of Ambient Intelligence and Humanized Computing",
          volume: "13",
          doi: "https://doi.org/10.1007/s12652-021-02962-y"
        },
        
        {
          title: "Hyperspectral image classification using multiobjective optimization",
          authors: "Simranjit Singh, Deepak Singh, Mohit Sajwan, Vijaypal Singh Rathor, Deepak Garg",
          journal: "Multimedia Tools and Applications",
          volume: "",
          doi: "https://doi.org/10.1007/s11042-022-12462-6"
        },
        
        {
          title: "Sustainable IoT Solution for Freshwater Aquaculture Management",
          authors: "Munesh Singh, Kshira Sagar Sahoo, Anand Nayyar",
          journal: "IEEE Sensors Journal",
          volume: "",
          doi: "https://doi.org/10.1109/JSEN.2022.3188639"
        },
        
        {
          title: "Occupancy detection and localization strategies for demand modulated appliance control in Internet of Things enabled home energy management system",
          authors: "Anisha Natarajan, Vijayakumar Krishnasamy, Munesh Singh",
          journal: "Renewable and Sustainable Energy Reviews",
          volume: "167",
          doi: "https://doi.org/10.1016/j.rser.2022.112731"
        },
        
      ],
      conferences: [
        { 
          title: 'Analysis of Hatchetman Attack in RPL Based IoT Networks',
          authors: 'Girish Sharma, Jyoti Grover, Abhishek Verma, Rajat Kumar, Rahul Lahre',
          conference: 'International Conference on Emerging Technologies in Computer Engineering',
          year: '2022',
          pages: '666-678',
          publisher: 'Springer',
          location: 'Cham',
          doi: 'https://doi.org/10.1007/978-3-031-07012-9_55',
        },
        
        { 
          title: 'Analysis of Hatchetman Attack in RPL Based IoT Networks',
          authors: 'Girish Sharma, Jyoti Grover, Abhishek Verma, Rajat Kumar, Rahul Lahre',
          conference: 'International Conference on Emerging Technologies in Computer Engineering',
          year: '2022',
          pages: '666-678',
          publisher: 'Springer',
          location: 'Jaipur, India',
          doi: 'https://doi.org/10.1007/978-3-031-07012-9_55',
        },
        
        { 
          title: 'Addressing DAO Insider Attacks in IPv6-Based Low-Power and Lossy Networks',
          authors: 'Sachin Kumar Verma, Abhishek Verma, Avinash Chandra Pandey',
          conference: 'IEEE Region 10 Symposium (TENSYMP 2022)',
          year: '2022',
          pages: '-',
          publisher: 'IEEE',
          location: 'IIT Bombay, India',
          doi: 'https://doi.org/10.36227/techrxiv.10741406.v1',
        },
        
        { 
          title: 'Occupancy detection and localization strategies for demand modulated appliance control in Internet of Things enabled home energy management system',
          authors: 'Anisha Natarajan, Vijayakumar Krishnasamy, Munesh Singh',
          journal: 'Renewable and Sustainable Energy Reviews',
          year: '2022',
          pages: '-',
          publisher: 'Pergamon',
          location: '-',
          doi: 'https://doi.org/10.1016/j.rser.2022.112731',
        },
        
      ],
    },
    2021: {
      journals: [
     
        {
          title: "SD-WAN Flood Tracer: Tracking the Entry Points of DDoS Attack Flows in WAN",
          authors: "Neelam Dayal, Shashank Srivastava",
          journal: "Computer Networks",
          volume: "186",
          doi: "https://doi.org/10.1016/j.comnet.2021.107813"
        },
        {
          title: "DeprNet: A Deep Convolution Neural Networks Framework for Detecting Depression using EEG",
          authors: "Ayan Seal, Rishabh Bajpai, Jagriti Agnihotri, Anis Yazidi, Enrique Herrera-Viedma, Ondrej Krejcar",
          journal: "IEEE Transactions on Instrumentation & Measurement",
          volume: "2021",
          doi: "https://doi.org/10.1109/TIM.2021.3053999"
        },
        {
          title: "Text Summarization Using Topic-Based Vector Space Model and Semantic Measure",
          authors: "Ramesh Belwal, Sawan Rai, Atul Gupta",
          journal: "Information Processing and Management",
          volume: "2021",
          doi: "https://doi.org/10.1016/j.ipm.2021.102536"
        },
        {
          title: "Performance and Convergence Analysis of Modified C-Means Using Jeffreys-Divergence for Clustering",
          authors: "Ayan Seal, Aditya Karlekar, Ondrej Krejcar, Enrique Herrera-Viedma",
          journal: "International Journal of Interactive Multimedia and Artificial Intelligence",
          volume: "2021",
          doi: "https://doi.org/10.9781/ijimai.2021.04.009"
        },
        {
          title: "Communicable Disease Pandemic: A Simulation Model Based on Community Transmission and Social Distancing",
          authors: "Sourav Kumar Bhoi, Kalyan Kumar Jena, Debasis Mohapatra, Munesh Singh, Raghvendra Kumar, Hoang Viet Long",
          journal: "Soft Computing",
          volume: "2021",
          doi: "https://doi.org/10.1007/s00500-021-06168-4"
        },
        {
          title: "Three-Class Brain Tumor Classification Using Deep Dense Inception Residual Network",
          authors: "Srinath Kokkalla, Jagadeesh Kakarla, Isunuri B. Venkateswarlu, Munesh Singh",
          journal: "Soft Computing",
          volume: "2021",
          doi: "https://doi.org/10.1007/s00500-021-05748-8"
        },
        {
          title: "Multi-Class Brain Tumor Classification Using Residual Network and Global Average Pooling",
          authors: "R Lokesh Kumar, Jagadeesh Kakarla, B Venkateswarlu Isunuri, Munesh Singh",
          journal: "Multimedia Tools and Applications",
          volume: "2021",
          doi: "https://doi.org/10.1007/s11042-020-10335-4"
        },
        {
          title: "Geometric Least Square Curve Fitting Method for Localization of Wireless Sensor Network",
          authors: "Munesh Singh, Sourav Kumar Bhoi, Sanjaya Kumar Panda",
          journal: "Ad Hoc Networks",
          volume: "2021",
          doi: "https://doi.org/10.1016/j.adhoc.2021.102456"
        },
        {
          title: "Transition Based Discount Factor for Model Free Algorithms in Reinforcement Learning",
          authors: "Abhinav Sharma, Ruchir Gupta, K. Lakshmanan, Atul Gupta",
          journal: "Symmetry",
          volume: "2021",
          doi: "https://doi.org/10.3390/sym13071197"
        },
        {
          title: "Gene Expression Clustering Using Local Neighborhood-Based Similarity Measures",
          authors: "R. Jothi, Sraban Kumar Mohanty, A. Ojha",
          journal: "Computers & Electrical Engineering",
          volume: "2021",
          doi: "https://doi.org/10.1016/j.compeleceng.2021.107032"
        },
        {
          title: "Gated Contextual Features for Salient Object Detection",
          authors: "Gupta, A.K., Seal, A., Khanna, P., Krejcar, O., Yazidi, A",
          journal: "IEEE Transactions on Instrumentation and Measurement",
          volume: "2021",
          doi: "https://doi.org/10.1109/TIM.2021.3064423"
        },
        {
          title: "Design of Fractional Calculus Based Differentiator for Edge Detection in Color Images",
          authors: "Santosh Mishra, Koushlendra K Singh, Richa Dixit, Manish Bajpai",
          journal: "Multimedia Tools and Applications",
          volume: "2021",
          doi: "https://doi.org/10.1007/s11042-021-11187-2"
        },
        {
          title: "A Priority Based Genetic Algorithm for Limited View Tomography",
          authors: "Raghvendra Mishra, Manish Bajpai",
          journal: "Applied Intelligence",
          volume: "2021",
          doi: "https://doi.org/10.1007/s10489-021-02192-x"
        },
        {
          title: "LieNet: A Deep Convolution Neural",
          authors: "Mohan Karnati, Ayan Seal, Anis Yazidi, Ondrej Krejcar",
          journal: "IEEE Transactions on Cognitive and Developmental Systems",
          volume: "2021",
          doi: "https://doi.org/10.1109/TCDS.2021.3086011"
        },
        {
          title: "Clustering Uncertain Data Objects Using",
          authors: "Krishna Kumar Sharma, Ayan Seal, Anis Yazidi, Ali Selamat, Ondrej Krejcar",
          journal: "IEEE Access",
          volume: "2021",
          doi: "https://doi.org/10.1109/ACCESS.2021.3083969"
        },
        {
          title: "An Enhanced Spectral Clustering Algorithm with S-Distance",
          authors: "Krishna Kumar Sharma, Ayan Seal, Enrique Herrera-Viedma, Ondrej Krejcar",
          journal: "Symmetry",
          volume: "2021",
          doi: "https://doi.org/10.3390/sym13040596"
        },
        {
          title: "The Impact of Copycat Attack on RPL Based 6LoWPAN Networks",
          authors: "Abhishek Verma, Virender Ranga",
          journal: "Internet of Things in Computing",
          volume: "2021",
          doi: "https://doi.org/10.1007/s00607-020-00862-1"
        },
        {
          title: "Stance Detection Using Improved Whale Optimization Algorithm",
          authors: "Avinash Chandra Pandey, Vinay Anand Tikkiwal",
          journal: "2021",
          volume: "2021",
          doi: "https://doi.org/10.1007/s40747-021-00294-0"
        },
        {
          title: "A New Clustering Method for the Diagnosis of COVID-19 Using Medical Images",
          authors: "Himanshu Mittal, Avinash Chandra Pandey, Raju Pal, Ashish Tripathi",
          journal: "Applied Intelligence",
          volume: "2021",
          doi: "https://doi.org/10.1007/s10489-020-02122-3"
        },
        {
          title: "A Comprehensive Survey of Image Segmentation: Clustering Methods, Performance Parameters, and Benchmark Datasets",
          authors: "Himanshu Mittal, Avinash Chandra Pandey, Mukesh Saraswat, Sumit Kumar, Raju Pal, Garv Modwel",
          journal: "Multimedia Tools and Applications",
          volume: "2021",
          doi: "https://doi.org/10.1007/s11042-021-10594-9"
        },
        {
          title: "Feature Selection Method Based on Grey Wolf Optimization and Simulated Annealing",
          authors: "Avinash Pandey, Dharmveer Singh Rajpoot",
          journal: "Recent Advances in Computer Science and Communications",
          volume: "2021",
          doi: "https://doi.org/10.2174/2213275912666190408111828"
        },
        {
          title: "A New Hardware Trojan Detection Technique Using Deep Convolutional Neural Network",
          authors: "Richa. Sharma, V. S. Rathor, G.K. Sharma, Manisha Pattanaik",
          journal: "Integration: The VLSI Journal",
          volume: "2021",
          doi: "https://doi.org/10.1016/j.vlsi.2021.03.001"
        },
        {
          title: "Security Analysis of Image CAPTCHA Using Mask R-CNN Based Attack Mode",
          authors: "V. S. Rathor, B. Garg, Mandar Patil, G. K. Sharma",
          journal: "International Journal of Ad Hoc and Ubiquitous Computing (IJAHUC)",
          volume: "2021",
          doi: "https://doi.org/10.1504/IJAHUC.2021.114108"
        },
        {
          title: "HyDroid: Android Malware Detection Using Network Flow Combined with Permissions and Intent Filters",
          authors: "Akram Zine Eddine Boukhamla, Abhishek Verma",
          journal: "International Journal of Mobile Communications",
          volume: "2021",
          doi: "https://doi.org/10.1504/IJMC.2023.10040480"
        }
        

      ],
      conferences: [
        { 
          title: 'SD-WAN Flood Tracer: Tracking the Entry Points of DDoS Attack Flows in WAN',
          authors: 'Neelam Dayal, Shashank Srivastava',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1016/j.comnet.2021.107813',
        },
        
        { 
          title: 'DeprNet: A Deep Convolution Neural Networks Framework for Detecting Depression using EEG',
          authors: 'Ayan Seal, Rishabh Bajpai, Jagriti Agnihotri, Anis Yazidi, Enrique Herrera-Viedma, Ondrej Krejcar',
          journal: 'IEEE Transactions on Instrumentation & Measurement',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1109/TIM.2021.3053999',
        },
        
        { 
          title: 'Text Summarization Using Topic-Based Vector Space Model and Semantic Measure',
          authors: 'Ramesh Belwal, Sawan Rai, Atul Gupta',
          journal: 'Information Processing and Management',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1016/j.ipm.2021.102536',
        },
        
        { 
          title: 'Performance and convergence analysis of modified c-means using Jeffreys-divergence for clustering',
          authors: 'Ayan Seal, Aditya Karlekar, Ondrej Krejcar, Enrique Herrera-Viedma',
          journal: 'International Journal of Interactive Multimedia and Artificial Intelligence',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.9781/ijimai.2021.04.009',
        },
        
        { 
          title: 'Communicable Disease Pandemic: A Simulation Model Based on Community Transmission and Social Distancing',
          authors: 'Sourav Kumar Bhoi, Kalyan Kumar Jena, Debasis Mohapatra, Munesh Singh, Raghvendra Kumar, Hoang Viet Long',
          journal: 'Soft Computing',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1007/s00500-021-06168-4',
        },
        
        { 
          title: 'Three-class brain tumor classification using deep dense inception residual network',
          authors: 'Srinath Kokkalla, Jagadeesh Kakarla, Isunuri B. Venkateswarlu, Munesh Singh',
          journal: 'Soft Computing',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1007/s00500-021-05748-8',
        },
        
        { 
          title: 'Multi-class brain tumor classification using residual network and global average pooling',
          authors: 'R Lokesh Kumar, Jagadeesh Kakarla, B Venkateswarlu Isunuri, Munesh Singh',
          journal: 'Multimedia Tools and Applications',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1007/s11042-020-10335-4',
        },
        
        { 
          title: 'Geometric least square curve fitting method for localization of wireless sensor network',
          authors: 'Munesh Singh, Sourav Kumar Bhoi, Sanjaya Kumar Panda',
          journal: 'Ad Hoc Networks',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1016/j.adhoc.2021.102456',
        },
        
        { 
          title: 'Transition based Discount Factor for Model Free Algorithms in Reinforcement Learning',
          authors: 'Abhinav Sharma, Ruchir Gupta, K. Lakshmanan, Atul Gupta',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.3390/sym13071197',
        },
        
        { 
          title: 'Gene expression clustering using local neighborhood-based similarity measures',
          authors: 'R. Jothi, Sraban Kumar Mohanty, A. Ojha',
          journal: 'Computers & Electrical Engineering',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1016/j.compeleceng.2021.107032',
        },
        { 
          title: 'Gated Contextual Features for Salient Object Detection',
          authors: 'Gupta, A.K., Seal, A., Khanna, P., Krejcar, O., Yazidi, A.',
          journal: 'IEEE Transactions on Instrumentation and Measurement',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1109/TIM.2021.3064423',
        },
        
        { 
          title: 'Design of Fractional Calculus based Differentiator for Edge detection in Color images',
          authors: 'Santosh Mishra, Koushlendra K Singh, Richa Dixit, Manish Bajpai',
          journal: 'Multimedia Tools and Applications',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1007/s11042-021-11187-2',
        },
        
        { 
          title: 'A Priority Based Genetic Algorithm for Limited View Tomography',
          authors: 'Raghvendra Mishra, Manish Bajpai',
          journal: 'Applied Intelligence',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1007/s10489-021-02192-x',
        },
        
        { 
          title: 'LieNet: A Deep Convolution Neural',
          authors: 'Mohan Karnati, Ayan Seal, Anis Yazidi, Ondrej Krejcar',
          journal: 'IEEE Transactions on Cognitive and Developmental Systems',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1109/TCDS.2021.3086011',
        },
        
        { 
          title: 'Clustering Uncertain Data Objects using',
          authors: 'Krishna Kumar Sharma, Ayan Seal, Anis Yazidi, Ali Selamat, Ondrej Krejcar',
          journal: 'IEEE Access',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1109/ACCESS.2021.3083969',
        },
        
        { 
          title: 'An Enhanced Spectral Clustering Algorithm with S-distance',
          authors: 'Krishna Kumar Sharma, Ayan Seal, Enrique Herrera-Viedma, Ondrej Krejcar',
          journal: 'Symmetry',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.3390/sym13040596',
        },
        
        { 
          title: 'The impact of copycat attack on RPL based 6LoWPAN networks in Internet of Things',
          authors: 'Abhishek Verma, Virender Ranga',
          journal: 'Computing',
          year: '2021',
          pages: '-',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/s00607-020-00862-1',
        },
        
        { 
          title: 'Stance detection using improved whale optimization algorithm',
          authors: 'Avinash Chandra Pandey, Vinay Anand Tikkiwal',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1007/s40747-021-00294-0',
        },
        
        { 
          title: 'A new clustering method for the diagnosis of CoVID19 using medical images',
          authors: 'Himanshu Mittal, Avinash Chandra Pandey, Raju Pal, Ashish Tripathiv',
          journal: 'Applied Intelligence',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1007/s10489-020-02122-3',
        },
        
        { 
          title: 'A comprehensive survey of image segmentation: clustering methods, performance parameters, and benchmark datasets',
          authors: 'Himanshu Mittal, Avinash Chandra Pandey, Mukesh Saraswat, Sumit Kumar, Raju Pal, Garv Modwel',
          journal: 'Multimedia Tools and Applications',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1007/s11042-021-10594-9',
        },
        { 
          title: 'Feature Selection Method based on Grey Wolf Optimization and Simulated Annealing',
          authors: 'Avinash Pandey, Dharmveer Singh Rajpoot',
          journal: 'Recent Advances in Computer Science and Communications (Formerly: Recent Patents on Computer Science)',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.2174/2213275912666190408111828',
        },
        
        { 
          title: 'A New Hardware Trojan Detection Technique Using Deep Convolutional Neural Network',
          authors: 'Richa Sharma, V. S. Rathor, G.K. Sharma, Manisha Pattanaik',
          journal: 'Integration: The VLSI Journal, Elsevier',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1016/j.vlsi.2021.03.001',
        },
        
        { 
          title: 'Security Analysis of Image CAPTCHA using Mask R-CNN Based Attack Mode',
          authors: 'V. S. Rathor, B. Garg, Mandar Patil, G. K. Sharma',
          journal: 'International Journal of Ad Hoc and Ubiquitous Computing (IJAHUC)',
          year: '2021',
          pages: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1504/IJAHUC.2021.114108',
        },
        
        { 
          title: 'HyDroid: Android malware detection using network flow combined with permissions and intent filters',
          authors: 'Akram Zine Eddine Boukhamla, Abhishek Verma',
          journal: 'International Journal of Mobile Communications',
          year: '2021',
          pages: '-',
          publisher: 'Inderscience',
          doi: 'http://dx.doi.org/10.1504/IJMC.2023.10040480',
        },
        
        { 
          title: 'SD-WAN Flood Tracer: Tracking the entry points of DDoS attack flows in WAN',
          authors: 'Neelam Dayal, Shashank Srivastava',
          journal: 'Computer Networks',
          year: '2021',
          volume: '186',
          pages: '107813-108827',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.comnet.2021.107813',
        },
        
        
        
      ],
    },
    2020: {
      journals: [
        
          {
            title: "PolyCodes: Generating cancelable biometric features using polynomial transformation",
            authors: "Kaur Harkeerat, Khanna Pritee",
            journal: "Multimedia Tools and Applications",
            volume: "2020",
            doi: "https://doi.org/10.1007/s11042-020-08734-8"
          },
          {
            title: "A Fast Fused Part-based Model with New Deep Feature for Pedestrian Detection and Security Monitoring",
            authors: "Eric Juwei Cheng, Mukesh Prasad, Jie Yang, Pritee Khanna, Bing-Hong Chen, XianTao, Ku-Young Young, Chin-Teng Lin",
            journal: "Measurement",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.measurement.2019.107081"
          },
          {
            title: "T1-weighted MRI-driven Brain age estimation in Alzheimer's disease and Parkinson's disease",
            authors: "Beheshti Iman, Mishra Shiwangi, Sone Daichi, Khanna Pritee, Matsuda Hiroshi",
            journal: "Aging and Disease",
            volume: "2020",
            doi: "https://doi.org/10.14336/AD.2019.0617"
          },
          {
            title: "Machine Learning Techniques for the Diagnosis of Alzheimer’s Disease: A Review",
            authors: "Tanveer M., Richhariya B., Khan R.U., Rashid A.H., Khanna Pritee, Prasad M., Lin C. T.",
            journal: "ACM Transactions on Multimedia Computing Communications and Applications",
            volume: "2020",
            doi: "https://doi.org/10.1145/3344998"
          },
          {
            title: "New lightweight Anti-SAT block design and obfuscation technique to thwart removal attack",
            authors: "V. S. Rathor, B. Garg, G. K. Sharma",
            journal: "Integration: The VLSI Journal, Elsevier",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.vlsi.2020.05.001"
          },
          {
            title: "Improving Sentiment Analysis using Hybrid Deep Learning Model",
            authors: "Avinash Pandey, Dharmveer Singh Rajpoot",
            journal: "Recent Advances in Computer Science and Communications (Formerly: Recent Patents on Computer Science)",
            volume: "2020",
            doi: "https://doi.org/10.2174/2213275912666190328200012"
          },
          {
            title: "Enhancing sentiment analysis using enhanced whale optimisation algorithm",
            authors: "Abdul Salam Mohammed, Vishal Shukla, Avinash Chandra Pandey",
            journal: "International Journal of Intelligent Information and Database Systems",
            volume: "2020",
            doi: "https://doi.org/10.1504/IJIIDS.2020.109456"
          },
          {
            title: "Feature selection method based on hybrid data transformation and binary binomial cuckoo search",
            authors: "Avinash Chandra Pandey, Dharmveer Singh Rajpoot, Mukesh Saraswat",
            journal: "Journal of Ambient Intelligence and Humanized Computing",
            volume: "2020",
            doi: "https://doi.org/10.1007/s12652-019-01330-1"
          },
          {
            title: "Gravitational search algorithm: a comprehensive analysis of recent variants",
            authors: "Himanshu Mittal, Ashish Tripathi, Avinash Chandra Pandey, Raju Pal",
            journal: "Multimedia Tools and Applications",
            volume: "2020",
            doi: "https://doi.org/10.1007/s11042-020-09831-4"
          },
          {
            title: "CoSec-RPL: detection of copycat attacks in RPL based 6LoWPANs using outlier analysis",
            authors: "Abhishek Verma, Virender Ranga",
            journal: "Telecommunication Systems",
            volume: "2020",
            doi: "https://doi.org/10.1007/s11235-020-00674-w"
          },
          {
            title: "Security of RPL based 6LoWPAN Networks in the Internet of Things: A Review",
            authors: "Abhishek Verma, Virender Ranga",
            journal: "IEEE Sensors Journal",
            volume: "2020",
            doi: "https://doi.org/10.1109/JSEN.2020.2973677"
          },
          {
            title: "High CO2 zone localization in city areas using hardware implementation of urban vehicular ad hoc network (UVANET) platform",
            authors: "Sourav Kumar Bhoi, Chittaranjan Mallick, Munesh Singh, Sanjaya Kumar Panda",
            journal: "International Journal of Information Technology",
            volume: "2020",
            doi: "https://doi.org/10.1007/s41870-019-00357-z"
          },
          {
            title: "A collaborative filtering recommendation algorithm based on normalization approach",
            authors: "Sanjaya Kumar Panda, Sourav Kumar Bhoi",
            journal: "Journal of Ambient Intelligence and Humanized Computing",
            volume: "2020",
            doi: "https://doi.org/10.1007/s12652-020-01711-x"
          },
          {
            title: "Multi-class multi-label ophthalmological disease detection using transfer learning based convolutional neural network",
            authors: "Neha Gour, Pritee Khanna",
            journal: "Biomedical Signal Processing and Control",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.bspc.2020.102329"
          },
          {
            title: "FER-net: facial expression recognition using deep neural net",
            authors: "Mohan Karnati, Ayan Seal, Ondrej Krejcar, Anis Yazidi",
            journal: "Neural Computing and Applications",
            volume: "2020",
            doi: "https://doi.org/10.1007/s00521-020-05676-y"
          },
          {
            title: "Single Image Dehazing using a New Color Channel",
            authors: "Geet Sahu, Ayan Seal, Ondrej Krejcar, Anis Yazidi",
            journal: "Journal of Visual Communication and Image Representation",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.jvcir.2020.103008"
          },
          {
            title: "Spectral Embedded Generalized Mean based k-Nearest Neighbors Clustering with S-distance",
            authors: "Krishna Kumar Sharma, Ayan Seal",
            journal: "Expert Systems with Applications",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.eswa.2020.114326"
          },
          {
            title: "Outlier-robust multi-view clustering for uncertain data",
            authors: "Krishna Kumar Sharma, Ayan Seal",
            journal: "Knowledge-Based Systems",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.knosys.2020.106567"
          },
          {
            title: "AWkS: Adaptive, Weighted k-Means based Superpixels for Improved Saliency Detection",
            authors: "Ashish Kumar Gupta, Ayan Seal, Pritee Khanna, Ondrej Krejcar, Anis Yazidi",
            journal: "Pattern Analysis and Applications",
            volume: "2020",
            doi: "https://doi.org/10.1007/s10044-020-00925-1"
          },
          
          {
            title: "Detection of Abnormality in Wireless Capsule Endoscopy Images using Fractal Features",
            authors: "Samir Jain, Ayan Seal, Aparajita Ojha, Ondrej Krejcar, Jan Bures, Ilja Tacheci, Anis Yazidi",
            journal: "Computers in Biology and Medicine",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.compbiomed.2020.104094"
          },  {
            title: "SEIHCRD Model for COVID-19 spread scenarios, disease predictions and estimates the basic reproduction number, case fatality rate, hospital, and ICU beds requirement",
            authors: "Avaneesh Singh, Manish Bajpai",
            journal: "Computer Modeling in Engineering & Sciences",
            volume: "2020",
            doi: "http://dx.doi.org/10.1101/2020.07.24.20161752"
          },
          {
            title: "Study of Non-Pharmacological Interventions on COVID-19 Spread",
            authors: "Avaneesh Singh, Saroj Chandra, Manish Bajpai",
            journal: "Computer Modeling in Engineering & Sciences",
            volume: "2020",
            doi: "https://doi.org/10.32604/cmes.2020.011601"
          },
          {
            title: "Brain Tumor Detection and Segmentation using Mesh-Free Super-Diffusive Model",
            authors: "Saroj Chandra, Manish Bajpai",
            journal: "Multimedia Tools and Applications",
            volume: "2020",
            doi: "https://doi.org/10.1007/s11042-019-08374-7"
          },
          {
            title: "Fractional Mesh-Free Linear Diffusion Method For Image Enhancement and Segmentation for Automatic Tumor Classification",
            authors: "Saroj Chandra, Manish Bajpai",
            journal: "Biomedical Signal Processing & Control",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.bspc.2019.101841"
          },
          {
            title: "Efficient Three Dimensional Super-Diffusive Model for Benign Brain Tumor Segmentation",
            authors: "Saroj Chandra, Manish Bajpai",
            journal: "The European Physical Journal Plus",
            volume: "2020",
            doi: "https://doi.org/10.1140/epjp/s13360-020-00414-8"
          },
          {
            title: "Fractional Crank-Nicolson Finite Difference Method for Benign Brain Tumor Detection and Segmentation",
            authors: "Saroj Chandra, Manish Bajpai",
            journal: "Biomedical Signal Processing & Control",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.bspc.2020.102002"
          },
          {
            title: "RecDNN: Deep Neural Network for Image Reconstruction from Limited View Projection Data",
            authors: "Kailash W Kalare, Manish Bajpai",
            journal: "Soft Computing",
            volume: "2020",
            doi: "https://doi.org/10.1007/s00500-020-05013-4"
          },
          {
            title: "Kalman Filter Based Short Term Prediction Model for SARS-COV-2 Spread",
            authors: "Koushlendra K Singh, Suraj Kumar, Prachi Dixit, Manish Bajpai",
            journal: "Applied Intelligence",
            volume: "2020",
            doi: "10.1007/s10489-020-01948-1/APIN-D-20-01413R2"
          },
          {
            title: "A minimum spanning tree based partitioning and merging technique for clustering heterogeneous data sets",
            authors: "Gaurav Mishra, Sraban Kumar Mohanty",
            journal: "Journal of Intelligent Information Systems",
            volume: "2020",
            doi: "https://doi.org/10.1007/s10844-020-00602-z"
          },
          {
            title: "RDMN: A relative density measure based on MST neighborhood for clustering multi-scale datasets",
            authors: "Gaurav Mishra, Sraban Kumar Mohanty",
            journal: "IEEE Transactions on Knowledge and Data Engineering",
            volume: "2020",
            doi: "10.1109/TKDE.2020.2982400"
          },
          {
            title: "Efficient Construction of an Approximate Similarity Graph for Minimum Spanning Tree based Clustering",
            authors: "Gaurav Mishra, Sraban Kumar Mohanty",
            journal: "Applied Soft Computing",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.asoc.2020.106676"
          },
          {
            title: "Use case specifications: How complete are they?",
            authors: "Saurabh Tiwari, Atul Gupta",
            journal: "Journal of Softw. Evol. Process,Vol 32,Issue1, Elsevier",
            volume: "2020",
            doi: "https://doi.org/10.1002/smr.2218"
          },
          {
            title: "Active Learning Query Strategies for Classification, Regression, and Clustering: A Survey",
            authors: "Punit Kumar, Atul Gupta",
            journal: "Journal of Computer Science and Tech.,35,pp.913-945(2020),Springer",
            volume: "2020",
            doi: "https://doi.org/10.1007/s11390-020-9487-4"
          },
          {
            title: "Salient Object Detection Techniques in Computer Vision: A Survey",
            authors: "Ashish Kumar Gupta, Ayan Seal, Mukesh Prasad, Pritee Khanna",
            journal: "Entropy",
            volume: "2020",
            doi: "https://doi.org/10.3390/e22101174"
          },
          {
            title: "Facial Expression Recognition using Local Gravitational Force Descriptor based Deep Convolution Neural Networks",
            authors: "Mohan Karnati, Ayan Seal, Ondrej Krejcar, Anis Yazidi",
            journal: "IEEE Transactions on Instrumentation & Measurement",
            volume: "2020",
            doi: "10.1109/TIM.2020.3031835"
          },
          {
            title: "Clustering analysis using an adaptive fused distance",
            authors: "Krishna Kumar Sharma, Ayan Seal",
            journal: "Engineering Applications of Artificial Intelligence",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.engappai.2020.103928"
          },
          {
            title: "Multi-view Spectral Clustering for Uncertain Objects",
            authors: "Krishna Kumar Sharma, Ayan Seal",
            journal: "Information Sciences",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.ins.2020.08.080"
          },
          {
            title: "An EEG Database and Its Initial Benchmark Emotion Classification Performance",
            authors: "Ayan Seal, Puthi Prem Nivesh Reddy, Pingali Chaithanya, Arramada Meghana, Kamireddy Jahnavi, Ondrej Krejcar, Radovan Hudak",
            journal: "Computational and Mathematical Methods in Medicine",
            volume: "2020",
            doi: "https://doi.org/10.1155/2020/8303465"
          },
          {
            title: "Multi-focus Image Fusion using Fractal Dimension",
            authors: "Chinmaya Panigrahy, Ayan Seal, Nihar K. Mahato, Ondrej Krejcar, Enrique Herrera-Viedma",
            journal: "Applied Optics",
            volume: "2020",
            doi: "https://doi.org/10.1364/AO.391234"
          },
          {
            title: "Edge Information based Image Fusion Metrics using Fractional Order Differentiation and Sigmoidal Functions",
            authors: "Animesh Sengupta, Ayan Seal, Chinmaya Panigrahy, Ondrej Krejcar, Anis Yazidi",
            journal: "IEEE Access",
            volume: "2020",
            doi: "http://dx.doi.org/10.1109/ACCESS.2020.2993607"
          },
          {
            title: "MRI and SPECT image fusion using a weighted parameter adaptive dual channel PCNN",
            authors: "Chinmaya Panigrahy, Ayan Seal, Nihar K. Mahato",
            journal: "IEEE Signal Processing Letters",
            volume: "2020",
            doi: "http://dx.doi.org/10.1109/LSP.2020.2989054"
          },
          {
            title: "Fractal Dimension based Parameter Adaptive Dual Channel PCNN for Multi-focus Image Fusion",
            authors: "Chinmaya Panigrahy, Ayan Seal, Nihar K. Mahato",
            journal: "Optics and Lasers in Engineering",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.optlaseng.2020.106141"
          },
          {
            title: "SoyNet: Soybean Leaf Diseases Classification",
            authors: "Aditya Karlekar, Ayan Seal",
            journal: "Computers and Electronics in Agriculture",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.compag.2020.105342"
          },
          {
            title: "Image Texture Surface Analysis using an Improved Differential Box-counting based Fractal Dimension",
            authors: "Chinmaya Panigrahy, Ayan Seal, Nihar K. Mahato",
            journal: "Powder Technology",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.powtec.2020.01.053"
          },
          {
            title: "Fuzzy C-Means Clustering using Jeffreys-divergence based Similarity Measure",
            authors: "Ayan Seal, Aditya Karlekar, Ondrej Krejcar, Consuelo Gonzalo-Martin",
            journal: "Applied Soft Computing",
            volume: "2020",
            doi: "https://doi.org/10.1016/j.asoc.2019.106016"
          },
          {
            title: "A collaborative filtering recommendation algorithm based on normalization approach",
            authors: "Sanjaya Kumar Panda, Sourav Kumar Bhoi, Munesh Singh",
            journal: "Journal of Ambient Intelligence and Humanized Computing",
            volume: "11",
            number: "11",
            page: "4643-4665",
            publisher: "Springer Berlin Heidelberg",
            doi: "https://doi.org/10.1007/s12652-020-01711-x"
          },
          {
            title: "High CO2 zone localization in city areas using hardware implementation of urban vehicular ad hoc network (UVANET) platform",
            authors: "Sourav Kumar Bhoi, Chittaranjan Mallick, Munesh Singh, Sanjaya Kumar Panda",
            journal: "International Journal of Information Technology",
            volume: "12",
            number: "1",
            page: "65-70",
            publisher: "Springer Singapore",
            doi: "https://doi.org/10.1007/s41870-019-00357-z"
          },
          {
            title: "SEIHCRD Model for COVID-19 spread scenarios, disease predictions and estimates the basic reproduction number, case fatality rate, hospital, and ICU beds requirement",
            authors: "Avaneesh Singh, Manish Bajpai",
            journal: "Computer Modeling in Engineering & Sciences",
            volume: "2020",
            doi: "http://dx.doi.org/10.1101/2020.07.24.20161752"
          },
          {
            title: "Study of Non-Pharmacological Interventions on COVID-19 Spread",
            authors: "Avaneesh Singh, Saroj Chandra, Manish Bajpai",
            journal: "Computer Modeling in Engineering & Sciences",
            volume: "2020",
            doi: "https://doi.org/10.32604/cmes.2020.011601"
          },
          {
            title: "Brain Tumor Detection and Segmentation using Mesh-Free Super-Diffusive Model",
            authors: "Saroj Chandra, Manish Bajpai",
            journal: "Multimedia Tools and Applications",
            volume: "2020",
            doi: "https://doi.org/10.1007/s11042-019-08374-7"
          },
          {
            title: "Fractional Mesh-Free Linear Diffusion Method For Image Enhancement and Segmentation for Automatic Tumor Classification",
            authors: "Saroj Chandra, Manish Bajpai",
            journal: "Biomedical Signal Processing & Control",
            volume: "2020"
          },
          {
            title: "Efficient Three Dimensional Super-Diffusive Model for Benign Brain Tumor Segmentation",
            authors: "Saroj Chandra, Manish Bajpai",
            journal: "The European Physical Journal Plus",
            volume: "2020"
          },
          {
            title: "Fractional Crank-Nicolson Finite Difference Method for Benign Brain Tumor Detection and Segmentation",
            authors: "Saroj Chandra, Manish Bajpai",
            journal: "Biomedical Signal Processing & Control",
            volume: "2020"
          },
          {
            title: "RecDNN: Deep Neural Network for Image Reconstruction from Limited View Projection Data",
            authors: "Kailash W Kalare, Manish Bajpai",
            journal: "Soft Computing",
            volume: "2020"
          },
          {
            title: "Kalman Filter Based Short Term Prediction Model for SARS-COV-2 Spread",
            authors: "Koushlendra K Singh, Suraj Kumar, Prachi Dixit, Manish Bajpai",
            journal: "Applied Intelligence",
            volume: "2020"
          },
          
        
          
          
        
          
        
        
        
      ],
    
      conferences: [
        {
          title: 'An Efficient Segmentation Algorithm for Breast Cancer Detection in Mammograms',
          authors: 'Kanchan Lata Kashyap, M.K. Bajpai, Pritee Khanna',
          conference: 'International Symposium on Process Tomography',
          year: '2020',
          location: 'Dresden, Germany',
          date: 'September 1, 2015 - September 3, 2015',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.3390/s20143903'
        },
        
        {
          title: 'A Comparative Assessment of Data Mining Algorithms to Predict Fraudulent Firms',
          authors: 'Harshit Monish, Avinash Chandra Pandey',
          conference: '10th International Conference on Cloud Computing, Data Science & Engineering',
          year: '2020',
          location: 'Noida, India',
          date: '29-Jan-21 - 31-Jan-21',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/Confluence47617.2020.9057968'
        },
        
        {
          title: 'A New Technique to Estimate Fractal Dimension of Color Images',
          authors: 'Chinmaya Panigrahy, Ayan Seal, Nihar K. Mahato',
          conference: 'International Conference on Frontiers in Computing and Systems',
          year: '2020',
          location: 'JGEC, Jalpaiguri',
          date: '13-Jan-20 - 15-Jan-20',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/978-981-15-7834-2_24'
        },
        
        {
          title: 'Deep Learning Models for Anomaly Detection in Wireless Capsule Endoscopy Video Frames: Transfer Learning Approach',
          authors: 'Samir Jain, Ayan Seal, Aparajita Ojha',
          conference: 'International Conference on Smart Machine Intelligence And Real-Time Computing',
          year: '2020',
          location: 'Govind Ballabh Pant Institute of Engineering & Technology, India',
          date: '26-Jun-20 - 27-Jun-20',
          publisher: 'CRC Press'
        },
        
        {
          title: 'Deception Detection based on Multi-modal Data',
          authors: 'Karnati Mohan, Ayan Seal',
          conference: 'International Conference on Machine Intelligence & Data Science Applications (MIDAS 2020)',
          year: '2020',
          location: 'UPES Dehradun, India',
          date: '04-Sep-20 - 05-Sep-20',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/978-981-33-4087-9_38'
        },
        
        {
          title: 'A Comparative Study of Different Feature Extraction Techniques for Identifying COVID-19 Patients Using Chest X-Rays Images',
          authors: 'Shrasti Vyas, Ayan Seal',
          conference: '2020 International Conference on Decision Aid Sciences and Application',
          year: '2020',
          location: 'University of Bahrain, Bahrain',
          date: '08-Nov-20 - 09-Nov-20',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/DASA51403.2020.9317299'
        },
        
        {
          title: 'An Efficient Graph-Based Trust-Aware Recommendation System in MIND 2020',
          authors: 'Sraban Kumar Mohanty et al.',
          conference: 'MIND 2020',
          year: '2020',
          location: 'NIT Silchar, India',
          date: '30-Jul-20 - 31-Jul-20',
          publisher: '-',
          doi: 'https://doi.org/10.1007/978-981-15-6315-7_3'
        },
        
        {
          title: 'Efficient Sink Mobility Based Routing Protocol for Heterogeneous Wireless Sensor Network with Multiple Mobile Sinks',
          authors: 'Preeti and Vinod Kumar Jain',
          conference: 'INDICON 2020 (17th IEEE India Council Conference)',
          year: '2020',
          location: 'Delhi, India',
          date: '11-Dec-20 - 13-Dec-20',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/INDICON49873.2020.9342440'
        },
        
        {
          title: 'Image Reconstruction Using Deep Convolutional Neural Network',
          authors: 'M Sreerisha, Gargi Yadav, Saroj Chandra, Manish Bajpai',
          conference: 'International Conference on Artificial Intelligence and Signal Processing (AISP)',
          year: '2020',
          location: 'India',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/AISP48273.2020.9073016'
        },
        
        {
          title: 'A Lightweight Multi-Label Image Classification Model Based on Inception Module',
          authors: 'Jain Shreya, Thakur P.S., Bharti K.K., Ojha A., Khanna Pritee',
          conference: '5th International Conference on Computer Vision & Image Processing (CVIP 2020)',
          year: '2020',
          location: 'Prayagraj, India',
          date: '04-Dec-20 - 06-Dec-20',
          publisher: 'The International Association for Pattern Recognition (IAPR)',
          doi: 'https://doi.org/10.1007/978-981-16-1103-2_20'
        },
        {
          title: 'Cancelable Biometric Template Generation using Convolutional Autoencoder',
          authors: 'Siddhad Gourav, Khanna Pritee',
          conference: '5th International Conference on Computer Vision & Image Processing (CVIP 2020)',
          year: '2020',
          location: 'Prayagraj, India',
          date: '04-Dec-20 - 06-Dec-20',
          publisher: 'The International Association for Pattern Recognition (IAPR)',
          doi: 'https://doi.org/10.1007/978-981-16-1086-8_27'
        },
        
        {
          title: 'Detection of Blind Signature Using Recursive Sum',
          authors: 'Avinash Pandey, Dhruv Mahajan, Shivank Gupta',
          conference: '6th International Conference on Signal Processing and Communication (ICSC)',
          year: '2020',
          location: 'Noida, India',
          date: '05-Mar-20 - 07-Mar-20',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/ICSC48311.2020.9182735'
        },
        
        {
          title: 'Addressing Copycat Attacks in IPv6-Based Low Power and Lossy Networks',
          authors: 'Abhishek Verma, Virender Ranga',
          conference: '8th Science and Information Conference (Computing Conference 2020)',
          year: '2020',
          location: '-',
          date: '-',
          publisher: 'Springer, Cham',
          doi: 'https://doi.org/10.1007/978-3-030-52246-9_31'
        },
        
        {
          title: 'Hybrid Approach to Enhance Data Security on Cloud',
          authors: 'Pratishtha Saxena, Samarjeet Yadav, Neelam Dayal',
          conference: 'Inventive Communication and Computational Technologies',
          year: '2020',
          location: '-',
          date: '-',
          publisher: 'Springer, Singapore',
          doi: 'https://doi.org/10.1007/978-981-15-0146-3_69'
        },
        
        {
          title: 'Flow Based Botnet Traffic Detection Using Machine Learning',
          authors: 'Parul Gahelot, Neelam Dayal',
          conference: 'Proceedings of ICETIT 2019',
          year: '2020',
          location: '-',
          date: '-',
          publisher: 'Springer, Cham',
          doi: 'https://doi.org/10.1007/978-3-030-30577-2_36'
        },
        
        {
          title: 'A New Technique to Estimate Fractal Dimension of Color Images',
          authors: 'Chinmaya Panigrahy, Ayan Seal, Nihar K. Mahato',
          conference: 'International Conference on Frontiers in Computing and Systems',
          year: '2020',
          location: 'JGEC, Jalpaiguri',
          date: '13-Jan-20 - 15-Jan-20',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/978-981-15-7834-2_24'
        },
        
        {
          title: 'Deep Learning Models for Anomaly Detection in Wireless Capsule Endoscopy Video Frames: Transfer Learning Approach',
          authors: 'Samir Jain, Ayan Seal, Aparajita Ojha',
          conference: 'International Conference on Smart Machine Intelligence And Real-Time Computing',
          year: '2020',
          location: 'Govind Ballabh Pant Institute of Engineering & Technology, India',
          date: '26-Jun-20 - 27-Jun-20',
          publisher: 'CRC Press'
        },
        
        {
          title: 'Deception Detection based on Multi-modal Data',
          authors: 'Karnati Mohan, Ayan Seal',
          conference: 'International Conference on Machine Intelligence & Data Science Applications (MIDAS 2020)',
          year: '2020',
          location: 'UPES Dehradun, India',
          date: '04-Sep-20 - 05-Sep-20',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/978-981-33-4087-9_38'
        },
        
        {
          title: 'A Comparative Study of Different Feature Extraction Techniques for Identifying COVID-19 Patients Using Chest X-Rays Images',
          authors: 'Shrasti Vyas, Ayan Seal',
          conference: '2020 International Conference on Decision Aid Sciences and Application',
          year: '2020',
          location: 'University of Bahrain, Bahrain',
          date: '08-Nov-20 - 09-Nov-20',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/DASA51403.2020.9317299'
        },
        
        {
          title: 'Image Reconstruction Using Deep Convolutional Neural Network',
          authors: 'M Sreerisha, Gargi Yadav, Saroj Chandra, Manish Bajpai',
          conference: 'International Conference on Artificial Intelligence and Signal Processing (AISP)',
          year: '2020',
          location: 'India',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/AISP48273.2020.9073016'
        },
        
        
      ],
    },
    2019: {
      journals: [
        {
          title: "Depth Matrix and Adaptive Bayes Classifier based Dynamic Hand Gesture Recognition",
          authors: "Kane Lalit, Khanna Pritee",
          journal: "Pattern Recognition Letters",
          volume: "2019",
          issue: "120",
          pages: "24-30",
          publisher: "Elsevier",
          doi: "http://dx.doi.org/10.1016/j.patrec.2019.01.003"
        },
        {
          title: "Glioma Detection on Brain MRIs using Texture and Morphological Features with Ensemble Learning",
          authors: "Gupta Nidhi, Bhatele Puspraj, Khanna Pritee",
          journal: "Biomedical Signal Processing and Control",
          volume: "2019",
          issue: "47",
          pages: "115-125",
          publisher: "Elsevier",
          doi: "http://dx.doi.org/10.1016/j.bspc.2018.06.003"
        },
        {
          title: "HILS: Hybrid Indoor Localization System using Wi-Fi RSS and Inertial Sensor’s Measurements of Smart-phone",
          authors: "Sushil Tiwari, Vinod Kumar Jain",
          journal: "IET Communications",
          volume: "2019",
          doi: "http://dx.doi.org/10.1049/iet-com.2018.5845"
        },
        {
          title: "Automated Glaucoma Detection using GIST and Pyramid Histogram of Oriented Gradients (PHOG) descriptors",
          authors: "Neha Gour, Pritee Khanna",
          journal: "Pattern Recognition Letters",
          volume: "2019",
          pages: "3-11",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.patrec.2019.04.004"
        },
        {
          title: "Delay aware energy efficient reliable routing for data transmission in heterogeneous mobile sink wireless sensor network",
          authors: "Sonam Maurya, Vinod Kumar Jain, Debanjan Roy Chowdhury",
          journal: "Journal of Network and Computer Applications",
          volume: "2019",
          issue: "144",
          pages: "118-137",
          publisher: "Elsevier",
          doi: "http://dx.doi.org/10.1016/j.jnca.2019.06.012"
        },
        {
          title: "VRDD: Vehicular Relevance based Data Dissemination in Vehicular Ad-hoc Network",
          authors: "Debanjan Roy Chowdhury, Vinod Kumar Jain",
          journal: "IET Intelligent Transport Systems",
          volume: "2019",
          doi: "http://dx.doi.org/10.1049/iet-its.2019.0294"
        },
        {
          title: "Evaluation of Network Intrusion Detection Systems for RPL Based 6LoWPAN Networks in IoT",
          authors: "Abhishek Verma, Virender Ranga",
          journal: "Wireless Personal Communications",
          volume: "2019",
          issue: "108",
          pages: "1571-1594",
          publisher: "Springer",
          doi: "https://doi.org/10.1007/s11277-019-06485-w"
        },
        {
          title: "Omnidirectional Radio Propagation Antenna Using Organized Grouping of Monopole Antennas",
          authors: "Munesh Singh, Sourav Kumar Bhoi, Pabitra Mohan Khilar",
          journal: "National Academy Science Letters",
          volume: "2019",
          issue: "42",
          pages: "109-113",
          publisher: "Springer India",
          doi: "https://doi.org/10.1007/s40009-018-0690-6"
        },
        {
          title: "A Lightweight Robust Logic Locking Technique to Thwart Sensitization and Cone-Based Attacks",
          authors: "Vijaypal Singh Rathor, GK Sharma",
          journal: "IEEE Transactions on Emerging Topics in Computing",
          volume: "2019",
          issue: "9",
          pages: "811-822",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/TETC.2019.2935250"
        },
        {
          title: "Spam Detection Using Ensemble Learning in Harmony search and nature inspired optimization algorithms",
          authors: "Vashu Gupta, Aman Mehta, Akshay Goel, Utkarsh Dixit, Avinash Chandra Pandey",
          journal: "Springer",
          volume: "2019",
          pages: "661-668",
          publisher: "Springer, Singapore",
          doi: "https://doi.org/10.1007/978-981-13-0761-4_63"
        },
        {
          title: "Machine Learning based Intrusion Detection Systems for IoT Applications",
          authors: "Abhishek Verma, Virender Ranga",
          journal: "Wireless Personal Communications",
          volume: "2019",
          issue: "111",
          pages: "2287-2310",
          publisher: "Springer",
          doi: "https://doi.org/10.1007/s11277-019-06986-8"
        },
        {
          title: "Mitigation of DIS flooding attacks in RPL-based 6LoWPAN networks",
          authors: "Abhishek Verma, Virender Ranga",
          journal: "Transactions on Emerging Telecommunications Technologies",
          volume: "2019",
          issue: "31",
          doi: "https://doi.org/10.1002/ett.3802"
        },
        {
          title: "Block Truncation Coding based effective watermarking scheme for image authentication with recovery capability",
          authors: "Sanjay K. Singh, Durgesh Singh",
          journal: "Multimedia Tools and Applications",
          volume: "2019",
          doi: "https://doi.org/10.1007/s11042-017-5454-7"
        },
        {
          title: "Use case specifications: How complete are they?",
          authors: "Saurabh Tiwari, Atul Gupta",
          journal: "Journal of Software: Evolution and Process",
          volume: "2019",
          doi: "https://doi.org/10.1002/smr.2218"
        },
        {
          title: "Dealing with Noise Problem in Machine Learning Data-sets: A Systematic Review",
          authors: "Shivani Gupta, Atul Gupta",
          journal: "Procedia Computer Science",
          volume: "2019",
          issue: "161",
          pages: "466-474",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.procs.2019.11.146"
        },
        {
          title: "Generation of Pseudo Code from the Python Source Code using Rule-Based Machine Translation",
          authors: "Sawan Rai, Atul Gupta",
          journal: "arXiv preprint",
          volume: "2019",
          doi: "https://doi.org/10.48550/arXiv.1906.06117"
        },
        {
          title: "Depth Matrix and Adaptive Bayes Classifier based Dynamic Hand Gesture Recognition",
          authors: "Kane Lalit, Khanna Pritee",
          journal: "Pattern Recognition Letters",
          volume: "2019",
          issue: "120",
          pages: "24-30",
          publisher: "Elsevier",
          doi: "http://dx.doi.org/10.1016/j.patrec.2019.01.003"
        },
        {
          title: "Glioma Detection on Brain MRIs using Texture and Morphological Features with Ensemble Learning",
          authors: "Gupta Nidhi, Bhatele Puspraj, Khanna Pritee",
          journal: "Biomedical Signal Processing and Control",
          volume: "2019",
          issue: "47",
          pages: "115-125",
          publisher: "Elsevier",
          doi: "http://dx.doi.org/10.1016/j.bspc.2018.06.003"
        },
        {
          title: "HILS: Hybrid Indoor Localization System using Wi-Fi RSS and Inertial Sensor’s Measurements of Smart-phone",
          authors: "Sushil Tiwari, Vinod Kumar Jain",
          journal: "IET Communications",
          volume: "2019",
          doi: "http://dx.doi.org/10.1049/iet-com.2018.5845"
        },
        {
          title: "Delay aware energy efficient reliable routing for data transmission in heterogeneous mobile sink wireless sensor network",
          authors: "Sonam Maurya, Vinod Kumar Jain, Debanjan Roy Chowdhury",
          journal: "Journal of Network and Computer Applications",
          volume: "2019",
          issue: "144",
          pages: "118-137",
          publisher: "Elsevier",
          doi: "http://dx.doi.org/10.1016/j.jnca.2019.06.012"
        },
        {
          title: "VRDD: Vehicular Relevance based Data Dissemination in Vehicular Ad-hoc Network",
          authors: "Debanjan Roy Chowdhury, Vinod Kumar Jain",
          journal: "IET Intelligent Transport Systems",
          volume: "2019",
          doi: "http://dx.doi.org/10.1049/iet-its.2019.0294"
        },
        {
          title: "Nearest Neighbor-Based Clustering Algorithm for Large Data Sets",
          authors: "Yadav Pankaj Kumar, Sriniwas Pandey, Mamata Samal, Mohanty Sraban Kumar",
          journal: "Advances in Computer Communication and Computational Sciences",
          volume: "2019",
          pages: "73-84",
          publisher: "Springer, Singapore",
          doi: "https://doi.org/10.1007/978-981-13-0344-9_6"
        },
        {
          title: "DK-means: a deterministic K-means clustering algorithm for gene expression analysis",
          authors: "R Jothi, Sraban Kumar Mohanty, Aparajita Ojha",
          journal: "Pattern Analysis and Applications",
          volume: "2019",
          issue: "22",
          pages: "649-667",
          publisher: "Springer London",
          doi: "https://doi.org/10.1007/s10044-017-0673-0"
        },
        {
          title: "A fast hybrid clustering technique based on local nearest neighbor using minimum spanning tree",
          authors: "Gaurav Mishra, Sraban Kumar Mohanty",
          journal: "Expert Systems with Applications",
          volume: "2019",
          issue: "132",
          pages: "28-43",
          publisher: "Pergamon",
          doi: "https://doi.org/10.1016/j.eswa.2019.04.048"
        },
        {
          title: "Performance of Maintainability Index prediction models: a feature selection based study",
          authors: "B Ramachandra Reddy, Aparajita Ojha",
          journal: "Evolving Systems",
          volume: "2019",
          issue: "10",
          pages: "179-204",
          publisher: "Springer Berlin Heidelberg",
          doi: "https://doi.org/10.1007/s12530-017-9201-0"
        },
        {
          title: "Experimental Evaluation of Certain Pursuit and Evasion Schemes for Wheeled Mobile Robots",
          authors: "Amit Kumar, Aparajita Ojha",
          journal: "International Journal of Automation and Computing",
          volume: "2019",
          issue: "16",
          pages: "491-510",
          publisher: "Institute of Automation, Chinese Academy of Sciences",
          doi: "https://doi.org/10.1007/s11633-018-1151-x"
        },
        {
          title: "How effective are maintainability metrics in estimating maintenance efforts? An empirical study",
          authors: "B Ramachandra Reddy, Aparajita Ojha",
          journal: "International Journal of System Assurance Engineering and Management",
          volume: "2019",
          issue: "10",
          pages: "984-1001",
          publisher: "Springer India",
          doi: "https://doi.org/10.1007/s13198-019-00828-3"
        },
        

        
      ],
      conferences: [
        {
          title: 'Mesh-free based variational level set evolution for breast region segmentation and abnormality detection using mammograms',
          authors: 'Kashyap Kanchan Lata, Bajpai M. K., Khanna Pritee',
          conference: '13th Inter-Research-Institute Student Seminar in Computer Science (IRISS 2019)',
          year: '2019',
          location: 'Kochi, India',
          date: 'February 6, 2019 - February 7, 2018',
          publisher: 'Publisher'
        },
        
        {
          title: 'Image Enhancement using Fractional Partial Differential Equations',
          authors: 'Dharmendra Sharma, Manish Kumar Bajpai, Saroj Kumar Chandra',
          conference: 'ICACCP - 2019 | IEEE International Conference in India',
          year: '2019',
          location: 'Sikkim Manipal Institute of Technology Dept. of Computer Science & Engineering Majhitar, Rangpo, East Sikkim-737136, India',
          date: 'February 25, 2019 - February 28, 2019',
          publisher: 'IEEE',
          doi: 'https://doi.org/DOI'
        },
        
        {
          title: 'Addressing Flooding Attacks in IPv6-based Low Power and Lossy Networks',
          authors: 'Abhishek Verma, Virender Ranga',
          conference: '39th IEEE Region 10 Conference (TENCON 2019)',
          year: '2019',
          location: 'Kochi, India',
          date: '17-Oct-19 - 20-Oct-19',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/TENCON.2019.8929409'
        },
        
        {
          title: 'ELNIDS: Ensemble Learning based Network Intrusion Detection System for RPL based Internet of Things',
          authors: 'Abhishek Verma, Virender Ranga',
          conference: '2019 4th International Conference on Internet of Things: Smart Innovation and Usages (IoT-SIU)',
          year: '2019',
          location: 'Ghaziabad, India',
          date: '18-Apr-19 - 19-Apr-19',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/IoT-SIU.2019.8777504'
        },
        
        {
          title: 'Simulating Attacks for RPL and Generating Multi-class Dataset for Supervised Machine Learning',
          authors: 'Mridula Sharma, Haytham Elmiligi, Fayez Gebali, Abhishek Verma',
          conference: '2019 IEEE 10th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON)',
          year: '2019',
          location: 'Vancouver, BC, Canada',
          date: '17-Oct-19 - 19-Oct-19',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/IEMCON.2019.8936142'
        },
        
        {
          title: 'SmartAIR: Smart energy efficient framework for large network of air quality monitoring systems',
          authors: 'Vikram Rao, Munesh Singh, Prasant Mohapatra',
          conference: '2019 IEEE 1st International Conference on Energy, Systems and Information Processing (ICESIP)',
          year: '2019',
          location: 'Chennai, India',
          date: '04-Jul-19 - 06-Jul-19',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/ICESIP46348.2019.8938274'
        },
        
        {
          title: 'Spiral Salp Swarm Optimization Algorithm',
          authors: 'Avinash Chandra Pandey, Ashish Kumar Tripathi, Raju Pal, Himanshu Mittal, Mukesh Saraswat',
          conference: '2019 4th International Conference on Information Systems and Computer Networks (ISCON)',
          year: '2019',
          location: 'Mathura, India',
          date: '21-Nov-19 - 22-Nov-19',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/ISCON47742.2019.9036293'
        },
        
        {
          title: 'Levy inspired Enhanced Grey Wolf Optimizer',
          authors: 'Suhani Kohli, Manika Kaushik, Kashish Chugh, Avinash Chandra Pandey',
          conference: '2019 Fifth International Conference on Image Information Processing (ICIIP)',
          year: '2019',
          location: 'Shimla, India',
          date: '15-Nov-19 - 17-Nov-19',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/ICIIP47207.2019.8985722'
        },
        {
          title: 'Cyber Forensics and Comparative Analysis of Digital Forensic Investigation Frameworks',
          authors: 'Kumar Shanu Singh, Annie Irfan, Neelam Dayal',
          conference: '2019 4th International Conference on Information Systems and Computer Networks (ISCON)',
          year: '2019',
          location: '-',
          date: '-',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/ISCON47742.2019.9036214'
        },
        
        {
          title: 'A Composite Technique to Fortify Security for DaaS Services in Cloud Environment',
          authors: 'Samarjeet Yadav, Pratishtha Saxena, Neelam Dayal, Shiv Prakash',
          conference: 'International Conference on Internet of Things and Connected Technologies',
          year: '2019',
          location: '-',
          date: '-',
          publisher: 'Springer, Cham',
          doi: 'https://doi.org/10.1007/978-3-030-39875-0_17'
        },
        
        {
          title: 'Forensics Analysis of WhatsApp in Android Mobile Phone',
          authors: 'Samarjeet Yadav, Satya Prakash, Neelam Dayal, Vrijendra Singh',
          conference: 'Proceedings of the International Conference on Advances in Electronics, Electrical & Computational Intelligence (ICAEEC)',
          year: '2019',
          location: '-',
          date: '-',
          publisher: 'SSRN',
          doi: 'https://dx.doi.org/10.2139/ssrn.3576379'
        },
        
        {
          title: 'Mesh-free based variational level set evolution for breast region segmentation and abnormality detection using mammograms',
          authors: 'Kashyap Kanchan Lata, Bajpai M. K., Khanna Pritee',
          conference: '13th Inter-Research-Institute Student Seminar in Computer Science (IRISS 2019)',
          year: '2019',
          location: 'Kochi, India',
          date: 'February 6, 2019 - February 7, 2018',
          publisher: 'Publisher'
        },
        
        {
          title: 'An Improved BPSO Algorithm for Feature Selection',
          authors: 'Lalit Kumar, Kusum Kumari Bharti',
          conference: 'Recent Trends in Communication, Computing, and Electronics',
          year: '2019',
          location: '-',
          date: '-',
          publisher: 'Springer, Singapore',
          doi: 'https://doi.org/10.1007/978-981-13-2685-1_48'
        },
        
        {
          title: 'A Study on Characterizing the Ecosystem of Monetizing Video Spams on YouTube Platform',
          authors: 'Ashutosh Tripathi, Kusum Kumari Bharti, Mohona Ghosh',
          conference: 'iiWAS2019: Proceedings of the 21st International Conference on Information Integration and Web-based Applications & Services',
          year: '2019',
          location: '-',
          date: '-',
          publisher: '-',
          doi: 'https://doi.org/10.1145/3366030.3366078'
        },
        
        
      ],
    },
    2018: {
      journals: [
        {
          title: "A statistical region selection and randomized volumetric features selection framework for early detection of Alzheimer disease",
          authors: "Mishra Shiwangi, Beheshti Iman, Khanna Pritee",
          journal: "International Journal of Imaging Systems and Technology",
          volume: "28",
          issue: "4",
          pages: "1-13",
          publisher: "Wiley",
          doi: "https://doi.org/10.1002/ima.22290"
        },
        {
          title: "Random Distance Method for Generating Unimodal and Multimodal Cancelable Biometric Features",
          authors: "Kaur Harkeerat, Khanna Pritee",
          journal: "IEEE Transactions on Information Forensics & Security",
          volume: "14",
          issue: "3",
          pages: "709-719",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/TIFS.2018.2855669"
        },
        {
          title: "An Efficient Algorithm for Mass Detection and Shape Analysis of Different Masses Present in Digital Mammograms",
          authors: "Kashyap Kanchan Lata, Bajpai M. K., Khanna Pritee",
          journal: "Multimedia Tools and Applications",
          volume: "77",
          issue: "8",
          pages: "9249-9269",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1007/s11042-017-4751-5"
        },
        {
          title: "Random Slope Method for Generation of Cancelable Biometric Features",
          authors: "Kaur Harkeerat, Khanna Pritee",
          journal: "Pattern Recognition Letters",
          volume: "1",
          issue: "1",
          pages: "1-12",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.patrec.2018.02.016"
        },
        {
          title: "Mesh Free Approach for Enhancement of Mammograms",
          authors: "Kashyap Kanchan Lata, Bajpai M. K., Khanna Pritee, George Giakos",
          journal: "IET Image Processing",
          volume: "12",
          issue: "3",
          pages: "299-306",
          publisher: "IET",
          doi: "https://doi.org/10.1049/iet-ipr.2017.0326"
        },
        {
          title: "A FPGA based Implementation of Sobel Edge Detection",
          authors: "Nausheen Nazma, Seal Ayan, Khanna Pritee, Halder Santanu",
          journal: "Microprocessors and Microsystems",
          volume: "56",
          issue: "1",
          pages: "84-91",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.micpro.2017.10.011"
        },
        {
          title: "Mesh Free based Variational Level Set Evolution for Breast Region Segmentation and Abnormality Detection using Mammograms",
          authors: "Kashyap Kanchan Lata, Bajpai M. K., Khanna Pritee, George Giakos",
          journal: "International Journal for Numerical Methods in Biomedical Engineering",
          volume: "34",
          issue: "1",
          pages: "2907-2907",
          publisher: "Wiley",
          doi: "https://doi.org/10.1002/cnm.2907"
        },
        {
          title: "Knowledge System for Early Phase Aesthetic Concept Generation in Industrial Design",
          authors: "Soni S., Khanna Pritee, Tandon P.",
          journal: "International Journal of Intelligent Systems Design and Computing",
          volume: "2",
          issue: "1",
          pages: "45-75",
          publisher: "Unknown"
        },
        {
          title: "Correlation Feature Selection based improved-Binary Particle Swarm Optimization for Gene Selection and Cancer Classification",
          authors: "Indu Jain, Vinod Kumar Jain, Renu Jain",
          journal: "Applied Soft Computing",
          volume: "62",
          pages: "203-215",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.asoc.2017.09.038"
        },
        {
          title: "Fast approximate minimum spanning tree based clustering algorithm",
          authors: "R Jothi, Sraban Kumar Mohanty, Aparajita Ojha",
          journal: "Neurocomputing",
          volume: "272",
          pages: "542-557",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.neucom.2017.07.038"
        },
        {
          title: "Secure data hiding scheme using shape generation algorithm: a key based approach",
          authors: "Gyan Singh Yadav, Aparajita Ojha",
          journal: "Multimedia Tools and Applications",
          volume: "77",
          issue: "13",
          pages: "16319-16345",
          publisher: "Springer US",
          doi: "https://doi.org/10.1007/s11042-017-5200-1"
        },
        {
          title: "Hamiltonian path based image steganography scheme with improved imperceptibility and undetectability",
          authors: "Gyan Singh Yadav, Aparajita Ojha",
          journal: "Applied Soft Computing",
          volume: "73",
          pages: "497-507",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.asoc.2018.08.034"
        },
        
        
        
      ],
      conferences: [
        {
          title: 'Optimum Grid Size Estimation using Fuzzy-AHP for Radio Fingerprinting based Indoor Localization',
          authors: 'Sushil Tiwari, Vinod Kumar Jain',
          conference: '2018 41st International Conference on Telecommunications and Signal Processing (TSP)',
          year: '2018',
          location: 'Athens, Greece',
          date: 'July 4, 2018 - July 6, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/1234 (Accepted)'
        },
        
        {
          title: 'Smartphone based Improved Floor Determination Technique for Multi-Floor Buildings',
          authors: 'Sushil Tiwari, Vinod Kumar Jain',
          conference: 'World Congress on Engineering 2018 (WCE 2018)',
          year: '2018',
          location: 'Imperial College London, U.K.',
          date: 'July 4, 2018 - July 6, 2018',
          publisher: 'IAENG',
          doi: 'http://dx.doi.org/10.1007/978-981-32-9531-5_20'
        },
        
        {
          title: 'TAFDRV: Travel Angle based Fast Data Dissemination to Relevant Vehicles in VANET',
          authors: 'Debanjan Roy Chowdhury, Vinod Kumar Jain, Sonam Maurya',
          conference: '2018 41st International Conference on Telecommunications and Signal Processing (TSP)',
          year: '2018',
          location: 'Athens, Greece',
          date: 'July 4, 2018 - July 6, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1109/TSP.2018.8441394'
        },
        
        {
          title: 'Glioma Identification from Brain MRI using Superpixels and Fuzzy c-means Clustering',
          authors: 'Gupta Nidhi, Mishra Shiwangi, Khanna Pritee',
          conference: 'IEEE Int. Conf. on Information and Communication Technology',
          year: '2018',
          location: 'Jabalpur, India',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: '-'
        },
        
        {
          title: 'A Secure Architecture for Remote Multimodal Biometric Authentication using Visual Cryptography',
          authors: 'Kaur Harkeerat, Khanna Pritee',
          conference: 'Third International Conference on Computer Vision & Image Processing',
          year: '2018',
          location: 'Jabalpur, India',
          date: 'September 29, 2018 - October 01, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1007/978-981-32-9291-8_2'
        },
        
        {
          title: 'Classification of Food Images through Interactive Image Segmentation',
          authors: 'Sanasam Inunganbi, Seal Ayan, Khanna Pritee',
          conference: 'Asian Conference on Intelligent Information and Database Systems',
          year: '2018',
          location: 'Vietnam',
          date: 'March 19, 2018 - March 21, 2018',
          publisher: 'Springer'
        },
        
        {
          title: 'Early Detection of Alzheimer’s disease using white matter and grey matter alterations in wavelet domain',
          authors: 'Mishra Shiwangi, Khanna Pritee',
          conference: 'Tools and Methods of Competitive Engineering',
          year: '2018',
          location: 'Las Palmas de Gran Canaria, Gran Canaria, Spain',
          date: 'May 7, 2018 - May 11, 2018',
          publisher: '-'
        },
        
        {
          title: 'Optic Disc Segmentation using Vessel In-painting and Random Walk Algorithm',
          authors: 'Neha Gour, Pritee Khanna',
          conference: '2018 Conference on Information and Communication Technology (CICT 2018)',
          year: '2018',
          location: 'PDPM Indian Institute of Information Technology, Design and Manufacturing Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE Xplore',
          doi: 'https://doi.org/10.1109/INFOCOMTECH.2018.8722374'
        },
        
        {
          title: 'Enhanced EECP: Enhanced Energy Efficient Coverage Preserving Protocol for Heterogeneous Wireless Sensor Networks',
          authors: 'S. Maurya, V. K. Jain',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1109/INFOCOMTECH.2018.8722411'
        },
        
        {
          title: 'A Novel Algorithm for DoS and DDoS attack detection in Internet Of Things',
          authors: 'S. Kajwadkar, V. K. Jain',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/INFOCOMTECH.2018.8722397'
        },
        {
          title: 'EMAEER: Enhanced Mobility Aware Energy Efficient Routing Protocol for Internet of Things',
          authors: 'P. Sharma, V. K. Jain, A. Kumar Uprawal',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1109/INFOCOMTECH.2018.8722396'
        },
        
        {
          title: 'ECTX-CoAP: An Enhanced Context-Aware CoAP Extension for Smart Objects Discovery in Internet of Things',
          authors: 'S. Kajwadkar, V. K. Jain',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1109/INFOCOMTECH.2018.8722425'
        },
        
        {
          title: 'An improved Binary Particle Swarm Optimization (iBPSO) for Gene Selection and Cancer Classification using DNA Microarrays',
          authors: 'I. Jain, V. K. Jain, R. Jain',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/INFOCOMTECH.2018.8722351'
        },
        
        {
          title: 'Statistical analysis of CIDDS-001 dataset for Network Intrusion Detection Systems using Distance-based Machine Learning',
          authors: 'Abhishek Verma, Virender Ranga',
          conference: 'Procedia Computer Science',
          year: '2018',
          location: '-',
          date: '-',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.procs.2017.12.091'
        },
        
        {
          title: 'FireDS-IoT: A Fire Detection System for Smart Home Based on IoT Data Analytics',
          authors: 'Sourav Kumar Bhoi, Sanjaya Kumar Panda, Biranchi Narayan Padhi, Manash Kumar Swain, Balabhadrah Hembram, Debasish Mishra, Chittaranjan Mallick, Munesh Singh, Pabitra Mohan Khilar',
          conference: '2018 International Conference on Information Technology (ICIT)',
          year: '2018',
          location: 'Bhubaneswar, India',
          date: 'December 19, 2018 - December 21, 2018',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/ICIT.2018.00042'
        },
        
        {
          title: 'Optimal Cache Placement by Identifying Possible Congestion Points in Wireless Sensor Networks',
          authors: 'Nitin Gupta, Neelam Dayal',
          conference: 'International Conference on Wireless Intelligent and Distributed Environment for Communication',
          year: '2018',
          location: '-',
          date: '-',
          publisher: 'Springer, Cham',
          doi: 'https://doi.org/10.1007/978-3-319-75626-4_12'
        },
        
        {
          title: 'Leveraging SDN for Early Detection and Mitigation of DDoS Attacks',
          authors: 'Neelam Dayal, Shashank Srivastava',
          conference: 'International Conference on Communication Systems and Networks',
          year: '2018',
          location: '-',
          date: '-',
          publisher: 'Springer, Cham',
          doi: 'https://doi.org/10.1007/978-3-030-10659-1_3'
        },
        
        {
          title: 'Software Defined Network Based Fault Detection in Industrial Wireless Sensor Networks',
          authors: 'Sourav Kumar Bhoi, Mohammad S Obaidat, Deepak Puthal, Munesh Singh, Kuei-Fang Hsiao',
          conference: '2018 IEEE Global Communications Conference (GLOBECOM)',
          year: '2018',
          location: '-',
          date: '-',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/GLOCOM.2018.8647321'
        },
        
        {
          title: 'Development of a plugin based extensible feature extraction framework',
          authors: 'Vikas Malviya, Sawan Rai, Atul Gupta',
          conference: 'Proceedings of the 33rd Annual ACM Symposium on Applied Computing',
          year: '2018',
          location: '-',
          date: '-',
          publisher: 'ACM',
          doi: 'https://doi.org/10.1145/3167132.3167328'
        },
        
        {
          title: 'Glioma Identification from Brain MRI using Superpixels and Fuzzy c-means Clustering',
          authors: 'Gupta Nidhi, Mishra Shiwangi, Khanna Pritee',
          conference: 'IEEE Int. Conf. on Information and Communication Technology',
          year: '2018',
          location: 'Jabalpur, India',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: '-'
        },
        {
          title: 'A Secure Architecture for Remote Multimodal Biometric Authentication using Visual Cryptography',
          authors: 'Kaur Harkeerat, Khanna Pritee',
          conference: 'Third International Conference on Computer Vision & Image Processing',
          year: '2018',
          location: 'Jabalpur, India',
          date: 'September 29, 2018 - October 01, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1007/978-981-32-9291-8_2'
        },
        
        {
          title: 'Classification of Food Images through Interactive Image Segmentation',
          authors: 'Sanasam Inunganbi, Seal Ayan, Khanna Pritee',
          conference: 'Asian Conference on Intelligent Information and Database Systems',
          year: '2018',
          location: 'Vietnam',
          date: 'March 19, 2018 - March 21, 2018',
          publisher: 'Springer',
          doi: '-'
        },
        
        {
          title: 'Early Detection of Alzheimer’s disease using white matter and grey matter alterations in wavelet domain',
          authors: 'Mishra Shiwangi, Khanna Pritee',
          conference: 'Tools and Methods of Competitive Engineering',
          year: '2018',
          location: 'Las Palmas de Gran Canaria, Gran Canaria, Spain',
          date: 'May 7, 2018 - May 11, 2018',
          publisher: '-',
          doi: '-'
        },
        
        {
          title: 'Optimum Grid Size Estimation using Fuzzy-AHP for Radio Fingerprinting based Indoor Localization',
          authors: 'Sushil Tiwari, Vinod Kumar Jain',
          conference: '2018 41st International Conference on Telecommunications and Signal Processing (TSP)',
          year: '2018',
          location: 'Athens, Greece',
          date: 'July 4, 2018 - July 6, 2018',
          publisher: 'IEEE',
          doi: '1234 (Accepted)'
        },
        
        {
          title: 'Smartphone based Improved Floor Determination Technique for Multi-Floor Buildings',
          authors: 'Sushil Tiwari, Vinod Kumar Jain',
          conference: 'World Congress on Engineering 2018 (WCE 2018)',
          year: '2018',
          location: 'Imperial College London, U.K.',
          date: 'July 4, 2018 - July 6, 2018',
          publisher: 'IAENG',
          doi: 'http://dx.doi.org/10.1007/978-981-32-9531-5_20'
        },
        
        {
          title: 'TAFDRV: Travel Angle based Fast Data Dissemination to Relevant Vehicles in VANET',
          authors: 'Debanjan Roy Chowdhury, Vinod Kumar Jain, Sonam Maurya',
          conference: '41st International Conference on Telecommunications and Signal Processing (TSP)',
          year: '2018',
          location: 'Athens, Greece',
          date: 'July 4, 2018 - July 6, 2018',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/TSP.2018.8441394'
        },
        
        {
          title: 'Enhanced EECP: Enhanced Energy Efficient Coverage Preserving Protocol for Heterogeneous Wireless Sensor Networks',
          authors: 'S. Maurya, V. K. Jain',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1109/INFOCOMTECH.2018.8722411'
        },
        
        {
          title: 'A Novel Algorithm for DoS and DDoS attack detection in Internet Of Things',
          authors: 'S. Kajwadkar, V. K. Jain',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/INFOCOMTECH.2018.8722397'
        },
        
        {
          title: 'EMAEER: Enhanced Mobility Aware Energy Efficient Routing Protocol for Internet of Things',
          authors: 'P. Sharma, V. K. Jain, A. Kumar Uprawal',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1109/INFOCOMTECH.2018.8722396'
        },
        
        {
          title: 'ECTX-CoAP: An Enhanced Context-Aware CoAP Extension for Smart Objects Discovery in Internet of Things',
          authors: 'S. Kajwadkar, V. K. Jain',
          conference: '2018 Conference on Information and Communication Technology (CICT)',
          year: '2018',
          location: 'PDPM IIITDM Jabalpur',
          date: 'October 26, 2018 - October 28, 2018',
          publisher: 'IEEE',
          doi: 'http://dx.doi.org/10.1109/INFOCOMTECH.2018.8722425'
        },
        
        
        
      ],
    },
    2017: {
      journals: [
        {
          title: 'A novel non-invasive method for extraction of geometric and texture features of wood',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey, Prabhat Munshi',
          journal: 'Research in Non-destructive Evaluation',
          volume: '28',
          issue: '3',
          pages: '150-167',
          publisher: 'Taylor & Francis',
          doi: 'https://doi.org/10.1080/09349847.2016.1148214'
        },
        {
          title: 'Predictive and Probabilistic Model for Cancer Detection using Computer Tomography Images',
          authors: 'Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri',
          journal: 'Multimedia Tools and Applications',
          volume: '2017',
          pages: '1-20',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/s11042-017-4405-7'
        },
        {
          title: 'Identification of Gliomas from Brain MRIs using Adaptive Segmentation and Run Length of Centralized Patterns',
          authors: 'Nidhi Gupta, Pushpraj Bhatele, Pritee Khanna',
          journal: 'Journal of Computational Science',
          volume: '2017',
          publisher: 'Elsevier',
          doi: 'https://dx.doi.org/10.1016/j.jocs.2017.02.009'
        },
        {
          title: 'Globally Supported Radial Basis Function based Collocation Method for Evolution of Level Set in Mass Segmentation using Mammograms',
          authors: 'Kashyap Kanchan Lata, Bajpai M. K., Khanna Pritee',
          journal: 'Computers in Biology and Medicine',
          volume: '87',
          pages: '22-37',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.compbiomed.2017.05.015'
        },
        {
          title: 'Vision-based Mid-air Unistroke Character Input using Polar Signatures',
          authors: 'Kane Lalit, Khanna Pritee',
          journal: 'IEEE Transactions on Human-Machine Systems',
          volume: '99',
          pages: '1-12',
          doi: 'https://doi.org/10.1109/THMS.2017.2706695'
        },
        {
          title: 'Illumination and Expression Invariant Face Recognition',
          authors: 'Dhekane Manasi, Seal Ayan, Khanna Pritee',
          journal: 'International Journal of Pattern Recognition and Artificial Intelligence',
          volume: '2017',
          doi: 'https://dx.doi.org/10.1142/S0218001417560183'
        },
        {
          title: 'A Novel Approach for Enhancement of Geometric and Contrast Resolution Properties of Low Contrast Images',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          journal: 'IEEE Journal of Automatica Sinica',
          volume: '2017',
          pages: '1-14',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/JAS.2017.7510670'
        },
        {
          title: 'PET-CT Image Fusion using Random Forest and A` -trous Wavelet Transform',
          authors: 'Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dionisio Rodriguez-Esparragon, Ernestina Menasalvas, Consuelo Gonzalo-Martin',
          journal: 'International Journal for Numerical Methods in Biomedical Engineering',
          volume: '2017',
          publisher: 'Wiley'
        },
        {
          title: 'Reputation-Based Resource Allocation in P2P Systems: A Game Theoretic Perspective',
          authors: 'Antriksh Goswami, Ruchir Gupta, Gopal S. Parashari',
          journal: 'IEEE Communications Letters',
          volume: '21',
          issue: '6',
          pages: '1273-1276',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/LCOMM.2017.2675900'
        },
        {
          title: 'A non-invasive and adaptive CAD system to detect brain tumor from T2-weighted MRIs using customized Otsu’s thresholding with prominent features and supervised learning',
          authors: 'Nidhi Gupta, Pritee Khanna',
          journal: 'Signal Processing: Image Communication',
          volume: '59',
          pages: '18-26',
          publisher: 'Elsevier',
          doi: 'https://dx.doi.org/10.1016/j.image.2017.05.013'
        },
        {
          title: 'An Approximated Box Height for Differential-Box-Counting Method to Estimate Fractal Dimensions of Gray-Scale Images',
          authors: 'Chinmaya Panigrahy, Angel Garcia-Pedrero, Ayan Seal, Dionisio Rodríguez-Esparragón, Nihar Kumar Mahato, Consuelo Gonzalo-Martín',
          journal: 'Entropy',
          volume: '19',
          issue: '10',
          pages: '1-17',
          publisher: 'MDPI',
          doi: 'https://doi.org/10.3390/e19100534'
        },
        {
          title: 'Evolutionary Stability of Reputation Based Incentive Mechanisms in P2P Systems',
          authors: 'A. Goswami, G. S. Parashari, R. Gupta',
          journal: 'IEEE Communications Letters',
          volume: '99',
          issue: '1',
          pages: '1-4',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/LCOMM.2017.2777854'
        },
        {
          title: 'Energy-Efficient Network Protocol for Precision Agriculture: Using threshold sensitive sensors for optimal performance',
          authors: 'S. Maurya, V. K. Jain',
          journal: 'IEEE Consumer Electronics Magazine',
          volume: '6',
          issue: '3',
          pages: '42-51',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/MCE.2017.2684960'
        },
        {
          title: 'New Light Weight Threshold Voltage Defined Camouflaged Gates for Trustworthy Designs',
          authors: 'Vijaypal Singh Rathor, Bharat Garg, GK Sharma',
          journal: 'Journal of Electronic Testing',
          volume: '33',
          issue: '5',
          pages: '657-668',
          publisher: 'Springer US',
          doi: 'https://doi.org/10.1007/s10836-017-5683-8'
        },
        {
          title: 'DWT-SVD and DCT based robust and blind watermarking scheme for copyright protection',
          authors: 'Sanjay K. Singh, Durgesh Singh',
          journal: 'Multimedia Tools and Applications',
          volume: '76',
          issue: '11',
          pages: '13001-1024',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/s11042-016-3706-6'
        },
        {
          title: 'DCT based efficient fragile watermarking scheme for image authentication and restoration',
          authors: 'Durgesh Singh, Sanjay K Singh',
          journal: 'Multimedia Tools and Applications',
          volume: '76',
          issue: '1',
          pages: '953-977',
          publisher: 'Springer US',
          doi: 'https://doi.org/10.1007/s11042-015-3010-x'
        },
        {
          title: 'Geometric Constraint-Based Range-Free Localization Scheme for Wireless Sensor Networks',
          authors: 'Munesh Singh, Sourav Kumar Bhoi, Pabitra Mohan Khilar',
          journal: 'IEEE Sensors Journal',
          volume: '17',
          issue: '16',
          pages: '5350-5366',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/JSEN.2017.2725343'
        },
        {
          title: 'A Range Free Geometric Technique for Localization of Wireless Sensor Network (WSN) Based on Controlled Communication Range',
          authors: 'Munesh Singh, Pabitra Mohan Khilar',
          journal: 'Wireless Personal Communications',
          volume: '94',
          issue: '3',
          pages: '1359-1385',
          publisher: 'Springer US',
          doi: 'https://doi.org/10.1007/s11277-016-3686-x'
        },
        {
          title: 'A set of measures designed to identify overlapped instances in software defect prediction',
          authors: 'Shivani Gupta, Atul Gupta',
          journal: 'Computing',
          volume: '',
          issue: '',
          pages: '1-26',
          publisher: 'Springer Vienna',
          doi: 'https://doi.org/10.1007/s00607-016-0538-1'
        },
        {
          title: 'Investigating comprehension and learnability aspects of use cases for software specification problems',
          authors: 'Saurabh Tiwari, Atul Gupta',
          journal: 'Information and Software Technology',
          volume: '',
          issue: '',
          pages: '',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.infsof.2017.06.003'
        },
        {
          title: 'Automatic generation of analysis class diagrams from use case specifications',
          authors: 'Jitendra Singh Thakur, Atul Gupta',
          journal: 'arXiv preprint',
          volume: '',
          issue: '',
          pages: '',
          publisher: '',
          doi: 'https://doi.org/10.48550/arXiv.1708.01796'
        },
        {
          title: 'Identification of Gliomas from Brain MRIs using Adaptive Segmentation and Run Length of Centralized Patterns',
          authors: 'Nidhi Gupta, Pushpraj Bhatele, Pritee Khanna',
          journal: 'Journal of Computational Science',
          volume: '',
          issue: '',
          pages: '',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.jocs.2017.02.009'
        },
        {
          title: 'Globally Supported Radial Basis Function based Collocation Method for Evolution of Level Set in Mass Segmentation using Mammograms',
          authors: 'Kashyap Kanchan Lata, Bajpai M. K., Khanna Pritee',
          journal: 'Computers in Biology and Medicine',
          volume: '87',
          issue: '',
          pages: '22-37',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.compbiomed.2017.05.015'
        },
        {
          title: 'Vision-based Mid-air Unistroke Character Input using Polar Signatures',
          authors: 'Kane Lalit, Khanna Pritee',
          journal: 'IEEE Transactions on Human-Machine Systems',
          volume: '99',
          issue: '',
          pages: '1-12',
          publisher: '',
          doi: 'https://doi.org/10.1109/THMS.2017.2706695'
        },
        {
          title: 'Illumination and Expression Invariant Face Recognition',
          authors: 'Dhekane Manasi, Seal Ayan, Khanna Pritee',
          journal: 'International Journal of Pattern Recognition and Artificial Intelligence',
          volume: '',
          issue: '',
          pages: '',
          publisher: '',
          doi: 'https://doi.org/10.1142/S0218001417560183'
        },
        {
          title: 'Energy-Efficient Network Protocol for Precision Agriculture: Using threshold sensitive sensors for optimal performance',
          authors: 'S. Maurya, V. K. Jain',
          journal: 'IEEE Consumer Electronics Magazine',
          volume: '6',
          issue: '3',
          pages: '42-51',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/MCE.2017.2684960'
        },
        {
          title: 'PET-CT Image Fusion using Random Forest and A-trous Wavelet Transform',
          authors: 'Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dionisio Rodriguez-Esparragon, Ernestina Menasalvas, Consuelo Gonzalo-Martin',
          journal: 'International Journal for Numerical Methods in Biomedical Engineering',
          volume: '',
          issue: '',
          pages: '',
          publisher: 'Wiley',
          doi: ''
        },
        {
          title: 'An Approximated Box Height for Differential-Box-Counting Method to Estimate Fractal Dimensions of Gray-Scale Images',
          authors: 'Chinmaya Panigrahy, Angel Garcia-Pedrero, Ayan Seal, Dionisio Rodríguez-Esparragón, Nihar Kumar Mahato, Consuelo Gonzalo-Martín',
          journal: 'Entropy',
          volume: '19',
          issue: '10',
          pages: '1-17',
          publisher: 'MDPI',
          doi: 'https://doi.org/10.3390/e19100534'
        },
        {
          title: 'Globally Supported Radial Basis Function based Collocation Method for Evolution of Level Set in Mass Segmentation using Mammograms',
          authors: 'Kashyap Kanchan Lata, Bajpai M. K., Khanna Pritee',
          journal: 'Computers in Biology and Medicine',
          volume: '87',
          issue: '',
          pages: '22-37',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.compbiomed.2017.05.015'
        },
        {
          title: 'A Novel Approach for Enhancement of Geometric and Contrast Resolution Properties of Low Contrast Images',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          journal: 'IEEE Journal of Automatica Sinica',
          volume: '',
          issue: '',
          pages: '1-14',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/JAS.2017.7510670'
        },
        {
          title: 'A Scalable Attribute-Based Access Control Scheme with Flexible Delegation cum Sharing of Access Privileges for Cloud Storage',
          authors: 'Rohit Ahuja, Sraban Kumar Mohanty',
          journal: 'IEEE Transactions on Cloud Computing',
          volume: '8',
          issue: '1',
          pages: '32-44',
          publisher: 'IEEE',
          doi: 'https://doi.org/10.1109/TCC.2017.2751471'
        },
        {
          title: 'A new composite multi-constrained differential-radon warping approach for digital video affine motion stabilization',
          authors: 'Deepika Shukla, Aparajita Ojha, Rajib Kumar Jha',
          journal: 'Computer Vision and Image Understanding',
          volume: '155',
          issue: '',
          pages: '83-105',
          publisher: '',
          doi: 'https://doi.org/10.1016/j.cviu.2016.11.009'
        },
        {
          title: 'Anticipated trajectory based proportional navigation guidance scheme for intercepting high maneuvering targets',
          authors: 'Amit Kumar, Aparajita Ojha, Prabin Kumar Padhy',
          journal: 'International Journal of Control, Automation and Systems',
          volume: '15',
          issue: '3',
          pages: '1351-1361',
          publisher: 'Institute of Control, Robotics and Systems and The Korean Institute of Electrical Engineers',
          doi: 'https://doi.org/10.1007/s12555-015-0166-0'
        }
        
        
        
        
      ],
      conferences: [
        {
          title: "Classification of Brain MRIs forming Superpixels",
          authors: "Gupta Nidhi, Mishra S., and Khanna Pritee",
          journal: "IEEE International Conference on Advanced Computational and Communication Paradigms",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "Springer",
          doi: "https://doi.org/10.1007/978-981-10-8240-5_57",
          conference: "Sikkim, India, September 8, 2017-September 10, 2017"
        },
        {
          title: "Early detection of Alzheimer’s disease using fusion techniques on 3D brain views",
          authors: "Mishra Shiwangi and Khanna Pritee",
          journal: "IEEE Int. Conf. on Information and Communication Technology",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/INFOCOMTECH.2017.8340643",
          conference: "Gwalior, India, November 3, 2017-November 5, 2017"
        },
        {
          title: "Fractional Order Filter based Enhancement of Digital Mammograms",
          authors: "Kashyap Kanchan Lata, Singh K. K., Bajpai M. K., and Khanna Pritee",
          journal: "2017 Int. Conf. on Signal Processing and Imaging Engineering (ICSPIE 2017)",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "Unknown",
          conference: "San Francisco, USA, October 25, 2017-October 27, 2017"
        },
        {
          title: "Non-invertible Biometric Encryption to Generate Cancelable Biometric Templates",
          authors: "Kaur Harkeerat and Khanna Pritee",
          journal: "2017 Int. Conf. on Signal Processing and Imaging Engineering (ICSPIE 2017)",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "Unknown",
          doi: "http://dx.doi.org/10.1016/j.cose.2019.101690",
          conference: "San Francisco, USA, October 25, 2017-October 27, 2017"
        },
        {
          title: "Fractional Order Savitzky-Golay Differentiator based Approach for Mammogram Enhancement",
          authors: "Koushlendra K Singh, B K Singh, Manish Bajpai",
          journal: "IEEE International conference on Imaging Science & Techniques (IST)",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/IST48021.2019.9010231",
          conference: "China, Oct 18, 2017-Oct 19, 2017"
        },
        {
          title: "Fractional Order Differentiator based Edge Detection in Remote Sensing Images",
          authors: "Ayushi Jain, Akarsh Dang, Vandana Kumari, Koushlendra K Singh, B K Singh, Manish Bajpai",
          journal: "IEEE TENCON 2017",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/TENCON.2017.8228354",
          conference: "Malaysia, Nov-06-Nov-08"
        },
        {
          title: "Fractional Order Differential based Breast Tissues Density Classification in Mammograms",
          authors: "Kanchanlata Kashyap, Manish Bajpai, Pritee Khanna",
          journal: "World Congress in Engineering and Computer Science",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IAENG",
          conference: "USA, Oct-25-Oct-27"
        },
        {
          title: "Breast Tissues Density Classification in Mammograms based on Supervised Machine Learning Technique",
          authors: "Kanchanlata Kashyap, Manish Bajpai, Pritee Khanna",
          journal: "ACM COMPUTE",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "ACM",
          doi: "https://doi.org/10.1145/3140107.3140131",
          conference: "India, Nov-16-Nov-18"
        },
        {
          title: "Blood Vessel Segmentation using Hybrid Median Filtering and Morphological Transformation",
          authors: "Neha Gour, Pritee Khanna",
          journal: "The 13th International Conference on Signal Image Technology & Internet based Systems(SITIS-2017)",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/SITIS.2017.34",
          conference: "Jaipur, India, December 04, 2017-December 07, 2017"
        },
        {
          title: "LBRR: Load Balanced Ring Routing Protocol for Heterogeneous Sensor Networks with Sink Mobility",
          authors: "S. Maurya, V. Gupta, V. K. Jain",
          journal: "2017 IEEE Wireless Communications and Networking Conference (WCNC)",
          volume: "1-6",
          issue: "-",
          pages: "1-6",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/WCNC.2017.7925728",
          conference: "San Francisco, CA, USA, March 19, 2017-March 22, 2017"
        },
        {
          title: "Heron-Bilateration based location estimation technique for indoor WLAN",
          authors: "S. Tiwari, V. K. Jain",
          journal: "2017 International Conference on Information Networking (ICOIN)",
          volume: "-",
          issue: "-",
          pages: "13-17",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/ICOIN.2017.7899445",
          conference: "Da Nang, January 11, 2017-January 13, 2017"
        },
        {
          title: "MAEER: Mobility aware energy efficient routing protocol for Internet of Things",
          authors: "Sonali Sunil Chaudhari, Sonam Maurya, V. K. Jain",
          journal: "2017 Conference on Information and Communication Technology (CICT)",
          volume: "-",
          issue: "-",
          pages: "1-6",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/INFOCOMTECH.2017.8340624",
          conference: "Gwalior, India, November 3, 2017-November 5, 2017"
        },
        {
          title: "EHDP: An efficient hybrid data dissemination protocol for dense irregular urban vehicular ad-hoc networks",
          authors: "Shikha, S. Maurya, V. K. Jain",
          journal: "2017 Conference on Information and Communication Technology (CICT)",
          volume: "-",
          issue: "-",
          pages: "1-6",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/INFOCOMTECH.2017.8340623",
          conference: "Gwalior, India, November 3, 2017-November 5, 2017"
        },
        {
          title: "EECP: An energy efficient coverage preserving protocol for heterogeneous sensor networks",
          authors: "S. Maurya, V. K. Jain",
          journal: "2017 IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)",
          volume: "1-6",
          issue: "-",
          pages: "1-6",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/ANTS.2017.8384160",
          conference: "Bhubaneswar, India, December 17, 2017-December 20, 2017"
        },
        {
          title: "Relay node placement in constrained environment",
          authors: "Abhishek Verma, Virender Ranga",
          journal: "Proceeding of International Conference on Communications and Computing Systems (ICCCS 2016)",
          volume: "-",
          issue: "-",
          pages: "417-420",
          publisher: "Unknown",
          doi: "https://doi.org/10.1109/ICMETE.2016.62",
          conference: "Unknown"
        },
        {
          title: "Analyzing behavior of DDoS attacks to identify DDoS detection features in SDN",
          authors: "Neelam Dayal, Shashank Srivastava",
          journal: "2017 9th International Conference on Communication Systems and Networks (COMSNETS)",
          volume: "-",
          issue: "-",
          pages: "274-281",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/COMSNETS.2017.7945387",
          conference: "Unknown"
        },
        {
          title: "Method Level Text Summarization for Java Code Using Nano-Patterns",
          authors: "Sawan Rai, Tejaswini Gaikwad, Sparshi Jain, Atul Gupta",
          journal: "2017 24th Asia-Pacific Software Engineering Conference (APSEC)",
          volume: "-",
          issue: "-",
          pages: "199-208",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/APSEC.2017.26",
          conference: "Unknown, 04-Dec-17-08-Dec-17"
        },
        {
          title: "Classification of Brain MRIs forming Superpixels",
          authors: "Gupta Nidhi, Mishra S., and Khanna Pritee",
          journal: "IEEE International Conference on Advanced Computational and Communication Paradigms",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "Springer",
          doi: "https://doi.org/10.1007/978-981-10-8240-5_57",
          conference: "Sikkim, India, September 8, 2017-September 10, 2017"
        },
        {
          title: "Early detection of Alzheimer’s disease using fusion techniques on 3D brain views",
          authors: "Mishra Shiwangi and Khanna Pritee",
          journal: "IEEE Int. Conf. on Information and Communication Technology",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/INFOCOMTECH.2017.8340643",
          conference: "Gwalior, India, November 3, 2017-November 5, 2017"
        },
        {
          title: "Fractional Order Filter based Enhancement of Digital Mammograms",
          authors: "Kashyap Kanchan Lata, Singh K. K., Bajpai M. K., and Khanna Pritee",
          journal: "2017 Int. Conf. on Signal Processing and Imaging Engineering (ICSPIE 2017)",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "Unknown",
          conference: "San Francisco, USA, October 25, 2017-October 27, 2017"
        },
        {
          title: "Non-invertible Biometric Encryption to Generate Cancelable Biometric Templates",
          authors: "Kaur Harkeerat and Khanna Pritee",
          journal: "2017 Int. Conf. on Signal Processing and Imaging Engineering (ICSPIE 2017)",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "Unknown",
          doi: "https://doi.org/10.1016/j.cose.2019.101690",
          conference: "San Francisco, USA, October 25, 2017-October 27, 2017"
        },
        {
          title: "LBRR: Load Balanced Ring Routing Protocol for Heterogeneous Sensor Networks with Sink Mobility",
          authors: "S. Maurya, V. Gupta, V. K. Jain",
          journal: "2017 IEEE Wireless Communications and Networking Conference (WCNC)",
          volume: "-",
          issue: "-",
          pages: "1-6",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/WCNC.2017.7925728",
          conference: "San Francisco, CA, USA, March 19, 2017-March 22, 2017"
        },
        {
          title: "Heron-Bilateration based location estimation technique for indoor WLAN",
          authors: "S. Tiwari, V. K. Jain",
          journal: "2017 International Conference on Information Networking (ICOIN)",
          volume: "-",
          issue: "-",
          pages: "13-17",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/ICOIN.2017.7899445",
          conference: "Da Nang, January 11, 2017-January 13, 2017"
        },
        {
          title: "MAEER: Mobility aware energy efficient routing protocol for Internet of Things",
          authors: "Sonali Sunil Chaudhari, Sonam Maurya, V. K. Jain",
          journal: "2017 Conference on Information and Communication Technology (CICT)",
          volume: "-",
          issue: "-",
          pages: "1-6",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/INFOCOMTECH.2017.8340624",
          conference: "Gwalior, India, November 3, 2017-November 5, 2017"
        },
        {
          title: "EHDP: An efficient hybrid data dissemination protocol for dense irregular urban vehicular ad-hoc networks",
          authors: "Shikha, S. Maurya, V. K. Jain",
          journal: "2017 Conference on Information and Communication Technology (CICT)",
          volume: "-",
          issue: "-",
          pages: "1-6",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/INFOCOMTECH.2017.8340623",
          conference: "Gwalior, India, November 3, 2017-November 5, 2017"
        },
        {
          title: "EECP: An energy efficient coverage preserving protocol for heterogeneous sensor networks",
          authors: "S. Maurya, V. K. Jain",
          journal: "2017 IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)",
          volume: "-",
          issue: "-",
          pages: "1-6",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/ANTS.2017.8384160",
          conference: "Bhubaneswar, India, December 17, 2017-December 20, 2017"
        },
        {
          title: "Fractional Order Filter based Enhancement of Digital Mammograms",
          authors: "Kashyap Kanchan Lata, Singh K. K., Bajpai M. K., and Khanna Pritee",
          journal: "2017 Int. Conf. on Signal Processing and Imaging Engineering (ICSPIE 2017)",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "Unknown",
          conference: "San Francisco, USA, October 25, 2017-October 27, 2017"
        },
        {
          title: "Fractional Order Savitzky-Golay Differentiator based Approach for Mammogram Enhancement",
          authors: "Koushlendra K Singh, B K Singh, Manish Bajpai",
          journal: "IEEE International conference on Imaging Science & Techniques (IST)",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/IST48021.2019.9010231",
          conference: "China, Oct 18, 2017-Oct 19, 2017"
        },
        {
          title: "Fractional Order Differentiator based Edge Detection in Remote Sensing Images",
          authors: "Ayushi Jain, Akarsh Dang, Vandana Kumari, Koushlendra K Singh, B K Singh, Manish Bajpai",
          journal: "IEEE TENCON 2017",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IEEE",
          doi: "https://doi.org/10.1109/TENCON.2017.8228354",
          conference: "Malaysia, Nov-06-Nov-08"
        },
        {
          title: "Fractional Order Differential based Breast Tissues Density Classification in Mammograms",
          authors: "Kanchanlata Kashyap, Manish Bajpai, Pritee Khanna",
          journal: "World Congress in Engineering and Computer Science",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "IAENG",
          conference: "USA, Oct-25-Oct-27"
        },
        {
          title: "Breast Tissues Density Classification in Mammograms based on Supervised Machine Learning Technique",
          authors: "Kanchanlata Kashyap, Manish Bajpai, Pritee Khanna",
          journal: "ACM COMPUTE",
          volume: "-",
          issue: "-",
          pages: "-",
          publisher: "ACM",
          doi: "https://doi.org/10.1145/3140107.3140131",
          conference: "India, Nov-16-Nov-18, 2017"
        },
        
        
        
        
      ],
    },
    2016: {
      journals: [
        {
          title: 'Cancelable features using log-Gabor filters for biometric authentication',
          authors: 'Kaur Harkeerat, Khanna Pritee',
          journal: 'Multimedia Tools and Applications',
          volume: '76',
          issue: '4',
          pages: '4673-4694',
          publisher: 'Springer US',
          doi: 'https://doi.org/10.1007/s11042-016-3652-3'
        },
        {
          title: 'Reputation based probabilistic resource allocation for avoiding free riding and formation of common interest groups in unstructured P2P networks',
          authors: 'Ruchir Gupta, Nitin Singha, Yatindra Nath Singh',
          journal: 'Peer-to-Peer Networking and Applications',
          volume: '9',
          issue: '6',
          pages: '1101-1113',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/s12083-015-0389-0'
        },
        {
          title: 'Human Face Recognition using Random Forest based Fusion of A-trous Wavelet Transform Coefficients from Thermal and Visible Images',
          authors: 'Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri',
          journal: 'International Journal of Electronics and Communications',
          volume: '70',
          issue: '8',
          pages: '1041-1049',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.aeue.2016.04.016'
        },
        {
          title: 'Content Based Image Retrieval Embedded with Agglomerative Clustering Built on Information Loss',
          authors: 'Pandey S., Khanna Pritee',
          journal: 'International Journal of Computers and Electrical Engineering',
          volume: '54',
          issue: '',
          pages: '506-521',
          publisher: 'Pergamon',
          doi: 'https://doi.org/10.1016/j.compeleceng.2016.04.003'
        },
        {
          title: 'Fusion of Visible and Thermal Images Using a Directed Search Method for Face Recognition',
          authors: 'Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Consuelo Gonzalo-Martin, Ernestina Menasalvas',
          journal: 'International Journal of Pattern Recognition and Artificial Intelligence',
          volume: '31',
          issue: '4',
          pages: '',
          publisher: 'World Scientific',
          doi: 'https://doi.org/10.1142/S0218001417560055'
        },
        {
          title: 'Controlling Spread of Rumor Using Neighbor Centrality',
          authors: 'A. Mehta, B. Mukhoty, R. Gupta',
          journal: 'ACTA PHYSICA POLONICA B',
          volume: '47',
          issue: '10',
          pages: '2325-2339',
          publisher: 'Jagiellonian University',
          doi: 'https://doi.org/10.5506/APhysPolB.47.2325'
        },
        {
          title: 'A semantics and image retrieval system for hierarchical image databases',
          authors: 'Pandey S., Khanna Pritee, Yokota H.',
          journal: 'Information Processing & Management',
          volume: '52',
          issue: '4',
          pages: '571-591',
          publisher: '',
          doi: 'https://doi.org/10.1016/j.ipm.2015.12.005'
        },
        {
          title: 'Clustering of Hierarchical Image Database to Reduce Inter-and Intra-Semantic Gaps in Visual Space for Finding Specific Image Semantics',
          authors: 'Pandey S., Khanna Pritee, Yokota H.',
          journal: '',
          volume: '38',
          issue: '',
          pages: '704-720',
          publisher: '',
          doi: 'https://doi.org/10.1016/j.jvcir.2016.04.013'
        },
        {
          title: 'A Framework to Plot and Recognize Hand motion Trajectories towards Development of Non-tactile Interfaces',
          authors: 'Kane Lalit, Khanna Pritee',
          journal: 'Procedia Computer Science',
          volume: '84',
          issue: '',
          pages: '6-13',
          publisher: '',
          doi: 'https://doi.org/10.1016/j.procs.2016.04.059'
        },
        {
          title: 'Enhancement of dark images using dynamic stochastic resonance with anisotropic diffusion',
          authors: 'Nidhi Gupta, Rajib Jha',
          journal: 'Journal of Electronic Imaging',
          volume: '25',
          issue: '2',
          pages: '123-130',
          publisher: 'SPIE',
          doi: 'https://doi.org/10.1117/1.JEI.25.2.023017'
        },
        {
          title: 'Real-time recognition of medial structures within hand postures through Eigen-space and geometric skeletal shape features',
          authors: 'Lalit Kane, Pritee Khanna',
          journal: 'Multimedia Tools and Applications',
          volume: '',
          issue: '',
          pages: '',
          publisher: 'Springer',
          doi: 'https://doi.org/10.1007/s11042-016-4173-9'
        },
        {
          title: 'Kernel Discriminant Analysis of Block-wise Gaussian Derivative Phase Pattern Histogram for Palmprint Recognition',
          authors: 'Deepti Tamrakar, Pritee Khanna',
          journal: 'Journal of Visual Communication and Image Representation',
          volume: '',
          issue: '',
          pages: '',
          publisher: '',
          doi: 'https://doi.org/10.1016/j.jvcir.2016.07.008'
        },
        {
          title: 'Fuzzy based energy efficient sensor network protocol for precision agriculture',
          authors: 'S. Maurya, V. K. Jain',
          journal: 'Computers and Electronics in Agriculture',
          volume: '130',
          issue: '1',
          pages: '20-37',
          publisher: 'Elsevier',
          doi: 'https://doi.org/10.1016/j.compag.2016.09.016'
        },
        {
          title: 'Effective self-embedding watermarking scheme for image tampered detection and localization with recovery capability',
          authors: 'Durgesh Singh, Sanjay K Singh',
          journal: 'Journal of Visual Communication and Image Representation',
          volume: '38',
          issue: '',
          pages: '775-789',
          publisher: 'Academic Press',
          doi: 'https://doi.org/10.1016/j.jvcir.2016.04.023'
        },
        {
          title: 'Cancelable features using log-Gabor filters for biometric authentication',
          authors: 'Kaur Harkeerat, Khanna Pritee',
          journal: 'Multimedia Tools and Applications',
          volume: '76',
          issue: '4',
          pages: '4673-4694',
          publisher: 'Springer US',
          doi: 'https://doi.org/10.1007/s11042-016-3652-3'
        },
        {
          title: "Content Based Image Retrieval Embedded with Agglomerative Clustering Built on Information Loss",
          authors: "Pandey S., Khanna Pritee",
          journal: "International Journal of Computers and Electrical Engineering",
          volume: "54",
          issue: "N/A",
          pages: "506-521",
          publisher: "Pergamon",
          doi: "http://dx.doi.org/10.1016/j.compeleceng.2016.04.003"
        },
        {
          title: "A semantics and image retrieval system for hierarchical image databases",
          authors: "Pandey S., Khanna Pritee, Yokota H.",
          journal: "Information Processing & Management",
          volume: "52",
          issue: "4",
          pages: "571-591",
          publisher: "N/A",
          doi: "http://dx.doi.org/10.1016/j.ipm.2015.12.005"
        },
        {
          title: "Clustering of Hierarchical Image Database to Reduce Inter-and Intra-Semantic Gaps in Visual Space for Finding Specific Image Semantics",
          authors: "Pandey S., Khanna Pritee, Yokota H.",
          journal: "N/A",
          volume: "38",
          issue: "N/A",
          pages: "704-720",
          publisher: "N/A",
          doi: "http://dx.doi.org/10.1016/j.jvcir.2016.04.013"
        },
        {
          title: "A Framework to Plot and Recognize Hand motion Trajectories towards Development of Non-tactile Interfaces",
          authors: "Kane Lalit, Khanna Pritee",
          journal: "Procedia Computer Science",
          volume: "84",
          issue: "N/A",
          pages: "6-13",
          publisher: "N/A",
          doi: "http://dx.doi.org/10.1016/j.procs.2016.04.059"
        },
        {
          title: "Real-time recognition of medial structures within hand postures through Eigen-space and geometric skeletal shape features",
          authors: "Lalit Kane, Pritee Khanna",
          journal: "Multimedia Tools and Applications",
          volume: "N/A",
          issue: "N/A",
          pages: "N/A",
          publisher: "Springer",
          doi: "http://dx.doi.org/10.1007/s11042-016-4173-9"
        },
        {
          title: "Kernel Discriminant Analysis of Block-wise Gaussian Derivative Phase Pattern Histogram for Palmprint Recognition",
          authors: "Deepti Tamrakar, Pritee Khanna",
          journal: "Journal of Visual Communication and Image Representation",
          volume: "N/A",
          issue: "N/A",
          pages: "N/A",
          publisher: "N/A",
          doi: "http://dx.doi.org/10.1016/j.jvcir.2016.07.008"
        },
        {
          title: "Opposition chaotic fitness mutation based adaptive inertia weight BPSO for feature selection in text clustering",
          authors: "Kusum Kumari Bharti, Pramod Kumar Singh",
          journal: "Applied Soft Computing",
          volume: "43",
          issue: "N/A",
          pages: "20-34",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.asoc.2016.01.019"
        },
        {
          title: "Energy efficient secure communication architecture for wireless sensor network",
          authors: "Satyajit Mondal, Sraban Kumar Mohanty, Sukumar Nandi",
          journal: "Security and Communication Networks",
          volume: "9",
          issue: "16",
          pages: "3314-3323",
          publisher: "N/A",
          doi: "https://doi.org/10.1002/sec.1536"
        },
        {
          title: "Effects of both diffuse and collimated incident radiation on phototactic bioconvection",
          authors: "MK Panda, R Singh, Amaresh Chandra Mishra, Sraban Kumar Mohanty",
          journal: "Physics of Fluids",
          volume: "28",
          issue: "12",
          pages: "124104-124104",
          publisher: "AIP Publishing LLC",
          doi: "https://doi.org/10.1063/1.4972057"
        },
        {
          title: "Functional grouping of similar genes using eigenanalysis on minimum spanning tree based neighborhood graph",
          authors: "R Jothi, Sraban Kumar Mohanty, Aparajita Ojha",
          journal: "Computers in Biology and Medicine",
          volume: "71",
          issue: "N/A",
          pages: "135-148",
          publisher: "Pergamon",
          doi: "https://doi.org/10.1016/j.compbiomed.2016.02.007"
        },
        {
          title: "Lignin Decolorization and Degradation of Pulp and Paper Mill Effluent by Ligninolytic Bacteria",
          authors: "AK Ojha, M Tiwari",
          journal: "Iranian (Iranica) Journal of Energy & Environment",
          volume: "7",
          issue: "3",
          pages: "282-293",
          publisher: "Babol Noshirvani University of Technology",
          doi: "https://dx.doi.org/10.5829/idosi.ijee.2016.07.03.11"
        },
        

        
      ],
      conferences: [
        
        
      ],
    },
    2015: {
      journals: [
        {
          title: "A systematic literature review of use case specifications research",
          authors: "Saurabh Tiwari, Atul Gupta",
          journal: "Inf. Softw. Technol.",
          volume: "67",
          issue: "3",
          pages: "128-158",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.infsof.2015.06.004"
        },
        {
          title: "UGC-JU Face Database and its Benchmarking using Linear Regression Classifier",
          authors: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          journal: "Multimedia Tools and Applications",
          volume: "74",
          issue: "9",
          pages: "2913-2937",
          publisher: "Jadavpur University, Springer",
          doi: "http://dx.doi.org/10.1007/s11042-013-1754-8"
        },
        {
          title: "Noise and rotation invariant RDF descriptor for palmprint identification",
          authors: "Tamrakar Deepti, Khanna Pritee",
          journal: "Multimedia Tools and Applications",
          volume: "75",
          issue: "10",
          pages: "5777-5794",
          publisher: "Springer US",
          doi: "https://doi.org/10.1007/s11042-015-2541-5"
        },
        {
          title: "Biometric Template Protection using Cancelable Biometrics and Visual Cryptography Techniques",
          authors: "Kaur Harkeerat, Khanna Pritee",
          journal: "Multimedia Tools and Applications",
          volume: "75",
          issue: "23",
          pages: "16333-16361",
          publisher: "Springer US",
          doi: "https://doi.org/10.1007/s11042-015-2933-6"
        },
        {
          title: "Palmprint verification with XOR-SUM Code",
          authors: "Tamrakar Deepti, Khanna Pritee",
          journal: "Signal, Image and Video Processing",
          volume: "9",
          issue: "3",
          pages: "535-542",
          publisher: "Springer London",
          doi: "https://doi.org/10.1007/s11760-013-0475-9"
        },
        {
          title: "Reputation Aggregation in Peer-to-Peer Network Using Differential Gossip Algorithm",
          authors: "Ruchir Gupta, Yatindra Nath Singh",
          journal: "IEEE Transaction on Knowledge and Data Engineering",
          volume: "27",
          issue: "10",
          pages: "2812-2823",
          publisher: "IEEE Computer Society",
          doi: "https://doi.org/10.1109/TKDE.2015.2427793"
        },
        {
          title: "Blur and occlusion invariant palmprint recognition with block-wise local phase quantization histogram",
          authors: "Tamrakar Deept, Khanna Pritee",
          journal: "Journal of Electronic Imaging",
          volume: "24",
          issue: "4",
          pages: "N/A",
          publisher: "SPIE",
          doi: "https://doi.org/10.1117/1.JEI.24.4.043006"
        },
        {
          title: "Fast multi-processor multi GPU based algorithm of tomographic inversion for 3D reconstruction",
          authors: "Manish Bajpai, P Gupta, P Munshi",
          journal: "International Journal of High performance computing applications",
          volume: "29",
          issue: "1",
          pages: "64-72",
          publisher: "Sage",
          doi: "https://doi.org/10.1177/1094342013518444"
        },
        {
          title: "A Novel Approach for Edge Detection of Low Contrast Satellite Images",
          authors: "Koushlendra K Singh, Manish Bajpai, R K Pandey",
          journal: "The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences",
          volume: "0",
          issue: "0",
          pages: "211-217",
          publisher: "International Society for Photogrammetry and Remote Sensing",
          doi: "https://doi.org/10.5194/isprsarchives-XL-3-W2-211-2015"
        },
        {
          title: "Occlusion Invariant Palmprint Recognition with ULBP Histograms",
          authors: "Tamrakar Deepti, Khanna Pritee",
          journal: "Procedia Computer Science",
          volume: "54",
          issue: "N/A",
          pages: "491-500",
          publisher: "N/A",
          doi: "https://doi.org/10.1016/j.procs.2015.06.056"
        },
        {
          title: "Gaussian Random Projection based Non-invertible Cancelable Biometric Templates",
          authors: "Kaur Harkeerat, Khanna Pritee",
          journal: "Procedia Computer Science",
          volume: "54",
          issue: "54",
          pages: "661-670",
          publisher: "N/A",
          doi: "https://doi.org/10.1016/j.procs.2015.06.077"
        },
        {
          title: "A framework for live and cross platform fingerspelling recognition using modified shape matrix variants on depth silhouettes",
          authors: "Kane Lalit, Khanna Pritee",
          journal: "Computer Vision and Image Understanding",
          volume: "141",
          issue: "N/A",
          pages: "138-151",
          publisher: "N/A",
          doi: "https://doi.org/10.1016/j.cviu.2015.08.001"
        },
        {
          title: "An effective use of adaptive combination of visual features to retrieve image semantics from a hierarchical image database",
          authors: "Pandey S., Khanna Pritee, Yokota H.",
          journal: "Journal of Visual Communication and Image Representation",
          volume: "30",
          issue: "5",
          pages: "136-152",
          publisher: "N/A",
          doi: "https://doi.org/10.1016/j.jvcir.2015.03.010"
        },
        {
          title: "A Fast and Efficient Computer Aided Diagnostic System to Detect Tumor from Brain Magnetic Resonance Imaging",
          authors: "Nidhi Gupta, Pritee Khanna",
          journal: "International Journal of Imaging System and Technology",
          volume: "25",
          issue: "2",
          pages: "123-130",
          publisher: "Wiley",
          doi: "https://doi.org/10.1002/ima.22128"
        },
        {
          title: "Computer-Aided Diagnosis of Malignant Mammograms using Zernike Moments and SVM",
          authors: "Shubhi Sharma, Pritee Khanna",
          journal: "Journal of Digital Imaging",
          volume: "28",
          issue: "1",
          pages: "77-99",
          publisher: "Springer",
          doi: "https://doi.org/10.1007/s10278-014-9719-7"
        },
        {
          title: "An illumination, expression, and noise invariant Gender Classifier using Two-Directional 2DPCA on real Gabor space",
          authors: "Preeti Rai, Pritee Khanna",
          journal: "Journal of Visual Language and Computing",
          volume: "26",
          issue: "N/A",
          pages: "15-28",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.jvlc.2014.10.016"
        },
        {
          title: "Occlusion Invariant Palmprint Recognition with ULBP Histograms",
          authors: "Tamrakar Deepti, Khanna Pritee",
          journal: "Procedia Computer Science",
          volume: "54",
          issue: "N/A",
          pages: "491-500",
          publisher: "N/A",
          doi: "https://doi.org/10.1016/j.procs.2015.06.056"
        },
        {
          title: "Gaussian Random Projection based Non-invertible Cancelable Biometric Templates",
          authors: "Kaur Harkeerat, Khanna Pritee",
          journal: "Procedia Computer Science",
          volume: "54",
          issue: "54",
          pages: "661-670",
          publisher: "N/A",
          doi: "https://doi.org/10.1016/j.procs.2015.06.077"
        },
        {
          title: "A framework for live and cross platform fingerspelling recognition using modified shape matrix variants on depth silhouettes",
          authors: "Kane Lalit, Khanna Pritee",
          journal: "Computer Vision and Image Understanding",
          volume: "141",
          issue: "N/A",
          pages: "138-151",
          publisher: "N/A",
          doi: "https://doi.org/10.1016/j.cviu.2015.08.001"
        },
        {
          title: "An effective use of adaptive combination of visual features to retrieve image semantics from a hierarchical image database",
          authors: "Pandey S., Khanna Pritee, Yokota H.",
          journal: "Journal of Visual Communication and Image Representation",
          volume: "30",
          issue: "5",
          pages: "136-152",
          publisher: "N/A",
          doi: "https://doi.org/10.1016/j.jvcir.2015.03.010"
        },
        {
          title: "A Fast and Efficient Computer Aided Diagnostic System to Detect Tumor from Brain Magnetic Resonance Imaging",
          authors: "Nidhi Gupta, Pritee Khanna",
          journal: "International Journal of Imaging System and Technology",
          volume: "25",
          issue: "2",
          pages: "123-130",
          publisher: "Wiley",
          doi: "https://doi.org/10.1002/ima.22128"
        },
        {
          title: "Computer-Aided Diagnosis of Malignant Mammograms using Zernike Moments and SVM",
          authors: "Shubhi Sharma, Pritee Khanna",
          journal: "Journal of Digital Imaging",
          volume: "28",
          issue: "1",
          pages: "77-99",
          publisher: "Springer",
          doi: "https://doi.org/10.1007/s10278-014-9719-7"
        },
        {
          title: "An illumination, expression, and noise invariant Gender Classifier using Two-Directional 2DPCA on real Gabor space",
          authors: "Preeti Rai, Pritee Khanna",
          journal: "Journal of Visual Language and Computing",
          volume: "26",
          issue: "N/A",
          pages: "15-28",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.jvlc.2014.10.016"
        },
        {
          title: "UGC-JU Face Database and its Benchmarking using Linear Regression Classifier",
          authors: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          journal: "Multimedia Tools and Applications",
          volume: "74",
          issue: "9",
          pages: "2913-2937",
          publisher: "Springer",
          doi: "https://doi.org/10.1007/s11042-013-1754-8"
        },
        {
          title: "Fast multi-processor multi GPU based algorithm of tomographic inversion for 3D reconstruction",
          authors: "Manish Bajpai, P Gupta, P Munshi",
          journal: "International Journal of High performance computing applications",
          volume: "29",
          issue: "1",
          pages: "64-72",
          publisher: "Sage",
          doi: "https://doi.org/10.1177/1094342013518444"
        },
        {
          title: "A Novel Approach for Edge Detection of Low Contrast Satellite Images",
          authors: "Koushlendra K Singh, Manish Bajpai, R K Pandey",
          journal: "The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences",
          volume: "0",
          issue: "0",
          pages: "211-217",
          publisher: "International Society for Photogrammetry and Remote Sensing",
          doi: "https://doi.org/10.5194/isprsarchives-XL-3-W2-211-2015"
        },
        {
          title: "Hybrid dimension reduction by integrating feature selection with feature extraction method for text clustering",
          authors: "Kusum Kumari Bharti, Pramod Kumar Singh",
          journal: "Expert Systems with Applications",
          volume: "42",
          issue: "6",
          pages: "3105-3114",
          publisher: "Pergamon",
          doi: "https://doi.org/10.1016/j.eswa.2014.11.038"
        },
        {
          title: "Digital watermark extraction using support vector machine with principal component analysis based feature reduction",
          authors: "Vivek Singh Verma, Rajib Kumar Jha, Aparajita Ojha",
          journal: "Journal of Visual Communication and Image Representation",
          volume: "31",
          issue: "N/A",
          pages: "75-85",
          publisher: "Academic Press",
          doi: "https://doi.org/10.1016/j.jvcir.2015.06.001"
        },
        {
          title: "Unsteady camera zoom stabilization using slope estimation over interest warping vectors",
          authors: "Deepika Shukla, Rajib Kumar Jha, Aparajita Ojha",
          journal: "Pattern Recognition Letters",
          volume: "68",
          issue: "N/A",
          pages: "197-204",
          publisher: "North-Holland",
          doi: "https://doi.org/10.1016/j.patrec.2015.09.012"
        }
        
        
        

        

        
        
      ],
      conferences: [
        {
          title: 'Feature Selection using Particle Swarm Optimization for Thermal Face Recognition',
          authors: 'Ayan Seal, Suranjan Ganguly, Debotosh Bhattacharjee, Mita Nasipuri, Consuelo Gonzalo-Martin',
          conference: 'Applied Computation and Security Systems, Advances in Intelligent Systems and Computing',
          year: '2015',
          location: 'Calcutta University',
          doi: 'http://dx.doi.org/10.1007/978-81-322-1985-9_2'
        },
        {
          title: 'Parallel Architecture based fast algorithm for image enhancement',
          authors: 'Koushlendra K Singh, Durgesh Kumar, Subham Chauhan, Manish Bajpai',
          conference: 'IEEE Bombay Section Symposium (IBSS)',
          year: '2015',
          location: 'India',
          doi: 'http://dx.doi.org/10.1109/IBSS.2015.7456650'
        },
        {
          title: 'Reputation Aggregation in Peer-to-Peer Network Using Differential Gossip Algorithm',
          authors: 'Ruchir Gupta, Yatindra Nath Singh',
          conference: 'IEEE ICDE',
          year: '2015',
          location: '-',
          doi: 'http://dx.doi.org/10.1109/ICDE.2016.7498426'
        },
        {
          title: 'Reconstruction of original signal from contaminated signal using fractional order differentiator',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          conference: 'IEEE International Symposium on Signal Processing and Information Technology (ISSPIT)',
          year: '2015',
          location: 'Abu Dhabi',
          doi: 'http://dx.doi.org/10.1109/ISSPIT.2015.7394342'
        },
        {
          title: 'An Approach of Generating Test Requirements for Agile Software Development',
          authors: 'Saurabh Tiwari, Atul Gupta',
          conference: 'Proceedings of the 8th India Software Engineering Conference, ISEC-15',
          year: '2015',
          location: 'Bangalore',
          doi: 'http://dx.doi.org/10.1145/2723742.2723761'
        },
        {
          title: 'Modifying Eigen Vectors Arrangement to Better Represent Images in Low Dimension',
          authors: 'Pandey S., Khanna Pritee',
          conference: 'Procedia Computer Science',
          year: '2015',
          location: '-',
          doi: 'http://dx.doi.org/10.1016/j.procs.2015.06.080'
        },
        {
          title: 'An Efficient and Robust Gender Classification System',
          authors: 'Preeti Rai, Pritee Khanna',
          conference: 'International Conference on Computational Intelligence and Communication Networks',
          year: '2015',
          location: 'Jabalpur',
          doi: 'http://dx.doi.org/10.1109/CICN.2015.58'
        },
        {
          title: 'Breast Cancer Detection in Digital Mammograms',
          authors: 'Kanchan Lata Kashyap, M. K. Bajpai, Pritee Khanna',
          conference: 'International Conference on Imaging Systems and Techniques',
          year: '2015',
          location: 'Macau, China',
          doi: 'http://dx.doi.org/10.1109/IST.2015.7294523'
        },
        {
          title: 'Analysis of Hand Motion Trajectories for Recognition of Air-Drawn Symbols',
          authors: 'Nimish Ayachi, Piyush Kejriwal, Lalit Kane, Pritee Khanna',
          conference: 'International Conference on Communication Systems and Network Technologies',
          year: '2015',
          location: 'Gwalior',
          doi: 'http://dx.doi.org/10.1109/CSNT.2015.95'
        },
        {
          title: 'Fractional Order Differentiator based technique for drop size measurement in multi-phase flow',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          conference: '7th International Symposium on Process Tomography',
          year: '2015',
          location: 'Germany',
          doi: '-'
        },
        {
          title: 'A Novel Approach for Edge Detection of Low Contrast Satellite Images',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          conference: 'International Conference on Photogrammetric Image Analysis',
          year: '2015',
          location: 'Germany',
          doi: 'http://dx.doi.org/10.5194/isprsarchives-XL-3-W2-211-2015'
        },
        {
          title: 'Edge detection in low contrast Images',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          conference: '17th International Conference on Image Processing',
          year: '2015',
          location: 'Switzerland',
          doi: '-'
        },
        {
          title: 'Relay node placement techniques in wireless sensor networks',
          authors: 'Abhishek Verma, Virender Ranga, Suneer Angra',
          conference: '2015 International Conference on Green Computing and Internet of Things (ICGCIoT)',
          year: '2015',
          location: 'Greater Noida, India',
          doi: 'http://dx.doi.org/10.1109/ICGCIoT.2015.7380683'
        },
        {
          title: 'Cloud Security Using Face Recognition',
          authors: 'Santosh Kumar, Debanjan Sadhya, Durgesh Singh, Sanjay Kumar Singh',
          conference: 'Handbook of research on securing cloud-based databases with biometric applications',
          year: '2015',
          location: '-',
          doi: 'http://dx.doi.org/10.4018/978-1-4666-9466-8.ch090'
        },
        {
          title: 'Modifying Eigen Vectors Arrangement to Better Represent Images in Low Dimension',
          authors: 'Pandey S., Khanna Pritee',
          conference: 'Procedia Computer Science',
          year: '2015',
          location: '-',
          doi: 'http://dx.doi.org/10.1016/j.procs.2015.06.080'
        },
        {
          title: 'An Efficient and Robust Gender Classification System',
          authors: 'Preeti Rai, Pritee Khanna',
          conference: 'International Conference on Computational Intelligence and Communication Networks',
          year: '2015',
          location: 'Jabalpur, India',
          doi: 'http://dx.doi.org/10.1109/CICN.2015.58'
        },
        {
          title: 'Breast Cancer Detection in Digital Mammograms',
          authors: 'Kanchan Lata Kashyap, M. K. Bajpai, Pritee Khanna',
          conference: 'International Conference on Imaging Systems and Techniques',
          year: '2015',
          location: 'Macau, China',
          doi: 'http://dx.doi.org/10.1109/IST.2015.7294523'
        },
        {
          title: 'Analysis of Hand Motion Trajectories for Recognition of Air-Drawn Symbols',
          authors: 'Nimish Ayachi, Piyush Kejriwal, Lalit Kane, Pritee Khanna',
          conference: 'International Conference on Communication Systems and Network Technologies',
          year: '2015',
          location: 'Gwalior, India',
          doi: 'http://dx.doi.org/10.1109/CSNT.2015.95'
        },
        {
          title: 'Feature Selection using Particle Swarm Optimization for Thermal Face Recognition',
          authors: 'Ayan Seal, Suranjan Ganguly, Debotosh Bhattacharjee, Mita Nasipuri, Consuelo Gonzalo-Martin',
          conference: 'Applied Computation and Security Systems, Advances in Intelligent Systems and Computing',
          year: '2015',
          location: 'Calcutta University, India',
          doi: 'http://dx.doi.org/10.1007/978-81-322-1985-9_2'
        },
        {
          title: 'Parallel Architecture based fast algorithm for image enhancement',
          authors: 'Koushlendra K Singh, Durgesh Kumar, Subham Chauhan, Manish Bajpai',
          conference: '2015 IEEE Bombay Section Symposium (IBSS)',
          year: '2015',
          location: 'India',
          doi: 'http://dx.doi.org/10.1109/IBSS.2015.7456650'
        },
        {
          title: 'Reconstruction of original signal from contaminated signal using fractional order differentiator',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          conference: '2015 IEEE International Symposium on Signal Processing and Information Technology (ISSPIT)',
          year: '2015',
          location: 'Abu Dhabi',
          doi: 'http://dx.doi.org/10.1109/ISSPIT.2015.7394342'
        },
        {
          title: 'Fractional Order Differentiator based technique for drop size measurement in multi phase flow',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          conference: '7th International Symposium on Process Tomography',
          year: '2015',
          location: 'Germany',
          doi: '-'
        },
        {
          title: 'A Novel Approach for Edge Detection of Low Contrast Satellite Images',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          conference: 'International Conference on Photogrammetric Image Analysis',
          year: '2015',
          location: 'Germany',
          doi: 'http://dx.doi.org/10.5194/isprsarchives-XL-3-W2-211-2015'
        },
        {
          title: 'Edge Detection in Low Contrast Images',
          authors: 'Koushlendra K Singh, Manish Bajpai, R K Pandey',
          conference: '17th International Conference on Image Processing',
          year: '2015',
          location: 'Switzerland',
          doi: '-'
        },
        {
          title: 'On the Impact of Post-clustering Phase in Multi-way Spectral Partitioning',
          authors: 'R Jothi, Sraban Kumar Mohanty, Aparajita Ojha',
          conference: 'International Conference on Mining Intelligence and Knowledge Exploration',
          year: '2015',
          location: '-',
          doi: 'http://dx.doi.org/10.1007/978-3-319-26832-3_16'
        },
        {
          title: 'Software Maintainability Estimation Made Easy: A Comprehensive Tool COIN',
          authors: 'B Ramachandra Reddy, Saahil Khurana, Aparajita Ojha',
          conference: 'Proceedings of the Sixth International Conference on Computer and Communication Technology',
          year: '2015',
          location: '-',
          doi: 'http://dx.doi.org/10.1145/2818567.2818580'
        },
        {
          title: 'On the Impact of Post-clustering Phase in Multi-way Spectral Partitioning',
          authors: 'R Jothi, Sraban Kumar Mohanty, Aparajita Ojha',
          conference: 'International Conference on Mining Intelligence and Knowledge Exploration',
          year: '2015',
          location: '-',
          doi: 'http://dx.doi.org/10.1007/978-3-319-26832-3_16'
        },
        
        

        
        
      ],
    },
    2014: {
      journals: [
        {
          title: "Robust Thermal Face Recognition using Region Classifiers",
          authors: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Consuelo Gonzalo-Martin",
          journal: "International Journal of Pattern Recognition and Artificial Intelligence",
          volume: "28",
          issue: "5",
          pages: "N/A",
          publisher: "World Scientific",
          doi: "https://doi.org/10.1142/S0218001414560084"
        },
        {
          title: "A gender classification system robust to occlusion using Gabor features based (2D)2PCA",
          authors: "Preeti Rai, Pritee Khanna",
          journal: "Journal of Visual Communication and Image Representation",
          volume: "25",
          issue: "5",
          pages: "1118-1129",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.jvcir.2014.03.009"
        },
        {
          title: "A Survey on Human Ear Recognition System Based on 2D and 3D Ear Images",
          authors: "Durgesh Singh, Sanjay K Singh",
          journal: "Open Journal of Information Security and Applications",
          volume: "1",
          issue: "2",
          pages: "21-30",
          publisher: "N/A",
          doi: "https://doi.org/10.15764/ISA.2014.02003"
        },
        {
          title: "Robust Thermal Face Recognition using Region Classifiers",
          authors: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Consuelo Gonzalo-Martin",
          journal: "International Journal of Pattern Recognition and Artificial Intelligence",
          volume: "28",
          issue: "5",
          pages: "N/A",
          publisher: "World Scientific",
          doi: "https://doi.org/10.1142/S0218001414560084"
        },
        {
          title: "A three-stage unsupervised dimension reduction method for text clustering",
          authors: "Kusum Kumari Bharti, Pramod Kumar Singh",
          journal: "Journal of Computational Science",
          volume: "5",
          issue: "2",
          pages: "156-169",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.jocs.2013.11.007"
        }
        
      ],
      conferences: [
        {
          title: 'Histogram of Bunched Intensity Values based Thermal Face Recognition',
          authors: 'Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Consuelo Gonzalo-Martin, Ernestina Menasalvas',
          conference: 'Rough Sets and Intelligent Systems Paradigms',
          year: '2014',
          location: 'Granada and Madrid, Spain',
          doi: 'http://dx.doi.org/10.1007/978-3-319-08729-0'
        },
        {
          title: 'A controlled experiment to evaluate the effectiveness and the efficiency of four static program analysis tools for Java programs',
          authors: 'Akash Kumar Tripathi, Atul Gupta',
          conference: '18th International Conference on Evaluation and Assessment in Software Engineering (EASE-2014)',
          year: '2014',
          location: 'London',
          doi: 'http://dx.doi.org/10.1145/2601248.2601288'
        },
        {
          title: 'A Hierarchical Clustering Approach for Image Datasets',
          authors: 'Shreelekha Pandey, Pritee Khanna',
          conference: 'International Conference on Industrial and Information Systems',
          year: '2014',
          location: 'Gwalior',
          doi: 'http://dx.doi.org/10.1109/ICIINFS.2014.7036504'
        },
        {
          title: 'Multispectral Palmprint Recognition using Steerable Filter',
          authors: 'Deepti Tamrakar, Pritee Khanna',
          conference: 'International Conference on Industrial and Information Systems',
          year: '2014',
          location: 'Gwalior',
          doi: 'http://dx.doi.org/10.1109/ICIINFS.2014.7036568'
        },
        {
          title: 'Appearance based Gender Classification with PCA and (2D)2PCA on Approximation Face Image',
          authors: 'Preeti Rai, Pritee Khanna',
          conference: 'International Conference on Industrial and Information Systems',
          year: '2014',
          location: 'Gwalior',
          doi: 'http://dx.doi.org/10.1109/ICIINFS.2014.7036569'
        },
        {
          title: 'Performance of Wavelet Filters for ECG Compression Based on Linear Predictive Coding Using Different Thresholding Functions',
          authors: 'Anupama Swarnkar, Anil Kumar, Pritee Khanna',
          conference: 'International Conference on Devices, Circuits and Communications',
          year: '2014',
          location: '-',
          doi: 'http://dx.doi.org/10.1109/ICDCCom.2014.7024737'
        },
        {
          title: 'Computational support to aesthetics in industrial design',
          authors: 'S. Soni, P. Khanna, P. Tandon',
          conference: 'International CAD Conference',
          year: '2014',
          location: 'Hong Kong, China',
          doi: 'http://dx.doi.org/10.14733/cadconfP.2014.199-200'
        },
        {
          title: 'Histogram of Bunched Intensity Values based Thermal Face Recognition',
          authors: 'Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Consuelo Gonzalo-Martin, Ernestina Menasalvas',
          conference: 'Rough Sets and Intelligent Systems Paradigms',
          year: '2014',
          location: 'Granada and Madrid, Spain',
          doi: 'http://dx.doi.org/10.1007/978-3-319-08729-0'
        },
        {
          title: 'Discrimination of Class Inheritance Hierarchies – A Vector Approach',
          authors: 'B Ramachandra Reddy, Aparajita Ojha',
          conference: 'New Perspectives in Information Systems and Technologies, Volume 2',
          year: '2014',
          location: '-',
          doi: 'http://dx.doi.org/10.1007/978-3-319-05948-8_12'
        },
        {
          title: 'ClassIN: A Class Inheritance Metric Tool',
          authors: 'B Ramachandra Reddy, Aparajita Ojha',
          conference: 'New Perspectives in Information Systems and Technologies, Volume 2',
          year: '2014',
          location: '-',
          doi: 'http://dx.doi.org/10.1007/978-3-319-05948-8_11'
        },
        {
          title: 'Maintainable Stochastic Flow Networks with High QoS: A Quick and Practical Approach',
          authors: 'Suchi Kumari, Aparajita Ojha',
          conference: 'Fourth International Conference on Advances in Computing and Communications',
          year: '2014',
          location: '-',
          doi: 'http://dx.doi.org/10.1109/ICACC.2014.69'
        },
        
      ],
    },
    2013: {
      journals: [
        {
          title: "Automated Thermal Face recognition based on Minutiae Extraction",
          authors: "Ayan Seal, Suranjan Ganguly, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          journal: "International Journal of Computational Intelligence Studies",
          volume: "2",
          issue: "2",
          pages: "133-156",
          publisher: "Inderscience Publisher",
          doi: "https://doi.org/10.1504/IJCISTUDIES.2013.055220"
        },
        {
          title: "High Resolution 3D Image Reconstruction using Algebraic Method for X-ray Cone-Beam Geometry over Circular and Helical Trajectories",
          authors: "Manish Bajpai, P Munshi, P Gupta, C Schorr, M Maisl",
          journal: "NDT & E International",
          volume: "60",
          issue: "N/A",
          pages: "62-69",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.ndteint.2013.07.009"
        },
        {
          title: "A Graphical Processing Unit–Based Parallel Implementation of Multiplicative Algebraic Reconstruction Technique Algorithm for Limited View Tomography",
          authors: "Manish Bajpai, P Gupta, P Munshi, V Titarenko, P J Withers",
          journal: "Research in Nondestructive Evaluation",
          volume: "24",
          issue: "4",
          pages: "211-222",
          publisher: "Taylor & Francis",
          doi: "https://doi.org/10.1080/09349847.2013.795635"
        },
        {
          title: "Knowledge support system for aesthetics in product design",
          authors: "S. Soni, P. Khanna, P. Tandon",
          journal: "ASME Journal of Computer and Information Science in Engineering",
          volume: "13",
          issue: "1",
          pages: "N/A",
          publisher: "N/A",
          doi: "https://doi.org/10.1115/1.4023355"
        },
        {
          title: "Extended axiomatic design and computational support to design for aesthetics",
          authors: "S. Soni, P. Khanna, P. Tandon",
          journal: "Computer Aided Design & Applications",
          volume: "10",
          issue: "1",
          pages: "N/A",
          publisher: "N/A",
          doi: "https://doi.org/10.3722/cadaps.2013.1-15"
        },
        {
          title: "Face Verification and Identification using DCT-NNDA and SIFT with Score-Level Fusion",
          authors: "Surya Kant Tyagi, Pritee Khanna",
          journal: "International Journal of Biomedical Engineering and Technology",
          volume: "13",
          issue: "2",
          pages: "154-176",
          publisher: "N/A",
          doi: "https://doi.org/10.1504/IJBET.2013.057928"
        },
        {
          title: "Impact of Communication Technology on Status of farmers: A socio-Economic analysis on Rural India",
          authors: "Richa Dixit, B K Singh, Manish Bajpai",
          journal: "International Journal of Agriculture Technology",
          volume: "9",
          issue: "3",
          pages: "503-514",
          publisher: "Association of Agriculture Technology in Southeast Asia",
          doi: "N/A"
        },
        {
          title: "RSS Fingerprints based Distributed Semi-supervised Locally Linear Embedding (DSSLLE) Location Estimation System for Indoor WLAN",
          authors: "Jain V. K., Tapaswi Shashikala, Shukla Anupam",
          journal: "Wireless Personal Communications",
          volume: "71",
          issue: "2",
          pages: "1175-1192",
          publisher: "Springer, US",
          doi: "https://doi.org/10.1007/s11277-012-0868-z"
        },
        {
          title: "Performance Analysis of Received Signal Strength Fingerprinting based Distributed Location Estimation System for indoor WLAN",
          authors: "Jain V. K., Tapaswi Shashikala, Shukla Anupam",
          journal: "Wireless Personal Communications",
          volume: "70",
          issue: "1",
          pages: "113-127",
          publisher: "Springer, US",
          doi: "https://doi.org/10.1007/s11277-012-0682-7"
        },
        {
          title: "QUANTIZATION-BASED FRAGILE WATERMARKING USING BLOCK-WISE AUTHENTICATION AND PIXEL-WISE RECOVERY SCHEME FOR TAMPERED IMAGE",
          authors: "Durgesh Singh, Shivendra Shivani, Suneeta Agarwal",
          journal: "International Journal of Image and Graphics",
          volume: "13",
          issue: "2",
          pages: "N/A",
          publisher: "World Scientific Publishing Company",
          doi: "https://doi.org/10.1142/S0219467813400020"
        },
        {
          title: "Knowledge support system for aesthetics in product design",
          authors: "S. Soni, P. Khanna, P. Tandon",
          journal: "ASME Journal of Computer and Information Science in Engineering",
          volume: "13",
          issue: "1",
          pages: "N/A",
          publisher: "N/A",
          doi: "https://doi.org/10.1115/1.4023355"
        },
        {
          title: "Extended axiomatic design and computational support to design for aesthetics",
          authors: "S. Soni, P. Khanna, P. Tandon",
          journal: "Computer Aided Design & Applications",
          volume: "10",
          issue: "1",
          pages: "N/A",
          publisher: "N/A",
          doi: "https://doi.org/10.3722/cadaps.2013.1-15"
        },
        {
          title: "Face Verification and Identification using DCT-NNDA and SIFT with Score-Level Fusion",
          authors: "Surya Kant Tyagi, Pritee Khanna",
          journal: "International Journal of Biomedical Engineering and Technology",
          volume: "13",
          issue: "2",
          pages: "154-176",
          publisher: "N/A",
          doi: "https://doi.org/10.1504/IJBET.2013.057928"
        },
        {
          title: "High Resolution 3D Image Reconstruction using Algebraic Method for X-ray Cone-Beam Geometry over Circular and Helical Trajectories",
          authors: "Manish Bajpai, P Munshi, P Gupta, C Schorr, M Maisl",
          journal: "NDT & E International",
          volume: "60",
          issue: "N/A",
          pages: "62-69",
          publisher: "Elsevier",
          doi: "https://doi.org/10.1016/j.ndteint.2013.07.009"
        },
        {
          title: "A Graphical Processing Unit–Based Parallel Implementation of Multiplicative Algebraic Reconstruction Technique Algorithm for Limited View Tomography",
          authors: "Manish Bajpai, P Gupta, P Munshi, V Titarenko, P J Withers",
          journal: "Research in Nondestructive Evaluation",
          volume: "24",
          issue: "4",
          pages: "211-222",
          publisher: "Taylor & Francis",
          doi: "https://doi.org/10.1080/09349847.2013.795635"
        },
        {
          title: "Impact of Communication Technology on Status of farmers: A socio-Economic analysis on Rural India",
          authors: "Richa Dixit, B K Singh, Manish Bajpai",
          journal: "International Journal of Agriculture Technology",
          volume: "9",
          issue: "3",
          pages: "503-514",
          publisher: "Association of Agriculture Technology in Southeast Asia",
          doi: "N/A"
        }
 
      ],
      conferences: [
        {
          tittle: "Thermal human face recognition based on GappyPCA",
          author: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          conference: "International Conference on Image Information Processing",
          year: "2013",
          location: "-",
          doi: "http://dx.doi.org/10.1109/ICIIP.2013.6707662"
        },
        {
          tittle: "Finding Image Semantics from a Hierarchical Image Database based on Adaptively Combined Visual Features",
          author: "Pritee Khanna, S. Pandey, H. Yokota",
          conference: "DEXA 2013",
          year: "2013",
          location: "-",
          doi: "http://dx.doi.org/10.1007/978-3-642-40285-2_11"
        },
        {
          tittle: "ROI Segmentation using Local Binary Image",
          author: "Shubhi Sharma, Pritee Khanna",
          conference: "International Conference on Control System, Computing and Engineering",
          year: "2013",
          location: "Penang, Malaysia",
          doi: "http://dx.doi.org/10.1109/ICCSCE.2013.6719947"
        },
        {
          tittle: "Generative Evolutionary Action Grammar Based Form Exploration",
          author: "S. Soni, P. Khanna, P. Tandon",
          conference: "33rd Computers and Information in Engineering (CIE) Conference and International Design Engineering Technical Conference",
          year: "2013",
          location: "Portland, USA",
          doi: "http://dx.doi.org/10.1115/DETC2013-13024"
        },
        {
          tittle: "Recognition of Single Handed Sign Language Gestures using Contour Tracing Descriptor",
          author: "Rohit Sharma, Yash Nemani, Sumit Kumar, Lalit Kane, Pritee Khanna",
          conference: "International Conference of Computational Intelligence"
        },
        {
          title: "Finding Image Semantics from a Hierarchical Image Database based on Adaptively Combined Visual Features",
          author: "Pritee Khanna, S. Pandey, H. Yokota",
          conference: "DEXA 2013",
          year: 2013,
          location: "-",
          doi: "http://dx.doi.org/10.1007/978-3-642-40285-2_11"
        },
        {
          title: "ROI Segmentation using Local Binary Image",
          author: "Shubhi Sharma, Pritee Khanna",
          conference: "International Conference on Control System, Computing and Engineering",
          year: 2013,
          location: "Penang, Malaysia",
          doi: "http://dx.doi.org/10.1109/ICCSCE.2013.6719947"
        },
        {
          title: "Generative Evolutionary Action Grammar Based Form Exploration",
          author: "S. Soni, P. Khanna, P. Tandon",
          conference: "33rd Computers and Information in Engineering (CIE) Conference and International Design Engineering Technical Conference",
          year: 2013,
          location: "Portland, USA",
          doi: "http://dx.doi.org/10.1115/DETC2013-13024"
        },
        {
          title: "Recognition of Single Handed Sign Language Gestures using Contour Tracing Descriptor",
          author: "Rohit Sharma, Yash Nemani, Sumit Kumar, Lalit Kane, Pritee Khanna",
          conference: "International Conference of Computational Intelligence and Intelligent Systems",
          year: 2013,
          location: "London, U.K.",
          doi: "N/A"
        },
        {
          title: "High Strain rate response of layered micro balloon filled aluminum",
          author: "P Venkitnarayanan, J Sorenson, Manish Bajpai",
          conference: "International Conference on Experimental Mechanics",
          year: 2013,
          location: "USA",
          doi: "http://dx.doi.org/10.1007/978-3-319-00771-7_29"
        },
        {
          title: "Multi-core CPU based three-dimensional image reconstruction for limited view tomography",
          author: "Manish Bajpai, P Gupta, P Munshi",
          conference: "7th World Congress on Industrial Process Tomography",
          year: 2013,
          location: "Poland",
          doi: "N/A"
        },
        {
          title: "Entropy-based rain detection and removal",
          author: "Rajib Kumar Jha, Sraban Kumar Mohanty, Anand Maitrey",
          conference: "2013 International Conference on Control, Automation, Robotics and Embedded Systems (CARE)",
          year: 2013,
          location: "Jabalpur, India",
          doi: "http://dx.doi.org/10.1109/CARE.2013.6733696"
        },
        {
          title: "Quickest path problems in stochastic-flow networks with time constraint: A fast and reliable solution",
          author: "Shivani Johari, Aparajita Ojha",
          conference: "2013 3rd IEEE International Advance Computing Conference (IACC)",
          year: 2013,
          location: "Ghaziabad, India",
          doi: "http://dx.doi.org/10.1109/IAdCC.2013.6514458"
        },
        {
          title: "A novel visual cryptography scheme based on substitution cipher",
          author: "Gyan Singh Yadav, Aparajita Ojha",
          conference: "2013 IEEE Second International Conference on Image Information Processing (ICIIP-2013)",
          year: 2013,
          location: "-",
          doi: "http://dx.doi.org/10.1109/ICIIP.2013.6707673"
        },
        {
          title: "Performance evaluation of certain proportional navigation guidance schemes",
          author: "Amit Kumar, Aparajita Ojha",
          conference: "2013 International Conference on Control, Automation, Robotics and Embedded Systems (CARE)",
          year: 2013,
          location: "-",
          doi: "http://dx.doi.org/10.1109/CARE.2013.6733766"
        },
        {
          title: "Face Verification and Identification using DCT-NNDA and SIFT with Score-Level Fusion",
          author: "Surya Kant Tyagi, Pritee Khanna",
          conference: "International Journal of Biomedical Engineering and Technology",
          year: 2013,
          location: "-",
          doi: "http://dx.doi.org/10.1504/IJBET.2013.057928"
        },
        {
          title: "High Resolution 3D Image Reconstruction using Algebraic Method for X-ray Cone-Beam Geometry over Circular and Helical Trajectories",
          author: "Manish Bajpai, P Munshi, P Gupta, C Schorr, M Maisl",
          conference: "NDT & E International",
          year: 2013,
          location: "-",
          doi: "http://dx.doi.org/10.1016/j.ndteint.2013.07.009"
        },
        {
          title: "A Graphical Processing Unit-Based Parallel Implementation of Multiplicative Algebraic Reconstruction Technique Algorithm for Limited View Tomography",
          author: "Manish Bajpai, P Gupta, P Munshi, V Titarenko, P J Withers",
          conference: "Research in Nondestructive Evaluation",
          year: 2013,
          location: "-",
          doi: "https://doi.org/10.1080/09349847.2013.795635"
        },
        {
          title: "Impact of Communication Technology on Status of Farmers: A Socio-Economic Analysis on Rural India",
          author: "Richa Dixit, B K Singh, Manish Bajpai",
          conference: "International Journal of Agriculture Technology",
          year: 2013,
          location: "-",
          doi: "-"
        }
        
        
        
        
      ],
    },
    2012: {
      journals: [
        {
          title: "A Comparative Study of Human Thermal Face Recognition Based on HaarWavelet Transform and Local Binary Pattern",
          authors: "Debotosh Bhattacharjee, Ayan Seal, Suranjan Ganguly, Mita Nasipuri, and Dipak Kumar Basu",
          journal: "Computational Intelligence and Neuroscience",
          volume: "2012",
          issue: "N/A",
          pages: "N/A",
          publisher: "Hindawi Publishing Corporation",
          doi: "https://doi.org/10.1155/2012/261089"
        },
        {
          title: "Gender Classification Techniques: A Review",
          authors: "Preeti Rai, Pritee Khanna",
          journal: "Advances in Intelligent and Soft Computing",
          volume: "166",
          issue: "N/A",
          pages: "51-59",
          publisher: "N/A",
          doi: "https://doi.org/10.1007/978-3-642-30157-5_6"
        },
        {
          title: "Fingerprint Authentication using Wavelet-based Digital Watermarking",
          authors: "Rajlaxmi Chouhan, Agya Mishra, Pritee Khanna",
          journal: "International Journal of Electrical and Computer Engineering",
          volume: "2",
          issue: "4",
          pages: "N/A",
          publisher: "N/A",
          doi: "https://doi.org/10.11591/ijece.v2i4.505"
        },
        {
          title: "Face Recognition using Discrete Cosine Transform and Nearest Neighbor Discriminant Analysis",
          authors: "Surya Kant Tyagi, Pritee Khanna",
          journal: "International Journal of Engineering and Technology",
          volume: "4",
          issue: "3",
          pages: "311-314",
          publisher: "N/A",
          doi: "https://doi.org/10.7763/IJET.2012.V4.372"
        },
        {
          title: "Location Estimation Based on Semi-Supervised Locally Linear Embedding (SSLLE) Approach for Indoor Wireless Networks",
          authors: "Jain V. K., Tapaswi Shashikala, Shukla Anupam",
          journal: "Wireless Personal Communications",
          volume: "67",
          issue: "4",
          pages: "879-893",
          publisher: "Springer, US",
          doi: "https://doi.org/10.1007/s11277-011-0416-2"
        },
        {
          title: "Gender Classification Techniques: A Review",
          authors: "Preeti Rai, Pritee Khanna",
          journal: "Advances in Intelligent and Soft Computing",
          volume: "166",
          issue: "N/A",
          pages: "51-59",
          publisher: "N/A",
          doi: "https://doi.org/10.1007/978-3-642-30157-5_6"
        },
        {
          title: "Fingerprint Authentication using Wavelet-based Digital Watermarking",
          authors: "Rajlaxmi Chouhan, Agya Mishra, Pritee Khanna",
          journal: "International Journal of Electrical and Computer Engineering",
          volume: "2",
          issue: "4",
          pages: "N/A",
          publisher: "N/A",
          doi: "https://doi.org/10.11591/ijece.v2i4.505"
        },
        {
          title: "Face Recognition using Discrete Cosine Transform and Nearest Neighbor Discriminant Analysis",
          authors: "Surya Kant Tyagi, Pritee Khanna",
          journal: "International Journal of Engineering and Technology",
          volume: "4",
          issue: "3",
          pages: "311-314",
          publisher: "N/A",
          doi: "https://doi.org/10.7763/IJET.2012.V4.372"
        },
        {
          title: "Location Estimation Based on Semi-Supervised Locally Linear Embedding (SSLLE) Approach for Indoor Wireless Networks",
          authors: "Jain V. K., Tapaswi Shashikala, Shukla Anupam",
          journal: "Wireless Personal Communications",
          volume: "67",
          issue: "4",
          pages: "879-893",
          publisher: "Springer, US",
          doi: "https://doi.org/10.1007/s11277-011-0416-2"
        },
        {
          title: "A Comparative Study of Human Thermal Face Recognition Based on HaarWavelet Transform and Local Binary Pattern",
          authors: "Debotosh Bhattacharjee, Ayan Seal, Suranjan Ganguly, Mita Nasipuri, and Dipak Kumar Basu",
          journal: "Computational Intelligence and Neuroscience",
          volume: "2012",
          issue: "N/A",
          pages: "N/A",
          publisher: "Hindawi Publishing Corporation",
          doi: "https://doi.org/10.1155/2012/261089"
        }
        
        
      ],
      conferences: [
       {
          title: "Towards Establishing a Mute Communication: An Indian Sign Language Perspective",
          author: "Lalit Kane, Pritee Khanna",
          conference: "International Conference on Intelligent Human Computer Interaction",
          year: 2012,
          location: "Kharagpur, India",
          doi: "http://dx.doi.org/10.1109/IHCI.2012.6481787"
        },
        {
          title: "Interactive Evolutionary System for Product Design",
          author: "S. Soni S., P. Khanna, P. Tandon",
          conference: "International Conference on Innovations in Design & Manufacturing (InnDeM 2012)",
          year: 2012,
          location: "Jabalpur, India",
          doi: "-"
        },
        {
          title: "Distributed location estimation system using WLAN received signal strength fingerprints",
          author: "V. K. Jain, S. Tapaswi, A. Shukla",
          conference: "2012 IEEE Wireless Communications and Networking Conference (WCNC)",
          year: 2012,
          location: "Paris, France",
          doi: "http://dx.doi.org/10.1109/WCNC.2012.6214338"
        },
        {
          title: "Minutiae Based Thermal Human Face Recognition using Label Connected Component Algorithm",
          author: "Ayan Seal, Suranjan Ganguly, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          conference: "International Conference on Computer, Communication, Control and Information Technology",
          year: 2012,
          location: "AOT, West Bengal",
          doi: "http://dx.doi.org/10.1016/j.protcy.2012.05.097"
        },
        {
          title: "Thermal Human face recognition based on Haar wavelet transform and series matching technique",
          author: "Ayan Seal, Suranjan Ganguly, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          conference: "International Conference on Multimedia Processing",
          year: 2012,
          location: "PES Institute of Technology, India",
          doi: "http://dx.doi.org/978-81-322-1143-3"
        },
        {
          title: "Climate change and Tomography",
          author: "Manish Bajpai, P Munshi, P Gupta, B Pandey",
          conference: "Humbolt Korlag",
          year: 2012,
          location: "India",
          doi: "http://dx.doi.org/10.1007/978-3-642-36143-2_11"
        },
        {
          title: "An Efficient GPU Based Parallel Algorithm for Image reconstruction: An Application to Tomographic Reconstruction",
          author: "Manish Bajpai, P Gupta, P Munshi",
          conference: "IEEE International Conference on Parallel, Distributed and Grid Computing",
          year: 2012,
          location: "India",
          doi: "http://dx.doi.org/10.1109/PDGC.2012.6449825"
        },
        {
          title: "Analysis of Text Cluster Visualization in Emergent Self Organizing Maps Using Unigrams and Its Variations after Introducing Bigrams",
          author: "Pramod Kumar Singh, Mahesh Machavolu, Kusum Bharti, Ranjith Suda",
          conference: "Proceedings of the International Conference on Soft Computing for Problem Solving (SocProS 2011)",
          year: 2012,
          location: "New Delhi",
          doi: "http://dx.doi.org/10.1007/978-81-322-0491-6_89"
        },
        {
          title: "Emergent Self Organizing Maps for Text Cluster Visualization by Incorporating Ontology Based Descriptors",
          author: "Kusum Kumari Bharti, Pramod Kumar Singh",
          conference: "Asia-Pacific Conference on Simulated Evolution and Learning",
          year: 2012,
          location: "-",
          doi: "https://doi.org/10.1007/978-3-642-34859-4_30"
        },
        {
          title: "I/O Efficient QR and QZ Algorithms",
          author: "Sraban Kumar Mohanty, Sajith Gopalan",
          conference: "2012 19th International Conference on High Performance Computing",
          year: 2012,
          location: "-",
          doi: "https://doi.org/10.1109/HiPC.2012.6507492"
        },
        {
          title: "I/O Efficient Algorithms for Block Hessenberg Reduction Using Panel Approach",
          author: "Sraban Kumar Mohanty, Gopalan Sajith",
          conference: "International Conference on Big Data Analytics",
          year: 2012,
          location: "-",
          doi: "https://doi.org/10.1007/978-3-642-35542-4_12"
        },
        {
          title: "LPMP: An Efficient Lightweight Protocol for Mobile Payment",
          author: "Devendra Mani Tripathi, Aparajita Ojha",
          conference: "2012 3rd National Conference on Emerging Trends and Applications in Computer Science",
          year: 2012,
          location: "-",
          doi: "https://doi.org/10.1109/NCETACS.2012.6203295"
        },
        {
          title: "A Fast and Efficient Data Hiding Scheme in Binary Images",
          author: "Gyan Singh Yadav, Aparajita Ojha",
          conference: "2012 Eighth International Conference on Intelligent Information Hiding and Multimedia Signal Processing",
          year: 2012,
          location: "-",
          doi: "https://doi.org/10.1109/IIH-MSP.2012.25"
        }
        
        
      ],
    },
    2011: {
      journals: [
        {
          title: "Palmprint Recognition by Wavelet Transform with Competitive Index and PCA",
          authors: "Deepti Tamrakar, Pritee Khanna",
          journal: "World Academy of Science, Engineering and Technology",
          volume: "60",
          issue: "N/A",
          pages: "1581-1585",
          publisher: "N/A",
          doi: "https://doi.org/10.5281/zenodo.1060777"
        },
        {
          title: "Robust minutiae watermarking in Wavelet Domain for Fingerprint Security",
          authors: "Rajlaxmi Chouhan, Agya Mishra, Pritee Khanna",
          journal: "World Academy of Science, Engineering and Technology",
          volume: "60",
          issue: "N/A",
          pages: "1612-1619",
          publisher: "N/A",
          doi: "N/A"
        },
        {
          title: "Palmprint Recognition by Wavelet Transform with Competitive Index and PCA",
          authors: "Deepti Tamrakar, Pritee Khanna",
          journal: "World Academy of Science, Engineering and Technology",
          volume: "60",
          issue: "N/A",
          pages: "1581-1585",
          publisher: "N/A",
          doi: "https://doi.org/10.5281/zenodo.1060777"
        },
        {
          title: "Robust minutiae watermarking in Wavelet Domain for Fingerprint Security",
          authors: "Rajlaxmi Chouhan, Agya Mishra, Pritee Khanna",
          journal: "World Academy of Science, Engineering and Technology",
          volume: "60",
          issue: "N/A",
          pages: "1612-1619",
          publisher: "N/A",
          doi: "N/A"
        }
        
        
      ],
      conferences: [
        {
          title: "Minutiae from Bit-Plane Sliced Thermal Images for Human Face Recognition",
          author: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          conference: "International Conference on Soft Computing for Problem Solving",
          year: 2011,
          location: "IIT Roorkee, December 20-22",
          doi: "https://doi.org/10.1007/978-81-322-0491-6_11"
        },
        {
          title: "Minutiae Based Thermal Face Recognition Using Blood Perfusion Data",
          author: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          conference: "IEEE International Conference on Image Information Processing",
          year: 2011,
          location: "Jaypee University of Information Technology, India, November 3-5",
          doi: "https://doi.org/978-1-61284-861-7/11"
        },
        {
          title: "Gender Recognition Using Wavelet Decomposition with Two-Way 2DPCA and SVM",
          author: "Preeti Rai, Pritee Khanna",
          conference: "International Conference on Advances in Modeling, Optimization and Computation (AMOC-2011)",
          year: 2011,
          location: "Roorkee, India, December 5-7"
        },
        {
          title: "Palmprint Verification Using Competitive Index with PCA",
          author: "Deepti Tamrakar, Pritee Khanna",
          conference: "Int. Conference on Signal Processing, Communication, Computing and Networking Technologies (ICSCCN-2011)",
          year: 2011,
          location: "Tamil Nadu, India, July 21-22",
          doi: "https://doi.org/10.1109/ICSCCN.2011.6024654"
        },
        {
          title: "Wavelet-Based Robust Digital Watermarking Scheme for Fingerprint Authentication",
          author: "Rajlaxmi Chouhan, Agya Mishra, Pritee Khanna",
          conference: "International Conference on Intelligent Computational Systems (ICICS 2011)",
          year: 2011,
          location: "Thailand, July 8-9"
        },
        {
          title: "Performance Evaluation of Micro-CT X-ray Scanner Using Kanpur Theorems",
          author: "Manish Bajpai, P Gupta, P Munshi, V Titarenko, P J Withers",
          conference: "International Workshop on Smart Materials & Structures in Aerospace and NDT",
          year: 2011,
          location: "Canada, November 2-4"
        },
        {
          title: "SSLLE: Semi-Supervised Locally Linear Embedding Based Localization Method for Indoor Wireless Networks",
          author: "Jain, V.K., Tapaswi, S., Shukla A.",
          conference: "International Conference on Neural Computation Theory and Application IJCCI (NCTA)",
          year: 2011,
          location: "Paris, France, October 24-26",
          doi: "https://dblp.org/rec/bib/conf/ijcci/JainTS11"
        },
        {
          title: "Gender Recognition Using Wavelet Decomposition with Two-Way 2DPCA and SVM",
          author: "Preeti Rai, Pritee Khanna",
          conference: "International Conference on Advances in Modeling, Optimization and Computation (AMOC-2011)",
          year: 2011,
          location: "Roorkee, India, December 5-7"
        },
        {
          title: "Palmprint Verification using Competitive Index with PCA",
          author: "Deepti Tamrakar, Pritee Khanna",
          conference: "Int. Conference on Signal Processing, Communication, Computing and Networking Technologies (ICSCCN-2011)",
          year: 2011,
          location: "Tamil Nadu, India",
          doi: "http://dx.doi.org/10.1109/ICSCCN.2011.6024654"
        },
        {
          title: "Wavelet-based Robust Digital Watermarking Scheme for Fingerprint Authentication",
          author: "Rajlaxmi Chouhan, Agya Mishra, Pritee Khanna",
          conference: "International Conference on Intelligent Computational Systems (ICICS 2011)",
          year: 2011,
          location: "Thailand"
        },
        {
          title: "SSLLE: Semi-supervised Locally Linear Embedding based Localization method for Indoor Wireless Networks",
          author: "Jain, V.K., Tapaswi, S., Shukla A.",
          conference: "International Conference on Neural Computation Theory and Application IJCCI (NCTA)",
          year: 2011,
          location: "Paris (France)",
          doi: "http://dx.doi.org/https://dblp.org/rec/bib/conf/ijcci/JainTS11"
        },
        {
          title: "Minutiae from bit-plane sliced thermal images for Human Face Recognition",
          author: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          conference: "International Conference on Soft Computing for Problem Solving",
          year: 2011,
          location: "IIT Roorkee",
          doi: "http://dx.doi.org/10.1007/978-81-322-0491-6_11"
        },
        {
          title: "Minutiae Based Thermal Face Recognition using Blood Perfusion data",
          author: "Ayan Seal, Debotosh Bhattacharjee, Mita Nasipuri, Dipak Kumar Basu",
          conference: "IEEE International Conference on Image Information Processing",
          year: 2011,
          location: "Jaypee University of Information Technology, India",
          doi: "http://dx.doi.org/978-1-61284-861-7/11"
        },
        {
          title: "Performance Evaluation of Micro-CT X-ray scanner using Kanpur Theorems",
          author: "Manish Bajpai, P Gupta, P Munshi, V Titarenko, P J Withers",
          conference: "International Workshop on Smart Materials & Structures in Aerospace and NDT",
          year: 2011,
          location: "Canada"
        },
        {
          title: "An aspect oriented model of efficient and secure card-based payment system",
          author: "Divya Prakash Nigam, Aparajita Ojha",
          conference: "Proceedings of the 2011 International Conference on Communication, Computing & Security",
          year: 2011,
          doi: "http://dx.doi.org/10.1145/1947940.1948056"
        }
        

        
      ],
    },
  
    2010: {
      journals: [
        {
          title: "Performance Analysis of Optimum Interleaver based on Prime Numbers for Multiuser Iterative IDMA Systems",
          authors: "Manoj K Shukla, Ruchir Gupta",
          journal: "International Journal of Interdisciplinary Telecommunications and Networking (IJITN)",
          volume: "2",
          issue: "3",
          pages: "51-65",
          publisher: "IGI",
          doi: "https://doi.org/10.4018/jitn.2010070103"
        },
        
        {
          title: "Multi-Agent Feature based Shape Grammar Implementation for Concept Generation of Industrial Product Design",
          authors: "S. Soni, P. Khanna, P. Tandon",
          journal: "Computer-Aided Design & Applications",
          volume: "7",
          issue: "6",
          pages: "797-807",
          publisher: "N/A",
          doi: "https://doi.org/10.3722/cadaps.2010.797-807"
        },
        
        {
          title: "Multi-Agent Feature based Shape Grammar Implementation for Concept Generation of Industrial Product Design",
          authors: "S. Soni, P. Khanna, P. Tandon",
          journal: "Computer-Aided Design & Applications",
          volume: "7",
          issue: "6",
          pages: "797-807",
          publisher: "N/A",
          doi: "https://doi.org/10.3722/cadaps.2010.797-807"
        },
        
        {
          title: "Fuzzy K-mean Clustering Via J48 For Intrusion Detection System",
          authors: "Kusum Bharti, Shweta Jain, Sanyam Shukla",
          journal: "International Journal of Computer Science and Information Technologies",
          volume: "1",
          issue: "4",
          pages: "315-318",
          publisher: "N/A",
          doi: "N/A"
        },
        
        {
          title: "I/O Efficient Algorithms for Matrix Computations",
          authors: "Sraban Kumar Mohanty",
          journal: "arXiv preprint",
          volume: "N/A",
          issue: "N/A",
          pages: "N/A",
          publisher: "N/A",
          doi: "https://doi.org/10.48550/arXiv.1006.1307"
        },
        
        
      ],
      conferences: [
        {
          title: "Gender Classification using Radon and Wavelet Transforms",
          author: "Preeti Rai, Pritee Khanna",
          conference: "International Conference on Industrial Information Systems (ICIIS 2010)",
          year: 2010,
          doi: "http://dx.doi.org/10.1109/ICIINFS.2010.5578661"
        },
        {
          title: "Analysis of Palmprint Verification using Wavelet filter and Competitive Code",
          author: "Deepti Tamrakar, Pritee Khanna",
          conference: "International Conference on Computational Intelligence and Communication Networks (CICN 2010)",
          year: 2010,
          doi: "http://dx.doi.org/10.1109/CICN.2010.15"
        },
        {
          title: "Distributed Growing Radial Basis Function Neural Networks for Location Estimation in Indoor Wireless Networks",
          author: "Jain, V.K., Tapaswi, S., Shukla, A.",
          conference: "6th International Conference on Wireless Communications Networking and Mobile Computing (WiCOM)",
          year: 2010,
          location: "Chengdu, China",
          doi: "http://dx.doi.org/10.1109/WICOM.2010.5601059"
        }
        
      ],
    },
    2008: {
      journals: [
        {
          title: "An approach for experimentally evaluating effectiveness and efficiency of coverage criteria for software testing",
          authors: "Atul Gupta, Pankaj Jalote",
          journal: "International Journal on Software Tools for Technology Transfer",
          volume: "10",
          issue: "N/A",
          pages: "145-160",
          publisher: "N/A",
          doi: "https://doi.org/10.1007/s10009-007-0059-5"
        }
        
        
      ],
      conferences: [
       
      ],
    },
    // Add other years' data here
  };

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setExpanded(null); // Close the dropdown when a year is selected
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Publications</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Year</Text>
          <TouchableOpacity onPress={() => handlePress(0)} style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>{selectedYear}</Text>
            <Icon name={expanded === 0 ? 'chevron-up' : 'chevron-down'} size={20} color="#004d40" />
          </TouchableOpacity>
          {expanded === 0 && (
            <View style={styles.dropdownContent}>
              {years.map((year) => (
                <TouchableOpacity key={year} onPress={() => handleYearSelect(year)} style={styles.yearItem}>
                  <Text style={styles.yearText}>{year}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Journals ({selectedYear})</Text>
          {publications[selectedYear]?.journals.map((journal, index) => (
            <View key={index} style={styles.publicationItem}>
              <Text style={styles.publicationTitle}>{journal.title}</Text>
              <Text style={styles.publicationAuthors}>Authors: {journal.authors}</Text>
              <Text style={styles.publicationDetail}>Journal: {journal.journal}</Text>
              <Text style={styles.publicationDetail}>Volume: {journal.volume}</Text>
              <Text style={styles.publicationDetail}>doi: <Text style={styles.doiLink} onPress={() => handleLinkPress(journal.doi)}>{journal.doi}</Text></Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conferences ({selectedYear})</Text>
          {publications[selectedYear]?.conferences.map((conf, index) => (
            <View key={index} style={styles.publicationItem}>
              <Text style={styles.publicationTitle}>{conf.title}</Text>
              <Text style={styles.publicationAuthors}>Authors: {conf.authors}</Text>
              <Text style={styles.publicationDetail}>Conference: {conf.conference}</Text>
              <Text style={styles.publicationDetail}>Year: {conf.year}</Text>
              <Text style={styles.publicationDetail}>Pages: {conf.pages}</Text>
              <Text style={styles.publicationDetail}>Publisher: {conf.publisher}</Text>
              <Text style={styles.publicationDetail}>Location: {conf.location}</Text>
              <Text style={styles.publicationDetail}>doi: <Text style={styles.doiLink} onPress={() => handleLinkPress(conf.doi)}>{conf.doi}</Text></Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff', // Matching Programs header background
    paddingVertical: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004d40',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
    marginRight: 10,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d40',
  },
  dropdownContent: {
    paddingVertical: 10,
    backgroundColor: '#e0f2f1',
    borderRadius: 5,
    marginRight: 10,
  },
  yearItem: {
    padding: 10,
  },
  yearText: {
    fontSize: 16,
    color: '#004d40',
  },
  publicationItem: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    elevation: 3,
    marginRight: 10,
  },
  publicationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  publicationAuthors: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  publicationDetail: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  doiLink: {
    color: '#00796b',
  },
});

export default Publications;