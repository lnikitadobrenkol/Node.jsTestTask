# Node.jsCodeTest
This server has 2 parts: 1) Front end; 2) Back end. 
    1) Front end part - it is a flight search interface.
 It has a search form with these fields:  From location (eg: Sydney) To location (eg: San Jose) 
 Travel date (eg: 2018-11-02)  When the user clicks search, your front end code needs to make an AJAX request 
 to a backend server you will build, which will in turn contact the Flight API. 
    2) Back end - has three endpoints:  
 1./airlines Lists all available airlines from the Flight API. 
 2./airports Lists all matching airports from the Flight API. 
 3./search Accepts all parameters from the search form above.  
 
 For a single flight search, you will need to make multiple Flight API requests:  
 /airlines to get a list of airlines 
 /flight_search/:airline_code to search for flights for each airline.
In the end we have backend and fronend parts. You can chose the cities from and where you want to fly, and the date, when you want to fly. After you click a button "search" in the browser you will have the aswer with information which flights are awelable in this dates. I use available airport, because i didn`t have time to do normal logic for this part of task. 
