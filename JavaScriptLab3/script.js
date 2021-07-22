const submissions = [
    {
        name: "Jane", 
        score: 95, 
        date: "2020-01-24", 
        passed: true,
        address: [{street: "123 Main Street", city: "Ypsilanti", state: "MI", zip: "48198"}]
    },
    {
        name: "Joe", 
        score: 99, 
        date: "2018-05-14", 
        passed: true,
        address: [{street: "1202 Main Street", city: "Manteca", state: "CA", zip: "95336"}]
    },
    {
        name: "Jack", 
        score: 58, 
        date: "2019-07-05", 
        passed: false,
        address: [{street: "7564 Main Street", city: "Madison", state: "WI", zip: "01928"}]
    },
    {
        name: "Jill", 
        score: 85, 
        date: "2020-04-22", 
        passed: true,
        address: [{street: "456 Main Street", city: "Chicago", state: "IL", zip: "34567"}]
    },
];
//console.log(submissions);

function addSubmission(array, newName, newScore, newDate, address) {

    const newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false,
        address: {}
    };
    
    array.push(newSubmission);
}
//addSubmission(submissions, 'Taylor', 90, '2021-07-19');
//console.log(submissions[4]);

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
};
//deleteSubmissionByIndex(submissions, 0);
//console.log(submissions);

function deleteSubmissionByName(array, name) {
    const index = array.findIndex(item => item.name === name);
    
    deleteSubmissionByIndex(array, index);
};
//deleteSubmissionByName(submissions, "Jill");
//console.log(submissions);

function editSubmission(array, index, score) {
    const item = array[index];
    item.score = score;
    item.passed = score >= 60 ? true : false;
};
//editSubmission(submissions, 1, 89);
//console.log(submissions);

function findSubmissionByName(array, name) {
    return array.find(item => item.name === name)
};
//console.log(findSubmissionByName(submissions, "Jack"));

function findLowestScore(array) {
    let lowest = array[0];
    array.forEach(element => {
        if (element.score < lowest.score)
        lowest = element;
    });
    return lowest;
};
//console.log(findLowestScore(submissions));

function findAverageScore(array) {
    let average = 0;
    for (let item of array) {
        average += item.score;
    }

    average = average / array.length;
    return average;

};
//console.log(`Average of all scores is: ${findAverageScore(submissions)}`);

function filterPassing(array) {
    return array.filter(item => item.passed === true);
};
//console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
    const highScores = array.filter((element) =>
    element.score >= 90)
    return highScores;
}
//console.log(filter90AndAbove(submissions));

function findSubmissionByState(array, state){
    array.filter(item => item.address === address);
    array.filter(address => address.state === state);
  }
console.log(findSubmissionByState(submissions, "MI"));