let menu = {
    courses: 
    {
     appetizers: [],
     mains: [], 
     desserts: []
    },
    addDishtoCourse: function (courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        }
        dish.push(menu.courses(courseName))
    }
    };

