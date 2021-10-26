import checkVisa from "./visa";
import checkIP from "./ip";
import checkMac from "./mac";

const checker = {
    rules: {
        visa: checkVisa,
        ip: checkIP,
        mac: checkMac,
    },
    validate(text, type) {
        return this.rules[type](text);
    },
};

export default checker;
