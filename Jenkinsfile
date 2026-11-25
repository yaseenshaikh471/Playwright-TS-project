pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
    CI = 'true'
    npm_config_cache = "${WORKSPACE}/.npm-cache"
}

    stages {
        stage('Check tools') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'git --version'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install chromium'
            }
        }

        stage('Run Playwright tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-results/**, test-results/**',
                             allowEmptyArchive: true
        }
    }
}