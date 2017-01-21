"use strict";
var Category;
(function (Category) {
    Category[Category["Fiction"] = 0] = "Fiction";
    Category[Category["FictionHistory"] = 1] = "FictionHistory";
    Category[Category["YoungAdult"] = 2] = "YoungAdult";
    Category[Category["ScienceFiction"] = 3] = "ScienceFiction";
    Category[Category["Novel"] = 4] = "Novel";
    Category[Category["Romance"] = 5] = "Romance";
    Category[Category["HistoricalNovel"] = 6] = "HistoricalNovel";
    Category[Category["Horror"] = 7] = "Horror";
    Category[Category["NonFiction"] = 8] = "NonFiction";
})(Category || (Category = {}));
exports.Category = Category;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Unknown"] = 2] = "Unknown";
})(Gender || (Gender = {}));
exports.Gender = Gender;
//# sourceMappingURL=enums.js.map