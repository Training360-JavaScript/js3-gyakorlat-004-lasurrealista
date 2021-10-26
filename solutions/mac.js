const checkMac = (macAddress) => {
    const reg = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macAddress.match(reg) ? true : false;
};


