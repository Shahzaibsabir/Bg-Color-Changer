

        const colorTray = ["red", "green", "yellow", "blue","violet", "pink", "orange"]

        const colorName = document.querySelector('span')

        var btn = document.getElementById("btn").addEventListener("onclick", colorHandler)

        function colorHandler() {

            var randomNum = Math.floor(Math.random() * 6);
         
            document.body.style.backgroundColor = colorTray[randomNum]
            colorName.textContent=colorTray[randomNum]
            document.getElementById("btn").style.border = `2px solid ${colorTray [randomNum]}`
          
        }
   