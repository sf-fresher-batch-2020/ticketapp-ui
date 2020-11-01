class assigned
{
    assign = function(userObj){
       var ticketTemp = JSON.parse(localStorage.getItem("ASSIGN"));
       var tickets= ticketTemp ? ticketTemp:[];
       tickets.push(userObj);
       localStorage.setItem("ASSIGN",JSON.stringify(tickets));
       let result="success";
       return result;
        }
        list()
        {
          let ticketTemp = JSON.parse(localStorage.getItem("ASSIGN"));
            let tickets  = ticketTemp ? ticketTemp : [];
           return tickets;
        }      
}
