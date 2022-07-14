pipeline {
    agent any

    environment {
        GIT_CREDENTIAL = 'zyu_git'
    }
    
    tools {
        nodejs 'NodeJS 16.13.1'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout(
                        [$class                           : 'GitSCM',
                         branches                         : [[name: '*/main']],
                         doGenerateSubmoduleConfigurations: false,
                         extensions                       : [],
                         submoduleCfg                     : [],
                         userRemoteConfigs                : [[credentialsId: "${GIT_CREDENTIAL}", url: 'https://github.com/BeaconfireSite/bfs-components-library.git']]
                        ])
                echo 'Check out successfully!'
            }
        }
        stage('Npm Install') {
            steps {
                sh 'npm install --verbose -d --legacy-peer-deps'
                echo "Npm install successfully!"
            }
        }
        stage('Build bundle') {
            steps {
                sh 'npm run build'
                echo "Built successfully"
            }
        }
        stage('Publish Npm') {
            steps {
                withCredentials([string(credentialsId: 'npm_auto_token', variable: 'NPM_TOKEN')]) {
                    sh "echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > .npmrc"
                }
                sh 'npm whoami'
                sh 'npm publish'
                echo "Published successfully"
                sh 'rm .npmrc'   
            }
        }
    }
}