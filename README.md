 ## Análise de Dados - Eleições 2016 - Olinda - v1.0



# Documentação Oficial

https://nodejs.org/en/
http://expressjs.com/pt-br/
https://angularjs.org/
https://www.mongodb.com/


## Instalação e Deploy
1. Necessário [Git](https://git-scm.com/downloads), [Node- v6.7.0](https://nodejs.org/en/) e [MongoDB- v3.2.0](https://www.mongodb.com/) instalados;
2. Execute “ git clone https://github.com/luizhenriquesoares/data-analysis.git”
3. Execute “ npm install” (Este comando pode levar vários minutos)
4. Execute “ bower install ” 
5. importar databases “ mongoimport --db tse_eleicoes_2016 --collection olinda_1_turno_zona  --file olinda_1_turno_zona.json e mongoimport --db tse_eleicoes_2016 --collection olinda_1_turno_secao  --file olinda_1_turno_secao.json ” 
6. Execute “ gulp watch-dev ” 
7. Execute “ nodemon app.js ” 
