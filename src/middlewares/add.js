import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADD') {
        request.post('/add')
            .send({text:action.text,time:new Date().toLocaleDateString()})
            .end((err, res) => {
                alert("添加成功！");
                next(action);
            });
    }
    else
        next(action);
}