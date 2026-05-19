const PROJECTS = {
  bigdata: {
    title: 'Plateforme Big Data — Hadoop + Spark + Kafka',
    category: 'Big Data · Distributed Systems',
    catColor: '#facc15',
    overview: `Environnement distribué complet conteneurisé avec Docker, permettant de travailler avec les technologies Big Data sans installation complexe. Le projet intègre Hadoop HDFS pour le stockage distribué, Apache Spark pour le traitement batch et streaming, Apache Kafka pour l'ingestion de données en temps réel, et Jupyter pour l'exploration interactive. Le cas d'usage principal est un système de recommandation de films sur le dataset MovieLens (100 000 ratings).`,
    visuals: () => [V.sparkUI(), V.recoTable()],
    steps: [
      { title: 'Conteneurisation Docker', desc: 'Un Dockerfile multi-service et un docker-compose.yml orchestrent Hadoop, Spark, Kafka, Zookeeper et Jupyter dans un réseau isolé. Un seul Makefile expose les commandes build/up/down/shell pour démarrer l\'environnement complet en une ligne.' },
      { title: 'Initialisation HDFS', desc: 'Le namenode est formaté et les services HDFS (namenode, datanode) ainsi que YARN sont démarrés. Le dataset MovieLens (ratings.csv, movies.csv) est uploadé dans le système de fichiers distribué via les commandes hdfs dfs.' },
      { title: 'Streaming Kafka', desc: 'Un topic Kafka est créé puis un producteur Python simule un flux de ratings en temps réel. Spark Structured Streaming consomme ce topic et affiche les données au fil de l\'eau dans le notebook Jupyter.' },
      { title: 'Analyse Exploratoire PySpark', desc: 'EDA complète sur les 100 000 ratings MovieLens avec PySpark : distributions des notes, top films par nombre de votes, activité par utilisateur, et films les mieux notés par genre.' },
      { title: 'Modèle ALS (Recommandation)', desc: 'Un modèle de filtrage collaboratif ALS (Alternating Least Squares) de PySpark MLlib est entraîné pour prédire les notes et générer des recommandations top-N personnalisées pour chaque utilisateur.' },
      { title: 'Évaluation & Prédictions', desc: 'Le modèle est évalué sur le jeu de test avec RMSE. Les recommandations top-10 par utilisateur sont générées et visualisées dans Jupyter. Le RMSE final est de 0,87, ce qui indique une bonne capacité de prédiction.' }
    ],
    results: [
      { val: '0.87', label: 'RMSE ALS', color: '#34d399' },
      { val: '100K+', label: 'Ratings traités', color: '#818cf8' },
      { val: '6', label: 'Services Docker', color: '#38bdf8' }
    ],
    arch: [
      { label: '🐳 Docker Compose', color: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '⚡ Hadoop HDFS', color: 'rgba(250,204,21,0.1)', border: 'rgba(250,204,21,0.4)' },
      { label: '→' },
      { label: '🔥 Spark 3.5', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' },
      { label: '→' },
      { label: '📨 Kafka', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '→' },
      { label: '📊 Jupyter', color: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.4)' }
    ]
  },

  react: {
    title: 'Dashboard React — Visualisation de Données',
    category: 'Web Application · Data Visualization',
    catColor: '#818cf8',
    overview: `Application web complète Single Page Application construite avec React 19 et Vite. Le projet implémente un dashboard de visualisation de données avec plusieurs pages animées, un panneau d'administration complet (utilisateurs et produits), des graphiques interactifs avec Recharts, une carte thermique mondiale, et une todo-list fonctionnelle. L'ensemble est stylisé avec Tailwind CSS v4 et utilise Radix UI pour les composants accessibles.`,
    visuals: () => [
      V.table(
        ['Page', 'Contenu', 'Statut'],
        [['/', 'Dashboard + Charts', '✅'], ['/about', 'Page présentation', '✅'], ['/todo', 'Todo avec localStorage', '✅'], ['/admin/users', 'Table utilisateurs + filtres', '✅'], ['/admin/products', 'CRUD produits', '✅']],
        'Routes de l\'application'
      ),
      `<div style="background:rgba(129,140,248,0.08);border:1px solid rgba(129,140,248,0.25);border-radius:10px;padding:14px;font-size:0.78rem;">
        <div style="color:#818cf8;font-weight:600;margin-bottom:10px;">📊 Dashboard — Graphiques Recharts</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <div style="background:rgba(244,114,182,0.12);border:1px solid rgba(244,114,182,0.3);border-radius:6px;padding:8px 12px;color:#f472b6;">🥧 Pie Chart<br><span style="color:#94a3b8;font-size:0.7rem;">Répartition genre</span></div>
          <div style="background:rgba(56,189,248,0.12);border:1px solid rgba(56,189,248,0.3);border-radius:6px;padding:8px 12px;color:#38bdf8;">📊 Bar Chart<br><span style="color:#94a3b8;font-size:0.7rem;">Activité mensuelle</span></div>
          <div style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);border-radius:6px;padding:8px 12px;color:#34d399;">📈 Line Chart<br><span style="color:#94a3b8;font-size:0.7rem;">Tendances</span></div>
          <div style="background:rgba(251,146,60,0.12);border:1px solid rgba(251,146,60,0.3);border-radius:6px;padding:8px 12px;color:#fb923c;">🌍 World Map<br><span style="color:#94a3b8;font-size:0.7rem;">Heatmap pays</span></div>
        </div>
      </div>`
    ],
    steps: [
      { title: 'Setup Vite + React 19', desc: 'Initialisation du projet avec Vite 7.1.7, configuration de Tailwind CSS v4, installation des dépendances : Recharts pour les graphiques, React Router DOM v7 pour le routage, Motion pour les animations, et Radix UI pour les composants accessibles.' },
      { title: 'Routing animé multi-pages', desc: 'React Router DOM v7 configure 5 routes imbriquées. Chaque transition de page est enveloppée dans AnimatePresence de Motion, qui joue une animation fade/slide lors de chaque changement de route. Le layout admin partage un Outlet commun.' },
      { title: 'Dashboard Home — Graphiques', desc: 'La page d\'accueil affiche plusieurs graphiques Recharts : un pie chart de répartition par genre, un bar chart d\'activité mensuelle, et un line chart de tendances. Les données proviennent de services mock typés TypeScript.' },
      { title: 'Carte thermique mondiale', desc: 'Un composant WorldHeatmap positionne des cercles colorés sur une carte SVG mondiale en fonction de la distribution géographique des utilisateurs. La taille des cercles est proportionnelle au nombre d\'utilisateurs par pays.' },
      { title: 'Panneau Admin', desc: 'Le layout admin inclut une sidebar de navigation et deux pages : gestion des utilisateurs (table triable et filtrable) et gestion des produits (CRUD avec dialogs Base UI). Les actions sont confirmées via des modales accessibles.' },
      { title: 'TodoList avec état persistant', desc: 'La page todo permet d\'ajouter, supprimer et marquer des tâches comme terminées. L\'état est persisté dans localStorage via un useEffect, avec des filtres (tout / actif / terminé) pour naviguer entre les tâches.' }
    ],
    results: [
      { val: '5', label: 'Pages / Routes', color: '#818cf8' },
      { val: 'React 19', label: 'Version React', color: '#f472b6' },
      { val: 'Tailwind 4', label: 'CSS Framework', color: '#34d399' }
    ],
    arch: [
      { label: '⚛️ React 19', color: 'rgba(129,140,248,0.15)', border: 'rgba(129,140,248,0.4)' },
      { label: '→' },
      { label: '🔀 React Router', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '📊 Recharts', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '+' },
      { label: '🎨 Tailwind CSS', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' },
      { label: '+' },
      { label: '✨ Motion', color: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.4)' }
    ]
  },

  happyhour: {
    title: 'HappyHour Toulouse — Pipeline Scraping & Analyse',
    category: 'Data Pipeline · Web Scraping · Automatisation',
    catColor: '#fb923c',
    overview: `Pipeline de données automatisé end-to-end pour trouver les meilleures offres Happy Hour dans les bars de Toulouse. Le système scrape SchloukMap.com, extrait les détails de chaque bar (boissons, prix HH vs standard, horaires, adresse), analyse et compare les remises, génère un classement Top 5, envoie un rapport HTML par email via SMTP, et visualise les bars sur une carte Leaflet interactive.`,
    visuals: () => [
      V.mapMockup(
        'Bars Happy Hour — Toulouse',
        [
          { x: '28%', y: '38%', color: '#34d399', label: 'Le Père Peinard -45%' },
          { x: '45%', y: '52%', color: '#fb923c', label: 'Bar Saint-Pierre -38%' },
          { x: '60%', y: '35%', color: '#818cf8', label: 'The Melting Pot -32%' },
          { x: '38%', y: '65%', color: '#f472b6', label: 'Chez Tonton -29%' },
          { x: '55%', y: '70%', color: '#38bdf8', label: 'La Tireuse -27%' }
        ],
        ['📍 5 bars sélectionnés', '🍺 Bière 25cl', '🍷 Verre de vin', '🥤 Cocktail']
      ),
      V.table(
        ['Bar', 'Boisson', 'Prix HH', 'Prix Std', 'Remise'],
        [
          ['Le Père Peinard', 'Bière 50cl', '2.50€', '4.50€', '-45% 🥇'],
          ['Bar Saint-Pierre', 'Mojito', '4.00€', '6.50€', '-38% 🥈'],
          ['The Melting Pot', 'Bière 25cl', '1.80€', '2.80€', '-32% 🥉'],
          ['Chez Tonton', 'Verre vin', '2.00€', '2.80€', '-29%'],
          ['La Tireuse', 'Bière pression', '2.20€', '3.00€', '-27%']
        ],
        'Top 5 Meilleures Remises Happy Hour'
      )
    ],
    steps: [
      { title: 'Scraping paginé des liens', desc: 'Le script parcourt toutes les pages de la liste des bars Happy Hour sur SchloukMap.com avec BeautifulSoup, en extrayant les URLs individuelles de chaque établissement. La pagination est gérée automatiquement jusqu\'à la dernière page.' },
      { title: 'Extraction des détails bar', desc: 'Pour chaque bar, le scraper récupère le nom, l\'adresse GPS, les horaires d\'ouverture, les services disponibles, et le tableau complet des boissons avec leurs prix Happy Hour et standards.' },
      { title: 'Analyse & comparaison des prix', desc: 'Les prix sont parsés depuis les chaînes HTML, le pourcentage de remise est calculé pour chaque boisson de chaque bar, puis les données sont agrégées et sauvegardées dans bars.csv pour l\'analyse Pandas.' },
      { title: 'Génération du rapport email', desc: 'Un template HTML est rempli avec les 5 meilleures offres (nom du bar, boisson, prix HH, prix standard, pourcentage de remise) et stylisé pour un rendu email propre avec des couleurs et indicateurs visuels.' },
      { title: 'Envoi SMTP automatisé', desc: 'Le rapport est envoyé par email via smtplib avec une connexion SMTP SSL sur le port 465. Le pipeline est entièrement automatisé et peut être planifié via cron pour un envoi quotidien.' },
      { title: 'Carte Leaflet interactive', desc: 'Les bars sont visualisés sur une carte interactive centrée sur Toulouse avec Leaflet.js. Chaque marqueur est coloré selon le pourcentage de remise et affiche un popup avec le détail des offres au clic.' }
    ],
    results: [
      { val: '50+', label: 'Bars scrapés', color: '#fb923c' },
      { val: '-45%', label: 'Meilleure remise', color: '#34d399' },
      { val: 'Top 5', label: 'Rapport email', color: '#818cf8' }
    ],
    arch: [
      { label: '🌐 SchloukMap', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' },
      { label: '→' },
      { label: '🕸 BeautifulSoup', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '🐼 Pandas', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '→' },
      { label: '📧 SMTP', color: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.4)' },
      { label: '+' },
      { label: '🗺 Leaflet', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' }
    ]
  },

  chatbot_w2v: {
    title: 'Chatbot Word2Vec — Similarité Sémantique',
    category: 'NLP · Embeddings · Streamlit',
    catColor: '#f472b6',
    overview: `Chatbot question-réponse basé sur des embeddings Word2Vec, déployé avec Streamlit. Le système charge le dataset Alpaca-GPT4 (52 000 paires instruction/réponse), prétraite les textes avec spaCy (lemmatisation, suppression des stopwords), entraîne un modèle Word2Vec de 300 dimensions, et répond aux questions de l'utilisateur en trouvant la question la plus similaire via la similarité cosinus. Un système de cache évite de relancer l'entraînement à chaque démarrage.`,
    visuals: () => [
      V.chat([
        { role: 'user', text: 'How do I reverse a list in Python?' },
        { role: 'bot', text: 'You can reverse a list using the reversed() built-in function or the slice notation list[::-1]. The reverse() method also works in-place. (similarité : 0.91)' },
        { role: 'user', text: 'What is the difference between a tuple and a list?' },
        { role: 'bot', text: 'Tuples are immutable sequences while lists are mutable. Tuples use parentheses () and lists use brackets []. Use tuples for fixed data and lists when you need to modify elements. (similarité : 0.88)' }
      ]),
      V.barChart('Pipeline de traitement', [
        { label: '52K paires Q/R chargées', val: 100, color: '#f472b6' },
        { label: 'Nettoyage spaCy batch', val: 85, color: '#818cf8' },
        { label: 'Entraînement Word2Vec 300d', val: 70, color: '#38bdf8' },
        { label: 'Calcul vecteurs questions', val: 55, color: '#34d399' },
        { label: 'Similarité cosinus en temps réel', val: 40, color: '#fb923c' }
      ])
    ],
    steps: [
      { title: 'Chargement dataset Alpaca-GPT4', desc: 'Le dataset vicgalle/alpaca-gpt4 est chargé depuis Hugging Face Datasets. Il contient 52 002 paires instruction/réponse générées par GPT-4 au format Alpaca, couvrant des sujets variés (code, culture générale, raisonnement, créativité).' },
      { title: 'Prétraitement spaCy (batch)', desc: 'Les 52 000 questions et réponses sont lemmatisées et débarrassées de leurs stopwords et ponctuations via spaCy en mode batch (nlp.pipe), ce qui optimise significativement les performances par rapport au traitement document par document.' },
      { title: 'Entraînement Word2Vec', desc: 'Un modèle Word2Vec Gensim est entraîné sur le corpus nettoyé (questions + réponses). Les vecteurs ont 300 dimensions, une fenêtre de contexte de 5 tokens, et un minimum de 2 occurrences par mot. Le modèle est sérialisé en pickle pour éviter de réentraîner.' },
      { title: 'Calcul des embeddings questions', desc: 'Chaque question du dataset est convertie en vecteur de 300 dimensions en moyennant les vecteurs Word2Vec de ses tokens. Ce calcul est effectué une seule fois au démarrage et stocké dans st.session_state.' },
      { title: 'Recherche par similarité cosinus', desc: 'Pour chaque question utilisateur, le système calcule sa similarité cosinus avec tous les vecteurs de questions du dataset et retourne la réponse associée à la question la plus proche sémantiquement.' },
      { title: 'Interface Streamlit', desc: 'L\'interface Streamlit affiche un historique conversationnel complet via st.session_state, avec le score de similarité affiché pour chaque réponse. L\'envoi déclenche un st.rerun() pour actualiser l\'affichage.' }
    ],
    results: [
      { val: '52K', label: 'Paires Q/R', color: '#f472b6' },
      { val: '300d', label: 'Vecteurs Word2Vec', color: '#818cf8' },
      { val: '0.89', label: 'Similarité moyenne', color: '#34d399' }
    ],
    arch: [
      { label: '🤗 Alpaca-GPT4', color: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.4)' },
      { label: '→' },
      { label: '🔤 spaCy', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '📐 Word2Vec', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' },
      { label: '→' },
      { label: '📏 Cosine Sim', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '→' },
      { label: '🌐 Streamlit', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' }
    ]
  },

  chatbot_mongo: {
    title: 'Chatbot Produits — NLP Français + MongoDB',
    category: 'NLP · MongoDB · Fuzzy Matching',
    catColor: '#34d399',
    overview: `Chatbot en ligne de commande permettant d'interroger une base MongoDB de produits en langage naturel français. Le système combine spaCy (modèle fr_core_news_sm) pour détecter l'intention de la requête, une normalisation avancée du texte (accents, pluriels, caractères spéciaux), et RapidFuzz pour la correspondance approximative entre le texte utilisateur et les noms de produits — gérant ainsi les fautes de frappe et variations orthographiques.`,
    visuals: () => [
      V.chat([
        { role: 'user', text: 'Combien coûte le MacBook Pro ?' },
        { role: 'bot', text: 'Produit : MacBook Pro\nPrix : 1 999€' },
        { role: 'user', text: 'Donne moi les détails sur le casque sony' },
        { role: 'bot', text: 'Produit : Sony WH-1000XM5\nDescription : Casque Bluetooth à réduction de bruit active, 30h d\'autonomie, pliable.' },
        { role: 'user', text: 'Quelle catégorie pour le iphone ?' },
        { role: 'bot', text: 'Produit : iPhone 15 Pro\nCatégorie : Smartphones' }
      ]),
      V.table(
        ['Requête utilisateur', 'Nom produit', 'Score fuzzy', 'Résultat'],
        [
          ['"ordinatuer"', 'Ordinateur HP', '93%', '✅ Trouvé'],
          ['"macbok"', 'MacBook Pro', '86%', '✅ Trouvé'],
          ['"sony casque"', 'Sony WH-1000XM5', '81%', '✅ Trouvé'],
          ['"xyz123"', '—', '<80%', '❌ Non trouvé']
        ],
        'Exemples de correspondance floue RapidFuzz'
      )
    ],
    steps: [
      { title: 'Connexion MongoDB & chargement', desc: 'Connexion à MongoDB via pymongo sur le port 27017. L\'ensemble des produits (nom, prix, description, catégorie) est chargé en mémoire au démarrage depuis la collection "produits" de la base "Partiel", pour éviter des requêtes répétées.' },
      { title: 'Normalisation du texte', desc: 'Un pipeline de normalisation traite chaque texte : mise en minuscules, décomposition Unicode NFD pour supprimer les accents, suppression des caractères spéciaux, normalisation des espaces multiples, et suppression des pluriels en "s" finaux.' },
      { title: 'Détection d\'intention spaCy', desc: 'Le modèle français fr_core_news_sm analyse morphologiquement la question pour identifier l\'intention : "prix" (mots-clés : combien, tarif, coût), "description" (détails, caractéristiques), "catégorie" (type, genre), ou "tout" par défaut.' },
      { title: 'Recherche exacte', desc: 'Première tentative : vérification si le nom normalisé d\'un produit est contenu directement dans la question normalisée. Si une correspondance exacte est trouvée, la réponse est immédiatement retournée.' },
      { title: 'Correspondance floue RapidFuzz', desc: 'Si aucune correspondance exacte : comparaison token par token entre la question et les noms de produits via RapidFuzz avec un seuil de similarité configurable à 80%. Cela gère les fautes de frappe comme "macbok" → "MacBook" (score 86%).' },
      { title: 'Affichage formaté de la réponse', desc: 'Selon l\'intention détectée (prix / description / catégorie / tout), seul le champ pertinent est affiché pour chaque produit trouvé. Si aucun produit ne correspond, un message informatif est retourné.' }
    ],
    results: [
      { val: '≥80%', label: 'Seuil fuzzy match', color: '#34d399' },
      { val: '3', label: 'Types d\'intention', color: '#f472b6' },
      { val: 'MongoDB', label: 'Base de données', color: '#47a248' }
    ],
    arch: [
      { label: '💬 Question FR', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '→' },
      { label: '🔤 Normalisation', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '🧠 spaCy Intent', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' },
      { label: '→' },
      { label: '🔍 RapidFuzz', color: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.4)' },
      { label: '→' },
      { label: '🍃 MongoDB', color: 'rgba(71,162,72,0.2)', border: 'rgba(71,162,72,0.5)' }
    ]
  },

  timeseries: {
    title: 'Modélisation Séries Temporelles — ARIMA/SARIMA',
    category: 'Séries Temporelles · Statistiques · Prévision',
    catColor: '#38bdf8',
    overview: `Analyse et modélisation complète de séries temporelles sur plusieurs datasets réels : taux de chômage américain, passagers aériens AirPassengers, shampooing, et demande de vélos Nexa Bike Sharing. Le pipeline couvre l'analyse visuelle, les tests de stationnarité, la décomposition saisonnière, la sélection de paramètres, l'entraînement ARIMA/SARIMA, et la prévision avec intervalles de confiance.`,
    visuals: () => [V.tsSvg(), V.barChart('Métriques par dataset', [
      { label: 'AirPassengers — R²', val: 94, color: '#38bdf8' },
      { label: 'Bike Sharing — R²', val: 89, color: '#818cf8' },
      { label: 'Chômage US — R²', val: 91, color: '#34d399' },
      { label: 'Shampooing — R²', val: 87, color: '#f472b6' }
    ])],
    steps: [
      { title: 'Analyse visuelle & décomposition', desc: 'La série brute est visualisée pour identifier tendances et saisonnalités. Une décomposition STL (Seasonal and Trend decomposition using Loess) isole les trois composantes : tendance, saisonnalité et résidus.' },
      { title: 'Tests de stationnarité', desc: 'Le test ADF (Augmented Dickey-Fuller) vérifie la stationnarité de la série (p-value < 0.05). Un test de Shapiro-Wilk est appliqué aux résidus, et les outliers sont détectés par la méthode IQR.' },
      { title: 'Différenciation pour stationnarité', desc: 'Si la série n\'est pas stationnaire, une différenciation d\'ordre 1 (et/ou saisonnière) est appliquée jusqu\'à atteindre la stationnarité. L\'ordre de différenciation détermine le paramètre d du modèle ARIMA.' },
      { title: 'Sélection des paramètres (ACF/PACF)', desc: 'Les graphiques d\'autocorrélation (ACF) et autocorrélation partielle (PACF) permettent de déterminer visuellement les ordres p, q, P et Q. Une sélection automatique via pmdarima (auto_arima) valide le choix.' },
      { title: 'Entraînement SARIMA', desc: 'Le modèle SARIMA est entraîné avec les paramètres sélectionnés sur le jeu d\'entraînement (80%). Le résumé du modèle inclut AIC, BIC et les coefficients de chaque terme autorégressif.' },
      { title: 'Prévision avec intervalles de confiance', desc: 'Les prévisions sur le jeu de test incluent des intervalles de confiance à 95%. Les métriques finales (RMSE, MAE, R²) sont calculées pour évaluer la précision du modèle sur des données inédites.' }
    ],
    results: [
      { val: '0.94', label: 'R² SARIMA', color: '#38bdf8' },
      { val: '4', label: 'Datasets analysés', color: '#818cf8' },
      { val: '95%', label: 'Intervalles confiance', color: '#fb923c' }
    ],
    arch: [
      { label: '📈 Série brute', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '🔬 Tests ADF/STL', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' },
      { label: '→' },
      { label: '📊 ACF/PACF', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '→' },
      { label: '⚙️ SARIMA fit', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' },
      { label: '→' },
      { label: '🔮 Prévision', color: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.4)' }
    ]
  },

  ml: {
    title: 'ML Classification & Régression — Scikit-learn',
    category: 'Machine Learning · Scikit-learn · Kaggle',
    catColor: '#34d399',
    overview: `Pipeline de Machine Learning complet couvrant deux types de problèmes : classification multiclasse (prédiction du niveau d'obésité d'un patient) et régression (prédiction de prix immobiliers sur les datasets Boston et Ames). Le projet met en œuvre les bonnes pratiques ML : preprocessing robuste, gestion du déséquilibre de classes avec SMOTE, comparaison systématique de modèles, validation croisée et optimisation d'hyperparamètres. Participation à un challenge Kaggle de livraison.`,
    visuals: () => [V.confMatrix(), V.barChart('Comparaison des modèles (F1-score)', [
      { label: 'Random Forest', val: 96, color: '#34d399' },
      { label: 'XGBoost', val: 94, color: '#818cf8' },
      { label: 'SVM', val: 91, color: '#38bdf8' },
      { label: 'Logistic Regression', val: 84, color: '#fb923c' }
    ])],
    steps: [
      { title: 'Analyse exploratoire (EDA)', desc: 'Statistiques descriptives, analyse des distributions de chaque feature, détection et traitement des valeurs manquantes, corrélations entre features et target visualisées sous forme de heatmap Seaborn.' },
      { title: 'Feature Engineering & Preprocessing', desc: 'Les variables catégorielles sont encodées (LabelEncoder ou OneHotEncoder selon leur cardinalité), les features numériques sont normalisées (StandardScaler), et l\'ensemble est encapsulé dans un Pipeline scikit-learn reproductible.' },
      { title: 'Gestion du déséquilibre — SMOTE', desc: 'Certaines classes d\'obésité étant sous-représentées, SMOTE (Synthetic Minority Over-sampling Technique) est appliqué pour générer synthétiquement des exemples minoritaires et équilibrer le jeu d\'entraînement.' },
      { title: 'Comparaison de modèles', desc: 'Quatre algorithmes sont entraînés et évalués par validation croisée 5-fold : Logistic Regression (baseline), Random Forest, SVM et XGBoost. Les métriques comparées sont l\'accuracy, le F1-score macro et l\'AUC-ROC.' },
      { title: 'Optimisation GridSearchCV', desc: 'Le meilleur modèle (Random Forest) est optimisé par GridSearchCV sur ses principaux hyperparamètres (n_estimators, max_depth, min_samples_split) avec une validation croisée 5-fold et le F1-macro comme critère.' },
      { title: 'Évaluation finale & rapport', desc: 'Le modèle optimal est évalué sur le jeu de test : matrice de confusion, rapport de classification complet (précision, rappel, F1 par classe), courbe ROC, et graphique d\'importance des features.' }
    ],
    results: [
      { val: '96.1%', label: 'Accuracy', color: '#34d399' },
      { val: '0.958', label: 'F1-Score macro', color: '#818cf8' },
      { val: '0.97', label: 'AUC-ROC', color: '#38bdf8' }
    ],
    arch: [
      { label: '📋 Dataset', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '→' },
      { label: '🔧 Preprocessing', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '⚖️ SMOTE', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' },
      { label: '→' },
      { label: '🤖 GridSearchCV', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' },
      { label: '→' },
      { label: '📊 Évaluation', color: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.4)' }
    ]
  },

  azure: {
    title: 'Infrastructure Cloud Azure — Blob Storage & VMs',
    category: 'Cloud · Microsoft Azure · C# .NET 8',
    catColor: '#60a5fa',
    overview: `Mise en place d'une infrastructure cloud complète sur Microsoft Azure dans le cadre de la préparation à la certification AZ-204. Le projet couvre la création et gestion programmatique de ressources Azure Blob Storage via le SDK .NET 8 en C#, le déploiement de machines virtuelles Windows/Linux, la configuration de réseaux virtuels (VNET), et la gestion des identités et accès (IAM).`,
    visuals: () => [
      V.terminal([
        '$ az group create --name rg-projet --location westeurope',
        '{ "id": "/subscriptions/.../resourceGroups/rg-projet", "location": "westeurope", "provisioningState": "Succeeded" }',
        '$ az storage account create --name storageprojeta204 --resource-group rg-projet',
        'Storage account created: storageprojeta204.blob.core.windows.net ✓',
        '$ dotnet run -- upload ./data/dataset.csv',
        'Connecting to Azure Blob Storage...',
        'Container "az204-container" created ✓',
        'Uploading dataset.csv (2.3 MB)...',
        'Upload complete ✓  |  Blob URI: https://storageprojeta204.blob.core.windows.net/az204-container/dataset.csv',
        '$ az vm create --name vm-data --image Ubuntu2204 --size Standard_B2s',
        'VM "vm-data" created successfully ✓  |  Public IP: 20.86.143.12'
      ]),
      V.table(
        ['Ressource', 'Type', 'Statut'],
        [
          ['rg-projet', 'Resource Group', '✅ Actif'],
          ['storageprojeta204', 'Blob Storage', '✅ Actif'],
          ['az204-container', 'Container (Private)', '✅ Actif'],
          ['vm-data', 'VM Ubuntu 22.04 B2s', '✅ Running'],
          ['vnet-projet', 'Virtual Network', '✅ Actif'],
          ['Managed Identity', 'IAM / RBAC', '✅ Configuré']
        ],
        'Ressources Azure déployées'
      )
    ],
    steps: [
      { title: 'Configuration Azure & abonnement', desc: 'Création d\'un compte Azure Student, configuration de l\'Azure CLI, création d\'un Resource Group dédié dans la région West Europe, et attribution des rôles RBAC (Storage Blob Data Contributor) nécessaires au projet.' },
      { title: 'Projet C# .NET 8', desc: 'Initialisation d\'un projet .NET 8 Console, ajout des packages NuGet du SDK Azure (Azure.Storage.Blobs, Azure.Core) et configuration de la chaîne de connexion via variables d\'environnement pour ne pas exposer les secrets.' },
      { title: 'Création du conteneur Blob', desc: 'Connexion au compte de stockage via BlobServiceClient, création d\'un conteneur avec niveau d\'accès Private (accès uniquement via clé ou token SAS), et gestion des exceptions avec retries automatiques.' },
      { title: 'Upload / Download de fichiers', desc: 'Opérations CRUD complètes sur les blobs : upload de fichiers locaux avec overwrite, listing du contenu d\'un conteneur, téléchargement vers un chemin local, et suppression. Le streaming est utilisé pour les fichiers volumineux.' },
      { title: 'Déploiement VM Azure', desc: 'Création d\'une machine virtuelle Ubuntu via l\'Azure CLI, configuration du réseau virtuel (VNET) et sous-réseau, groupe de sécurité réseau (NSG) avec règles d\'accès SSH uniquement, et IP publique.' },
      { title: 'Gestion IAM & Sécurité', desc: 'Authentification sans mot de passe via Managed Identity (DefaultAzureCredential) au lieu d\'une chaîne de connexion, rotation des clés de compte, activation du chiffrement au repos, et configuration des règles pare-feu du compte de stockage.' }
    ],
    results: [
      { val: 'AZ-204', label: 'Certif. visée', color: '#0078d4' },
      { val: 'C# .NET 8', label: 'Langage', color: '#60a5fa' },
      { val: 'RBAC', label: 'Sécurité IAM', color: '#34d399' }
    ],
    arch: [
      { label: '💻 C# .NET 8', color: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.4)' },
      { label: '→' },
      { label: '📦 Blob Storage', color: 'rgba(0,120,212,0.2)', border: 'rgba(0,120,212,0.5)' },
      { label: '+' },
      { label: '🖥 Azure VM', color: 'rgba(0,164,239,0.15)', border: 'rgba(0,164,239,0.4)' },
      { label: '+' },
      { label: '🌐 VNET', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '+' },
      { label: '🔒 IAM/RBAC', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' }
    ]
  },

  aws: {
    title: 'Infrastructure Data AWS — RDS, Glue & S3',
    category: 'Cloud · AWS · ETL · Data Lake',
    catColor: '#ff9900',
    overview: `Déploiement d'une infrastructure data complète sur Amazon Web Services. Le projet implémente un pipeline ETL serverless : ingestion de données brutes dans S3, catalogage automatique avec AWS Glue Crawler, transformation et nettoyage via des jobs Glue (PySpark), et stockage final dans une base PostgreSQL managée (RDS). L'ensemble est sécurisé avec des VPC, security groups et rôles IAM.`,
    visuals: () => [
      `<div style="background:rgba(255,153,0,0.06);border:1px solid rgba(255,153,0,0.3);border-radius:10px;padding:14px;font-size:0.78rem;">
        <div style="color:#ff9900;font-weight:600;margin-bottom:12px;">☁️ Pipeline Data AWS — Vue d'ensemble</div>
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <div style="background:rgba(255,153,0,0.12);border:1px solid rgba(255,153,0,0.4);border-radius:6px;padding:8px 12px;text-align:center;">
            <div style="font-size:1.2rem;">📂</div><div style="color:#ff9900;font-weight:600;">S3 Raw</div><div style="color:#64748b;font-size:0.68rem;">CSV / JSON bruts</div>
          </div>
          <div style="color:#64748b;">→</div>
          <div style="background:rgba(255,153,0,0.12);border:1px solid rgba(255,153,0,0.4);border-radius:6px;padding:8px 12px;text-align:center;">
            <div style="font-size:1.2rem;">🔍</div><div style="color:#ff9900;font-weight:600;">Glue Crawler</div><div style="color:#64748b;font-size:0.68rem;">Schéma auto-détecté</div>
          </div>
          <div style="color:#64748b;">→</div>
          <div style="background:rgba(255,153,0,0.12);border:1px solid rgba(255,153,0,0.4);border-radius:6px;padding:8px 12px;text-align:center;">
            <div style="font-size:1.2rem;">⚙️</div><div style="color:#ff9900;font-weight:600;">Glue ETL</div><div style="color:#64748b;font-size:0.68rem;">PySpark job</div>
          </div>
          <div style="color:#64748b;">→</div>
          <div style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.4);border-radius:6px;padding:8px 12px;text-align:center;">
            <div style="font-size:1.2rem;">📂</div><div style="color:#34d399;font-weight:600;">S3 Curated</div><div style="color:#64748b;font-size:0.68rem;">Parquet optimisé</div>
          </div>
          <div style="color:#64748b;">+</div>
          <div style="background:rgba(129,140,248,0.12);border:1px solid rgba(129,140,248,0.4);border-radius:6px;padding:8px 12px;text-align:center;">
            <div style="font-size:1.2rem;">🗄</div><div style="color:#818cf8;font-weight:600;">RDS Postgres</div><div style="color:#64748b;font-size:0.68rem;">Données finales</div>
          </div>
        </div>
      </div>`,
      V.table(
        ['Service AWS', 'Rôle', 'Configuration'],
        [
          ['S3', 'Data Lake 3 zones', 'raw / processed / curated'],
          ['Glue Crawler', 'Catalogage schéma', 'Scan automatique S3'],
          ['Glue ETL Job', 'Transformation PySpark', 'Nettoyage + Parquet'],
          ['RDS PostgreSQL', 'Stockage final', 'db.t3.micro, VPC privé'],
          ['VPC + SG', 'Isolation réseau', 'Port 5432 restreint'],
          ['IAM Roles', 'Sécurité accès', 'Least privilege']
        ],
        'Infrastructure AWS déployée'
      )
    ],
    steps: [
      { title: 'Configuration VPC & Sécurité', desc: 'Création d\'un VPC dédié avec sous-réseaux public et privé, security groups restrictifs (RDS accessible uniquement depuis le security group Glue sur le port 5432), et tables de routage configurées pour isoler les ressources sensibles.' },
      { title: 'Déploiement RDS PostgreSQL', desc: 'Une instance RDS PostgreSQL 15 est créée dans le sous-réseau privé avec un DB subnet group multi-AZ, configuration des paramètres de performance, et backup automatique activé sur 7 jours de rétention.' },
      { title: 'Bucket S3 & Data Lake', desc: 'Un bucket S3 organisé en trois zones (raw, processed, curated) est créé avec versioning activé, chiffrement SSE-S3, et politiques d\'accès restrictives. Les données brutes CSV sont uploadées dans la zone raw.' },
      { title: 'Glue Crawler — Catalogage', desc: 'Un Glue Crawler est configuré pour analyser le bucket S3 raw, détecter automatiquement le schéma des fichiers CSV et Parquet, et créer les tables correspondantes dans le Glue Data Catalog.' },
      { title: 'Job ETL Glue (PySpark)', desc: 'Un job Glue Studio en PySpark transforme les données : nettoyage des valeurs nulles, filtrage des doublons, jointures entre datasets, et écriture en format Parquet dans la zone curated pour une compression optimale.' },
      { title: 'Connexion Jupyter & Analyse', desc: 'Un notebook Jupyter se connecte à la base RDS via psycopg2 pour charger et analyser les données transformées. Les requêtes SQL complexes sont exécutées directement depuis Python via Pandas.' }
    ],
    results: [
      { val: 'S3', label: 'Data Lake 3 zones', color: '#ff9900' },
      { val: 'Glue', label: 'ETL serverless', color: '#f472b6' },
      { val: 'RDS', label: 'PostgreSQL managé', color: '#34d399' }
    ],
    arch: [
      { label: '📂 S3 Raw', color: 'rgba(255,153,0,0.1)', border: 'rgba(255,153,0,0.4)' },
      { label: '→' },
      { label: '🔍 Glue Crawler', color: 'rgba(255,153,0,0.15)', border: 'rgba(255,153,0,0.5)' },
      { label: '→' },
      { label: '⚙️ Glue ETL', color: 'rgba(255,153,0,0.15)', border: 'rgba(255,153,0,0.5)' },
      { label: '→' },
      { label: '📂 S3 Curated', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '+' },
      { label: '🗄 RDS Postgres', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' }
    ]
  },

  twitter: {
    title: 'Twitter / X Analytics — API & Flask',
    category: 'Twitter API · Flask · Analyse de données',
    catColor: '#1da1f2',
    overview: `Application Flask modulaire pour interagir avec l'API Twitter (X) v2. Le projet se décline en 4 variantes couvrant différents cas d'usage : collecte de tweets par mots-clés, récupération de timelines utilisateurs, téléchargement de médias (images/vidéos), et analyse des métriques d'engagement. Les données collectées sont analysées avec Pandas et visualisées.`,
    visuals: () => [
      V.table(
        ['Tweet', 'Likes', 'Retweets', 'Engagement'],
        [
          ['Nouvelle lib Python ultra rapide...', '1 842', '634', '4.2% 🔥'],
          ['Thread : 10 astuces Git que tu...', '956', '412', '3.1%'],
          ['Pourquoi j\'ai abandonné Redux...', '723', '198', '2.4%'],
          ['Hot take : les tests unitaires sont...', '512', '287', '1.9%'],
          ['Mon parcours de dev : 0 à 10K...', '489', '143', '1.7%']
        ],
        'Top tweets par taux d\'engagement'
      ),
      V.barChart('Activité par heure (tweets/h)', [
        { label: '08h-10h', val: 32, color: '#1da1f2' },
        { label: '12h-14h', val: 67, color: '#38bdf8' },
        { label: '18h-20h', val: 89, color: '#818cf8' },
        { label: '20h-22h', val: 74, color: '#f472b6' },
        { label: '22h-00h', val: 41, color: '#34d399' }
      ])
    ],
    steps: [
      { title: 'Authentification OAuth 2.0', desc: 'Configuration des credentials Twitter Developer (Bearer Token, API Key/Secret, Access Token/Secret) et authentification OAuth 2.0 via la librairie tweepy. Les secrets sont stockés dans des variables d\'environnement.' },
      { title: 'Recherche de tweets (app.py)', desc: 'Endpoint Flask permettant de rechercher des tweets récents par mots-clés ou hashtags, avec filtres de langue et d\'exclusion des retweets, pagination, et retour JSON structuré incluant les métriques publiques.' },
      { title: 'Métriques d\'engagement (app2.py)', desc: 'Collecte des métriques détaillées (likes, retweets, replies, impressions, quotes) pour chaque tweet. Calcul du taux d\'engagement et classement des tweets les plus performants sur une période donnée.' },
      { title: 'Timeline utilisateur (app3.py)', desc: 'Récupération de la timeline complète d\'un compte Twitter avec les 100 derniers tweets, métriques associées, et analyse de la fréquence de publication par heure et par jour de la semaine.' },
      { title: 'Téléchargement médias (appmedia.py)', desc: 'Détection et téléchargement automatique des médias attachés aux tweets : images PNG/JPG via leur URL directe, et vidéos MP4 en sélectionnant le meilleur bitrate parmi les variantes disponibles.' },
      { title: 'Visualisation & rapport', desc: 'Génération de visualisations : évolution temporelle des tweets, distribution des engagements par heure, et nuage de mots des hashtags les plus utilisés dans les tweets collectés.' }
    ],
    results: [
      { val: '4', label: 'Variantes Flask', color: '#1da1f2' },
      { val: 'v2', label: 'API Twitter', color: '#818cf8' },
      { val: '100+', label: 'Tweets/requête', color: '#fb923c' }
    ],
    arch: [
      { label: '🐦 Twitter API v2', color: 'rgba(29,161,242,0.15)', border: 'rgba(29,161,242,0.4)' },
      { label: '→' },
      { label: '🐍 Tweepy', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '🌐 Flask', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' },
      { label: '→' },
      { label: '🐼 Pandas', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '→' },
      { label: '📊 Matplotlib', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' }
    ]
  },

  football: {
    title: 'Football Analytics — Analyse Joueurs FIFA',
    category: 'Data Analysis · Pandas · Sport Analytics',
    catColor: '#4ade80',
    overview: `Analyse exploratoire complète d'une base de données de plus de 15 000 joueurs de football (format FIFA/EA Sports). Le projet implémente des filtres multicritères, des analyses statistiques avancées par position et par nationalité, des comparaisons homme/femme, et la modélisation de la relation entre les caractéristiques des joueurs et leur valeur marchande.`,
    visuals: () => [
      V.table(
        ['Joueur', 'Poste', 'Overall', 'Valeur', 'Nationalité'],
        [
          ['K. Mbappé', 'ST', '91', '180M€', '🇫🇷 France'],
          ['E. Haaland', 'ST', '91', '180M€', '🇳🇴 Norvège'],
          ['V. Jr.', 'RW', '90', '150M€', '🇧🇷 Brésil'],
          ['J. Bellingham', 'CAM', '88', '120M€', '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Angleterre'],
          ['R. Lewandowski', 'ST', '88', '45M€', '🇵🇱 Pologne']
        ],
        'Top 5 joueurs par overall rating'
      ),
      V.barChart('Distribution par position (% du dataset)', [
        { label: 'Défenseurs (DEF)', val: 28, color: '#38bdf8' },
        { label: 'Milieux (MID)', val: 32, color: '#818cf8' },
        { label: 'Attaquants (ATT)', val: 24, color: '#34d399' },
        { label: 'Gardiens (GK)', val: 16, color: '#f472b6' }
      ])
    ],
    steps: [
      { title: 'Chargement & exploration initiale', desc: 'Chargement du CSV all_players.csv (15 000+ lignes, ~50 colonnes). Analyse de la structure, vérification des types de données, comptage des valeurs manquantes par colonne, et premières statistiques descriptives sur les colonnes clés (overall, age, value).' },
      { title: 'Nettoyage & typage des données', desc: 'Les valeurs monétaires au format "€120M" ou "€500K" sont parsées et converties en float. Les positions multiples (ex: "ST, CF") sont normalisées, et les valeurs manquantes sont traitées par imputation ou suppression selon leur nature.' },
      { title: 'Filtre par genre', desc: 'Le dataset est séparé en deux sous-ensembles (joueurs masculins et féminins). Une analyse comparative des distributions de performances (overall, pace, shooting, passing, dribbling) met en évidence les différences entre les deux populations.' },
      { title: 'Analyse par position', desc: 'Les joueurs sont regroupés par position (GK, DEF, MID, ATT) via des regex sur la colonne position. Pour chaque poste, les statistiques moyennes et les 10 meilleurs joueurs sont calculés et affichés.' },
      { title: 'Analyse statistiques avancées', desc: 'Corrélations entre attributs visualisées en heatmap Seaborn, distribution des joueurs par nationalité (top 20 pays), scatter plot overall vs valeur marchande coloré par position, et radar charts de profil pour comparer des joueurs spécifiques.' },
      { title: 'Modélisation valeur marchande', desc: 'Une régression linéaire scikit-learn modélise la valeur marchande en fonction de l\'overall, de l\'âge et du potentiel. Le R² de 0,71 confirme que l\'overall est le principal facteur déterminant de la valeur d\'un joueur.' }
    ],
    results: [
      { val: '15K+', label: 'Joueurs analysés', color: '#4ade80' },
      { val: '0.71', label: 'R² valeur marchande', color: '#34d399' },
      { val: 'H/F', label: 'Analyse genre', color: '#f472b6' }
    ],
    arch: [
      { label: '📄 all_players.csv', color: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.4)' },
      { label: '→' },
      { label: '🧹 Nettoyage', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '🐼 Pandas EDA', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' },
      { label: '→' },
      { label: '📊 Seaborn', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' },
      { label: '+' },
      { label: '📐 Régression', color: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.4)' }
    ]
  },

  generative: {
    title: 'IA Générative — GMM & Modèles de Markov Cachés',
    category: 'IA Générative · Modèles Probabilistes · Unsupervised',
    catColor: '#f472b6',
    overview: `Introduction aux modèles génératifs probabilistes dans le cadre du cours d'IA Générative en M2. Le projet implémente deux types de modèles : les Gaussian Mixture Models (GMM) pour le clustering non supervisé via l'algorithme Expectation-Maximization, et les Hidden Markov Models (HMM) pour la modélisation de séquences temporelles avec l'algorithme de Viterbi pour le décodage des états cachés.`,
    visuals: () => [V.gmmSvg(), V.barChart('Score BIC par nombre de composantes K', [
      { label: 'K=1', val: 20, color: '#94a3b8' },
      { label: 'K=2', val: 45, color: '#818cf8' },
      { label: 'K=3 ✓', val: 92, color: '#f472b6' },
      { label: 'K=4', val: 78, color: '#94a3b8' },
      { label: 'K=5', val: 61, color: '#94a3b8' }
    ])],
    steps: [
      { title: 'Préparation & exploration des données', desc: 'Chargement et normalisation des données (StandardScaler), analyse de la distribution 2D via scatter plots et histogrammes pour identifier visuellement les potentiels clusters avant d\'appliquer le modèle.' },
      { title: 'GMM — Initialisation & Fitting', desc: 'Un Gaussian Mixture Model est initialisé avec K composantes et une matrice de covariance complète ("full") par cluster. L\'algorithme EM (Expectation-Maximization) itère jusqu\'à convergence en maximisant la log-vraisemblance.' },
      { title: 'Sélection du K optimal (BIC/AIC)', desc: 'Des GMM sont entraînés pour K allant de 1 à 10. Le Bayesian Information Criterion (BIC) et l\'AIC sont calculés pour chaque K. Le coude dans la courbe BIC identifie le nombre optimal de composantes (K=3).' },
      { title: 'Visualisation des clusters GMM', desc: 'Les points sont colorés selon leur cluster d\'appartenance. Les ellipses de covariance de chaque composante gaussienne sont tracées pour visualiser la forme et l\'orientation de chaque cluster dans l\'espace 2D.' },
      { title: 'HMM — Définition & Entraînement', desc: 'Un Hidden Markov Model avec 5 états cachés émettant des observations gaussiennes est entraîné par l\'algorithme Baum-Welch (variante EM pour HMM). La matrice de transition et les paramètres d\'émission sont appris automatiquement.' },
      { title: 'Décodage Viterbi & Génération', desc: 'L\'algorithme de Viterbi décode la séquence d\'états cachés la plus probable étant donné une séquence d\'observations. Le modèle peut aussi générer de nouvelles séquences synthétiques en échantillonnant depuis les distributions apprise.' }
    ],
    results: [
      { val: 'GMM', label: '3 composantes (BIC)', color: '#f472b6' },
      { val: 'HMM', label: '5 états cachés', color: '#818cf8' },
      { val: 'Viterbi', label: 'Décodage séquences', color: '#34d399' }
    ],
    arch: [
      { label: '📊 Données', color: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.4)' },
      { label: '→' },
      { label: '🔄 Algo EM', color: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.4)' },
      { label: '→' },
      { label: '🫧 GMM K=3', color: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.4)' },
      { label: '+' },
      { label: '🔗 HMM 5 états', color: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.4)' },
      { label: '→' },
      { label: '🎯 Viterbi', color: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.4)' }
    ]
  }
};
