const a = [
    {
        name: "tom",
        car: "foo"
    }
];

const b = [
    {
        name: "dan",
        car: "bar"
    }
];

var result = _.values(_.merge(_.keyBy(a, "name"), _.keyBy(b, "name")));

console.log(result);
