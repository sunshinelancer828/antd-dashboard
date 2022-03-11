/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB
 Source Server Type    : MongoDB
 Source Server Version : 40401
 Source Host           : localhost:27017
 Source Schema         : stream

 Target Server Type    : MongoDB
 Target Server Version : 40401
 File Encoding         : 65001

 Date: 26/11/2021 08:12:15
*/


// ----------------------------
// Collection structure for rooms
// ----------------------------
db.getCollection("rooms").drop();
db.createCollection("rooms");

// ----------------------------
// Documents of rooms
// ----------------------------
db.getCollection("rooms").insert([ {
    _id: ObjectId("61a016ed5bcc262304978e1c"),
    state: NumberInt("1"),
    title: "First film",
    creator: "61a016a45bcc262304978e05",
    createdAt: ISODate("2021-11-25T23:06:21.369Z"),
    updatedAt: ISODate("2021-11-25T23:06:21.369Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("61a0172c5bcc262304978e2b"),
    state: NumberInt("1"),
    title: "Second film",
    creator: "61a016f95bcc262304978e20",
    createdAt: ISODate("2021-11-25T23:07:24.504Z"),
    updatedAt: ISODate("2021-11-25T23:07:24.504Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("61a017875bcc262304978e53"),
    state: NumberInt("1"),
    title: "Third film",
    creator: "61a017575bcc262304978e48",
    createdAt: ISODate("2021-11-25T23:08:55.684Z"),
    updatedAt: ISODate("2021-11-25T23:08:55.684Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("61a016a45bcc262304978e05"),
    role: NumberInt("1"),
    name: "venus",
    email: "sunshinelancer828@outlook.com",
    password: "$2a$12$sbqauOKkPK7UtubEMkz1CeNlQ6.mOhN.1luP2rsFyyxy9OwS5Nv8C",
    refreshTokens: [
        {
            _id: ObjectId("61a016b25bcc262304978e0a"),
            token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTAxNmE0NWJjYzI2MjMwNDk3OGUwNSIsImlhdCI6MTYzNzg4MTUyMiwiZXhwIjoxNjQwNDczNTIyLCJzdWIiOiI2MWEwMTZhNDViY2MyNjIzMDQ5NzhlMDUifQ.Ipoeu_yXqYNx0yKJc_BzQUyIJ1JXA7G1iddEOSDFHwrOFUNNCsPaCPR8d6Gl5pOwUJePqam7CIriO-j8YldWcg"
        },
        {
            _id: ObjectId("61a016dd5bcc262304978e12"),
            token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTAxNmE0NWJjYzI2MjMwNDk3OGUwNSIsImlhdCI6MTYzNzg4MTU2NSwiZXhwIjoxNjQwNDczNTY1LCJzdWIiOiI2MWEwMTZhNDViY2MyNjIzMDQ5NzhlMDUifQ.jU4SoqmDc7ZaWoMrQBKXbIhVUEGx6U_nNvdDFwUfE8yOf4PA5p3CxI5enG-tkW3Yc5BABcH5KCAaI5LsQorV9w"
        },
        {
            _id: ObjectId("61a017365bcc262304978e2f"),
            token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTAxNmE0NWJjYzI2MjMwNDk3OGUwNSIsImlhdCI6MTYzNzg4MTY1NCwiZXhwIjoxNjQwNDczNjU0LCJzdWIiOiI2MWEwMTZhNDViY2MyNjIzMDQ5NzhlMDUifQ.BT7vDcCvPEDVm817yCEuWT6mTdOdbX5uxE6P5_pamN26DhjL3-FSxd7hdBQ921rqCnYvY_qluzpcqDKhtY2NQQ"
        },
        {
            _id: ObjectId("61a017475bcc262304978e41"),
            token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTAxNmE0NWJjYzI2MjMwNDk3OGUwNSIsImlhdCI6MTYzNzg4MTY3MSwiZXhwIjoxNjQwNDczNjcxLCJzdWIiOiI2MWEwMTZhNDViY2MyNjIzMDQ5NzhlMDUifQ.SwUN1gEpV9XGACz-x-oVJNXWtNibcPwlL8DLHXSFqVmZtcEANTM3tRMjlzGhMlPPU2I-xTa6uCs4NNINqVSIvA"
        },
        {
            _id: ObjectId("61a0178e5bcc262304978e57"),
            token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTAxNmE0NWJjYzI2MjMwNDk3OGUwNSIsImlhdCI6MTYzNzg4MTc0MiwiZXhwIjoxNjQwNDczNzQyLCJzdWIiOiI2MWEwMTZhNDViY2MyNjIzMDQ5NzhlMDUifQ.1NHsovsNim9Skb1WfcT6xRlgjR2LceKdzNENil3lArsVIm1FyykRn9__wESBDBULvrU5yKd5XXTyioUAQFr26w"
        }
    ],
    createdAt: ISODate("2021-11-25T23:05:08.996Z"),
    updatedAt: ISODate("2021-11-25T23:09:02.104Z"),
    __v: NumberInt("5")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61a016f95bcc262304978e20"),
    role: NumberInt("0"),
    name: "venus1",
    email: "kindlyman828@outlook.com",
    password: "$2a$12$ninlaRJBZy1KOeo6AwzgOO63r2SLGNamZfc00RSoPfZrPrzvbEUCW",
    refreshTokens: [
        {
            _id: ObjectId("61a0171d5bcc262304978e25"),
            token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTAxNmY5NWJjYzI2MjMwNDk3OGUyMCIsImlhdCI6MTYzNzg4MTYyOSwiZXhwIjoxNjQwNDczNjI5LCJzdWIiOiI2MWEwMTZmOTViY2MyNjIzMDQ5NzhlMjAifQ.Ao3isukVBVpsZnHf7Wn1SurHE2xmzmAkrGxunyrCq0LL2PUiKYwVbv8Zrhv5oBYAaCR4mM__rsapmkwcT4H1uQ"
        },
        {
            _id: ObjectId("61a017415bcc262304978e3a"),
            token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTAxNmY5NWJjYzI2MjMwNDk3OGUyMCIsImlhdCI6MTYzNzg4MTY2NSwiZXhwIjoxNjQwNDczNjY1LCJzdWIiOiI2MWEwMTZmOTViY2MyNjIzMDQ5NzhlMjAifQ.KDOUobDAt9c4tHhChHGHMIuJRvJPwbm97rAA_49ElPuC2vWOwjlnsLe1rJLI4AV8mi9SqOmHa_c3XPQkAWbbYQ"
        }
    ],
    createdAt: ISODate("2021-11-25T23:06:33.516Z"),
    updatedAt: ISODate("2021-11-25T23:07:45.424Z"),
    __v: NumberInt("2")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61a017575bcc262304978e48"),
    role: NumberInt("0"),
    name: "venus2",
    email: "lightnight828@outlook.com",
    password: "$2a$12$XI4h9xSdR3GCbKq5Z4Gdte9GkVmdpfJPvRqAZwoX.7HnuZRjzPKAW",
    refreshTokens: [
        {
            _id: ObjectId("61a0176e5bcc262304978e4d"),
            token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTAxNzU3NWJjYzI2MjMwNDk3OGU0OCIsImlhdCI6MTYzNzg4MTcxMCwiZXhwIjoxNjQwNDczNzEwLCJzdWIiOiI2MWEwMTc1NzViY2MyNjIzMDQ5NzhlNDgifQ.bgW1yi-tWJdIp4X7D2eFvApse-pqkl0B-ih9P_fhpaW9oaYn7FULq7sxuId5Of2_YxtqKHsHGHKTTNhuhj8MsA"
        }
    ],
    createdAt: ISODate("2021-11-25T23:08:07.599Z"),
    updatedAt: ISODate("2021-11-25T23:08:30.172Z"),
    __v: NumberInt("1")
} ]);
