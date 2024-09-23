// instructions in corresponding html

//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code
    var output = [];
    for (var key in object) {
        output.push(object[key]);
    }
    return output
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) { 
    var outputArr = [];
    var outputStr = ''
    for (var key in object) {
        outputArr.push(key)
    }
    return outputStr = outputArr.join(' ')

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var outputArr = [];
    var outputStr = '';
    for (var key in object) {
        if (typeof object[key] === 'string')
        outputArr.push(object[key]);
    }
    return outputStr = outputArr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array'
    } else {
        return 'object'
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var newStr = string.charAt(0).toUpperCase() + string.slice(1);
    return newStr
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var outputArr = [];
    var outputStr = ''
    var arr = string.split(' ');
    for (i = 0; i < arr.length; i++) {
        outputArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return outputStr = outputArr.join(' ')
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var capWord = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    var msg = ('Welcome ' + capWord + '!');
    return msg
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes object w/ a name and a species and returns '<Name> is a <Species>'
function profileInfo(object) {
    var msg = ''; // declare msg variable and assign it to empty string
    // take object and access name and species keys
    var capName = object['name'].charAt(0).toUpperCase() + object['name'].slice(1); // manipulate properties so string is capitalized
    var capSpecies = object['species'].charAt(0).toUpperCase() + object['species'].slice(1);

    // return msg
    return msg = capName + ' is a ' + capSpecies

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes object
function maybeNoises(object) {
    var output = ''; // create variable to contain output and assign to empty string   
    if (object['noises'] != null && object['noises'].length > 0) {//if object has noise array
        return output = object['noises'].join(' '); // return them as a string separated by a spaces
    }
    return 'there are no noises'; // create var msg and assign to empty string
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes string of words and a word
function hasWord(string, word) {
    var arr = string.split(' '); // convert string to array
    if (arr.includes(word)) {
        return true;
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// take name and object
function addFriend (name, object) {
    object['friends'].push(name);// add name to object's friends array
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// take a name and object
function isFriend(name, object) {
    // access object friends property and check for name
    if (object['friends'] != null && object['friends'].includes(name)) {
        return true//return true if name is a frined
    }
   return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Input: name(string) array(of Objects)
// Output: new array listing the the non friends of <name> from <array>
// If a name appears in a given friend array, the reverse will be true as well. Therefore, we can check for friend status of input name by iterating through the other object arrays
function nonFriends(name, array) {
    // create variable to contain our nonFriends list and assign it to empty array
    var nonFriends = [];
    // create loop to iterate through the input array to access each object
    for (var i = 0; i < array.length; i++) {
        // initialize friends variable and assign it to the friends property associated with the Object at the current index
        var friends = array[i].friends
        // create test variable isFriend and assign it falsey boolean 
        var isFriend = false;
        // use if statment to check the name property associated with the Object at current index against the input name String
        if (array[i].name !== name) {
            // iterate through friends array of current Object if name property does not match name string
            for (var j = 0; j < friends.length; j++ ) {
                // if the name String is found in the current Object's name array
                if (friends[j] === name) {
                    // isFriend reassigned to Truthy
                    isFriend = true;
                }
            } // if isFriend has remained Falsey
            if (!isFriend) {
                // add the value from the current Object's name property to the nonFriends array
                nonFriends.push(array[i].name);
            }
        }
    }  // return nonFriends list
    return nonFriends    
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// update property key on object w/ new value
// if key does not exst create it
function updateObject(object, key, value) {
    object[key] = value;
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


function removeProperties(object, array) {
    for (i = 0; i < array.length; i++) {
        delete object[array[i]]
    }
 return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var uniqueArray = array.filter(function(value, index) {
        return array.indexOf(value) == index;
    })
    return uniqueArray
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}