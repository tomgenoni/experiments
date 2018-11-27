const API_US = "https://api.greenhouse.io/v1/boards/thumbtack/embed/offices";
const API_PH =
    "https://api.greenhouse.io/v1/boards/thumbtackphilippines/embed/offices";
const OFFICES = ["San Francisco", "Salt Lake City", "Team Philippines"];
const DEPARTMENTS = [
    "Engineering",
    "Design",
    "Product",
    "Marketing",
    "Business and Operations",
    "Human Resources",
    "Information Technology"
];

const sanitizeData = response => {
    return _.mergeWith(
        ..._.map(
            _.filter(response.offices, office =>
                _.includes(OFFICES, office.name)
            ),
            office =>
                _.fromPairs(
                    _.map(
                        _.filter(office.departments, dep =>
                            _.includes(DEPARTMENTS, dep.name)
                        ),
                        dep => [dep.name, dep.jobs]
                    )
                )
        ),
        _.ary(_.concat, 2)
    );
};

fetch(API_US)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const result = sanitizeData(data);
        console.log(result);
    });
