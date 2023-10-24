var dbNoSql = {
    "712020:e1e3f592-c9bf-406d-ab75-8aa8ac590e14": ["DSA"]
}
function queryDB(topic) {
    var helperIds = [];
    var count = 0;
    for(const key in dbNoSql){
        const value = dbNoSql[key]
        console.log("VALUES:", value, "topic", topic);
        const debug = value.includes(topic);
        console.log("debug", debug);
        if (value.includes(topic)){
            console.log("Topic found");
            helperIds.push(key);
            count++;
            if (count > 5)
                break;
        }
    }
    return helperIds;
}

module.exports = queryDB;