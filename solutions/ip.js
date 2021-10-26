const checkIP = (ipAddress) => {
    const reg = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    return ipAddress.match(reg) ? true : false;
};

export default checkIP;
