const data = require('./data.js');

const findProdInfoById = (id) => {
    let all = [].concat(data.hot, data.man, data.lady, data.children);
    let info = all.find((ele) => {
        return ele.id == id;
    });
    return info;
};
let query = () => {
    return {
        findProdInfoById: findProdInfoById
    }
}
module.exports = query();