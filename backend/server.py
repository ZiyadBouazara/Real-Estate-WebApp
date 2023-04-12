from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from database import insert_user, check_user_mdp, get_user_favorites, get_immeubles, get_logements, get_users,\
    insert_favorite, delete_favorite

app = Flask(__name__)
CORS(app)


@app.route("/login", methods=["POST"])
def login():
    # Valide le mot de passe d'un utilisateur
    # Retourne : status : 200 pour un mot de passe valide
    #               ou
    #            status : 403 pour un mot de passe non valide

    if request.method == "POST":

        data = request.json

        email = data["username"]
        mdp = data["password"]

        if check_user_mdp(email, mdp):
            status = 200
<<<<<<< HEAD
        else:
=======
        else: #Si le user existe pas ou si le mdp est inexact
>>>>>>> 5a8f9f56d3f1ddf27acb4b798a888e6677e96118
            status = 403

        return status


@app.route("/users/<user_id>/favorites", methods=["GET"])
def getFavorites(user_id):
    # Fonction qui retourne les logements favoris d'un utilisateur
    # Retourne status : 200 pour un succès
    #          favoris : tuples des logements favoris
    #               ou
    #          status : 204 pour un succès, mais l'utilisateur n'a pas de logements favoris
    #          favoris : tuples des logements favoris (vide)

    if request.method == "GET":

        logements_favoris = get_user_favorites(user_id)
        if logements_favoris:
            status = 201
        else:
            status = 204
        return jsonify(logements_favoris), status


@app.route("/signin", methods=["POST"])
def signup():
    # Insère un nouvel utilisateur dans la base de données
    # Retourne status : 201 pour un succès
    if request.method == "POST":

        data = request.json

        email = data["email"]
        phone = data["phoneNumber"]
        nom = data["nom"]
        mdp = data["password"]
        age = data["age"]

        insert_user(email, phone, nom, mdp, age)

        status = 201

        return status


@app.route("/immeubles", methods=["GET"])
def getImmeubles():
    # Fonction qui retourne tous les immeubles
    # Retourne status : 200 pour un succès
    #          immeubles : tuples des immeubles
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'immeubles
    #          immeubles : tuples des immeubles (vide)
    if request.method == "GET":
        immeubles = get_immeubles()
        if immeubles:
            status = 200
        else:
            status = 204
        return jsonify(immeubles), status


@app.route("/immeubles/<immeuble_id>", methods=["GET"])
def getImmeuble(immeuble_id):
    # Fonction qui retourne le tuple d'un immeuble en fonction de son id
    # Retourne status : 200 pour un succès
    #          immeuble : tuples de l'immeuble
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'immeuble avec cet id
    #          immeuble : tuples de l'immeuble (vide)
    if request.method == "GET":
        immeuble = get_immeubles(immeuble_id)
        if immeuble:
            status = 200
        else:
            status = 204
        return jsonify(immeuble), status


@app.route("/immeubles/<immeuble_id>/logements", methods=["GET"])
def getLogements(immeuble_id):
    # Fonction qui retourne tous les logements d'un immeuble
    # Retourne status : 200 pour un succès
    #          logements : tuples des logements
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas de logements
    #          logements : tuples des logements (vide)
    if request.method == "GET":
        logements = get_logements(immeuble_id)
        if logements:
            status = 200
        else:
            status = 204
        return jsonify(logements), status


@app.route("/immeubles/$<immeuble_id>/logements/<logement_id>", methods=["GET"])
def getLogement(immeuble_id, logement_id):
    # Fonction qui retourne le tuple d'un logement en fonction de son id
    # Retourne status : 200 pour un succès
    #          logement : tuples du logement
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas de logement avec cet id
    #          logement : tuples du logement (vide)
    if request.method == "GET":
        logement = get_logements(immeuble_id, logement_id)
        if logement:
            status = 200
        else:
            status = 204
        return jsonify(logement), status


@app.route("/users", methods=["GET"])
def getUsers():
    # Fonction qui retourne tous les users
    # Retourne status : 200 pour un succès
    #          users : tuples des users
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'users
    #          users : tuples des users (vide)
    if request.method == "GET":
        users = get_users()
        if users:
            status = 200
        else:
            status = 204
        return jsonify(users), status


@app.route("/users/<userId>", methods=["GET"])
def getUser(user_id):
    # Fonction qui retourne le tuple d'un user en fonction de son id
    # Retourne status : 200 pour un succès
    #          user : tuples de l'user
    #               ou
    #          status : 204 pour un succès, mais il n'y a pas d'user avec cet id
    #          user : tuples de l'user (vide)
    if request.method == "GET":
        user = get_immeubles(user_id)
        if user:
            status = 200
        else:
            status = 204
        return jsonify(user), status


@app.route("/users/<user_id>/favorites/<logement_id>", methods=["POST"])
def addFavorite(user_id, logement_id):
    # Fonction qui insère un tuple dans la table aime
    # Retourne status : 201 pour un succès
    if request.method == "POST":

        insert_favorite(logement_id, user_id)

        status = 201

        return status


@app.route("/users/<user_id>/favorites/<logement_id>", methods=["DELETE"])
def deleteFavorite(user_id, logement_id):
    # Fonction qui retire un tuple dans la table aime
    # Retourne status : 204 pour un succès
    if request.method == "DELETE":

        delete_favorite(logement_id, user_id)

        status = 204

        return status


if __name__ == '__main__':
    app.run()
