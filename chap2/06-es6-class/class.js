class Vacation {

    constructor(dest, len) {
        this.dest = dest;
        this.len = len;
    }

    print() {
        console.log(`${this.dest}은(는) ${this.len} 일 걸립니다.`);
    }
}

const trip = new Vacation("칠레 산티아고", 7);
trip.print();

/* extends */
class Expedition extends Vacation {

    constructor(dest, len, gear) {
        super(dest, len);
        this.gear = gear;
    }

    print() {
        super.print();
        console.log(`당신의 ${this.gear.join("와(과) 당신의 ")}를(을) 가져오십시오.`);
    }
}

const trip2 = new Expedition("한라산", 3, ["선글라스", "오색 깃발", "카메라"]);
trip2.print();