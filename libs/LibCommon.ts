// LibCommon

//
//export default const LibCommon = {
const LibCommon = {
    /* convert date format */
    formatDate : function (date, format) {
        if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
        format = format.replace(/YYYY/g, date.getFullYear());
        format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
        format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
        format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
        format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
        format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
        if (format.match(/S/g)) {
            const milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
            const length = format.match(/S/g).length;
            for (let i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
        }
        return format;
    },
    get_item: function(items, id){
        let ret = null;
        items.forEach(function(item){
//            console.log(item.id );
            if(item.id === id){
                ret = item
            }
        });
        return ret
    },    
    /*********************************
     * get right string
     * num: length
    ***********************************/ 
    get_string_rigth: function(str, num){
        str = "0000000000" + str
        const len = str.length
        const start = len - num
        const ret = str.substring(start ,len)
        return ret
    },
    convert_items: function(items){
		const data =[]
		const self = this
        items.forEach(function(item){
            let date = new Date(item.created_at)
            date = self.formatDate(date, 'YYYY-MM-DD hh:mm')
            item.created_at = date
//console.log(date)
            data.push(item)                        
        });        
        return data
    },    
    get_reverse_items: function(items){
		const data =[]
		const self = this
        items.forEach(function(item){
            let date = new Date(item.created_at)
            date = self.formatDate(date, 'YYYY-MM-DD hh:mm')
            item.created_at = date
//console.log(date)
            data.unshift(item)                        
        });        
        return data
    },    


}
export default LibCommon;

