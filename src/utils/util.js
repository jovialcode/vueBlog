const StringUtil = {
    format(str){
        let args = arguments;
        return str.replace(/{(\d+)}/g, (match, number) => {
            number = parseInt(number);
            return typeof args[number] != 'undefined' ? args[number+1] : match
        });
    }
};

export default StringUtil;