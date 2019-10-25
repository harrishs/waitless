$(document).ready(function(){
    $("#submit").on("click", function(){
            time = $(".times").children("option:selected").val();
            db.query(`INSERT INTO waitlists (restaurant_id, wait_time)
            VALUES ($1, $2)`, ['1', time]);
    })
});