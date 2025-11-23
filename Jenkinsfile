pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t pay_pulse .'
      }
    }

    stage('Test 1') {
      parallel {
        stage('Test 1') {
          steps {
            echo 'Test 1'
          }
        }

        stage('Test 2') {
          steps {
            echo 'Test 2'
          }
        }

      }
    }

    stage('Run') {
      steps {
        sh 'docker run -d -p 5000:5000 pay_pulse:latest'
      }
    }

  }
}