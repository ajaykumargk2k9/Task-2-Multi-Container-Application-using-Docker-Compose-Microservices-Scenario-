pipeline {
    agent any

    stages {
        stage('Checkout Verification') {
            steps {
                echo 'Repository cloned successfully!'
                bat 'dir'
            }
        }

        stage('Environment') {
            steps {
                bat 'node -v'
                bat 'npm -v'
                bat 'docker --version'
            }
        }

        stage('Completed') {
            steps {
                echo 'Student Management CI Pipeline Completed'
            }
        }
    }
}