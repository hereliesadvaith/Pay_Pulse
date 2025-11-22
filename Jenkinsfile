pipeline {
  agent {
    node {
      label 'node20'
    }

  }
  stages {
    stage('Test') {
      steps {
        echo 'Started Test 1'
      }
    }

    stage('build') {
      steps {
        sh 'node -v'
      }
    }

  }
}