import React from 'react';

const Todo = ({title, i}) => {
    return (<li> {i+1}. 할일 {title}</li>)
};

export default Todo;