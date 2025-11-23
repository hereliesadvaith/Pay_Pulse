pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        echo 'Started Test 1'
      }
    }

    stage('Build') {
      steps {
        sh 'docker start -a fervent_tu'
      }
    }

  }
}