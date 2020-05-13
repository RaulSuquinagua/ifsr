const functions = require('firebase-functions');
const admin = require('firebase-admin');

// please make sure you have used your own cred

const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'YOUR_DB_URL'
})

exports.sendPush = functions.database.ref('orders/{orderId}').onCreate(function (snapshot, context) {

    // const original = snap.data();

    var order = snapshot.val();
    console.log(order);
    if (order != null && order.driverId != "") {

        return admin.database().ref('drivers/' + order.driverId).once('value', snap => {

            let token = snap.val().pushToken;
            console.log("Driver=>" + token);
            if (token != null && token != undefined && token != '') {
                return sendMessage(token, "New Order Assinged", "Tap to See")
            }
            else {
                return false;
            }
        })
    }
    else {
        return false;
    }

})



exports.sendPushonUpdate = functions.database.ref('orders/{orderId}').onUpdate(function (snapshot, context) {

    // const original = snap.data();
    var order = snapshot.after.val();
    console.log(order);
    if (order != null) {
        return admin.database().ref('users/' + order.userId).once('value', snap => {
            let token = snap.val().pushToken;
            console.log("User =>" + token);
            if (token != null && token != undefined && token != '') {
                return sendMessage(token, "Order #" + order.createdAt, "Status: " + order.orderStatus)
            }
            else {
                return false;
            }
        })
    }
    else {
        return false;
    }

})


exports.sendPush = functions.database.ref('notifications/{notification}').onWrite(function (change, context) {

    const original = change.after.val();

    if (original.for == 'users') {

        admin.database().ref('users').once('value', function (snap) {
            snap.forEach(u => {
                let user = u.val()
                if (user.isPushEnabled) {
                    sendMessage(user.pushToken, original.title, original.message);
                }
                else return false;
            })
        })

    }
    else if (original.for == 'drivers') {

        admin.database().ref('drivers').once('value', function (snap) {
            snap.forEach(u => {
                let user = u.val()
                if (user.isPushEnabled) {
                    sendMessage(user.pushToken, original.title, original.message);
                }
                else return false;
            })
        })

    }
    else if (original.for == 'both') {

        admin.database().ref('users').once('value', function (snap) {
            snap.forEach(u => {
                let user = u.val()
                if (user.isPushEnabled == true) {
                    sendMessage(user.pushToken, original.title, original.message);
                }
                else return false;
            })
        })

        admin.database().ref('drivers').once('value', function (snap) {
            snap.forEach(u => {
                let user = u.val()
                if (user.isPushEnabled) {
                    sendMessage(user.pushToken, original.title, original.message);
                }
                else return false;
            })
        })

    }


})

function sendMessage(token, title, message) {

    if (token === undefined || token === '' || token === null) {
        return true;
    }
    else {
        return admin.messaging().sendToDevice([token], {
            notification: {
                title: title,
                body: message,
                sound: 'default'
            }
        }).then(data => {
            //console.log(data);
            return true;
        }).catch(err => {
            //console.log(err)
            return false;
        });
    }
}
