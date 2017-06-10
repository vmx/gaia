DEBUG = true;

// `dump()` is used for debug messages in the Gonk JS stuff, log that to the
// console for now.
let dump = function(message) {
  console.debug(message);
};

navigator.mozContacts = MockMozContacts;

navigator.mozIccManager = {
  // Fake dual SIM
  iccIds: [0, 1]
};

// From tools/extensions/desktop-helper/content/data/lib/mobile_connection.js
navigator.mozMobileConnections = [{
  voice: {
    network: {shortName: 'Fake Network vmx', mcc: '49', mnc: '1'},
    state: 'notSearching',
    roaming: false,
    connected: true,
    emergencyCallsOnly: false
  }
}, {
  voice: {
    network: {shortName: 'Fake Network b2g', mcc: '49', mnc: '1'},
    state: 'notSearching',
    roaming: false,
    connected: true,
    emergencyCallsOnly: true
  }
}];


// Create a global instance of the `RadioInterfaceLayer`
const gRadioInterfaceLayer = new RadioInterfaceLayer();
// Create a global instance of the `TelephonyService`
const gTelephonyService = new TelephonyService();


var Telephony = function() {
  this.calls = [];
};

// This global type is needed for `telephony_helper.js`
var TelephonyCall = function(id) {
  this.id = id;
};

Telephony.prototype.dial = function(numberOrMmi, serviceId) {
  //XXX vmx 2017-05-20: GO ON HERE and implement the actual calling and then return a properly constructed `TelephonyCall` object.
  //  gecko-dev/dom/telephony/Telephony.cpp does the actual mService->Dial() call.
  //  which is actually implemented in
  //  /home/vmx/src/c/b2g/gecko-dev/dom/telephony/gonk/TelephonyService.js
  //and with more digging it gets the client via `_getClient()` which return `gRadioInterfaceLayer.getRadioInterface(aClientId);`
  //and the `sendWorkerMessage()` in `dom/system/gonk/RadioInterfaceLayer.js` is called.
  //  The WorkerMessenger (defined in `dom/system/gonk/RadioInterfaceLayer.js` just startes the ril worker.
  //                      This means that the WorkerMessenger should be hooked up to the websockets server and send messages there.
  return new Promise((resolve, reject) => {
    // `Telephony.dial()` is never an emergency number, that's what
    // Telephony.dialEmergency()` is for.
    gTelephonyService.dial(serviceId, numberOrMmi, false, resolve);


    var telephonyCall = new TelephonyCall('0800');
    this.calls.push(telephonyCall);
    resolve(telephonyCall);
  });
};
Telephony.prototype.addEventListener = function(event, listener) {
  console.error("vmx: attached event `" + event + "` to mozTelephony, but this is not implemented properly yet");};

navigator.mozTelephony = new Telephony();

console.log("vmx: global values set");
