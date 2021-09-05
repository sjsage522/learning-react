function Vacation(dest, len) {
    this.dest = dest;
    this.len = len;
}

Vacation.prototype.print = function () {
    console.log(this.dest + "은(는) " + this.len + " 일 걸립니다.");
};

const maui = new Vacation("마우이", 7);
maui.print();