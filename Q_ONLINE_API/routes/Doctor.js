var express = require("express");
const { response } = require("../app");
var router = express.Router();
var mssql = require("../helper/Connect");
var respon = require("../helper/Respon");

router.get("/getDoctor", async function (req, res) {
    try {
        console.log("req query", req.query);

        let search = req.query.search ? req.query.search : "";
        let treatment = req.query.treatment ? req.query.status : "";
        let status = req.query.status ? req.query.status : "";
        let pageSize = req.query.pageSize ? req.query.pageSize : 10;
        let currentPage = req.query.currentPage ? req.query.currentPage : 1;

        await mssql.sql.query(
            `SELECT  
            doc.id,
            doc.treatment_type_id,
            tre.treatment_type_name,
            doc.prifix_id,
            doc.name,
            doc.lastname,
            doc.is_used
            FROM doctor AS doc
            LEFT JOIN treatment_type AS tre
            ON doc.treatment_type_id = tre.id`,
            function (err, response) {
                if (response) {
                    if (response.recordset) {
                        var query = response.recordset;

                        if (search) {
                            query = query.filter((a) => (a.name + " " + a.lastname).includes(search)
                            ); 
                        }
                        if (treatment) {
                            query = query.filter(
                                (a) => a.treatment_type_name_id.toString() === treatment.toString()
                            );
                        }
                        if (status) {
                            query = query.filter(
                                (a) => a.treatment_type_name_id.toString() === status.toString()
                            );
                        }
                        res
                            .status(200)
                            .send(
                                respon.pagination(
                                    parseInt(pageSize),
                                    parseInt(currentPage),
                                    query
                                )
                            );
                    } else {
                        res.status(500).send(respon.error());
                    }
                } else {
                    if (err) {
                        res
                            .status(500)
                            .send(
                                respon.error(
                                    err.originalError.info.number,
                                    err.originalError.info.message
                                )
                            );
                    } else {
                        res.status(500).send(respon.error);
                    }
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;