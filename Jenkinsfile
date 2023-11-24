pipeline {
    agent any
    environment {
        PROJECT_ID = "jenkins-gke-267"
        CLUSTER_NAME = "jenkins-gke-cluster"
        LOCATION = "us-central1"
        CREDENTIALS_ID = '73eb42fa-6eae-4eb1-8402-83948dd827f7'
    }
    stages {
        stage('pull from github repo'){
            steps{
                git branch: 'main', credentialsId: '846a8a13-2a2c-40bf-9e6d-11448617ab3c', url: 'https://github.com/narenc96/jenkins-gke.git'
            }
        }
        stage('build docker image'){
            steps{
                sh "docker build -t narenc267/buksapp-frontend:${env.BUILD_ID} ."                
            }
        }
        stage('push docker image to dockerhub'){
            steps{
                withCredentials([string(credentialsId: 'DOCKER_PASS', variable: 'docker_pass')]) {
                    sh "docker login -u narenc267 -p ${docker_pass}"
                }
                sh "docker push narenc267/buksapp-frontend:${env.BUILD_ID}"
            }
            
        }
        stage('deploy on k8 cluster'){
            steps{
                sh "sed -i.backup 's/tagversion/${env.BUILD_ID}/g' frontend-k8.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'frontend-k8.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])   
            }
        }
    }
}
