import Mock from 'mockjs';

const data = Mock.mock("localhost",{
    "list|50-70" : [{
        'key|+1': 1,
        'Job_title|+1': 'L_' + '@string("lower", 14, 19)',
        'date': '@Date',
        'state|1': '@Boolean'.toString()
    }]
});

export default data;