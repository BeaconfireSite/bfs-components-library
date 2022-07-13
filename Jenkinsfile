pipeline {
    agent any

    environment {
        GIT_CREDENTIAL = 'zyu_git'
    }
    
    tools {
        nodejs 'NodeJS 16.14.0'
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
                sh 'npm install --verbose -d'
                echo "Npm install successfully!"
            }
        }
        stage('Release') {
            steps {
                sh 'npm run release'
                echo "Released successfully!"
            }
        }
    }
}