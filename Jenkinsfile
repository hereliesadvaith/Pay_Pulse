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
        sh 'npm install && npm start'
      }
    }

  }
}