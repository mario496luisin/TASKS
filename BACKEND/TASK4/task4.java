// I made this code with Java. 
// I define interface Animal that has two methods eat and move. 
// Then I have created 4 interfaces that has to integrate in the move method.
// After I have created every class with the animals and each one are implementing on its method depending on the animal features.

interface Animal {
	public void eat();
	public void move();
}

/* This interfaces will integrate in the move method */ 

interface HavePeak {
    int move();
}

interface Flyable {
    int move();
}

interface Swimmable {
    int move();
}

interface Walkable {
    int move();
}


class Monkey implements Animal, Walkable {
    public void eat() {
        System.out.println("eats bananas")
    }
    public void move() {
        Sytem.out.println("walk by the jungle")
    }
}

class Dolphin implements Animal, Swimmable {
    public void eat() {
        System.out.println("eats small fishes")
    }
    public void move() {
        Sytem.out.println("swim in the pacific ocean")
    }
}

class Bat implements Animal,Flyable {
    public void eat() {
        System.out.println("eats insects")
    }
    public void move() {
        Sytem.out.println("fly in the night")
    }
}

class Penguin implements Animal,Walkable,HavePeak {
    public void eat() {
        System.out.println("eats sardines")
    }
    public void move() {
        Sytem.out.println("walk in the north pole")
    }
}

class Duck implements Animal,HavePeak,Walkable,Swimmable {
    public void eat() {
        System.out.println("eats worms")
    }
    public void move() {
        Sytem.out.println("swim in the pond and walk")
}