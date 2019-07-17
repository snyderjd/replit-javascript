/* Practice: Automated Minivan Manufacturing with Functions

You need to simulate how a minivan gets manufactured.Modern manufacturing is largely automated, and as the vehicle and parts move down the assembly line, there are 6 stations which assemble different parts of the vehicle.

1. Chassis Station
2. Engine Station
3. Suspension Station
4. Exhaust Station
5. Body Station
6. Interior Station

Chassis Station

Define an addChassis function that generates an object with a property of  chassis and its value should be "Minivan".This function should take no arguments, and should return the object. */

const addChassis = () => {
    const newVehicle = {
        chassis: "Minivan"
    }

    return newVehicle;
};


// ---------- Engine Station ----------
// Define an addEngine function that accepts an object as a parameter. You should verify that the object has a chassis property using the prop in object operator.
//This function should add a new property to the incoming object named engine and its value should be "V6" . The function should then return the object.

const addEngine = (object) => {
    if ('chassis' in object) {
        object.engine = "V6";
    }
    return object;
};

// ---------- Suspension Station ----------
// Define an addSuspension function that accepts an object as a parameter.You should verify that the object has a chassis property, and an engine property.This function should add a new property named suspension and its value should be "independent".The function should return the object.


const addSuspension = (object) => {
    if ('chassis' in object && 'engine' in object) {
        object.suspension = "independent";
    }
    return object;
};

// ---------- Exhaust Station ----------
// Define an addExhaust function that accepts an object as a parameter.You should verify that the object has a chassis property, an engine property, and a suspension property.This function should add a new property named exhaust and its value should be "dual side exhaust".The function should return the object.

const addExhaust = (object) => {
    if ('chassis' in object && 'engine' in object && 'suspension' in object) {
        object.exhaust = "dual side exhause";
    }
    return object;
};

// ---------- Body Station ----------

// Define an addBody function that accepts an object as a parameter.You should verify that the object has a chassis property, an engine property, a suspension property, and an exhaust property.This function should add a new property named body and its value should be "minivan".The function should return the object.

const addBody = (object) => {
    if ('chassis' in object && 'engine' in object && 'suspension' in object && 'exhaust' in object) {
        object.body = "minivan";
    }
    return object;
};

// ---------- Interior Station ----------

// Define an addInterior function that accepts an object as a parameter.You should verify that the object has a chassis property, an engine property, a suspension property, and a body property.This function should add a new property named interior and its value should be "leather".The function should return the object.

// After the minivan object has been completed, output the final object to the console.

const addInterior = (object) => {
    if ('chassis' in object && 'engine' in object && 'suspension' in object && 
        'exhaust' in object && 'body' in object) {
            object.interior = "leather";
        }
        return object;
};

// Run addChassis to generate object with chassis
const chassis = addChassis();
console.log(chassis);

// Run addEngine, taking in the object from addChassis and adding an engine
const engine = addEngine(chassis);
console.log(engine); 

// Run addSuspension, taking in the object from addEngine and adding a suspension
const suspension = addSuspension(engine);
console.log(suspension);

// Run addExhaust, taking in the object from addSuspension and adding an exhaust
const exhaust = addExhaust(suspension);
console.log(exhaust);

// Run addBody, taking in the object from addExhaust and adding a body
const body = addBody(exhaust);
console.log(body);

// Run addInterior, taking in the object from addBody and adding an interior
const interior = addInterior(body);
console.log(interior);