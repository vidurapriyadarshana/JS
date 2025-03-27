function human(name) {
    function sayHi(){
        console.log(`Hi, I am ${name}`);
    }

    function sayHowYouFeel() {
        console.log(`Feeling good, ${name}`);
    }

    return {
        sayHi,
        sayHowYouFeel
    };
}

const vidura = human('Vidura'); //looking up to the value

//stores the value 

vidura.sayHi();          // vidura.sayHi = sayHi
vidura.sayHowYouFeel();   // vidura.sayHowYouFeel = sayHowYouFeel
