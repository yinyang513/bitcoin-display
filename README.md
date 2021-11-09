# bitcoin-display

Welcome to CryptoCurrency Display!

# Retrieve Nomics API Key
1. retrieve Nomics API key from https://p.nomics.com/cryptocurrency-bitcoin-api
2. click on 'API Key'
3. click on 'Send me my free API Key' and enter email
4. API Key should be located in email received
5. insert API key into nomics_api_key located in user_config.py

# Retrieve Messari API Key
1. retrieve Messari API key from https://messari.io/account/api
2. make an account
3. click on profile photo, locate to API
4. select 'Create New API Key'
5. insert API key into messari_api_key located in user_config.py

# Start the app
1. switch to env using source env/bin/activate
2. install all dependencies pip install -r requirements.txt
3. export FLASK_APP=app.py
4. run the backend flask run
5. switch the frontend folder cd front-end
6. install frontend dependencies npm i
7. run the frontend npm start