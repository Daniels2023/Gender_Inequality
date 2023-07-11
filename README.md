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

The database structure and the table created in PostgreSQL: **templates/GenderQuery.sql** and **resources/ERD_Gender.png**

Flask app: **app.py**

Cards and Scatterplots visualizations: **script.js**, **GenderInequality.html** and **templates/style.css**

Wordcloud webscrapping: **project3_webscraping.ipynb** and **resources/wordcloud_webscraping.png**

# Limitations in our Data

Data limitation -
One of the limitations of our study is that our dataset only covers 170 countries. Therefore, the findings might not represent the entire global picture of gender inequality, as there are countries not included in our analysis. Further research that includes data from all countries worldwide could potentially offer more comprehensive insights.
Cultural context
While cultural beliefs might partially explain regional trends, they are often complex and difficult to quantify. Additional research, perhaps incorporating qualitative methods, might provide more insight into these dynamics.

Multiple forms of discrimination -
Gender inequality often connects with other types of inequality, like race, wealth, or sexual orientation and the data does not take it in consideration.

Measurement limitations - 
Any measure of inequality will have its limitations. For example, representation in parliament is an important aspect of political inequality, but it does not capture all elements such as the influence women wield in political office or the policy changes they are able to make. Additionally, workforce participation might not capture the quality of the work or differences in pay.

Sampling bias - 
Conclusions drawn might not be applicable to countries that were not included in the dataset.

Measurement bias - 
When the gender inequality is measured only in terms of education, workforce participation, and representation in parliament, it might not fully capture the reality of gender inequality, which can manifest in many other forms such as wage disparities, access to healthcare, etc.

# Conclusion

Correlation between human development and inequality - 
This finding suggests that as a country's Human Development Index (HDI) increases, inequalities in education, workforce participation, and representation in parliament may decrease. However, correlation does not imply causation, so it would be worthwhile to investigate whether improvements in HDI are causing these reductions in inequality, or if there is another factor influencing both variables.

Differences in workforce participation across regions - 
The analysis indicates that countries in the Middle East have lower female workforce participation rates. Cultural beliefs and practices may be a significant factor in this trend.

Discrepancy between female workforce participation and overall development - 
This highlights the complexity of gender inequality and human development, where it's possible for a country to have relatively high levels of development while still experiencing significant Inequality between genders. Jordan, Iran, Egypt, and Algeria demonstrate relatively high levels of development despite low female workforce participation rates. This suggests that even countries with higher HDIs may need to focus specifically on gender-based policies to improve equality.

Overall Conclusion - 
In summary, our journey towards achieving gender equality still has a long way to go

# Data sources

### Dataset
https://www.kaggle.com/datasets/rajkumarpandey02/world-data-of-gender-inequality-inde;

### Webscrapping
https://humanrights.gov.au/our-work/education/face-facts-gender-equality-2018";

https://humanrights.gov.au/our-work/sex-discrimination/publications/unleashing-power-gender-equality-2017?_ga=2.226280728.300027987.1688536890-771838493.1688536890";

https://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/4125.0Main+Features2Sep%202017?OpenDocument";

https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0256474";

https://copenhagenconsensus.com/sites/default/files/gender.pdf";

https://www.theguardian.com/business/2022/nov/29/gender-diversity-in-uk-tech-industry-still-terrible-says-martha-lane-fox";

https://www.theguardian.com/inequality/2022/apr/17/shock-absorbers-of-poverty-womens-lives-cut-short-by-their-unequal-position-in-society";


**Built With:**
 * Python
 * Jupyter Notebook
 * Flask
 * HTML
 * CSS
 * Plotly
 * D3.js

**Maria Florencia Martin** - [https://github.com/flormartinaus](https://github.com/flormartinaus)

**Ohana Bernardi** - [https://github.com/OhanaB](https://github.com/OhanaB)

**Daniel de Souza** - [https://github.com/Daniels2023](https://github.com/Daniels2023)
