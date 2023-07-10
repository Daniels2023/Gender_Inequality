# Gender Inequality Project
This project aims to visualise gender inequality around the world based on Human Development in these countries. The base of these inequalities in this project are **Education** and **Workforce**, these indicators will be demonstrated in average percentual (cards), percentage of total population (scatterplots), countries with the lowest rates of female education (barcharts) and wordcloud webscrapping. Our main dataset is from Kaggle webpage and that was used to make an interactive cards, scatterplots and barcharts and, we also used 7 websites for the cloud word webscrapping.

# Prerequisites
For Python it needs install:

Python 3.x
Jupyter Notebook
Pandas, Flask, Psycopg2, Flask_CORS, Requests, BeautifulSoup, Collections, Re, Matplotlib and Wordcloud.

For Javascript it needs the libraries:

D3 and Plotly.

And
PostgreSQL.

# Project files
The extraction and transformation steps: **Gender_Inequality.ipynb**
The database structure and the table created in PostgreSQL: **GenderQuery.sql** and **ERD_Gender.png**
Flask app: **app.py**
Cards and Scatterplots visualizations: **script.js**, **GenderInequality.html** and **template/style.css**
Wordcloud webscrapping: **project3_webscraping.ipynb** and **resources/wordcloud_webscraping.png**

Final visualisations can be seen from the landing page index.html and linked sites, charts.html and maps.html.

Hypotheses
Diabetes is among the top 10 causes of death in the US. Distribution of diabetes is associated with factors such as distribution of fast food restaurants.

Data sources
Monthly_Counts_of_Deaths_by_Select_Causes__2014-2019.csv
https://chronicdata.cdc.gov/Chronic-Disease-Indicators/- U-S-Chronic-Disease-Indicators-CDI-/g4ie-h725
https://www.cdc.gov/obesity/data/prevalence-maps.html
https://www.kaggle.com/datasets/khushishahh/fast-food-restaurants-across-us
Built With
Python
Jupyter Notebook
Pandas
Numpy
HTML
Folium
charts.js
Leaflet
Authors
Brianna O'Connor - https://github.com/Borruu/
Solomon Dias - https://github.com/Solo1492
Marisa Duong - https://github.com/MarDuo2022
Description of repository structure
code folder contains all coding at the back-end:

Database extraction into csv files and loading into PostgreSQL database is in the Jupyter notebook Death_counts_Chronic_indicators_PostgreSQL.ipynb.

Code for plotting charts is in plot.js inside 'js' folder.

Code for visualising maps is in Merging_Data_maps.ipynb and Restarants_heatmap.ipynb

data folder contains csv files, including original csv files downloaded from data sources (such as the raw 1. Monthly_Counts_of_Deaths_by_Select_Causes__2014-2019.csv) and the cleaned csv (such as the Yearly_death_counts.csv).

database folder contains schema for diabetes PostgreSQL database, which is to be created locally.

the landing page index.html is to be deployed directly from [https://marduo2022.github.io/Diabetes_visualisations/], and there are links on this page to go to the charts.html and maps.html pages.

the maps are in the Population_vs_Obesity.html and Restaurants_vs_Diabeties.html on the homepage.
