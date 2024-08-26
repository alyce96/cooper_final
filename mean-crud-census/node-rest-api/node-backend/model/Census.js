const mongoose = require('mongoose');
const Entry = mongoose.Entry;

let CensusEntry = new Entry({
    Year_of_the_Census: { type: String },
    Census_Taker_Name: { type: String },
    Number_of_People_in_Household: { type: String },
    Household_State: { type: String },
    Household_City: { type: String },
    
}, {
    collection: 'Census'
});

module.exports = mongoose.model('Census', CensusEntry);
