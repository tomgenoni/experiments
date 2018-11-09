const body = document.querySelector("body");

const API_US = "https://api.greenhouse.io/v1/boards/thumbtack/embed/offices";
const API_PH =
    "https://api.greenhouse.io/v1/boards/thumbtackphilippines/embed/offices";
const OFFICES = ["San Francisco", "Salt Lake City", "Team Philippines"];
const DEPARTMENTS = ["Information Technology"];

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

axios.all([axios.get(API_US), axios.get(API_PH)]).then(
    axios.spread((jobsUS, jobsPH) => {
        const result = _.values(
            _.merge(
                _.keyBy(jobsUS.data.offices, "id"),
                _.keyBy(jobsPH.data.offices, "id")
            )
        );

        const cleaned = sanitizeData({ offices: result });
        console.log(cleaned);
    })
);
