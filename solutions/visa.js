const checkVisa = (visaNumber) => {
    const reg = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return visaNumber.match(reg) ? true : false;
};

export default checkVisa;
