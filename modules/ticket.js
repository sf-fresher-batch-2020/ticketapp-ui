class addTicket
{
    ticket = function(userObj){
       var ticketTemp = JSON.parse(localStorage.getItem("TICKET"));
       var tickets= ticketTemp ? ticketTemp:[];
       tickets.push(userObj);
       localStorage.setItem("TICKET",JSON.stringify(tickets));
       let result="success";
       return result;
        }
        list()
        {
          let ticketTemp = JSON.parse(localStorage.getItem("TICKET"));
            let tickets  = ticketTemp ? ticketTemp : [];
           return tickets;
        }
}

