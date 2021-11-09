# Chainalysis Questionaire

1. When searching for recommended prices, I tried to put all prices in an array, and retrieve the variable name of the minimum. Due to time and the fact that there were only two exchanges I had to compare, I decided to use an if statement. Although it was successful, it would not be efficient if there were more exchanges I had to implement and compare. 
2. I believe the API calls in the back end is over designed. Instead of having three API calls, I should try and limit it down to two. 
3. I would find another Exchange that allows me to call BTC and ETH in the same call. As of now, I am making 3 separate API calls, one from Nomics and two from Messari, which is more calls than neccessary. With less calls, I can lower the traffic when calling the API. 
4. I would take the time to figure out how to plot the prices on a graph with live implementation. It would give the users a great visual as well as a prediction of when the price will drop or rise. 