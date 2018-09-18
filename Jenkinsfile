pipeline {
    agent {
        docker {
            image 'node:8.12.0'
            args '-p 8000:8000'
        }
    }
    stages {
        stage('Startup') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
    }
}