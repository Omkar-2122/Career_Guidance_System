from typing import Dict, List
import json

class CareerService:
    def __init__(self):
        self.career_paths = {
            "backend": {
                "title": "Backend Developer",
                "description": "Backend Developers build and maintain the server-side of web applications.",
                "key_skills": ["Python/Node.js/Java", "Databases", "API Design", "Server Architecture", "Security"],
                "roadmap": [
                    {
                        "phase": "Fundamentals",
                        "steps": [
                            "Learn a backend language (Python/Node.js/Java)",
                            "Understanding of HTTP and Web protocols",
                            "Basic command line and Git",
                            "Database fundamentals (SQL and NoSQL)"
                        ]
                    },
                    {
                        "phase": "Advanced Concepts",
                        "steps": [
                            "API Design and REST principles",
                            "Authentication and Authorization",
                            "Database design and optimization",
                            "Caching strategies"
                        ]
                    },
                    {
                        "phase": "Professional Skills",
                        "steps": [
                            "System design and architecture",
                            "Security best practices",
                            "Testing and debugging",
                            "Performance optimization"
                        ]
                    }
                ],
                "resources": [
                    {"name": "Python Documentation", "url": "https://docs.python.org"},
                    {"name": "Node.js Documentation", "url": "https://nodejs.org/docs"},
                    {"name": "Database University", "url": "https://university.mongodb.com"}
                ]
            },
            "frontend": {
                "title": "Frontend Developer",
                "description": "Frontend Developers create user interfaces and experiences for web applications.",
                "key_skills": ["HTML/CSS", "JavaScript", "React/Angular/Vue", "UI/UX", "Responsive Design"],
                "roadmap": [
                    {
                        "phase": "Fundamentals",
                        "steps": [
                            "Master HTML and CSS",
                            "JavaScript fundamentals",
                            "Responsive design principles",
                            "Version control with Git"
                        ]
                    },
                    {
                        "phase": "Framework Mastery",
                        "steps": [
                            "Learn a modern framework (React/Angular/Vue)",
                            "State management",
                            "Component architecture",
                            "API integration"
                        ]
                    },
                    {
                        "phase": "Advanced Skills",
                        "steps": [
                            "Performance optimization",
                            "Testing and debugging",
                            "Build tools and bundlers",
                            "Progressive Web Apps"
                        ]
                    }
                ],
                "resources": [
                    {"name": "MDN Web Docs", "url": "https://developer.mozilla.org"},
                    {"name": "React Documentation", "url": "https://reactjs.org"},
                    {"name": "Frontend Masters", "url": "https://frontendmasters.com"}
                ]
            }
        }

    def analyze_career_path(self, user_data: Dict) -> Dict:
        # Analyze user skills and preferences
        skills = user_data.get('skills', [])
        interests = user_data.get('interests', [])
        
        # Simple matching algorithm
        matches = {}
        for path, details in self.career_paths.items():
            score = self._calculate_match_score(skills, interests, details)
            matches[path] = score
        
        # Get best match
        best_match = max(matches.items(), key=lambda x: x[1])
        recommended_path = self.career_paths[best_match[0]]
        
        return {
            "recommended_path": recommended_path["title"],
            "confidence_score": best_match[1],
            "description": recommended_path["description"],
            "key_skills": recommended_path["key_skills"]
        }

    def get_learning_roadmap(self, career_path: str) -> Dict:
        path_details = self.career_paths.get(career_path.lower())
        if not path_details:
            return {"error": "Career path not found"}
            
        return {
            "title": path_details["title"],
            "roadmap": path_details["roadmap"],
            "resources": path_details["resources"]
        }

    def _calculate_match_score(self, user_skills: List, user_interests: List, path_details: Dict) -> float:
        # Simple scoring algorithm
        score = 0
        path_skills = path_details["key_skills"]
        
        # Skills match
        for skill in user_skills:
            if any(skill.lower() in ps.lower() for ps in path_skills):
                score += 0.3
                
        # Interest match
        relevant_keywords = path_skills + [path_details["title"]]
        for interest in user_interests:
            if any(interest.lower() in kw.lower() for kw in relevant_keywords):
                score += 0.2
                
        return min(score, 1.0)  # Normalize score to max 1.0