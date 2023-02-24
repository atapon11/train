export function pagination(pagesize,currentpage,data) {
    let value = data.slice(pagesize *(currentpage - 1),pagesize*currentpage+pagesize).slice(0,pagesize);
    return{
        statusCode : 200,
        taskStatus : true,
        message: 'success',
        pagin :{
            totalrow: data.length,
            pagesize: pagesize,
            currentpage:currentpage,
            totalpage:Math.ceil(data.length / pagesize),//เป็นการคำนวณว่าหน้ามีทั้งหมดกี่หน้า

        },

        data : value,
    }
}