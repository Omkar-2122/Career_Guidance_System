from flask import Flask, request, jsonify
from flask_cors import CORS
from services.career_service import CareerService
from services.analysis_service import AnalysisService
from routes.expert_routes import expert_bp
from routes.community_routes import community_bp
from routes.career_routes import career_bp

app = Flask(__name__)
CORS(app)

career_service = CareerService()
analysis_service = AnalysisService()

@app.route('/analysis/career-recommendation', methods=['POST'])
def get_career_recommendation():
    data = request.get_json()
    return jsonify(analysis_service.analyze_career_path(data))

@app.route('/analysis/skill-analysis', methods=['POST'])
def analyze_skills():
    data = request.get_json()
    return jsonify(analysis_service.analyze_skills(data))

# Register blueprints
app.register_blueprint(expert_bp, url_prefix='/api/experts')
app.register_blueprint(community_bp, url_prefix='/api/community')

# Register blueprints
app.register_blueprint(career_bp, url_prefix='/api/career')

if __name__ == '__main__':
    app.run(port=5000, debug=True)


