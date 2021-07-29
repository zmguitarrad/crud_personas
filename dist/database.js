"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'lmoibtqyrewrbq',
    host: 'ec2-44-194-183-115.compute-1.amazonaws.com',
    password: 'e5d2d4c329e7306da4edbff86f6514f0523744ec281a23477c61ba46a585151e',
    database: 'd3s8rs1pjsat6r',
    port: 5432
});
