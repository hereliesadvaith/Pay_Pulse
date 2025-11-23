pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        echo 'Started Test 1'
      }
    }

    stage('Run') {
      steps {
        sh 'docker image ls'
      }
    }

  }
}