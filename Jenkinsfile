pipeline {
    agent any
    environment {
        PROJECT_ID = "jenkins-gke-267"
        CLUSTER_NAME = "jenkins-gke-cluster"
        LOCATION = "us-central1-a"
        CREDENTIALS_ID = 'jenkins-gke-267'
    }
    stages {
        stage('pull from github repo'){
            steps{
                git "https://github.com/narenc96/jenkins-gke.git"
            }
        }
        stage('build docker image'){
            steps{
                sh "docker build -t narenc96/buksapp-frontend:${env.BUILD_ID} ."                
            }
        }
        stage('push docker image to dockerhub'){
            steps{
                withCredentials([string(credentialsId: 'DOCKER_PASS', variable: 'docker_pass')]) {
                    sh "docker login -u narenc267 -p ${docker_pass}"
                }
                sh "docker push narenc96/buksapp-frontend:${env.BUILD_ID}"
            }
            
        }
        stage('deploy on k8 cluster'){
            steps{
                sh "sed -i 's/tagversion/${env.BUILD_ID}/g' frontend-k8.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'frontend-k8.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])   
            }
        }
    }
}
