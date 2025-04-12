from flask import Blueprint, request, jsonify
from services.career_service import CareerService

career_bp = Blueprint('career', __name__)
career_service = CareerService()

@career_bp.route('/analyze', methods=['POST'])
def analyze_career():
    user_data = request.get_json()
    result = career_service.analyze_career_path(user_data)
    return jsonify(result)

@career_bp.route('/roadmap/<career_path>', methods=['GET'])
def get_roadmap(career_path):
    result = career_service.get_learning_roadmap(career_path)
    return jsonify(result)

@career_bp.route('/paths', methods=['GET'])
def get_all_paths():
    return jsonify(career_service.career_paths)