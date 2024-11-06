pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker-compose -f docker-compose.yml build'
      }
    }
    stage('Deploy') {
      steps {
        withCredentials([file(credentialsId: 'k8s_kubeconfig', variable: 'KUBECONFIG')]) {
        sh 'kubectl apply -f k8s/'}
      
    }
  }
}
