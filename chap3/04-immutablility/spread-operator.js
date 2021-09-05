let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

const rate_color = (color, rating) => {
    return {
        ...color,
        rating
    }
}

console.log(rate_color(color_lawn, 5).rating);
console.log(color_lawn.rating);