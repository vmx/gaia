const nsIMobileConnectionListener = {
};
const nsIMobileConnectionCallback = {
};
const nsIMobileConnectionService = {
};
const nsIMobileConnection = {
    ICC_SERVICE_CLASS_NONE: 0,
    ICC_SERVICE_CLASS_VOICE: 1,
    ICC_SERVICE_CLASS_DATA: 2,
    ICC_SERVICE_CLASS_FAX: 4,
    ICC_SERVICE_CLASS_SMS: 8,
    ICC_SERVICE_CLASS_DATA_SYNC: 16,
    ICC_SERVICE_CLASS_DATA_ASYNC: 32,
    ICC_SERVICE_CLASS_PACKET: 64,
    ICC_SERVICE_CLASS_PAD: 128,
    ICC_SERVICE_CLASS_MAX: 128,
    CALL_FORWARD_ACTION_UNKNOWN: -1,
    CALL_FORWARD_ACTION_DISABLE: 0,
    CALL_FORWARD_ACTION_ENABLE: 1,
    CALL_FORWARD_ACTION_QUERY_STATUS: 2,
    CALL_FORWARD_ACTION_REGISTRATION: 3,
    CALL_FORWARD_ACTION_ERASURE: 4,
    CALL_FORWARD_REASON_UNKNOWN: -1,
    CALL_FORWARD_REASON_UNCONDITIONAL: 0,
    CALL_FORWARD_REASON_MOBILE_BUSY: 1,
    CALL_FORWARD_REASON_NO_REPLY: 2,
    CALL_FORWARD_REASON_NOT_REACHABLE: 3,
    CALL_FORWARD_REASON_ALL_CALL_FORWARDING: 4,
    CALL_FORWARD_REASON_ALL_CONDITIONAL_CALL_FORWARDING: 5,
    CALL_BARRING_PROGRAM_UNKNOWN: -1,
    CALL_BARRING_PROGRAM_ALL_OUTGOING: 0,
    CALL_BARRING_PROGRAM_OUTGOING_INTERNATIONAL: 1,
    CALL_BARRING_PROGRAM_OUTGOING_INTERNATIONAL_EXCEPT_HOME: 2,
    CALL_BARRING_PROGRAM_ALL_INCOMING: 3,
    CALL_BARRING_PROGRAM_INCOMING_ROAMING: 4,
    CALL_BARRING_PROGRAM_ALL_SERVICE: 5,
    CALL_BARRING_PROGRAM_OUTGOING_SERVICE: 6,
    CALL_BARRING_PROGRAM_INCOMING_SERVICE: 7,
    CLIR_DEFAULT: 0,
    CLIR_INVOCATION: 1,
    CLIR_SUPPRESSION: 2,
    NETWORK_SELECTION_MODE_UNKNOWN: -1,
    NETWORK_SELECTION_MODE_AUTOMATIC: 0,
    NETWORK_SELECTION_MODE_MANUAL: 1,
    MOBILE_RADIO_STATE_UNKNOWN: -1,
    MOBILE_RADIO_STATE_ENABLING: 0,
    MOBILE_RADIO_STATE_ENABLED: 1,
    MOBILE_RADIO_STATE_DISABLING: 2,
    MOBILE_RADIO_STATE_DISABLED: 3,
    PREFERRED_NETWORK_TYPE_WCDMA_GSM: 0,
    PREFERRED_NETWORK_TYPE_GSM_ONLY: 1,
    PREFERRED_NETWORK_TYPE_WCDMA_ONLY: 2,
    PREFERRED_NETWORK_TYPE_WCDMA_GSM_AUTO: 3,
    PREFERRED_NETWORK_TYPE_CDMA_EVDO: 4,
    PREFERRED_NETWORK_TYPE_CDMA_ONLY: 5,
    PREFERRED_NETWORK_TYPE_EVDO_ONLY: 6,
    PREFERRED_NETWORK_TYPE_WCDMA_GSM_CDMA_EVDO: 7,
    PREFERRED_NETWORK_TYPE_LTE_CDMA_EVDO: 8,
    PREFERRED_NETWORK_TYPE_LTE_WCDMA_GSM: 9,
    PREFERRED_NETWORK_TYPE_LTE_WCDMA_GSM_CDMA_EVDO: 10,
    PREFERRED_NETWORK_TYPE_LTE_ONLY: 11,
    CDMA_ROAMING_PREFERENCE_HOME: 0,
    CDMA_ROAMING_PREFERENCE_AFFILIATED: 1,
    CDMA_ROAMING_PREFERENCE_ANY: 2,
    MOBILE_NETWORK_TYPE_GSM: 0,
    MOBILE_NETWORK_TYPE_WCDMA: 1,
    MOBILE_NETWORK_TYPE_CDMA: 2,
    MOBILE_NETWORK_TYPE_EVDO: 3,
    MOBILE_NETWORK_TYPE_LTE: 4,
};
