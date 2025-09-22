const nestedObject = {
  user: {
    id: 123,
    profile: {
      name: 'John Doe',
      email: 'john.doe@example.com'
    },
    settings: {
      theme: 'dark'
    }
  },
  preferences: {
    notifications: true,
    language: 'en'
  }
};

function objectFlatten(obj, parentkey="", result = {}){
    for(const [key, value] of Object.entries(obj)){
        const newKey = parentkey ? `${parentkey}.${key}` : key;

        if(typeof value === 'object' && value !== null && !Array.isArray(value)){
            objectFlatten(value, newKey, result);
        }
        else{
            result[newKey] = value;
        }
    }

    return result;
}

const flatobj = objectFlatten(nestedObject);

console.log(flatobj);