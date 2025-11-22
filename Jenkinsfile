pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        echo 'Started Test 1'
      }
    }

    stage('build') {
      steps {
        sh '/home/advaith/.nvm/versions/node/v20.17.0/bin/npm install && /home/advaith/.nvm/versions/node/v20.17.0/bin/npm start'
      }
    }

  }
}