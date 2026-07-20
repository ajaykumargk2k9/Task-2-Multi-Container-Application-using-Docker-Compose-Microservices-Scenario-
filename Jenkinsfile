pipeline {
    agent any

    stages {

        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                bat 'git --version'
                bat 'node -v'
                bat 'npm -v'
                bat 'docker --version'
                bat 'docker compose version'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Cleanup Old Containers') {
            steps {
                bat 'docker compose down'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Start Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }

        stage('Verify Running Containers') {
            steps {
                bat 'docker compose ps'
            }
        }

        stage('Health Check') {
            steps {
                bat 'docker ps'
            }
        }

        stage('Show Logs') {
            steps {
                bat 'docker compose logs'
            }
        }

    }

    post {

        success {
            echo 'CI Pipeline Completed Successfully!'
        }

        failure {
            echo 'Pipeline Failed!'
        }

        always {
            echo 'Pipeline Finished'
        }

    }
}