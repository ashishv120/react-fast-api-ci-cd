pipeline {
    agent any

    environment {
        FRONTEND_DIR = "${WORKSPACE}/frontend"
        BACKEND_DIR = "${WORKSPACE}/backend"
    }

    stages {
        stage('Clone') {
            steps {
                echo "Cloning repo..."
            }
        }

        stage('Start FastAPI') {
            steps {
                echo "Restarting FastAPI backend..."
                script {
                    // Kill existing backend
                    sh "pkill -f 'uvicorn backend.main' || true"
                    // Start new one
                    sh "sudo -u ec2-user nohup uvicorn backend.main:app --host 0.0.0.0 --port 8000 &"
                }
            }
        }

        stage('Serve Frontend') {
            steps {
                echo "Serving React frontend..."
                script {
                    // Kill old serve
                    sh "pkill -f 'serve -s' || true"
                    // Start frontend again
                    sh "cd frontend && sudo -u ec2-user nohup serve -s . -l 3000 &"
                }
            }
        }
    }
}
