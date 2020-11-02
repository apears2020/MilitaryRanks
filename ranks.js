$(document).ready(
    function () {
        //event handlers
        $("form").submit(addressRank);
        //other functions
        function addressRank(event){
            event.preventDefault();

            var firstName = $("#nameFirst").val();
            var lastName = $("#nameLast").val();
            var militaryRank = $("input[name=rank]:checked").val();

            $("#greet").text("Hello " + militaryRank + " " + firstName + " " + lastName);

        }
    }
);