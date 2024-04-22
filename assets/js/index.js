const database = firebase.database();
const ref = database.ref("Live");

const temp = document.getElementById("temp");
const humi = document.getElementById("humi");

function live_update() {
    console.log("Called");
    ref.once("value", function(snapshot) {
        const data = snapshot.val();
        if (data) {
            temp.innerText = data.Temperature || "N/A";
            humi.innerText = data.Humidity || "N/A";
        } else {
            temp.innerText = "N/A";
            humi.innerText = "N/A";
        }
    }, function(error) {
        console.error("Error fetching data:", error);
    });
}

live_update();

setInterval(live_update, 5000);
