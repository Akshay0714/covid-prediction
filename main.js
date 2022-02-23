$.getJSON(
    "https://api.covid19api.com/total/country/india",
    function(data){
        console.log(data);

        var lastElement;
              
            for (lastElement in data);
                lastElement;
        console.log(lastElement)

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        var total_cases = (data)[lastElement].Confirmed
        $(".total_cases").append(numberWithCommas(total_cases));

        var total_deaths = data[lastElement].Deaths
        $(".total_deaths").append(numberWithCommas(total_deaths));
    }

)

