pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:6'
    }

  }
  stages {
    stage('Buildchecking') {
      steps {
        sh 'npm install'
      }
    }
  }
}