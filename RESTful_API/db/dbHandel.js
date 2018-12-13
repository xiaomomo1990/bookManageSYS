import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import models from "./models.js";

for (var item in models) {
    mongoose.model(item, new Schema(models[item]));
}

var _getModel = function(type) {
    return mongoose.model(type);
}

export const dbHandel = {
    getModel: function(type) {
        return _getModel(type);
    }
}
