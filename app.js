//LOCAL STORAGE ADD & DELETE

let db = {};

const addToDb = (item) => {
    //db.adir =1;
    //db['adir']=1;
    // db[item] = 1;
    // console.log(db);

    const exist = localStorage.getItem('name');
    if (exist) {
        db = JSON.parse(exist);
    }
    
    if (item in db) {
        db[item] = db[item] + 1;
    }

    else {
        db[item] = 1;
    }
    localStorage.setItem('name',JSON.stringify(db));
}

const removeFromDb = (item) => {
    const exist = localStorage.getItem('name');
    if (exist) {
        const storedItem = JSON.parse(exist);
        delete storedItem[item];
        localStorage.setItem('name',JSON.stringify(storedItem));
    }
}