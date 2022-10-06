
// for first page
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "08/20/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            
        }, 0)
    }());


    // This is for secound time
      (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "08/20/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("days_two").innerText = Math.floor(distance / (day)),
                document.getElementById("hours_two").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes_two").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds_two").innerText = Math.floor((distance % (minute)) / second);
                
            }, 0)
        }());
  
      



    // This is for thirt time
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "08/20/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
    
            document.getElementById("days_one").innerText = Math.floor(distance / (day)),
              document.getElementById("hours_one").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes_one").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds_one").innerText = Math.floor((distance % (minute)) / second);
              
          }, 0)
      }());


      // for secound page
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/20/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days_ak").innerText = Math.floor(distance / (day)),
          document.getElementById("hours_ak").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes_ak").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds_ak").innerText = Math.floor((distance % (minute)) / second);
          
      }, 0)
  }());


  // This is for secound time
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "08/20/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
    
            document.getElementById("days_dui").innerText = Math.floor(distance / (day)),
              document.getElementById("hours_dui").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes_dui").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds_dui").innerText = Math.floor((distance % (minute)) / second);
              
          }, 0)
      }());

    



  // This is for thirt time
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "08/20/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days_tin").innerText = Math.floor(distance / (day)),
            document.getElementById("hours_tin").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes_tin").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds_tin").innerText = Math.floor((distance % (minute)) / second);
            
        }, 0)
    }());


    // for thirt page
    (function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/20/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days_ak").innerText = Math.floor(distance / (day)),
          document.getElementById("hours_ak").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes_ak").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds_ak").innerText = Math.floor((distance % (minute)) / second);
          
      }, 0)
  }());


  // This is for secound time
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "08/20/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
    
            document.getElementById("days_dui").innerText = Math.floor(distance / (day)),
              document.getElementById("hours_dui").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes_dui").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds_dui").innerText = Math.floor((distance % (minute)) / second);
              
          }, 0)
      }());

    



  // This is for thirt time
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "08/20/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days_tin").innerText = Math.floor(distance / (day)),
            document.getElementById("hours_tin").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes_tin").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds_tin").innerText = Math.floor((distance % (minute)) / second);
            
        }, 0)
    }());


    // for thirt page
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "08/20/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
    
            document.getElementById("days_1").innerText = Math.floor(distance / (day)),
              document.getElementById("hours_1").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes_1").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds_1").innerText = Math.floor((distance % (minute)) / second);
              
          }, 0)
      }());
    
    
      // This is for secound time
        (function () {
          const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
        
          //I'm adding this section so I don't have to keep updating this pen every year :-)
          //remove this if you don't need it
          let today = new Date(),
              dd = String(today.getDate()).padStart(2, "0"),
              mm = String(today.getMonth() + 1).padStart(2, "0"),
              yyyy = today.getFullYear(),
              nextYear = yyyy + 1,
              dayMonth = "08/20/",
              birthday = dayMonth + yyyy;
          
          today = mm + "/" + dd + "/" + yyyy;
          if (today > birthday) {
            birthday = dayMonth + nextYear;
          }
          //end
          
          const countDown = new Date(birthday).getTime(),
              x = setInterval(function() {    
        
                const now = new Date().getTime(),
                      distance = countDown - now;
        
                document.getElementById("days_2").innerText = Math.floor(distance / (day)),
                  document.getElementById("hours_2").innerText = Math.floor((distance % (day)) / (hour)),
                  document.getElementById("minutes_2").innerText = Math.floor((distance % (hour)) / (minute)),
                  document.getElementById("seconds_2").innerText = Math.floor((distance % (minute)) / second);
                  
              }, 0)
          }());
    
        
    
    
    
      // This is for thirt time
      (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "08/20/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("days_3").innerText = Math.floor(distance / (day)),
                document.getElementById("hours_3").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes_3").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds_3").innerText = Math.floor((distance % (minute)) / second);
                
            }, 0)
        }());
    
    
        // for thirt page
    
    
