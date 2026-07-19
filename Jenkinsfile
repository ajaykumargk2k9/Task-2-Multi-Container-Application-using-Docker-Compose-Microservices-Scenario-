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
                bat 'docker compose down || exit 0'
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
    }

    post {
        success {
            echo 'CI Pipeline completed successfully!'
        }

        failure {
            echo 'CI Pipeline failed.'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}